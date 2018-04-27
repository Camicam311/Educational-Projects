#include "Cube.h"
#include "Matrix4.h"

using namespace std;

Cube::Cube()
{
  angle = 0.0;
}

Matrix4& Cube::getMatrix()
{
  return model2world;
}

void Cube::spin(double deg)   // deg is in degrees
{
  angle = deg;
  if (angle > 360.0 || angle < -360.0) angle = 0.0;
  model2world.makeRotateY(angle);   // This creates the matrix to rotate the cube
}

void Cube::scale(double factor) {
	model2world.makeScale(factor, factor, factor);
}

void Cube::move(double x, double y, double z) {
	model2world.makeTranslate(x, y, z);
}

void Cube::reset() {
	model2world.identity();
}

void Cube::orbit(double deg, Vector3 &axis) {
	angle += deg;
	Matrix4 tempM = Matrix4(); 
	tempM.identity();
	tempM.makeRotate(angle, axis);
	if (angle > 360.0 || angle < -360.0) angle = 0.0;
	model2world = tempM*model2world;
}