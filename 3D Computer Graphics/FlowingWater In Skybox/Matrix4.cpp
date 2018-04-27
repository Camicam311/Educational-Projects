#include <math.h>
#include <iostream>
#include "Matrix4.h"

using namespace std;

Matrix4::Matrix4()
{
  for (int i=0; i<4; ++i)
  {
    for (int j=0; j<4; ++j)
    {
      m[i][j] = 0;
    }
  }
} 

Matrix4& Matrix4::operator=(const Matrix4& m2)
{
  if (this != &m2)
  {
    for (int i=0; i<4; ++i)
    {
      for (int j=0; j<4; ++j)
      {
        m[i][j] = m2.m[i][j];
      }
    }
  }
  return *this;
}

// return pointer to matrix elements
double* Matrix4::getPointer()
{
  return &m[0][0];
}

// set matrix to identity matrix
void Matrix4::identity()
{
  for (int i=0; i<4; ++i)
  {
    for (int j=0; j<4; ++j)
    {
      if (i==j) 
        m[i][j] = 1.0; 
      else 
        m[i][j] = 0.0;
    }
  }
}

// transpose the matrix (mirror at diagonal)
void Matrix4::transpose()
{
  Matrix4 temp;
  for (int i=0; i<4; ++i)
  {
    for (int j=0; j<4; ++j)
    {
      temp.m[j][i] = m[i][j];
    }
  }
  *this = temp;  // copy temporary values to this matrix
}

// Creates a rotation matrix which rotates about the y axis.
// angle is expected in degrees
void Matrix4::makeRotateX(double angle)
{
    angle = angle / 180.0 * M_PI;  // convert from degrees to radians
	Matrix4 tM = Matrix4();
	tM.identity();
  	tM.m[1][1] = cos(angle);
	tM.m[2][1] = sin(angle);
	tM.m[1][2] = -sin(angle);
	tM.m[2][2] = cos(angle);
	*this = (*this)*tM;
}

void Matrix4::makeRotateY(double angle)
{
	angle = angle / 180.0 * M_PI;  // convert from degrees to 
	Matrix4 tM = Matrix4();
	tM.identity();
	tM.m[0][0] = cos(angle);
	tM.m[0][2] = sin(angle);
	tM.m[2][0] = -sin(angle);
	tM.m[2][2] = cos(angle);
	*this = (*this)*tM;
}

void Matrix4::makeRotateZ(double angle)
{
    angle = angle / 180.0 * M_PI;  // convert from degrees to radians
	Matrix4 tM = Matrix4();
	tM.identity();
  	tM.m[0][0] = cos(angle);
	tM.m[1][0] = sin(angle);
	tM.m[0][1] = -sin(angle);
	tM.m[1][1] = cos(angle);
	*this = (*this)*tM;
}

void Matrix4::makeRotate(double angle, const Vector3& axis)
{
   angle = angle / 180.0 * M_PI;  // convert from degrees to radians
   Matrix4 tM = Matrix4();
   tM.identity();
   //Define rotation matrix about an arbitrary axis
   double x = axis.getX();
   double y = axis.getY();
   double z = axis.getZ();
   double x_2 = pow(x, 2);
   double y_2 = pow(y, 2);
   double z_2 = pow(z, 2);
   double cos_t = cos(angle);
   double sin_t = sin(angle);
   tM.m[0][0] = (x_2) + (cos_t*(1 - x_2)); 
   tM.m[0][1] = (x*y*(1-cos_t)) - (z*sin_t);
   tM.m[0][2] = (x*z*(1-cos_t)) + y*sin_t;
   tM.m[1][0] = (x*y*(1-cos_t)) + (z*sin_t);
   tM.m[1][1] = y_2 + (cos_t*(1 - y_2));
   tM.m[1][2] = (y*z*(1-cos_t)) - (x*sin_t);
   tM.m[2][0] = (x*z*(1-cos_t)) - (y*sin_t);
   tM.m[2][1] = (y*z*(1-cos_t)) + (x*sin_t);
   tM.m[2][2] = (z_2) + (cos_t*(1-z_2));
   *this = (*this)*tM;
}

Matrix4 Matrix4::operator*(const Matrix4& m2)
{
    Matrix4 multiplicand;
    for (int i = 0; i < 4; ++i)
    {
        for (int j = 0; j < 4; j ++)
        {
            double sum = 0;
            for (int k = 0; k < 4; k++)
            {
                sum += m[i][k] * m2.m[k][j];
            }
            multiplicand.m[i][j] = sum;
        }
    }
    return multiplicand;
}

Vector4 Matrix4::operator*(const Vector4& v)
{
    double vx = m[0][0]*v.getX() + m[0][1]*v.getY() + m[0][2]*v.getZ() + m[0][3]*v.getW();
    double vy = m[1][0]*v.getX() + m[1][1]*v.getY() + m[1][2]*v.getZ() + m[1][3]*v.getW();
    double vz = m[2][0]*v.getX() + m[2][1]*v.getY() + m[2][2]*v.getZ() + m[2][3]*v.getW();
    double vw = m[3][0]*v.getX() + m[3][1]*v.getY() + m[3][2]*v.getZ() + m[3][3]*v.getW();
    
    return Vector4(vx, vy, vz, vw);
}

void Matrix4::print(string comment)
{ 
    cout << comment << endl;
    for (int i = 0; i < 4; ++i)
    {
        for (int j = 0; j < 4; j ++)
        {
            cout << m[i][j] << ", ";
        }
        cout << endl;
    }
}

void Matrix4::makeTranslate(double tx, double ty, double tz) {
	m[0][3] += tx;
	m[1][3] += ty;
	m[2][3] += tz;
}

void Matrix4::makeScale(double sx, double sy, double sz) {
	Matrix4 tM = Matrix4();
	tM.identity();
	tM.m[0][0] *= sx;
	tM.m[1][1] *= sy;
	tM.m[2][2] *= sz;
	*this = (*this)*tM;
} 


//Special Matrices
void Matrix4::makeCamera(Vector3& e, Vector3& d, Vector3& up) {
	Vector3 x,y,z;

	//Calculate Z
	z = (e - d);
	z.normalize();

	//Calculate X
	x = (up.cross(z));
	x.normalize();
	
	//Calculate Y
	y = z.cross(x);

	//Define the Camera Matrix, C by defining the rotation and translation matrices
	Matrix4 R;
	R.identity();
	R.m[0][0] = x.getX();
	R.m[1][0] = x.getY();
	R.m[2][0] = x.getZ();
	R.m[3][0] = 0;

	R.m[0][1] = y.getX();
	R.m[1][1] = y.getY();
	R.m[2][1] = y.getZ();
	R.m[3][1] = 0;

	R.m[0][2] = z.getX();
	R.m[1][2] = z.getY();
	R.m[2][2] = z.getZ();
	R.m[3][2] = 0;
	R.m[3][3] = 1; 


	Matrix4 T; 
	T.identity();
	T.m[0][3] = -1*e.getX();
	T.m[1][3] = -1*e.getY();
	T.m[2][3] = -1*e.getZ();
	T.m[3][3] = 1;

	R.transpose();
	*(this) = R*T; 
}

void Matrix4::makeViewport(float x1, float x0, float y1, float y0) {
	Matrix4 D;
	D.identity();
	D.m[0][0] = (x1-x0)/2;
	D.m[1][1] = (y1-y0)/2;
	D.m[2][2] = 1/2;
	D.m[0][3] = (x0+x1)/2;
	D.m[1][3] = (y0+y1)/2;
	D.m[2][3] = 1/2;
	*(this) = D;
}

void Matrix4::makeViewport(float window_width, float window_height) {
	makeViewport(window_width,  0, window_height, 0);
}

void Matrix4::makeProjection(float fov, float aspect, float near, float far) {
	Matrix4 P;
	P.identity();
	P.m[0][0] = ( 1/( aspect * tan((fov/2)*(M_PI/180.0)) ) );
	P.m[1][1] = ( 1/( tan((fov/2)*(M_PI/180.0)) ) );
	P.m[2][2] = ((near + far)/(near - far));
	P.m[2][3] = (2*near*far)/(near - far);
	P.m[3][2] = -1;
	P.m[3][3] = 0;
	*(this) = P;
}