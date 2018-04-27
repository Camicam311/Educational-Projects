/*
 * bjGame.cpp
 *
 *  Created on: May 3, 2013
 *      Author: Joshs
 */

#include "bjGame.h"

bjGame::bjGame(standardDeck& deckToUse) :
		dealer(bjDealer(deckToUse)) {
	gameDeck = deckToUse;
	default_bank_roll = 1000;
	curPlayerPtr = 0;

	doGame();
}

void bjGame::doGame() {
	cout << "Welcome to BlackJack!" << endl;
	setPlayers(); //Start the game by getting players set and showing starting table status
	doRounds();
	cout << "Thank you for playing!" << endl;
}

void bjGame::doRounds() {
	bool quit = false;
	while (quit == false) {
		//Have all players place bets into money pot
			placeBets();

		//Do Each Players Turn
		performPlayerTurns();
		//Complete the dealers turn
		dealer.performTurn();
		//Show the table status
		cout << "Everybody's turns are now over. Here is the final table"
				<< endl;
		showTable();
		dealer.showStatus();
		//check for winners/losers and payout all winning bets
		performPayout();
		cout << endl;

		char quitChar;
		cout << "Press q to quit or any key to continue a new round: ";
		cin >> quitChar;

		if(quitChar == 'q') {
			//User has quit, exit game
			quit = true;
		} else {
			//Reset the players hands, bets etc... and start a new round
			vector<bjPlayer> newPlayers;
			for(unsigned int i= 0; i < players.size(); i++) {
				players[i].setNewHand();
				players[i].placeBet(0);
				players[i].isTurn = true;
			}
		}
	}

}

void bjGame::addPlayer(string playerName) {
	bjPlayer player(gameDeck);
	player.setName(playerName);
	player.setBankRoll(default_bank_roll);
	player.setNewHand();
//initialize a vector of 7 players
	players.push_back(player);
}

void bjGame::setPlayers() {
	int num_players;
//Set number of players
	cout << "How many players (1-7)? " << " ";
	cin >> num_players;
	cout << endl;

	if (num_players > 7 || num_players < 1) {
		return; //invalid player input
	} else {
		//Create each player and add to game
		for (int i = 0; i < num_players; i++) {
			cout << "Enter player name: ";
			string playerName;
			cin >> playerName;
			addPlayer(playerName);
		}
		cout << endl;
	}
}

void bjGame::showTable() {
//Show all the players initial statuses & status of house
	for (unsigned int i = 0; i < players.size(); i++) {
		players[i].showStatus();
	}
}

void bjGame::placeBets() {
	double betAmt;
	cout << "Place your bets... ";
	for (unsigned int i = 0; i < players.size(); i++) {
		cout << players[i].getName() << ", enter your bet (your funds: $"
				<< players[i].getBankRoll() << "): " << endl;
		cin >> betAmt;
		if (players[i].getBankRoll() > betAmt && players[i].getBankRoll() > 0) {
			//Player has enough money to player the bet, so place it
			players[i].placeBet(betAmt);
		} else {
			//Player has insufficient funds, ask for another bet or notify empty bank
			if (players[i].getBankRoll() == 0) {
				cout << players[i].getName() << ", You do not have any money!"
						<< endl;
			} else {
				cout << players[i].getName()
						<< ", You do not have enough to place that bet! Please enter a lower amount"
						<< endl;
				cout << "Your bank roll: " << players[i].getBankRoll() << endl;
			}
		}
	}

}

void bjGame::performPlayerTurns() {
	for (unsigned int i = 0; i < players.size(); i++) {
		cout << "Starting turn for " << players[i].getName() << "... " << endl;
		showTable();
		players[i].performTurn();
		players[i].endTurn();
	}
}

/*
 * For each player determine is (s)he won, lost or pushed
 * if win - Pay player back the amount of bet at odds 2:1
 * if lost - House takes the players bet
 * if push - Pay back the players original bet into the bank roll
 * Once all payouts are done, set the players current bet to 0
 */
void bjGame::performPayout() {
	unsigned int dealerHandValue = dealer.dealerHandValue();
	for (unsigned int i = 0; i < players.size(); i++) {
		unsigned int playerHandValue = players[i].playerHandValue();
		if (playerHandValue > 21
				|| ((dealerHandValue > playerHandValue)
						&& (dealerHandValue <= 21))) {
			//Player Loses, Do not pay back and set bet to 0
			cout << "Sorry " << players[i].getName()
					<< ", You have lost your bet of $" << players[i].getBet()
					<< endl;
			cout << players[i].getName() << "'s Bank Roll: $"
					<< players[i].getBankRoll() << endl;
			players[i].placeBet(0);
		} else if (dealerHandValue == playerHandValue
				&& playerHandValue <= 21) {
			//Player Pushes, give player back bet
			int bankRoll = players[i].getBankRoll();
			int currentBet = players[i].getBet();
			bankRoll = bankRoll + currentBet;
			cout << "" << players[i].getName()
					<< ", You have pushed with the dealer " << endl;
			cout << players[i].getName() << "'s Bank Roll: $" << bankRoll
					<< endl;
			players[i].setBankRoll(bankRoll);
		} else {
			//Player Wins, back back twice the amount of bet
			int bankRoll = players[i].getBankRoll();
			int currentBet = players[i].getBet();
			cout << "Congratulations " << players[i].getName()
					<< ", You Profited $" << (currentBet) << endl;
			bankRoll = bankRoll + (2 * currentBet);
			cout << players[i].getName() << "'s Bank Roll: $" << bankRoll
					<< endl;
			players[i].setBankRoll(bankRoll);
		}
	}
}
