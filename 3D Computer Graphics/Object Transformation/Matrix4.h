#ifndef _MATRIX4_H_
#define _MATRIX4_H_

#define M_PI 3.14159265358979323846
#include <string>
#include "Vector3.h"
#include "Vector4.h"

class Matrix4
{
  protected:
    double m[4][4];   // matrix elements; first index is for rows, second for columns (row-major)
    
  public:
    Matrix4();     
    Matrix4& operator=(const Matrix4&);
    double* getPointer(); 
	Matrix4 operator*(const Matrix4& m2); //multiply matrix with matrix
	Vector4 operator*(const Vector4& v); //multiply matrix with vector
    void identity(); 
    void transpose();
    void makeRotateX(double); //make rotation matrix about X axis with angle in degrees
    void makeRotateY(double); //make rotation matrix about Y axis with angle in degrees
    void makeRotateZ(double ); //make rotation matrix about Z axis with angle in degrees
    void makeRotate(double angle, const Vector3& axis); //Make a rotation matrix about an arbitrary axis
    void makeScale(double sx, double sy, double sz); //make a non-uniform scaling matrix
    void makeTranslate(double tx, double ty, double tz); //make a translation matrix
    void print(std::string comment);// print the matrix (display all 16 matrix components numerically on the screen in a 4x4 array)
    
};

#endif