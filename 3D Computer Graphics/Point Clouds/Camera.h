#ifndef _CAMERA_H_
#define _CAMERA_H_

#include "Vector3.h"
#include "Matrix4.h"

class Camera
{
	public:
		//Member Variables
		Vector3 e, d, up;
		Vector3 x,y,z;
		Matrix4 C;

		//Member Methods
		Camera();
		Camera(Vector3 _e, Vector3 _d, Vector3 _up); //Creates the Camera Matrix
		void setOrientation(Vector3& _e, Vector3& _d, Vector3& _up); //Updates the cameras orientation
		void setColumn(int col, Vector3 vec, double last_ele); //Set a column vector of a 4x4 matrix
		Matrix4 getCameraMatrix();
}; 

#endif

