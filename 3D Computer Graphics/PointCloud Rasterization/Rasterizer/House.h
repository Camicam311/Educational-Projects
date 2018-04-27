#ifndef _HOUSE_H_
#define _HOUSE_H_
#include <vector>
#include "Vector3.h"
#include <GL/glut.h>

class House
{
	public:
		int nVerts;
		float vertices[200], colors[200];
		int  indices[200];


		House();
		void render();
		std::vector<Vector3> vertsToVectors();
};
#endif

