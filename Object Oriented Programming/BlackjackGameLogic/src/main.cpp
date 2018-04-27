#include <iostream>
#include <string>
#include "standardDeck.h"
#include "bjPlayer.h"
#include "bjCpuPlayer.h"
#include "bjDealer.h"
#include "bjHand.h"

using namespace std;

void makeDeckOfAces(standardDeck&);

int main() {
	//NEXT: FINISH GETTERS AND SETTERS, OPERATOR OVERLOADING
	cout << "Welcome to blackjack, Currently Testing Functions For Game"
			<< endl; // prints Welcome to blackjack
	standardDeck mainDeck;
	makeDeckOfAces(mainDeck);
	mainDeck.shuffle();
	bjPlayer testPlayer(mainDeck);
	while (mainDeck.getSize() > 0) {
		testPlayer.setName("Joshua");
		testPlayer.setBankRoll(5000);
		testPlayer.placeBet(100.00);
		testPlayer.setNewHand();
		testPlayer.performTurn();
	}
	return 0;
}

void makeDeckOfAces(standardDeck &mainDeck) {
	Card blackAceSpades("A", 'S', 'B'), redAceHearts("A", 'H', 'R'),
			redAceDiamonds("A", 'D', 'R'), blackAceClubs("A", 'C', 'B'),
			redAceSpades("A", 'S', 'R'), blackAceHearts("A", 'H', 'B'),
			blackAceDiamonds("A", 'D', 'B'), redAceClubs("A", 'C', 'R');
	int numNdx;
	for (int i = 0; i < 100; i++) {
		numNdx = i % 8;
		switch (numNdx) {
		case 0:
			mainDeck.insertCard(i, blackAceClubs);
			break;
		case 1:
			mainDeck.insertCard(i, redAceHearts);
			break;
		case 2:
			mainDeck.insertCard(i, blackAceSpades);
			break;
		case 3:
			mainDeck.insertCard(i, redAceDiamonds);
			break;
		case 4:
			mainDeck.insertCard(i, redAceClubs);
			break;
		case 5:
			mainDeck.insertCard(i, blackAceHearts);
			break;
		case 6:
			mainDeck.insertCard(i, redAceSpades);
			break;
		case 7:
			mainDeck.insertCard(i, blackAceDiamonds);
			break;
		}
	}
}
