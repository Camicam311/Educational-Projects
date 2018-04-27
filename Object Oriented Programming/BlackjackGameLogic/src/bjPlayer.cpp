//GIVE PLAYER OPTION TO SHOW RECOMMENDED MOVE USING ENGINE FOUND HERE: http://www.blackjackinfo.com/bjbse.php. SHOW STRING OF MOVE ON KEY PRESS
#include "bjPlayer.h"
#include "standardDeck.h"
#include <iostream>
#include <iomanip>
#include <map>
#include <sstream>

bjPlayer::bjPlayer(standardDeck& deckToUse) :
		bjGenericPlayer(deckToUse) {
	this->current_move = -1;
}

bjPlayer::~bjPlayer() {

}

void bjPlayer::doTurn() {
	for (unsigned int i = 0; (i < hands.size() && hands.size() <= 5); i++) {
		performMoves(i);
	}
	outputFullTurnDisplay();
	cout << getName() << "'s turn has completed." << endl;
}

void bjPlayer::inputMove() {
	cout << "Enter Move Number: ";
	int move;
	cin >> move;
	setMove(move);
	cout << endl;
}

void bjPlayer::setMove(int move) {
	if (move <= 4 && move >= 0) {
		current_move = move;
	}
}

void bjPlayer::outputFullTurnDisplay() {
	cout
			<< "--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------"
			<< endl;
	outputTurnHeader();
	cout
			<< "--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------"
			<< endl;
	outputTurnOptions(this->getHand());
	if (this->hands.size() > 1) {
		outputAllHands();
	} else {
		outputHand();

	}
	cout
			<< "--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------"
			<< endl;
}

void bjPlayer::outputTurnHeader() {
	cout << this->getName() << "'s Turn" << endl;
}

void bjPlayer::outputAllHands() {

	vector<string> textCells;
	string cellString;
	int cellNdx = 0;
//First: Store the first row of all hand Headers
	for (unsigned int i = 0; i < hands.size(); i++) {
		cellString = ":: Hand ";
		stringstream handNum; //create a stringstream
		handNum << i; //add number to the stream
		cellString += handNum.str();
		cellString += ":                              ::.....";
		textCells.push_back(cellString);
		cellNdx++;
	}

cellString.clear();
//Second: Store N columns of each hands card names
	for (unsigned int handNdx = 0; handNdx < hands.size(); handNdx++) {
		cout << "Hand " << handNdx << "( " << this->getHand(handNdx).getSize() << " ): "<< endl;
		for (int cardNdx = 0; cardNdx < this->getHand(handNdx).getSize(); cardNdx++) {
			cout << this->getHand(handNdx).getCard(cardNdx).getFullName(0) << endl;
			string cardName = ":: " + this->getHand(handNdx).getCard(cardNdx).getFullName(0);
			cellString = string(cardName);
			//cout << "The Length  " << (textCells[0].length() - cellString.length());
			for (unsigned int i = 0; i <= (39 - cardName.length()); i++) {
				cellString = cellString + " ";
			}
			cellString = cellString + ":::::::";
			//colString has been built, insert it to multimap
			textCells.push_back(cellString);
			//cellString.clear();
			cellNdx++;
		}

	}

//Third: Check if hand has blackjack, store status in corresponding col if true

//Fourth: Check if busted, store status in corresponding col if true

//Fifth: Show the total bet for the current hand

//Sixth: Show the Current Bet On This Hand

//Seventh: Show the TOTAL BANK ROLL ONCE

//unsigned int num_rows = (textColumnMap.size() / num_cols) + 1;
//Eighth: BUILD THE VIEW =D

	for (unsigned int i = 0; i < textCells.size(); i++) {
		cout << textCells[i];
		//if(((i + 1)%hands.size()) == 0) {
			//cout << endl;
		//}
	}
	cout << endl;
}

void bjPlayer::outputHand() {
	this->getHand().displayCards(0);
	if (this->getHand().numAces() == false) {
		cout << "Total Value: " << this->getHand().getHandValue() << endl;
	} else {
		cout << "Total Value(s): ";
		int handValue;
		for (int i = 0; i <= this->getHand().numAces(); i++) {
			handValue = this->getHand().getHandValue(i);
			if (handValue < 21 || i == 0) {
				cout << handValue << " ";
			}
		}
		cout << endl;
	}
	int minHandValue = this->getHand().getHandValue(this->getHand().getSize());

	if (this->getHand().hasBlackjack() == true) {
		cout << "Congratulations, you have a BlackJack!";
		cout << endl;
	}
	if (minHandValue > 21) {
		cout << "This hand has busted!";
		cout << endl;
	}

	cout << endl;
	cout << "Your Current Bet: $" << this->getBet() << endl;
	cout << "Your Total Funds: $" << this->getBankRoll() << endl;
	cout << endl;
}

//all possible options are surrender, hit, stand, double down, split
void bjPlayer::outputTurnOptions(bjHand Hand) {
	cout << "Move Options (Press corresponding move number):" << endl;
	if (Hand.getSize() == 2) {
		cout << "Surrender (0), Double Down (1), split (2),  ";
	}
	if ((Hand.hasBlackjack() != true)
			&& (Hand.getHandValue(Hand.getSize()) < 21)) {
		cout << "Hit (3), ";
	}
	cout << "  Stand (4) ";

	cout << endl;
	cout << endl;
}

void bjPlayer::performMoves(int handNdx) {
	if ((this->getHand(handNdx).hasBlackjack() == false)
			&& (this->getHand(handNdx).getHandValue(
					this->getHand(handNdx).getSize()) < 22)) {
		//Player had not busted and does have blackjack, continue method
		outputFullTurnDisplay();
		inputMove();
		doMove(handNdx);
		if ((this->handComplete == false)) {
			performMoves(handNdx);
		}
	}
}

void bjPlayer::doMove(int handNdx) {
	switch (this->current_move) {
	case 3:
		//hit
		this->hit(handNdx);
		break;
	case 4:
		//stand
		this->stand(handNdx);
		break;
	case 0:
		//surrender
		this->surrender(handNdx);
		break;
	case 1:
		//double down
		this->doubleDown(handNdx);
		break;
	case 2:
		//split
		bjHand splitHand = this->getHand(handNdx);
		this->split(splitHand);
		break;
	}
}
