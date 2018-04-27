//
//  Vector3.cpp
//  OpenGLTest
//
//  Created by Adam Fisher on 10/8/14.
//  Copyright (c) 2014 Fisher Fishery. All rights reserved.
//

#include <math.h>
#include "Vector3.h"
#include <iostream>

Vector3::Vector3()
{
    x = 0;
    y = 0;
    z = 0;
}
Vector3::Vector3(double xs, double ys, double zs)
{
    x = xs;
    y = ys;
    z = zs;
}

Vector3 Vector3::operator+(const Vector3& v2)
{
    double sumX = x + v2.x;
    double sumY = y + v2.y;
    double sumZ = z + v2.z;
    return Vector3(sumX, sumY, sumZ);

}

Vector3 Vector3::operator-(const Vector3& v2)
{
    double sumX = x - v2.x;
    double sumY = y - v2.y;
    double sumZ = z - v2 .z;
    return Vector3(sumX, sumY, sumZ);
    
}
Vector3& Vector3::operator=(const Vector3& v2)
{
   if (this != &v2)
   {
       x = v2.x;
       y = v2.y;
       z = v2.z;
   }
    return *this;
}

void Vector3::scale(double s)
{
    x*= s;
    y*= s;
    z*= s;
}


double Vector3::getX() const
{
    return x;
}
double Vector3::getY() const
{
    return y;
}
double Vector3::getZ() const
{
    return z;
}

void Vector3::toInt() 
{
	x = floor(x);
	y = floor(y);
	z = floor(z);
}

double Vector3::dot(const Vector3& v)
{
    return v.x*x + v.y*y + v.z*z;
}
Vector3 Vector3::cross(const Vector3& v)
{
    return Vector3(y*v.z - z*v.y, z*v.x - x*v.z, x*v.y - y*v.x);
}

Vector3 Vector3::operator*(const double& scalar) {
	double newx = x*scalar;
	double newy = y*scalar;
	double newz = z*scalar; 
	return Vector3(newx, newy, newz);
}

double Vector3::length()
{
    return sqrt(pow(x,2) + pow(y,2) + pow(z,2));
}

void Vector3::normalize()
{
	double xtmp, ytmp, ztmp;
    xtmp = x/length();
    ytmp = y/length();
    ztmp = z/length();
	x = xtmp;
	y = ytmp;
	z = ztmp;
}

void Vector3::print(std::string comment)
{
    std::cout << comment << " ";
    std::cout << "x-> " << x << ", y-> " << y << " z-> " << z << std::endl;
}
