module Lab4Minterms(
input a,
input b,
input c,
input d,
input e,
input f,
input g,
output out
);
assign out = (~a&~b&~c&~d&~e&~f&g) | (~a&~b&~c&~d&~e&f&~g) | (~a&~b&~c&~d&~e&f&g) | (~a&~b&~c&~d&e&~f&~g) | (~a&~b&~c&~d&e&~f&g) | (~a&~b&~c&~d&e&f&~g) | (~a&~b&~c&d&~e&~f&g) | (~a&~b&~c&d&~e&f&~g) | (~a&~b&~c&d&e&~f&~g) | (~a&~b&~c&d&e&f&g) | (~a&~b&c&~d&~e&~f&~g) | (~a&~b&c&~d&~e&f&~g) | (~a&~b&c&~d&e&~f&g) | (~a&~b&c&~d&e&f&~g) | (~a&~b&c&~d&e&f&g) | (~a&~b&c&d&~e&~f&~g) | (~a&~b&c&d&~e&~f&g) | (~a&~b&c&d&~e&f&~g) | (~a&~b&c&d&~e&f&g) | (~a&~b&c&d&e&~f&~g) | (~a&~b&c&d&e&f&g) | (~a&b&~c&~d&~e&~f&~g) | (~a&b&~c&~d&e&~f&~g) | (~a&b&~c&~d&e&f&g) | (~a&b&~c&d&~e&~f&g) | (~a&b&~c&d&~e&f&g) | (~a&b&~c&d&e&f&~g) | (~a&b&~c&d&e&f&g) | (~a&b&c&~d&~e&~f&g) | (~a&b&c&~d&e&~f&g) | (~a&b&c&~d&e&f&~g) | (~a&b&c&~d&e&f&g) | (~a&b&c&d&~e&~f&~g) | (~a&b&c&d&~e&f&~g) | (~a&b&c&d&~e&f&g) | (a&~b&~c&~d&~e&~f&~g) | (a&~b&~c&~d&~e&~f&g) | (a&~b&~c&~d&~e&f&~g) | (a&~b&~c&~d&~e&f&g) | (a&~b&~c&~d&e&f&~g) | (a&~b&~c&~d&e&f&g) | (a&~b&~c&d&~e&~f&~g) | (a&~b&~c&d&~e&~f&g) | (a&~b&~c&d&~e&f&~g) | (a&~b&~c&d&e&~f&~g) | (a&~b&~c&d&e&~f&g) | (a&~b&~c&d&e&f&~g) | (a&~b&~c&d&e&f&g) | (a&~b&c&~d&~e&~f&~g) | (a&~b&c&~d&~e&f&~g) | (a&~b&c&~d&~e&f&g) | (a&~b&c&~d&e&~f&~g) | (a&~b&c&~d&e&f&~g) | (a&~b&c&~d&e&f&g) | (a&~b&c&d&~e&~f&~g) | (a&~b&c&d&~e&~f&g) | (a&~b&c&d&~e&f&g) | (a&~b&c&d&e&~f&~g) | (a&~b&c&d&e&f&~g) | (a&~b&c&d&e&f&g) | (a&b&~c&~d&~e&~f&g) | (a&b&~c&~d&~e&f&~g) | (a&b&~c&~d&~e&f&g) | (a&b&~c&~d&e&~f&~g) | (a&b&~c&~d&e&f&~g) | (a&b&~c&~d&e&f&g) | (a&b&~c&d&~e&~f&~g) | (a&b&~c&d&~e&~f&g) | (a&b&~c&d&~e&f&~g) | (a&b&~c&d&e&~f&~g) | (a&b&~c&d&e&f&~g) | (a&b&~c&d&e&f&g) | (a&b&c&~d&~e&~f&g) | (a&b&c&~d&~e&f&g) | (a&b&c&~d&e&~f&g) | (a&b&c&~d&e&f&~g) | (a&b&c&d&~e&~f&g) | (a&b&c&d&~e&f&~g) | (a&b&c&d&e&f&g);
endmodule
