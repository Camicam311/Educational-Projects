(* 
   List.map
   List.fold_left
   List.fold_right
   List.split
   List.combine
   List.length
   List.append
   List.rev

   See http://caml.inria.fr/pub/docs/manual-ocaml/libref/List.html for
   documentation.
*)



(* Do not change the skeleton code! The point of this assignment is to figure
 * out how the functions can be written this way (using fold). You may only
 * replace the   failwith "to be implemented"   part. *)


(*****************************************************************)
(******************* 1. Warm Up   ********************************)
(*****************************************************************)
let sqsum xs = 
  let f a x = a + (x*x) in
  let base = 0 in
    List.fold_left f base xs

let pipe fs = 
  let f a x = (fun c -> x(a c)) in
  let base = (fun b -> b) in
    List.fold_left f base fs

let rec sepConcat sep sl = match sl with 
  | [] -> ""
  | h :: t -> 
      let f a x = a^sep^x in
      let base = h in
      let l = t in
        List.fold_left f base l

let stringOfList f l = "["^sepConcat "; " (List.map f l)^"]"

(*****************************************************************)
(******************* 2. Big Numbers ******************************)
(*****************************************************************)
let rec clone x n = 
  if (n > 0) then x::(clone x (n-1))
  else []
;;

let rec padZero l1 l2 =
  if ( (List.length l1 == List.length l2)) then (l1, l2) else (* lengths are equal and padding is complete*)
  if (List.length l1 < List.length l2) then padZero ([0]@l1) l2 (* l1 is shorter, so pad it *)
  else padZero l1 ([0]@l2) (* l2 is shorter, so pad it *)
;;
let rec removeZero l = match l with
  | h::t -> if(h=0) then removeZero t else l  
  | [] -> []

let bigAdd l1 l2 = 
  let add (l1, l2) = 
    let f a x = 
      let (d1, d2) = x in
      let dsum = d1 + d2 in
      match a with 
      | ([1], acc_h::acc_t) -> 
       if (dsum + 1) > 9 then ([1], [dsum - 10 + 1]@acc_h::acc_t) else ([0], [dsum + 1]@acc_h::acc_t)
      | ([0], acc_h::acc_t) ->
       if dsum > 9 then ([1], [dsum - 10]@acc_h::acc_t) else ([0], [dsum]@acc_h::acc_t)
      | ([0], []) -> if dsum > 9 then ([1], [dsum - 10]) else ([0], [dsum]) 
      | (_, _) -> ([],[]) in
    let base = ([0],[]) in
    let args = List.combine (List.rev (0::l2)) (List.rev (0::l1))  in
    let (_, res) = List.fold_left f base args in
      res
  in 
    removeZero (add (padZero l1 l2))

let rec mulByDigit i l = 
    let rec mulHelper i l_mult = 
    if (i == 1) then l_mult else
        mulHelper (i-1) (bigAdd l_mult l) in
    mulHelper i l
    
let bigMul l1 l2 = 
  let f a x = 
    let partial_product = (mulByDigit x l2) in 
    match a with 
    | ([cur_ndx], total_product) -> ([cur_ndx - 1], 
      (bigAdd (partial_product@(clone 0 (List.length l1 - cur_ndx))) total_product)) 
    | (_,_) -> ([],[]) in
  let base = ([List.length l1],[]) in (* On left store list of numbers to add, on right store the answer *)
  let args = List.rev l1 in 
  let (_, res) = List.fold_left f base args in 
    res
;;