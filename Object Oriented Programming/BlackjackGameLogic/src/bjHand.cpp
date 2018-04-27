#include <vector>
#include <iostream>
#include "bjHand.h"

bjHand::bjHand():hiddenCards(){
	//Silence is Golden
}

//Draw One card from the front of the deck, removes a card from deck and places it into hand
void bjHand::drawCard(cardStack& mainDeck) {
	if(mainDeck.getSize() >= 1) {
		Card card =  mainDeck.getCard();
		this->insertCard(this->getSize(),card);
		mainDeck.removeCard(0);
	} else {
		cout << "The deck is empty!" << endl;
	}
}

//Draw numCards from the front of the deck, the cardStack type also means this method accepts decks from standardDeck
void bjHand::drawCards(int numCards, cardStack& mainDeck) {

	if(mainDeck.getSize() >= numCards) {
		for(int i=0; i<numCards; i++) {
			this->drawCard(mainDeck);
		}
	} else {
		cout << "Cannot draw that many cards!" << endl;
	}
}

//get the value of a specified card in the deck, defaults to the ace having a value of 11
int bjHand::getCardValue(int cardNdx, bool isLow) {
	int finalValue;
	Card card = deck.at(cardNdx);
	int cardIntValue = card.getIntValue();

	if(cardIntValue >= 11 && cardIntValue <= 13) {
		finalValue = 10;
	} else if(cardIntValue==1) {
		if(isLow) {
			finalValue = 1;
		} else {
			finalValue = 11;
		}
	} else {
		finalValue = cardIntValue;
	}

	return finalValue;
}

//add up the values of all the cards in deck
int bjHand::getHandValue(int numLow) {
	int total_value = 0;
	for(int i=0; i < getSize(); i++) {
		if(numLow > 0 && getCard(i).getIntValue() == 1) {
			//ace is assigned as 1
			total_value += getCardValue(i, 1);
			numLow--;
		} else {
			//ace is assigned 11
			total_value += getCardValue(i, 0);
		}
	}

	return total_value;
}

//cardNdx is the card in the hand to hide, isVisible determines whether or not to remove or insert to the hiddenCards vector.
//if isVisible is 0, insert cardNdx into hiddenCardsVextor is it is not already in there
//if isVisible is 1, remove cardNdx from hiddenCardsVector if it is in there
void bjHand::setVisibility(int cardNdx, bool isVisible) {
	bool ndxExists = checkHiddenCardExists(cardNdx);
	if(!isVisible && !ndxExists) {
		//cardNdx not in vector, Insert into hidden cards vector to hide card
		hiddenCards.push_back(cardNdx);
	}

	if(isVisible && ndxExists) {
		//cardNdx in vector, remove it the value from the vector to make it visible
		for(int i = 0; i < hiddenCards.size(); i++) {
			if(hiddenCards.at(i) == cardNdx) {
				hiddenCards.erase(hiddenCards.begin() + i);
			}
		}
	}
}

//determine if card at given position in hand is visible to the player
bool bjHand::isVisibleCard(int cardNdx) {
	bool isVisible = true;
	for(int i=0; i<hiddenCards.size(); i++){
		if(hiddenCards.at(i) == cardNdx) {
			isVisible = false;
		}
	}
	return isVisible;
}

bool bjHand::checkHiddenCardExists(int cardNdx) {
	bool ndxExists = false;
	for(unsigned int i=0; i < hiddenCards.size(); i++) {
		if(hiddenCards.at(i) == cardNdx){
			ndxExists = true;
		};
	}
	return ndxExists;
}

/*
 * hasBlackJack()
 * Checks whether or not user has a blackjack
 */
bool bjHand::hasBlackjack() {
	int numLow = deck.size();
	int handValue;
	bool isBj;
	//If the card has an Ace, calculate all permutations of ace values for a blackjack
	if(this->numAces() == true) {
		for(int i=0; i<=numLow; numLow--) {
			handValue = getHandValue(numLow);
			if(handValue == 21) {
				isBj = true;
			}
		}
	} else {
		handValue = getHandValue();
		if(handValue == 21) {
			isBj = true;
		}
	}
	return isBj;
}

/* hasAce
 * checks to see if the current card has an Ace in it, helps for calculating hand value
 * */
int bjHand::numAces() {
	int num_aces = 0;
	string trueCardValue;
	for(int i=0; i<deck.size(); i++) {
		string trueCardValue = deck.at(i).getTrueValue(0);
		if(trueCardValue == "A") {
			num_aces++;
		}
	}

	return num_aces;
}
