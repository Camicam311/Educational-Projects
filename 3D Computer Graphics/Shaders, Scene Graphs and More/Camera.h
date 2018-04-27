#ifndef _CAMERA_H
#define _CAMERA_H

#include "main.h"


// This is our camera class
class CCamera {

public:

	// Our camera constructor
	CCamera();	

	// These are are data access functions for our camera's private data
	Vector3 Position() {	return m_vPosition;		}
	Vector3 View()		{	return m_vView;			}
	Vector3 UpVector() {	return m_vUpVector;		}
	Vector3 Strafe()	{	return m_vStrafe;		}
	
	// This changes the position, view, and up vector of the camera.
	// This is primarily used for initialization
	void PositionCamera(float positionX, float positionY, float positionZ,
			 		    float viewX,     float viewY,     float viewZ,
						float upVectorX, float upVectorY, float upVectorZ);

	// This rotates the camera's view around the position depending on the values passed in.
	void RotateView(float angle, float X, float Y, float Z);

	// This rotates the camera around a point (I.E. your character).
	void RotateAroundPoint(Vector3 vCenter, float X, float Y, float Z);

	// This strafes the camera left or right depending on the speed (+/-) 
	void StrafeCamera(float speed);

	// This will move the camera forward or backward depending on the speed
	void MoveCamera(float speed);

	// This updates the camera's view and other data (Should be called each frame)
	void Update();

	// This uses gluLookAt() to tell OpenGL where to look
	void Look();

	// The camera's position
	Vector3 m_vPosition;					

	// The camera's view
	Vector3 m_vView;						

	// The camera's up vector
	Vector3 m_vUpVector;		
	
	// The camera's strafe vector
	Vector3 m_vStrafe;						
};

#endif