#include "FrustumG.h"
#include <iostream>
#define ANG2RAD 3.14159265358979323846/180.0


Plane::Plane(void) {
	//Silence is golden. 
}

void Plane::setNormalAndPoint(Vector3 _normal, Vector3 _point) {
	normal = _normal;
	point = _point;

}

double Plane::distance(Vector3 &p) {
	return normal.dot((p - point)); //TODO
}


FrustumG::FrustumG(void) {
	//Silence is golden
}

//Takes the same exact params as gluPerspective, update this with gluPerspective
void FrustumG::setCamInternals(float angle, float ratio, float nearD, float farD) {
	// store the information
	this->ratio = ratio;
	this->angle = angle;
	this->nearD = nearD;
	this->farD = farD;

	// compute width and height of the near and far plane sections
	tang = (float)tan(ANG2RAD * angle * 0.5) ;
	nh = nearD * tang;
	nw = nh * ratio;
	fh = farD  * tang;
	fw = fh * ratio;
}


//The Same Parms as Camera, update this with Camera matrix
void FrustumG::setCamDef(Vector3 &p, Vector3 &l, Vector3 &u) {
	Vector3 dir,nc,fc,X,Y,Z;

	// compute the Z axis of camera
	// this axis points in the opposite direction from
	// the looking direction
	Z = p - l;
	Z.normalize();

	// X axis of camera with given "up" vector and Z axis
	X = u.cross(Z);
	X.normalize();

	// the real "up" vector is the cross product of Z and X
	Y = Z.cross(X);

	// compute the centers of the near and far planes
	nc = p - Z * nearD;
	fc = p - Z * farD;

	pl[NEARP].setNormalAndPoint(Z*-1,nc);
	pl[FARP].setNormalAndPoint(Z,fc);

	Vector3 aux,normal;

	aux = (nc + Y*nh) - p;
	aux.normalize();
	normal = aux.cross(X);
	pl[TOP].setNormalAndPoint(normal,nc+Y*nh);

	aux = (nc - Y*nh) - p;
	aux.normalize();
	normal = X.cross(aux);
	pl[BOTTOM].setNormalAndPoint(normal,nc-Y*nh);

	aux = (nc - X*nw) - p;
	aux.normalize();
	normal = aux.cross(Y);
	pl[LEFT].setNormalAndPoint(normal,nc-X*nw);

	aux = (nc + X*nw) - p;
	aux.normalize();
	normal = Y.cross(aux);
	pl[RIGHT].setNormalAndPoint(normal,nc+X*nw);
/*
	for(int i=0; i<6; i++) {
		cout << "Plane " << i << endl;
		pl[i].normal.print("Plane Normal");
		pl[i].point.print("Plane Point");
	}
*/
}

int FrustumG::sphereInFrustum(Vector3 &center, float radius) {
	double distance;
	int result = INSIDE;

	for(int i=0; i < 6; i++) {
		distance = pl[i].distance(center);
		//std::cout << "distance->" << distance << " radius->" << radius << endl;
		if(distance < -radius)
			return OUTSIDE;
		else if (distance < radius)
			result = INTERSECT;
	}
	return result;
}