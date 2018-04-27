/*
 * bjPlayer.h
 *
 *  Created on: Apr 27, 2013
 *      Author: Joshs
 */

#include "bjGenericPlayer.h"
#ifndef BJPLAYER_H_
#define BJPLAYER_H_

using namespace std;
class bjPlayer: public bjGenericPlayer {
public:
	bjPlayer(standardDeck& deckToUse);
	~bjPlayer();
	void getMoveNumber();
	void outputFullTurnDisplay();
	void setMove(int move);
	//get players status in one line
	void showStatus();
private:
	void doTurn();
	int current_move;
	void outputTurnHeader();
	void outputHand();
	void outputAllHands();
	void outputTurnOptions(bjHand Hand);
	void performMoves(int handNdx = 0);
	void doMove(int handNdx = 0);
	void inputMove();

};
#endif /* BJPLAYER_H_ */
