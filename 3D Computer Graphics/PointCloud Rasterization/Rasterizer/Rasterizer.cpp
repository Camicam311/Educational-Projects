#ifdef _WIN32
  #include <windows.h>
#endif

#include <iostream>
#include <math.h>
#include "PointCloud.h"
#include "House.h"
#include <GL/gl.h>
#include <GL/glut.h>

static int window_width = 512, window_height = 512;
static float* pixels = new float[window_width * window_height * 3];
static float** z_buffer = new float*[window_height];
static bool has_light = false;
static bool has_z_buffer = false;
static bool scale_points = false;
static Matrix4 MProj; 
static Matrix4 MCam;
static Matrix4 MModel;
static Matrix4 MView;
PointCloud bunny, dragon;
PointCloud* active_cloud;
using namespace std;

struct Color    // generic color class
{
  float r,g,b;  // red, green, blue
};

void resetZBuffer() {
  z_buffer = new float*[window_height];
  for(int i=0; i<window_height; i++) {
	z_buffer[i] = new float[window_width];	
	for(int j=0; j<window_width; j++) {
		z_buffer[i][j] = 1;
	}
  }
}

void clearZBuffer() {
  for(int i=0; i<window_height; i++) {
	delete[] z_buffer[i]; //go inside and delete each inner array of z_buffer
  }
  delete[] z_buffer;
}

PointCloud loadCloud(char* filename) {
	PointCloud model(filename);
	model.calcExtremeCoordinates();
	Vector3 center_translation = model.calcTranslateCenter();
	model.move(center_translation.getX(), center_translation.getY(), center_translation.getZ());
	double max_scaling = model.calcMaxScaling();
	model.scale(max_scaling);
	return model;
}

void setActiveModel(PointCloud& model) {
	active_cloud = &model;
	MModel = model.model2world;
}

void loadData() {
	resetZBuffer();
	Vector3 e(0,0,20);
	Vector3 d(0,0,0);
	Vector3 up(0,1,0);
	MCam.makeCamera(e,d,up);
	MView.makeViewport(window_width,window_height);
	MProj.makeProjection(60, (window_width/window_height), 1, 1000);
	bunny = loadCloud("pointclouds/bunny.xyz");
	dragon = loadCloud("pointclouds/dragon.xyz");
	setActiveModel(bunny);
}

// Clear frame buffer
void clearBuffer()
{
  Color clearColor = {0.0, 0.0, 0.0};   // clear color: black
  for (int i=0; i<window_width*window_height; ++i)
  {
    pixels[i*3]   = clearColor.r;
    pixels[i*3+1] = clearColor.g;
    pixels[i*3+2] = clearColor.b;
  }  
}

// Draw a point into the frame buffer
void drawPoint(int x, int y, float r, float g, float b)
{

  int offset = y*window_width*3 + x*3;
  if (offset < window_width * window_height * 3) {
	  pixels[offset] = r;
	  pixels[offset + 1] = g;
	  pixels[offset + 2] = b;
  }
}

void drawScaledPoint(int x_start, int y_start, int sq_size, float r, float g, float b) {
	for (int i = 0; i < sq_size; i++) {
		for (int j = 0; j < sq_size; j++)
				drawPoint(x_start + i, y_start + j, r, g, b);
	}
}

Vector3 shadePoint(Vector3 p, Vector3 n,  Vector3 v, double b, Vector3 light_color, Vector3 point_color) {
	Vector3 L = (p - v);
	L.normalize();
	double radius = (p-v).length();
	double light_factor = (L.dot(n,L)/(M_PI*radius*radius))*b; //TODO change the code definition for dot product, awkward syntax
	Vector3 light_vector((light_color.getX()*point_color.getX()), (light_color.getY()*point_color.getY()), (light_color.getZ()*point_color.getZ()));
	return Vector3(light_vector.getX()*light_factor, light_vector.getY()*light_factor, light_vector.getZ()*light_factor);
};

bool isInCanonicalView(Vector4 vec) {
	if(vec.getX() < 1 && vec.getX() > -1 && vec.getZ() < 1 && vec.getZ() > -1 && vec.getY() < 1 && vec.getY() > -1)
		return true;
	return false;
}

int calcPointSize(float z) {
	float z_max = 1;
	float z_min = 0;
	int level1 = 1; int level2 = 2;  int level3 = 3; int level4 = 4; int level5 = 5;
	if (z >= z_min && z < z_max/1.4) return level5;
	if (z > z_max/5 && z < z_max/1.2) return level4;
	if (z > z_max/4 && z < z_max/1.25) return level3;
	if (z > z_max/3 && z < z_max/1.1) return level2;
	return level1;
}

// rasterizeVertex - Given an array of point coordinates, draw each point onto the screen
void rasterizeVertex(PointCloud pointcloud, bool has_light=false, bool has_buffering=false, bool scale_points=false) {
	Matrix4 canonicalMatrix = MProj*MCam*MModel;
	vector<Vector3> positions = pointcloud.positions;
	vector<Vector3> normals = pointcloud.normals;

	for(int i=0; i<positions.size(); i++) {
		Vector4 posVec(positions[i].getX(),positions[i].getY(),positions[i].getZ(),1);
		Vector4 posVecPrime = canonicalMatrix*posVec;
		posVecPrime.dehomogenize();
		if(isInCanonicalView(posVecPrime)) {
			Vector4 imgVec = MView*posVecPrime;
			float x = imgVec.getX();
			float y = imgVec.getY();
			float z = imgVec.getZ();
			Vector3 shader(1,1,1);
			if(has_light) {
				Vector4 wldpos = MModel * Vector4(positions.at(i).getX(), positions[i].getY(), positions[i].getZ(), 0);
				Vector4 wldnormal = MModel * Vector4(normals.at(i).getX(), normals[i].getY(), normals[i].getZ(), 0);
				shader = shadePoint(Vector3(0,5,-15), Vector3(wldnormal.getX(),wldnormal.getY(),wldnormal.getZ()), Vector3(wldpos.getX(),wldpos.getY(),wldpos.getZ()), 12, Vector3(1,1,1), Vector3(1,1,1));
			}
			if(has_buffering) {
				int cur_x = x; //casted from the imgVec
				int cur_y = y; 	
				float cur_z = posVecPrime.getZ();
				if(cur_z < z_buffer[cur_y][cur_x]) {
					z_buffer[cur_y][cur_x] = cur_z;
					if (scale_points == true) {
						drawScaledPoint(cur_x, cur_y, calcPointSize(posVecPrime.getZ()), shader.getX(), shader.getY(), shader.getZ());
					} else
						drawPoint(cur_x,cur_y,shader.getX(),shader.getY(),shader.getZ());
				}	
			} else {  
				if (scale_points == true) {
					drawScaledPoint(x, y, calcPointSize(posVecPrime.getZ()), shader.getX(), shader.getY(), shader.getZ());
				} else
					drawPoint(x, y, shader.getX(), shader.getY(), shader.getZ());
			}
		}
	}
}

void rasterize() {
	rasterizeVertex(*(active_cloud), has_light, has_z_buffer, scale_points);
}

void displayCallback()
{
  //re-initialize z_buffer
  resetZBuffer();
  clearBuffer();
  rasterize();

  // glDrawPixels writes a block of pixels to the framebuffer
  glDrawPixels(window_width, window_height, GL_RGB, GL_FLOAT, pixels);

  glutSwapBuffers();
}

// Called whenever the window size changes
void reshapeCallback(int new_width, int new_height)
{
  clearZBuffer();
  window_width  = new_width;
  window_height = new_height;
  delete[] pixels;
  pixels = new float[window_width * window_height * 3];
  MView.makeViewport(window_width,window_height);
  MProj.makeProjection(60, (window_width/window_height), 1, 1000);
  displayCallback();
}

void keyboardCallback(unsigned char key, int, int)
{
  switch(key) {
  case 'o': {
	  active_cloud->model2world.identity();
	  Vector3 center_translation = active_cloud->calcTranslateCenter();
	  active_cloud->move(center_translation.getX(), center_translation.getY(), center_translation.getZ());
	  double max_scaling = active_cloud->calcMaxScaling();
	  active_cloud->scale(max_scaling);
  } break;
  case 'r': {
	  active_cloud->spin(30); 
	} break;
  case 'R': {
	 active_cloud->spin(-30); 
  } break;
  case 's': {
	 active_cloud->scale(0.8); 
	} break;
  case 'S': {
	 active_cloud->scale(1.2); 
	} break;
  case 'x': {
				active_cloud->move(1,0,0);
  } break;
  case 'X': {
				active_cloud->move(-1, 0, 0);
  } break;
  case 'y': {
				active_cloud->move(0, 1, 0);
  } break;
  case 'Y': {
				active_cloud->move(0, -1, 0);
  } break;
  case 'z': {
				active_cloud->move(0, 0, 1);
  } break;
  case 'Z': {
				active_cloud->move(0, 0, -1);
  } break;
  case '1': {
	  has_light = false;
	} break;
  case '2': {
	  has_light = true;
	} break;
  case '3': {
	  has_z_buffer = (!has_z_buffer);	
	} break;
  case '4': {
	  scale_points = (!scale_points);
	} break;
  }
  //Update the model and display
  MModel = active_cloud->model2world;
  displayCallback();
}

void specialKeysCallback(int key, int x, int y)
{
  switch(key) {
		case GLUT_KEY_F1: {
			cout << "F1 Key Pressed" << endl;
			setActiveModel(bunny);
	    } break;
		case GLUT_KEY_F2: {
			cout << "F2 Key Pressed" << endl;
			setActiveModel(dragon);
	    } break;
	 }
  	displayCallback();
}


int main(int argc, char** argv) {
  glutInit(&argc, argv);

  glutInitDisplayMode(GLUT_RGB | GLUT_DOUBLE);
  glutInitWindowSize(window_width, window_height);
  glutCreateWindow("Rasterizer");
 
  loadData();

  glutReshapeFunc(reshapeCallback);
  glutDisplayFunc(displayCallback);
  glutKeyboardFunc(keyboardCallback);
  glutSpecialFunc(specialKeysCallback);
  glutMainLoop();
}