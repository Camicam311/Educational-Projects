package sbccunittest;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.fail;

import java.io.*;

import org.apache.commons.io.*;
import org.junit.*;

import spellchecker.*;


public class MainWindowTester {

	MainWindow mainWindow;


	@Before
	public void setUp() throws Exception {
		mainWindow = new MainWindow();
		mainWindow.openForUnitTesting();
	}


	@After
	public void tearDown() throws Exception {
		mainWindow.closeForUnitTesting();
	}


	@Test
	public void testLoad() throws Exception {
		mainWindow.loadDocument("test.txt");
		String text = mainWindow.getText();
		assertEquals("This is a test.", text);
	}


	@Test
	public void testSpellCheckWithOneUnknownWord() throws Exception {
		String dictionaryImportPath = "small_dictionary.txt";
		String dictionaryPath = "small_dictionary.pre";
		String documentPath = "small_document_one_unknown.txt";

		mainWindow.importDictionary(dictionaryImportPath);
		mainWindow.saveDictionary(dictionaryPath);

		mainWindow.loadDocument(documentPath);

		String[] result;

		result = mainWindow.spellCheck(false);
		if (result == null)
			fail("There should be one unknown word in " + documentPath + " when the dictionary is " + dictionaryImportPath);
		else {
			assertEquals("explosins", result[0]);
			assertEquals("87", result[1]);
			assertEquals("ever", result[2]);
			assertEquals("explosions", result[3]);
		}


	}


	@Test
	public void testSpellCheckReplaceOneUnknownWord() throws Exception {
		String dictionaryImportPath = "small_dictionary.txt";
		String dictionaryPath = "small_dictionary.pre";
		String documentPath = "small_document_one_unknown.txt";

		mainWindow.importDictionary(dictionaryImportPath);
		mainWindow.saveDictionary(dictionaryPath);

		mainWindow.loadDocument(documentPath);

		String[] result;

		// Spell-check and find one word misspelled.
		result = mainWindow.spellCheck(false);
		if (result == null)
			fail("There should be one unknown word in " + documentPath + " when the dictionary is " + dictionaryImportPath);
		else {
			assertEquals("explosins", result[0]);
			assertEquals("87", result[1]);
			assertEquals("ever", result[2]);
			assertEquals("explosions", result[3]);
		}

		// Replace it with the second suggestion.
		int startIndex = Integer.parseInt(result[1]);
		int endIndex = startIndex + result[0].length();
		mainWindow.replaceText(startIndex, endIndex, result[3]);

		// Check against corrected.
		String text = mainWindow.getText();
		String expected = FileUtils.readFileToString(new File("small_document_one_unknown_corrected.txt"));
		assertEquals(expected, text);
	}


	@Test
	public void testSpellCheckNoUnknownWords() throws Exception {
		String dictionaryImportPath = "small_dictionary.txt";
		String dictionaryPath = "small_dictionary.pre";
		String documentPath = "small_document.txt";

		mainWindow.importDictionary(dictionaryImportPath);
		mainWindow.saveDictionary(dictionaryPath);

		mainWindow.loadDocument(documentPath);

		String[] result;

		result = mainWindow.spellCheck(false);
		if (result != null)
			fail("There should be no unknown words in " + documentPath + " when the dictionary is " + dictionaryPath);
	}


	@Test
	public void testSpellCheckReplaceUnknowns() throws Exception {
		String dictionaryImportPath = "small_dictionary.txt";
		String dictionaryPath = "small_dictionary.pre";
		String documentPath = "small_document_three_unknown.txt";

		mainWindow.importDictionary(dictionaryImportPath);
		mainWindow.saveDictionary(dictionaryPath);

		mainWindow.loadDocument(documentPath);

		String[] result;


		// Find first unknown
		result = mainWindow.spellCheck(false);
		if (result == null)
			fail("Failed to find the first unknown word in " + documentPath + " when the dictionary is " + dictionaryImportPath);
		else {
			assertEquals("explosins", result[0]);
			assertEquals("87", result[1]);
			assertEquals("ever", result[2]);
			assertEquals("explosions", result[3]);
		}

		// Replace it with the successor word
		int startIndex = Integer.parseInt(result[1]);
		int endIndex = startIndex + result[0].length();
		mainWindow.replaceText(startIndex, endIndex, result[3]);

		// find the 2nd unknown (the word "which")
		result = mainWindow.spellCheck(true);
		if (result == null)
			fail("Failed to find the second unknown word in " + documentPath + " when the dictionary is " + dictionaryImportPath);
		else {
			assertEquals("which", result[0]);
			assertEquals("130", result[1]);
			assertEquals("use", result[2]);
			assertEquals("with", result[3]);
		}

		// Add this word to the dictionary
		String wordToAdd = result[0];
		mainWindow.addWordToDictionary(result[0]);

		// Find third unknown
		result = mainWindow.spellCheck(true);
		if (result == null)
			fail("Failed to find the third unknown word in " + documentPath + " when the dictionary is " + dictionaryImportPath);
		else {
			assertEquals("cuosmos", result[0]);
			assertEquals("275", result[1]);
			assertEquals("cosmos", result[2]);
			assertEquals("dozen", result[3]);
		}

		// Replace it with the predecessor word
		startIndex = Integer.parseInt(result[1]);
		endIndex = startIndex + result[0].length();
		mainWindow.replaceText(startIndex, endIndex, result[2]);

		// Verify document in the GUI is correct
		String expectedText = FileUtils.readFileToString(new File("small_document_three_unknown_corrected.txt"));
		String actualText = mainWindow.getText();
		assertEquals(expectedText, actualText);

		// Verify the saved document is correct
		mainWindow.saveDocument("small_document_three_unknown_after_spellchecking.txt");
		actualText = FileUtils.readFileToString(new File("small_document_three_unknown_after_spellchecking.txt"));
		assertEquals(expectedText, actualText);

		// Verify the dictionary is correct
		mainWindow.saveDictionary("small_dictionary_after_spellchecking.pre");
		String dictText = FileUtils.readFileToString(new File("small_dictionary_after_spellchecking.pre"));

		if (!dictText.contains(wordToAdd))
			fail("Dictionary file didn't contain " + wordToAdd + ".");
	}


	@Test
	public void testSpellCheckNoSuccessor() throws Exception {
		String dictionaryImportPath = "small_dictionary.txt";
		String dictionaryPath = "small_dictionary.pre";
		String documentPath = "small_document_test_no_successor.txt";

		mainWindow.importDictionary(dictionaryImportPath);
		mainWindow.saveDictionary(dictionaryPath);

		mainWindow.loadDocument(documentPath);

		String[] result;


		// Find first unknown
		result = mainWindow.spellCheck(false);
		if (result == null)
			fail("Failed to find the first unknown word in " + documentPath + " when the dictionary is " + dictionaryImportPath);
		else {
			assertEquals("zebras", result[0]);
			assertEquals("87", result[1]);
			assertEquals("with", result[2]);
			assertEquals("", result[3]);
		}

	}
}
