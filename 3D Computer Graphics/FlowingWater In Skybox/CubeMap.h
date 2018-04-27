#pragma once

#include <iostream>
#include "GLee.h"
#include <vector>

using namespace std;

class CubeMap
{
public:
	GLuint front, left, back, right, top;
	CubeMap(void);
	~CubeMap(void);	
	void load_textures(char* ff, char* fl, char* fb, char* fr, char* ft);
	void bind_textures();
	void render_quads();
	void render_box();
};

