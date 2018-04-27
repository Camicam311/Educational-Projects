#include "SceneGraph.h"

/*------------ NODE IMPLEMENTATION ------------*/
SceneGraph::SceneGraph() {
	root = nullptr;
}

SceneGraph::SceneGraph(Group* _root) {
	root = _root;
}

/*------------ NODE IMPLEMENTATION ------------*/
Node::Node() {
	//Silence is golden.
	radius = 0;
}

void Node::drawBoundingSphere(Vector4 center, float bradius) {

	Matrix4 boundM;

	Matrix4 transM;
	transM.identity();
	transM.makeTranslate(center.getX(),center.getY(),center.getZ());
		
	Matrix4 scaleM;
	scaleM.identity();
	scaleM.makeScale(bradius,bradius,bradius);

	boundM  = transM * scaleM;

	glPushMatrix();
	boundM.transpose();
	glLoadMatrixd(boundM.getPointer());
	glutWireSphere(1, 20, 20);
	glPopMatrix();
}

/*------------ GROUP IMPLEMENTATION ------------*/
Group::Group() {
	//Silence is golden.
}

void Group::addChild(Node* n) {
	children.push_back(n);
}

void Group::removeChild(Node* n) {
	std::list<Node*>::iterator child = children.begin();
	std::list<Node*> new_children;
	while(child != children.end()) {
		if(*child != n)
			new_children.push_back(*child);
		child++;
	}
}

void Group::draw(Matrix4 M) {
	std::list<Node*>::iterator child = children.begin();
	while(child != children.end()) {
		Node* node = *child;
		node->draw(M);
		child++;
	}
}

void Group::update(Matrix4 _M) {
}

/*------------ MATRIXTRANSFORM IMPLEMENTATION ------------*/
MatrixTransform::MatrixTransform() {
	M.identity();
}

MatrixTransform::MatrixTransform(Matrix4 _M) {
	M = _M;
	//Update Node the center and radius based on the matrix
}

void MatrixTransform::draw(Matrix4 C) {
	Matrix4 C_new = C*M;
	std::list<Node*>::iterator child = children.begin();
	while(child != children.end()) {
		Node* node = *child;
		node->draw(C_new);
		child++;
	}
	
}

void MatrixTransform::update(Matrix4 _M) {
	M = _M;
}

/*------------ GEODE IMPLEMENTATION ------------*/
Geode::Geode() {
}

void Geode::draw(Matrix4 C) {
	center = Vector4(0,0,0,1);
	scale =  Vector4(1,1,1,0);
	Vector4 nCenter = C*center;
	Vector4 nScale = C*scale;
	Vector3 point = Vector3(nCenter.getX(), nCenter.getY(), nCenter.getZ());
	radius = nScale.magnitude();


		glColor3f(0.8,0.8,0.8);
		C.transpose();
		glLoadMatrixd(C.getPointer());
		C.transpose();
		render(C);
	
}

/*------------ SPHERE IMPLEMENTATION ------------*/
Sphere::Sphere() {
	enableWires = false;
	slices = 0;
	stacks = 0;
	radius = 0;
}

Sphere::Sphere(bool _enableWires, int _radius, int _slices, int _stacks, Vector3 _color) {
	enableWires = _enableWires;
	sph_radius = _radius;
	slices = _slices;
	stacks = _stacks;
	color = _color;

}

void Sphere::render(Matrix4 C) {
	if(enableWires) {
		center = Vector4(0,0,0,1);
		scale =  Vector4(1,1,1,0);
		Vector4 nCenter = C*center;
		Vector4 nScale = C*scale;
		radius = nScale.magnitude();
		drawBoundingSphere(nCenter, radius);
	}

	glColor3f(color.getX(),color.getY(),color.getZ());
	glutSolidSphere(sph_radius, slices, stacks);
}

void Sphere::update(Matrix4 _M) {
}

/*------------ CUBE IMPLEMENTATION ------------*/
Cube::Cube() {
	enableWires = false;
	size = 0;
}

Cube::Cube(bool _enableWires, int _size, Vector3 _color) {
	enableWires = _enableWires;
	size = _size;
	color = _color;
}


void Cube::render(Matrix4 C) {

	if(enableWires) {
		center = Vector4(0,0,0,1);
		scale =  Vector4(0.5,0.5,0.5,0);
		Vector4 nCenter = C*center;
		Vector4 nScale = C*scale;
		radius = nScale.magnitude();
		drawBoundingSphere(nCenter, radius);
	}
	glColor3f(color.getX(),color.getY(),color.getZ());
	glutSolidCube(size);
}

void Cube::update(Matrix4 _M) {
}