#include <vector>
#include "cardStack.h"

#ifndef BJHAND_H_
#define BJHAND_H_
class bjHand : public cardStack {
public:
	bjHand();
	void drawCard(cardStack& mainDeck);
	void drawCards(int numCards, cardStack& mainDeck); //Draw numCards from the front of the deck, the cardStack type also means this method accepts decks from standardDeck
	bool isVisibleCard(int cardNdx); //determine if card at given position in hand is visible to the player
	int getCardValue(int cardNdx, bool isLow = true); //get the value of a specified card in the deck. isLow being true indicates that the value of an ace is 1, else its 11
	int getHandValue(int numLow = 0); //add up the values of all the cards in deck, numLow indicates the amount of aces which should be low in the hand
	void setVisibility(int cardNdx, bool isVisible); //cardNdx is the card in the hand to hide, isVisible determines whether or not to remove or insert to the hiddenCards vector
	int numAces();
	bool hasBlackjack();
private:
	bool checkHiddenCardExists(int cardNdx);
	vector<int> hiddenCards; //Holds a vector of indexes in hand where a card may be hidden
};
#endif /* BJHAND_H_ */
