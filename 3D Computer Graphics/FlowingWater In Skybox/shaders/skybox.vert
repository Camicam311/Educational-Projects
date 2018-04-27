varying vec3 Normal;
varying vec3 reflectedDirection;

void main()
{
    gl_Position = gl_ModelViewProjectionMatrix*gl_Vertex;
	Normal = gl_NormalMatrix * gl_Normal;
	vec3 EyeDir = vec3(gl_ModelViewMatrix*gl_Vertex);

	reflectedDirection = normalize(reflect(EyeDir, Normal));
}