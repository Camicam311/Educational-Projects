//============================================================================
// Name        : VendingMachine.cpp
// Author      : Joshua Wheeler
// Version     :
// Copyright   : 2013
// Description : Hello World in C++, Ansi-style
//============================================================================

#include <iostream>
#include <cstdlib>
#include <vector>
#include <string>
using namespace std;

/*
 * Vending Machine Class
 */
class VendingMachine {

public:
	VendingMachine();
	void runMachine();
	void inputUserMoney();
	void inputSelection();
	void runUserMode();
	void runOwnerMode();
	void dispChipSelection();
	void releaseProduct();

private:
	vector<int> inventory;
	vector<float> price;
	vector<string> product; //Inventory price and product all hold the ith products information
	double user_money;
	double machine_money;
	int selection; //the element in the container to get
};

int main() {
	VendingMachine chipMachine;
	chipMachine.runMachine();
	return 0;
}

VendingMachine::VendingMachine() {
	machine_money = 0.00; //instantiate machines net worth
	selection = '\0';
	user_money = 0.00;

	//Load all the products
	product.push_back("Doritos");  //Doritos at 0
	inventory.push_back(3);
	price.push_back(0.75);

	product.push_back("Cheetos");  //Cheetos at 1
	inventory.push_back(3);
	price.push_back(0.50);

	product.push_back("Fritos");  //Fritos at 2
	inventory.push_back(3);
	price.push_back(0.25);
}

void VendingMachine::runMachine() {
	cout << endl;
	cout << "Welcome To The Chip Vending Machine." << endl;
	cout << "----------------------------------------------------------------------" << endl;
	cout << "Press 0 if you are a customer" << endl;
	cout << "Press 1 if you are the owner" << endl;
	cout << "Press 2 to quit" << endl;
	cout << "----------------------------------------------------------------------" << endl;
	inputSelection();

	switch(selection) {
	case 0:
		runUserMode();
		break;
	case 1:
		runOwnerMode();
		break;
	case 2:
	default:
		return; //don't do anything, quit running.
		break;
	}
}


void VendingMachine::runUserMode() {
	cout << "Buy Some Chips!!" << endl;
	cout << "----------------------------------------------------------------------" << endl;
	inputUserMoney(); //Enter money into the machine

	cout << "What kind do you want?: " << "(you have: $" << this->user_money << ")" << endl;
	cout << "----------------------------------------------------------------------" << endl;
	dispChipSelection();
	cout << "----------------------------------------------------------------------" << endl;
	inputSelection();

	//User has entered selection
	if(selection == 9) {
		//User chose coin release, release coins and restart machine
		this->machine_money = this->machine_money - this->user_money;
		cout << "Coin release pressed, here is your $" << this->user_money << " back! " << endl;
		cout << endl;
		this->user_money = 0;
		runMachine();
	} else {
		//User chose a product, handle 4 possible cases
		 if(inventory.at(selection) <= 0) {
					//There is not enough inventory, release coins.
					cout << product.at(selection) << " needs to be restocked!" << endl;
					cout << "You have been refunded a total of " << this->user_money << endl;
					this->machine_money = this->machine_money - this->user_money;
					this->user_money = 0;
		} else if(this->user_money == price.at(selection)) {
			//User has exact change, release product
			cout << "You have purchased " << product.at(selection) << " for a total of $" << price.at(selection) << endl;
			inventory.at(selection) = inventory.at(selection) - 1; //decrease amt of product in inventory
			this->user_money = 0; //reset user money, do not modify machine money
		} else if(this->user_money < price.at(selection)) {
			//User does not have enough money, release coins
			cout << "You do not have enough funds to buy " << product.at(selection) << endl;
			cout << "You have been refunded a total of $" << this->user_money << endl;
			this->machine_money = this->machine_money - this->user_money; //update totals
			this->user_money = 0;
		} else if(this->user_money > price.at(selection)) {
			//User has more than enough money, release product and give back change
			cout << "You have purchased " << product.at(selection) << " for a total of $" << price.at(selection) << endl;
			inventory.at(selection) = inventory.at(selection) - 1; //decrease amt of product in inventory

			cout << "You had more then enough money, you have been refunded $" << this->user_money - price.at(selection) << endl;
			this->user_money = this->user_money - price.at(selection);
			this->machine_money = this->machine_money - this->user_money;
			this->user_money = 0;

		}
	}

	runMachine(); //revert system back to starting state
}

void VendingMachine::inputUserMoney() {
	cout << "Enter Amount: $";
	cin >> this->user_money;
	cout << endl;

	this->machine_money += this->user_money; //add user money to total machine money
}

void VendingMachine::dispChipSelection() {
	//Show the stock, product name, select option and price of each product
	for(unsigned int i = 0; i< product.size(); i++) {
		cout << inventory[i] << "x" << " " << product[i] << " (press: " << i << ") $" << price[i] <<  endl;
	}
	cout << "Press '9' for coin release" << endl;
}

void VendingMachine::runOwnerMode() {
	cout << "Hello machine owner, what would you like to do?" << endl;
	cout << "(machine has a total of $" << this->machine_money << ")" << endl;
	cout << "----------------------------------------------------------------------" << endl;
	cout << "Remove change (0)" << endl;
	cout << "Add change (1)" << endl;
	cout << "Add Inventory (2)" << endl;
	cout << "Return to main menu (3)" << endl;
	cout << "----------------------------------------------------------------------" << endl;

	inputSelection(); //Get choice from user

	float money;
	switch(selection) {
	case 0:
		//Remove change
		cout << "Enter amount of money you want to remove from machine: $";
		cin >> money;
		cout << endl;
		this->machine_money = this->machine_money - money;
		this->user_money = 0;

		runOwnerMode();
		break;
	case 1:
		//Add Change
		cout << "Enter amount of money you want to add to machine: $";
		cin >> money;
		cout << endl;
		this->machine_money = this->machine_money + money;
		this->user_money = 0;

		runOwnerMode();
		break;
	case 2:
		//Add Inventory
		int add_amt;
		cout << "Enter the product number you want to add inventory to, followed by the amount to add:" << endl;
		cout << "----------------------------------------------------------------------" << endl;
		//Show the stock, product name, select option and price of each product
		for(unsigned int i = 0; i< product.size(); i++) {
			cout << inventory[i] << "x" << " " << product[i] << " (press: " << i << ") " <<  endl;
		}
		cout << "----------------------------------------------------------------------" << endl;
		cout << "Enter selection followed by amount: ";
		cin >> selection >> add_amt;
		cout << endl;

		inventory.at(selection) += add_amt; //add the specified amount to the products inventory

		cout << product.at(selection) << " has been updated to stock " << inventory.at(selection) << endl;

		runOwnerMode();
		break;
	case 3:
	default:
		runMachine();
		break;
	}
}

void VendingMachine::inputSelection() {
	cout << "Enter Selection: ";
	cin >> this->selection;
	cout << endl;
}
