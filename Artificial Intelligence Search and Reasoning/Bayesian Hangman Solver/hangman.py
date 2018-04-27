#!/usr/bin/python

#Set Dependent Library Files
import random

#Define Global Vars
word_tpl = ["_", "_", "_", "_", "_"]
letter_prb_distribution = []
correct_letters = []
incorrect_letters = []
total_word_count = 0;
dict_data = {};
letter_guess = ""
letter_distribution = [] #current distribution of letters given the user's guesses
new_game = True

#Define Program Procedures 
def sortNFrequent(dict_data, n, order):
	if(order == 'asc'):
		return sorted([dict_data_item for dict_data_item in dict_data.items()], key=lambda tup: tup[1])[:n]
	if(order == 'desc'):
		return sorted([dict_data_item for dict_data_item in dict_data.items()], key=lambda tup: tup[1], reverse=True)[:n]

def dispWordTpl(word_tpl):
	for letter in word_tpl:
		print(letter),

def updateWordTpl(hidden_word, letter_guess, word_tpl): #update the word template display per letter guess
	for i in xrange(len(hidden_word)):
		if hidden_word[i] == letter_guess: 
			word_tpl[i] = letter_guess
	return word_tpl

def isWordComplete(word_tpl):
	for symbol in word_tpl:
		if symbol == "_":
			return False
	return True

#Calculate P(E|W=w),check if evidence is valid for a given word
def calcPrbEvidenceGivenWord(word, word_tpl, incorrect_letters):
	word_list = list(word)
	for i in xrange(len(word_list)):
		if (word_list[i] != word_tpl[i]) and (word_tpl[i] != "_"):
			return 0 #Letter in the word template is different than letter in the word
					 # So this word cannot possibly occur
		if word_list[i] in incorrect_letters:
			return 0 #Letter in ith position of word is an incorrect letter
					 #So this word cannot possibly occur
	return 1

#Calculate P(W=w)
def calcPrbWord(dict_data, word, total_word_count):
	return float(dict_data[word])/total_word_count

#Calculate P(E|W=w)P(W=w)
def calcPosteriorNumerator(dict_data, word, total_word_count, word_tpl, incorrect_letters):
	#1. Calc P(E|W=w)
	PrbEgW = calcPrbEvidenceGivenWord(word, word_tpl, incorrect_letters)
	#2. Calc P(W=w)
	PrbW = calcPrbWord(dict_data, word, total_word_count)
	#3. Multiply results to obtain numerator
	PrbTop = float(PrbEgW)*PrbW
	return PrbTop

#Calculate P(E)
def calcPosteriorDenominator(dict_data, total_word_count, word_tpl, incorrect_letters):
	sigmaE = 0
	for item in dict_data.items():
		sPrbEgW = calcPrbEvidenceGivenWord(item[0], word_tpl, incorrect_letters)
		sPrbW = calcPrbWord(dict_data, item[0], total_word_count)
		sigmaE += (float(sPrbEgW)*sPrbW)
	return sigmaE

#Calculate P(L_i=l for some i in 1-5 | W=w), this asks if a letter is in a word
def calcPrbLetterInWord(word, test_letter):
	for letter in word:
		if(letter == test_letter):
			return 1
	return 0

#Calculate P(l_i for some i in 1-5 | E)
def calcPrbLGivenE(letter,dict_data, total_word_count, word_tpl, incorrect_letters):
	letter = letter.upper()
	words = dict_data.keys()
	posteriorDenominator = calcPosteriorDenominator(dict_data, total_word_count, word_tpl, incorrect_letters)
	sigmaL = 0 #The total sum of Prb for all words,
			   # represents chance of letter happening given E
	for word in words:
		PrbLgW = calcPrbLetterInWord(word, letter)
		PrbWgE = calcPosteriorNumerator(dict_data, word, total_word_count, word_tpl, incorrect_letters)/posteriorDenominator 
		sigmaL += PrbLgW*PrbWgE
	return float(sigmaL)

#return an array of tuples with letters and their associated chances of occurring
def calcLetterPrbDistribution(dict_data, total_word_count, word_tpl, incorrect_letters):
	alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
	dist = {}
	for letter in alphabet:
		dist[letter.upper()] =  calcPrbLGivenE(letter.upper(),dict_data, total_word_count, word_tpl, incorrect_letters)
	return dist

#Calculate the next best guess
def calcNextBestGuess(letter_prb_dist):
	letter_prb_dist = letter_prb_dist.items()
	max_prb = ('',0.0)
	for item in letter_prb_dist:
		if(item[1] > max_prb[1] and not(item[0].upper() in correct_letters)):
			max_prb = item
	return max_prb

#Define Main Program
dictionary = open("dict/words.txt", "r") #open dict file to read in

for word_line in dictionary:
	word_data = word_line.split(" ") #[0] -> word string [1]-> # of time word appears
	word_freq = int(word_data[1])
	total_word_count += word_freq #incr total word count
	dict_data[word_data[0]] = word_freq


print("Welcome to Hangman! Lets play. (Press ctrl+c to quit) \n")
while(not(isWordComplete(word_tpl))):
	letter_prb_dist = calcLetterPrbDistribution(dict_data, total_word_count, word_tpl, incorrect_letters)
	if new_game == True:
		hidden_word = list(random.choice(dict_data.keys())) #Choose a random word for user to guess
		new_game = False
		print("First Guess: "),
	elif len(correct_letters) == 0:
		print("None correctly guessed: "),
	else:
		print("Correctly guessed: "),
	dispWordTpl(word_tpl)
	print("\nIncorrectly guessed: "),
	if(len(incorrect_letters) > 0):
		print(",".join(incorrect_letters)) 
	else: 
		print("None")

	print("Next Best Guess: "),
	best_guess = calcNextBestGuess(letter_prb_dist)
	print(best_guess[0] + " with certainty " + str(best_guess[1]))

	letter_guess = raw_input("\nGuess A Letter [A-Z]: ").upper()
	print("\n")

	#Determine if guess correct, or incorrect, then update lists and background calculations
	if letter_guess in hidden_word:
		correct_letters.append(letter_guess)
		word_tpl = updateWordTpl(hidden_word, letter_guess, word_tpl) 
	else:
		incorrect_letters.append(letter_guess)
	

if(isWordComplete(word_tpl)):
	print("Correctly guessed: "),
	dispWordTpl(word_tpl)
	print("\nCongratulations, You Win!")