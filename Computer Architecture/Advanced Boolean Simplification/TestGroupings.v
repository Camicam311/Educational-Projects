module TestGroupings(
input a,
input b,
input c,
input d,
input e,
output out
);
assign out = (~a&~b&~c&~d&~e) | (~a&~b&~c&~d&e) | (~a&~b&~c&d&~e) | (~a&~b&c&~d&~e) | (~a&b&~c&~d&~e) | (~a&~b&~c&d&e) | (~a&~b&c&~d&e) | (~a&~b&c&d&~e) | (~a&b&~c&~d&e) | (~a&b&~c&d&~e) | (~a&b&c&~d&~e) | (a&b&~c&~d&~e) | (~a&b&~c&d&e) | (a&~b&~c&d&e) | (a&~b&c&d&~e) | (a&b&~c&~d&e) | (a&b&~c&d&~e) | (~a&b&c&d&e) | (a&~b&c&d&e) | (a&b&c&d&~e) | (a&b&~c&d&e) | (a&b&c&d&e);
endmodule
