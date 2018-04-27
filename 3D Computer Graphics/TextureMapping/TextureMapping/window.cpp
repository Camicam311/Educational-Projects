#include "window.h"

Window::Window() {
	width = 500;
	height = 500;
	title = "untitled";
	init_complete = false;
}

Window::Window(int w, int h,char*  _title) {
	title = _title;
	width = w;
	height = h;
	init_complete = false; 
}

void Window::runGLUTWindow(void (*f_display)(void),void (*f_reshape)(int,int),void (*f_idle)(void)) {
	if(!init_complete) initGLUTWindow();
	
	//Run main glut window display functions
	glutDisplayFunc(f_display);
	glutReshapeFunc(f_reshape);
	glutIdleFunc(f_idle);
	
	glutMainLoop();
}

void Window::setBGColor(float r, float g, float b, float a = 1) {
	if(r < 0) r =0;
	if(r > 1) r = 1;
	if(g < 0) g = 0;
	if(g > 1) g = 1;
	if(b < 0) b = 0;
	if(b > 1) b = 1;
	if(a < 0) a = 0;
	if(a > 1) a = 1;
	glClearColor(r,g,b,a);   	      // set clear color to black
}

void Window::initGLUTWindow() {
	if(init_complete) return;
	glutCreateWindow(title);
	glutInitWindowSize(width, height);      // set initial window size
	glClearColor(0.0, 0.0, 0.0, 0.0);   	      // set clear color to black
	init_complete = true;
}

void Window::initGLUTWindow(void (*f_init)(void)) {
	if(init_complete) return;
	initGLUTWindow();
	(*f_init)(); //code to be run once before windows main loop starts
	init_complete = true;
}