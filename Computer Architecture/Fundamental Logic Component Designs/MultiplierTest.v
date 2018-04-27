`timescale 1ns/1ps

module MultiplierTest();

parameter width = 16;

reg clock;
reg Begin;

reg signed [width-1:0] A;
reg signed [width-1:0] B;
wire signed [(2*width)-1:0] prod;
wire signed [(2*width)-1:0] realProd;
wire done;
assign realProd = $signed(A)*$signed(B);

integer i;
reg temp;
integer passCount = 0;
integer failCount = 0;
integer startClockCount;
integer tempClockCount;
integer accumClockCount = 0;
reg [width-1:0] taps = 64'hD004;


Multiplier#(
	.width(width)
)
mult(
	.CLK(clock),
	.Multiplicand(A),
	.Multiplier(B),
	.Begin(Begin),
	.Done(done),
	
	.Product(prod)
);

initial begin
	clock <= 0;
	startClockCount <= 0;
	Begin <= 1;
	
	A <= 16'h8000;
	B <= 16'h0045;
	for (i = 0; i < 1000; i = i + 1)
	begin
		@(posedge clock)
		Begin <= 0;
		@(posedge clock)
		tempClockCount <= startClockCount;
		@(posedge done)
		#0.1
		tempClockCount <= startClockCount - tempClockCount;
		#0.1
		accumClockCount <= tempClockCount + accumClockCount;
		if (prod == realProd) 
			passCount = passCount + 1;
		else failCount = failCount + 1;
		#1
		Begin <= 1;
		A = A[0] == 0 ? A : A ^ taps;
		temp = A[0];
		A = A >> 1;
		A[63] = temp;
		B = B[0] == 0 ? B : B ^ taps;
		temp = B[0];
		B = B >> 1;
		B[63] = temp;
	end
	
	A <= 16'hFE04;
	B <= 16'hDF9A;
	for (i = 0; i < 1000; i = i + 1)
	begin
		@(posedge clock)
		Begin <= 0;
		@(posedge clock)
		tempClockCount <= startClockCount;
		@(posedge done)
		#0.1
		tempClockCount <= startClockCount - tempClockCount;
		#0.1
		accumClockCount <= tempClockCount + accumClockCount;
		if (prod == realProd) 
			passCount = passCount + 1;
		else failCount = failCount + 1;
		#1
		Begin <= 1;
		A = A[0] == 0 ? A : A ^ taps;
		temp = A[0];
		A = A >> 1;
		A[63] = temp;
		B = B[0] == 0 ? B : B ^ taps;
		temp = B[0];
		B = B >> 1;
		B[63] = temp;
	end
	
	A <= 16'hFFFF;
	B <= 16'h8000;
	for (i = 0; i < 1000; i = i + 1)
	begin
		@(posedge clock)
		Begin <= 0;
		@(posedge clock)
		tempClockCount <= startClockCount;
		@(posedge done)
		#0.1
		tempClockCount <= startClockCount - tempClockCount;
		#0.1
		accumClockCount <= tempClockCount + accumClockCount;
		if (prod == realProd) 
			passCount = passCount + 1;
		else failCount = failCount + 1;
		#1
		Begin <= 1;
		A = A[0] == 0 ? A : A ^ taps;
		temp = A[0];
		A = A >> 1;
		A[63] = temp;
		B = B[0] == 0 ? B : B ^ taps;
		temp = B[0];
		B = B >> 1;
		B[63] = temp;
	end
	
	A <= 16'hDAE9;
	B <= 16'hA921;
	for (i = 0; i < 1000; i = i + 1)
	begin
		@(posedge clock)
		Begin <= 0;
		@(posedge clock)
		tempClockCount <= startClockCount;
		@(posedge done)
		#0.1
		tempClockCount <= startClockCount - tempClockCount;
		#0.1
		accumClockCount <= tempClockCount + accumClockCount;
		if (prod == realProd) 
			passCount = passCount + 1;
		else failCount = failCount + 1;
		#1
		Begin <= 1;
		A = A[0] == 0 ? A : A ^ taps;
		temp = A[0];
		A = A >> 1;
		A[63] = temp;
		B = B[0] == 0 ? B : B ^ taps;
		temp = B[0];
		B = B >> 1;
		B[63] = temp;
	end
	
	A <= 16'h8000;
	B <= 16'hFE92;
	for (i = 0; i < 999; i = i + 1)
	begin
		@(posedge clock)
		Begin <= 0;
		@(posedge clock)
		tempClockCount <= startClockCount;
		@(posedge done)
		#0.1
		tempClockCount <= startClockCount - tempClockCount;
		#0.1
		accumClockCount <= tempClockCount + accumClockCount;
		if (prod == realProd) 
			passCount = passCount + 1;
		else failCount = failCount + 1;
		#1
		Begin <= 1;
		A = A[0] == 0 ? A : A ^ taps;
		temp = A[0];
		A = A >> 1;
		A[63] = temp;
		B = B[0] == 0 ? B : B ^ taps;
		temp = B[0];
		B = B >> 1;
		B[63] = temp;
	end

	#1
	Begin <= 1;
	A <= 16'h8000;
	B <= 16'h8000;
	@(posedge clock)
	Begin <= 0;
	@(posedge clock)
	tempClockCount <= startClockCount;
	@(posedge done)
	#0.1
	tempClockCount <= startClockCount - tempClockCount;
	#0.1
	accumClockCount <= tempClockCount + accumClockCount;
	if (prod == realProd) 
		passCount = passCount + 1;
	else failCount = failCount + 1;
	
	#0.1
	$display ("Passed %d, Failed %d", passCount, failCount);
	$display ("Number of cycles is %d", accumClockCount);
	$display ("Number of tests is %d", 5000);
	$display ("Average number of cycles is %f", accumClockCount * 1.0 / 5000);
end

always @(*)
begin
	#1 clock <= ~clock;
end

always @(posedge clock) 
begin
	startClockCount <= startClockCount + 1;
end

endmodule

