#include "BST.hpp"
#include <iostream>
#include <algorithm>
#include <vector>


using namespace std;

/**
 * A simple test driver for the BST class template.
 * P1 CSE 100 2013
 * Author: P. Kube (c) 2013
 */
int main() {

  /* Create an STL vector of some ints */
	//Test Char Tree
	  vector<char> v;
	      v.push_back('p');
	      v.push_back('c');
	      v.push_back('x');
	      v.push_back('d');
	      v.push_back('m');
	      v.push_back('n');
	      v.push_back('q');

//Test Int Tree One
//	 vector<int> v;
//  v.push_back(3);
//  v.push_back(4);
//  v.push_back(1);
//  v.push_back(100);
//  v.push_back(-33);

//Test Int Tree Two
//	 vector<int> v;
//    v.push_back(20);
//    v.push_back(8);
//    v.push_back(22);
//    v.push_back(4);
//    v.push_back(12);
//    v.push_back(10);
//    v.push_back(14);




  /* Create an instance of BST holding int */
//  BST<int> b;

      /* Create an instance of BST holding char */
       BST<char> b;

//  /* Insert a few data items of type int. */
//  vector<int>::iterator vit = v.begin();
//  vector<int>::iterator ven = v.end();

       /* Insert a few data items of type char*/
       vector<char>::iterator vit = v.begin();
       vector<char>::iterator ven = v.end();

  for(; vit != ven; ++vit) {
    // all these inserts are unique, so should return a std::pair
    // with second part true
//    std::pair<BST<int>::iterator,bool> pr = b.insert(*vit); //BST of type int
	      std::pair<BST<char>::iterator,bool> pr = b.insert(*vit); //BST of type char

    cout << "Inserting " << *vit << endl; //Print Insertion Keys ;JW Added

    if(! pr.second ) {
      cout << "Incorrect bool return value when inserting " << *vit << endl;
      return -1;
    }
    if(*(pr.first) != *vit) {
      cout << "Incorrect iterator return value when inserting " << *vit << endl;
      return -1;
    }
  }

  /* Test size. */
  cout << "Size is: " << b.size() << endl;
  if(b.size() != v.size()) {
    cout << "... which is incorrect." << endl;
    return -1;
  }

  /* Test find return value. */
  vit = v.begin();
  for(; vit != ven; ++vit) {
    if(*(b.find(*vit)) != *vit) {
      cout << "Incorrect return value when finding " << *vit << endl;
      return -1;
    } else {
    	//cout << "Node with key " << *vit << " was found" << endl; //Added print condition for finding nodes ;JW
    }

  }

  /* Sort the vector, to compare with inorder iteration on the BST */
  sort(v.begin(),v.end());

  /* Test BST iterator; should iterate inorder */
  cout << "traversal using iterator:" << endl;
  vit = v.begin();
//  BST<int>::iterator en = b.end(); //BST of type int
//  BST<int>::iterator it = b.begin(); //BST of type int
//
  BST<char>::iterator en = b.end();
   BST<char>::iterator it = b.begin();

  for(; vit != ven; ++vit) {
	//cout << "JW: In the for loop" << endl;
	cout << "Current bIt: " << *it << " Current vIt: " << *vit << endl;
    if(! (it != en) ) {
      cout << *it << "," << *vit << ": Early termination of BST iteration." << endl;
      return -1;
    }
   // cout << "MO: right before printing the value of the iterator"<< *it << endl;
    if(*it != *vit) {
      cout << *it << "," << *vit << ": Incorrect inorder iteration of BST." << endl;
      return -1;
    }
    ++it;
  }
  cout << "OK." << endl;

}
