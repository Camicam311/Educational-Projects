/*
 * BjPlayerHandler.h
 * Base Class Defines all player properties and behaviors/moves for blackjack game
 */
#include <string>
#include <list>
#include "standardDeck.h"
#include "bjHand.h"

#ifndef BJPLAYERHANDLER_H_
#define BJPLAYERHANDLER_H_
using namespace std;
class bjGenericPlayer {
public:
	bjGenericPlayer(string player_name, standardDeck& deckToUse);
	bjGenericPlayer(standardDeck& deckToUse);
	bjGenericPlayer(standardDeck& deckToUse, bjHand hand);
	virtual ~bjGenericPlayer();

	//GETTERS AND SETTERS
	void setName(string name);
	string getName();

	bjHand getHand(int hand_num = 0);
	void setHand(bjHand hand, int handNdx = 0);
	void clearHand(int handNdx = 0);
	void setNewHand(int handNdx = 0);
	void destroyHands();


	void placeBet(double bet, int betNdx = 0);
	double getBet(int betNdx = 0);

	void setBankRoll(double money);
	double getBankRoll();

	standardDeck& getDeck();
	void setDeck(standardDeck& deckToUse);

	//VIRTUAL PLAYER AI
	virtual void doTurn() = 0; //Determine what to do during turn and do it. seems likely this will be recursive

	//POSSIBLE MOVES
	void surrender(int playNdx = 0);
	void hit(int handNdx = 0);
	void stand(int handNdx = 0);
	void doubleDown(int handNdx = 0);
	void split(bjHand& hand);
	void performTurn();
	void endTurn();
	bool isTurn;

	//Overload assignment operator
	bjGenericPlayer& operator=( const bjGenericPlayer& rhs );

protected:

	bool handComplete;
	standardDeck& referenceDeck; //The deck being used by the player
	vector<bjHand> hands; //list can hold multiple hands, useful for splits
private:

	string playerName;
	vector<double> currentBets; //list can hold multiple Bets, useful for splits

	double bankRoll;
};
#endif /* BJPLAYERHANDLER_H_ */
