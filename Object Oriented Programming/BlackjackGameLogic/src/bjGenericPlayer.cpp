#include "bjGenericPlayer.h"
#include <iostream>

/*
 * CONSTRUCTORS AND DESTRUCTOR
 */

//Blank Unconfigured player
bjGenericPlayer::bjGenericPlayer(standardDeck& deckToUse):referenceDeck(deckToUse) {
	double bet = 0.00;

	bjHand hand;
	hands.push_back(hand);
	currentBets.push_back(bet);
	bankRoll = 0.00;
	playerName = "No Name";
	isTurn = false;
	handComplete = false;
}

//Player with hand passed in
bjGenericPlayer::bjGenericPlayer(standardDeck& deckToUse, bjHand hand):referenceDeck(deckToUse) {
	double bet = 0.00;
	setHand(hand);
	currentBets.push_back(bet);
	bankRoll = 0.00;
	playerName = "No Name";
	isTurn = false;
	handComplete = false;
}

//MAKE CONSTRUCTOR WITH RECOMMENDED DEFAULT CONFIGURATION

bjGenericPlayer::~bjGenericPlayer() {
}

//GETTERS AND SETTERS
void bjGenericPlayer::setName(string playerName) {
	if(playerName.size() <= 10) {
		 this->playerName = playerName;
	} else {
		cout << "Player name may not be greater than 10 characters.";
	}
}

string bjGenericPlayer::getName() {
	return playerName;
}

void bjGenericPlayer::setDeck(standardDeck& referenceDeck) {
	this->referenceDeck = referenceDeck;
}

standardDeck& bjGenericPlayer::getDeck() {
	return referenceDeck;
}

bjHand bjGenericPlayer::getHand(int hand_num){
	return hands.at(hand_num);
}

void bjGenericPlayer::setHand(bjHand inputHand, int handNdx) {
	bjHand& hand = hands[handNdx];
	clearHand(handNdx);
	for(int i=0; i<inputHand.getSize(); i++){
		hand.insertCard(i,inputHand.getCard(i));
	}
}

void bjGenericPlayer::clearHand(int handNdx) {
	bjHand hand = hands[handNdx];
	for(int i=0; i<hand.getSize(); i++){
		hand.removeCard(i);
	}
}

void bjGenericPlayer::setNewHand(int handNdx){
	clearHand(handNdx);
	hands[handNdx].drawCards(2, referenceDeck);
}

void bjGenericPlayer::destroyHands() {
	hands.clear();
	//initialize a new container
	bjHand hand;
	hands.push_back(hand);
}

void bjGenericPlayer::placeBet(double bet, int betNdx) {
	 bankRoll = bankRoll - bet;
	 currentBets.at(betNdx) = bet;
}

double bjGenericPlayer::getBet(int betNdx) {
	return currentBets[betNdx];
}


void bjGenericPlayer::setBankRoll(double money) {
	 bankRoll += money;
}

double bjGenericPlayer::getBankRoll() {
	return  bankRoll;
}


/*
 * POSSIBLE MOVES
 * ----------------------------------------------------------
 */
/*
 * surrender()
 * This function uses the later surrender variation of the game.
 * May only be done AFTER dealer has checked for blackjack.
 * Decision must be made PRIOR to any action on the hand. This means total cards in hand must be two
 * This Forces the player to surrender the match, but only have to pay out 50% of the total original bet. Set the currentBet to half.
 */
void bjGenericPlayer::surrender(int handNdx) {
	if(hands[handNdx].getSize() == 2) {
		 currentBets[handNdx] =  currentBets[handNdx] * 0.5;
		 bankRoll = bankRoll + currentBets[handNdx];
		 handComplete = true;
	} else {
		cout << "This move is not allowed right now" << endl;
	}
}

/*
 * hit()
 * Draw another card from the game deck and put in hand
 */
void bjGenericPlayer::hit(int handNdx) {
	bjHand& hand = hands[handNdx];
	int numLow = hand.getSize();
	if(hand.getHandValue(numLow) < 21) {
		//force all ace's in hand to a value of one when checking hand value to determine if this hit is legal
		hand.drawCard(referenceDeck);
	} else if(hand.getHandValue(numLow) > 21) {
		cout << "Your hand is busted, you cannot hit." << endl;
		handComplete = true;
	} else {
		cout << "Hit not legal. You already have blackjack" << endl;
		handComplete = true;
	}
}

/*
 * stand()
 * End current turn with cards in hand
 */
void bjGenericPlayer::stand(int handNdx) {
	handComplete = true;
}

/*
 * doubleDown()
 * This move may only be done when the hand size is 2, before any card has been drawn
 * This Move Will Double The Current Bet and receive ONE additional card to the hand. The Turn is Ended After This Move
 */
void bjGenericPlayer::doubleDown(int handNdx) {
	if(hands[handNdx].getSize() == 2) {
		bankRoll = bankRoll - currentBets[handNdx];
		currentBets[handNdx] =  currentBets[handNdx]*2;
		hands[handNdx].drawCard(referenceDeck);
		handComplete = true;
	} else {
		cout << "Cannot double down at this time" << endl;
	}
}

/*
 * split()
 * This option is only give if the initial pair of cards match in their value
 * Choosing this splits the players hands into two separate hands and play them independently. The player is automatically dealt one more card for each hand This means that
 * They may hit as many times as they want for each hand.
 * When splitting the size of the bet doubles and each hand plays as if they each had their own version of the original bet.
 * The player may have the option to double down for either hand. A player may do unlimited splits.
 */
void bjGenericPlayer::split(bjHand &hand) {

	if((hand.getSize() == 2) && (hand.getCard(0).getIntValue() == hand.getCard(1).getIntValue()) && (hands.size() <= 5)) {
		//Add second hand
		bjHand tempHand;
		tempHand.insertCard(0,hand.getCard(1));
		tempHand.drawCard(referenceDeck);
		hands.push_back(tempHand);

		//Update the first hand
		hand.removeCard(1);
		hand.drawCard(referenceDeck);

		//add another equivalent bet to the original to the second hands handNdx
		currentBets.push_back(currentBets.at(0));
	} else {
		cout << "You may not split at this time." << endl;
	}
}

/*
 * startTurn()
 * Set isTurn to true
 */
void bjGenericPlayer::performTurn() {
	isTurn = true;
	doTurn();
}

void bjGenericPlayer::endTurn() {
	isTurn = false;
}

