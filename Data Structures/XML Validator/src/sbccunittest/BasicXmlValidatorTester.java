package sbccunittest;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNull;

import java.io.*;

import org.apache.commons.io.*;
import org.junit.*;

import xmlvalidator.*;


public class BasicXmlValidatorTester {

	BasicXmlValidator validator;


	@Before
	public void setUp() throws Exception {
		validator = new BasicXmlValidator();
	}


	@After
	public void tearDown() throws Exception {
	}


	@Test
	public void testValidFile() throws IOException {
		String xmlDocument = FileUtils.readFileToString(new File("TestFile2.xml"));
		String[] result = validator.validate(xmlDocument);
		assertNull(result);
	}


	@Test
	public void testBigValidFile() throws IOException {
		String xmlDocument = FileUtils.readFileToString(new File("TestFile4.xml"));
		String[] result = validator.validate(xmlDocument);
		assertNull(result);
	}


	@Test
	public void testOrphanClosingTag() throws IOException {
		String xmlDocument = FileUtils.readFileToString(new File("TestFile6.xml"));
		String[] result = validator.validate(xmlDocument);
		assertEquals("Orphan closing tag", result[0]);
		assertEquals("projectDescription", result[1]);
		assertEquals("34", result[2]);
	}


	@Test
	public void testUnclosedTag() throws IOException {
		String xmlDocument = FileUtils.readFileToString(new File("TestFile1.xml"));
		String[] result = validator.validate(xmlDocument);
		assertEquals("Tag mismatch", result[0]);
		assertEquals("name", result[1]);
		assertEquals("24", result[2]);
		assertEquals("buildCommand", result[3]);
		assertEquals("27", result[4]);
	}


	@Test
	public void testUnclosedTagAtEnd() throws IOException {
		String xmlDocument = FileUtils.readFileToString(new File("TestFile3.xml"));
		String[] result = validator.validate(xmlDocument);
		assertEquals("Unclosed tag at end", result[0]);
		assertEquals("natures", result[1]);
		assertEquals("29", result[2]);
	}


	@Test
	public void testAttributeNotQuoted() throws IOException {
		String xmlDocument = FileUtils.readFileToString(new File("TestFile5.xml"));
		String[] result = validator.validate(xmlDocument);
		assertEquals("Attribute not quoted", result[0]);
		assertEquals("versionInfo", result[1]);
		assertEquals("35", result[2]);
		assertEquals("copyright", result[3]);
		assertEquals("35", result[4]);
	}

}