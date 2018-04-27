#ifndef _POINTCLOUD_H_
#define _POINTCLOUD_H_

#include <vector>
#include <string>
#include <iostream>
#include <stdio.h>
#include <limits>       // std::numeric_limits
#include <stdlib.h>
#include <GL/glut.h>
#include "Vector3.h"
#include "Matrix4.h"

using namespace std;
class PointCloud
{
public:
	const char* file;
	Matrix4 model2world;            // model matrix (transforms model coordinates to world coordinates)
	vector<Vector3> normals;
	vector<Vector3> positions;
	Vector3 x_max_vec;
	Vector3 y_max_vec;
	Vector3 z_max_vec;
	Vector3 x_min_vec;
	Vector3 y_min_vec;
	Vector3 z_min_vec;
	double angle;
	PointCloud();
	PointCloud(const char* file);
	void render();
	void spin(double deg);
	void reset();
	void scale(double); //scale the cloud by specified factor
	void move(double x, double y, double z); //move the cloud x,y,z units
	void calcExtremeCoordinates(); //Calculates the min and max coordinates of the vertices in x, y and z dimensions. 
	Vector3 calcTranslateCenter(); //Centers the model to the world
	double calcMaxScaling();
	Matrix4& getMatrix();
	void setMatrix(Matrix4* matrix);
};
#endif

