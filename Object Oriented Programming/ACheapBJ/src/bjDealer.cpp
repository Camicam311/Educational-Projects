/*
 * BjDealer.cpp
 *
 *  Created on: Apr 25, 2013
 *      Author: Joshs
 */

#include "bjGenericPlayer.h"
#include "bjDealer.h"
#include <iostream>

bjDealer::bjDealer(standardDeck& deckToUse):bjGenericPlayer(deckToUse) {
	this->setName("House");
	this->setNewHand();
}

bjDealer::~bjDealer(){

}

void bjDealer::doTurn() {
	cout << "The House is now performing its turn..." << endl;
	bjHand& hand = hands[0];
	doMove(hand);
}

void bjDealer::doMove (bjHand& hand) {
	//Since house does not bet, it will draw cards instead of "hit"
	if(dealerHandValue() < 17) {
		hand.drawCards(1, referenceDeck);
		doMove(hand);
	} else {
		cout << endl;
		cout << "House's turn is complete, here is what the house has:" << endl;
		showStatus();
		cout << endl;
	}
}

void bjDealer::showStatus() {
	cout << this->getName() << ":";
	//Show all cards in current hand
	Card curCard;

	for (int i = 0; i < hands[0].getSize(); i++) {
		curCard = hands[0].getCard(i);
		cout << "  " + curCard.getTrueValue(0) + curCard.getType();
	}

	cout << "  (" << dealerHandValue() << ")" << endl;

}

void bjDealer::showBlankStatus() {
	cout << this->getName() + ":" + "  XX    XX" << endl;
}


int bjDealer::dealerHandValue() {
	bjHand hand = hands[0];
	unsigned int handValue = 0;
	int numAces = hand.numAces();
	if(hand.numAces() > 0) {
		unsigned int maxValue = hand.getHandValue(0); //none of the aces are low
		unsigned int midValue = hand.getHandValue(1); //one of the aces are low
		unsigned int minValue = hand.getHandValue(numAces); //All of the aces are low
		//If the maximum possible value is under 17 or above 21 return the minimum value
		if(maxValue > 21 && minValue <= 17) {
			handValue = midValue;
		} else if(maxValue <= 21) {
			handValue = maxValue;
		} else {
			handValue = minValue;
		}
	} else {
		handValue = hand.getHandValue(1); //one of the aces are low
	}
	return handValue;
}

