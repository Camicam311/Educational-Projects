exception MLFailure of string

type binop = 
  Plus 
| Minus 
| Mul 
| Div 
| Eq 
| Ne 
| Lt 
| Le 
| And 
| Or          
| Cons

type expr =   
  Const of int 
| True   
| False      
| NilExpr
| Var of string    
| Bin of expr * binop * expr 
| If  of expr * expr * expr
| Let of string * expr * expr 
| App of expr * expr 
| Fun of string * expr    
| Letrec of string * expr * expr
	
type value =  
  Int of int		
| Bool of bool          
| Closure of env * string option * string * expr 
| Nil                    
| Pair of value * value     

and env = (string * value) list

let binopToString op = 
  match op with
      Plus -> "+" 
    | Minus -> "-" 
    | Mul -> "*" 
    | Div -> "/"
    | Eq -> "="
    | Ne -> "!="
    | Lt -> "<"
    | Le -> "<="
    | And -> "&&"
    | Or -> "||"
    | Cons -> "::"

let rec valueToString v = 
  match v with 
    Int i -> 
      Printf.sprintf "%d" i
  | Bool b -> 
      Printf.sprintf "%b" b
  | Closure (evn,fo,x,e) -> 
      let fs = match fo with None -> "Anon" | Some fs -> fs in
      Printf.sprintf "{%s,%s,%s,%s}" (envToString evn) fs x (exprToString e)
  | Pair (v1,v2) -> 
      Printf.sprintf "(%s::%s)" (valueToString v1) (valueToString v2) 
  | Nil -> 
      "[]"

and envToString evn =
  let xs = List.map (fun (x,v) -> Printf.sprintf "%s:%s" x (valueToString v)) evn in
  "["^(String.concat ";" xs)^"]"

and exprToString e =
  match e with
      Const i ->
        Printf.sprintf "%d" i
    | True -> 
        "true" 
    | False -> 
        "false"
    | Var x -> 
        x
    | Bin (e1,op,e2) -> 
        Printf.sprintf "%s %s %s" 
        (exprToString e1) (binopToString op) (exprToString e2)
    | If (e1,e2,e3) -> 
        Printf.sprintf "if %s then %s else %s" 
        (exprToString e1) (exprToString e2) (exprToString e3)
    | Let (x,e1,e2) -> 
        Printf.sprintf "let %s = %s in \n %s" 
        x (exprToString e1) (exprToString e2) 
    | App (e1,e2) -> 
        Printf.sprintf "(%s %s)" (exprToString e1) (exprToString e2)
    | Fun (x,e) -> 
        Printf.sprintf "fun %s -> %s" x (exprToString e) 
    | Letrec (x,e1,e2) -> 
        Printf.sprintf "let rec %s = %s in \n %s" 
        x (exprToString e1) (exprToString e2) 

(*********************** Some helpers you might need ***********************)

let rec fold f base args = 
  match args with [] -> base
    | h::t -> fold f (f(base,h)) t

let listAssoc (k,l) = 
  fold (fun (r,(t,v)) -> if r = None && k=t then Some v else r) None l

(*********************** Your code starts here ****************************)

let lookup (x,evn) = 
  let value = listAssoc(x, evn) in
  match value with 
  | Some v -> v
  | None -> raise (MLFailure ("variable not bound: " ^ x))

let rec eval (evn,e) = 
  match e with 
  | Const n -> Int n
  | NilExpr -> Nil
  | Bin (e1, op, e2) -> let v1 = eval (evn, e1) in
                        let v2 = eval (evn, e2) in
                          (match (v1,op,v2) with
                            | (v1, Cons, v2) -> Pair (v1, v2)
                            | (Int i1,Plus,Int i2) -> Int (i1+i2)
                            | (Int i1,Minus,Int i2) -> Int (i1-i2)
                            | (Int i1,Mul,Int i2) -> Int (i1*i2)
                            | (Int i1,Div,Int i2) -> Int (i1/i2)
                            | (Int i1,Eq,Int i2) -> Bool (i1=i2)
                            | (Bool i1,Eq,Bool i2) -> Bool (i1=i2)
                            | (Int i1,Ne,Int i2) -> Bool (i1!=i2)
                            | (Bool i1,Ne,Bool i2) -> Bool (i1!=i2)
                            | (Int i1,Le,Int i2) -> Bool (i1<=i2)
                            | (Int i1,Lt,Int i2) -> Bool (i1<i2)
                            | (Bool i1,And,Bool i2) -> Bool (i1&&i2)
                            | (Bool i1,Or,Bool i2) -> Bool (i1||i2)
                            | _ -> failwith "bad types for binary operator")
  | If (p,t,f) -> let p = eval (evn, p) in 
                  (match p with 
                   | Bool b ->  if(b) then eval (evn, t) else eval (evn, f) 
                   | _ -> failwith "bad types for conditional operator")
  | Var x -> lookup(x, evn)
  | Letrec (id,e1,e2) ->  let v1 = eval (evn, e1) in
                          (match v1 with 
                          | Closure (evn, None, p, e) -> let new_evn = (id,Closure(evn, Some id, p, e))::evn in
                                                              eval (new_evn, e2) 
                          | _ -> let new_evn = (id,v1)::evn in
                            eval (new_evn, e2)) 
  | Let (id,e1,e2) -> let v1 = eval (evn, e1) in
                      let new_evn = (id,v1)::evn in
                      eval (new_evn, e2)
  | Fun (x, e) -> Closure (evn, None, x, e)    
  | App (e1, e2) -> match e1 with
                    | Var "hd" -> let Pair(hd, tl) = eval(evn, e2) in hd
                    | Var "tl" -> let Pair(hd, tl) = eval(evn, e2) in tl
                    | _ ->  let f = eval(evn, e1) in  
                            let x = eval(evn, e2) in 
                            (match f with
                             | Closure (evn, None, p, e) -> eval((p,x)::evn, e)
                             | Closure (evn, Some n, p, e) -> eval((n,f)::(p,x)::evn, e)
                             | _ ->  failwith "bad types for application operator") 
  | _ -> failwith "Expression not supported"
(**********************     Testing Code  ******************************) 