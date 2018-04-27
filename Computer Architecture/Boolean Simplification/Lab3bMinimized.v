module Lab3bMinimized(
input a,
input b,
input c,
input d,
input e,
input f,
output out
);
assign out = (a&b) | (~a&c) | (d&e);
endmodule
