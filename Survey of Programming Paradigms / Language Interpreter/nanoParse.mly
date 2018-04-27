%{
(* See this for a tutorial on ocamlyacc 
 * http://plus.kaist.ac.kr/~shoh/ocaml/ocamllex-ocamlyacc/ocamlyacc-tutorial/
 *)
open Nano 
%}

%token <int> Num
%token True False
%token <string> ID
%token EOF
%token LET REC IN 
%token FUN ARROW 
%token IF THEN ELSE
%token PLUS MINUS MUL DIV
%token COLONCOLON SEMI LBRAC RBRAC BRAC
%token LT LE NE AND OR EQ
%token LPAREN RPAREN

%start exp 
%type <Nano.expr> exp 
%%

exp: 
	| FUN ID ARROW exp			 	{ Fun ($2, $4) }
	| IF exp THEN exp ELSE exp   	{ If ($2, $4, $6) }
	| LET ID EQ exp IN exp 			{ Let ($2,$4,$6) }
	| LET REC ID EQ exp IN exp 		{ Letrec ($3,$5,$7) }
	| exp0							{ $1 }

exp0:
	| exp0 OR exp1					{ Bin($1, Or, $3) }
	| exp1							{ $1 }

exp1:
 	| exp1 AND exp2					{ Bin($1, And, $3) }
 	| exp2							{ $1 }

exp2:
	| exp2 EQ expEC					{ Bin($1, Eq, $3) }
	| exp2 NE expEC					{ Bin($1, Ne, $3) }
	| exp2 LE expEC					{ Bin($1, Le, $3) }
	| exp2 LT expEC					{ Bin($1, Lt, $3) }
	| expEC							{ $1 }

expEC: 
	| exp3 COLONCOLON expEC 		{ Bin($1, Cons, $3) }
	| LBRAC exp3 SEMI expEC			{ Bin($2, Cons, $4) }
	| exp3 SEMI expEC				{ Bin($1, Cons, $3) }
	| exp3 RBRAC					{ Bin($1, Cons, NilExpr) }
	| exp3							{ $1 }

exp3:
	| exp3 PLUS exp4				{ Bin($1, Plus, $3) }
	| exp3 MINUS exp4				{ Bin($1, Minus, $3) }
	| exp4							{ $1 }
	
exp4:
	| exp4 MUL exp5					{ Bin($1, Mul, $3) }
	| exp4 DIV exp5					{ Bin($1, Div, $3) }
	| exp5							{ $1 }

exp5:
	| exp5 exp6 					{ App($1, $2) }
	| exp6							{ $1 }

exp6:
	| LBRAC RBRAC					{ NilExpr }
	| Num                        	{ Const $1 }
	| ID 						 	{ Var $1 }  
	| True						 	{ True }
	| False 					 	{ False }
	| LPAREN exp RPAREN			 	{ $2 }