package sbccunittest;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.fail;

import java.io.*;

import org.apache.commons.io.*;
import org.junit.*;

import addressbook.*;

/**
 * This class unit-tests the CS145 Address Book.
 * 
 * @author sstrenn
 * 
 */
public class AddressBookTester {

	ContactList ab;


	@Before
	public void setUp() throws Exception {
		ab = new AddressBook();
	}


	@After
	public void tearDown() throws Exception {
	}


	@Test
	public void testInsert() {
		ab.insert(new Contact("bl", "bf", "555-2222", "bl@x.com"));
		assertEquals("555-2222", ab.getCurrent().getPhoneNumber());
	}


	@Test
	public void testInsertAndDelete() {
		ab.insertBeforeFirst(new Contact("al", "af", "555-1111", "al@x.com"));
		ab.insert(new Contact("bl", "bf", "555-2222", "bl@x.com"));
		ab.insertBeforeFirst(new Contact("cl", "cf", "555-3333", "cl@x.com"));
		ab.insert(new Contact("dl", "df", "555-4444", "dl@x.com"));

		assertEquals(4, ab.getCount());

		ab.goFirst();
		assertEquals("cl", ab.getCurrent().getLastName());

		ab.delete();
		ab.delete();
		ab.delete();
		assertEquals("bl", ab.getCurrent().getLastName());

		ab.delete();
		assertEquals(0, ab.getCount());

		ab.delete();
		ab.delete();
		ab.delete();

		assertEquals(0, ab.getCount());
	}


	@Test
	/**
	 * Checking for NPE's.
	 */
	public void testIteratePastEnds() {
		ab.insert(new Contact("al", "af", "555-1111", "al@x.com"));
		ab.insert(new Contact("bl", "bf", "555-2222", "bl@x.com"));
		ab.insert(new Contact("cl", "cf", "555-3333", "cl@x.com"));
		ab.insert(new Contact("dl", "df", "555-4444", "dl@x.com"));

		assertEquals(4, ab.getCount());

		ab.goFirst();
		ab.goPrevious();
		ab.goPrevious();
		ab.goLast();
		ab.goNext();
		ab.goNext();
		ab.goLast();

		assertEquals("dl@x.com", ab.getCurrent().getEmail());
	}


	@Test
	public void testLoadAndSave() {
		try {
			// Verify that 5 contacts are loaded from XML file.
			ab.loadFile("Small.xml");
			assertEquals(5, ab.getCount());
			assertEquals("SMITH", ab.getCurrent().getLastName());

			// Verify that XML file has 4 contacts
			ab.delete();
			ab.saveFile("Small2.xml");
			String s = FileUtils.readFileToString(new File("Small2.xml"));
			String[] parts = s.split("<contact>");
			int numberOfContacts = parts.length - 1;
			assertEquals(4, numberOfContacts);

			// Verify that after load there are 4 contacts
			ab.loadFile("Small2.xml");
			System.out.println(ab.getCount());
			assertEquals(4, ab.getCount());

		} catch (Exception ex) {
			fail(ex.getMessage());
		}
	}


	@Test
	public void testSearch() {
		ab.insert(new Contact("AL", "af", "555-1111", "al@x.com"));
		ab.insert(new Contact("BL", "bf", "555-2222", "bl@x.com"));
		ab.insert(new Contact("CL", "cf", "555-3333", "cl@x.com"));
		ab.insert(new Contact("DL", "df", "555-4444", "dl@x.com"));
		assertEquals(true, ab.goContact("cl"));
		assertEquals("CL", ab.getCurrent().getLastName());
		assertEquals(false, ab.goContact("zl"));
		assertEquals("CL", ab.getCurrent().getLastName());
	}


	@Test
	public void testSort() {
		ab.insert(new Contact("DL", "df", "555-4444", "dl@x.com"));
		ab.insert(new Contact("AL", "af", "555-1111", "al@x.com"));
		ab.insert(new Contact("AL", "af2", "555-1112", "al2@x.com"));
		ab.insert(new Contact("BL", "bf", "555-2222", "bl@x.com"));
		ab.insert(new Contact("CL", "cf", "555-3333", "cl@x.com"));
		ab.insert(new Contact("EL", "ef", "555-5555", "el@x.com"));
		ab.insert(new Contact("DL", "df2", "555-4445", "dl2@x.com"));

		assertEquals(7, ab.getCount());

		ab.sortOnLastName();
		ab.goFirst();

		boolean sortOrderValid = true;
		int count = ab.getCount();
		Contact previousContact = ab.getCurrent();
		ab.goNext();

		for (int ndx = 1; ndx < count; ndx++) {
			String currentLastName = ab.getCurrent().getLastName();
			String previousLastName = previousContact.getLastName();
			int result = currentLastName.compareTo(previousLastName);
			if (result < 0) {
				sortOrderValid = false;
				break;
			}
			previousContact = ab.getCurrent();
			ab.goNext();
		}

		if (!sortOrderValid)
			fail("Sort order not valid");
	}

}
