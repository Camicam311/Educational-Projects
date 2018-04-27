{
  open Nano        (* nano.ml *)
  open NanoParse   (* nanoParse.ml from nanoParse.mly *)
}
rule token = parse
    eof         								{ EOF }
  |	['0'-'9']+ as n							{ Num (int_of_string  n) }
  |	"true"											{ True }
  |	"false"											{ False }
  |	[' ' '\t' '\n' '\r']+				{ token lexbuf }
  | "in"												{ IN }
  | "fun"												{ FUN }
  | "->"												{ ARROW }
  | "if"												{ IF }
  | "then"											{ THEN }
  | "else"											{ ELSE }
  | "let"	 											{ LET }
  | "rec"												{ REC }
  | "="													{ EQ }


  | "+"													{ PLUS }
  | "-"													{ MINUS }
  | "*"													{ MUL }
  | "/"													{ DIV }
  | "<"													{ LT }
  | "<="												{ LE }
  | "!="	 											{ NE }
  | "&&"												{ AND }
  | "||"												{ OR }

  | "("													{ LPAREN }
  | ")"													{ RPAREN }

 
  | "["                        { LBRAC }
  | "]"                        { RBRAC }
  | ";"                         { SEMI }
  | "::"                        { COLONCOLON }

  | ['a'-'z''A'-'Z']+['a'-'z''A'-'Z''0'-'9']* as v		{ ID v }
  | _           										{ raise (MLFailure ("Illegal Character '"^(Lexing.lexeme lexbuf)^"'")) }