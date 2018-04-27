#include <cstdlib>
#include <cctype>
#include <iostream>
#include <string>
#include <sstream>
#include "card.h"

/*  Class Constructor
 *  ----------------------------------------------------------  */
Card::Card(int intValue, char type, char color) :
		intValue(-1), type('\0'), color('\0') {
	setIntValue(intValue);
	setType(type);
	setColor(color);
}

Card::Card(string trueValue, char type, char color) {
	intValue = trueValueToIntValue(trueValue);
	setIntValue(intValue);
	setType(type);
	setColor(color);
}

Card::Card() :
		intValue(-1), type('\0'), color('\0') {
}

/* Getter and Setter Methods
 * ------------------------------------------------------------ */

//Value (char) - Any number between or equal to '1' thru '9' and Jack ('J'), Queen ('Q'), King ('K'), Ace ('A').
//The number character values correspond to one more than their actual value e.g. the valueToInt('9') = 10
void Card::setIntValue(int intValue) {
	if (intValue >= 1 && intValue <= 13) {
		//Valid number, set its intValue
		this->intValue = intValue;
	} else {
		cout
				<< "setValue Error: Invalid card value, must be a integer between or equal to 1 and 13"
				<< endl;
	}
}

int Card::getIntValue() {
	return this->intValue;
}

string Card::getTrueValue(bool returnAsWord) {
	string trueValueShort = this->intValueToTrueValue(intValue);
	if(returnAsWord) {
		//Return a long written out version of the true value
		if(trueValueShort == "A") {
			return "Ace";
		}
		else if(trueValueShort == "J") {
			return "Jack";
		}
		else if(trueValueShort == "Q") {
			return "Queen";
		}
		else if(trueValueShort == "K") {
			return "King";
		}
		else if (trueValueShort == "2"){
			return "Two";
		}
		else if (trueValueShort == "3"){
			return "Three";
		}
		else if (trueValueShort == "4"){
			return "Four";
		}
		else if (trueValueShort == "5"){
			return "Five";
		}
		else if (trueValueShort == "6"){
			return "Six";
		}
		else if (trueValueShort == "7"){
			return "Seven";
		}
		else if (trueValueShort == "8"){
			return "Eight";
		}
		else if (trueValueShort == "9"){
			return "Nine";
		}
		else if (trueValueShort == "10"){
			return "Ten";

		}
	}
	return trueValueShort;
}

//Type (char) - May be a Heart (H), Diamond (D), Club (C), or Spade (S)
void Card::setType(char type) {
	type = toupper(type);
	if (type != 'H' && type != 'D' && type != 'C' && type != 'S') {
		cout << "setType Error: Invalid card Type must be H, D, C or S" << endl;
	} else {
		this->type = type;
	}
}

char Card::getType() {
	return this->type;
}

string Card::getTypeName() {
	string name;
	switch (type) {
	case 'H':
		name = "Heart";
		break;
	case 'D':
		name = "Diamond";
		break;
	case 'C':
		name = "Club";
		break;
	case 'S':
		name = "Spade";
		break;
	}

	return name;
}

//Color  (char) - May be Black or Red (B,R)
void Card::setColor(char color) {
	color = toupper(color);
	if (color != 'B' && color != 'R') {
		cout << "setColor Error: Invalid card Color must be B or R" << endl;
	} else {
		this->color = color;
	}
}

char Card::getColor() {
	return this->color;
}

string Card::getColorName() {
	string name;
	switch(color) {
	case 'B':
		name = "Black";
		break;
	case 'R':
		name = "Red";
		break;
	}

	return name;
}

string Card::getFullName(bool excludeColor) {
	if(excludeColor) {
		return getTrueValue(1) + " of " + getTypeName() + "s";

	} else {
		return getColorName() + " " + getTrueValue(1) + " of " + getTypeName() + "s";
	}

}


int Card::trueValueToIntValue(string trueValueShort) {
	int intValue;
	if(trueValueShort == "A"){
		intValue = 1;
	}
	else if(trueValueShort == "J") {
		intValue = 11;
	}
	else if(trueValueShort == "Q"){
		intValue = 12;
	}
	else if(trueValueShort == "K") {
		intValue = 13;
	}
	else {
		//my minGW istream function and stoi functions are buggy in my toolchain, manually generate int value from string
		if(trueValueShort == "10") {
			intValue = 10;
		} else {
			//get ascii value and shift number to the intValue with an offset of 48
			char charValue = trueValueShort[0];
			intValue = ((int) charValue) - 48;
		}

	}


	return intValue;
}

string Card::intValueToTrueValue(int intValue){
	string trueValue;
	switch(intValue) {
	case 1:
		trueValue = "A";
		break;
	case 11:
		trueValue = "J";
		break;
	case 12:
		trueValue = "Q";
		break;
	case 13:
		trueValue = "K";
		break;
	default:
		stringstream ss;
		ss << intValue;
		trueValue = ss.str();
		break;
	}
	return trueValue;
}
