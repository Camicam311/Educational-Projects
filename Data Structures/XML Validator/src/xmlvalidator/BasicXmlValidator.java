package xmlvalidator;

import java.io.*;
import java.util.regex.*;

public class BasicXmlValidator implements XmlValidator {
	private BasicStringStack tagStack = new BasicStringStack();
	private BasicStringStack lineStack = new BasicStringStack();
	private Pattern full_tag_pattern = Pattern.compile("<[ ]*/?[ ]*[A-Za-z][a-zA-z0-9]*[ ]*([0-9A-Za-z]*=\"[^\'\"]*\"[ ]*)*>");
	private Pattern open_tag_pattern = Pattern.compile("<[ ]*[A-Za-z][a-zA-z0-9]*[ ]*([0-9A-Za-z]*=\"[^\'\"]*\"[ ]*)*>");
	private Pattern closing_tag_pattern = Pattern.compile("</[A-Za-z][A-Za-z0-9]*>");
	@Override
	public String[] validate(String xmlDocument) {
		String[] xmlDocLines = xmlDocument.split("\n");
		for(int i=0; i < xmlDocLines.length; i++) {
			Matcher lineMatcher = full_tag_pattern.matcher(xmlDocLines[i]);
			while(lineMatcher.find() != false) {
				String tag_part = lineMatcher.group();
				int line_no = i + 1;
				/*EXTRA CREDIT:
			         [0] = "Attribute not quoted" 
			         [1] = Tag name from the top of the stack 
			         [2] = Line # of the tag name 
			         [3] = Attribute name 
			         [4] = Line # of the unquoted attribute value 
			              e.g. 
			         [0] = "Attribute not quoted" 
			         [1] = "sometag" 
			         [2] = "14" 
			         [1] = "someattribute" 
			         [2] = "15"
				*/
				System.out.println("Line " + line_no + ": " + xmlDocLines[i]);
				//Handle the stack
				if(isOpenTag(tag_part)){
					tagStack.push(tag_part);
					lineStack.push(line_no+"");
				} 
				else if(isClosingTag(tag_part)) {
					if(tagStack.getCount() == 0) {
						//Extra Closing Tag
						String[] error = new String[3];
						error[0] = "Orphan closing tag";
						error[1] = extractTagName(tag_part);
						error[2] = line_no + "";
						return error;
					} 
					
					if(extractTagName(tag_part).equals(extractTagName(tagStack.peek(0)))) {
						tagStack.pop();
						lineStack.pop();
					} 
					else {
						//Tag Mismatch
						String[] error = new String[5];
						error[0] = "Tag mismatch";
						error[1] = extractTagName(tagStack.peek(0));
						error[2] = lineStack.peek(0);
						error[3] = extractTagName(tag_part);
						error[4] = line_no + "";
						return error;
					}
				}
				
				if(i == (xmlDocLines.length - 1)) {
					//Last line of document, check if there are still tags in stack
					if(tagStack.getCount() > 0) {
						//there is still a tag in the stack
						String[] error = new String[3];
						error[0] = "Unclosed tag at end";
						error[1] = extractTagName(tagStack.peek(1));
						error[2] = lineStack.peek(1);
						return error;
					}
				}
			}
		}
		return null;	
	}
	
	private boolean isOpenTag(String tag_part) {
		Matcher tagPartMatcher = open_tag_pattern.matcher(tag_part);
		if(tagPartMatcher.matches()){ 
			return true;
		}
		return false;
	}
	
	private boolean isClosingTag(String tag_part) {
		Matcher tagPartMatcher = closing_tag_pattern.matcher(tag_part);
		if(tagPartMatcher.matches()){ 
			return true;
		}
		return false;
	}
	
	private String extractTagName(String tag_part) {
		Pattern tag_name = Pattern.compile("[A-Za-z][a-zA-z0-9]*");
		Matcher nameMatcher = tag_name.matcher(tag_part);
		nameMatcher.find();
		return nameMatcher.group();
	}
}

