//============================================================================
// Name        : MagicSquare.cpp
// Author      : Joshua Wheeler
// Version     : Comsc 140 -> C++
// Date  	   : March 11, 2013
// Description : An n by n vector where integers 1 to n squared appear exactly once,
//				 Sum of ints in every row, column and on both diagonals is the same
//============================================================================

#include <iostream>
#include <vector>
#include <iomanip>
using namespace std;

// Class Definition and Constructor Function Definition
class MagicSquare {
public:
	MagicSquare(int n) {
		this->sq_size = n; //define size of square
		this->num_elements = n * n; //num elements is n squared

		//Initialize position to row 1 in the middle column
		this->cur_x = n / 2;
		this->cur_y = 0;
		this->cur_pos = this->coordinateTransform(this->cur_x, this->cur_y);

		//Populate the magic square
		this->populate(0); //Initializes the vector
		this->populate(this->num_elements); //Populates the vector with magic numbers
	}
	void display();

private:
	int sq_size;
	vector<int> magic_nums;
	int num_elements;
	int cur_x;
	int cur_y;
	int cur_pos;
	void populate(int num_elements);
	void movePosition(int offsetX, int offsetY);
	int coordinateTransform(int x, int y);
	void setCoordinates(int pos);
};

int main() {
	MagicSquare mySquare(5);
	mySquare.display();
	cout << endl;
	MagicSquare mySquare2(15);
	mySquare2.display();
	return 0;
}

//Display vector output in an nxn matrix
void MagicSquare::display() {
	//Generate Column Headers
	cout << "    ";
	for (int i = 0; i < this->sq_size; i++) {
		int cnum = i + 1;
		cout << "| C" << setw(2) << cnum << " ";
	}
	cout << "|" << endl;
	//End Column Headers

	//Output Vector Rows
	int vector_ndx = 0;
	for (int i = 0; i < this->sq_size; i++) {
		int row_num = i + 1;
		cout << "R" << setw(2) << row_num << " |";

		for (int j = vector_ndx; j < (vector_ndx + this->sq_size); j++) {
			cout << setw(4) << this->magic_nums[j] << " |";
		}
		cout << endl;
		vector_ndx = vector_ndx + this->sq_size;
	}
	//End Vector Row Output
}

//Populate the vector with "magic" values
void MagicSquare::populate(int num_elements) {
	if (num_elements == 0) {
		//Initialize the vector
		for (int i = 0; i < this->num_elements; i++) {
			this->magic_nums.push_back(0);
		}
	} else {

		//Fill the magic square with proper values
		for (int i = 0; i < (this->num_elements); i++) {
			int cell_value = i + 1; //the value to enter into the magic square

			if (magic_nums[this->cur_pos] == 0) {
				//Value not yet set, enter in a new value & move to next position
				magic_nums[this->cur_pos] = cell_value;
				this->movePosition(1,1);
			} else {
				//Value already set, backup and move down then enter value
				//and then move to next position
				this->movePosition(-1, -1);
				this->movePosition(0, -1);
				magic_nums[this->cur_pos] = cell_value;
				this->movePosition(1,1);
			}
		}
	}
}

//Find current position and move horizontally offset_x spaces
//and then move vertically offest_y spaces.
//Negative values move left or down on the 2D table
//Positive values move right or up on the 2D table
void MagicSquare::movePosition(int offset_x, int offset_y) {
	//Move the current x and y positions
	this->cur_x = this->cur_x + offset_x;
	this->cur_y = this->cur_y - offset_y;

	if (this->cur_x > (this->sq_size - 1)) {
		//If x pos moves past the end, start at the beginning
		this->cur_x = 0;
	}
	if (this->cur_x < 0) {
		//If x pos moves before the beginning, start at the end
		this->cur_x = (this->sq_size - 1);
	}
	if ((this->cur_y) > (this->sq_size - 1)) {
		//if y pos moves below the last row, start at the top row
		this->cur_y = 0;
	}
	if (this->cur_y < 0) {
		//if y pos moves above the first row, start at bottom row
		this->cur_y = (this->sq_size - 1);
	}

	this->cur_pos = this->coordinateTransform(this->cur_x, this->cur_y);
}

//Converts values from the two dimensional XY plane to
//its corresponding one dimensional vector position
int MagicSquare::coordinateTransform(int x, int y) {
	int r = this->cur_x; //Remainder from pos to col conversion
	int q = this->cur_y; //Quotient from pos to col conversion
	int n = this->sq_size;
	int pos = (q * n) + r;
	return pos;
}

//Converts value from one dimensional vector position
//To where it would be in a two-dimensional table
void MagicSquare::setCoordinates(int pos) {
	//Set Row (Y Value)
	this->cur_y = (pos / this->sq_size);

	//Set Column (X Value)
	this->cur_x = (pos % this->sq_size);
}
