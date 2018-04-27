#ifndef _MAIN_H_
#define _MAIN_H_

#include "Cube.h"
#include "Camera.h"
#include "House.h"
#include "PointCloud.h"

namespace Globals
{
    extern Cube cube;
	extern double spin_angle;
	extern Camera c;
	extern int obj_id;
	extern House house;
	extern PointCloud cur_cloud;
};

#endif