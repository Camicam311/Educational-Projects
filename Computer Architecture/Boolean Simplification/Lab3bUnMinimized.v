module Lab3bUnMinimized(
input a,
input b,
input c,
input d,
input e,
input f,
output out
);
assign out = (a&b) | (~a&c) | (b&c) | (d&e) | (d&e&f);
endmodule
