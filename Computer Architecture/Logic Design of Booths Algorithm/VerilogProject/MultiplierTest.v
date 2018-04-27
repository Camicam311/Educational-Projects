`timescale 1ns/1ps

module MultiplierTest();

parameter width = 16;

reg clock;
reg [width-1:0] multiplicand;
reg [width-1:0] multiplier;
reg Begin;
wire [(2*width)-1:0] Q_out;

reg [(2*width)-1:0] realOut;

Multiplier#(
	.width(width)
)
mult(
	.CLK(clock),
	.Multiplicand(multiplicand),
	.Multiplier(multiplier),
	.Begin(Begin),
	
	.Product(Q_out)
);

initial begin
	clock <= 0;
	multiplicand <= 16'h8000;
	multiplier <= 16'h0045;
	Begin <= 1;
	#5
	Begin <= 0;
	realOut <= $signed(multiplicand) * $signed(multiplier);
	#66
	if (realOut == Q_out) 
		$display("Pass");
	else $display("Fail");
	#1
	multiplicand <= 16'h07FF;
	multiplier <= 16'h00FF;
	Begin <= 1;
	#5
	Begin <= 0;
	realOut <= $signed(multiplicand) * $signed(multiplier);
	#66
	if (realOut == Q_out) 
		$display("Pass");
	else $display("Fail");
	#1
	multiplicand <= 16'hFFFF;
	multiplier <= 16'h00FF;
	Begin <= 1;
	#5
	Begin <= 0;
	realOut <= $signed(multiplicand) * $signed(multiplier);
	#66
	if (realOut == Q_out) 
		$display("Pass");
	else $display("Fail");
end

always @(*)
begin
	#1 clock <= ~clock;
end

endmodule

