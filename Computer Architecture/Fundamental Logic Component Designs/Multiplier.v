module Multiplier#(
	parameter width = 16
)
(
	input CLK,
	input [width-1:0] Multiplicand,
	input [width-1:0] Multiplier,
	input Begin,
	
	output reg [(2*width)-1:0] Product,
	output reg Done
);


wire Ground;
assign Ground = 0;

wire Init, End, Shift, Load, corrBit, rLoad, AS, opDone, prevBit, multdMSB;
reg F1;
wire [width-1:0] multr, multd, ACCSUM, SUM;

wire beginComp = ~Begin;


assign opDone = F1 ^ multr[0];
assign rLoad = opDone & Load;
assign AS = multr[0];

assign prevBit = ACCSUM[width-1];
assign multdMSB = multd[width-1];

assign corrBit = prevBit & ~(AS & multdMSB);


wire doShift;
//-----------------Modifications should start here-----------------
assign doShift = Shift | ~opDone;
//increment num overrides
//-----------------Modifications should end here-----------------

Controller#(
	.width(width)
)
ctrl(
	.CLK(CLK),
	.Begin(Begin),
	.DoneShift(doShift),
	
	.End(End),
	.Init(Init),
	.Shift(Shift),
	.LoadA(Load)
);

Shifter#(.bitwidth(width))
	s_acc(
		.load(rLoad),
		.shift_in(corrBit),
		.clock(CLK),
		.clear(Init),
		.data_in(SUM),
		.shift(doShift),
		
		.data_out(ACCSUM)
	);

Shifter#(.bitwidth(width))
	s_multd(
		.load(Init),
		.shift_in(Ground),
		.clock(CLK),
		.clear(Ground),
		.data_in(Multiplicand),
		.shift(Ground),
		
		.data_out(multd)
	);

Shifter#(.bitwidth(width))
	s_multr(
		.load(Init),
		.shift_in(ACCSUM[0]),
		.clock(CLK),
		.clear(Ground),
		.data_in(Multiplier),
		.shift(doShift),
		
		.data_out(multr)
	);

addsub#(.width(width))
	addersub
	(
		.a(ACCSUM),
		.b(multd),
		.oper(AS),
		
		.res(SUM)
	);	
	
always @(posedge CLK or negedge beginComp)
begin

	if (~beginComp)
	begin
		F1 <= 0;
	end
	else
	begin
		if (Shift)
		begin
			F1 <= multr[0];
		end
		else
		begin
			F1 <= F1;
		end
	end
end

//assign Product = ACCSUM;

always @(*)
begin
	Product[width-1:0] <= multr;
	Product[(2*width)-1:width] <= ACCSUM;//[width-2:0];
	Done <= End;
end

endmodule
