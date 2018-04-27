module Shifter#(
	parameter width=16
)
(
//input declarations
input [width-1:0] D_in,
input LD,
input SH,
input SI,
input CLR,
input CLK,

//output declarations
output reg [width-1:0] Q_out
);

always@(posedge CLK  or negedge CLR)

begin
	if(!CLR)
	begin
		Q_out[width-1:0] = 16'h0000;
	end
	else if(LD)
	begin
		Q_out[width-1:0] <= D_in[15:0];
	end
	else if(SH) 
	begin
		Q_out[width-2:0] <= D_in[15:1];
		Q_out[width-1] <= SI;
	end
end
endmodule