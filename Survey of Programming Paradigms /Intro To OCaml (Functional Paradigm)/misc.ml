(* sumList : int list -> int 
 *  (sumList l)  takes an integer list l and returns the sum of the elements of l
 * e.g. sumList 123 is 6
 *) 
let rec sumList l = 
	match l with  (* Keep adding the head until the list is empty. *)
	| [] -> 0 
	| head :: tail -> head + sumList tail
;;

(* digitsOfInt : int -> int list 
 *  (digitsOfInt n)  takes an integer n as an argument and if the integer is positive, 
 *  returns the list of digits of n in the order in which they appear in n
 *)

let rec digitsOfInt n = 
	(* add the last digit to the list until there is nothing left in remaining int *)
	if (n != 0) then 
		let lastDigit = n mod 10 in 
		let remainingInt = (n / 10) in 
	   		digitsOfInt remainingInt@[lastDigit] 
	else []
;;


(* digits : int -> int list
 * (digits n) is the list of digits of n in the order in which they appear
 * in n
 * e.g. (digits 31243) is [3,1,2,4,3]
 *      (digits (-23422) is [2,3,4,2,2]
 *)
 
let digits n = digitsOfInt (abs n)


(* From http://mathworld.wolfram.com/AdditivePersistence.html
 * Consider the process of taking a number, adding its digits, 
 * then adding the digits of the number derived from it, etc., 
 * until the remaining number has only one digit. 
 * The number of additions required to obtain a single digit from a number n 
 * is called the additive persistence of n, and the digit obtained is called 
 * the digital root of n.
 * For example, the sequence obtained from the starting number 9876 is (9876, 30, 3), so 
 * 9876 has an additive persistence of 2 and a digital root of 3.
 *)


(* ***** PROVIDE COMMENT BLOCKS FOR THE FOLLOWING FUNCTIONS ***** *)

(* getHead : 'a list -> 'a
 *  (getHead l) gets the head of the list or fails if head not found
 *)
let getHead l = match l with
	| head::tail -> head
	| _ -> failwith "head of list not found"
;;

(* getTail : 'a list -> 'a list
 *  (getTail l) gets the tail of a list or fails if tail not found
 *)
let getTail l = match l with
	| head::tail -> tail
	| _ -> failwith "tail of list not found"
;;

(* checkPersistence : int -> bool 
 *  (checkPersistence n)  Checks whether or not n is a single digit integer
 *)
let rec checkPersistence n = 
	if (n >= 0 && n <= 9) then true
	else false
;;

(* additivePersistence : int -> int 
 *  (additivePersistence n)  Returns the number of addtions needed to reach additive persistence for n
 *)
let rec additivePersistence n = 
	if (checkPersistence n == false) then
		let new_n = sumList ( digits n ) in  (* add up the digits of n *) 
		(additivePersistence new_n) + 1 (* recursively increment additive persistence *)
	else 0
;;

(* digitalRoot : int -> int 
 *  (digitalRoot n)  Returns the digital root of a number n
 *)
let rec digitalRoot n = 
	if (checkPersistence n == false) then
		let new_n = sumList ( digits n ) in
		(digitalRoot new_n) (* keep adding the digits of n until additive persistence is reached *)
	else n (* return the digital root *) 
;;

(* listReverse : 'a list -> 'a list 
 *  (listReverse l) Reverse the elements of a list
 * 
 *)
let rec listReverse l = 
	match l with 
		| head::tail -> (listReverse tail)@[head] (* Recursively concatenate the front of the list to the end of a new list *) 
		| [] -> []
;;

(* explode : string -> char list 
 * (explode s) is the list of characters in the string s in the order in 
 *   which they appear
 * e.g.  (explode "Hello") is ['H';'e';'l';'l';'o']
 *)
let explode s = 
  let rec _exp i = 
    if i >= String.length s then [] else (s.[i])::(_exp (i+1)) in
  _exp 0
;;

(* listCmp : 'a list -> bool 
 *  (listCmp l1 l2)  check if all of the elements in list l1 are the same of the same order and value as that of list l2
 *)
let rec listCmp l1 l2 = 
	let l1_tl = getTail l1 in
	let l2_tl = getTail l2 in
	if((getHead l1) == (getHead l2)) then
		if((l1_tl == []) && (l2_tl == [])) then
			true (* the lists are empty, all the elements have successfully been verified *)
		else
			listCmp l1_tl l2_tl  (* There are more elements in the list, keep checking until success or fail state is reached*)
	else false (* The elements being checked were not equal, return false*)
;;

(* palindrome : string -> bool
 *  (palindrome w) check if the string is the same both forwards and backwards   
 *)
let palindrome w = 
	let w_list = (explode w) in
	listCmp w_list (listReverse w_list) 
;;