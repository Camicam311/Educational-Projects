#ifndef _BezierPatch_H_
#define _BezierPatch_H_

#include <iostream>
#include <vector>
#include "Vector4.h"
#include "Matrix4.h"
#include <math.h> 
#include <GL/glut.h>


using namespace std;

class BezierPatch
{
protected:
	void initCtrlPts(); //Initializes vector of control points
	void makeBezMatrix();

public:
	Matrix4 B_bez;
	double warp_angle;
	bool pos_dir;

	vector<Vector4> ctrlpts; //array of control points
	vector<vector<Vector4>> patchPts;
	BezierPatch(void);
	~BezierPatch(void);

	Matrix4 getCtrlPtMatrix(char coord); //coord can be either 'x', 'y' or 'z'. Returns matrix of respective components
	Vector4 calcPt(double u, double v); //Calculated a point on the bezier patch from parameterized values
	void render(); //Renders the patch using gl_quads

	void addNormal(Vector4 v0, Vector4 v1, Vector4 v2);

	void warpPatch(int ndx, double xdist, double ydist, double zdist);
	void animate();

	Vector4 bez(double t, Vector4 p0, Vector4 p1, Vector4 p2, Vector4 p3);
	double bCoeff(long n, long i, double t);
	long combo(long n, long i);
	long factorial(long n);

};
#endif