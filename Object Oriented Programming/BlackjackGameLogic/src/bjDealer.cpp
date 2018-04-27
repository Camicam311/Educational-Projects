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

}

bjDealer::~bjDealer(){

}

//Uses the most common casino variation where the dealer stands and all 17's, even soft ones.
void bjDealer::doTurn() {
	cout << "The House's current hand: " << endl;
	this->showStatus();

}
