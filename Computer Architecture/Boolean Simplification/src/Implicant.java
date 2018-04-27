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
		long tempImp1MSB = imp1.getMSB() & this.getMSB();
		long tempImp1LSB = imp1.getLSB() & this.getLSB();
		
		long tempImp2MSB = imp2.getMSB() & this.getMSB();
		long tempImp2LSB = imp2.getLSB() & this.getLSB();
		
		Implicant tempImp1 = new Implicant(tempImp1MSB, tempImp1LSB, this.getNumVars());
		Implicant tempImp2 = new Implicant(tempImp2MSB, tempImp2LSB, this.getNumVars());
		
		if(!checkValidImp(tempImp1)) {
			tempImp1 = new Implicant(0,0,this.getNumVars());
		}
		
		if(!checkValidImp(tempImp2)) {
			tempImp2 = new Implicant(0,0,this.getNumVars());
		}
		
		if(!impIsZeros(tempImp1) && !impIsZeros(tempImp2)) {
			long xorImpMSB = tempImp1MSB ^ tempImp2MSB;
			long xorImpLSB = tempImp1LSB ^ tempImp2LSB;
			
			if ((Long.bitCount(xorImpMSB) > 1) || (Long.bitCount(xorImpLSB) > 1)) {
				return false;
			} else {
				long unionImpMSB = tempImp1MSB | tempImp2MSB;
				long unionImpLSB = tempImp1LSB | tempImp2LSB;
				
				if((unionImpMSB == this.getMSB()) && (unionImpLSB == this.getLSB())) {
					return true;
				} else {
					return false;
				}
			}
		}
		
		return false;
	}
	
	
	
	public boolean impIsZeros(Implicant imp) {
		if((imp.getMSB() == 0) && (imp.getLSB() == 0)) {
			return true;
		}
		return false;
	}
	
	public boolean checkValidImp(Implicant imp) {
		long impResult = imp.getMSB() | imp.getLSB();		
		if(impResult == -1) {
			return true;
		} else {
			return false;
		}
	}

	/*
	 * Parameters: imp
	 * 
	 * Returns whether current implicant is a subset of imp
	 */
	public boolean isSubset(Implicant imp)
	{
		
		if(!checkValidImp(imp)) {
			int numVars = imp.getNumVars();
			imp = new Implicant(0,0,numVars);
		}
		
		if(!checkValidImp(this)) {
			this.myMSB = 0;
			this.myLSB = 0;
		}
		long resultMSB = imp.getMSB() & this.getMSB();
		long resultLSB = imp.getLSB() & this.getLSB();
		/*	
			System.out.println("Result");
			System.out.println(Long.toHexString(resultMSB) + " ");
			System.out.println(Long.toHexString(resultLSB) + " ");
		*/
			
			
		if((this.getMSB() == resultMSB) && (this.getLSB() == resultLSB)) {
			return true;
		} else {
			return false;
		}
	}
	public boolean equals(Implicant imp)
	{
		return 	(imp.getLSB() == myLSB) && 
				(imp.getNumVars() == myNumVars) &&
				(imp.getMSB() == myMSB);
	}
	
}
