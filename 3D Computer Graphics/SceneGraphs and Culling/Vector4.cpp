#include <math.h>
#include <iostream>
#include "Vector4.h"

using namespace std;

Vector4::Vector4() {
	x = 0;
	y = 0;
	z = 0;
	w = 0;
}

Vector4::Vector4(double x, double y, double z, double w){
	this->x = x;
	this->y = y;
	this->z = z;
	this->w = w;
}

Vector4 Vector4::operator+(const Vector4& v){
	double x_ = this->x + v.x;
	double y_ = this->y + v.y;
	double z_ = this->z + v.z;
	double w_ = this->w + v.w;
	return Vector4(x_, y_, z_, w_);
}

Vector4 Vector4::operator-(const Vector4& v){
	double x_ = this->x - v.x;
	double y_ = this->y - v.y;
	double z_ = this->z - v.z;
	double w_ = this->w - v.w;
	return Vector4(x_, y_, z_, w_);
}

void Vector4::dehomogenize(){
	this->x = this->x / this->w;
	this->y = this->y / this->w;
	this->z = this->z / this->w;
	this->w = 1; 
}

double Vector4::magnitude() {
	return sqrt(pow(x, 2) + pow(y, 2) + pow(z, 2) + pow(w,2));
}

void Vector4::print(string comment){
	cout << comment << endl;
	cout << "x->" << x << " y->"<< y << " z->" << z << " w->" << w << endl; 
}

double Vector4::getX() const
{
    return x;
}
double Vector4::getY() const
{
    return y;
}
double Vector4::getZ() const
{
    return z;
}
double Vector4::getW() const
{
    return w;
}