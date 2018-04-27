module Controller#(
	parameter width=16
)
(
	input CLK,
	input Begin,
	
	output reg End,
	output reg Init,
	output reg LoadA,
	output reg Shift
);

reg [5:0] counter;
wire begin_in_comp = ~Begin;
wire [5:0] counterinc = counter + 1;

always @(posedge CLK or negedge begin_in_comp)
begin
	if (!begin_in_comp)
	begin
		counter <= 0;
		Init <= 1;
		LoadA <= 0;
		Shift <= 0;
		End <= 0;
	end
	else
	begin
		if (counterinc == (2*width + 1))
		begin
			Init <= 0;
			LoadA <= 0;
			Shift <= 0;
			End <= 1;
		end
		else
		begin
			counter <= counterinc;
			Init <= 0;
			LoadA <= counterinc[0];
			Shift <= ~counterinc[0];
			End <= 0;
		end
		
	end
end

endmodule
