#ifndef _TREE_H_
#define _TREE_H_

#include "Matrix4.h"
#include <GL/glut.h>

class Tree
{
public:
	Matrix4 plantMatrix;
	Tree();
	~Tree();
	void drawLeaf();
	void branch(double rad, double height);
	void growTree(double rad,double height, double angle, int iteration,bool status);
	void setTmatrix(Matrix4);
	Matrix4 getTmatrix();
	GLUquadric* quads;
	double radi2;
	Matrix4 move;
	Matrix4 rot;
	void sidebranch(double rad);
	float length;
	bool leaf;
};

#endif