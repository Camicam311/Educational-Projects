package xmlvalidator;

public class BasicStringStack implements StringStack {
	protected int arraySize = 10;
	protected int arraySizeIncr = 10;
	protected String items[] = new String[arraySize];
	public int count = 0;
	
	@Override
	public void push(String item) {
		if(count == arraySize) {
			arraySize += arraySizeIncr;
			String tempItems[] = new String[arraySize];
			for(int i = 0; i < count;i++){
				tempItems[i] = items[i];
			}
			
			items = tempItems;
		}
		
		items[count++] = item;
	}

	@Override
	public String pop() {
		if(count == 0)
			return null;
		else {
			String item = items[count - 1];
			items[--count] = null;
			return item;
		}
	}

	@Override
	public String peek(int position) {
		if(count == 0)
			return null;
		else
			return items[count - position - 1];
		
	}

	@Override
	public int getCount() {
		return this.count;
	}

}
