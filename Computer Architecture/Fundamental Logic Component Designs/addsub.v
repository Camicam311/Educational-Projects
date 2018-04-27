 module addsub#(parameter width=16)(
	 input        oper,
	 input  [width-1:0] a,
	 input  [width-1:0] b,
	 output [width-1:0] res
 );
 
 reg [width-1:0] rese;
 
 always @(a or b or oper)
 begin
    if (!oper)
       rese = a + b;
    else
       rese = a - b;
 end
 
 assign res = rese;
endmodule