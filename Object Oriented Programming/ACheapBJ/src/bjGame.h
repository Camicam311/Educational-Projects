/*
 * bjGame.h
 *
 *  Created on: May 3, 2013
 *      Author: Joshs
 */
#include <iostream>
#include <deque>
#include <string>
#include <time.h>
#include <iostream>
#include "standardDeck.h"
#include "bjPlayer.h"
#include "bjDealer.h"
#include "bjHand.h"

#ifndef BJGAME_H_
#define BJGAME_H_

class bjGame {
public:
	bjGame(standardDeck& deckToUse);

private:
	void doGame();
	void setPlayers();
	void showTable();
	void addPlayer(string playerName);
	void placeBets();
	void performPlayerTurns();
	void performPayout();
	int curPlayerPtr;
	standardDeck gameDeck;
	void doRounds();
	int default_bank_roll;
	deque<bjPlayer> players;
	bjDealer dealer;
};

#endif /* BJGAME_H_ */
