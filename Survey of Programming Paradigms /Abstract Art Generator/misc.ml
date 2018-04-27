(*
  print_list 'a list -> string 
  prints all of the elements of a list in order
*)
let rec print_list = function 
[] -> ()
| e::l -> print_int e ; print_string " " ; print_list l ;;

(*
  assoc: int * string * (string * int) list -> int
   that takes a triple (d,k,l) where l is a list of key-value pairs
    [(k1,v1);(k2,v2);...] and finds the first ki that equals k. If such a ki is found, then vi is returned. Otherwise, the default value d is returned.
*)
let rec assoc (d,k,l) =  
   match l with
          | h::t -> 
              (match h with  
                | (name,id) -> 
                    if name = k then (* Check the first element of the head of the list to see if it matches the key, k *)
                      id (* return id if there is a match*)
                    else assoc(d,k,t) (* Keep checking the rest of the list until a match is found *)
            )
          | [] -> d (* There are no more elements in the list and a match was not found, return d *)
;;


(*
  removeDuplicates: a function of type 'a list -> 'a list that takes a list l and returns the list of elements of l 
  with the duplicates, i.e. second, third, etc. occurrences, removed, and where the remaining elements appear 
  in the same order as in l 
*)
let removeDuplicates l = 
  let rec helper (seen,rest) = 
      match rest with 
        [] -> seen
      | h::t -> 
        let seen' = (if (List.mem h seen) then seen else h::seen) in
        let rest' = t in
	     helper (seen',rest')
  in
      List.rev (helper ([],l))
;;


(* Small hint: see how ffor is implemented below *)
let rec wwhile (f,b) = 
    let (b',c') = f b in 
    if (c' = false) then b' else wwhile (f,b')
;;


(* fill in the code wherever it says : failwith "to be written" *)
let rec eq f x = 
      if((f x) = x) then (x, false) 
      else eq f (f x)
;;

let fixpoint (f,b) = wwhile (eq f, b);;



(* ffor: int * int * (int -> unit) -> unit
   Applies the function f to all the integers between low and high
   inclusive; the results get thrown away.
 *)
let rec ffor (low,high,f) = 
  if low>high 
  then () 
  else let _ = f low in ffor (low+1,high,f)
;;


(************** Add Testing Code Here ***************)
let f x = let xx = x*x in (xx,xx<1000);;  (* Used to test wwhile *)
let g x = truncate (1e6 *. cos (1e-6 *. float x));; (* used to test fixpoint *)

print_string ("Search for bob: ");;
print_int (assoc (-1,"bob",[("sorin",85);("jeff",23);("moose",44);("margaret",99)]));;
print_string ("\n");;
print_string ("Search for jeff: ");;
print_int (assoc (-1,"jeff",[("sorin",85);("jeff",23);("moose",44)]));;
print_string ("\n");;
print_string ("TEST removeDuplicates [1;6;2;4;12;2;13;6;9]");;
print_string ("\n");;
print_list (removeDuplicates [1;6;2;4;12;2;13;6;9]);;
print_string ("\n");;
print_string ("TEST wwhile");;
print_string ("\n");;
print_int (wwhile (f, 2));;
print_string ("\n");;
print_string ("TEST fixpoint");;
print_string ("\n");;
print_int (fixpoint (g,0));;
