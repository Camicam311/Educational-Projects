/*
 * deck.h
 * A Base Class containing all primitive properties & behaviors of a standard deck of cards
*/

#include <deque>
#include "cardStack.h"

#ifndef STD_DECK_H_
#define STD_DECK_H_

using namespace std;
class standardDeck : public cardStack {
public:
	standardDeck();
	void extendDeck(int numDecks); //Add n 52 card decks to the end of the current deck
	void populate(); //Generate a standard, sorted 52 card deck
};

#endif /* STD_DECK_H_ */
