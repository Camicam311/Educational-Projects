#include <iostream>

#include <GL/glut.h>

#include "Window.h"
#include "Matrix4.h"
#include "main.h"
#include "Vector3.h"
#include "Robot.h"
#include "FrustumG.h"


using namespace std;

int Window::width  = 512;   // set window width in pixels here
int Window::height = 512;   // set window height in pixels here
int frame=0,time,timebase=0;
char s[50];

//----------------------------------------------------------------------------
// Callback method called when system is idle.
void Window::idleCallback()
{
  displayCallback();         // call display routine to show the cube
  frame++;
	time=glutGet(GLUT_ELAPSED_TIME);
	if (time - timebase > 1000) {
		sprintf(s,"FPS:%4.2f",frame*1000.0/(time-timebase));
		timebase = time;
		frame = 0;
		printf("%s\n",s);
	}
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
  Globals::frustum.setCamInternals(60.0, double(width)/(double)height, 1.0, 1000.0);
  glMatrixMode(GL_MODELVIEW);
}

//----------------------------------------------------------------------------
// Callback method called by GLUT when window readraw is necessary or when glutPostRedisplay() was called.
void Window::displayCallback()
{

	glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);  // clear color and depth buffers
	glMatrixMode(GL_MODELVIEW);  // make sure we're in Modelview mode


	Matrix4 temp = Globals::Camera;
	Globals::frustum.setCamDef(Globals::e, Globals::d, Globals::up);
	Globals::world.setFrustum(&Globals::frustum, Globals::has_culling);
	Globals::world.root->draw(temp);
	glEnd();  
	glFlush();  
	glutSwapBuffers();
}
