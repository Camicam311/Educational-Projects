#include <iostream>
#include <deque>
#include "standardDeck.h"

standardDeck::standardDeck() {
	//Silence is golden
}

//Add more standard decks to back of current deck in sorted order
void standardDeck::extendDeck(int numDecks) {
	for(int i=0; i<numDecks; i++) {
		populate();
	}
}


/*
 * Populates a deck of the following cards in the order shown:
 * All Black Clubs
 * All Red Diamonds
 * All Red Hearts
 * All Black Spades
 *
 * All the cards in each suit are ordered in the following way: A, 2 thru 10, J, Q, K
 */
void standardDeck::populate() {


	Card curCard;
	int curValue; //The true value of this is 1 more than the curValue and is calculated with valueToInt
	char curColor;
	char curType;
	int suitNum = 13;

	//Populate all black clubs
	for (int i = 1; i <= suitNum; i++) {
		curColor = 'B';
		curType = 'C';
		curValue = i;
		curCard.setColor(curColor);
		curCard.setType(curType);
		curCard.setIntValue(curValue);
		deck.push_back(curCard);
		//cout << curCard.getFullName(0) << endl;
	}

	//Populate all red Diamonds
	for (int i = 1; i <= suitNum; i++) {
		curColor = 'R';
		curType = 'D';
		curValue = i;
		curCard.setColor(curColor);
		curCard.setType(curType);
		curCard.setIntValue(curValue);
		deck.push_back(curCard);
		//cout << curCard.getFullName(1) << endl;
	}

	//Populate all red hearts
	for (int i = 1; i <= suitNum; i++) {
		curColor = 'R';
		curType = 'H';
		curValue = i;
		curCard.setColor(curColor);
		curCard.setType(curType);
		curCard.setIntValue(curValue);
		deck.push_back(curCard);
		//cout << curCard.getFullName(1) << endl;
	}

	//Populate all Black Spades
	for (int i = 1; i <= suitNum; i++) {
		curColor = 'B';
		curType = 'S';
		curValue = i;
		curCard.setColor(curColor);
		curCard.setType(curType);
		curCard.setIntValue(curValue);
		deck.push_back(curCard);
		//cout << curCard.getFullName(1) << endl;
	}
}
