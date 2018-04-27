//
//  Vector3.h
//  OpenGLTest
//
//  Created by Adam Fisher on 10/8/14.
//  Copyright (c) 2014 Fisher Fishery. All rights reserved.
//

#ifndef OpenGLTest_Vector3_h
#define OpenGLTest_Vector3_h
#include <string>

#define M_PI 3.14159265358979323846

class Vector3
{
public:
	double x;
    double y;
    double z;
    Vector3();
    Vector3(double, double, double);
    Vector3 operator+(const Vector3&);
    Vector3 operator-(const Vector3&);
    Vector3& operator=(const Vector3& );
	Vector3 Vector3::operator*(const float& scalar); //Multiply vector by a scalar
    double getX() const;
    double getY() const;
    double getZ() const;
    void scale(double s);
    double dot(const Vector3&);
    Vector3 cross(const Vector3&);
    double length();
    void normalize();
    void print(std::string comment);
};

#endif