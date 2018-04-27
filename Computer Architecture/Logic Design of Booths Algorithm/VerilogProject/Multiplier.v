module Multiplier#(
	parameter width = 16
)
(
	input CLK,
	input [width-1:0] Multiplicand,
	input [width-1:0] Multiplier,
	input Begin,
	
	output reg [(2*width)-1:0] Product
);

wire End;
wire Init;
wire LoadA;
wire Shift;
wire LDShft;
wire subtract;
wire add;
wire noOP;
wire aMSB;
wire aLSB;
wire mMSB;
wire mLSB;
wire accumulator_SI;
wire isOP;
wire ground;
wire asType;


//Initialize Flip Flop


//Initialize Accumulator 
assign mLSB = Multiplier[0];
assign isOP = (mLSB ^  Q_neg);
assign LDShft = LoadA & (mLSB ^  Q_neg);
assign mMSB = Multiplicand[width-1];
assign subtract_bit = (~Q_neg)&mLSB&(~mMSB);
assign add_bit = (~mLSB)&Q_neg&mMSB;
assign noOP_bit = (~isOP)&LoadA;
assign accumulator_SI = subtract_bit|add_bit|noOP_bit;
assign ground = 0;
assign asType = mLSB&(~Q_neg);


//Instantiate Flip Flop
DFF_EN_WO_SQ D_flop(.D(mLSB),.C(CLK),.EN(Shift),.R(Init),.Q(Q_neg));

//Instantiate Accumulator
Shifter #(.width(width)
	) accumulator(.D_in(accumulator_in), .LD(LDShft), .SH(Shift), .SI(accumulator_SI), .CLR(Init), .CLK(CLK), .Q_out(accumulator_out));

//Instantiate Multiplier Box
Shifter #(.width(width)
	) multiplierBox(.LD(Init), .SH(Shift), .SI(aLSB), .CLR(ground), .CLK(CLK));	
	
//Instantiate Controller	
Controller #(.width(width)
	) control(.CLK(CLK), .Begin(Begin), .End(End), .Init(Init), .LoadA(LoadA), .Shift(Shift));

//Instantiate Adder-Subtractor
Adder #(.width(width)
	) AdderSubtractor17(.A_in(accumulator_out),.B_in(Multiplicand),.opType(asType),.C_out(accumulator_in));

always @ (posedge CLK) 
begin
 reg aMSB;
 reg aLSB;
 reg accumulator_out[15:0];
 aMSB = accumulator_out[15];
 aLSB = accumulator_out[0];
end
	
endmodule


module DFF_EN_WO_SQ( 
 input D,C,EN,R,
 output reg Q);
always @ (posedge C or negedge R)
begin
if (!R) Q <= 0;
else if (EN) Q <= D;
end
endmodule
