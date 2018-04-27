(* Please do not modify the names or types of any of the following
 * type constructors, or predefined functions, unless EXPLICITLY
 * asked to. You will loose points if you do.
 *)


(* REMEMBER TO DOCUMENT ALL FUNCTIONS THAT YOU WRITE OR COMPLETE *)

type expr = 
    VarX
  | VarY
  | Sine              of expr
  | Cosine            of expr
  | Average           of expr * expr
  | Times             of expr * expr
  | Thresh            of expr * expr * expr * expr
  | InvertInRange     of expr
  | FunkyTan          of expr * expr * expr

(* 
  exprToString: expr -> string 
    enables the printing of expressions.
*)
let rec exprToString e = 
      match e with 
      (* Match the expression e to its corresponding data type, print the string of what this type represents *)
      | VarX -> "x"
      | VarY -> "y"
      | Sine e -> "sin(pi*" ^ (exprToString e) ^ ")"
      | Cosine e -> "cos(pi*" ^ (exprToString e) ^ ")"
      | Average (e1,e2)  -> "((" ^ (exprToString e1) ^ "+" ^ (exprToString e2) ^ ")/2)"
      | Times (e1,e2) -> (exprToString e1) ^ "*" ^ (exprToString e2)
      | Thresh (a,b,a_less,b_less) -> "(" ^ (exprToString a) ^ "<" ^ (exprToString b) ^ "?" 
         ^ (exprToString a_less) ^ ":" ^ (exprToString b_less) ^ ")" 
      | InvertInRange e ->  "(if("^(exprToString e)^" >= 1.0 || "^(exprToString e)^" <= -1.0)?1/"^(exprToString e)^":"^(exprToString e)
      | FunkyTan (e1,e2,e3) -> "atan("^(exprToString e1)^"*"^(exprToString e2)^")*"^(exprToString e3)^")*(2.0/pi)"
;;

(* build functions:
     Use these helper functions to generate elements of the expr
     datatype rather than using the constructors directly.  This
     provides a little more modularity in the design of your program *)

let buildX()                       = VarX
let buildY()                       = VarY
let buildSine(e)                   = Sine(e)
let buildCosine(e)                 = Cosine(e)
let buildAverage(e1,e2)            = Average(e1,e2)
let buildTimes(e1,e2)              = Times(e1,e2)
let buildThresh(a,b,a_less,b_less) = Thresh(a,b,a_less,b_less)
let buildInvertInRange(e)          = InvertInRange(e)
let buildFunkyTan(e1,e2,e3)        = FunkyTan(e1,e2,e3)


let pi = 4.0 *. atan 1.0

(*
  eval: expr * float * float -> float 
  takes a triple (e,x,y) and evaluates the expression e at the point x,y
*)
let rec eval (e,x,y) = 
  (* Match the expression e with the data type of the outermost expressions, recursively eval the expressions arguments
    until the base case (e.g. mathes VarX or VarY) is reached
  *)
    match e with
    | VarX -> x
    | VarY -> y
    | Sine e -> sin(pi*.eval(e,x,y))
    | Cosine e -> cos(pi*.eval(e,x,y)) 
    | Average (e1,e2) -> ((eval(e1,x,y) +. eval(e2,x,y)) /. 2.0)
    | Times (e1,e2) -> eval(e1,x,y)*.eval(e2,x,y)
    | Thresh (a,b,a_less,b_less) -> (if(a < b) then eval(a_less,x,y) else eval(b_less,x,y))
    | InvertInRange e -> let num = eval(e,x,y) in
                    (if(num >= 1.0 || num <= -1.0) then 1.0/.num else num)
    | FunkyTan (e1,e2,e3) -> atan((eval(e1,x,y)*.eval(e2,x,y))*.eval(e3,x,y)) *. (2.0/. pi)
;;

(* (eval_fn e (x,y)) evaluates the expression e at the point (x,y) and then
 * verifies that the result is between -1 and 1.  If it is, the result is returned.  
 * Otherwise, an exception is raised.
 *)
let eval_fn e (x,y) = 
  let rv = eval (e,x,y) in
  assert (-1.0 <= rv && rv <= 1.0);
  rv

let sampleExpr =
      buildCosine(buildSine(buildTimes(buildCosine(buildAverage(buildCosine(
      buildX()),buildTimes(buildCosine (buildCosine (buildAverage
      (buildTimes (buildY(),buildY()),buildCosine (buildX())))),
      buildCosine (buildTimes (buildSine (buildCosine
      (buildY())),buildAverage (buildSine (buildX()), buildTimes
      (buildX(),buildX()))))))),buildY())))
;;

let sampleExpr2 =
  buildThresh(buildX(),buildY(),buildSine(buildX()),buildCosine(buildY()))
;;

(************** Add Testing Code Here ***************)
print_string("TEST: ExprToString \n");;
print_string(exprToString (Thresh(VarX,VarY,VarX,(Times(Sine(VarX),Cosine(Average(VarX,VarY)))))));;
print_string("\n TEST: Eval \n");;
print_float (eval (Sine(Average(VarX,VarY)),0.5,-0.5));;
print_string("\n");;
print_float(eval (Sine(Average(VarX,VarY)),0.3,0.3));;
print_string("\n");;
print_float (eval (sampleExpr,0.5,0.2));;
print_string("\n FunkyTan Test \n");;
print_float(eval (FunkyTan(Sine(Average(VarX,VarY)), Cosine(Average(VarX,VarY)), VarY),0.3,0.3));;