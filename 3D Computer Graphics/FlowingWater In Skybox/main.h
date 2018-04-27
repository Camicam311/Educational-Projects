#ifndef _MAIN_H_
#define _MAIN_H_

#include "shader.h"
#include "CubeMap.h"
#include "BezierPatch.h"
#include "Window.h"
#include <GL/glut.h>

namespace Globals
{
	extern BezierPatch patch;
	extern Matrix4 camera;
	extern CubeMap cube_map;
	extern Shader* shader;
	extern bool has_reflection;
};

#endif