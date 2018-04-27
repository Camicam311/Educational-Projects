#include <iostream>
#include <algorithm>
#include <ctime>
#include <deque>
#include "cardStack.h"

/*  Class Constructors
 *  ----------------------------------------------------------  */
cardStack::cardStack() {
	//Silence is golder
}

/*  Member Function Definitions
 *  ----------------------------------------------------------  */

/* removeCard()
 * remove a card from the top, bottom or any other arbitrary location in the deck
 * THIS IS AN OVERLOADED FUNCTION THAT CAN BE USED IN THE FOLLOWING WAYS
 * removeCard(int cardNdxOffset) - Removes card at specified index
 * removeCard(Card card, bool removeDuplicates) - Removes card(s) in deck that are equivalent to the card passed in,
 * 	if removeDuplicates is 1 then it will remove every instance of the card with the specified value (useful if multiple decks in play),
 * 	otherwise it will only remove the first card it finds that is equivalent starting from beginning of the deck

 */

void cardStack::removeCard(int cardNdxOffset) {
	deck.erase(deck.begin() + cardNdxOffset);
}

void cardStack::removeCard(Card card, bool removeDuplicates) {
	bool cardRemoved = 0;
	for (unsigned int cardNdx = 0; cardNdx < deck.size(); cardNdx++) {
		if (deck[cardNdx].getFullName(0) == card.getFullName(0)) {
			//getFullNames proves that cards have equivalent color, type and value
			if (removeDuplicates || !cardRemoved) {
				//Card has not been removed yet or removing duplicates is allowed, remove card from deck
				deck.erase(deck.begin() + cardNdx);
				cardRemoved = 1;
			}
		}
	}
}

//remove n cards from the top, bottom or any other arbitrary location in the deck
void cardStack::removeCards(unsigned int cardNdxBegin,
		unsigned int cardNdxEnd) {
	if ((cardNdxBegin <= cardNdxEnd) && (cardNdxEnd < deck.size())) {
		//valid range, iterate through removal
		for (unsigned int i = cardNdxBegin; i <= cardNdxEnd; i++) {
			Card card = deck[cardNdxBegin];
			//cout << "Removing Card" << i <<": " << card.getFullName(1) << endl;
			removeCard(card, 0);
		}
	} else {
		cout
				<< "Card Remove Error: Invalid Index Range Given, must choose an Index range between 0 and "
				<< (deck.size() - 1) << endl;
	}
}

//insert at any arbitrary position in the deck
void cardStack::insertCard(int cardNdxOffset, Card card) {
	deque<Card>::iterator it = deck.begin() + cardNdxOffset;
	deck.insert(it, card);
}

//Randomly shuffle the cards in the deck
void cardStack::shuffle() {
	// random generator function:
	srand(time(NULL));
	random_shuffle(deck.begin(), deck.end());
}

/*
 * Display all the cards in the deck in the order they are currently in on standard output
 */
void cardStack::displayCards(bool displayColor) {
	for (unsigned int cardNdx = 0; cardNdx < deck.size(); cardNdx++) {
		displayCard(cardNdx, displayColor);
	}
}

/*
 * Output a card at the specified position in the deck
 */
void cardStack::displayCard(unsigned int cardNdx, bool displayColor) {
	if (cardNdx >= 0 && cardNdx < deck.size()) {
		cout << deck[cardNdx].getFullName(displayColor) << endl;
	} else {
		cout << "Error: Cannot display card, Index is out of bounds!" << endl;
	}
}

int cardStack::getSize() {
	int deckSize = deck.size();
	return deckSize;
}

void cardStack::displaySize() {
	cout << deck.size() << endl;
}


Card cardStack::getCard(int cardNdx) {
	return deck[cardNdx];
}
