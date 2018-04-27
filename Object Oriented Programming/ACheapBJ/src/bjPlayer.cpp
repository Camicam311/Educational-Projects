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
	bjHand hand = this->hands[0];
	outputFullTurnDisplay();
	while (this->handComplete == false) {
		int player_choice;
		cout << "Enter Move: ";
		cin >> player_choice;
		cout << endl;
		setMove(player_choice);
		doMove();
		outputFullTurnDisplay();
	}
	this->isTurn = false; //Simplify program to only perform for players with one hand. Splitting still in dev.
	cout << this->getName() + ", your Turn is now over." << endl;
}

void bjPlayer::outputFullTurnDisplay() {
	bjHand hand = this->hands[0];
	if (this->isTurn) {
		cout << this->getName() + ", what do you want to do?" << endl;
	} else {
		cout
				<< this->getName()
						+ ", your turn is over. Below is what you have in play:"
				<< endl;
	}
	cout
			<< "-------------------------------------------------------------------------"
			<< endl;
	cout << "Your Hand: " << endl;
	hand.displayCards();
	cout
			<< "-------------------------------------------------------------------------"
			<< endl;

	if (this->handComplete == false) {
		outputTurnOptions(this->hands[0]);
		cout
				<< "-------------------------------------------------------------------------"
				<< endl;

	} else {
		//Still the players turn, show value of hand
		cout << "Total Value(s): ";
		int handValue;
		if (this->getHand().numAces() > 0) {
			for (int i = 0; i <= this->getHand().numAces(); i++) {
				handValue = this->getHand().getHandValue(i);
				if (handValue < 21 || i == 0) {
					cout << handValue << " ";
				}
			}
		} else {
			handValue = this->getHand().getHandValue();
			cout << handValue;
		}
		cout << endl;
		cout
				<< "-------------------------------------------------------------------------"
				<< endl;
	}

	cout << "Your Current Bet: $";
	cout << getBet() << endl;
	cout << "Your Bank Roll: $";
	cout << getBankRoll() << endl;

	if (this->hands[0].hasBlackjack() == true) {
		cout
				<< "-------------------------------------------------------------------------"
				<< endl;
		cout << "Congratulations, you have a blackjack!" << endl;
		this->handComplete = true;
	}
	if (this->hands[0].getHandValue(this->hands[0].getSize()) > 21) {
		cout
				<< "-------------------------------------------------------------------------"
				<< endl;
		cout << "You have busted!" << endl;
		this->handComplete = true;
	}
	cout
			<< "-------------------------------------------------------------------------"
			<< endl;

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

void bjPlayer::outputTurnHeader() {
	cout << this->getName() << "'s Turn" << endl;
}

//all possible options are surrender, hit, stand, double down, split
void bjPlayer::outputTurnOptions(bjHand Hand) {
	cout << "Your Options (Press corresponding move number):" << endl;
	if (Hand.getSize() == 2) {
		cout << "Surrender (0), Double Down (1) ";
	}
	if ((Hand.hasBlackjack() != true)
			&& (Hand.getHandValue(Hand.getSize()) < 21)) {
		cout << "Hit (3), ";
	}
	cout << "  Stand (4) ";

	cout << endl;
	cout << endl;
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

void bjPlayer::showStatus() {
	cout << this->getName() + ":";
	//Show all cards in current hand
	Card curCard;
	for (int i = 0; i < hands[0].getSize(); i++) {
		curCard = hands[0].getCard(i);
		cout << "  " + curCard.getTrueValue(0) + curCard.getType();
	}
	cout << "  (";
	if (hands[0].numAces() > 0) {
		for (int i = 0; i <= hands[0].numAces(); i++) {
			if (i > 0) {
				cout << " or ";
				cout << hands[0].getHandValue(i);

			} else {
				cout << hands[0].getHandValue(i);
			}
		}
	} else {
		cout << hands[0].getHandValue();
	}
	cout << ")" << endl;
}

int bjPlayer::playerHandValue() {
	bjHand hand = hands[0];
	unsigned int maxValue = 0;
	unsigned int minHandValue = hand.getHandValue(hand.getSize());

	//Find the maximum value the player has under 21 and use that value
	for(int i=0; i<= hand.getSize(); i++) {
		unsigned int curHandValue = hand.getHandValue(i);
		if( curHandValue > maxValue && curHandValue <= 21) {
			maxValue = hand.getHandValue(i);
		}
	}

	if(maxValue == 0) {
		//This means the user busted
		maxValue = minHandValue;
	}
	return maxValue;
}
