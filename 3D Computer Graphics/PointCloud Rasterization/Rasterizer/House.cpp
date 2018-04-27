#include "House.h"

House::House() {
	  nVerts = 42;    // your vertex array needs to have this many entries
  
	  // These are the x,y,z coordinates of the vertices of the triangles
	  float vertices_[200] = {  
				-4,-4,4, 4,-4,4, 4,4,4, -4,4,4,     // front face
				-4,-4,-4, -4,-4,4, -4,4,4, -4,4,-4, // left face
				4,-4,-4,-4,-4,-4, -4,4,-4, 4,4,-4,  // back face
				4,-4,4, 4,-4,-4, 4,4,-4, 4,4,4,     // right face
				4,4,4, 4,4,-4, -4,4,-4, -4,4,4,     // top face
				-4,-4,4, -4,-4,-4, 4,-4,-4, 4,-4,4, // bottom face

				-20,-4,20, 20,-4,20, 20,-4,-20, -20,-4,-20, // grass
				-4,4,4, 4,4,4, 0,8,4,                       // front attic wall
				4,4,4, 4,4,-4, 0,8,-4, 0,8,4,               // left slope
				-4,4,4, 0,8,4, 0,8,-4, -4,4,-4,             // right slope
				4,4,-4, -4,4,-4, 0,8,-4 };                   // rear attic wall

	  // These are the RGB colors corresponding to the vertices, in the same order
	  float colors_[200] = { 
				1,0,0, 1,0,0, 1,0,0, 1,0,0,  // front is red
				0,1,0, 0,1,0, 0,1,0, 0,1,0,  // left is green
				1,0,0, 1,0,0, 1,0,0, 1,0,0,  // back is red
				0,1,0, 0,1,0, 0,1,0, 0,1,0,  // right is green
				0,0,1, 0,0,1, 0,0,1, 0,0,1,  // top is blue
				0,0,1, 0,0,1, 0,0,1, 0,0,1,  // bottom is blue
  
				0,0.5,0, 0,0.5,0, 0,0.5,0, 0,0.5,0, // grass is dark green
				0,0,1, 0,0,1, 0,0,1,                // front attic wall is blue
				1,0,0, 1,0,0, 1,0,0, 1,0,0,         // left slope is green
				0,1,0, 0,1,0, 0,1,0, 0,1,0,         // right slope is red
				0,0,1, 0,0,1, 0,0,1 };              // rear attic wall is red

	  // The index data stores the connectivity of the triangles; 
	  // index 0 refers to the first triangle defined above
	  float indices_[200] = {
				0,2,3,    0,1,2,      // front face
				4,6,7,    4,5,6,      // left face
				8,10,11,  8,9,10,     // back face
				12,14,15, 12,13,14,   // right face
				16,18,19, 16,17,18,   // top face
				20,22,23, 20,21,22,   // bottom face
                   
				24,26,27, 24,25,26,   // grass
				28,29,30,             // front attic wall
				31,33,34, 31,32,33,   // left slope
				35,37,38, 35,36,37,   // right slope
				39,40,41 };            // rear attic wall

	  for (int i = 0; i < 200; i++) {
		vertices[i] = vertices_[i];
	 }
	  for (int i = 0; i < 200; i++) {
		colors[i] = colors_[i];
	}
	  for (int i = 0; i < 200; i++) {
		indices[i] = indices_[i];
	}

}

void House::render() {
	glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);	// Clean the screen and the depth buffer
	glDisable(GL_LIGHTING);
	glBegin(GL_TRIANGLES);
	for(int i=0; i < 60; i++){
		glColor3f(colors[indices[i]*3],colors[indices[i]*3 + 1 ], colors[indices[i]*3+2]);
		glVertex3f(vertices[indices[i]*3],vertices[indices[i]*3 + 1 ], vertices[indices[i]*3+2]);
	}
	glEnd();
	glFlush();  
    glutSwapBuffers();
}

std::vector<Vector3> House::vertsToVectors() {
	std::vector<Vector3> vertsVec;
	for(int i=0; i<42; i++) {
		Vector3 vec((vertices[i*3]),(vertices[i*3+1]),(vertices[i*3+2]));
		vertsVec.push_back(vec);
	}
	return vertsVec;
}