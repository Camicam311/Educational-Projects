//MAKE THESE DETERMINE MOVES BASED ON THE BLACKJACK BASIC STRATEGY ENGINE FOUND HERE: http://www.blackjackinfo.com/bjbse.php
#include "bjCpuPlayer.h"
#include <iostream>

bjCpuPlayer::bjCpuPlayer(standardDeck& deckToUse):bjGenericPlayer(deckToUse)  {

}

bjCpuPlayer::~bjCpuPlayer(){

}

void bjCpuPlayer::doTurn() {
	cout << "Performing Turn..." << endl;
}
