package sbccunittest;

import static org.junit.Assert.assertEquals;

import org.junit.*;

import xmlvalidator.*;


public class BasicStringStackTester {

	BasicStringStack stack;


	@Before
	public void setUp() throws Exception {
		stack = new BasicStringStack();
	}


	@After
	public void tearDown() throws Exception {
	}


	@Test
	public void testPush() {
		stack.push("B");
		assertEquals("B", stack.peek(0));
	}


	@Test
	public void testPop() {
		stack.push("C");
		stack.push("D");
		assertEquals(stack.pop(), "D");
		stack.pop();
		assertEquals(null, stack.pop());
	}


	@Test
	public void testExercise() {
		stack.push("A");
		stack.push("B");
		stack.push("C");
		stack.push("D");
		assertEquals(stack.peek(0), "D");
		assertEquals(4, stack.getCount());
		assertEquals("A", stack.peek(3));
		assertEquals(stack.pop(), "D");
		assertEquals(3, stack.getCount());

		stack.pop();
		stack.pop();
		assertEquals("A", stack.pop());
		assertEquals(0, stack.getCount());

		stack.pop();
		stack.pop();
		assertEquals(null, stack.pop());
	}

}
