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
public class BooleanExpression {
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
	
	public BooleanExpression(ArrayList<Long> minterms, int numVars)
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
		
		/*for(int i=0; i< finalImpList.size(); i++) {
			System.out.println(finalImpList.get(i));
		}*/
		
		
		/*
		ArrayList<ArrayList<Implicant>> grouping1 = groupImplicantList(implicantList);
		List<Implicant> subcube1 = mergeImplicants(grouping1);

		ArrayList<ArrayList<Implicant>> grouping2 = groupImplicantList(subcube1);
		List<Implicant> subcube2 = mergeImplicants(grouping2);
		
		ArrayList<ArrayList<Implicant>> grouping3 = groupImplicantList(subcube2);
		List<Implicant> subcube3 = mergeImplicants(grouping3);	
		
		ArrayList<ArrayList<Implicant>> grouping4 = groupImplicantList(subcube3);
		List<Implicant> subcube4 = mergeImplicants(grouping4);
		 */
		
		//Update the array of minterms needed to cover
		mintermsNeededToCover = new ArrayList<Long>();
		for(int i=0; i<finalImpList.size(); i++) {
			List<Long> minterms = finalImpList.get(i).getMinterms();
			for(int j=0; j<minterms.size(); j++) {
				if(!mintermsNeededToCover.contains(minterms.get(j))) {
					mintermsNeededToCover.add(minterms.get(j));
				}
			}
		}
		
		//Update the implicant list of the boolean expression
		this.implicantList = new ArrayList<Implicant>();
		this.implicantList = this.finalImpList;
		

		/*
		System.out.print("Need to cover: ");
		for(int i=0; i<mintermsNeededToCover.size(); i++) {
			System.out.print(mintermsNeededToCover.get(i) + ", ");
		}
		*/
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
		
		//Print the Grouplist
		/*for(int i=0; i<groupedList.size(); i++) {
			System.out.println("This is group G" + i + ": " + groupedList.get(i).size());
		}*/
		
		return groupedList;
	}
	

	//Make this private when done
	public List<Implicant> mergeImplicants(ArrayList<ArrayList<Implicant>> groupedList) 
	{
		ArrayList<Implicant> impList = new ArrayList<Implicant>();
		ArrayList<Implicant> flaggedImps = new ArrayList<Implicant>();
		for(int i = 0; i < groupedList.size()-1; i++)
		{
			//System.out.println("On Iteration I: " + i);
			ArrayList<Implicant> subList1 = groupedList.get(i); //i = 0
			ArrayList<Implicant> subList2 = groupedList.get(i + 1); //i = 1
		
			for(int j = 0; j < subList1.size(); j++)
			{	
				//System.out.println("SubLIst1size:" + subList1.size());
				Implicant imp1 = subList1.get(j);
				for(int k = 0; k < subList2.size(); k++)
				{
					//System.out.println("SubLIst2size:" + subList2.size());
					Implicant imp2 = subList2.get(k);
					long xorMSB = imp1.getMSB() ^ imp2.getMSB();
					long xorLSB = imp1.getLSB() ^ imp2.getLSB();
					long diffXorXorMSBLSB = Long.bitCount(xorMSB ^ xorLSB); 
					int diffMSB = Long.bitCount(xorMSB); 
					int diffLSB = Long.bitCount(xorLSB); 
					long numExistingLiteralsForCurCube = imp1.getNumVars() - Long.bitCount(imp1.getMSB() & imp1.getLSB());
					if((diffMSB == 1) && (diffLSB == 1) && (diffXorXorMSBLSB == 0))
					{
						long newMSB = imp1.getMSB() | xorMSB;
						long newLSB = imp1.getLSB() | xorMSB;
						
						Implicant newImp = new Implicant(newMSB, newLSB, imp1.getNumVars());
						newImp.addMinterms(imp1);
						newImp.addMinterms(imp2);
						long numExistingLiteralsForNewImp = newImp.getNumVars() - Long.bitCount(newImp.getMSB() & newImp.getLSB());
						if(numExistingLiteralsForCurCube == (numExistingLiteralsForNewImp + 1)) {
							//If the two imps are not flagged yet, add them to the flaggedImps ArrayList
							if(!checkImpExists(imp1, flaggedImps)) {
								flaggedImps.add(imp1);
							}
							if(!checkImpExists(imp2, flaggedImps)) {
								flaggedImps.add(imp2);
							}
							if(checkImpExists(newImp, impList) == false) {
								impList.add(newImp);
							}
						}
						
					}
					
				}
				if(!checkImpExists(imp1, flaggedImps))
				{
					finalImpList.add(imp1);
				}
			}
		}
		
		//System.out.println("Flagged List Size: " + flaggedImps.size());
		
		return impList;
	}
	
	public boolean checkImpExists(Implicant impTerm, List<Implicant> impList) {
		boolean itExists = false;
		for(int i=0; i<impList.size(); i++) {
			if(impTerm.equals(impList.get(i))) {
				itExists = true;
			}
		}
		return itExists;
	}
	
	
	public void doQuineMcCluskey()
	{	
		//System.out.println("Running quine McClusky...");
			
		finalImpList = new ArrayList<Implicant>();
		boolean continueSteps = true;
		int numOps = 0;
		
	
		ArrayList<Integer> deadColumns = new ArrayList<Integer>();
		ArrayList<Integer> deadRows = new ArrayList<Integer>();
		
		int maxMinterm = 0;
		for(int i=0; i<implicantList.size(); i++) {
			int curSize = implicantList.get(i).getBitVector().getSize();
			if(curSize > maxMinterm) {
				maxMinterm = curSize;
			}
		}
		
		//Create Column Vectors to reduce time for column checking
		ArrayList<BitVector> columnVectors = new ArrayList<BitVector>();
		for(int i=0; i<maxMinterm; i++) {
			BitVector columnVec = colVector(implicantList, i); 
			columnVectors.add(columnVec);
		}
		
		
		while(continueSteps) {	
			numOps = 0;
	
			/* Step One: Look for essential primes and update table accordingly */
			//Check all the bits of each column
			for(int i=0; i<maxMinterm; i++) {
			//Only check column if not in the deadColumns arrayList	
		
			if(!deadColumns.contains(i)) {
				/*System.out.print("deadColumns : ");
				for(int k=0; k<deadColumns.size();k++) {
					System.out.print(deadColumns.get(k) + ", "); 
				}
				System.out.println();
				
				System.out.print("deadRows : ");
				for(int k=0; k<deadRows.size();k++) {
					System.out.print(deadRows.get(k) + ", "); 
				}
				System.out.println();
				*/
				
					int mintermCount = 0; //the number of 1's in a column
					boolean impExists = false;
					int rowNdx = 0;
					for(int j=0; j<implicantList.size();j++) {
						//Only check row if it is not already flagged as an essential prime
						if(!deadRows.contains(j)) {
							Implicant curImp = implicantList.get(j);
							impExists = curImp.getBitVector().exists(i);
							if(impExists == true) {
								mintermCount++;
								rowNdx = j;
							}
							/*if((j==implicantList.size()-1)) {
								System.out.println("Column Minterm Count: " + mintermCount);
							}*/

							}
						}
						if(mintermCount == 1) {
							//The implicant being checked is an essential prime,
							//so update the rest of the minterms, add this prime to the final list and
							//remove it from the current list being checked. 
							//System.out.println("Essential Prime at Row " + rowNdx + ": " + implicantList.get(rowNdx).getBitVector().toString());
							
							//Add essential prime to the final list
							finalImpList.add(implicantList.get(rowNdx));
							numOps++;
							
							//Add the columns indexes that this implicant crosses off along with its row to their own
							//arrays so they wont be checked again 
							if(!deadRows.contains(rowNdx)) {
								deadRows.add(rowNdx);
							}
							
							for(int k=0; k<implicantList.get(rowNdx).getMinterms().size(); k++) {
								long curMinterm = implicantList.get(rowNdx).getMinterms().get(k); //Any minterm here means this column should
																							//Not be checked again
								if(!deadColumns.contains((int) curMinterm)) {
									deadColumns.add((int) curMinterm);
								}
								//System.out.println(curMinterm);
						}
					}
				}
			}
			
			/* Step Two: Check for and perform any row domination operations */
			
			//Prime the loop by killing bits that should be dead
			ArrayList<BitVector> frozenRowCleanedList = new ArrayList<BitVector>();
			for(int i=0; i<implicantList.size(); i++) {
				BitVector frozenRowCleaned = killBits(implicantList.get(i).getBitVector(), deadColumns, implicantList.get(i).getBitVector().getSize());
				frozenRowCleanedList.add(i, frozenRowCleaned);
			}
			
			for(int i=0; i<frozenRowCleanedList.size(); i++) {
				if(!deadRows.contains(i)) {
					BitVector frozenRow = frozenRowCleanedList.get(i);
					for(int j=0; j<frozenRowCleanedList.size(); j++) {
						if(!deadRows.contains(j) && (i!=j)) {
							BitVector curRow = frozenRowCleanedList.get(j);
							
							//if the frozenRow is a subset of the curRow, add the frozenRow to the deadRows list and break out
							BitVector frozenRowCleaned = killBits(frozenRow, deadColumns, frozenRow.getSize());
							BitVector rowIntersection = frozenRowCleaned.intersection(curRow);
							
							//System.out.println("Frozen ROW: " + i);
							//System.out.println("Cur ROW: " + j);
							//System.out.println("BRF " + Long.toBinaryString(frozenRowCleaned.getBitVectorList().get(0)));
							//System.out.println("BRC " + Long.toBinaryString(curRow.getBitVector().getBitVectorList().get(0)));
							//System.out.println("BRI " + Long.toBinaryString(rowIntersection.getBitVectorList().get(0)));
							//System.out.println("Equality Check: " + frozenRowCleaned.equals(rowIntersection));
							if(frozenRowCleaned.equals(rowIntersection)) {
								//System.out.println("Row " + i + " is now dead");
								if(!deadRows.contains(i)) {
									deadRows.add(i);
									numOps++;
									break;
								}
								
							}
						}
					}
				}
			}
	
			
			/* Step Three: Check for and perform any column domination operations */
			//Prime the column bitVectors with the proper bits killed
			ArrayList <BitVector> cleanedVectors = new ArrayList<BitVector>();
			for(int i=0; i<columnVectors.size();i++) {
				BitVector cleanedCol = killBits(columnVectors.get(i), deadRows, columnVectors.get(i).getSize());
				cleanedVectors.add(cleanedCol);
			}
			
			
			for(int i=0; i<maxMinterm; i++) {
				//Implicant frozenCol = implicantList.get(i);
				
				if(!deadColumns.contains(i)) {
					
					//Generate Frozen Column Bit Vector
					BitVector frozenColumn = columnVectors.get(i); 
					
					for(int j=0; j<maxMinterm; j++) {
						if(!deadColumns.contains(j) && (i!=j)) {
							BitVector curCol = cleanedVectors.get(j);	
							BitVector colIntersection = curCol.intersection(frozenColumn);
							
							//If the frozenCol is a subset of the curCol, then remove the curCol
							if(frozenColumn.equals(colIntersection) && !curCol.isZero() && !frozenColumn.isZero()) {
								if(!deadColumns.contains(i)) {
									deadColumns.add(j);
								}
								//System.out.println("Col " + j + " is now dead");
								numOps++;
							}
						}
					}
					
				}
				
			}
			
			if(numOps <= 0) {
				continueSteps = false;
			}
		}
		
		//Check the remaining minterms in the quine McClusky table to see if there are any prime implicants left to collect. 
		for(int i=0; i<implicantList.size(); i++) {
			if(!deadRows.contains(i)) {
				finalImpList.add(implicantList.get(i));
			}
		}
		
		
		this.implicantList = new ArrayList<Implicant>();
		this.implicantList = this.finalImpList;
		
		//System.out.println("Terminating McClusky...");
	}
	
	public BitVector killBits(BitVector vector, ArrayList<Integer> deadImps, int vectorSize) {
		for(int i=0; i<deadImps.size(); i++) {
			//System.out.println("Unset at position " + deadImps.get(i));
			vector.unset(deadImps.get(i));
		}
		
		return vector;
	}
	
	/*
	 * Given an implicant list and a specified column to generate, 
	 * create a bitVector for the specified column. 
	 */
	public BitVector colVector(List<Implicant> impTbl, int colNum) {
		
		BitVector colVector = new BitVector(impTbl.size());
		for(int i=0; i<impTbl.size(); i++) {
			if(impTbl.get(i).getBitVector().exists(colNum)) {
				colVector.set(i);
			}
		}
		return colVector;
	}
	
	public void doPetricksMethod()
	{
		//System.out.println("Starting Petricks...");
		
		//Initialize the list of lists to store implicants
		ArrayList<ArrayList<BitVector>> vectorLists = new ArrayList<ArrayList<BitVector>>(); 
		
		//find the largest minterm in the current impList
		int maxMinterm = 0;
		for(int i=0; i<implicantList.size(); i++) {
			int curSize = implicantList.get(i).getBitVector().getSize();
			if(curSize > maxMinterm) {
				maxMinterm = curSize;
			}
		}
		

		
		//Create Column Vectors 
		ArrayList<BitVector> columnVectors = new ArrayList<BitVector>();
		for(int i=0; i<maxMinterm; i++) {	
			BitVector columnVec = colVector(implicantList, i); 
			columnVectors.add(columnVec);
		}
		
		//the size of the column vectors TEST
		//System.out.println("The column vectors have size: " + columnVectors.size());
		
		//1. Create a list of lists, where each list in the list is a list of implicants which all have a specified 
		//	 minterms are covered. 
		for(int i = 0; i <= columnVectors.size(); i++)
		{   
			ArrayList<BitVector> subList = new ArrayList<BitVector>();
			vectorLists.add(i, subList);
		}
		

		for(int i=0; i<columnVectors.size(); i++) {
			//At column I, loop through each row bitVector
			for(int j=0; j<implicantList.size(); j++) {
					boolean hasBit = implicantList.get(j).getBitVector().exists(i);
					//System.out.println("Bitvector at column " + i + " row " + j + ": " + Long.toBinaryString(implicantList.get(j).getBitVector().getBitVectorList().get(0)) + " Bit Exists: " + implicantList.get(j).getBitVector().exists(i)); 
					if(hasBit) {
						//A minterm exists at row j, column i. Add its row indicator to the vector list
						BitVector rowIndicator = new BitVector(implicantList.size());
						rowIndicator.set(j);
						vectorLists.get(i).add(rowIndicator);
					}
			}
		}
		
		ArrayList<ArrayList<BitVector>> vecListsToRemove = new ArrayList<ArrayList<BitVector>>(); 
		for(int i=0; i<vectorLists.size(); i++) {
			if(vectorLists.get(i).isEmpty()) {
				//System.out.println("Empty At " + i);
				vecListsToRemove.add(vectorLists.get(i));
			}
		}
		
		vectorLists.removeAll(vecListsToRemove);
		
		
		//Print the original list for testing
		/*
		System.out.println("The Original List: ");
		for(int i=0; i<vectorLists.size(); i++) {
			System.out.print("L" + (i+1) + ": ");
			for(int j=0; j<vectorLists.get(i).size(); j++) {
				System.out.print(Long.toBinaryString(vectorLists.get(i).get(j).getBitVectorList().get(0)) + ", "); 
			}
			System.out.println("");
		}*/
		
			
		//2. Perform cartesian product and subset check calculations 
		//	 and simplify the equation into its minimal form
		while(vectorLists.size() > 1) {			
			ArrayList<BitVector> vecList1 = vectorLists.get(0);
			ArrayList<BitVector> vecList2 = vectorLists.get(1);
			ArrayList<BitVector> vecProductList = new ArrayList<BitVector>();
			
			for(int i=0; i<vecList1.size(); i++ ) {
				for(int j=0; j<vecList2.size(); j++) {
					
					//Calculate vector products
					BitVector vec1 = vecList1.get(i);
					BitVector vec2 = vecList2.get(j);
					BitVector vecProduct = vec1.union(vec2);
					
					//Output `print test 
					//System.out.println(" VEC 1: " + Long.toBinaryString(vec1.getBitVectorList().get(0)));
					//System.out.println(" VEC 2: " + Long.toBinaryString(vec2.getBitVectorList().get(0)));
					//System.out.println("PRODUCT: " + Long.toBinaryString(vecProduct.getBitVectorList().get(0)));
					
					
					//Add each product to the vecProduct List
					boolean vecExists = false;
					for(int k=0; k<vecProductList.size(); k++) {
						if(vecProductList.get(k).equals(vecProduct)) {
							vecExists = true;
						}
					}
					
					if(!vecExists) {
						vecProductList.add(vecProduct);
					}
				}
			}
			
			/*
			System.out.print("The Non-simplified list: ");
			for(int i=0; i<vecProductList.size(); i++) {
				System.out.print(Long.toBinaryString(vecProductList.get(i).getBitVectorList().get(0)) + ", ");
			}
			System.out.println("");
			*/
			
			//Look for any supersets of other minterms in the vecProduct List and remove them
			ArrayList<BitVector> vecsToRemove = new ArrayList<BitVector>();
			
			for(int i=0; i < vecProductList.size(); i++) {
				for(int j=0; j < vecProductList.size(); j++) {
					if(i!=j) {
						BitVector vecA = vecProductList.get(i);
						BitVector vecB =  vecProductList.get(j);
						BitVector vecINT = vecA.intersection(vecB);
						//System.out.println("Vec A: " + Long.toBinaryString(vecA.getBitVectorList().get(0))); 
						//System.out.println("Vec B: " + Long.toBinaryString(vecB.getBitVectorList().get(0)));
						//System.out.println("Vec Intersection: "  + Long.toBinaryString(vecINT.getBitVectorList().get(0)));
						if(vecINT.equals(vecA) && !vecA.equals(vecB)) {
							//vector B is a superset of vector A so remove it
							//System.out.println("Vector " + j + " With String " + Long.toBinaryString(vecProductList.get(j).getBitVectorList().get(0)) + " Has been removed" );
							vecsToRemove.add(vecB);
						}
				
					}	
				}
			}
			
			/*
			System.out.print("Vecs to remove: "); 
			for(int i=0; i<vecsToRemove.size(); i++) {
				System.out.print(Long.toBinaryString(vecsToRemove.get(i).getBitVectorList().get(0)) + ", ");
			}
			System.out.println("");
			*/
			vecProductList.removeAll(vecsToRemove);
			
			/*
			//The Simplified List
			System.out.print("The simplified list: ");
			for(int i=0; i<vecProductList.size(); i++) {
				System.out.print(Long.toBinaryString(vecProductList.get(i).getBitVectorList().get(0)) + ", ");
			}
			System.out.println("");
			*/
			
			//Remove list 0 and list 1 in vectorLists, add the vecProductList to the beginning of the list
			if(vecProductList.size() > 0) {
				vectorLists.set(0, vecProductList);
			}
			vectorLists.remove(1);		
			
			/*
			//The current Lists
			System.out.println("Vector Lists Size: " + vectorLists.size()); 
			 for(int i=0; i<vectorLists.size(); i++) {
				 System.out.print("Vector " + i + ": ");
				 for(int j=0; j<vectorLists.get(i).size(); j++) {
					 System.out.print(Long.toBinaryString(vectorLists.get(i).get(j).getBitVectorList().get(0)) + ", ");
				 }
				 System.out.println("");
			 }
		*/	
		}	 
		
		

		// System.out.println("Num in minimal cover after Petrecks: " + smallestBitCount);
		
		//3. Now that the equation is in its minimal form, look for the bitvectors with the lowest amount of 1's
		//	 and choose it as the solution for the set of implicants containing the minimal cover, convert it to its 
		//   corresponding implicants
		//The final Lists
		 int smallestBitCount = -1;
		 BitVector minimalVector = new BitVector(0);
		 for(int i=0; i<vectorLists.size(); i++) {
			for(int j=0; j<vectorLists.get(i).size(); j++) {
				//System.out.println("Final Vector " + j + ": " + Long.toBinaryString(vectorLists.get(i).get(j).getBitVectorList().get(0))); 
				//System.out.println("Minimal Cover" + j + ": " + Long.bitCount(vectorLists.get(i).get(j).getBitVectorList().get(0))); 
				int curBitCount = 0;
				for(int k=0; k<vectorLists.get(i).get(j).getBitVectorList().size(); k++) {
					curBitCount = curBitCount + Long.bitCount(vectorLists.get(i).get(j).getBitVectorList().get(k));
				}
				
				if((smallestBitCount == -1) || (curBitCount < smallestBitCount)) {
					smallestBitCount = curBitCount;
					minimalVector = vectorLists.get(i).get(j);
				}
			}
		 }
		
		
		//Recreate the implicant list with the minimal cover
		 ArrayList<Implicant> newImpList = new ArrayList<Implicant>();
		 for(int i=0; i<implicantList.size(); i++) {
			 if(minimalVector.exists(i)) {
				 newImpList.add(implicantList.get(i));
			 }
		 }
		 this.implicantList = new ArrayList<Implicant>();
		 this.implicantList.addAll(newImpList);
		 
		
		//System.out.println("Terminating Petricks...");
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
