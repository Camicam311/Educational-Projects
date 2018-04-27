package jwheelerjunittutorial.junit.first;

import static org.junit.Assert.*;

import org.junit.*;

public class MyClassTest {

	@Test
	public void testMultiply() {
		MyClass tester = new MyClass();
		assertEquals("Result", 50, tester.multiply(10, 5));
	}
}
