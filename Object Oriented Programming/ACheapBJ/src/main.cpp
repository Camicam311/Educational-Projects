#include "bjGame.h"

using namespace std;

void makeDeckOfAces(standardDeck&);

int main() {
	standardDeck gameDeck;
	//makeDeckOfAces(gameDeck);
	gameDeck.populate();
	gameDeck.shuffle();
	bjGame myGame(gameDeck);
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

