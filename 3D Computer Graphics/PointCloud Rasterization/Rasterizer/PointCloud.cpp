#include "PointCloud.h"

PointCloud::PointCloud(){}

PointCloud::PointCloud(const char* _file) {
	file = _file;
	FILE * fp;
	float n1, n2, n3;
	float p1, p2, p3;
	fp = fopen (file, "r");
	cout << "Loading " << file << endl;
	if(fp != NULL) {
		while(fscanf(fp, "%f %f %f %f %f %f", &p1, &p2, &p3, &n1, &n2, &n3) == 6) {
			Vector3 normal(n1,n2,n3);
			normal.normalize();
			Vector3 position(p1,p2,p3);
			normals.push_back(normal);
			positions.push_back(position);
		}
	}
	fclose(fp);
	cout << "Done Loading." << endl;

	model2world.identity();
}

void PointCloud::render() {
	glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);	// Clean the screen and the depth buffer
	glDisable(GL_LIGHTING);
	glEnable(GL_BLEND);
	glBlendFunc(GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA);
	glEnable(GL_POINT_SMOOTH);
	glHint(GL_POINT_SMOOTH_HINT, GL_NICEST);
	glBegin(GL_POINTS);
	//cout << positions.size() << endl;
	for (int i = 0;  i<positions.size(); i++)
	{
		glColor3f(normals[i].x, normals[i].y, normals[i].z);
		glVertex3d(positions[i].x, positions[i].y, positions[i].z);
	}
	glEnd();
	glFlush();  
    glutSwapBuffers();
}

Matrix4& PointCloud::getMatrix() {
	return model2world;
}

void PointCloud::setMatrix(Matrix4* matrix) {
	model2world = *(matrix);
}

Vector3 PointCloud::calcTranslateCenter() {
	double offset_x = -((x_max_vec.getX() + x_min_vec.getX()) / 2);
	double offset_y = -((y_max_vec.getY() + y_min_vec.getY()) / 2);
	double offset_z = -((z_max_vec.getZ() + z_min_vec.getZ()) / 2);
	Vector3 offset(offset_x,offset_y,offset_z);
	return offset;
}

double PointCloud::calcMaxScaling() {
	//Determine whether model is tall or wide
	double model_width = x_max_vec.getX() - x_min_vec.getX(); 
	double model_height = y_max_vec.getY() - y_min_vec.getY(); 
	double scaling_point;
	(model_width > model_height)?scaling_point = model_width:model_height;
	double screen_height = (40*tan((180/M_PI)*30));
	double scale_factor = screen_height/scaling_point;
	return scale_factor;
}

void PointCloud::calcExtremeCoordinates() {
	double xmin = std::numeric_limits<double>::max(), ymin = std::numeric_limits<double>::max(), zmin = std::numeric_limits<double>::max();
	double xmax = std::numeric_limits<double>::min(), ymax = std::numeric_limits<double>::min(), zmax = std::numeric_limits<double>::min();
	double curx, cury, curz;
	for(int i=0; i<positions.size(); i++) {
		//Find the min and max values with respect to x, y, z coordinates
		curx = positions[i].getX(); 
		cury = positions[i].getY();
		curz = positions[i].getZ();
		if(curx > xmax) { xmax = curx; x_max_vec = positions[i]; };
		if(curx < xmin) { xmin = curx; x_min_vec = positions[i]; };
		if(cury > ymax) { ymax = cury; y_max_vec = positions[i]; };
		if(cury < ymin) { ymin = cury; y_min_vec = positions[i]; };
		if(curz > zmax) { zmax = curz; z_max_vec = positions[i]; };
		if(curz < zmin) { zmin = curz; z_min_vec = positions[i]; };
	}
}

void PointCloud::spin(double deg)   // deg is in degrees
{
  angle = deg;
  Matrix4 tempM;
  if (angle > 360.0 || angle < -360.0) angle = 0.0;
 
  tempM.identity();
  tempM.makeRotateY(angle);
  model2world = tempM*model2world;   // This creates the matrix to rotate the cube
}

void PointCloud::scale(double factor) {
	Matrix4 tempM;
	tempM.identity();
	tempM.makeScale(factor, factor, factor);
	model2world = tempM*model2world;
}

void PointCloud::move(double x, double y, double z) {
	Matrix4 tempM;
	tempM.identity();
	tempM.makeTranslate(x,y,z);
	model2world = tempM*model2world;
}

void PointCloud::reset() {
	model2world.identity();
	//double scale_factor = bunny_cloud.calcMaxScaling();
	double scale_factor = 100;
	Vector3 offset = calcTranslateCenter();
	move(offset.getX(),offset.getY(),offset.getZ());
	scale(scale_factor);
}