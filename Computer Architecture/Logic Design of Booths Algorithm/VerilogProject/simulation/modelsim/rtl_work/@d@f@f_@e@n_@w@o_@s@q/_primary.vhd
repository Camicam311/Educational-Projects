library verilog;
use verilog.vl_types.all;
entity DFF_EN_WO_SQ is
    port(
        D               : in     vl_logic;
        C               : in     vl_logic;
        EN              : in     vl_logic;
        R               : in     vl_logic;
        Q               : out    vl_logic
    );
end DFF_EN_WO_SQ;
