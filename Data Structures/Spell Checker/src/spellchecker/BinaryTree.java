package spellchecker;

public class BinaryTree {
	private BinaryTreeNode root;
	
	public void insert(String newText) {
		root = insertNode(root, newText);
	}
	
	public BinaryTreeNode insertNode(BinaryTreeNode curNode, String newText){
		if(curNode == null) {
			BinaryTreeNode newNode = new BinaryTreeNode(newText);
			return newNode;
		} else {
			if(newText.compareTo(curNode.value) < 0){
				//new string less than current node, go to left subtree
				curNode.left = insertNode(curNode.left, newText);
				return curNode;
			} else {
				//new string is greater than current node, insert into right subtree
				curNode.right = insertNode(curNode.right, newText);
				return curNode;
			}
		}
	}

	public BinaryTreeNode getRoot() {
		return root;
	}
}