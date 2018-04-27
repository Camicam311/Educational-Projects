#include <stdio.h>
#include <stdlib.h>
#include <iostream>

#include <GL/glut.h>
#include "Window.h"
#include "Matrix4.h"
#include "main.h"
#include "Robot.h"
#include <vector>
#include <math.h>

using namespace std;

void processNormalKeys(unsigned char key, int x, int y);
float RandomFloat(float min, float max); //Generate random float between min and max

static int num_bots = 200;
static bool enable_wires = false;
MatrixTransform* worldRotateXTransform; 
MatrixTransform* worldRotateYTransform;
MatrixTransform* worldRotateZTransform;
MatrixTransform* worldZoomTransform; 
double wld_x_rotate_angle = 0;
double wld_y_rotate_angle = 0;
double wld_z_rotate_angle = 0;
static double zoom_factor = 1; // means no zoom

namespace Globals
{
	SceneGraph world;
	Matrix4 Camera;
	FrustumG frustum;
	Vector3 e;
	Vector3 d;
	Vector3 up;
	bool has_culling;
	vector<Robot*> robotGroup;
};

int main(int argc, char *argv[])
{
  float specular[]  = {1.0, 1.0, 1.0, 1.0};
  float shininess[] = {100.0};
  float position[]  = {0.0, 10.0, 1.0, 0.0};	// lightsource position
  
  glutInit(&argc, argv);      	      	      // initialize GLUT
  glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGB | GLUT_DEPTH);   // open an OpenGL context with double buffering, RGB colors, and depth buffering
  glutInitWindowSize(Window::width, Window::height);      // set initial window size
  glutCreateWindow("DOMO ORINGATO MR. ROBOTO");    	      // open window and set window title

  glEnable(GL_DEPTH_TEST);            	      // enable depth buffering
  glClear(GL_DEPTH_BUFFER_BIT);       	      // clear depth buffer
  glClearColor(0.0, 0.0, 0.0, 0.0);   	      // set clear color to black
  glPolygonMode(GL_FRONT_AND_BACK, GL_FILL);  // set polygon drawing mode to fill front and back of each polygon
  glDisable(GL_CULL_FACE);     // disable backface culling to render both sides of polygons
  glShadeModel(GL_SMOOTH);             	      // set shading to smooth
  glMatrixMode(GL_PROJECTION); 
  
  // Generate material properties:
  glMaterialfv(GL_FRONT_AND_BACK, GL_SPECULAR, specular);
  glMaterialfv(GL_FRONT_AND_BACK, GL_SHININESS, shininess);
  glColorMaterial(GL_FRONT_AND_BACK, GL_AMBIENT_AND_DIFFUSE);
  glEnable(GL_COLOR_MATERIAL);
  
  // Generate light source:
  glLightfv(GL_LIGHT0, GL_POSITION, position);
  glEnable(GL_LIGHTING);
  glEnable(GL_LIGHT0);

  // Install callback functions:
  glutDisplayFunc(Window::displayCallback);
  glutReshapeFunc(Window::reshapeCallback);
  glutIdleFunc(Window::idleCallback);
  glutKeyboardFunc(processNormalKeys);

  /*------- Define The Scene Graph --------*/
	Vector3 e(0,30,50);
	Vector3 d(0,0,-20);
	Vector3 up(0,1,0);
	Matrix4 Camera;
	Globals::Camera.makeCamera(e,d,up);
	Globals::e = e;
	Globals::d = d;
	Globals::up = up;
	Globals::has_culling = true;
	Globals::frustum.setCamInternals(60.0, double(Window::width)/(double)Window::height, 1.0, 1000.0);
	Globals::frustum.setCamDef(Globals::e, Globals::d, Globals::up);

  /*------- Define The Scene Graph --------*/
  Matrix4 worldXRotation;
  worldXRotation.identity();
  worldXRotation.makeRotateX(wld_x_rotate_angle);
  worldRotateXTransform = new MatrixTransform(worldXRotation);

  Matrix4 worldYRotation;
  worldYRotation.identity();
  worldYRotation.makeRotateY(wld_y_rotate_angle);
  worldRotateYTransform = new MatrixTransform(worldYRotation);

  Matrix4 worldZRotation;
  worldZRotation.identity();
  worldZRotation.makeRotateZ(wld_z_rotate_angle);
  worldRotateZTransform = new MatrixTransform(worldZRotation);

  Matrix4 worldZoom;
  worldZoom.identity();
  worldZoom.makeScale(zoom_factor,zoom_factor,zoom_factor);
  worldZoomTransform = new MatrixTransform(worldZoom);

  Globals::world.root = new Group();
  Group* world = Globals::world.root;
  world->addChild(worldRotateXTransform);
  worldRotateXTransform->addChild(worldRotateYTransform);
  worldRotateYTransform->addChild(worldRotateZTransform);
  worldRotateZTransform->addChild(worldZoomTransform);
  
  //Create The Floor Plane
  Matrix4 floorScale;
  floorScale.identity();
  floorScale.makeScale(1000, 0.1, 1000);
  floorScale.makeTranslate(0,-5,0);
  MatrixTransform* floorScaleTransform = new MatrixTransform(floorScale);

  Cube* wld_floor = new Cube(false, 1, Vector3(0,1,0));

  worldZoomTransform->addChild(floorScaleTransform);
  floorScaleTransform->addChild(wld_floor);

 

  //Create the army of robots in the world
  int row_size = floor(sqrt(num_bots));

  for(int i = 0; i<num_bots; i++) {
		//Give the robot a random color
		double r = RandomFloat(0,1);
		double g = RandomFloat(0,1);
		double b = RandomFloat(0,1);

		//populate the robots vector
		Globals::robotGroup.push_back(new Robot(enable_wires, Vector3(r,g,b)));
  }


  double x_trans = -50;
  double y_trans = 10;
  double z_trans = -100;
  int botNdx = 0;
  int num_bots_in_row = 0;
  while(botNdx < num_bots) {
	  Matrix4 robotTranslation;
	  robotTranslation.identity();
	  robotTranslation.makeTranslate(x_trans, y_trans, z_trans);
	  MatrixTransform* robotTranslationTransform = new  MatrixTransform(robotTranslation);

	  worldZoomTransform->addChild(robotTranslationTransform);
	  robotTranslationTransform->addChild(Globals::robotGroup.at(botNdx)->root);

	  x_trans += 20;
	  if(num_bots_in_row > row_size) {
			num_bots_in_row = 0;
			z_trans += 20;
			x_trans = -30;
	  }
	  botNdx++;
	  num_bots_in_row++;
  }
  /*------- Start Rendering Process --------*/
  Globals::world.root = world;
    
  glutMainLoop();
  return 0;
}

void processNormalKeys(unsigned char key, int x, int y) {
	switch(key) {
		case 'r': {
			//cout << "spin each individual robot" << endl;
			for(int i=0; i<num_bots; i++) {
				Globals::robotGroup.at(i)->spin(10);
			}
		} break;
	
		case 'w':{
			//cout << "march robots in place" << endl;
			for(int i=0; i<num_bots; i++) {
				Globals::robotGroup.at(i)->walk(10);
			}
			
		 } break;
		case 'b': {
			//toggle the bounding spheres
			enable_wires = (!enable_wires);
			for(int i=0; i<num_bots; i++) {
				Globals::robotGroup.at(i)->setWires(enable_wires);
			}
		} break;
		case 'c': {
			//toggle the culling
			Globals::has_culling = (!Globals::has_culling);
			Globals::world.setFrustum(&Globals::frustum, Globals::has_culling);
			cout << "Culling Has Been Toggled To " << Globals::has_culling << endl;
		} break;
		case 'x': {
		  //Rotate Around The X Axis
			wld_x_rotate_angle += 10;

			Matrix4 worldXRotation;
			worldXRotation.identity();
			worldXRotation.makeRotateX(wld_x_rotate_angle);

		    if (wld_x_rotate_angle > 360.0 || wld_x_rotate_angle < -360.0) wld_x_rotate_angle = 0.0;
			worldRotateXTransform->update(worldXRotation);
		} break;
		case 'y': {
		 //Rotate Around The Y Axis
			wld_y_rotate_angle += 10;

			Matrix4 worldYRotation;
			worldYRotation.identity();
			worldYRotation.makeRotateY(wld_y_rotate_angle);


		    if (wld_y_rotate_angle > 360.0 || wld_y_rotate_angle < -360.0) wld_y_rotate_angle = 0.0;
			worldRotateXTransform->update(worldYRotation);
		} break;
		case 'z': {
		//Rotate Around The Z Axis
			wld_z_rotate_angle += 10;

			Matrix4 worldZRotation;
			worldZRotation.identity();
			worldZRotation.makeRotateZ(wld_z_rotate_angle);

	
		if (wld_z_rotate_angle > 360.0 || wld_z_rotate_angle < -360.0) wld_z_rotate_angle = 0.0;
			worldRotateXTransform->update(worldZRotation);
		} break;
		case 'i': {
			zoom_factor -= 0.1;
			Matrix4 worldZoom;
			worldZoom.identity();
			worldZoom.makeScale(zoom_factor, zoom_factor, zoom_factor);

			worldZoomTransform->update(worldZoom);
		} break;
		case 'I': {
			zoom_factor += 0.1;
			Matrix4 worldZoom;
			worldZoom.identity();
			worldZoom.makeScale(zoom_factor, zoom_factor, zoom_factor);

			worldZoomTransform->update(worldZoom);
		}
	}
	
}

float RandomFloat(float min, float max)
{
    float random = ((float) rand()) / (float) RAND_MAX;
    // generate (in your case) a float between 0 and (4.5-.78)
    // then add .78, giving you a float between .78 and 4.5
    float range = max - min;  
    return (random*range) + min;
}