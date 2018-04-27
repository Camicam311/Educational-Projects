#include "bjGenericPlayer.h"
#ifndef BJCPUPLAYER_H_
#define BJCPUPLAYER_H_
using namespace std;
class bjCpuPlayer: public bjGenericPlayer {
public:
	bjCpuPlayer(standardDeck& referenceDeck);
	~bjCpuPlayer();
	void doTurn();
};
#endif /* BJCPUPLAYER_H_ */
