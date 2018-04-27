#ifndef BSTNODE_HPP
#define BSTNODE_HPP
#include <iostream>
#include <iomanip>


using namespace std;

/** This class template defines a node type for the BST container.
 *  Note that all members are public. So, the BST implementation should
 *  take care not to expose any BSTNode objects.
 */
template<typename Data>
class BSTNode {

public:

  /** Member variables. */
  BSTNode<Data>* parent;
  BSTNode<Data>* left;
  BSTNode<Data>* right;
  const Data data;  // the const Data in this node
  int info;  // variable used in advanced algorithms 

  /** Constructor.  Initialize a BSTNode with the given Data item,
   *  no parent, and no children.
   */

  BSTNode(const Data & d): data(d) {
    left = right = parent = nullptr;
  }


 /** Return the inorder successor of this BSTNode in a BST,
   *  or nullptr if none.
   *  PRECONDITION: this BSTNode is a node in a BST.
   *  POSTCONDITION:  the BST is unchanged.
   *  RETURNS: the BSTNode that is the inorder successor of this BSTNode,
   *  or nullptr if there is none.
   */
  //	  1) If right subtree of node is not NULL, then succ lies in right subtree. Do following.
  //	  Go to right subtree and return the node with minimum key value in right subtree.
  //	  2) If right sbtree of node is NULL, then succ is one of the ancestors. Do following.
  //	  Travel up using the parent pointer until you see a node which is left child of it’s parent. The parent of such a node is the succ.
  BSTNode<Data>* successor() {
	  BSTNode<Data>* curr = this;




	  //cout << "The current Node: " << (curr->data) << "The Parent: " << (curr->parent->parent->right->right->data) << " The left node: " << curr->left << " The Right Node: " << curr->right << endl;
	  if(curr->right != nullptr)
          {
		  //cout << "MO: in the first if stament meaning succssor is in the right's node left most" << endl;
		  return minValue(curr->right);
	  }

	  while(curr->parent != nullptr)
	  {
		//cout << "MO: in the while loop right before the if second statment" << endl;
	  	if(curr->parent->data > data)
                {
		  //  cout << "MO: in the if statment meaning the parent is the successor" << endl;
                    return curr->parent;
		}
	        else
    		{
		   //cout << "MO: traversing parents" << endl;
		   curr = curr->parent;
		}
	  }
	  //cout << "MO: returning nullptr" << endl;

	  return curr;
  }

  ///* Given a non-empty binary search tree, return the minimum data
  //    value found in that tree. Note that the entire tree does not need
  //    to be searched. */
  BSTNode<Data>* minValue(BSTNode<Data>* curr){
	  if(curr->left != nullptr)
          {
		//cout << "MO: recussing" << endl;
		return curr->left;
          }
	  //cout << "MO: returning the right's left most node" << endl;
	  return curr;
  }

}; 

/** Overload operator<< to insert a BSTNode's fields in an ostream. */
template <typename Data>
std::ostream & operator<<(std::ostream& stm, const BSTNode<Data> & n) {
  stm << '[';
  stm << std::setw(10) << &n;                 // address of the BSTNode
  stm << "; p:" << std::setw(10) << n.parent; // address of its parent
  stm << "; l:" << std::setw(10) << n.left;   // address of its left child
  stm << "; r:" << std::setw(10) << n.right;  // address of its right child
  stm << "; i:" << std::setw(10) << n.info;   // its info field
  stm << "; d:" << n.data;                    // its data field
  stm << ']';
  return stm;
}



#endif // BSTNODE_HPP
