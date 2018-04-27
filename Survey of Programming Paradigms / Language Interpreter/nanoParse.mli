type token =
  | Num of (int)
  | True
  | False
  | ID of (string)
  | EOF
  | LET
  | REC
  | IN
  | FUN
  | ARROW
  | IF
  | THEN
  | ELSE
  | PLUS
  | MINUS
  | MUL
  | DIV
  | COLONCOLON
  | SEMI
  | LBRAC
  | RBRAC
  | BRAC
  | LT
  | LE
  | NE
  | AND
  | OR
  | EQ
  | LPAREN
  | RPAREN

val exp :
  (Lexing.lexbuf  -> token) -> Lexing.lexbuf -> Nano.expr
