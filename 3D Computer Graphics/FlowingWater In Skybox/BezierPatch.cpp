#include "BezierPatch.h"

#define PI 3.14159265

BezierPatch::BezierPatch(void)
{
	initCtrlPts();
	warp_angle = 0;
	pos_dir = true;
	//makeBezMatrix();
}

BezierPatch::~BezierPatch(void)
{
}

void BezierPatch::initCtrlPts() {
	Vector4 ctrlpt;
	for(int z=-32; z<32; z+=16) {
		for(int x=-32; x<32; x+=16) {
			ctrlpt = Vector4(x,-28,z,1);
			ctrlpts.push_back(ctrlpt);
		}
	}
}

void BezierPatch::addNormal(Vector4 v0, Vector4 v1_corner, Vector4 v2) {
	Vector3 q0 = Vector3(v0.x, v0.y, v0.z) - Vector3(v1_corner.x,v1_corner.y,v1_corner.z);
	Vector3 q1 = Vector3(v2.x, v2.y, v2.z) - Vector3(v1_corner.x,v1_corner.y,v1_corner.z);
	Vector3 normal = q1.cross(q0);
	glNormal3d(normal.x, normal.y, normal.z);
}


void BezierPatch::warpPatch(int ndx, double xdist, double ydist, double zdist) {
	ctrlpts.at(ndx).x += xdist;
	ctrlpts.at(ndx).y += ydist;
	ctrlpts.at(ndx).z += zdist;
}


void BezierPatch::animate() {
	double amplitude = 2;
	if(warp_angle >= 360) { warp_angle = 0; }

	warp_angle += 45;

	double scale = amplitude*sin(warp_angle*PI/180);
	double cosscale = amplitude*cos(warp_angle*PI/180);

	warpPatch(0,0,cosscale,0);
	warpPatch(4,0,scale,0);
	warpPatch(8,0,-scale,0);
	warpPatch(12,0,scale,0);

	warpPatch(1,0,scale,0);
	warpPatch(5,0,scale,0);
	warpPatch(9,0,-cosscale,0);
	warpPatch(13,0,scale,0);

	warpPatch(2,0,scale,0);
	warpPatch(6,0,cosscale,0);
	warpPatch(10,0,-cosscale,0);
	warpPatch(14,0,scale,0);

	warpPatch(3,0,scale,0);
	warpPatch(7,0,scale,0);
	warpPatch(11,0,-scale,0);
	warpPatch(15,0,-cosscale,0);
}

void BezierPatch::render() {
	Vector4 patchPt1;
	Vector4 patchPt2;
	Vector4 patchPt3;
	Vector4 patchPt4;

	double step = 0.03;
	
	glBegin(GL_QUADS);
	for(double i=0; i<1; i+=step) {
		for(double j=0; j<1; j+=step) {
			patchPt1 = calcPt(i,j);
			patchPt2 = calcPt(i,j+step);
			patchPt3 = calcPt(i+step, j+step);
			patchPt4 = calcPt(i+step,j);

			glVertex3f(patchPt1.x, patchPt1.y, patchPt1.z); 
			glVertex3f(patchPt2.x, patchPt2.y, patchPt2.z); 
			glVertex3f(patchPt3.x, patchPt3.y, patchPt3.z); 
			glVertex3f(patchPt4.x, patchPt4.y, patchPt4.z); 

			addNormal(patchPt1, patchPt2, patchPt3);
		}
	}
	glEnd();
}

Vector4 BezierPatch::calcPt(double u, double v) {
	Vector4 q0 = bez(u, ctrlpts[0],ctrlpts[1],ctrlpts[2],ctrlpts[3]);
	Vector4 q1 = bez(u, ctrlpts[4],ctrlpts[5],ctrlpts[6],ctrlpts[7]);
	Vector4 q2 = bez(u, ctrlpts[8],ctrlpts[9],ctrlpts[10],ctrlpts[11]);
	Vector4 q3 = bez(u, ctrlpts[12],ctrlpts[13],ctrlpts[14],ctrlpts[15]);

	Vector4 x = bez(v, q0,q1,q2,q3);
	return x;
}


Vector4 BezierPatch::bez(double t, Vector4 p0, Vector4 p1, Vector4 p2, Vector4 p3) {
	Matrix4 B;
	
	//row 0
	B.m[0][0] =  p0.x;
	B.m[0][1] =  p1.x;
	B.m[0][2] =  p2.x;
	B.m[0][3] =  p3.x;
	
	//row 1
	B.m[1][0] =  p0.y;
	B.m[1][1] =  p1.y;
	B.m[1][2] =  p2.y;
	B.m[1][3] =  p3.y;

	//row 2
	B.m[2][0] =  p0.z;
	B.m[2][1] =  p1.z;
	B.m[2][2] =  p2.z;
	B.m[2][3] =  p3.z;
	
	//row 3
	B.m[3][0] =  0;
	B.m[3][1] =  0;
	B.m[3][2] =  0;
	B.m[3][3] =  0;

	//Create a vector with our Bernstein coefficients
	Vector4 C(bCoeff(3, 0, t),
			  bCoeff(3, 1, t),
			  bCoeff(3, 2, t),
			  bCoeff(3, 3, t));
    
	//Calculate the final point q
	Vector4 q = B * C;

	//And make sure q is a point by setting its w-onent to 1
	q.w = 1.0;

	return q;
}

double BezierPatch::bCoeff(long n, long i, double t)
{
    //long n: is the degree of our curve, in the case of a cubic curve it is 3
    //long i: the index of the Bernstein coefficient and the control point
    //double t: is the time we are evaluating at

    //Calculate the Bernstein coefficient
    return combo(n, i) * pow(1.0-t, n-i) * pow(t, i);
}

long BezierPatch::combo(long n, long i)
{
    //C(n, i) = n! / ((n-1)! * i!)
    return factorial(n) / ( factorial(n-i) * factorial(i) );
}

long BezierPatch::factorial(long n)
{
    long result = 1;

    //If n is 0, by definition 0! is equal to 1
    if(n <= 0)
        return result;

    //Calculate the factorial, n * n-1 * n-2 * ... * 1
    for(long i = n; i > 0; --i)
    {
        result *= i;
    }

    return result;
} 

/* OLD POINT CALCULATION CODE 
Vector4 BezierPatch::calcPt(double u, double v) {
	if(u >= 0 && u <=1 && v >=0 && v <= 1) {
		Vector4 U(pow(u,3), pow(u,2), u, 1);
		Vector4 V(pow(v,3), pow(v,2), v, 1);
		Matrix4 G_x = getCtrlPtMatrix('x'); Matrix4 G_y = getCtrlPtMatrix('y'); Matrix4 G_z = getCtrlPtMatrix('z');
		Matrix4 C_x = B_bez *G_x *B_bez; Matrix4 C_y = B_bez *G_y *B_bez; Matrix4 C_z = B_bez *G_z *B_bez;

		double x = V.dot(C_x*U);
		double y = V.dot(C_y*U);
		double z = V.dot(C_z*U);
		return Vector4(x,y,z,1);
	} 
	return Vector4(0,0,0,0); //Invalid parameters, return the origin
}

Matrix4 BezierPatch::getCtrlPtMatrix(char coord) {
	Matrix4 G;
	for(int i=0; i<4; i++) {
		for(int j=0; j<4; j++) {
			int vecPos = 3*i + j;
			double val;
			switch(coord) {
			case 'x':
				val = ctrlpts.at(vecPos).getX();
				break;
			case 'y':
				val = ctrlpts.at(vecPos).getY();
				break;
			case 'z':
				val = ctrlpts.at(vecPos).getZ();
				break;
			}
			G.m[i][j] = val; 
		}
	}
	return G;
}

void BezierPatch::makeBezMatrix() {
	Matrix4 B;
	
	//row 0
	B.m[0][0] = -1;
	B.m[0][1] =  3;
	B.m[0][2] = -3;
	B.m[0][3] =  1;
	
	//row 1
	B.m[1][0] =  3;
	B.m[1][1] = -6;
	B.m[1][2] =  3;
	B.m[1][3] =  0;

	//row 2
	B.m[2][0] = -3;
	B.m[2][1] =  3;
	B.m[2][2] =  0;
	B.m[2][3] =  0;
	
	//row 3
	B.m[3][0] =  1;
	B.m[3][1] =  0;
	B.m[3][2] =  0;
	B.m[3][3] =  0;

	B_bez = B;
}
*/