#include "Tree.h"


Tree::Tree()
{
	quads = gluNewQuadric();
	length = 0;
	leaf = false;
}


Tree::~Tree()
{
}


void Tree::drawLeaf()
{
	glScalef(.2, .2, .2);
	/*glPushAttrib(GL_LIGHTING_BIT);//saves current lighting stuff
	//glColor3f(0.50, 1.0, 0.0);
	GLfloat ambient[4] = { 0.50, 1.0, 0.0 };    // ambient reflection
	GLfloat specular[4] = { 0.55, 1.0, 0.0 };   // specular reflection
	GLfloat diffuse[4] = { 0.50, 0.9, 0.0 };   // diffuse reflection


	// set the ambient reflection for the object
	glMaterialfv(GL_FRONT_AND_BACK, GL_AMBIENT, ambient);
	// set the diffuse reflection for the object
	glMaterialfv(GL_FRONT_AND_BACK, GL_DIFFUSE, diffuse);
	// set the specular reflection for the object      
	glMaterialfv(GL_FRONT_AND_BACK, GL_SPECULAR, specular);
	// set the size of the specular highlights
	glMaterialf(GL_FRONT_AND_BACK, GL_SHININESS, 20.0);*/

	//glutSolidCube(depth+1);
	glColor3f(0, 1, 0);
	glBegin(GL_TRIANGLES);
	glVertex3f(0, 0, 0);
	glVertex3f(0.2, 0, 0.3);
	glVertex3f(0, .7, 0);
	glVertex3f(0, 0, 0);
	glVertex3f(-0.2, 0, 0.3);
	glVertex3f(0, .7, 0);

	glVertex3f(0.1, 0, .2);
	glVertex3f(0.4, 0, .5);
	glVertex3f(0.4, .3, .5);

	glVertex3f(-0.1, 0, .2);
	glVertex3f(-0.4, 0, .5);
	glVertex3f(-0.4, .3, .5);

	glVertex3f(-0.4, 0, .5);
	glVertex3f(0.0, 0, 0.0);
	glVertex3f(0.0, -.3, 0);

	glVertex3f(0.4, 0, .5);
	glVertex3f(0.0, 0, 0.0);
	glVertex3f(0.0, -.3, 0);
	
	glEnd();
	glScalef(5, 5, 5);
	//glPopAttrib();
}

void Tree::branch(double rad, double height)
{
	//glDisable(GL_LIGHTING);
	glColor3f(.65, .36, .23);
	radi2 = rad - .01;
	//
	//glTranslatef(0, 0, length);
	gluCylinder(quads, rad, radi2, height, 16, 16);
	//glTranslatef(0, 0, .3);
	//printf("rad: %lf\n radi2: %lf\n\n", rad, radi2);
	

	
	
	//glPopAttrib();
}

void Tree::growTree(double rad, double height, double angle, int iteration, bool status)
{
	//if (iteration == 0)
	//{

	//	printf("%d\n", iteration);
	//}
	int i = 0;
	//int j = 0;
	//glLoadMatrixd(plantMatrix.getPointer()); //update load
	
	//sidebranch(rad/2);
	//move.makeTranslate(0, 0, 0);
	//rot.makeRotateY(90);
	//plantMatrix = plantMatrix*rot;
	//plantMatrix = plantMatrix*move;
	
	if (rad > .01)
	{
		glTranslated(0, 0, height*iteration);
		branch(rad, height);
		glTranslated(0, 0, -height*iteration);
		/*if (status)
		{
		
		glRotated(90, 1, 0, 0);
		glTranslated(0, 0, height*iteration);
		branch(rad, height);
		glTranslated(0, 0, -height*iteration);
		glRotated(-90, 1, 0, 0);


		glRotated(180, 1, 0, 0);
		glTranslated(0, 0, height*iteration);
		branch(rad, height);
		glTranslated(0, 0, -height*iteration);
		glRotated(-180, 1, 0, 0);



		glRotated(270, 1, 0, 0);
		glTranslated(0, 0, height*iteration);
		branch(rad, height);
		glTranslated(0, 0, -height*iteration);
		glRotated(-270, 1, 0, 0);
		}*/
		//printf("Enter if\n\n");
		growTree(rad - 0.01, height, angle, iteration + 1, status);
		



		if (iteration >1)
		{
			leaf = true;
			glTranslated(0, 0, height*iteration);
			if (status == false)
			{
				glRotated(angle, 0, 1, 0);
				growTree(rad - .01, height, angle , 0, true);
				glRotated(-angle, 0, 1, 0);
			}
			if (status == true)
			{
				glRotated(angle, 1, 0, 0);
				growTree(rad - .01, height, angle , 0, true);
				glRotated(-angle, 1, 0, 0);
				glRotated(-angle, 1, 0, 0);
				growTree(rad - .01, height, angle, 0, true);
				glRotated(angle, 1, 0, 0);
			}
			glTranslated(0, 0, -height*iteration);
		}
		

		
		
		//i++;
		
		//printf("%lf", length);
		//this->growTree(rad - 0.01);
		//if (i == 2)
		//{
		//	i = 0;
//glRotated(20, 0, 1, 0);
		//	growTree(rad / 2, height,angle);
		//	glRotated(-20, 0, 1, 0);
		//}
		//glRotatef(15, 0, 1, 0);
		//branch(rad / 2);
		//glRotatef(-15, 0, 1, 0);
		//drawLeaf();
	}
	else if (rad == 0 && leaf == true);
	{
		if (status)
		{

			glTranslated(0, 0, height*iteration);
			drawLeaf();
			glTranslated(0, 0, -height*iteration);
		}
	}

}

Matrix4 Tree::getTmatrix()
{
	return plantMatrix;
}

void Tree::setTmatrix(Matrix4 seed)
{
	plantMatrix = seed;
}

void Tree::sidebranch(double rad)
{
	//glLoadMatrixd(plantMatrix.getPointer()); //update load
	
	glRotatef(-20, 0, 1, 0);
//	glTranslatef(0, 0, length);
//	branch(rad);
//	glTranslatef(0, 0, -length);
	glRotatef(20, 0, 1, 0);
	move.makeTranslate(0, 0, 0);
	rot.makeRotateY(90);
	//plantMatrix = plantMatrix*rot;
	//plantMatrix = plantMatrix*move;

	if (rad > .05)
	{

		//this->growTree(rad - 0.01);
		//glRotatef(15, 0, 1, 0);
		//branch(rad / 2);
		//glRotatef(-15, 0, 1, 0);
		//drawLeaf();
	}
	else
	{
	//	drawLeaf();
	}

}