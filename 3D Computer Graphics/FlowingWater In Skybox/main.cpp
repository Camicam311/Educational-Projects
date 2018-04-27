#include <iostream>
#include "main.h"
#include "SOIL/SOIL.h"


using namespace std;

namespace Globals {
  BezierPatch patch;
  Matrix4 camera; 
  CubeMap cube_map;
  Shader* shader;
  bool has_reflection;
};

void processNormalKeys(unsigned char key, int x, int y);
GLuint loadCubemap(vector<const GLchar*> faces);

//Q: The only light that shows is my ambient light. Why??
int main(int argc, char *argv[])
{
	float specular[]  = {0.0, 0.0, 1.0, 1.0};
	float shininess[] = {100.0};
	float ambient[] = {0,0,1,0};
	float diffuse[] = {0,0,1,1};
	float position[]  = {0.0,5.0, 1.0, 0.0};	// lightsource0 position
  
	glutInit(&argc, argv);      	      	      // initialize GLUT
	glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGB | GLUT_DEPTH);   // open an OpenGL context with double buffering, RGB colors, and depth buffering
	glutInitWindowSize(Window::width, Window::height);      // set initial window size
	glutCreateWindow("Bezier surfaces");    	      // open window and set window title

	glEnable(GL_DEPTH_TEST);            	      // enable depth buffering
	glClear(GL_DEPTH_BUFFER_BIT);       	      // clear depth buffer
	glClearColor(0.0, 0.0, 0.0, 0.0);   	      // set clear color to black
	glPolygonMode(GL_FRONT_AND_BACK, GL_FILL);  // set polygon drawing mode to fill front and back of each polygon
	glDisable(GL_CULL_FACE);     // disable backface culling to render both sides of polygons
	glShadeModel(GL_SMOOTH);             	      // set shading to smooth
	glMatrixMode(GL_PROJECTION); 
  
	glEnable(GL_LIGHTING);

	// Generate light source:
	glLightfv(GL_LIGHT0, GL_AMBIENT, ambient);
	glLightfv(GL_LIGHT0, GL_DIFFUSE, diffuse);
	glLightfv(GL_LIGHT0, GL_SPECULAR, specular);
	glLightfv(GL_LIGHT0, GL_POSITION, position);

	glEnable(GL_LIGHT0);

	/* ---------- Initialize Camera ---------*/
	Matrix4 camera;
	camera.identity();
	camera.makeCamera(Vector3(0,2,2), Vector3(1,1,1), Vector3(0,1,0));
	//camera.makeCamera(Vector3(-8,-16,-8), Vector3(16,0,0), Vector3(0,1,0));
	Globals::camera = camera;

	/*---------------- Render The Bezier Patch --------------*/ 
	BezierPatch patch;
	Globals::patch = patch;

	// Install callback functions:
	glutDisplayFunc(Window::displayCallback);
	glutReshapeFunc(Window::reshapeCallback);
	glutIdleFunc(Window::idleCallback);
	glutKeyboardFunc(processNormalKeys);

	/*---------------- Load the shader --------------*/
	vector<const GLchar*> faces;
	faces.push_back("skybox/bridge/right.jpg");
	faces.push_back("skybox/bridge/left.jpg");
	faces.push_back("skybox/bridge/top.jpg");
	faces.push_back("skybox/bridge/base.jpg");
	faces.push_back("skybox/bridge/back.jpg");
	faces.push_back("skybox/bridge/front.jpg");
	GLuint cubemapTexture = loadCubemap(faces);
	glActiveTexture(GL_TEXTURE0);
	glBindTexture(GL_TEXTURE_CUBE_MAP, cubemapTexture);

    Shader* shader = new Shader("shaders/skybox.vert", "shaders/skybox.frag");
    Globals::shader = shader;

    Globals::has_reflection = false;

	glutMainLoop();
	return 0;
}

void processNormalKeys(unsigned char key, int x, int y) {
	switch(key) {
		/*
		case 'w': {
			Matrix4 translate;
			translate.identity();
			translate.makeTranslate(0.0,0,-0.5);
			Globals::camera = Globals::camera*translate;
		} break;
		case 's': {
			Matrix4 translate;
			translate.identity();
			translate.makeTranslate(0.0,0,0.5);
			Globals::camera = Globals::camera*translate;
		} break;
		case 'a': {
			Matrix4 translate;
			translate.identity();
			translate.makeTranslate(-0.5,0,0);
			Globals::camera = Globals::camera*translate;
		} break;
		case 'd': {
			Matrix4 translate;
			translate.identity();
			translate.makeTranslate(0.5,0,0);
			Globals::camera = Globals::camera*translate;
		} break;
		*/
		case 'e': {
			Globals::has_reflection = !Globals::has_reflection;
			if(Globals::has_reflection == false) Globals::shader->unbind();
		} break;
		case 'x': {
			Matrix4 rotateX;
			rotateX.identity();
			rotateX.makeRotateX(10);
			Globals::camera = Globals::camera*rotateX;
		} break;
		case 'X': {
			Matrix4 rotateX;
			rotateX.identity();
			rotateX.makeRotateX(-10);
			Globals::camera = Globals::camera*rotateX;
		} break;
		case 'y': {
			Matrix4 rotateY;
			rotateY.identity();
			rotateY.makeRotateY(10);
			Globals::camera = Globals::camera*rotateY;
		} break;
		case 'Y': {
			Matrix4 rotateY;
			rotateY.identity();
			rotateY.makeRotateY(-10);
			Globals::camera = Globals::camera*rotateY;
		} break;
		case 'z': {
			Matrix4 rotateZ;
			rotateZ.identity();
			rotateZ.makeRotateZ(10);
			Globals::camera = Globals::camera*rotateZ;
		} break;
		case 'Z': {
			Matrix4 rotateZ;
			rotateZ.identity();
			rotateZ.makeRotateZ(-10);
			Globals::camera = Globals::camera*rotateZ;
		} break;
		/*
		case 't': {
			int key=0; int x=0; int y=0; int z=0;
			cout << "Enter index of ctrl point to warp: ";
			cin >> key;
			cout << endl;
			cout << "Enter x: " <<endl;
			cin >> x;
			cout << endl;
			cout << "Enter y: " << endl;
			cin >> y;
			cout << endl;
			cout << "Enter z: " << endl;
			cin >>  z;
			cout << endl;

			Globals::patch.warpPatch(key,x,y,z);
		} break;
	
		case 'i':{
			Matrix4 zoom;
			zoom.identity();
			zoom.makeScale(1.1,1.1,1.1);
			Globals::camera = Globals::camera*zoom;
		} break;
		case 'I':{
			Matrix4 zoom;
			zoom.identity();
			zoom.makeScale(0.9,0.9,0.9);
			Globals::camera = Globals::camera*zoom;
		} break;
		*/
		case 'r':{
			Matrix4 camera;
			camera.identity();
			camera.makeCamera(Vector3(0,2,2), Vector3(1,1,1), Vector3(0,1,0));
			Globals::camera = camera;

			BezierPatch patch;
			Globals::patch = patch;
		} break;
	}
}

GLuint loadCubemap(vector<const GLchar*> faces)
{
    GLuint textureID;
    glGenTextures(1, &textureID);
    glActiveTexture(GL_TEXTURE0);

    int width,height;
    unsigned char* image;
	
    glBindTexture(GL_TEXTURE_CUBE_MAP, textureID);
    for(GLuint i = 0; i < faces.size(); i++)
    {
        image = SOIL_load_image(faces[i], &width, &height, 0, SOIL_LOAD_RGB);
        glTexImage2D(
            GL_TEXTURE_CUBE_MAP_POSITIVE_X + i, 0,
            GL_RGB, width, height, 0, GL_RGB, GL_UNSIGNED_BYTE, image
        );
    }
    glTexParameteri(GL_TEXTURE_CUBE_MAP, GL_TEXTURE_MAG_FILTER, GL_LINEAR);
    glTexParameteri(GL_TEXTURE_CUBE_MAP, GL_TEXTURE_MIN_FILTER, GL_LINEAR);
    glTexParameteri(GL_TEXTURE_CUBE_MAP, GL_TEXTURE_WRAP_S, GL_CLAMP_TO_EDGE);
    glTexParameteri(GL_TEXTURE_CUBE_MAP, GL_TEXTURE_WRAP_T, GL_CLAMP_TO_EDGE);
    glTexParameteri(GL_TEXTURE_CUBE_MAP, GL_TEXTURE_WRAP_R, GL_CLAMP_TO_EDGE);
    glBindTexture(GL_TEXTURE_CUBE_MAP, 0);

    return textureID;
}  