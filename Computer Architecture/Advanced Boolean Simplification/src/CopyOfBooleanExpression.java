import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;


/**
 * @author Raymond
 *
 */
public class CopyOfBooleanExpression {
	private List<Implicant> implicantList;
	private List<Long> mintermsNeededToCover;
	private int myNumVars;
	public static final long maxVal = -1;
	public static final String alphabet = "abcdefghijklmnopqrstuvwxyz";
	public ArrayList<Implicant> finalImpList = new ArrayList<Implicant>();
	
	private void initBooleanExpression(int numVars)
	{
		implicantList = new ArrayList<Implicant>();
		myNumVars = numVars; 
		mintermsNeededToCover = new ArrayList<Long>();
	}
	
	public CopyOfBooleanExpression(ArrayList<Long> minterms, int numVars)
	{
		initBooleanExpression(numVars);
		for (Long minterm : minterms)
		{
			implicantList.add(new Implicant(minterm, numVars));
			mintermsNeededToCover.add(minterm);
		}
	}
	
	public List<Implicant> getImplicantList()
	{
		
		return implicantList;
	}
	
	public void doTabulationMethod()
	{	
		List<Implicant> impList = this.implicantList;
		List<Implicant> mergedList = null;
		ArrayList<ArrayList<Implicant>> groupedImps = null;	
		do 
		{
			groupedImps = groupImplicantList(impList);
			mergedList = mergeImplicants(groupedImps);
			if(!mergedList.isEmpty())
			{
				impList = mergedList;
			}
		} while(!mergedList.isEmpty());
		
		for(int i=0; i< finalImpList.size(); i++) {
			System.out.println(finalImpList.get(i));
		}
		
		this.implicantList = finalImpList;
		
	}
	
	//Make this private when done
	public ArrayList<ArrayList<Implicant>> groupImplicantList(List<Implicant> impList) 
	{

		ArrayList<ArrayList<Implicant>> groupedList = new ArrayList<ArrayList<Implicant>>();
		for(int i = 0; i <= this.myNumVars; i++)
		{
			ArrayList<Implicant> subList = new ArrayList<Implicant>();
			groupedList.add(i, subList);
		}
		for( int i = 0; i < impList.size(); i++)
		{
			Long MSBVal = impList.get(i).getMSB();
			Long LSBVal = impList.get(i).getLSB();
			Long xorMSBLSB = MSBVal ^ LSBVal;
			int numUnCompliments = Long.bitCount((LSBVal & xorMSBLSB));
			ArrayList<Implicant> subList = groupedList.get(numUnCompliments);
			subList.add(impList.get(i));
		}
		
		return groupedList;
	}
	

	//Make this private when done
	public List<Implicant> mergeImplicants(ArrayList<ArrayList<Implicant>> groupedList) 
	{
		ArrayList<Implicant> impList = new ArrayList<Implicant>();
	
		for(int i = 0; i < groupedList.size()-1; i++)
		{
			ArrayList<Implicant> subList1 = groupedList.get(i); //i = 0
			ArrayList<Implicant> subList2 = groupedList.get(i + 1); //i = 1
		
			for(int j = 0; j < subList1.size(); j++)
			{	
				//System.out.println("SubLIst1size:" + subList1.size());
				Implicant imp1 = subList1.get(j);
				boolean sub1Added = false;
				
				for(int k = 0; k < subList2.size(); k++)
				{
					System.out.println("SubLIst2size:" + subList2.size());
					
					Implicant imp2 = subList2.get(k);
					long xorMSB = imp1.getMSB() ^ imp2.getMSB();
					int diffMSB = Long.bitCount(xorMSB); //hamming distance
					if(diffMSB == 1)
					{
						long newMSB = imp1.getMSB() | xorMSB;
						long newLSB = imp1.getLSB() | xorMSB;
						//System.out.println("Sublist2Size:" + subList2.size());
						Implicant newImp = new Implicant(newMSB, newLSB, imp1.getNumVars() );
						impList.add(newImp);
						sub1Added = true;
					}
					
				}
				if(!sub1Added)
				{
					finalImpList.add(imp1);
				}
			}
		}
		
		//TESTING OUTPUT

		return impList;
	}
	
	
	public void doQuineMcCluskey()
	{
		
	}
	
	public void doPetricksMethod()
	{
		//TODO: Your code goes here
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
