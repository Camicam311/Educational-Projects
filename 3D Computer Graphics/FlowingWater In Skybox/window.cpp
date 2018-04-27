#include <iostream>

#include "Window.h"
#include "main.h"
#include "SOIL/SOIL.h"

using namespace std;

int Window::width  = 512;   // set window width in pixels here
int Window::height = 512;   // set window height in pixels here
int frame=0,f_time,timebase=0;
char s[50];

//----------------------------------------------------------------------------
// Callback method called when system is idle.
void Window::idleCallback()
{
  displayCallback();         // call display routine to show the cube
  frame++;
	f_time=glutGet(GLUT_ELAPSED_TIME);
	if (f_time - timebase > 1000) {
		sprintf_s(s,"FPS:%4.2f",frame*1000.0/(f_time-timebase));
		timebase = f_time;
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
  glTranslatef(0, 0, 0);    // move camera back 20 units so that it looks at the origin (or else it's in the origin)
  glMatrixMode(GL_MODELVIEW);
}

//----------------------------------------------------------------------------
// Callback method called by GLUT when window readraw is necessary or when glutPostRedisplay() was called.
void Window::displayCallback()
{
	glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);  // clear color and depth buffers
	glMatrixMode(GL_MODELVIEW);  // make sure we're in Modelview mode

	if(Globals::has_reflection) Globals::shader->unbind();

	/* ------------------------ RENDER THE SKYBOX ----------------------  */ 
	glPushAttrib(GL_ENABLE_BIT);
	glEnable(GL_TEXTURE_2D);
	glColor4f(1,1,1,1);
    glDisable(GL_BLEND);
	glDisable(GL_DEPTH_TEST);
    glDisable(GL_LIGHTING);


   	GLuint front = SOIL_load_OGL_texture (
        "skybox/bridge/front.jpg",
        SOIL_LOAD_AUTO,
        SOIL_CREATE_NEW_ID,
        SOIL_FLAG_MIPMAPS | SOIL_FLAG_COMPRESS_TO_DXT
    );
	glBindTexture(GL_TEXTURE_2D, front);

	  // Make sure no bytes are padded:
	  glPixelStorei(GL_UNPACK_ALIGNMENT, 1);

	  // Select GL_MODULATE to mix texture with polygon color for shading:
	  glTexEnvf(GL_TEXTURE_ENV, GL_TEXTURE_ENV_MODE, GL_MODULATE);

	  // Use bilinear interpolation:
	  glTexParameterf(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_LINEAR);
	  glTexParameterf(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_LINEAR);

   // Render the front quad
   glBegin(GL_QUADS);
       glTexCoord2f(0, 0); glVertex3f(  16.0f, -32.0f, -32.0f );
       glTexCoord2f(1, 0); glVertex3f( -32.0f, -32.0f, -32.0f );
       glTexCoord2f(1, 1); glVertex3f( -32.0f, 16.0f, -32.0f );
       glTexCoord2f(0, 1); glVertex3f(  16.0f, 16.0f, -32.0f );
   glEnd();

  GLuint left = SOIL_load_OGL_texture (
       "skybox/bridge/left.jpg",
        SOIL_LOAD_AUTO,
        SOIL_CREATE_NEW_ID,
        SOIL_FLAG_MIPMAPS | SOIL_FLAG_COMPRESS_TO_DXT
    );
   glBindTexture(GL_TEXTURE_2D, left);
   // Render the left quad
   glBegin(GL_QUADS);
       glTexCoord2f(0, 0); glVertex3f(  16.0f, -32.0f,  16.0f );
       glTexCoord2f(1, 0); glVertex3f(  16.0f, -32.0f, -32.0f );
       glTexCoord2f(1, 1); glVertex3f(  16.0f,  16.0f, -32.0f );
       glTexCoord2f(0, 1); glVertex3f(  16.0f,  16.0f,  16.0f );
   glEnd();

  GLuint back = SOIL_load_OGL_texture (
       "skybox/bridge/back.jpg",
        SOIL_LOAD_AUTO,
        SOIL_CREATE_NEW_ID,
        SOIL_FLAG_MIPMAPS | SOIL_FLAG_COMPRESS_TO_DXT
    );
   glBindTexture(GL_TEXTURE_2D, back);
   // Render the back quad
   glBegin(GL_QUADS);
       glTexCoord2f(0, 0); glVertex3f( -32.0f, -32.0f,  16.0f );
       glTexCoord2f(1, 0); glVertex3f(  16.0f, -32.0f,  16.0f );
       glTexCoord2f(1, 1); glVertex3f(  16.0f,  16.0f,  16.0f );
       glTexCoord2f(0, 1); glVertex3f( -32.0f,  16.0f,  16.0f );
   glEnd();

   GLuint right = SOIL_load_OGL_texture (
            "skybox/bridge/right.jpg",
            SOIL_LOAD_AUTO,
            SOIL_CREATE_NEW_ID,
            SOIL_FLAG_MIPMAPS | SOIL_FLAG_COMPRESS_TO_DXT
    );
   glBindTexture(GL_TEXTURE_2D, right);
   // Render the right quad
   glBegin(GL_QUADS);
       glTexCoord2f(0, 0); glVertex3f( -32.0f, -32.0f, -32.0f );
       glTexCoord2f(1, 0); glVertex3f( -32.0f, -32.0f,  16.0f );
       glTexCoord2f(1, 1); glVertex3f( -32.0f,  16.0f,  16.0f );
       glTexCoord2f(0, 1); glVertex3f( -32.0f,  16.0f, -32.0f );
   glEnd();

  GLuint top = SOIL_load_OGL_texture (
            "skybox/bridge/top.jpg",
            SOIL_LOAD_AUTO,
            SOIL_CREATE_NEW_ID,
            SOIL_FLAG_MIPMAPS | SOIL_FLAG_COMPRESS_TO_DXT
    );
   glBindTexture(GL_TEXTURE_2D, top);
    // Render the top quad
   glBegin(GL_QUADS);
       glTexCoord2f(0, 1); glVertex3f( -32.0f,  16.0f, -32.0f );
       glTexCoord2f(0, 0); glVertex3f( -32.0f,  16.0f,  16.0f );
       glTexCoord2f(1, 0); glVertex3f( 16.0f,  16.0f,  16.0f );
       glTexCoord2f(1, 1); glVertex3f( 16.0f,  16.0f, -32.0f );
   glEnd();

   glPopAttrib();
	/* ------------------------ END THE SKYBOX RENDERING ----------------------*/
    if(Globals::has_reflection) Globals::shader->bind();

	Globals::patch.render();
	Globals::patch.animate();

   	Matrix4 camera = Globals::camera;
	camera.transpose();
	glLoadMatrixd(camera.getPointer());

	glFlush();  
    glutSwapBuffers();
}

