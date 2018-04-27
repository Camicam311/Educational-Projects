#include "main.h"										// This includes our header file

namespace Globals
{
    bool  g_bFullScreen = TRUE;// Set full screen as default
	float g_DT;		// Global float that stores the elapsed time between the current and last frame
	
	GLenum g_Texture[MAX_TEXTURES];	
	CCamera g_Camera;

	// Below is our starting light position
	float g_LightPosition[4]={0.0f, 2.0f, 5.0f, 0.0f};;
	// We set the light's view position at the origin
	float g_LightView[3] = {0.0f, 0.0f, 0.0f}; ;
	// This is the current direction and speed the light is moving
	float g_Direction = -0.04f;

	// These arrays will store our 4x4 matrices for the light's
	// project and modelview matrix.  These will then be loaded
	// into the texture matrix for the shadow mapping.
	float g_mProjection[16]= {0}; 
	float g_mModelView[16] = {0};

	CShader g_Shader;
};

Tree tree;
	
/////// * /////////// * /////////// * NEW * /////// * /////////// * /////////// *



///////////////////////////////// INIT \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*
/////
/////	This function initializes the program window.
/////
///////////////////////////////// INIT \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*

int main(int argc, char *argv[])
{	
	Globals::g_bFullScreen = false;

	glutInit(&argc, argv); 

	// initialize GLUT
    glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGB | GLUT_DEPTH);   // open an OpenGL context with double buffering, RGB colors, and depth buffering
	glutInitWindowSize(Window::width, Window::height);      // set initial window size
    glutCreateWindow("OpenGL Shadow Mapping");

	glEnable(GL_DEPTH_TEST);							// Enables Depth Testing


	glViewport(0,0,Window::width,Window::height);						// Make our viewport the whole window

	glMatrixMode(GL_PROJECTION);						// Select The Projection Matrix
	glLoadIdentity();									// Reset The Projection Matrix

	gluPerspective(45.0f,(GLfloat)Window::width/(GLfloat)Window::height, 1.0f, 500.0f);

	glMatrixMode(GL_MODELVIEW);							// Select The Modelview Matrix
	glLoadIdentity();									// Reset The Modelview Matrix

	/////// * /////////// * /////////// * NEW * /////// * /////////// * /////////// *
	// Make sure our multi-texturing extensions were loaded correctly
	if(!glActiveTextureARB || !glMultiTexCoord2fARB)
	{
		// Print an error message and quit.
		exit(1);
	}

	// Tell OpenGL our light's position
	glLightfv( GL_LIGHT0, GL_POSITION, Globals::g_LightPosition );

	// This turns the background to a dark grey/black.
	glClearColor(0.2f, 0.2f, 0.2f, 1.0f);

	// Turn on our light and enable color along with the light
	glEnable(GL_LIGHTING);
	glEnable(GL_LIGHT0);
	glEnable(GL_COLOR_MATERIAL);

	// Here we allocate memory for our depth texture that will store our light's view.
	// We must set the channels and type for the texture as GL_DEPTH_COMPONENT.
	CreateRenderTexture(Globals::g_Texture, SHADOW_WIDTH, SHADOW_HEIGHT, GL_DEPTH_COMPONENT, GL_DEPTH_COMPONENT, SHADOW_ID);

	// Set the camera:		Position		View		 Up Vector
	Globals::g_Camera.PositionCamera(0, 9, 12,     0, 2.5, -2,     0, 1, 0);

	// Here we pass in our new vertex and fragment shader files to our shader object.
	Globals::g_Shader.InitShaders("ShadowMappingPCF.vert", "ShadowMappingPCF.frag");

	/////// * /////////// * /////////// * NEW * /////// * /////////// * /////////// *

	// Install callback functions:
	glutDisplayFunc(Window::displayCallback);
	glutReshapeFunc(Window::reshapeCallback);
	glutIdleFunc(Window::idleCallback);
	glutKeyboardFunc(processNormalKeys);
	glutPassiveMotionFunc(processMousePassiveMotion);

	glutMainLoop();

	return 0;									// Return from the program				

}

void processMousePassiveMotion(int x, int y) {
	glutSetCursor(GLUT_CURSOR_NONE); 

	CCamera* cam = &Globals::g_Camera;
	int middleX = Window::width  >> 1;				// This is a binary shift to get half the width
	int middleY = Window::height >> 1;				// This is a binary shift to get half the height
	float angleY = 0.0f;							// This is the direction for looking up or down
	float angleZ = 0.0f;							// This will be the value we need to rotate around the Y axis (Left and Right)
	static float currentRotX = 0.0f;


	// If our cursor is still in the middle, we never moved... so don't update the screen
	if( (x == middleX) && (y == middleY) ) return;

	// Set the mouse position to the middle of our window
	glutWarpPointer(middleX, middleY);	
				
	// Get the direction the mouse moved in, but bring the number down to a reasonable amount
	angleY = (float)( (middleX - x) ) / 500.0f;		
	angleZ = (float)( (middleY - y) ) / 500.0f;		

	static float lastRotX = 0.0f; 
 	lastRotX = currentRotX; // We store off the currentRotX and will use it in when the angle is capped
	
	// Here we keep track of the current rotation (for up and down) so that
	// we can restrict the camera from doing a full 360 loop.
	currentRotX += angleZ;
 
	// If the current rotation (in radians) is greater than 1.0, we want to cap it.
	if(currentRotX > 1.0f)     
	{
		currentRotX = 1.0f;
		
		// Rotate by remaining angle if there is any
		if(lastRotX != 1.0f) 
		{
			// To find the axis we need to rotate around for up and down
			// movements, we need to get a perpendicular vector from the
			// camera's view vector and up vector.  This will be the axis.
			// Before using the axis, it's a good idea to normalize it first.
			Vector3 vAxis = Vector3(cam->m_vView - cam->m_vPosition).cross(cam->m_vUpVector);
			vAxis.normalize();
				
			// rotate the camera by the remaining angle (1.0f - lastRotX)
			cam->RotateView( 1.0f - lastRotX, vAxis.x, vAxis.y, vAxis.z);
		}
	}
	// Check if the rotation is below -1.0, if so we want to make sure it doesn't continue
	else if(currentRotX < -1.0f)
	{
		currentRotX = -1.0f;
		
		// Rotate by the remaining angle if there is any
		if(lastRotX != -1.0f)
		{
			// To find the axis we need to rotate around for up and down
			// movements, we need to get a perpendicular vector from the
			// camera's view vector and up vector.  This will be the axis.
			// Before using the axis, it's a good idea to normalize it first.
			Vector3 vAxis = Vector3(cam->m_vView - cam->m_vPosition).cross(cam->m_vUpVector);
			vAxis.normalize();
			
			// rotate the camera by ( -1.0f - lastRotX)
			cam->RotateView( -1.0f - lastRotX, vAxis.x, vAxis.y, vAxis.z);
		}
	}
	// Otherwise, we can rotate the view around our position
	else 
	{	
		// To find the axis we need to rotate around for up and down
		// movements, we need to get a perpendicular vector from the
		// camera's view vector and up vector.  This will be the axis.
		// Before using the axis, it's a good idea to normalize it first.
		Vector3 vAxis(0,0,0);
		vAxis = Vector3(cam->m_vView - cam->m_vPosition).cross(cam->m_vUpVector);
		vAxis.normalize();
	
		// Rotate around our perpendicular axis
		cam->RotateView(angleZ, vAxis.x, vAxis.y, vAxis.z);
	}

	// Always rotate the camera around the y-axis
	cam->RotateView(angleY, 0, 1, 0);
}

void processNormalKeys(unsigned char key, int x, int y) {
	if (key == 27)
		exit(0);

    // Once we have the frame interval, we find the current speed
	float speed = kSpeed * Globals::g_DT;

	// Check if we hit the Up arrow or the 'w' key
	if(key == 'w') {				

		// Move our camera forward by a positive SPEED
		Globals::g_Camera.MoveCamera(speed);				
	}

	// Check if we hit the Down arrow or the 's' key
	if(key == 's') {			

		// Move our camera backward by a negative SPEED
		Globals::g_Camera.MoveCamera(-speed);				
	}

	// Check if we hit the Left arrow or the 'a' key
	if(key == 'a') {			

		// Strafe the camera left
		Globals::g_Camera.StrafeCamera(-speed);
	}

	// Check if we hit the Right arrow or the 'd' key
	if(key == 'd') {			
		// Strafe the camera right
		Globals::g_Camera.StrafeCamera(speed);
	}	
}

///////////////////////////////// STORE LIGHT MATRICES \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*
/////
/////	This function positions our view from the light for shadow mapping
/////
///////////////////////////////// STORE LIGHT MATRICES \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*

void StoreLightMatrices()
{
	// In this function we just set our camera position to the light's position
	// and then store the current modelview matrix.  Lastly, we set our light's
	// frustum (perspective) to set our depth precision.  Ideally, the smaller
	// the frustum is, the more precision our depth map is, which gives a better
	// quality shadow.  Notice that we change the perspective to a 60 degree field
	// of view.  This allows us to view more of the world from our light's position.
	// That way we can have closer near and far planes, giving better depth values.
	
	// Reset our current light matrices
	memset(Globals::g_mModelView, 0, sizeof(float)*16);
	memset(Globals::g_mProjection, 0, sizeof(float)*16);

	// Let's push on a new matrix so we don't change the rest of the world
	glPushMatrix();

		// Push on a new matrix to keep our view changes isolated
		glPushMatrix();

			// Reset the current modelview matrix
			glLoadIdentity();		

			// This is where we set the light's position and view.
			gluLookAt(Globals::g_LightPosition[0],  Globals::g_LightPosition[1],  Globals::g_LightPosition[2], 
					  Globals::g_LightView[0],	  Globals::g_LightView[1],	    Globals::g_LightView[2],		0, 1, 0);

			// Now that we have the light's view, let's save the current modelview matrix.
			glGetFloatv(GL_MODELVIEW_MATRIX, Globals::g_mModelView);

		// Now pop off the current light view's matrix
		glPopMatrix();

		// We could go to prospective mode and change the perspective,
		// then have to restore our camera's perspective and go back to modelview
		// mode.  However, if we just start with a new modelview matrix, then change
		// the perspective and grab the current matrix we save some steps and restorations.

		// Reset the current matrix
		glLoadIdentity();

		// Change our light's perspective to 60 degrees FOV, aspect ratio 1, with a near
		// and far plane of 0.5 and 25.0.  The far plane is only 25 because our world isn't
		// larger than 25.  Depending on how large your world is you will need to increase
		// the far plane and/or add additional lights.
		gluPerspective(60.0f, 1.0f, 0.5f, 25.0f);

		// Even though we want the perspective matrix, we can still grab the
		// current modelview matrix and use that as our projection matrix because
		// we used gluPerspective() on a new matrix, which is the projection matrix.
		glGetFloatv(GL_MODELVIEW_MATRIX, Globals::g_mProjection);

	// Go back to the original matrix
	glPopMatrix();
}

/////////////////////////////// CREATE RENDER TEXTURE \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*
/////
/////	This function creates a blank texture to render to
/////
/////////////////////////////// CREATE RENDER TEXTURE \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*
	
void CreateRenderTexture(GLenum textureArray[], int sizeX, int sizeY, int channels, int type, int textureID)										
{
	// This function is a modified version of what we have used in previous tutorials.
	// We just allowed the option of doing a depth texture.  When doing a depth
	// texture we need to pass in GL_DEPTH_COMPONENT for the type AND the channels.
	// To check for this we just see if the channels are greater than 4.  If so, we
	// allocate a texture for just one bit per pixel, then pass in the channel value
	// for glTexImage2D().

	// Create a pointer to store the blank image data
	unsigned int *pTexture = NULL;											

	// Store the current channels to be allocated by default
	int channelsTrue = channels;

	// If the channels are greater than 4 there must be a special flag like
	// GL_DEPTH_COMPONENT, so make sure we only allocate 1 bit per pixel.
	if(channels > 4)
		channelsTrue = 1;

	// Allocate and init memory for the image array and point to it from pTexture
	pTexture = new unsigned int [sizeX * sizeY * channelsTrue];
	memset(pTexture, 0, sizeX * sizeY * channelsTrue * sizeof(unsigned int));	

	// Register the texture with OpenGL and bind it to the texture ID
	glGenTextures(1, &textureArray[textureID]);								
	glBindTexture(GL_TEXTURE_2D, textureArray[textureID]);					
	
	// Create the texture and store it on the video card
	glTexImage2D(GL_TEXTURE_2D, 0, channels, sizeX, sizeY, 0, type, GL_UNSIGNED_INT, pTexture);						
	
	// Set the texture quality
	glTexParameterf(GL_TEXTURE_2D,GL_TEXTURE_MIN_FILTER,GL_LINEAR);
	glTexParameterf(GL_TEXTURE_2D,GL_TEXTURE_MAG_FILTER,GL_LINEAR);
	glTexParameterf(GL_TEXTURE_2D, GL_TEXTURE_WRAP_S, GL_CLAMP);
	glTexParameterf(GL_TEXTURE_2D, GL_TEXTURE_WRAP_T, GL_CLAMP);

	// Since we stored the texture space with OpenGL, we can delete the image data
	delete [] pTexture;																					
}


/////////////////////////////// ANIMATE NEXT FRAME \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*
/////
/////	This function clamps a specified frame rate for consistency
/////
/////////////////////////////// ANIMATE NEXT FRAME \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*

bool AnimateNextFrame(int desiredFrameRate)
{
	static float lastTime = GetTickCount() * 0.001f;
	static float elapsedTime = 0.0f;

	float currentTime = GetTickCount() * 0.001f; // Get the time (milliseconds = seconds * .001)
	float deltaTime = currentTime - lastTime; // Get the slice of time
	float desiredFPS = 1.0f / desiredFrameRate; // Store 1 / desiredFrameRate

	elapsedTime += deltaTime; // Add to the elapsed time
	lastTime = currentTime; // Update lastTime

	// Check if the time since we last checked is greater than our desiredFPS
	if( elapsedTime > desiredFPS )
	{
		Globals::g_DT = desiredFPS;
		elapsedTime -= desiredFPS; // Adjust our elapsed time

		// Return true, to animate the next frame of animation
		return true;
	}

	// We don't animate right now.
	return false;
}


/////// * /////////// * /////////// * NEW * /////// * /////////// * /////////// *

//////////////////////////////// DRAW WALLS \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*
/////
/////	This function draws the walls behind our objects
/////
//////////////////////////////// DRAW WALLS \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*

void DrawWalls()
{
	// This is the size of our walls for each side of the axis
	float size = 5.0f;

	// Start rendering the walls as QUADS
	glBegin(GL_QUADS);

		// Back
		glNormal3f(0, 0, 1);				// Store the FORWARD normal
		glColor4f(1.0f, 0.0f, 1.0f, 1.0);	// Make this wall pink
		glVertex3f(-size, size, 0);			// The top-left vertex
		glVertex3f(-size, -size, 0);		// The bottom-left vertex
		glVertex3f(size, -size, 0);			// The bottom-right vertex
		glVertex3f(size, size, 0);			// The top-right vertex

		// Left
		glNormal3f(1, 0, 0);				// Store the RIGHT normal
		glColor4f(1.0f, 0.0f, 0.0f, 1.0);	// Make this wall red
		glVertex3f(-size, size, size);		// The top-left vertex
		glVertex3f(-size, -size, size);		// The bottom-left vertex
		glVertex3f(-size, -size, 0);		// The bottom-right vertex
		glVertex3f(-size, size, 0);			// The top-right vertex

		// Right
		glNormal3f(-1, 0, 0);				// Store the LEFT normal
		glColor4f(0.0f, 0.0f, 1.0f, 1.0);	// Make this wall blue
		glVertex3f(size, size, 0);			// The top-left vertex
		glVertex3f(size, -size, 0);			// The bottom-left vertex
		glVertex3f(size, -size, size);		// The bottom-right vertex
		glVertex3f(size, size, size);		// The top-right vertex

		// Bottom
		glNormal3f(0, 1, 0);				// Store the UP normal
		glColor4f(0.0f, 1.0f, 0.0f, 1.0);	// Make this wall green
		glVertex3f(size, -size, size);		// The front-right vertex
		glVertex3f(size, -size, 0);			// The back-right vertex
		glVertex3f(-size, -size, 0);		// The back-left vertex
		glVertex3f(-size, -size, size);		// The front-left vertex

	// Stop drawing QUADS
	glEnd();
}


//////////////////////////////// RENDER WORLD \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*
/////
/////	This function renders the entire world that needs to be shadowed
/////
//////////////////////////////// RENDER WORLD \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*

void RenderWorldOriginal()
{
	// This function will draw our entire scene except for the light.
	// We could speed up our application by not using quadrics and using
	// display lists, but just to make things simple I chose to not add extras.

	// Draw our walls and move them back into the screen by 15
	glPushMatrix();
		glTranslatef(0, 0, -15);
		DrawWalls();
	glPopMatrix();

	// Color the tube green
	glColor4f(0.0f, 1.0f, 0.1f, 1.0);

	// Create a new quadric and render it normally
	GLUquadricObj *pObj = gluNewQuadric();				
	gluQuadricDrawStyle(pObj, GLU_FILL);				

	// Create an empty tube that spins around
	glPushMatrix();
		static float rotY = 0;
		glTranslatef(-2, 0, -10);
		glRotatef(rotY++, 0, 1, 0);
		gluCylinder(pObj, 0.5f, 0.5f, 2.0f, 25, 25);
	glPopMatrix();

	// Color the sphere yellow
	glColor4f(1.0f, 1.0f, 0.1f, 1.0);

	// Create the sphere and move it back and to the right of the tube
	glPushMatrix();
		glTranslatef(2, 0, -10);							
		gluSphere(pObj, 0.5f, 25, 25);	
	glPopMatrix();
	
	// Free the quadric object
	gluDeleteQuadric(pObj);								
}

void RenderWorldTree()
{
	glPushMatrix();
		glTranslatef(0, -2, -15);
		DrawWalls();
	glPopMatrix();

		Matrix4 Camera;

		Camera.makeCamera(Vector3(Globals::g_Camera.m_vPosition.x, Globals::g_Camera.m_vPosition.y, Globals::g_Camera.m_vPosition.z),
			Vector3(Globals::g_Camera.m_vView.x, 	Globals::g_Camera.m_vView.y, 	Globals::g_Camera.m_vView.z),
			Vector3(Globals::g_Camera.m_vUpVector.x, Globals::g_Camera.m_vUpVector.y, Globals::g_Camera.m_vUpVector.z)     
			);
		
		
		glPushMatrix();
			glRotatef(-90, 1, 0, 0);
			tree.growTree(.12, .3, 90, 0, false);
			glRotatef(-180, 0, 0, 1);
			tree.growTree(.12, .3, 90, 0, false);
			glRotatef(180, 0, 0, 1);

			glRotatef(-270, 0, 0, 1);
			tree.growTree(.12, .3, 90, 0, false);
			glRotatef(270, 0, 0, 1);

			glRotatef(-90, 0, 0, 1);
			tree.growTree(.12, .3, 90, 0, false);
			glRotatef(90, 0, 0, 1);
			glRotatef(90, 1, 0, 0);
		glPopMatrix();
}

void RenderWorldRobot()
{
	glPushMatrix();
		glTranslatef(0, -2, -15);
		DrawWalls();
	glPopMatrix();

		Matrix4 Camera;

		Camera.makeCamera(Vector3(Globals::g_Camera.m_vPosition.x, Globals::g_Camera.m_vPosition.y, Globals::g_Camera.m_vPosition.z),
			Vector3(Globals::g_Camera.m_vView.x, 	Globals::g_Camera.m_vView.y, 	Globals::g_Camera.m_vView.z),
			Vector3(Globals::g_Camera.m_vUpVector.x, Globals::g_Camera.m_vUpVector.y, Globals::g_Camera.m_vUpVector.z)     
			);
		
		
	Robot* robot = new Robot(false, Vector3(1,0,0));
	robot->root->draw(Camera);
}

void RenderWorld() {
	//RenderWorldRobot();
	//RenderWorldTree();
	RenderWorldOriginal();
}
//////////////////////////////// APPLY SHADOW MAP \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*
/////
/////	This function applies the shadow map to our world data
/////
//////////////////////////////// APPLY SHADOW MAP \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*

void ApplyShadowMap()
{	
	// Let's turn our shaders on for doing shadow mapping on our world
	//Globals::g_Shader.TurnOn();

	// Turn on our texture unit for shadow mapping and bind our depth texture
    glActiveTextureARB(GL_TEXTURE0_ARB);
    glEnable(GL_TEXTURE_2D); 
	glBindTexture(GL_TEXTURE_2D, Globals::g_Texture[SHADOW_ID]);

	// Give GLSL our texture unit that holds the shadow map
	GLuint uniform = glGetUniformLocationARB(Globals::g_Shader.GetProgram(), "shadowMap"); 
	glUniform1iARB(uniform, 0);

	glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_COMPARE_MODE_ARB, GL_COMPARE_R_TO_TEXTURE_ARB);
	glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_COMPARE_FUNC_ARB, GL_LEQUAL);

	const float mBias[] = {0.5, 0.0, 0.0, 0.0, 
						  0.0, 0.5, 0.0, 0.0,
						  0.0, 0.0, 0.5, 0.0,
						  0.5, 0.5, 0.5, 1.0};

	// Create the eye planes for generating texture coordinates
	const double xPlane[] = {1.0, 0.0, 0.0, 0.0};
	const double yPlane[] = {0.0, 1.0, 0.0, 0.0};
	const double zPlane[] = {0.0, 0.0, 1.0, 0.0};
	const double wPlane[] = {0.0, 0.0, 0.0, 1.0};

	// Enable texture generation for S, T, R, and Q
	glEnable(GL_TEXTURE_GEN_S);
	glEnable(GL_TEXTURE_GEN_T);
	glEnable(GL_TEXTURE_GEN_R);
	glEnable(GL_TEXTURE_GEN_Q);

	// Set each texture coordinate's texture gen mode to use the camera.
	// This will have OpenGL incorporate the camera's inverse for us.
	glTexGeni(GL_S, GL_TEXTURE_GEN_MODE, GL_EYE_LINEAR);
	glTexGeni(GL_T, GL_TEXTURE_GEN_MODE, GL_EYE_LINEAR);
	glTexGeni(GL_R, GL_TEXTURE_GEN_MODE, GL_EYE_LINEAR);
	glTexGeni(GL_Q, GL_TEXTURE_GEN_MODE, GL_EYE_LINEAR);

	// Set our planes for each coordinate in order to project the texture appropriatly.
	glTexGendv(GL_S, GL_EYE_PLANE, xPlane );
	glTexGendv(GL_T, GL_EYE_PLANE, yPlane );
	glTexGendv(GL_R, GL_EYE_PLANE, zPlane );
	glTexGendv(GL_Q, GL_EYE_PLANE, wPlane );

	glMatrixMode(GL_TEXTURE);
		glLoadMatrixf(mBias);			// The bias matrix to convert to a 0 to 1 ratio
		glMultMatrixf(Globals::g_mProjection);	// The light's projection matrix
		glMultMatrixf(Globals::g_mModelView);	// The light's modelview matrix
	glMatrixMode(GL_MODELVIEW);			// Switch back to normal modelview mode

	RenderWorld();						// Render the world that needs to be shadowed

	// Now that the world is shadowed and we are done with the texture generation,
	// let's set everything back to normal by resetting the texture matrix.
	glMatrixMode(GL_TEXTURE);
		glLoadIdentity();
	glMatrixMode(GL_MODELVIEW);

	// Turn off texture generation for our S, T, R and Q coordinates
	glDisable(GL_TEXTURE_GEN_S);
	glDisable(GL_TEXTURE_GEN_T);
	glDisable(GL_TEXTURE_GEN_R);
	glDisable(GL_TEXTURE_GEN_Q);

	// Turn the first multi-texture pass off
	glActiveTextureARB(GL_TEXTURE0_ARB);		
    glDisable(GL_TEXTURE_2D);

	//Globals::g_Shader.TurnOff();
}


///////////////////////////////// RENDER SCENE \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*
/////
/////	This function renders the entire scene.
/////
///////////////////////////////// RENDER SCENE \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*

void RenderScene() 
{	
	StoreLightMatrices();
	
	// Clear the screen and depth buffer so we can render from the light's view
	glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
	glLoadIdentity();

	// Since our texture map that will store the depth values is a different size
	// than our normal viewport, we need to change the viewport to make it the same
	// size as our texture.
	glViewport(0, 0, (int)SHADOW_WIDTH, (int)SHADOW_HEIGHT);

	// Now we just need to set the matrices for the light before we render.
	// We switch to projection mode and input our light's projection matrix.
	glMatrixMode(GL_PROJECTION);
	
	// Push on a matrix to make sure we can restore to the old matrix easily
	glPushMatrix();

		// Set the current projection matrix to our light's projection matrix
		glLoadMatrixf(Globals::g_mProjection);

		// Load modelview mode to set our light's modelview matrix
		glMatrixMode(GL_MODELVIEW);

		// Load the light's modelview matrix before we render to a texture
		glLoadMatrixf(Globals::g_mModelView);

		// Since we don't care about color when rendering the depth values to
		// the shadow-map texture, we disable color writing to increase speed.
		glColorMask(GL_FALSE, GL_FALSE, GL_FALSE, GL_FALSE); 

		// This special function fixes artifacts that lead to small errors when
		// calculating the shadow map.  You will need to adjust the scale depending
		// on your scene, but I chose the scale 8.0 for mine.  NVIDIA suggests 1.1
		// or higher.  The 4.0 should stay fairly the same.
		glPolygonOffset(8.0f, 4.0f);
	
		// This turns of the polygon offset functionality to fix artifacts.
		// Comment this out and run the program to see what artifacts I mean.
		glEnable(GL_POLYGON_OFFSET_FILL);

		// Render the world according to the light's view
		RenderWorld();
		
		// Now that the world is rendered, save the depth values to a texture
		glBindTexture(GL_TEXTURE_2D, Globals::g_Texture[SHADOW_ID]);
		glCopyTexSubImage2D(GL_TEXTURE_2D, 0, 0, 0, 0, 0, (int)SHADOW_WIDTH, (int)SHADOW_HEIGHT);

		// We can turn color writing back on since we already stored the depth values
		glColorMask(GL_TRUE, GL_TRUE, GL_TRUE, GL_TRUE); 

		// Turn off polygon offsetting
		glDisable(GL_POLYGON_OFFSET_FILL);

		// Restore our normal viewport size to our screen width and height
		glViewport(0, 0, (int)Window::width, (int)Window::height);

		// Go back to the projection mode and restore the original matrix
		glMatrixMode(GL_PROJECTION);

	// Restore the original projection matrix
	glPopMatrix();

	// Go back to modelview model to start drawing like normal
	glMatrixMode(GL_MODELVIEW);

	// Clear the color and depth bits and start over from the camera's view
	glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
	glLoadIdentity();										
	Globals::g_Camera.Look();	
	
	// Render the world and apply the shadow map texture to it
	ApplyShadowMap();

	// The rest of the code below just draws and moves the light.  You don't need it.

	GLUquadricObj *pObj = gluNewQuadric();				// Get a Quadric off the stack
	gluQuadricDrawStyle(pObj, GLU_FILL);				// Draw the sphere normally

	// Draw the light at the light's position
	glColor4f(1.0f, 1.0f, 0.0f, 1.0f);
	glTranslatef(Globals::g_LightPosition[0], Globals::g_LightPosition[1], Globals::g_LightPosition[2]);
	gluSphere(pObj, 0.05f, 25, 25);
	
	gluDeleteQuadric(pObj);								// Free the Quadric

	glutSwapBuffers();							// Swap the backbuffers to the foreground

	// If the light position goes out of the screen to the left, reset the direction and position.
	if(Globals::g_LightPosition[0] < -2.0f)
	{
		Globals::g_Direction = Globals::g_Direction * -1;
		Globals::g_LightPosition[0] = -2.0f; 
	}
	// If the light position goes out of the screen to the right, reset the direction and position.
	if(Globals::g_LightPosition[0] > 2.0f)
	{
		Globals::g_Direction = Globals::g_Direction * -1;
		Globals::g_LightPosition[0] = 2.0f; 
	}
	
	// Each frame we move the light by the current direction, then update the light with GL.
	Globals::g_LightPosition[0] += Globals::g_Direction;
	glLightfv( GL_LIGHT0, GL_POSITION, Globals::g_LightPosition );
}