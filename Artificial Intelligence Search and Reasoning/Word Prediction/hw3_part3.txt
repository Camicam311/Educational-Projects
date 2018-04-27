#!/usr/bin/python

#Set Dependent Library Files
import random
import math
import sys

unigramDict = {};
bigramDict = {};
wordList = []; #Reverse lookup to find word given its index
total_unigram_freq = 0
prog_errors = []

# loadUnigramDict() - Describe Here
def loadWordList(vocab_filename):
	#Open Dependent Files
	vocab_file = open(vocab_filename, "r") #open vocab file to read in
	wList = []
	for word in vocab_file:
		wList.append(word.rstrip().upper())
	return wList

def loadUnigramDict(word_list, unigram_filename):
	freq_list = []
	unigram_file = open(unigram_filename, "r")
	for freq in unigram_file:
		freq_list.append(int(freq))
	return dict(zip(word_list, freq_list))

# loadBigramDict() - Describe Here
def loadBigramDict(word_list, bigram_filename):
	#Open Dependent Files
	bigram_file = open(bigram_filename, "r") #open unigram file to read in
	following_freq = 0
	bigram_dict = {}

	for line in bigram_file:
		#Index Mapping: 0 -> word 1 index, 1 -> word 2 index, 2 -> word 2 following word 1 frequency
		line_split = line.split("\t")
		word1 = word_list[int(line_split[0])-1]
		word2 = word_list[int(line_split[1])-1]
		following_freq = int(line_split[2])
		bigram_dict[(word1,word2)] = following_freq
	return bigram_dict

def totalUnigramFreq():
	total_freq = 0
	for word,freq in unigramDict.items():
		total_freq = total_freq + freq
	return total_freq

def wordUnigramPrb(word, total_freq):
	return float(unigramDict[word])/total_freq

def wordBigramPrb(word1, word2):
	if not((word1,word2) in bigramDict):
		prog_errors.append("ERROR: Could Not Calculate Word Pair In Bigram: PRB("+word2+"|"+word1+")")
		return 1
	return float(bigramDict[(word1, word2)])/unigramDict[word2]

def wordMixturePrb(word1,word2,weight):
	return weight*wordUnigramPrb(word1, total_unigram_freq) + (1-weight)*wordBigramPrb(word1,word2)

def compareField(field):
   def c(l1,l2):
      return cmp(l1[field], l2[field])
   return c


wordList = loadWordList("dict/vocab.txt")
unigramDict = loadUnigramDict(wordList, "dict/unigram.txt")
bigramDict =  loadBigramDict(wordList, "dict/bigram.txt")


total_unigram_freq = totalUnigramFreq()

#PART A: Calculating Unigram Probabilities For Words With Letters That Start With S

#list of words that start with letter s
#word_list_s = [s for s in wordList if s[0] == "S" ]


#print("Printing Part A:")
#for word in word_list_s:
#	print("Word: " + str(word) + " Prb: " + str(wordUnigramPrb(word, unigramDict, total_unigram_freq)))

#PART B: Calculating Bigram Probabilities For First Ten Words Following "ONE"
#TODO: SORT THIS TO LIST OF HIGHEST PRB's AND PRINT FIRST TEN
#bigram_list_ten = [s for s in bigramDict if s[0] == "ONE"]
#prbList = []
#for (word1,word2) in bigram_list_ten:
#	prbList.append([(word1,word2), wordBigramPrb(word1, word2)])
#print(prbList)

#PART C: Print BigGram and Unigram Prb of Sentences
#TODO: ADD PERIOD TO THIS CALCULATION IF PIAZZA SAYS SO
#TODO: ASK IF <S> should be in this calculation
L_uc = math.log(wordUnigramPrb("THE", total_unigram_freq)) + math.log(wordUnigramPrb("STOCK", total_unigram_freq)) + math.log(wordUnigramPrb("MARKET", total_unigram_freq)) + math.log(wordUnigramPrb("FELL", total_unigram_freq)) + math.log(wordUnigramPrb("BY", total_unigram_freq)) + math.log(wordUnigramPrb("ONE", total_unigram_freq)) + math.log(wordUnigramPrb("HUNDRED", total_unigram_freq))+ math.log(wordUnigramPrb("POINTS", total_unigram_freq))+ math.log(wordUnigramPrb("LAST", total_unigram_freq))+ math.log(wordUnigramPrb("WEEK", total_unigram_freq))

#TODO: ADD PERIOD TO THIS CALCULATION AND THE EMPTY STRING IF PIAZZA SAYS SO
L_bc =  math.log(wordBigramPrb("<S>", "THE")) + math.log(wordBigramPrb("THE", "STOCK")) + math.log(wordBigramPrb("STOCK","MARKET")) + math.log(wordBigramPrb("MARKET", "FELL"))+ math.log(wordBigramPrb("FELL","BY")) + math.log(wordBigramPrb("BY","ONE")) + math.log(wordBigramPrb("ONE","HUNDRED")) + math.log(wordBigramPrb("HUNDRED","POINTS")) + math.log(wordBigramPrb("POINTS","LAST"))+ math.log(wordBigramPrb("LAST","WEEK"))

print("Part C Unigram PRB: " + str(L_uc))
print("Part C Bigram PRB: " + str(L_bc))

#PART D: Print BigGram and Unigram Prb of Sentences
L_du = math.log(wordUnigramPrb("THE", total_unigram_freq)) + math.log(wordUnigramPrb("FOURTEEN", total_unigram_freq)) + math.log(wordUnigramPrb("OFFICIALS", total_unigram_freq)) + math.log(wordUnigramPrb("SOLD", total_unigram_freq)) + math.log(wordUnigramPrb("FIRE", total_unigram_freq))+ math.log(wordUnigramPrb("INSURANCE", total_unigram_freq))

L_dc =  math.log(wordBigramPrb("<S>", "THE")) + math.log(wordBigramPrb("THE", "FOURTEEN")) + math.log(wordBigramPrb("FOURTEEN","OFFICIALS")) + math.log(wordBigramPrb("OFFICIALS", "SOLD"))+ math.log(wordBigramPrb("SOLD","FIRE")) + math.log(wordBigramPrb("FIRE","INSURANCE"))
if(prog_errors > 0):
	L_dc = 0
print("PART D Unigram PRB: " + str(L_du))
print("PART D Bigram PRB: " + str(L_dc))
for error in prog_errors:
	print("\t"+error)
prog_errors=[]

#PART E: Calculate mixture model prb of sentence in part D
weight = 0.00
step = 0.01
mixtureList = []
while(weight<=1):
	prb = math.log(wordMixturePrb("<S>", "THE",weight)) + math.log(wordMixturePrb("THE", "FOURTEEN",weight)) + math.log(wordMixturePrb("OFFICIALS", "SOLD",weight)) + math.log(wordMixturePrb("FIRE","INSURANCE",weight)) + math.log(wordMixturePrb("FOURTEEN","OFFICIALS",weight)) + math.log(wordMixturePrb("SOLD","FIRE",weight))
	
	mixtureList.append((prb, weight))
	weight=weight+step

mixtureList.sort(reverse=True)

for (prb, weight) in mixtureList:
	print str(prb) 

#The Largest Value In This List Is The MLE? ASK\
print("PART E Mixture Bigram PRB: " + str(mixtureList[0][0]) + " With Lambda: " + str(mixtureList[0][1]))