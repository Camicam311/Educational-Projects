import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;


public class Main {
	public static void main (String[] args)
	{
			//Verlog Expression To Generate: assign out = (a&b) | (~a&c) | (b&c);
			String booleanExpression = "ab + a'c + bc + de + def";
			BooleanExpression boEx = new BooleanExpression(booleanExpression);
			boEx.genVerilog("Lab3bUnMinimized");
			boEx.doSimplification();
			boEx.genVerilog("Lab3bMinimized");
	}
}
