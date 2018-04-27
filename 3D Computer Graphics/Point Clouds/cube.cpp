#include "Cube.h"
#include "Matrix4.h"
#include <GL/glut.h>

using namespace std;

Cube::Cube()
{
  angle = 0.0;
}

Matrix4& Cube::getMatrix()
{
  return model2world;
}

void Cube::spin(double deg)   // deg is in degrees
{
  angle = deg;
  if (angle > 360.0 || angle < -360.0) angle = 0.0;
  model2world.makeRotateY(angle);   // This creates the matrix to rotate the cube
}

void Cube::scale(double factor) {
	model2world.makeScale(factor, factor, factor);
}

void Cube::move(double x, double y, double z) {
	model2world.makeTranslate(x, y, z);
}

void Cube::reset() {
	model2world.identity();
}

void Cube::orbit(double deg, Vector3 &axis) {
	angle += deg;
	Matrix4 tempM = Matrix4(); 
	tempM.identity();
	tempM.makeRotate(angle, axis);
	if (angle > 360.0 || angle < -360.0) angle = 0.0;
	model2world = tempM*model2world;
}

void Cube::render(){
	glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);  // clear color and depth buffers
	glEnable(GL_LIGHTING);
	//Render cube
	glMatrixMode(GL_MODELVIEW);  // make sure we're in Modelview mode
	// Draw all six faces of the cube:
	glBegin(GL_QUADS);
    glColor3f(0.0, 1.0, 0.0);		// This makes the cube green; the parameters are for red, green and blue. 
                                // To change the color of the other faces you will need to repeat this call before each face is drawn.
    // Draw front face:
    glNormal3f(0.0, 0.0, 1.0);   
    glVertex3f(-5.0,  5.0,  5.0);
    glVertex3f( 5.0,  5.0,  5.0);
    glVertex3f( 5.0, -5.0,  5.0);
    glVertex3f(-5.0, -5.0,  5.0);
    
    // Draw left side:
    glNormal3f(-1.0, 0.0, 0.0);
    glVertex3f(-5.0,  5.0,  5.0);
    glVertex3f(-5.0,  5.0, -5.0);
    glVertex3f(-5.0, -5.0, -5.0);
    glVertex3f(-5.0, -5.0,  5.0);
    
    // Draw right side:
    glNormal3f(1.0, 0.0, 0.0);
    glVertex3f( 5.0,  5.0,  5.0);
    glVertex3f( 5.0,  5.0, -5.0);
    glVertex3f( 5.0, -5.0, -5.0);
    glVertex3f( 5.0, -5.0,  5.0);
  
    // Draw back face:
    glNormal3f(0.0, 0.0, -1.0);
    glVertex3f(-5.0,  5.0, -5.0);
    glVertex3f( 5.0,  5.0, -5.0);
    glVertex3f( 5.0, -5.0, -5.0);
    glVertex3f(-5.0, -5.0, -5.0);
  
    // Draw top side:
    glNormal3f(0.0, 1.0, 0.0);
    glVertex3f(-5.0,  5.0,  5.0);
    glVertex3f( 5.0,  5.0,  5.0);
    glVertex3f( 5.0,  5.0, -5.0);
    glVertex3f(-5.0,  5.0, -5.0);
  
    // Draw bottom side:
    glNormal3f(0.0, -1.0, 0.0);
    glVertex3f(-5.0, -5.0, -5.0);
    glVertex3f( 5.0, -5.0, -5.0);
    glVertex3f( 5.0, -5.0,  5.0);
    glVertex3f(-5.0, -5.0,  5.0);
  glEnd();
  
  glFlush();  
  glutSwapBuffers();
}