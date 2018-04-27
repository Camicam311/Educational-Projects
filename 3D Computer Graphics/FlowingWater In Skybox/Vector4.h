#ifndef _VECTOR4_H_
#define _VECTOR4_H_

#include <string>
using namespace std;

class Matrix4;

class Vector4
{
  public:
	double x, y, z, w;
	Vector4();
	Vector4(double x, double y, double z, double w); //constructor with four parameters for the vector coordinates
	
	Vector4 operator+(const Vector4&); // overload operator '+' for addition
	Vector4 operator-(const Vector4&); // overload operator '-' for subtraction
	Vector4 operator*(Matrix4& m);
	double dot(const Vector4& v);

	void dehomogenize(); // dehomogenize the vector (scale it so that its fourth component is equal to one)
	void print(string comment); // print x,y,z and w components of the vector after a comment string
	double magnitude();
	double getX() const;
    double getY() const;
    double getZ() const;
    double getW() const;
};

#endif