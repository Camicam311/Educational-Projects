#ifndef BST_HPP
#define BST_HPP
#include "BSTNode.hpp"
#include "BSTIterator.hpp"
#include <utility> // for std::pair

template<typename Data>
class BST {

protected:

  /** Pointer to the root of this BST, or nullptr if the BST is empty */
  BSTNode<Data>* root;

  /** Number of Data items stored in this BST. */
  unsigned int isize;


public:

  /** iterator is an aliased typename for BSTIterator<Data>. */
  typedef BSTIterator<Data> iterator;


  /** Default constructor.
      Initialize an empty BST.
   */
  BST() : root(nullptr), isize(0){
  }


  /** Default destructor.
   *  It is virtual, to allow appropriate destruction of subclass objects.
   *  Delete every node in this BST.
   */
  virtual ~BST() {
    clear();
  }

  /** Insert a Data item in the BST.
   *  Return a pair, with the pair's first member set to an
   *  iterator pointing to either the newly inserted element
   *  or to the equivalent element already in the set.
   *  The pair's second element is set to true
   *  if a new element was inserted or false if an
   *  equivalent element already existed.
   */
  virtual std::pair<iterator,bool> insert(const Data& item) {

	  BSTNode<Data>* curr = root;

	  if(root == nullptr)
	  {
		  root = new BSTNode<Data>(item);
		  iterator itr (root);
		  isize++;
		  return std::make_pair(itr, true);
	  }

	  while(curr != nullptr)
	  {
		  if(item < curr->data)
		  {
			  if(curr->left == nullptr)
			  {
				  curr->left = new BSTNode<Data>(item);
				  curr->left->parent = curr; //JW added, when creating a new node, we arent setting its parent
				  iterator itr (curr->left);

				  isize++;
				  return std::make_pair( itr, true);
			  }
			  else
				  curr = curr->left;
		  }
		  else if(item > curr->data)
		  {
			  if(curr->right == nullptr)
			  {
				  curr->right = new BSTNode<Data>(item);
				  curr->right->parent = curr; //JW added, when creating a new node, we arent setting its paretn
				  iterator itr (curr->right);

				  isize++;
				  return std::make_pair( itr, true);
			  }
			  else
				  curr = curr->right;
		  }
		  else
		  {

			  iterator itr (curr);
			  return std::make_pair( itr, false);
		  }
	  }


	  iterator itr (curr);
	  return std::make_pair( itr, false);
  }


  /** Find a Data item in the BST.
   *  Return an iterator pointing to the item, or the end
   *  iterator if the item is not in the BST.
   */
  iterator find(const Data& item) const {

	  BSTNode<Data>* curr = root;
	  while(curr != nullptr)
	  {
		  if(item < curr->data)
		  {
			  if(curr->left == nullptr)
				  return end();
			  else
				  curr = curr->left;
		  }
		  else if(item > curr->data)
		  {
			  if(curr->right == nullptr)
				  return end();
			  else
				  curr = curr->right;
		  }
		  else
			  return iterator(curr);
	  }
	  return end();

  }

  
  /** Return the number of items currently in the BST.
   */
  unsigned int size() const {
	  return isize;
  }

  /** Remove all elements from this BST, and destroy them,
   *  leaving this BST with a size of 0.
   */
  void clear() {
	  isize = 0;
	  recursiveC(root);
  }

  /** Return true if the BST is empty, else false.
   */
  bool empty() const {
	  return root == nullptr;
  }

  /** Return an iterator pointing to the first item in the BST.
   */
  iterator begin() const {
	  BSTNode<Data>* curr = root;
	  while(curr->left != nullptr)
		  curr = curr->left;

	  return iterator(curr);
  }

  /** Return an iterator pointing past the last item in the BST.
   */
  iterator end() const {
    return iterator(nullptr);
  }



private:
  /** Recursively clear the BST.
   */
  void recursiveC(BSTNode<Data>* curr) {
	  if(curr != nullptr)
	  {
		  recursiveC(curr->left);
		  recursiveC(curr->right);
		  delete curr;
	  }
  }


  

 };


#endif //BST_HPP
