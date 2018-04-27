/* Programming Assignment 1: Exercise B
 *
 * Now we will expand the program of Exercise A to call Fork () multiple times.
 * Run the program below and answer the following questions:
 *
 * 1. Can you explain the order of what gets printed based on the code?
 *
 * 2. Why does the first child execute before the second child?
 *
 * 3. Move the two print statements executed by the parent to just after
 * where it says HERE.  How can you print the pid of the first child?
 *
 */

#include <stdio.h>
#include "aux.h"
#include "umix.h"

void Main ()
{
	int pid = 0;

	if ((pid = Fork ()) == 0) {

		/* first child executes here */

		Printf ("I am the first child, my pid is %d\n", Getpid ()); //4th (Getpid = 2)
		Printf("My forked pid is %d\n", pid); //5th (pid = 0)
		Exit ();
	}



	if ((pid = Fork ()) == 0) {

		/* second child executes here */

		Printf ("I am the second child, my pid is %d\n", Getpid ()); //6th (Getpid() = 3)
		Printf("My forked pid is %d\n", pid); //7th (pid =0)
		Exit ();
	}

	/* HERE */
	Printf ("I am the parent, my pid is %d\n", Getpid ()); //1st (Getpid = 1)
	Printf ("I just created a child process whose pid is %d\n", pid); //2nd (pid = 2)

	Printf ("I (the parent) just created a second child process whose pid is %d\n", pid); //3rd (pid = 3)
}
