module Adder#(
parameter width=16
)(
//input declarations
input [width-1:0] A_in,
input [width-1:0] B_in,
input opType,

//output declarations
output reg [width-1:0] C_out
);

always@(*)
begin
	if(opType) 
	begin
		 C_out = A_in - B_in;
	end
	else
	begin
		 C_out = A_in + B_in;
	end
end

endmodule