package addressbook;

import java.io.*;
import java.util.*;

import org.eclipse.swt.*;
import org.eclipse.swt.events.*;
import org.eclipse.swt.graphics.*;
import org.eclipse.swt.layout.*;
import org.eclipse.swt.widgets.*;
import org.eclipse.wb.swt.*;

public class MainWindow {

	protected Shell shell;
	Properties appSettings = new Properties();
	Cursor defaultCursor; // To change the cursor to an arrow at any point after MainWindow() has executed, use
							// shell.setCursor(defaultCursor);
	Cursor waitCursor; // To change the cursor to an hourglass at any point after MainWindow() has executed, use
						// shell.setCursor(waitCursor);
	private Composite clientArea;
	private Label statusText;
	private Text searchText;
	private Text phoneNumber;
	private Label curNameLabel;
	private ContactList ab = new AddressBook();
	private Text email;
	private Text firstName;
	private Text lastName;
	private Label firstText;
	private Label lastText;
	private Label phoneText;
	private Label emailText;
	String abFile;


	/**
	 * Launch the application.
	 * 
	 * @param args
	 */
	public static void main(String[] args) {
		try {
			MainWindow window = new MainWindow();
			window.open();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}


	/**
	 * Open the window.
	 */
	public void open() {
		Display display = Display.getDefault();
		createContents();

		setPreferences();
		waitCursor = shell.getDisplay().getSystemCursor(SWT.CURSOR_WAIT);
		defaultCursor = shell.getDisplay().getSystemCursor(SWT.CURSOR_ARROW);
		clientArea.setFocus();

		shell.open();
		shell.layout();
		while (!shell.isDisposed()) {
			if (!display.readAndDispatch()) {
				display.sleep();
			}
		}
	}


	// Load application settings from .ini file
	private void setPreferences() {
		try {
			appSettings.load(new FileInputStream("appsettings.ini"));
		} catch (FileNotFoundException e) {
		} catch (IOException e) {
		}

		// By default, center window
		int width = Integer.parseInt(appSettings.getProperty("width", "640"));
		int height = Integer.parseInt(appSettings.getProperty("height", "480"));
		Rectangle screenBounds = shell.getDisplay().getBounds();
		int defaultTop = (screenBounds.height - height) / 2;
		int defaultLeft = (screenBounds.width - width) / 2;
		int top = Integer.parseInt(appSettings.getProperty("top", String.valueOf(defaultTop)));
		int left = Integer.parseInt(appSettings.getProperty("left", String.valueOf(defaultLeft)));
		shell.setSize(width, height);
		shell.setLocation(left, top);
		saveShellBounds();
	}


	// Save window location in appSettings hash table
	private void saveShellBounds() {
		// Save window bounds in app settings
		Rectangle bounds = shell.getBounds();
		appSettings.setProperty("top", String.valueOf(bounds.y));
		appSettings.setProperty("left", String.valueOf(bounds.x));
		appSettings.setProperty("width", String.valueOf(bounds.width));
		appSettings.setProperty("height", String.valueOf(bounds.height));
	}


	/**
	 * Create contents of the window.
	 */
	protected void createContents() {
		shell = new Shell();
		shell.addControlListener(new ShellControlListener());
		shell.addDisposeListener(new ShellDisposeListener());
		shell.setImage(SWTResourceManager.getImage(MainWindow.class, "/images/16x16.png"));
		shell.setSize(640, 480);
		shell.setText("Change This Title");
		GridLayout gl_shell = new GridLayout(1, false);
		gl_shell.marginHeight = 3;
		gl_shell.marginWidth = 3;
		shell.setLayout(gl_shell);

		Menu menu = new Menu(shell, SWT.BAR);
		shell.setMenuBar(menu);
		shell.setText("Joshua Wheeler's Address Book");

		MenuItem fileMenuItem = new MenuItem(menu, SWT.CASCADE);
		fileMenuItem.setText("&File");

		Menu menu_1 = new Menu(fileMenuItem);
		fileMenuItem.setMenu(menu_1);

		MenuItem newFileMenuItem = new MenuItem(menu_1, SWT.NONE);
		newFileMenuItem.setImage(SWTResourceManager.getImage(MainWindow.class, "/images/new.gif"));
		newFileMenuItem.setText("&New");

		MenuItem openFileMenuItem = new MenuItem(menu_1, SWT.NONE);
		openFileMenuItem.addSelectionListener(new OpenFileMenuItemSelectionListener());
		openFileMenuItem.setImage(SWTResourceManager.getImage(MainWindow.class, "/images/open.gif"));
		openFileMenuItem.setText("&Open");

		MenuItem closeFileMenuItem = new MenuItem(menu_1, SWT.NONE);
		closeFileMenuItem.setText("&Close");

		new MenuItem(menu_1, SWT.SEPARATOR);

		MenuItem saveFileMenuItem = new MenuItem(menu_1, SWT.NONE);
		saveFileMenuItem.setImage(SWTResourceManager.getImage(MainWindow.class, "/images/save.gif"));
		saveFileMenuItem.setText("&Save");

		new MenuItem(menu_1, SWT.SEPARATOR);

		MenuItem exitMenuItem = new MenuItem(menu_1, SWT.NONE);
		exitMenuItem.addSelectionListener(new ExitMenuItemSelectionListener());
		exitMenuItem.setText("E&xit");

		MenuItem helpMenuItem = new MenuItem(menu, SWT.CASCADE);
		helpMenuItem.setText("&Help");

		Menu menu_2 = new Menu(helpMenuItem);
		helpMenuItem.setMenu(menu_2);

		MenuItem aboutMenuItem = new MenuItem(menu_2, SWT.NONE);
		aboutMenuItem.addSelectionListener(new AboutMenuItemSelectionListener());
		aboutMenuItem.setText("&About");

		ToolBar toolBar = new ToolBar(shell, SWT.FLAT | SWT.RIGHT);
		toolBar.setLayoutData(new GridData(SWT.FILL, SWT.CENTER, false, false, 1, 1));

		ToolItem newToolItem = new ToolItem(toolBar, SWT.NONE);
		newToolItem.setToolTipText("New");
		newToolItem.setImage(SWTResourceManager.getImage(MainWindow.class, "/images/new.gif"));

		ToolItem openToolItem = new ToolItem(toolBar, SWT.NONE);
		openToolItem.addSelectionListener(new OpenToolItemSelectionListener());
		openToolItem.setToolTipText("Open");
		openToolItem.setImage(SWTResourceManager.getImage(MainWindow.class, "/images/open.gif"));

		ToolItem saveToolItem = new ToolItem(toolBar, SWT.NONE);
		saveToolItem.addSelectionListener(new SaveToolItemSelectionListener());
		saveToolItem.setToolTipText("Save");
		saveToolItem.setImage(SWTResourceManager.getImage(MainWindow.class, "/images/save.gif"));

		Label label = new Label(shell, SWT.SEPARATOR | SWT.HORIZONTAL | SWT.SHADOW_IN);
		label.setLayoutData(new GridData(SWT.FILL, SWT.CENTER, false, false, 1, 1));

		clientArea = new Composite(shell, SWT.NONE);
		clientArea.setLayout(new FillLayout(SWT.HORIZONTAL));
		clientArea.setLayoutData(new GridData(SWT.FILL, SWT.FILL, true, true, 1, 1));
		
		Composite composite = new Composite(clientArea, SWT.NONE);
		
		curNameLabel = new Label(composite, SWT.NONE);
		curNameLabel.setFont(SWTResourceManager.getFont("Segoe UI", 12, SWT.BOLD));
		curNameLabel.setBounds(10, 77, 240, 25);
		curNameLabel.setText("[No Contacts Loaded]");
		
		Button nextButton = new Button(composite, SWT.NONE);
		nextButton.addSelectionListener(new NextButtonSelectionListener());
		nextButton.setBounds(175, 271, 75, 25);
		nextButton.setText("Next ");
		
		Button previousButton = new Button(composite, SWT.NONE);
		previousButton.addSelectionListener(new PreviousButtonSelectionListener());
		previousButton.setBounds(94, 271, 75, 25);
		previousButton.setText("Previous");
		
		Button firstButton = new Button(composite, SWT.NONE);
		firstButton.addSelectionListener(new FirstButtonSelectionListener());
		firstButton.setBounds(10, 271, 75, 25);
		firstButton.setText("First");
		
		Button lastButton = new Button(composite, SWT.NONE);
		lastButton.addSelectionListener(new LastButtonSelectionListener());
		lastButton.setBounds(256, 271, 75, 25);
		lastButton.setText("Last");
		
		searchText = new Text(composite, SWT.BORDER);
		searchText.setText("Search ");
		searchText.setBounds(10, 46, 140, 25);
		
		Label searchByLastLabel = new Label(composite, SWT.NONE);
		searchByLastLabel.setBounds(10, 21, 121, 15);
		searchByLastLabel.setText("Search By Last Name: ");
		
		Button goButton = new Button(composite, SWT.NONE);
		goButton.addSelectionListener(new GoButtonSelectionListener());
		goButton.setBounds(156, 46, 75, 25);
		goButton.setText("Go");
		
		Button deleteThisContactButton = new Button(composite, SWT.NONE);
		deleteThisContactButton.addSelectionListener(new DeleteThisContactButtonSelectionListener());
		deleteThisContactButton.setBounds(10, 312, 141, 25);
		deleteThisContactButton.setText("Delete This Contact");
		
		Label addNewContactLabel = new Label(composite, SWT.NONE);
		addNewContactLabel.setFont(SWTResourceManager.getFont("Segoe UI", 12, SWT.BOLD));
		addNewContactLabel.setBounds(365, 77, 200, 25);
		addNewContactLabel.setText("Add New Contact: ");
		
		phoneNumber = new Text(composite, SWT.BORDER);
		phoneNumber.setBounds(468, 192, 140, 21);
		
		Button addButton = new Button(composite, SWT.NONE);
		addButton.addSelectionListener(new AddButtonSelectionListener());
		addButton.setBounds(540, 271, 75, 25);
		addButton.setText("Add");
		
		Label firstNameLabel = new Label(composite, SWT.NONE);
		firstNameLabel.setBounds(365, 121, 75, 15);
		firstNameLabel.setText("First Name");
		
		Label lastNameLabel = new Label(composite, SWT.NONE);
		lastNameLabel.setBounds(365, 159, 75, 15);
		lastNameLabel.setText("Last Name");
		
		Label phoneNumberLabel = new Label(composite, SWT.NONE);
		phoneNumberLabel.setBounds(365, 195, 97, 15);
		phoneNumberLabel.setText("Phone Number");
		
		Label emailLabel = new Label(composite, SWT.NONE);
		emailLabel.setBounds(365, 231, 45, 15);
		emailLabel.setText("Email");
		
		email = new Text(composite, SWT.BORDER);
		email.setBounds(468, 228, 140, 21);
		
		firstName = new Text(composite, SWT.BORDER);
		firstName.setBounds(468, 118, 140, 21);
		
		lastName = new Text(composite, SWT.BORDER);
		lastName.setBounds(468, 156, 140, 21);
		
		Label entryFNameLabel = new Label(composite, SWT.NONE);
		entryFNameLabel.setFont(SWTResourceManager.getFont("Segoe UI", 9, SWT.BOLD));
		entryFNameLabel.setBounds(10, 121, 75, 15);
		entryFNameLabel.setText("First Name: ");
		
		Label entryLNameLabel = new Label(composite, SWT.NONE);
		entryLNameLabel.setFont(SWTResourceManager.getFont("Segoe UI", 9, SWT.BOLD));
		entryLNameLabel.setBounds(10, 159, 67, 15);
		entryLNameLabel.setText("Last Name:");
		
		Label entryPhoneLabel = new Label(composite, SWT.NONE);
		entryPhoneLabel.setFont(SWTResourceManager.getFont("Segoe UI", 9, SWT.BOLD));
		entryPhoneLabel.setBounds(10, 195, 89, 15);
		entryPhoneLabel.setText("Phone Number:");
		
		Label entryEmailLabel = new Label(composite, SWT.NONE);
		entryEmailLabel.setFont(SWTResourceManager.getFont("Segoe UI", 9, SWT.BOLD));
		entryEmailLabel.setBounds(10, 231, 55, 15);
		entryEmailLabel.setText("Email:");
		
		phoneText = new Label(composite, SWT.NONE);
		phoneText.setBounds(105, 195, 226, 15);
		phoneText.setText("N/A");
		
		lastText = new Label(composite, SWT.NONE);
		lastText.setBounds(105, 159, 226, 15);
		lastText.setText("N/A");
		
		firstText = new Label(composite, SWT.NONE);
		firstText.setBounds(105, 121, 226, 15);
		firstText.setText("N/A");
		
		emailText = new Label(composite, SWT.NONE);
		emailText.setBounds(105, 231, 226, 15);
		emailText.setText("N/A");

		Label label_1 = new Label(shell, SWT.SEPARATOR | SWT.HORIZONTAL | SWT.SHADOW_IN);
		label_1.setLayoutData(new GridData(SWT.FILL, SWT.CENTER, false, false, 1, 1));

		Composite statusArea = new Composite(shell, SWT.NONE);
		statusArea.setBackground(SWTResourceManager.getColor(SWT.COLOR_WIDGET_BACKGROUND));
		FillLayout fl_statusArea = new FillLayout(SWT.HORIZONTAL);
		fl_statusArea.marginWidth = 2;
		fl_statusArea.marginHeight = 2;
		statusArea.setLayout(fl_statusArea);
		GridData gd_statusArea = new GridData(SWT.FILL, SWT.CENTER, true, false, 1, 1);
		gd_statusArea.widthHint = 125;
		statusArea.setLayoutData(gd_statusArea);

		statusText = new Label(statusArea, SWT.NONE);
		statusText.setText("Ready");

	}


	private void handleFileOpenRequest() {
		FileDialog dialog = new FileDialog(shell, SWT.OPEN);
		String filename = dialog.open();
		this.abFile = filename;
		if (filename != null) {
			shell.setText(filename);
		}
		try {
			ab.loadFile(filename);
			setCurrentContactText();
		} catch (Exception e1) {
			e1.printStackTrace();
		}
	}


	private class ExitMenuItemSelectionListener extends SelectionAdapter {

		@Override
		public void widgetSelected(SelectionEvent e) {
			try {
				handleSaveSelectionRequest();
				appSettings.store(new FileOutputStream("appsettings.ini"), "");
			} catch (Exception ex) {
			}
			shell.dispose();
		}
	}


	private class OpenFileMenuItemSelectionListener extends SelectionAdapter {

		@Override
		public void widgetSelected(SelectionEvent e) {
			handleFileOpenRequest();
		}
	}


	private class OpenToolItemSelectionListener extends SelectionAdapter {

		@Override
		public void widgetSelected(SelectionEvent e) {
			handleFileOpenRequest();
		}
	}


	private class AboutMenuItemSelectionListener extends SelectionAdapter {

		@Override
		public void widgetSelected(SelectionEvent e) {
			MessageBox message = new MessageBox(shell, SWT.OK | SWT.ICON_INFORMATION);
			message.setText("About Change_This_Title");
			message.setMessage("Change this about message\n\nApplicationName v1.0");
			message.open();
		}
	}


	private class ShellDisposeListener implements DisposeListener {

		public void widgetDisposed(DisposeEvent arg0) {
			try {
				// Save app settings to file
				appSettings.store(new FileOutputStream("appsettings.ini"), "");
			} catch (Exception ex) {
			}
		}
	}


	private class ShellControlListener extends ControlAdapter {

		@Override
		public void controlMoved(ControlEvent e) {
			try {
				saveShellBounds();
			} catch (Exception ex) {
				setStatus(ex.getMessage());
			}
		}


		@Override
		public void controlResized(ControlEvent e) {
			try {
				saveShellBounds();
			} catch (Exception ex) {
				setStatus(ex.getMessage());
			}
		}
	}
	private class NextButtonSelectionListener extends SelectionAdapter {
		@Override
		public void widgetSelected(SelectionEvent e) {
			ab.goNext();
			setCurrentContactText();
		}
	}
	
	private class PreviousButtonSelectionListener extends SelectionAdapter {
		@Override
		public void widgetSelected(SelectionEvent e) {
			ab.goPrevious();
			setCurrentContactText();
		}
	}
	private class LastButtonSelectionListener extends SelectionAdapter {
		@Override
		public void widgetSelected(SelectionEvent e) {
			ab.goLast();
			setCurrentContactText();
		}
	}
	private class FirstButtonSelectionListener extends SelectionAdapter {
		@Override
		public void widgetSelected(SelectionEvent e) {
			ab.goFirst();
			setCurrentContactText();
		}
	}
	private class DeleteThisContactButtonSelectionListener extends SelectionAdapter {
		@Override
		public void widgetSelected(SelectionEvent e) {
			ab.delete();
			setCurrentContactText();
		}
	}
	private class AddButtonSelectionListener extends SelectionAdapter {
		@Override
		public void widgetSelected(SelectionEvent e) {
			String fName = firstName.getText();
			String lName = lastName.getText();
			String phone = phoneNumber.getText();
			String emailAddr = email.getText();
			Contact contact = new Contact(lName,fName,phone,emailAddr);
			ab.insert(contact);
			setCurrentContactText();
		}
	}
	private class GoButtonSelectionListener extends SelectionAdapter {
		@Override
		public void widgetSelected(SelectionEvent e) {
			String query = searchText.getText().toLowerCase();
			if(ab.goContact(query)){
				setCurrentContactText();
			} else {
				searchText.setText("Last Name Not Found");
			}
		}
	}
	private class SaveToolItemSelectionListener extends SelectionAdapter {
		@Override
		public void widgetSelected(SelectionEvent e) {
			handleSaveSelectionRequest();
		}
	}
	
	private void handleSaveSelectionRequest(){
		try {
			if (this.abFile != null) {
				ab.saveFile(abFile);
			} else {
				ab.saveFile("contacts.xml");
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	};

	private void setCurrentContactText() {
		if(ab.getCount() == 0) {
			curNameLabel.setText("[No Contacts Loaded]");
			firstText.setText("N/A");
			lastText.setText("N/A");
			phoneText.setText("N/A");
			emailText.setText("N/A");
			
			
		} else {
			curNameLabel.setText(ab.getCurrent().getLastName().toUpperCase() + ", "
				+ ab.getCurrent().getFirstName().toUpperCase());
			firstText.setText(ab.getCurrent().getFirstName());
			lastText.setText(ab.getCurrent().getLastName());
			phoneText.setText(ab.getCurrent().getPhoneNumber());
			emailText.setText(ab.getCurrent().getEmail());
		}
	}

	private void setStatus(String message) {
		statusText.setText(message);
	}
}
