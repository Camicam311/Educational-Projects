//*********************************************************************//
//																		 //
//		- "Talk to me like I'm a 3 year old!" Programming Lessons -		 //
//                                                                       //
//		$Author:		Ben Humphrey	digiben@gametutorilas.com		 //
//																		 //
//		$Program:		ShadersShadowMappingPCF							 //
//																		 //
//		$Description:	Creating higher quality shadowmaps with GLSL	 //
//																		 //
//***********************************************************************//

#include "main.h"


///////////////////////////////////// INIT GLSL \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*
/////
/////	This function initializes all of our GLSL functions and checks availability.
/////
///////////////////////////////////// INIT GLSL \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*

bool InitGLSL()
{
	// This grabs a list of all the video card's extensions it supports
	char *szGLExtensions = (char*)glGetString(GL_EXTENSIONS);


	// Return a success!
	return true;
}


///////////////////////////////// LOAD TEXT FILE \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*
/////
/////	This function loads and returns a text file for our shaders
/////
///////////////////////////////// LOAD TEXT FILE \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*

string CShader::LoadTextFile(string strFile)
{
	// Open the file passed in
	ifstream fin(strFile.c_str());

	// Make sure we opened the file correctly
	if(!fin)
		return "";

	string strLine = "";
	string strText = "";

	// Go through and store each line in the text file within a "string" object
	while(getline(fin, strLine))
	{
		strText = strText + "\n" + strLine;
	}

	// Close our file
	fin.close();

	// Return the text file's data
	return strText;
}


///////////////////////////////// INIT SHADERS \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*
/////
/////	This function loads a vertex and fragment shader file
/////
///////////////////////////////// INIT SHADERS \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*

void CShader::InitShaders(string strVertex, string strFragment)
{
	// These will hold the shader's text file data
	string strVShader, strFShader;

	// Make sure the user passed in a vertex and fragment shader file
	if(!strVertex.length() || !strFragment.length())
		return;

	// If any of our shader pointers are set, let's free them first.
	if(m_hVertexShader || m_hFragmentShader || m_hProgramObject)
		Release();

	// Here we get a pointer to our vertex and fragment shaders
	m_hVertexShader = glCreateShaderObjectARB(GL_VERTEX_SHADER_ARB);
	m_hFragmentShader = glCreateShaderObjectARB(GL_FRAGMENT_SHADER_ARB);

	// Now we load the shaders from the respective files and store it in a string.
	strVShader = LoadTextFile(strVertex.c_str());
	strFShader = LoadTextFile(strFragment.c_str());

	// Do a quick switch so we can do a double pointer below
	const char *szVShader = strVShader.c_str();
	const char *szFShader = strFShader.c_str();

	// Now this assigns the shader text file to each shader pointer
	glShaderSourceARB(m_hVertexShader, 1, &szVShader, NULL);
	glShaderSourceARB(m_hFragmentShader, 1, &szFShader, NULL);

	// Now we actually compile the shader's code
	glCompileShaderARB(m_hVertexShader);
	glCompileShaderARB(m_hFragmentShader);
		
	// Next we create a program object to represent our shaders
	m_hProgramObject = glCreateProgramObjectARB();

	// We attach each shader we just loaded to our program object
	glAttachObjectARB(m_hProgramObject, m_hVertexShader);
	glAttachObjectARB(m_hProgramObject, m_hFragmentShader);

	// Our last init function is to link our program object with OpenGL
	glLinkProgramARB(m_hProgramObject);

	int logLength = 0;
    glGetObjectParameterivARB(m_hProgramObject, GL_OBJECT_INFO_LOG_LENGTH_ARB, &logLength);
	
	if (logLength > 1)
	{
		char *szLog = (char*)malloc(logLength);
		int writtenLength = 0;

		glGetInfoLogARB(m_hProgramObject, logLength, &writtenLength, szLog);
		
		
		free(szLog);
	}

	// Now, let's turn off the shader initially.
	glUseProgramObjectARB(0);
}


///////////////////////////////// GET VARIABLE \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*
/////
/////	This function returns a variable ID for a shader variable
/////
///////////////////////////////// GET VARIABLE \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*

GLint CShader::GetVariable(string strVariable)
{
	// If we don't have an active program object, let's return -1
	if(!m_hProgramObject)
		return -1;

	// This returns the variable ID for a variable that is used to find
	// the address of that variable in memory.
	return glGetUniformLocationARB(m_hProgramObject, strVariable.c_str());
}


///////////////////////////////// RELEASE \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*
/////
/////	This function frees all of our shader data
/////
///////////////////////////////// RELEASE \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*

void CShader::Release()
{
	// If our vertex shader pointer is valid, free it
	if(m_hVertexShader)
	{
		glDetachObjectARB(m_hProgramObject, m_hVertexShader);
		glDeleteObjectARB(m_hVertexShader);
		m_hVertexShader = NULL;
	}

	// If our fragment shader pointer is valid, free it
	if(m_hFragmentShader)
	{
		glDetachObjectARB(m_hProgramObject, m_hFragmentShader);
		glDeleteObjectARB(m_hFragmentShader);
		m_hFragmentShader = NULL;
	}

	// If our program object pointer is valid, free it
	if(m_hProgramObject)
	{
		glDeleteObjectARB(m_hProgramObject);
		m_hProgramObject = NULL;
	}
}


/////////////////////////////////////////////////////////////////////////////////
//
// * QUICK NOTES * 
//
// Nothing new was added to this file for this tutorial.
//
// 
// © 2000-2005 GameTutorials