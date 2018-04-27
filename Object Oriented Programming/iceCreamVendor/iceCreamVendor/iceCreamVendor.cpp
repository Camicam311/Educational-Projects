/*
 * iceCreamVendor.cpp
 *
 *  Created on: Feb 11, 2013
 *      Author: Joshua Wheeler
 */
#include <iostream>
#include <vector>
using namespace std;

void displayMenu(float, float, float);
bool checkRange(unsigned int, unsigned int, unsigned int);
float calcSubTotal(int, float, float, float);
void drawCone(int, char[]);

int main() {
	//Formatting Magic
	cout.setf(ios::fixed);
	cout.setf(ios::showpoint);
	cout.precision(2);

	//Initialize constants
	const unsigned int MAX_CONES = 10;
	const unsigned int MAX_SCOOPS = 5;
	const float PRICE_SCOOP_ONE = 2.00;
	const float PRICE_SCOOP_TWO = 3.00;
	const float PRICE_EXTRA_SCOOPS = 0.75;

	//Initialize Local Variables
	int num_cones = 0;
	int num_scoops = 0;
	float total_price = 0.00;

	//Display Vendor Menu
	displayMenu(PRICE_SCOOP_ONE, PRICE_SCOOP_TWO, PRICE_EXTRA_SCOOPS);

	//Enter number of cones
	cout
			<< "Please input the number of cones that you wish to purchase (10 max): ";
	cin >> num_cones;

	//Validate user input: Number of cones
	bool valid_input = false;
	while (valid_input == false) {
		if (!checkRange(1, MAX_CONES, num_cones)) {
			cin >> num_cones;
		} else {
			valid_input = true;
		}
	}

	//Iterate through each cone
	for (int cone_index = 0; cone_index < num_cones; cone_index++) {
		//Enter number of scoops
		cout << "How many scoops for cone " << (cone_index + 1)
				<< "? (limit 5 scoops per cone): ";
		cin >> num_scoops;

		//Validate user input: Number of scoops
		bool valid_input = false;
		while (valid_input == false) {
			if (!checkRange(1, MAX_SCOOPS, num_scoops)) {
				cin >> num_scoops;
			} else {
				valid_input = true;
			}
		}

		//Update the total price
		total_price = total_price
				+ calcSubTotal(num_scoops, PRICE_SCOOP_ONE, PRICE_SCOOP_TWO,
						PRICE_EXTRA_SCOOPS);

		//Specify the flavor for each scoop
		char flavor[num_scoops];
		for (int scoop_index = 0; scoop_index < num_scoops; scoop_index++) {
			cout << "Specify the flavor for scoop " << (scoop_index + 1)
					<< ": ";
			cin >> flavor[scoop_index];
		}

		//Display an ASCII Representation of the cone
		drawCone(num_scoops, flavor);
	}
	cout << "Total charge: $" << total_price;
	return 0;
}

//Display the main menu
void displayMenu(float price_scoop_one, float price_scoop_two,
		float price_extra_scoops) {
	//Ice Cream Menu
	cout << "World's Finest Ice Cream\n" << "1 scoop --> $" << price_scoop_one
			<< "\n" << "2 scoops --> $" << price_scoop_two << "\n"
			<< "Each scoop after 2 --> $" << price_extra_scoops << "\n"
			<< "Ice Cream Flavors: Only one input character for each flavor.\n"
			<< endl;
}

//Set the amount of cones to be made
bool checkRange(unsigned int min, unsigned int max, unsigned int num) {
	if ((num < min) || (num > max)) {
		cout << "Out of Range: Please enter an amount greater than " << min
				<< " and less then " << max << endl;
		return false;
	}
	return true;
}

//Calculate the sub total of a cone
float calcSubTotal(int num_scoops, float price_scoop_one, float price_scoop_two,
		float price_extra_scoops) {
	float sub_total;
	if (num_scoops == 1) {
		sub_total = price_scoop_one;
	} else if (num_scoops == 2) {
		sub_total = price_scoop_two;
	} else {
		int extra_scoops = num_scoops - 2;
		sub_total = price_scoop_two + (extra_scoops * price_extra_scoops);
	}
	return sub_total;
}

//Draw the cone
void drawCone(int num_scoops, char flavor[]) {
	cout << "\n Here is your cone! Enjoy!!\n";
	for (int scoop_index = 0; scoop_index < num_scoops; scoop_index++) {
		cout << "(" << flavor[scoop_index] << ")\n";
	}
	cout << "\\ /\n";
	cout << " |\n " << endl;
}
