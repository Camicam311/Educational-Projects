#ifndef _ROBOT_H_
#define _ROBOT_H_
#include "Matrix4.h"
#include "SceneGraph.h"
class Robot
{
public:
	Node* root; 
	Node* arm_l; Node* arm_r; Node* leg_l; Node* leg_r; //The Matrix Transforms for walking
	Cube* robot_head; Cube* robot_body;  Sphere* left_shoulder; Sphere* right_shoulder; Cube* left_arm; Cube* right_arm; //The robot body components
	Sphere* left_hip; Sphere* right_hip; Cube* left_leg; Cube* right_leg;  Sphere* left_foot; Sphere* right_foot;
	
	//The extreme cooridnates of the robot object
	double height;
	double width;


	double orientation; //Robots orientation
	int swing_direction;
	double arm_l_angle;
	double arm_r_angle;
	double leg_l_angle;
	double leg_r_angle;
	bool enable_wires;
	Vector3 color;

	Robot(bool _enable_wires = false, Vector3 _color = Vector3(0.5,0.5,0.5));
	void setWires(bool enable_wires);
	void setBoundingSphere(bool enable_wires);
	void spin(int angle);
	void walk(int angle);
	void calcExtrema();
};
#endif