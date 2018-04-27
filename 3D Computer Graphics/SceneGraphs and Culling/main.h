#ifndef _MAIN_H_
#define _MAIN_H_

#include "SceneGraph.h"
#include "Robot.h"
#include <vector>

namespace Globals
{
	extern SceneGraph world;
	extern Matrix4 Camera;
	extern Vector3 e;
	extern Vector3 d;
	extern Vector3 up;
	extern vector<Robot*> robotGroup;
	extern FrustumG frustum;
	extern bool has_culling;
};

#endif