/*
 * deck.h
 * A Base Class containing all primitive properties & behaviors of a standard deck of cards
*/

#include <deque>
#include "card.h"

#ifndef DECK_H_
#define DECK_H_

using namespace std;
class cardStack {
public:
	cardStack();
	void removeCard(int cardNdxOffset = 0); //remove a card from the top, bottom or any other arbitrary location in the deck
	void removeCard(Card card, bool removeDuplicates); //remove all cards from deck equivalent to the card passed to this method
	void removeCards(unsigned int cardNdxBegin = 0, unsigned int cardNdxEnd = 0); //remove n cards from the top, bottom or any other arbitrary location in the deck
	void insertCard(int cardNdxOffset, Card card); //insert a card at any arbitrary position in the deck
	void shuffle(); //Randomly shuffle the cards in the deck
	void displayCards(bool displayColor = 1); //Output all cards currently in the deck to the console in their current order
	void displayCard(unsigned int deckNdx=0, bool displayColor = 1); //read a card at specified index to standard output
	void displaySize(); //show the size of the deck in standard output
	int getSize(); //return the size of the deck
	Card getCard(int cardNdx=0); //return a card at a given index
protected:
	deque<Card> deck;
};

#endif /* DECK_H_ */
