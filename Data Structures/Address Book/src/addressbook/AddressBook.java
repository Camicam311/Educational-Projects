package addressbook;

import java.io.*;
import javax.xml.parsers.*;
import javax.xml.transform.*;
import javax.xml.transform.dom.*;
import javax.xml.transform.stream.*;

import org.w3c.dom.*;
import org.xml.sax.*;

public class AddressBook implements ContactList {

	Contact current;
	Contact top = null;
	Contact tail = null;
	private int numContacts = 0;
	
	@Override
	public Contact getCurrent() {
		if(this.getCount() == 0) {
			return null;
		} else {
			return this.current;
		}
	}

	@Override
	public Contact goFirst() {
		if(top != null){
			current = top;
		}
		else{
			current = null;
		}
		return top;
	}

	@Override
	public Contact goLast() {
		if(tail != null){
			current = tail;
		} else {
			current = null;
		}	
		return tail;
	}

	@Override
	public Contact goNext() {
		if(current.next != null) {
			current = current.next;
			
		}
		return current;
	}

	@Override
	public Contact goPrevious() {
		if(current.prev != null) {
			current = current.prev;	
		}
		return current;
	}

	@Override
	public int getCount() {
		return numContacts;
	}
	
	

	@Override
	public void loadFile(String filename) throws Exception {
		//get the factory
		DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
		try {
			//Using factory get an instance of document builder
			DocumentBuilder db = dbf.newDocumentBuilder();
			//parse using builder to get DOM representation of the XML file
			Document dom = db.parse(filename);
			Element addressBook = dom.getDocumentElement();
			NodeList contacts = addressBook.getElementsByTagName("contact");
			if(contacts != null) {
				top = null;
				tail = null;
				current = null;
				numContacts = 0;
				for(int i=0; i < contacts.getLength(); i++){
					Element contactEl = (Element)contacts.item(i);
					String lastName = getTextValue(contactEl, "last");
					String firstName = getTextValue(contactEl, "first");
					String phone = getTextValue(contactEl, "phone");
					String email = getTextValue(contactEl, "email");
					Contact contact = new Contact(lastName,firstName,phone,email);
					insert(contact);
				}
				this.goFirst();
			}
			
		}catch(ParserConfigurationException pce) {
			pce.printStackTrace();
		}catch(SAXException se) {
			se.printStackTrace();
		}catch(IOException ioe) {
			ioe.printStackTrace();
		}	
	}
	
	private String getTextValue(Element ele, String tagName) {
		String textVal = null;
		NodeList nl = ele.getElementsByTagName(tagName);
		if(nl != null && nl.getLength() > 0) {
			Element el = (Element)nl.item(0);
			textVal = el.getFirstChild().getNodeValue();
		}

		return textVal;
	}
	
	@Override
	public void saveFile(String filename) throws Exception {
		DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
		DocumentBuilder builder = factory.newDocumentBuilder();
		DOMImplementation impl = builder.getDOMImplementation();
		Document XMLDoc = impl.createDocument(null, null, null);
		Element Elcontacts = XMLDoc.createElement("contacts");
		XMLDoc.appendChild(Elcontacts);
		Contact curContact = top;
		for(int i = 1; i <= this.getCount(); i++){
			
			//Create XML Elements and Set Values
			Element Elcontact = XMLDoc.createElement("contact");
			Elcontacts.appendChild(Elcontact);
			
			Element Elid = XMLDoc.createElement("id");
			Elid.setTextContent("" + i);
			Elcontact.appendChild(Elid);
			
			Element Ellast = XMLDoc.createElement("last");
			Ellast.setTextContent(curContact.getLastName());
			Elcontact.appendChild(Ellast);
			
			Element Elfirst = XMLDoc.createElement("first");
			Elfirst.setTextContent(curContact.getFirstName());
			Elcontact.appendChild(Elfirst);
			
			Element Elphone = XMLDoc.createElement("phone");
			Elphone.setTextContent(curContact.getPhoneNumber());
			Elcontact.appendChild(Elphone);
			
			Element Elemail = XMLDoc.createElement("email");
			Elemail.setTextContent(curContact.getEmail());
			Elcontact.appendChild(Elemail);
			
			curContact = curContact.next;
		}
		
		 DOMSource domSource = new DOMSource(XMLDoc);
		 TransformerFactory tf = TransformerFactory.newInstance();
	     Transformer transformer = tf.newTransformer();
	     transformer.setOutputProperty(OutputKeys.INDENT, "yes");
	     java.io.StringWriter sw = new java.io.StringWriter();
	     StreamResult sr = new StreamResult(sw);
	     transformer.transform(domSource, sr);
	     String xml = sw.toString();
	     System.out.println(xml);
	     
	     //write generated xml doc to file
	     try {
	    	 BufferedWriter out = new BufferedWriter(new FileWriter(filename));
	    	 out.write(xml);
	    	 out.close();
	    	 }
	    catch (IOException e)
	    {
	         System.out.println("Exception ");
	    }
	}

	@Override
	public void insert(Contact contact) {
		if(current != null) {
			contact.prev = current;
			contact.next = current.next;
			current.next = contact;
			if(contact.next != null){
				contact.next.prev = contact; 
			}
			else {
				tail = contact;
			}
		}
		else {
			contact.next = top;
			if(top != null)
				top.prev = contact;
			top = contact;
			if(tail == null){ tail = contact; }
		}
		current = contact;
		this.numContacts++;
	}

	@Override
	public void insertBeforeFirst(Contact contact) {
		if(top == null) {
			top = contact;
			current = top;
		} 
		else {
			top.prev = contact;
			contact.next = top;
			top = contact;
			current = contact;
		}
		this.numContacts++;
	}

	@Override
	public void delete() {
		if(current != null) { 
			if(current == top) {
				if(current.next != null) {
					top = current.next;
					current.next.prev = null;
					current = top;
				}
				else {
					current = null;
					tail = null;
				}
			}
			else {
				if(current.next != null){
					current.next.prev = current.prev;
					current.prev.next = current.next;
					current = current.next;
				}
				else {
					current = current.prev;
					current.next = null;
				}
			}
			this.numContacts--;
		}
	}

	@Override
	public boolean goContact(String lastName) {
		Contact curContact = top;
		String curName = curContact.getLastName().toLowerCase();
		for(int i = 0; i< this.getCount(); i++){ 
			//top node is not current name, iterate through list to find name
			if(curName.equals(lastName.toLowerCase())) {
				current = curContact;
				return true;
			}
			if(curContact.next != null){
				curContact = curContact.next;
			}
			curName = curContact.getLastName().toLowerCase();
		}
		return false;
	}

	@Override
	public void sortOnLastName() {
		// TODO Auto-generated method stub

	}

}
