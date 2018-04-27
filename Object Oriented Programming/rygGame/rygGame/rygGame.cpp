/*
 * rygGame.cpp
 *
 *  Created on: Feb 17, 2013
 *      Author: Joshs
 */

#include <iostream>
#include <stdlib.h>
#include <time.h>
#include <math.h>
#include <vector>

using namespace std;

/*
 * Generates a random 3-digit number.
 */
int generateRand();
char* compareDigits(int num1, int num2);
bool isMatchedNum(int num1, int num2);
void displayComparisonResultsList(char* comparison_results);
bool checkRange(int num);
int* numToArray(int num);
bool isFlagged(int keyDigitPlacement, bool* flagKey);
void playRYGGame(int num_key);

int main() {
	//Initialize Local Vars
	int num_key;

	//Condensed to 5 to 6 lines as requested =), Thanks for reading my code!!]
	//I didn't know you volunteered to read it. Your comments are really helpful!! =D
	//What's your name?
	//num_key = generateRand();
	num_key = 122; //Used for testing

	playRYGGame(num_key);
	return 1;
}

void playRYGGame(int num_key){
	    //Initialize local variables
		unsigned int num_guessed;
		bool num_match;

		//Set local variables
		num_match = false;

		//Start the game
		while (num_match == false) {
			//Input guess
			cout << "Guess a 3-Digit Number" << endl;
			cin >> num_guessed;

			if ((checkRange(num_guessed) == false)
					|| (checkRange(num_key) == false)) {
				//Number out of range
				cout << "The number you guessed is out of range. Please enter a number equal to or between 100 - 999"
						<< endl;
			} else if (isMatchedNum(num_guessed, num_key)) {
				//If guess matches key, return true and let user know of win.
				cout << "CONGRATULATIONS, YOU ARE CORRECT!";
				num_match = true;
			} else {
				char* comparison_results;
				//Incorrect match, display RYG value hint using checkNum
				comparison_results = compareDigits(num_guessed, num_key);
				displayComparisonResultsList(comparison_results);
				cout << "Wrong number, try again" << endl;
			}
		}
}

/*
 * Generates a random number between 100 and 999.
 */
int generateRand() {
	srand(time(NULL));
	int randNum = rand() % 899 + 100;
	return randNum;
}

/*
 * Compares the value and placement of each digit in the guessed array (num1) to the value and placement of each number in the key array (num2).
 *
 * COMPARISONS
 * 'g': When the value and placement of guessed digit match the value and placements of all key digits push 'g' into pointer array
 * 'r': When neither value nor placement of the guessed digit match any of the key digits push 'r' into pointer array
 * 'y': When the value of the guessed digit matches at least one of the values of the key digit but the position of the two digits do not match
 *
 * PARAMETERS
 * ->int num1 - The number being tried
 * ->int num2 - The key number
 *
 * RETURN
 *  -> char* comparison_results: A character pointer array composed of 'g','r' or 'y'
 */
char* compareDigits(int num1, int num2) {
	int* pNum1 = numToArray(num1); //The Guessed Digit
	int* pNum2 = numToArray(num2); //The Key Digit
	bool* flaggedValues = new bool[3];
	char* rgyValues = new char[3];

	//If the number has been given ryg assignment, flag the key numbers element in the array that has been paired.
	//Initialized flagged values to all false
	for(int i=0; i<=2; i++) {
		*(flaggedValues + i) = false;
	}

	//Check for Greens (placement and value match)
	for(int i=0; i<=2; i++) {
		if(*(pNum1 + i) == *(pNum2 + i)) {
			*(flaggedValues + i) = true;
			*(rgyValues + i) = 'g';
		}
	}

	//Check for Yellows (!placement, has value)
	for(int key_ndx=0; key_ndx<=2; key_ndx++) {
		for(int guessed_ndx=0; guessed_ndx<=2; guessed_ndx++) {
			if(!isFlagged(key_ndx,flaggedValues)) {
				//Key Digit not flagged, check to see if it fits yellow criterion. Guaranteed to not be green at this point.
				if(*(pNum1 + guessed_ndx) == *(pNum2 + key_ndx)) {
					//This is a value match but not placement match since greens have been flagged. Flag this to be yellow
					*(flaggedValues + key_ndx) = true;
					*(rgyValues + key_ndx) = 'y';
				}
			}
		}
	}

	//Check for Reds (!value nor !placement), this is anything else that has not yet been flagged
	for(int key_ndx = 0; key_ndx <=2; key_ndx++) {
		if(!isFlagged(key_ndx, flaggedValues)) {
			*(flaggedValues + key_ndx) = true;
			*(rgyValues + key_ndx) = 'r';
		}
	}

	//cout << "pNum1[0] " << *pNum1 << " pNum1[1] " << *(pNum1 + 1) << " pNum1[2]" << *(pNum1 + 2) << endl;
	//cout << "pNum2[0] " << *pNum2 << " pNum2[1] " << *(pNum2 + 1) << " pNum2[2]" << *(pNum2 + 2) << endl;
	//cout << "rgyValues[0]: " << rgyValues[0] << endl;
	//cout << "rgyValues[1]: " << rgyValues[1] << endl;
	//cout << "rgyValues[2]: " << rgyValues[2] << endl;
	return rgyValues;
}

/*
 * Display how many red, yellow and greens exist in the comparison results array in list format
 */
void displayComparisonResultsList(char* rgyValues) {

	int yellow_count = 0;
	int red_count = 0;
	int green_count = 0;

	//Count Red, Greens and Yellows
	for(int i = 0; i <= 2; i++) {
		char cur_val = *(rgyValues + i);
		if(cur_val == 'r') {
			red_count++;
		}
		if(cur_val == 'y') {
			yellow_count++;
		}
		if(cur_val == 'g') {
			green_count++;
		}
	}

	cout << "You have: \n"
		 << red_count << " red \n"
		 << green_count << " green \n"
		 << yellow_count << " yellow" << endl;

}

/* Uses the results of checkNums to see if the entire number is a match. If it is a match, return true.
 * Else return false.
 * PARAMETERS:
 * num1 - The first int
 * num2 - The second int to be matched with
 * RETURN:
 * True or False
 */
bool isMatchedNum(int num1, int num2) {
	int* pNum1 = numToArray(num1);
	int* pNum2 = numToArray(num2);
	int digit1;
	int digit2;
	bool isMatch;

	isMatch = true;

	for (int i = 0; i <= 2; i++) {
		//Compare value and placement of each digit. If all values and placements are the same, we have a match
		digit1 = *(pNum1 + i);
		digit2 = *(pNum2 + i);

		if (digit1 != digit2) {
			isMatch = false;
		}
	}

	return isMatch;
}

/* Makes sure the number is 100 <= x <= 999*/
bool checkRange(int num) {
	if ((num < 100) || (num > 999)) {
		return false;
	}
	return true;
}

/* Convert a number to an integer array of n elements using pointers, array size is the first element of the array
 */
int* numToArray(int num) {
	int* pNumArr = new int[3];

	for (int i = 2; i >= 0; i--) {
		pNumArr[i] = num % 10;
		num /= 10;
	}

	return pNumArr;
}

/* If the placement from the passed key digit array matches a true value in the corresponding placement of the flag key, return true, else return false */
bool isFlagged(int keyDigitPlacement, bool* flagKey) {
	if(*(flagKey + keyDigitPlacement) == true) {
		return true;
	} else {
		return false;
	}
}

