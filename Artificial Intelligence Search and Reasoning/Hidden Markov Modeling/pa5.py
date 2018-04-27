#!/usr/bin/python
import math

emissionMat = [] #Store Emission Matrix
transitionMat = [] #Store Transition Matrix
initialMat = [] #Store initial state distribution
observationVec = [] #Store 45k observations
letterMap = ['a','b','c','d', 'e', 'f', 'g', 'h', #index i stores letter l in alphabetic order
			 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
			 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
			 'y', 'z'] 
lStarMat = []
SVec = []

#loadFiles - load depedent matricies of Viterbi Algo 
def loadFiles():
	emissionMatFile = open('emissionMatrix.txt')
	global emissionMat
	emissionMat = [map(float, row.strip().split('\t')) for row in emissionMatFile] #read in emission matrix
	emissionMatFile.close()

	global transitionMat
	transitionMatFile = open('transitionMatrix.txt')
	transitionMat = [map(float, row.strip().split(' ')) for row in transitionMatFile] #read in emission matrix
	transitionMatFile.close()

	global initialMat
	initialMatFile = open('initialStateDistribution.txt')
	initialMat = [float(row.strip()) for row in initialMatFile]
	initialMatFile.close()

	global observationVec
	observationVecFile = open('observations.txt')
	observationVec = map(int, [row.strip().split(' ') for row in observationVecFile][0])
	observationVecFile.close()

def calcLStar():
	global lStarMat
	lVec = []
	for i in range(len(initialMat)):
		lStarMat.append([math.log(initialMat[i]) + math.log(emissionMat[i][observationVec[0]])]) #add to each row
	for t in range(1,len(observationVec),1):
		lVec = []
		for j in range(len(initialMat)):
			maxerVec = []
			for i in range(len(initialMat)):
				#may need to transpose how lStart Max is being appended
				maxerVec.append(lStarMat[i][t-1] + math.log(transitionMat[i][j])) #build max_i vector
			maxerVec.sort(reverse = True) 
			lStarMat[j].append(maxerVec[0] + math.log(emissionMat[j][observationVec[t]])) #add jth element to l start at time t
	

def argMax(argVec):
	argMax = float("-inf")
	argMaxPos = 0
	for i in range(len(argVec)):
		if(argVec[i] > argMax):
			argMax = argVec[i]
			argMaxPos = i
	return argMaxPos 


def calcPhi(t, j):
	argVec = []
	for i in range(len(initialMat)):
		argVec.append(lStarMat[i][t-1] + math.log(transitionMat[i][j]))
	return argMax(argVec)

def calcSVec():
	global SVec
	#Get S_T (first case)
	SVec = [None]*len(observationVec)
	argVec = []
	for i in range(len(initialMat)):
		argVec.append(lStarMat[i][len(observationVec)-1])
	SVec[len(observationVec)-1] = argMax(argVec)

	for t in range(len(observationVec)-2, -1, -1):
		SVec[t] = calcPhi(t+1, SVec[t+1])
	
loadFiles() #Load global vars used for calculation
print "Loading L Star (may take a minute)"
calcLStar()
calcSVec()

#Write output to file to graph in R (can't do numpy because windows IDE blows)
outputFile = open("output.txt","w")
for i in range(len(SVec)):
	outputFile.write(letterMap[SVec[i]] + "\t" + str(SVec[i]) + "\t" + str(observationVec[i]) + "\n")
outputFile.close()

#Print the decoded word to console	
curLetterNdx = -1
hasChanged = False
for item in SVec:
	if(curLetterNdx != item): hasChanged = True
	if(hasChanged):
		curLetterNdx = item 
		hasChanged = False
		print letterMap[item],
