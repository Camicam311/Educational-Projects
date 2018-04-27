#include "CubeMap.h"

CubeMap::CubeMap(void)
{	
   // Enable/Disable features
   glPushAttrib(GL_ENABLE_BIT);
   glEnable(GL_TEXTURE_2D);
   glDisable(GL_DEPTH_TEST);
   glDisable(GL_LIGHTING);
   glDisable(GL_BLEND);

   // Just in case we set all vertices to white.
   glColor4f(1,1,1,1);
   /*
   load_textures(
	   "skybox/bridge/front.jpg",
	   "skybox/bridge/left.jpg",
	   "skybox/bridge/back.jpg",
	   "skybox/bridge/right.jpg",
	   "skybox/bridge/top.jpg"
	   );
   bind_textures();
   */
}

void CubeMap::load_textures(char* ff, char* fl, char* fb, char* fr, char* ft){
	/*
		//TODO load the files from a directory
		Gluint textures[6]
		Gluint cur_tex
		int count = 0
		for(filename from files in directory x) {
			cur_text = SOIL_load_OGL_texture (
				"skybox/bridge/front.jpg",
				SOIL_LOAD_AUTO,
				SOIL_CREATE_NEW_ID,
				SOIL_FLAG_MIPMAPS | SOIL_FLAG_COMPRESS_TO_DXT
			);
			textures[count] = cur_text

			count++
		}
	*/
	/*
	front = SOIL_load_OGL_texture (
        "skybox/bridge/front.jpg",
        SOIL_LOAD_AUTO,
        SOIL_CREATE_NEW_ID,
        SOIL_FLAG_MIPMAPS | SOIL_FLAG_COMPRESS_TO_DXT
    );
   left = SOIL_load_OGL_texture (
       "skybox/bridge/left.jpg",
        SOIL_LOAD_AUTO,
        SOIL_CREATE_NEW_ID,
        SOIL_FLAG_MIPMAPS | SOIL_FLAG_COMPRESS_TO_DXT
    );
   back = SOIL_load_OGL_texture (
       "skybox/bridge/back.jpg",
        SOIL_LOAD_AUTO,
        SOIL_CREATE_NEW_ID,
        SOIL_FLAG_MIPMAPS | SOIL_FLAG_COMPRESS_TO_DXT
    );
   right = SOIL_load_OGL_texture (
            "skybox/bridge/right.jpg",
            SOIL_LOAD_AUTO,
            SOIL_CREATE_NEW_ID,
            SOIL_FLAG_MIPMAPS | SOIL_FLAG_COMPRESS_TO_DXT
    );
   top = SOIL_load_OGL_texture (
            "skybox/bridge/top.jpg",
            SOIL_LOAD_AUTO,
            SOIL_CREATE_NEW_ID,
            SOIL_FLAG_MIPMAPS | SOIL_FLAG_COMPRESS_TO_DXT
    );
	*/
}

void CubeMap::bind_textures(){
	// Render the top quad
	glBindTexture(GL_TEXTURE_2D, top);
	// Render the front quad
	glBindTexture(GL_TEXTURE_2D, front);
    // Render the left quad
	glBindTexture(GL_TEXTURE_2D, left);
	// Render the back quad
	glBindTexture(GL_TEXTURE_2D, back);
	// Render the right quad
	glBindTexture(GL_TEXTURE_2D, right);
	// Render the top quad
	glBindTexture(GL_TEXTURE_2D, top);
}

void CubeMap::render_quads(){
   // Render the front quad
   glBegin(GL_QUADS);
       glTexCoord2f(0, 0); glVertex3f(  8.0f, -16.0f, -16.0f );
       glTexCoord2f(1, 0); glVertex3f( -16.0f, -16.0f, -16.0f );
       glTexCoord2f(1, 1); glVertex3f( -16.0f, 16.0f, -16.0f );
       glTexCoord2f(0, 1); glVertex3f(  8.0f, 16.0f, -16.0f );
   glEnd();

   // Render the left quad
   glBegin(GL_QUADS);
       glTexCoord2f(0, 0); glVertex3f(  8.0f, -16.0f,  8.0f );
       glTexCoord2f(1, 0); glVertex3f(  8.0f, -16.0f, -16.0f );
       glTexCoord2f(1, 1); glVertex3f(  8.0f,  16.0f, -16.0f );
       glTexCoord2f(0, 1); glVertex3f(  8.0f,  16.0f,  8.0f );
   glEnd();

   // Render the back quad
   glBegin(GL_QUADS);
       glTexCoord2f(0, 0); glVertex3f( -16.0f, -16.0f,  8.0f );
       glTexCoord2f(1, 0); glVertex3f(  8.0f, -16.0f,  8.0f );
       glTexCoord2f(1, 1); glVertex3f(  8.0f,  16.0f,  8.0f );
       glTexCoord2f(0, 1); glVertex3f( -16.0f,  16.0f,  8.0f );
   glEnd();

   // Render the right quad
   glBegin(GL_QUADS);
       glTexCoord2f(0, 0); glVertex3f( -16.0f, -16.0f, -16.0f );
       glTexCoord2f(1, 0); glVertex3f( -16.0f, -16.0f,  16.0f );
       glTexCoord2f(1, 1); glVertex3f( -16.0f,  16.0f,  16.0f );
       glTexCoord2f(0, 1); glVertex3f( -16.0f,  16.0f, -16.0f );
   glEnd();

	
   // Render the top quad
   glBegin(GL_QUADS);
       glTexCoord2f(0, 1); glVertex3f( -16.0f,  16.0f, -16.0f );
       glTexCoord2f(0, 0); glVertex3f( -16.0f,  16.0f,  16.0f );
       glTexCoord2f(1, 0); glVertex3f( 16.0f,  16.0f,  16.0f );
       glTexCoord2f(1, 1); glVertex3f( 16.0f,  16.0f, -16.0f );
   glEnd();
}

CubeMap::~CubeMap(void) {

}

