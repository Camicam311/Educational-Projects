#include <stdio.h>
#include <stdlib.h>
#include <iostream>

#include <GL/glut.h>

#include "Window.h"
#include "Cube.h"
#include "Matrix4.h"
#include "Camera.h"
#include "main.h"


using namespace std;

void processNormalKeys(unsigned char key, int x, int y);
void processFKeys(int key, int x, int y);

namespace Globals
{
  Cube cube;
  double spin_angle;
  Camera c;
  int obj_id; //Determines which object to show in window.cpp displayCallback
  House house;
  PointCloud cur_cloud;
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
  glutSpecialFunc(processFKeys);

  // Initialize cube matrix:
  Globals::cube.getMatrix().identity();
  Globals::spin_angle = 0.05;
    
  glutMainLoop();
  return 0;
}

void processFKeys(int key, int x, int y) {
	switch(key) {
		case GLUT_KEY_F1:
			//Show the cube
			cout << "F1 Key Was Pressed" << endl;
			 Globals::spin_angle = 0.05;
			Globals::obj_id = 0;
			break;
		case GLUT_KEY_F2: {
			//Show the house in first camera orientation
			cout << "F2 Key Was Pressed" << endl;
			glLoadIdentity();
			Vector3 e(0,10,10);
			Vector3 d(0,0,0);
			Vector3 up(0,1,0);
			Globals::c = Camera(e,d,up);
			Matrix4 glCMatrix;
			glCMatrix = Globals::c.getCameraMatrix();
			glMatrixMode(GL_MODELVIEW);
			glLoadMatrixd(glCMatrix.getPointer());
			Globals::obj_id = 1;
						  }break;
		case GLUT_KEY_F3: {
			//Show the house in second camera orientation
			cout << "F3 Key Was Pressed" << endl;
			//Render house 2
			glLoadIdentity();
			Vector3 e(-15,5,10);
			Vector3 d(-5,0,0);
			Vector3 up(0,1,0.5);
			Globals::c = Camera(e,d,up);
			Matrix4 glCMatrix;
			glCMatrix = Globals::c.getCameraMatrix();
			glMatrixMode(GL_MODELVIEW);
			glLoadMatrixd(glCMatrix.getPointer());
			Globals::obj_id = 2;
						  } break;
		case GLUT_KEY_F4: {
			//Show the house in second camera orientation
			cout << "F4 Key Was Pressed" << endl;
			Globals::spin_angle = 10;
		    PointCloud bunny_cloud("pointclouds/bunny.xyz");
			//bunny_cloud.setMatrix(&Globals::cube.getMatrix());
			bunny_cloud.calcExtremeCoordinates();
			//Print the extreme coordinates of the model
			cout << "maxX->" << bunny_cloud.x_max_vec.getX() << ", " <<
				"maxY->" <<bunny_cloud.y_max_vec.getY() <<  ", " <<
				"maxZ->" <<bunny_cloud.z_max_vec.getZ() <<  ", " <<
				"minX->" <<bunny_cloud.x_min_vec.getX() <<  ", " <<
				"minY->" <<bunny_cloud.y_min_vec.getY() <<  ", " <<
				"minZ->" <<bunny_cloud.z_min_vec.getZ() << endl;

 			//render bunny point cloud
			 glLoadIdentity();
			double scale_factor = bunny_cloud.calcMaxScaling();
			//double scale_factor = 115;
			Vector3 offset = bunny_cloud.calcTranslateCenter();
			bunny_cloud.move(offset.getX(),offset.getY(),offset.getZ());
			bunny_cloud.scale(scale_factor);
			Globals::cur_cloud = bunny_cloud;
			Globals::obj_id = 3;
		}
		break;
		case GLUT_KEY_F5: {
			//Show the house in second camera orientation
			cout << "F5 Key Was Pressed" << endl;
			Globals::spin_angle = 10;
			PointCloud dragon_cloud("pointclouds/dragon.xyz");
			dragon_cloud.calcExtremeCoordinates();
			//Print the extreme coordinates of the model
			cout << "maxX->" << dragon_cloud.x_max_vec.getX() << ", " <<
				"maxY->" << dragon_cloud.y_max_vec.getY() <<  ", " <<
				"maxZ->" << dragon_cloud.z_max_vec.getZ() <<  ", " <<
				"minX->" << dragon_cloud.x_min_vec.getX() <<  ", " <<
				"minY->" << dragon_cloud.y_min_vec.getY() <<  ", " <<
				"minZ->" << dragon_cloud.z_min_vec.getZ() << endl;
 			//render bunny point cloud
			 glLoadIdentity();
			double scale_factor = dragon_cloud.calcMaxScaling();
			//double scale_factor = 115;
			Vector3 offset = dragon_cloud.calcTranslateCenter();
			dragon_cloud.move(offset.getX(),offset.getY(),offset.getZ());
			dragon_cloud.scale(scale_factor);
			Globals::cur_cloud = dragon_cloud;
			Globals::obj_id = 4;
	    } break;
		case GLUT_KEY_F6: {
			//Show the house in second camera orientation
			cout << "F6 Key Was Pressed" << endl;
			PointCloud happy_cloud("pointclouds/happy_vrip.xyz");
			happy_cloud.calcExtremeCoordinates();
			//Print the extreme coordinates of the model
			cout << "maxX->" << happy_cloud.x_max_vec.getX() << ", " <<
				"maxY->" <<happy_cloud.y_max_vec.getY() <<  ", " <<
				"maxZ->" <<happy_cloud.z_max_vec.getZ() <<  ", " <<
				"minX->" <<happy_cloud.x_min_vec.getX() <<  ", " <<
				"minY->" <<happy_cloud.y_min_vec.getY() <<  ", " <<
				"minZ->" <<happy_cloud.z_min_vec.getZ() << endl;
 			//render bunny point cloud
			 glLoadIdentity();
			double scale_factor = happy_cloud.calcMaxScaling();
			//double scale_factor = 115;
			Vector3 offset = happy_cloud.calcTranslateCenter();
			happy_cloud.move(offset.getX(),offset.getY(),offset.getZ());
			happy_cloud.scale(scale_factor);
			Globals::cur_cloud = happy_cloud;
			Globals::obj_id = 5;
	    } break;
		case GLUT_KEY_F7: {
			//Show the house in second camera orientation
			cout << "F5 Key Was Pressed" << endl;
			PointCloud dragon_cloud("pointclouds/dragon.xyz");
			dragon_cloud.calcExtremeCoordinates();
			//Print the extreme coordinates of the model
			cout << "maxX->" << dragon_cloud.x_max_vec.getX() << ", " <<
				"maxY->" <<dragon_cloud.y_max_vec.getY() <<  ", " <<
				"maxZ->" <<dragon_cloud.z_max_vec.getZ() <<  ", " <<
				"minX->" <<dragon_cloud.x_min_vec.getX() <<  ", " <<
				"minY->" <<dragon_cloud.y_min_vec.getY() <<  ", " <<
				"minZ->" <<dragon_cloud.z_min_vec.getZ() << endl;
 			//render bunny point cloud
			 glLoadIdentity();
			double scale_factor = dragon_cloud.calcMaxScaling();
			//double scale_factor = 115;
			Vector3 offset = dragon_cloud.calcTranslateCenter();
			dragon_cloud.move(offset.getX(),offset.getY(),offset.getZ());
			dragon_cloud.scale(scale_factor);
			Globals::cur_cloud = dragon_cloud;
			Globals::obj_id = 6;
	    }
		break;
	}
}



void processNormalKeys(unsigned char key, int x, int y) {
	Vector3 vec(0,0,1);
	switch(key) {
	case 't':
		cout << "toggle spin direction" << endl;
		Globals::spin_angle *= -1;
		break;
	case 'x':
		cout << "Move left" << endl;
		if(Globals::obj_id == 0) Globals::cube.move(-1, 0, 0);
		if(Globals::obj_id>= 3) Globals::cur_cloud.move(-1, 0, 0);
		break;
	case 'X':
		cout << "Move right" << endl;
		if(Globals::obj_id == 0) Globals::cube.move(1, 0, 0); 
		if(Globals::obj_id >= 3) Globals::cur_cloud.move(1, 0, 0);
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
		if(Globals::obj_id == 0) Globals::cube.reset();	
		if(Globals::obj_id >= 3) Globals::cur_cloud.reset();
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
		cout << "Scale down!" << endl;
		if(Globals::obj_id == 0) Globals::cube.scale(0.9);
		if(Globals::obj_id >= 3) Globals::cur_cloud.scale(0.9);
		break;
	case 'S':
		cout << "Scale up" << endl;
		if(Globals::obj_id == 0) Globals::cube.scale(1.1);
		if(Globals::obj_id >= 3) Globals::cur_cloud.scale(1.1);
		break;
	case 'g':
		cout << "Rotate" << endl;
		if(Globals::obj_id >= 3) Globals::cur_cloud.spin(Globals::spin_angle); 

	}
}

