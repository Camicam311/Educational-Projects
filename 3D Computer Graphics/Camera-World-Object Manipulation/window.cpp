#include <iostream>

#include <GL/glut.h>

#include "Window.h"
#include "Cube.h"
#include "Matrix4.h"
#include "main.h"
#include "Vector3.h"
#include "PointCloud.h"

using namespace std;

int Window::width  = 512;   // set window width in pixels here
int Window::height = 512;   // set window height in pixels here

//----------------------------------------------------------------------------
// Callback method called when system is idle.
void Window::idleCallback()
{
  displayCallback();         // call display routine to show the cube
}

//----------------------------------------------------------------------------
// Callback method called by GLUT when graphics window is resized by the user
void Window::reshapeCallback(int w, int h)
{
  cerr << "Window::reshapeCallback called" << endl;
  width = w;
  height = h;
  glViewport(0, 0, w, h);  // set new viewport size
  glMatrixMode(GL_PROJECTION);
  glLoadIdentity();
  gluPerspective(60.0, double(width)/(double)height, 1.0, 1000.0); // set perspective projection viewing frustum
  glTranslatef(0, 0, -20);    // move camera back 20 units so that it looks at the origin (or else it's in the origin)
  glMatrixMode(GL_MODELVIEW);
}

//----------------------------------------------------------------------------
// Callback method called by GLUT when window readraw is necessary or when glutPostRedisplay() was called.
void Window::displayCallback()
{
  if(Globals::obj_id == 0) {
	  // Tell OpenGL what ModelView matrix to use:
	  Matrix4 glmatrix;
	  glmatrix = cube.getMatrix();
	  glmatrix.transpose();
	  glLoadMatrixd(glmatrix.getPointer());
	  cube.spin(Globals::spin_angle);   // rotate cube; if it spins too fast try smaller values and vice versa
	  cube.render();
  } else if(Globals::obj_id == 1) {
	  Globals::house.render();
  } else if(Globals::obj_id == 2) {
	  Globals::house.render();
  } else if(Globals::obj_id >= 3) {
	  // Tell OpenGL what ModelView matrix to use:
	//render bunny point cloud
	glLoadIdentity();
	Matrix4 glmatrix;
	glmatrix = Globals::cur_cloud.getMatrix();
	glmatrix.transpose();
	glLoadMatrixd(glmatrix.getPointer());
	Globals::cur_cloud.render();
  }
}
