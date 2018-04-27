transcript on
if {[file exists rtl_work]} {
	vdel -lib rtl_work -all
}
vlib rtl_work
vmap work rtl_work

vlog -vlog01compat -work work +incdir+C:/Users/Joshs/Desktop/LabTwoVerilog {C:/Users/Joshs/Desktop/LabTwoVerilog/Multiplier.v}
vlog -vlog01compat -work work +incdir+C:/Users/Joshs/Desktop/LabTwoVerilog {C:/Users/Joshs/Desktop/LabTwoVerilog/Controller.v}
vlog -vlog01compat -work work +incdir+C:/Users/Joshs/Desktop/LabTwoVerilog {C:/Users/Joshs/Desktop/LabTwoVerilog/Adder.v}
vlog -vlog01compat -work work +incdir+C:/Users/Joshs/Desktop/LabTwoVerilog {C:/Users/Joshs/Desktop/LabTwoVerilog/Shifter.v}

