/*
 * card.h
 * A Base Interface Class defining all primitive properties and operational arithmetic and comparison behaviors of
 * a standard traditional playing card.
 *
 * Card Properties:
 *	intValue (int) - Number ranges between 1 and 13 with one being the Ace and 11,12,13 being jack, queen, king respectively
 *					 the intValue corresponds to a true value that ranges from 2 thru 10 and has get functions for displaying the
 *					 cards full name and the properties of the card with long and short formatting options.
 *	Type (char) -
 *	Color  (char) -
 */
#include <string>

#ifndef CARD_H_
#define CARD_H_
using namespace std;
class Card{
public:
	Card();
	Card(int intValue, char type, char color);
	Card(string trueValue, char type, char color);
	void setIntValue(int intValue);
	int getIntValue();
	/*
	 * getTrueValue()
	 * bool returnAsWord: Value of 0 means a king is represented as K wheras a value of 1 means a king it respresented as King,
	*					  color names are also given their 'long' value.  Value of one means the true values
	are given single character representations*/
	string getTrueValue(bool returnAsWord);
	void setType(char type);
	char getType();
	string getTypeName();
	void setColor(char color);
	char getColor();
	string getColorName();
	/* getCardName()
	 * gives the name of the card object e.x. Red Two of Diamonds
	 */
	string getFullName(bool excludeColor = 1); //set to one then it wont return the cards color, set to zero then it includes the card color
	string intValueToTrueValue(int intValue);
	int trueValueToIntValue(string trueValueShort); //trueValueShort: accepts "2" thru "10", "A", "J", "Q", "K"

private:
	int intValue; //REDEFINE THIS CLASS TO PROCESS THE CARD VALUE AS AN INT RANGING FROM 1 to 13 WHERE A is 1, J is 11 Q is 12 and K is 13
	char type;
	char color;
};

#endif /* CARD_H_ */



