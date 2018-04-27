import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/*
 * Stores implicants in the form where 
 */
public class Implicant{
	
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
	
	public List<Long> getMinterms()
	{
		return minterms;
	}
	
	public Implicant(long newMSB, long newLSB, int numVars)
	{
		myMSB = newMSB;
		myLSB = newLSB;
		myNumVars = numVars;
		minterms = new ArrayList<Long>();
	}
	
	public Implicant(long minterm, int numVars)
	{
		myMSB = minterm ^ BooleanExpression.maxVal;
		myLSB = BooleanExpression.maxVal & (minterm | (BooleanExpression.maxVal << numVars));
		myNumVars = numVars;
		minterms = new ArrayList<Long>();
		minterms.add(minterm);
	}

	public boolean equals(Implicant imp)
	{
		return 	(imp.getLSB() == this.myLSB) && 
				(imp.getNumVars() == this.myNumVars) &&
				(imp.getMSB() == this.myMSB);
	}
	
	public void addMinterms(Implicant imp1) {
		this.minterms.addAll(imp1.getMinterms());
	}
	
	
	public boolean checkValidImp(Implicant imp) {
		long impResult = imp.getMSB() | imp.getLSB();		
		if(impResult == -1) {
			return true;
		} else {
			return false;
		}
	}
	
	public BitVector getBitVector() {
		List<Long> longList = new ArrayList<Long>();

		long maxMinterm = 0;
		for(int i=0; i<this.minterms.size(); i++) {
			longList.add(this.minterms.get(i));
			if(this.minterms.get(i) > maxMinterm) {
				maxMinterm = this.minterms.get(i);
			}
		}
		
		//Create a new bitVector equal to the size of the maxMinterm
		BitVector impBitVector = new BitVector((int) maxMinterm);
		for(int i=0; i<this.minterms.size(); i++) {
			long minterm = this.minterms.get(i);
			//flip the corresponding bit in the bitVector
			impBitVector.set((int) minterm);
		}
		
		
		
		
		return impBitVector;
	}
}
