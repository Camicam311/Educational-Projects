#ifndef _CUBE_H_
#define _CUBE_H_

#include "Matrix4.h"

class Cube
{
  protected:
    Matrix4 model2world;            // model matrix (transforms model coordinates to world coordinates)
    double angle;                   // rotation angle [degrees]

  public:
    Cube();   // Constructor
    Matrix4& getMatrix();
    void spin(double);      // spin cube [degrees]
	void scale(double); //scale the cube by specified factor
	void move(double x, double y, double z); //move the cube x,y,z units
	void reset(); //reset the cube to its original state
	void orbit(double, Vector3& axis); //orbit the cube around specified axis
};

#endif

