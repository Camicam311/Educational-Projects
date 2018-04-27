/*
 * Metabolics.c
 *  Created on: Feb 4, 2013
 *  Author: Joshua Wheeler
 */

#include <iostream>
using namespace std;

int main()
{
	//Formatting Magic
	cout.setf(ios::fixed);
	cout.setf(ios::showpoint);
	cout.precision(2);

	//Define Constants
	const int SLEEPING = 1;
	const int WALKING = 2; //Assuming walking speed is 2mph
	const int BASKETBALL = 8;
	char activity_type;
	int met_value;
	float weight;
	float duration;
	float calories_burned_per_minute;
	float total_calories_burned;

	//Select Activity
	cout << "Please Select from the following activities:\n"
		 << "Sleeping (S)\n"
		 << "Walking (W)\n"
		 << "Basketball (B)\n"
		 << "---------------------------------------------\n"
		 << "Enter Selection: ";
	cin >> activity_type;

	//Determine MET value from selected activity
	switch(activity_type){
		case 'S':
			met_value = SLEEPING;
		break;
		case 'W':
			met_value = WALKING;
		break;
		case 'B':
			met_value = BASKETBALL;
			break;
		default:
			met_value = 0;
		break;
	}

	//Enter Weight
	cout << "Enter your weight in pounds: ";
	cin >> weight;
	weight = weight * (1/2.2); //Pounds to Kg conversion

	//Enter Duration
	cout << "Enter number of minutes spent on selected activity: \n";
	cin >> duration;

	calories_burned_per_minute = 0.0175 * met_value * weight;

	total_calories_burned = calories_burned_per_minute * duration;

	cout << "You have burned a total of " << total_calories_burned << " calories!" << endl;

	return total_calories_burned;
}




