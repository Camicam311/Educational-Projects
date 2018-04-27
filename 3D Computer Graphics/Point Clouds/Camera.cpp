#include "Camera.h"
Camera::Camera() {
	Vector3 empty(0,0,0);
	setOrientation(empty,empty,empty);
}

Camera::Camera(Vector3 _e, Vector3 _d, Vector3 _up) {
	setOrientation(_e,_d,_up);
}

void Camera::setOrientation(Vector3& _e, Vector3& _d, Vector3& _up) {
	e = _e;
	d = _d;
	up = _up;

	//Calculate Z
	z = (e - d);
	z.normalize();
	z.print("The Z Vector: ");

	//Calculate X
	x = (up.cross(z));
	x.normalize();
	x.print("The X Vector: ");
	
	//Calculate Y
	y = z.cross(x);
	y.print("The Y Vector: ");

	//Define the Camera Matrix, C
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

	/*R.m[0][3] = e.getX();
	R.m[1][3] = e.getY();
	R.m[2][3] = e.getZ();*/
	R.m[3][3] = 1; 


	Matrix4 T; 
	T.identity();
	T.m[0][3] = -1*e.getX();
	T.m[1][3] = -1*e.getY();
	T.m[2][3] = -1*e.getZ();
	T.m[3][3] = 1;
	//T.makeTranslate(-e.x, -e.y, -e.z);

	//c.m[3,2] needs to be around -14
	R.transpose();
	C = R*T;
	C.print("The Camera Matrix");
	C.transpose();
}

Matrix4 Camera::getCameraMatrix() {
	return C;
}

