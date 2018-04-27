module Shifter#(
	parameter bitwidth = 16
)
(
	input clock,
	input load,
	input shift,
	input clear,
	input shift_in,
	input [bitwidth-1:0] data_in,
	
	output reg [bitwidth-1:0] data_out
);

wire reset = ~clear;

always @(posedge clock or negedge reset)
begin
	if (reset == 0)
	begin
		data_out <= 0;
	end
	else
	begin
		if (load == 1)
		begin
			data_out <= data_in;
			
		end
		else if (shift == 1)
		begin
			data_out[bitwidth-2:0] <= data_out >> 1;
			data_out[bitwidth-1] <= shift_in;
		end
	end
end

endmodule
