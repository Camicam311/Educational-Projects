import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;


/**
 * @author Raymond
 *
 */
public class BooleanExpression {
	private List<Implicant> implicantList;
	private int myNumVars;
	public static final long maxVal = -1;
	public static final String alphabet = "abcdefghijklmnopqrstuvwxyz";
	
	private void initBooleanExpression(int numVars)
	{
		implicantList = new ArrayList<Implicant>();
		myNumVars = numVars; 
	}
	
	/*
	 * Constructor that parses a string form of a boolean expression
	 * into a list of implicants. Note, the MSB/LSB encoding is in 
	 * alphabetical order (eg. implicant a'bc will yield an MSB
	 * of 0xFFFFFFFFFFFFFFFC and an LSB of 0xFFFFFFFFFFFFFFFB). 
	 * 
	 * Constraints: boolean expression must be in 2-level form. 
	 */
	public BooleanExpression(String expression)
	{
		String[] impStrings = expression.split("\\+");
		int newNumVars = 0;
		
		//Finds number of variables
		//For example, abc and xyz should both use 3 variables. 
		StringBuilder alphabetSB = new StringBuilder("");
		for (int i = 0; i < expression.length(); i++)
		{
			char nextChar = expression.charAt(i);
			if (Character.isAlphabetic(nextChar) && 
					alphabetSB.toString().indexOf(nextChar) < 0)
			{
				alphabetSB.append(nextChar);
				newNumVars++;
			}
		}
		
		initBooleanExpression(newNumVars);
		
		//Iterate through all of the implicant strings
		for (String impString : impStrings)
		{
			//For each implicant string, start out with the MSBs
			//and LSBs at the maximum values, and then flip the 
			//appropriate bits as we scan through the variables. 
			long MSB = maxVal;
			long LSB = maxVal;
			
			int index = -1;
			for (int i = 0; i < impString.length(); i++)
			{
				char impChar = impString.charAt(i);
				if (impChar == '\'')
				{
					//Every instance of ' will complement the variable
					if (index > -1)
					{
						LSB ^= (1 << index);
						MSB ^= (1 << index);
					}
				}
				else
				{
					//Upon discovering a new alphabetic variable, we want to find its index
					//and set it. 
					index = -1;
					if (Character.isAlphabetic(impChar))
					{
						index = newNumVars - alphabetSB.toString().indexOf(Character.toLowerCase(impChar)) - 1;
					}
					if (index > -1)
					{
						MSB &= ~(1 << index);
					}
				}
			}
			
			Implicant newImp = new Implicant(MSB,LSB,newNumVars);
			implicantList.add(newImp);
		}
	}
	
	public boolean append(Implicant imp)
	{
		for (Implicant implicant : implicantList)
		{
			if (implicant.equals(imp)) 
				return false;
		}
		
		implicantList.add(imp);
		return true;
	}
	
	public List<Implicant> getImplicantList()
	{
		return implicantList;
	}
	
	/*
	 * Parameters: None
	 * 
	 * Simplifies the current boolean expression object by first removing absorption
	 * elements and then removing consensus elements. Elements should be greedily
	 * removed based on a left-to-right traversal. 
	 */
	public boolean doSimplification()
	{
		int removeCount = 0;
		
		//Iterate starting from the left to perform absorption
		Iterator<Implicant> impIterator = this.implicantList.iterator();
		while (impIterator.hasNext()) {
			Implicant frozenImp = impIterator.next();
		    Iterator<Implicant> impIterator2 = this.implicantList.iterator();
		    while(impIterator2.hasNext()) {
		    	Implicant curImp = impIterator2.next();
		    	if(!curImp.equals(frozenImp)) {
			    	if((frozenImp.isSubset(curImp))) {
			    		//System.out.println(impIterator.toString());
			    		impIterator.remove();
			    		removeCount++;
			    		break;
			    	}
		    	}
		    }
		}
		
		//Iterate starting from the left to perform consensus
		impIterator = this.implicantList.iterator(); //reinitialize the iterator
		while(impIterator.hasNext()) {
			Implicant frozenImp = impIterator.next();
			Iterator<Implicant> impIterator2 = this.implicantList.iterator();
			while(impIterator2.hasNext()) {
				boolean wasRemoved = false;
				Implicant curImp1 = impIterator2.next();
				Iterator<Implicant> impIterator3 = this.implicantList.iterator();
				while(impIterator3.hasNext()) {
					Implicant curImp2 = impIterator3.next();
					if((!frozenImp.equals(curImp1)) && (!frozenImp.equals(curImp2)) && (!curImp2.equals(curImp1))) {
						if(frozenImp.isConsensus(curImp1, curImp2)) {
							//System.out.println(impIterator.toString());
							impIterator2 = null;
							impIterator3 = null;
							impIterator.remove();
							wasRemoved = true;
							removeCount++;
							break;
						}
					}
				}
				if(wasRemoved) {
					break;
				}
			}
		}

		if(removeCount > 0) {
			return true;
		}
		return false;
	}
	
	/*
	 * Parameters: fileName
	 * 
	 * Generates a verilog file with the same name as the fileName. Do not change
	 * the input and output port names, as we will need these for testing. The 
	 * interior of the module, however, can be implemented as you see fit. 
	 */
	public boolean genVerilog(String fileName)
	{
		try {
			PrintWriter outputStream = new PrintWriter(new FileWriter(fileName + ".v"));
			outputStream.println("module " + fileName + "(");
			for (int i = 0; i < myNumVars; i++)
			{
				outputStream.println("input " + alphabet.charAt(i) + ",");
			}
			outputStream.println("output out");
			outputStream.println(");");
			
			/* Start My Code */
			outputStream.print("assign out = ");
			Iterator<Implicant> it = implicantList.iterator();
			int impCount = 0;
			boolean firstTerm;
			while(it.hasNext()) {
				int j = 0;
				firstTerm = true;
				Implicant curImp = it.next();
				long curMSB = curImp.getMSB();
				long curLSB = curImp.getLSB();
				if(impCount != 0) {
					outputStream.print(" | ");
				}
				
				if(curImp.checkValidImp(curImp)) {
					outputStream.print("(");
					for(int i=0; i<64; i++) {						
						if((curMSB >= 0) && (curLSB < 0)) {
							//print uncomplemented term
							if(firstTerm == false) {
								outputStream.print("&"); 
							}
							outputStream.print(alphabet.charAt(j));
							firstTerm = false;
						} else if((curMSB < 0) && (curLSB >= 0)) {
							//print compelemented term
							if(firstTerm == false) {
								outputStream.print("&"); 
							}
							outputStream.print("~"+alphabet.charAt(j));
							firstTerm = false;
						} else {
							
						}
						
						if((64 - i) <= curImp.getNumVars()) {
							j++;
						}
						
						curMSB = curMSB << 1;
						curLSB = curLSB << 1;
						impCount++;
					}
					outputStream.print(")");
				}
			}
			outputStream.print(";");
			outputStream.println("");
			/* End My Code */
			
			outputStream.println("endmodule");
			outputStream.close();
			return true;
		} catch (Exception e){
			return false;
		}
		
	}
	
}
