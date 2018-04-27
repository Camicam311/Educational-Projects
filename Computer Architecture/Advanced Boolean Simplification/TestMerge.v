module TestMerge(
input a,
input b,
input c,
input d,
input e,
output out
);
assign out = (~a&~b&~c&~d) | (~a&~b&~c&~e) | (~a&~b&~d&~e) | (~a&~c&~d&~e) | 
(~a&~b&~c&e) | (~a&~b&~d&e) | (~a&~c&~d&e) | (~a&~b&~c&d) | (~a&~b&d&~e) |
 (~a&~c&d&~e) | (~a&~b&c&~d) | (~a&~b&c&~e) | (~a&c&~d&~e) | (~a&b&~c&~d) |
  (~a&b&~c&~e) | (~a&b&~d&~e) | (b&~c&~d&~e) | (~a&~c&d&e) | (~b&~c&d&e) | 
  (~b&c&d&~e) | (~a&b&~c&e) | (b&~c&~d&e) | (~a&b&~c&d) | (b&~c&d&~e) | 
  (a&b&~c&~d) | (a&b&~c&~e) | (~a&b&d&e) | (b&~c&d&e) | (a&~b&d&e) | 
  (a&~c&d&e) | (a&~b&c&d) | (a&c&d&~e) | (a&b&~c&e) | (a&b&d&~e) |
   (a&b&~c&d) | (b&c&d&e) | (a&c&d&e) | (a&b&c&d) | (a&b&d&e);
endmodule
