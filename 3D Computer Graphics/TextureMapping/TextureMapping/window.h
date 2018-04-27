#ifndef ___WINDOW_H
#define ___WINDOW_H

#include "GL\glut.h"

class Window {
private: 
	bool init_complete;
public:
	int width;
	int height;
	char* title;

	Window(int w, int h, char* _title);
	Window(); //default to width, height = 500x500 and untitled
	void setBGColor(float r, float g, float v, float a);
	void runGLUTWindow(void (*f_display)(void),void (*f_reshape)(int,int),void (*f_idle)(void)); //run window with display, reshape and idle callbacks
	void initGLUTWindow();
	void initGLUTWindow(void (*f_init)(void));
};
#endif