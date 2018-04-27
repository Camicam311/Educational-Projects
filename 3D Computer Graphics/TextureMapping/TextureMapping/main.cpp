//C++ and GFX Programming STD includes
#define _CRT_SECURE_NO_WARNINGS

#include "GLee.h"
#include <stdlib.h>
#include "GL/glut.h"
#include "SOIL/SOIL.h"

#include <iostream>

//Non-STD includes
#include "window.h"


/*------------------------  Window Related Functions -----------------------------*/
Window* win = new Window(600,600, "Texture Mapping");
void initGLUT(int argc,char* argv[]);
void winReshape(int width, int height);
void winIdle();
void winDisplay();
void winInit();

void renderScene(); //Scene render functionality passed to the window display callback

/*----------------------- Teture Mapping Related Functions -----------------------*/


using namespace std;
int main(int argc,char* argv[]) {	
	initGLUT(argc,argv);

	/* ------------------------- Initialize and run the window ---------------------------------*/
	win->initGLUTWindow(winInit);
	win->runGLUTWindow(winDisplay, winReshape, winIdle);

	return 0;
}


void renderQuad(int size) {
   GLuint front = SOIL_load_OGL_texture (
        "images/front.jpg",
        SOIL_LOAD_AUTO,
        SOIL_CREATE_NEW_ID,
        SOIL_FLAG_MIPMAPS | SOIL_FLAG_COMPRESS_TO_DXT
    );
    glEnable(GL_TEXTURE_2D);
	glBindTexture(GL_TEXTURE_2D, front);
	glPixelStorei(GL_UNPACK_ALIGNMENT, 1);
	glTexEnvi(GL_TEXTURE_ENV, GL_TEXTURE_ENV_MODE, GL_COMBINE);
	// Tell OpenGL which combiner you want to use (GL_MODULATE for RGB values)
	glTexEnvi(GL_TEXTURE_ENV, GL_COMBINE_RGB, GL_MODULATE);

	// Tell OpenGL to use texture unit 0's color values for Arg0
	glTexEnvi(GL_TEXTURE_ENV, GL_SOURCE0_RGB, GL_TEXTURE0);
	glTexEnvi(GL_TEXTURE_ENV, GL_OPERAND0_RGB, GL_SRC_COLOR);

	// Tell OpenGL to use texture unit 1's color values for Arg1
	glTexEnvi(GL_TEXTURE_ENV, GL_SOURCE0_RGB, GL_TEXTURE1);
	glTexEnvi(GL_TEXTURE_ENV, GL_OPERAND0_RGB, GL_SRC_COLOR);

	//Render A Square
	glColor3f(1,1,1);
	glBegin(GL_QUADS);
		glTexCoord2f (1.0, 1.0); //top right
		glVertex3f(size,size,0); 

		glTexCoord2f (0.0, 1.0); //top left
		glVertex3f(-size,size,0); 

		glTexCoord2f (0.0, 0.0); //bottom left
		glVertex3f(-size,-size,0);
		 
		glTexCoord2f (1.0, 0.0); //bottom right
		glVertex3f(size,-size,0); 
	glEnd();
	glColor3f(1,1,1);
}

void renderScene() {
	renderQuad(2);
}

void initGLUT(int argc,char* argv[]) {
	glutInit(&argc, argv); // initialize GLUT
	glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGB | GLUT_DEPTH); // open an OpenGL context with double buffering, RGB colors, and depth buffering
	glEnable(GL_DEPTH_TEST);            	      // enable depth buffering
    glClear(GL_DEPTH_BUFFER_BIT);       	      // clear depth buffer
	glPolygonMode(GL_FRONT_AND_BACK, GL_FILL);  // set polygon drawing mode to fill front and back of each polygon
	glDisable(GL_CULL_FACE);     // disable backface culling to render both sides of polygons
	glShadeModel(GL_SMOOTH);             	      // set shading to smooth
}

//winInit() - Code to be ran once while window is being initialized
void winInit() {
	/* ------------------------- Set Global Lighting, NOT WORKING TODO: FIX THIS ---------------------------------*/

}

void winDisplay() {
	glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);  // clear color and depth buffers
	glMatrixMode(GL_MODELVIEW);  // make sure we're in Modelview mode
		renderScene();
	glFlush();  
	glutSwapBuffers();
}

void winReshape(int w, int h){
  win->width = w;
  win->height = h;
  glViewport(0, 0, w, h);  // set new viewport size
  glMatrixMode(GL_PROJECTION);
  glLoadIdentity();
  gluPerspective(60.0, double(win->width)/(double)win->height, 1.0, 1000.0);
  glTranslatef(0, 0, -10);   
  glMatrixMode(GL_MODELVIEW);
}

void winIdle() {
	winDisplay();   // call display routine 
}