#ifndef _SCENEGRAPH_H_
#define _SCENEGRAPH_H_

#include <list>
#include "Matrix4.h"
#include "Vector4.h"
#include "FrustumG.h"
#include <GL/glut.h>
#include <iostream>

class Node
{
public: 
	Node();
	Vector4 center;
	Vector4 scale;
	FrustumG* frustum;
	double radius;
	bool has_culling;
	virtual void draw(Matrix4 C) = 0;
	virtual void update(Matrix4 _M) = 0;
	virtual void setFrustum(FrustumG* frustum, bool has_culling) = 0;
	void drawBoundingSphere(Vector4 center, float bradius);
};

class Group: public Node {
public:
	Group();
	std::list<Node*> children;
	void addChild(Node* n);
	void removeChild(Node* n); 
	void draw(Matrix4 M); //traverse list of children and call each childs draw function
	void update(Matrix4 _M);
	void setFrustum(FrustumG* frustum, bool has_culling);
};

class Geode: public Node {
public: 
	Geode();
	bool enableWires;
	virtual void render(Matrix4 C) = 0;
	void draw(Matrix4 C);
	void setFrustum(FrustumG* frustum, bool has_culling);
};

class MatrixTransform: public Group {
public:
	Matrix4 M;
	MatrixTransform(); //Sets to identity matrix in ctor
	MatrixTransform(Matrix4 _M); 
	void update(Matrix4 _M);
	void draw(Matrix4 C);
};

class Sphere: public Geode {
public: 
	int slices;
	int stacks;
	int sph_radius;
	Vector3 color; //x is red, y is r, g is b
	Sphere();
	Sphere(bool _enableWires, int radius, int _slices, int _stacks, Vector3 _color);
	void render(Matrix4 C);
	void update(Matrix4 _M);
};

class Cube: public Geode {
public:
	int size;
	Vector3 color; //x is red, y is r, g is b
	Cube();
	Cube(bool _enableWires, int _size, Vector3 _color);
	void render(Matrix4 C);
	void update(Matrix4 _M);
};

class SceneGraph {
public:
	FrustumG* frustum;
	bool has_culling;
	SceneGraph();
	SceneGraph(Group* root);
	Group* root;
	void setFrustum(FrustumG* frustum, bool has_culling);
};


#endif