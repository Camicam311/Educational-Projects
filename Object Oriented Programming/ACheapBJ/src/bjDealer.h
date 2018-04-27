/*
 * bjDealer.h
 *
 *  Created on: Apr 27, 2013
 *      Author: Joshs
 */
#include "bjGenericPlayer.h"
#ifndef BJDEALER_H_
#define BJDEALER_H_
using namespace std;
class bjDealer: public bjGenericPlayer {
public:
	bjDealer();
	bjDealer(standardDeck& referenceDeck);
	~bjDealer();
	void doTurn();
	void showStatus();
	void showBlankStatus();
	int dealerHandValue();
	void doMove(bjHand& hand);
};
#endif /* BJHOUSE_H_ */
