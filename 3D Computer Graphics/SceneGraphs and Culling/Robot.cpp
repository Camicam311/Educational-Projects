#include "Robot.h"

Robot::Robot(bool _enable_wires, Vector3 _color) {
  //Set memeber variables
  orientation = -45; //Robots orientation
  arm_l_angle = -20;
  arm_r_angle = 20;
  leg_l_angle = 0;
  leg_r_angle = 0;
  swing_direction = 0; 
  enable_wires = _enable_wires;
  color = _color;

  //Start Robot Rendering Process
  Matrix4 robotM;
  robotM.identity();
  robotM.makeRotate(orientation, Vector3(0,1,0));
  MatrixTransform* robot = new MatrixTransform(robotM);
 

  //Add robot head
  Matrix4 headScale;
  headScale.identity();
  headScale.makeScale(3,3,3);
  MatrixTransform* headScaleTransform = new MatrixTransform(headScale);

  robot_head = new Cube(enable_wires, 1, color); 

  robot->addChild(headScaleTransform);
  headScaleTransform->addChild(robot_head);

  //Add robot body
  Matrix4 bodyTranslation; 
  bodyTranslation.identity();
  bodyTranslation.makeTranslate(0, -4.5, 0);
  MatrixTransform* bodyTransform = new MatrixTransform(bodyTranslation);

  Matrix4 bodyScale; 
  bodyScale.identity();
  bodyScale.makeScale(5.3, 6, 4);
  MatrixTransform* bodyScaleTransform = new MatrixTransform(bodyScale);

  robot_body = new Cube(enable_wires, 1, color);

  robot->addChild(bodyTransform);
  bodyTransform->addChild(bodyScaleTransform);
  bodyScaleTransform->addChild(robot_body);
  

  //add left robot shoulder
  Matrix4 leftShoulderRotation;
  leftShoulderRotation.identity();
  leftShoulderRotation.makeRotate(arm_l_angle, Vector3(0,0,1));
  MatrixTransform* leftShoulderRotationTransform = new MatrixTransform(leftShoulderRotation);


  Matrix4  leftShoulderTranslation; 
  leftShoulderTranslation.identity();
  leftShoulderTranslation.makeTranslate(-3.7, 2, 0);
  MatrixTransform* leftShoulderTranslationTransform = new MatrixTransform(leftShoulderTranslation);

  left_shoulder = new Sphere(enable_wires, 1, 20, 20, color);
 
  bodyTransform->addChild(leftShoulderTranslationTransform);
  leftShoulderTranslationTransform->addChild(leftShoulderRotationTransform);
  leftShoulderRotationTransform->addChild(left_shoulder);

  //add left robot arm
  Matrix4 leftArmScale;
  leftArmScale.identity();
  leftArmScale.makeScale(2, 4, 2);
  MatrixTransform* leftArmScaleTransform = new MatrixTransform(leftArmScale);

  Matrix4 leftArmTranslation;
  leftArmTranslation.identity();
  leftArmTranslation.makeTranslate(0, -0.6, 0);
  MatrixTransform* leftArmTranslationTransform = new MatrixTransform(leftArmTranslation);

  left_arm = new Cube(enable_wires, 1, color);
  
  leftShoulderRotationTransform->addChild(leftArmScaleTransform);
  leftArmScaleTransform->addChild(leftArmTranslationTransform);
  leftArmTranslationTransform->addChild(left_arm);
 
 //add left robot shoulder
  Matrix4 rightShoulderRotation;
  rightShoulderRotation.identity();
  rightShoulderRotation.makeRotate(arm_r_angle, Vector3(0,0,1));
  MatrixTransform* rightShoulderRotationTransform = new MatrixTransform(rightShoulderRotation);

  Matrix4  rightShoulderTranslation; 
  rightShoulderTranslation.identity();
  rightShoulderTranslation.makeTranslate(3.7, 2, 0);
  MatrixTransform* rightShoulderTranslationTransform = new MatrixTransform(rightShoulderTranslation);

  right_shoulder = new Sphere(enable_wires, 1, 20, 20, color);
 
  bodyTransform->addChild(rightShoulderTranslationTransform);
  rightShoulderTranslationTransform->addChild(rightShoulderRotationTransform);
  rightShoulderRotationTransform->addChild(right_shoulder);

  //add right robot arm
  Matrix4 rightArmScale;
  rightArmScale.identity();
  rightArmScale.makeScale(2, 4, 2);
  MatrixTransform* rightArmScaleTransform = new MatrixTransform(rightArmScale);

  Matrix4 rightArmTranslation;
  rightArmTranslation.identity();
  rightArmTranslation.makeTranslate(0, -0.6, 0);
  MatrixTransform* rightArmTranslationTransform = new MatrixTransform(rightArmTranslation);

  right_arm = new Cube(enable_wires, 1, color);
  
  rightShoulderRotationTransform->addChild(rightArmScaleTransform);
  rightArmScaleTransform->addChild(rightArmTranslationTransform);
  rightArmTranslationTransform->addChild(right_arm);


  //add left robot leg hip
  Matrix4 leftHipTranslation; 
  leftHipTranslation.identity();
  leftHipTranslation.makeTranslate(-1.5, -4, 0);
  MatrixTransform* leftHipTranslationTransform = new MatrixTransform(leftHipTranslation);

  Matrix4 leftHipRotation;
  leftHipRotation.identity();
 leftHipRotation.makeRotate(leg_l_angle, Vector3(1,0,0));
  MatrixTransform* leftHipRotationTransform = new MatrixTransform(leftHipRotation);

  left_hip = new Sphere(enable_wires, 1, 20, 20, color);

  bodyTransform->addChild(leftHipTranslationTransform);
  leftHipTranslationTransform->addChild(leftHipRotationTransform);
  leftHipRotationTransform->addChild(left_hip);

  //add left robot leg
  Matrix4 leftLegScale;
  leftLegScale.identity();
  leftLegScale.makeScale(2, 4, 2);
  MatrixTransform* leftLegScaleTransform = new MatrixTransform(leftLegScale);

  Matrix4 leftLegTranslation;
  leftLegTranslation.identity();
  leftLegTranslation.makeTranslate(0, -0.6, 0);
  MatrixTransform* leftLegTranslationTransform = new MatrixTransform(leftLegTranslation);

  left_leg = new Cube(enable_wires, 1, color);

  leftHipRotationTransform->addChild(leftLegScaleTransform);
  leftLegScaleTransform->addChild(leftLegTranslationTransform);
  leftLegTranslationTransform->addChild(left_leg);

  //Left Foot
  Matrix4 leftFootScale;
  leftFootScale.identity();
  leftFootScale.makeScale(1.5, 1, 2.5);
  MatrixTransform* leftFootScaleTransform = new MatrixTransform(leftFootScale);

  Matrix4 leftFootTranslation;
  leftFootTranslation.identity();
  leftFootTranslation.makeTranslate(0, -4.5, 0.5);
  MatrixTransform* leftFootTranslationTransform = new MatrixTransform(leftFootTranslation);

  left_foot = new Sphere(enable_wires, 1,20,20, color);

  leftHipRotationTransform->addChild(leftFootScaleTransform);
  leftFootScaleTransform->addChild(leftFootTranslationTransform);
  leftFootTranslationTransform->addChild(left_foot);

  //add right robot leg hip
  Matrix4 rightHipTranslation; 
  rightHipTranslation.identity();
  rightHipTranslation.makeTranslate(1.5, -4, 0);
  MatrixTransform* rightHipTranslationTransform = new MatrixTransform(rightHipTranslation);

  Matrix4 rightHipRotation;
  rightHipRotation.identity();
 rightHipRotation.makeRotate(leg_r_angle, Vector3(1,0,0));
  MatrixTransform* rightHipRotationTransform = new MatrixTransform(rightHipRotation);

  right_hip = new Sphere(enable_wires, 1, 20, 20, color);

  bodyTransform->addChild(rightHipTranslationTransform);
  rightHipTranslationTransform->addChild(rightHipRotationTransform);
  rightHipRotationTransform->addChild(right_hip);

  //add right robot leg
  Matrix4 rightLegScale;
  rightLegScale.identity();
  rightLegScale.makeScale(2, 4, 2);
  MatrixTransform* rightLegScaleTransform = new MatrixTransform(rightLegScale);

  Matrix4 rightLegTranslation;
  rightLegTranslation.identity();
  rightLegTranslation.makeTranslate(0, -0.6, 0);
  MatrixTransform* rightLegTranslationTransform = new MatrixTransform(rightLegTranslation);

  right_leg = new Cube(enable_wires, 1, color);

  rightHipRotationTransform->addChild(rightLegScaleTransform);
  rightLegScaleTransform->addChild(rightLegTranslationTransform);
  rightLegTranslationTransform->addChild(right_leg);

  //right Foot
  Matrix4 rightFootScale;
  rightFootScale.identity();
  rightFootScale.makeScale(1.5, 1, 2.5);
  MatrixTransform* rightFootScaleTransform = new MatrixTransform(rightFootScale);

  Matrix4 rightFootTranslation;
  rightFootTranslation.identity();
  rightFootTranslation.makeTranslate(0, -4.5, 0.5);
  MatrixTransform* rightFootTranslationTransform = new MatrixTransform(rightFootTranslation);

  right_foot = new Sphere(enable_wires, 1,20,20, color);

  rightHipRotationTransform->addChild(rightFootScaleTransform);
  rightFootScaleTransform->addChild(rightFootTranslationTransform);
  rightFootTranslationTransform->addChild(right_foot);

  root = robot;
  arm_l = leftShoulderRotationTransform;
  arm_r = rightShoulderRotationTransform;
  leg_l = leftHipRotationTransform;
  leg_r = rightHipRotationTransform;
}


void Robot::setBoundingSphere(bool _enable_wires) {

}

void Robot::calcExtrema() {
	//Find the height and width coordinates of the robot, helper to 
	//determines the robots bounding sphere
}

void Robot::setWires(bool _enable_wires) {
	enable_wires = _enable_wires;
	//Update wires on all body components
	robot_head->enableWires = enable_wires; robot_body->enableWires = enable_wires;  
	left_shoulder->enableWires = enable_wires; right_shoulder->enableWires = enable_wires; 
	left_arm->enableWires = enable_wires; right_arm->enableWires = enable_wires; 
	left_hip->enableWires = enable_wires; right_hip->enableWires = enable_wires; 
	left_leg->enableWires = enable_wires; right_leg->enableWires = enable_wires; 
	left_foot->enableWires = enable_wires; right_foot->enableWires = enable_wires;
	
}

void Robot::spin(int angle) {
    orientation += angle;
	
	if (orientation > 360.0 || orientation < -360.0) orientation = 0.0;
	
	Matrix4 M;
	M.identity();
	M.makeRotate(orientation, Vector3(0,1,0));
	root->update(M);
}

void Robot::walk(int angle) {
	if (arm_r_angle > -70.0 && swing_direction == 0) { arm_r_angle -=angle; } else { swing_direction = 1; } 
	if (arm_r_angle < 70 && swing_direction == 1) { arm_r_angle += angle; } else { swing_direction = 0; }

	if (arm_l_angle < 70.0 && swing_direction == 0) { arm_l_angle +=angle; } else { swing_direction = 1; } 
	if (arm_l_angle > -70 && swing_direction == 1) { arm_l_angle -= angle; } else { swing_direction = 0; }

	if (leg_r_angle > -70.0 && swing_direction == 0) { leg_r_angle -=angle; } else { swing_direction = 1; } 
	if (leg_r_angle < 70 && swing_direction == 1) { leg_r_angle += angle; } else { swing_direction = 0; }

	if (leg_l_angle < 70.0 && swing_direction == 0) { leg_l_angle +=angle; } else { swing_direction = 1; } 
	if (leg_l_angle > -70 && swing_direction == 1) { leg_l_angle -= angle; } else { swing_direction = 0; }

	//Swing arms back and fourth
	Matrix4 MrArm; 
	MrArm.identity();
	MrArm.makeRotate(arm_r_angle, Vector3(1,0,0));
	arm_r->update(MrArm);
	
	Matrix4 MlArm; 
	MlArm.identity();
	MlArm.makeRotate(arm_l_angle, Vector3(1,0,0));
	arm_l->update(MlArm);

	//Swing legs back and fourth
	Matrix4 MrLeg; 
	MrLeg.identity();
	MrLeg.makeRotate(leg_r_angle, Vector3(1,0,0));
	leg_r->update(MrLeg);
	
	Matrix4 MlLeg; 
	MlLeg.identity();
	MlLeg.makeRotate(leg_l_angle, Vector3(1,0,0));
	leg_l->update(MlLeg);
}

