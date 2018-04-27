import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/*
 * Stores implicants in the form where 
 */
public class Implicant {
	
	private long myMSB;
	private long myLSB;
	private int myNumVars;
	private List<Long> minterms;
	
	public long getMSB()
	{
		return myMSB;
	}
	
	public long getLSB()
	{
		return myLSB;
	}
	
	public int getNumVars()
	{
		return myNumVars;
	}
	
	public Implicant(long newMSB, long newLSB, int numVars)
	{
		myMSB = newMSB;
		myLSB = newLSB;
		myNumVars = numVars;
		minterms = new ArrayList<Long>();
	}
	
	/*
	 * Parameters: imp1, imp2, consensusImplicant
	 * 
	 * Returns whether current implicant is a consensus element of imp1 and imp2
	 */
	public boolean isConsensus(Implicant imp1, Implicant imp2)
	{
		//Your code goes here
		return false;
	}

	/*
	 * Parameters: imp
	 * 
	 * Returns whether current implicant is a subset of imp
	 */
	public boolean isSubset(Implicant imp)
	{
		//Your code goes here
		return false;
	}
	public boolean equals(Implicant imp)
	{
		return 	(imp.getLSB() == myLSB) && 
				(imp.getNumVars() == myNumVars) &&
				(imp.getMSB() == myMSB);
	}
	
}
