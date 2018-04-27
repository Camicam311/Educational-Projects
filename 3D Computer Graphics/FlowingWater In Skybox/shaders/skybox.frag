varying vec3 Normal;
varying vec3 reflectedDirection;
uniform samplerCube cube;

void main()
{    
   gl_FragColor = textureCube(cube, reflectedDirection);
}