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
	bjDealer(standardDeck& referenceDeck);
	~bjDealer();
	void doTurn();
};
#endif /* BJHOUSE_H_ */
