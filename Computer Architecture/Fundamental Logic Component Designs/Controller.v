module Controller#(
	parameter width=16
)
(
	input CLK,
	input Begin,
	input DoneShift,
	
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
		counter <= 1'b0;
		Init <= 1'b1;
		LoadA <= 1'b0;
		Shift <= 1'b0;
		End <= 1'b0;
	end
	else
	begin
		//-----------------Modifications should start here-----------------
		
		if (counterinc == (width + 1) ) 
		begin
			if((~DoneShift) & (LoadA) & (~Shift)) 
			begin
				Shift <= 1;
				LoadA <= 0;
			end 
			else
			begin
				Init <= 0;
				LoadA <= 0;
				Shift <= 0;
				End <= 1;
			end
		end
		else
		begin
			Init <= 0;
			if(DoneShift | Init) 
			begin
				counter <= counterinc;
				LoadA <= 1;
				Shift <= 0;
			end
			else 
			begin
				LoadA <= 0;
				Shift <= 1;
			end
			End <= 0;
		end
		//-----------------Modifications should end here-----------------
	end
end

endmodule
