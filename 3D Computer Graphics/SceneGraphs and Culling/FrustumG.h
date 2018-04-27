#ifndef _FrustumG_H_
#define _FrustumG_H_
#include "Matrix4.h"

class Plane {
public:
	Vector3 normal;
	Vector3 point;
	Plane();
	void setNormalAndPoint(Vector3 normal,Vector3 point);
	double distance(Vector3 &p);
};


class FrustumG
{
private:
	enum {
		TOP = 0, BOTTOM, LEFT,
		RIGHT, NEARP, FARP
	};
public:
	FrustumG();

	static enum {OUTSIDE = 0, INTERSECT = 1, INSIDE = 2};
	Plane pl[6];

	float nearD, farD, ratio, angle, tang;
	float nw, nh, fw, fh;

	void setCamInternals(float angle, float ratio, float nearD, float farD);
	void setCamDef(Vector3 &p, Vector3 &l, Vector3 &u);
	int sphereInFrustum(Vector3 &p, float radius);
};
#endif

