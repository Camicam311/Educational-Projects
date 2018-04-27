//============================================================================
// Name        : VendingMachine.cpp
// Author      : Joshua Wheeler
// Version     :
// Copyright   : 2013
// Description : Hello World in C++, Ansi-style
//============================================================================

#include <iostream>
#include <map>
using namespace std;

/*
 * Vending Machine Class
 */
class VendingMachine {
public:
	VendingMachine();
	void runMachine();
	void inputSelection();
	void setSelection();
private:
	map<char, int> inventory;
	char cur_selection;
};

int main() {
	cout << "Vending Machine Project" << endl; // prints Vending Machine Project
	return 0;
}
