package spellchecker;

import java.io.*;
import java.util.*;

import org.apache.commons.io.FileUtils;

public class BasicDictionary implements Dictionary {
	BinaryTree dictTree = new BinaryTree();
	FileWriter input;
	BufferedWriter output;
	
	BinaryTreeNode sortedArrayToBST(String[] arr, int start, int end) {  
	
		//same as (start+end)/2, avoids overflow.  
		int mid = start + (end - start) / 2; 
		if (start > end) return null; 
		this.add(arr[mid]); 
		BinaryTreeNode node = new BinaryTreeNode(arr[mid]);
		node.left = sortedArrayToBST(arr, start, mid - 1); 
		node.right = sortedArrayToBST(arr, mid + 1, end); 
		return node;
	}
	
	BinaryTreeNode sortedArrayToBST(String[] arr, int n) {  
		return sortedArrayToBST(arr, 0, n-1);
	}
	
	
	
	@Override
	public void importFile(String filename) throws Exception {
		this.dictTree = new BinaryTree();
		File dictFile = new File(filename);
		String dictString = FileUtils.readFileToString(dictFile).toLowerCase();
		String[] dictArray =  dictString.split("\r\n");
		Arrays.sort(dictArray);
		sortedArrayToBST(dictArray, dictArray.length);
	}

	@Override
	public void load(String filename) throws Exception {
		this.dictTree = new BinaryTree();
		File dictFile = new File(filename);
		String dictString = FileUtils.readFileToString(dictFile);
		String[] dictArray =  dictString.split("\r\n");
		for(String word : dictArray) {
			this.add(word);
		}
	}

	@Override
	public void save(String filename) throws Exception {
		input = new FileWriter(filename);
		output = new BufferedWriter(input);
		savePreOrder(this.getRoot());
		output.close();
	}
	
	private void savePreOrder(BinaryTreeNode curNode)  {
		if(curNode == null) return;
		try {
			output.write(curNode.value + "\r\n");
		} catch (IOException e) {
			e.printStackTrace();
		}
		savePreOrder(curNode.left);
		savePreOrder(curNode.right);
	}

	@Override
	public String[] find(String word) {
		BinaryTreeNode curNode = this.getRoot();
		int compare_value;
		String closest_above = "";
		String closest_below = "";
		while(curNode != null) {
			String tempNode = curNode.value;
			compare_value = word.toLowerCase().compareTo(curNode.value.toLowerCase());
			if(compare_value < 0){
				curNode = curNode.left;
				int closest_value_compare = closest_below.compareTo(tempNode);
				if(closest_below == "") closest_below = tempNode;
				if(closest_value_compare > 0) closest_below = tempNode;
			} 
			else if(compare_value == 0) {
				return null;
			} else {
				curNode = curNode.right;
				int closest_value_compare = closest_above.compareTo(tempNode);
				if(closest_value_compare < 0) closest_above = tempNode;
			}
		}
		String[] closewords = new String[2];
		closewords[0] = closest_above;
		closewords[1] = closest_below;
		return closewords;
	}

	@Override
	public void add(String word) {
		word = word.trim();
		if(this.find(word) != null) {
			dictTree.insert(word);
		} 
	}

	@Override
	public BinaryTreeNode getRoot() {
		return dictTree.getRoot();
	}

	@Override
	public int getCount() {
		// TODO Auto-generated method stub
		return 0;
	}

}
