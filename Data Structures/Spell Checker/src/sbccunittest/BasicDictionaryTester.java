package sbccunittest;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.fail;

import java.io.*;

import org.apache.commons.io.*;
import org.junit.*;

import spellchecker.*;


public class BasicDictionaryTester {

	Dictionary dictionary;
	public static String newline = System.getProperty("line.separator");


	@Before
	public void setUp() throws Exception {
		dictionary = new BasicDictionary();
	}


	@After
	public void tearDown() throws Exception {
	}


	@Test
	public void testImportFile() throws Exception {
		dictionary.importFile("full_dictionary.txt");

		assertNotNull("Dictionary.getRoot() should not be null.", dictionary.getRoot());

		int depth = getTreeDepth();
		int maxDepth = 100;
		if (depth > maxDepth)
			fail("The tree depth is " + depth + " is greater than the maximum allowed depth of " + maxDepth + ".");

		dictionary.save("full_dictionary.pre");
		String s = FileUtils.readFileToString(new File("full_dictionary.pre"));
		String[] parts = s.split("\n");
		assertEquals(175169, parts.length);
	}


	@Test
	public void testImportFileCompleteTree() throws Exception {
		dictionary.importFile("full_dictionary.txt");

		assertNotNull("Dictionary.getRoot() should not be null.", dictionary.getRoot());

		int depth = getTreeDepth();
		int maxDepth = 20;
		if (depth > maxDepth)
			fail("The tree depth is " + depth + " is greater than the maximum allowed depth of " + maxDepth + ".");

		dictionary.save("full_dictionary.pre");
		String s = FileUtils.readFileToString(new File("full_dictionary.pre"));
		String[] parts = s.split("\n");
		assertEquals(175169, parts.length);
	}

	int treeDepth;


	public int getTreeDepth() {
		treeDepth = 0;
		goDeeper(dictionary.getRoot(), 0);
		return treeDepth;
	}


	private void goDeeper(BinaryTreeNode node, int depth) {
		if (node != null) {
			depth++;
			if (depth > treeDepth)
				treeDepth = depth;

			if (node.left != null)
				goDeeper(node.left, depth);
			if (node.right != null)
				goDeeper(node.right, depth);
		}
	}


	@Test
	public void testLoad() throws Exception {
		dictionary.load("dict_14.pre");

		assertNotNull("Dictionary.getRoot() should not be null.", dictionary.getRoot());

		int depth = getTreeDepth();
		assertEquals(6, depth);
	}


	@Test
	public void testSave() throws Exception {
		String[] words = new String[] { "bull", "are", "genetic", "cotton", "dolly", "florida", "each", "bull" };
		for (String word : words)
			dictionary.add(word);

		dictionary.save("test_save.pre");
		String s = FileUtils.readFileToString(new File("test_save.pre"));
		String[] parts = s.split("\n");

		assertEquals(words.length - 1, parts.length);
		for (int ndx = 0; ndx < parts.length; ndx++)
			assertEquals(words[ndx], parts[ndx].trim().toLowerCase());
	}


	@Test
	public void testFind() throws Exception {
		String dictionaryPath = "dict_14.pre";
		dictionary.load(dictionaryPath);
		checkWord(dictionaryPath, "cotton", null);
		checkWord(dictionaryPath, "CottoN", null);
		checkWord(dictionaryPath, "Cotto", new String[] { "bull", "cotton" });
		checkWord(dictionaryPath, "mit", new String[] { "life", "mite" });
		checkWord(dictionaryPath, "mite", null);
		checkWord(dictionaryPath, "just", null);
	}


	private void checkWord(String dictionaryPath, String word, String[] expectedResult) {
		String[] result = dictionary.find(word);
		if (expectedResult != null) {
			if (result != null) {
				assertEquals(expectedResult[0], result[0]);
				assertEquals(expectedResult[1], result[1]);
			} else
				fail("Didn't find " + word + " in " + dictionaryPath);
		} else {
			if (result != null) {
				fail("The dictionary returned " + (result.length > 0 ? result[0] : "an empty array")
						+ " but should have returned null because " + word + " does exist in " + dictionaryPath);
			}
		}

	}

}
