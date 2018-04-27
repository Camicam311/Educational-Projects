#include "main.h"


int Window::width  = 512;   // set window width in pixels here
int Window::height = 512;   // set window height in pixels here

//----------------------------------------------------------------------------
// Callback method called when system is idle.
void Window::idleCallback()
{
  displayCallback();         // call display routine to show the cube
}

//----------------------------------------------------------------------------
// Callback method called by GLUT when window readraw is necessary or when glutPostRedisplay() was called.
void Window::displayCallback()
{
  glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);  // clear color and depth buffers
  	if(AnimateNextFrame(60))					// Render the scene only at 60 FPS
	{
		Globals::g_Camera.Update();						// Handle our camera movement
		RenderScene();							// Render the scene every frame 
	}
  glFlush();  
}

//----------------------------------------------------------------------------
// Callback method called by GLUT when graphics window is resized by the user
void Window::reshapeCallback(int w, int h)
{

}