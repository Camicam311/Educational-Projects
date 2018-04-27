#!/usr/bin/python
import math

#xList & yList in corresponding orders.
xList = [] #List of lists. Each list a row of x
yList = [] #list of y's
pUpdate = [] #The current probability vector for the ith iteration of EM 
L 	  = [] #List of log likelihood results 

#float_round - Taken from stackOverflow. Rounds a number to specified decimal places
def float_round(num, places = 0, direction = math.floor):
    return direction(num * (10**places)) / float(10**places)

#loadFiles() - Load x.txtx and y.txt as lists
def loadFiles():
	xFile = open("./x.txt")
	yFile = open("./y.txt")
	for line in xFile:
		line = line.rstrip()
		xListLineListChars = line.split(" ")
		xListLineList = []
		for ele in xListLineListChars: xListLineList.append(int(ele)) 
		xList.append(xListLineList)

	for element in yFile:
		element = element.rstrip()
		yList.append(int(element))

	xFile.close()
	yFile.close()

#initP() - Initialize the default probability for EM
#Params: p - The vector that pUpdate is initialized to
def initP(n):
	n = float(n)
	i=0
	while(i < 23):
		pUpdate.append(n)
		i = i+1

#PrbYgX - return the probability of Y given X.
#Params: y_t and x_t are the parameters of the noisy OR model
#		 i is the index of pList to use
def PrbYgX(y, x):
		pNdx = 0 #current index of the product operator
		product = 1  #result of the product operation
		while(pNdx < 23):
			if(x[pNdx] == 1):
				product = product*(1 - pUpdate[pNdx])
			pNdx = pNdx + 1
		if(y == 1):
			return 1 - product
		return product

#Check if there is an error for P(Y=1|X=x_t) 
def hasError(x, y):
	prbY1gX = float_round(PrbYgX(1,x), 4, round)
	if((y == 0 and prbY1gX >= 0.5000) or (y == 1 and prbY1gX <= 0.5000)): return 1
	return 0

#EStep - Compute Log Liklihood [1/T]*sigma{log[P(Y=y_t|X=x_t)]} using current value of p_i
#	     Note that P(Y=1|X) = 1 - product{ 1-p_i }^X
#Params: i is the ith index of PList to use
#Return: A tuple in the form (LogLiklihood,numErrors)
def EStep():
	T = 267
	logSum = 0
	numError = 0
	lsNdx = 0 #current index of data being computed in logsum
	while (lsNdx < 267):
		prbYgX = PrbYgX(yList[lsNdx],xList[lsNdx])
		logSum = logSum + math.log(prbYgX)
		if(hasError(xList[lsNdx], yList[lsNdx])): numError = numError + 1
		lsNdx = lsNdx + 1
	return (float_round((1.0/T)*logSum,4,round),numError)

#MStep - Compute pUpdate with formula p_i <- [1/(T_i)]*Sigma{ (y_t*x_it*p_i)/[1- product(1-p_j)^(x_j*t)] } for each p_i
#Params: i is the ith index of PList to update
def MStep(pUpdate):
	i = 0
	pNew = []
	while(i < 23):
		T_i = 0
		#Calculate T_i
		j = 0
		while(j < 267): 
			T_i = T_i + xList[j][i]
			j = j+1

		#Calculate Sigma
		pSum = 0
		t = 0
		while(t < 267):
			#Calculate the numerator
			fracTop =  yList[t]*xList[t][i]*pUpdate[i]
			#Calculate the denominator
			fracBottom = PrbYgX(1, xList[t])
			pSum = pSum + float_round(fracTop/fracBottom, 4, round)
			t = t+1
		pNew.append((1.0/T_i)*pSum)
		i = i+1
	return pNew

#Check if the number n is a power of 2
def isPowTwo(num):
	return ((num & (num - 1)) == 0) and num != 0

loadFiles() #Load x and y lists
initP(2/23.0) #initialize p vector to 2/n, where n is the number of elements in each line of x.txt

EMiter=0
while(EMiter <= 256):
	if(isPowTwo(EMiter) or EMiter == 0):
		ETuple = EStep()
		print  "Iteration: " + str(EMiter) + " Mistakes: " + str(ETuple[1]) + " Likelihood: " + str(ETuple[0])
	if(EMiter != 256):
		pUpdate = MStep(pUpdate)
	EMiter = EMiter+1

print "Final p_i: "
for item in pUpdate:
	print item