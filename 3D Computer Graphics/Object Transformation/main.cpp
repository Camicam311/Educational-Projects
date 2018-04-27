#include <stdio.h>
#include <stdlib.h>
#include <iostream>

#include <GL/glut.h>

#include "Window.h"
#include "Cube.h"
#include "Matrix4.h"
#include "main.h"

using namespace std;

void processNormalKeys(unsigned char key, int x, int y);

namespace Globals
{
  Cube cube;
  double spin_angle;
};

int main(int argc, char *argv[])
{
  float specular[]  = {1.0, 1.0, 1.0, 1.0};
  float shininess[] = {100.0};
  float position[]  = {0.0, 10.0, 1.0, 0.0};	// lightsource position
  
  glutInit(&argc, argv);      	      	      // initialize GLUT
  glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGB | GLUT_DEPTH);   // open an OpenGL context with double buffering, RGB colors, and depth buffering
  glutInitWindowSize(Window::width, Window::height);      // set initial window size
  glutCreateWindow("OpenGL Cube");    	      // open window and set window title

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

  // Initialize cube matrix:
  Globals::cube.getMatrix().identity();
  Globals::spin_angle = 0.05;
    
  glutMainLoop();
  return 0;
}

void processNormalKeys(unsigned char key, int x, int y) {
	Vector3 vec(0,0,1);
	switch(key) {
	case 't':
		cout << "toggle spin direction" << endl;
		Globals::spin_angle *= -1;
		break;
	case 'x':
		cout << "Move cube left" << endl;
		Globals::cube.move(-1, 0, 0);
		break;
	case 'X':
		cout << "Move cube right" << endl;
		Globals::cube.move(1, 0, 0); 
		break;
	case 'y':
		cout << "Move cube down" << endl;
		Globals::cube.move(0, -1, 0);
		break;
	case 'Y':
		cout << "Move cube Up" << endl;
		Globals::cube.move(0, 1, 0);
		break;
	case 'z':
		cout << "Move cube inward" << endl;
		Globals::cube.move(0, 0, -1);
		break;
	case 'Z':
		cout << "Move cube outward" << endl;
		Globals::cube.move(0, 0, 1);
		break;
	case 'r':
		cout << "Reset cube" << endl;
		Globals::cube.reset();	
		break;
	case 'o':
		cout << "orbit counterclockwise" << endl;
		Globals::cube.orbit(1, vec);
		break;
	case 'O':
		cout << "orbit clockwise" << endl;
		Globals::cube.orbit(-1, vec);
		break;
	case 's':
		cout << "Scale the cube down!" << endl;
		Globals::cube.scale(0.9);
		break;
	case 'S':
		cout << "Scale cube up" << endl;
		Globals::cube.scale(1.1);
		break;
	}
}

