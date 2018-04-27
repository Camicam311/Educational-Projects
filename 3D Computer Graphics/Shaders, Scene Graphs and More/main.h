#ifndef _MAIN_H
#define _MAIN_H

// In Visual Studio 2005 Microsoft added safer versions (denoted by a "_s" suffix) to many 
// common C/C++ run time functions.  Currently the ISO Standards Committee for C and C++ 
// is determining if they are going to add them to the official language set.  Until then, 
// this define will remove warnings about using the "unsafe" versions of these functions.
#define _CRT_SECURE_NO_DEPRECATE
#include "GLee.h"
#include <stdlib.h>
#include <GL/glut.h>
#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <string>										// Used for our STL string objects
#include <fstream>										// Used for our ifstream object to load text files

using namespace std;


#include "Vector3.h"
#include "SceneGraph.h"
#include "Robot.h"
#include "Tree.h"
#include "Window.h"
#include "Camera.h"
#include "CShader.h"

// These are for our multi-texture defines
#define GL_TEXTURE0_ARB                     0x84C0
#define GL_TEXTURE1_ARB                     0x84C1
#define GL_TEXTURE2_ARB                     0x84C2
#define GL_TEXTURE3_ARB                     0x84C3
#define GL_TEXTURE4_ARB                     0x84C4

// These store our width and height for the shadow texture.  The higher the
// texture size the better quality shadow.  Must be power of two for most video cards.
#define SHADOW_WIDTH 512
#define SHADOW_HEIGHT 512

// The max textures we will use in our array
#define MAX_TEXTURES 1000								

// This is the index into the g_Texture array that will hold our depth texture
#define SHADOW_ID	0

#define GL_TEXTURE_COMPARE_MODE_ARB       0x884C
#define GL_TEXTURE_COMPARE_FUNC_ARB       0x884D
#define GL_COMPARE_R_TO_TEXTURE_ARB       0x884E

// This is how fast our camera moves
#define kSpeed	20.0f	

namespace Globals
{
	extern bool  g_bFullScreen;								// Set full screen as default
	extern float g_DT;	
	extern GLenum g_Texture[MAX_TEXTURES];	
	extern CCamera g_Camera;
	extern float g_LightPosition[4];
	extern float g_LightView[3];
	extern float g_Direction;
	extern float g_mProjection[16];
	extern float g_mModelView[16];
	extern CShader g_Shader;
};


void RenderScene(); // This draws everything to the screen
bool AnimateNextFrame(int desiredFrameRate);
void CreateRenderTexture(GLenum textureArray[], int sizeX, int sizeY, int channels, int type, int textureID);
void StoreLightMatrices();
void processNormalKeys(unsigned char key, int x, int y);
void processMousePassiveMotion(int x, int y);

#endif 