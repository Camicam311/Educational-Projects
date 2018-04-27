angular.module('commons',[]).factory('dictService',[function() {

var words =[{
 "word": " AARON", 
 "freq":413
},
{
 "word": " ABABA", 
 "freq":199
},
{
 "word": " ABACK", 
 "freq":64
},
{
 "word": " ABATE", 
 "freq":69
},
{
 "word": " ABBAS", 
 "freq":290
},
{
 "word": " ABBEY", 
 "freq":213
},
{
 "word": " ABBIE", 
 "freq":42
},
{
 "word": " ABBOT", 
 "freq":20
},
{
 "word": " ABDEL", 
 "freq":337
},
{
 "word": " ABDOU", 
 "freq":16
},
{
 "word": " ABDUL", 
 "freq":617
},
{
 "word": " ABEDI", 
 "freq":107
},
{
 "word": " ABELL", 
 "freq":22
},
{
 "word": " ABHOR", 
 "freq":31
},
{
 "word": " ABIDE", 
 "freq":399
},
{
 "word": " ABNER", 
 "freq":41
},
{
 "word": " ABODE", 
 "freq":18
},
{
 "word": " ABORT", 
 "freq":116
},
{
 "word": " ABOUT", 
 "freq":157448
},
{
 "word": " ABOVE", 
 "freq":9322
},
{
 "word": " ABRAM", 
 "freq":118
},
{
 "word": " ABREU", 
 "freq":19
},
{
 "word": " ABUSE", 
 "freq":3181
},
{
 "word": " ABUTS", 
 "freq":25
},
{
 "word": " ABUZZ", 
 "freq":45
},
{
 "word": " ABYEI", 
 "freq":18
},
{
 "word": " ABYSS", 
 "freq":90
},
{
 "word": " ACCOR", 
 "freq":83
},
{
 "word": " ACHES", 
 "freq":54
},
{
 "word": " ACIDS", 
 "freq":113
},
{
 "word": " ACKER", 
 "freq":58
},
{
 "word": " ACORN", 
 "freq":62
},
{
 "word": " ACREE", 
 "freq":14
},
{
 "word": " ACRES", 
 "freq":3298
},
{
 "word": " ACRID", 
 "freq":43
},
{
 "word": " ACTED", 
 "freq":1848
},
{
 "word": " ACTON", 
 "freq":40
},
{
 "word": " ACTOR", 
 "freq":2913
},
{
 "word": " ACUFF", 
 "freq":51
},
{
 "word": " ACUNA", 
 "freq":22
},
{
 "word": " ACURA", 
 "freq":122
},
{
 "word": " ACUTE", 
 "freq":482
},
{
 "word": " ADAGE", 
 "freq":66
},
{
 "word": " ADAIR", 
 "freq":77
},
{
 "word": " ADAMI", 
 "freq":13
},
{
 "word": " ADAMS", 
 "freq":1454
},
{
 "word": " ADAPT", 
 "freq":346
},
{
 "word": " ADDAM", 
 "freq":49
},
{
 "word": " ADDED", 
 "freq":18088
},
{
 "word": " ADDIS", 
 "freq":218
},
{
 "word": " ADELA", 
 "freq":12
},
{
 "word": " ADELE", 
 "freq":34
},
{
 "word": " ADEPT", 
 "freq":132
},
{
 "word": " ADHAM", 
 "freq":45
},
{
 "word": " ADLAI", 
 "freq":28
},
{
 "word": " ADLER", 
 "freq":222
},
{
 "word": " ADMAN", 
 "freq":20
},
{
 "word": " ADMIT", 
 "freq":1325
},
{
 "word": " ADNAN", 
 "freq":110
},
{
 "word": " ADOBE", 
 "freq":320
},
{
 "word": " ADOLF", 
 "freq":302
},
{
 "word": " ADOPT", 
 "freq":1453
},
{
 "word": " ADORE", 
 "freq":25
},
{
 "word": " ADORN", 
 "freq":57
},
{
 "word": " ADULT", 
 "freq":1772
},
{
 "word": " ADVIL", 
 "freq":21
},
{
 "word": " AEGIS", 
 "freq":163
},
{
 "word": " AEGON", 
 "freq":46
},
{
 "word": " AETNA", 
 "freq":425
},
{
 "word": " AFFIX", 
 "freq":16
},
{
 "word": " AFIRE", 
 "freq":149
},
{
 "word": " AFOOT", 
 "freq":77
},
{
 "word": " AFOUL", 
 "freq":126
},
{
 "word": " AFTER", 
 "freq":110102
},
{
 "word": " AGAIN", 
 "freq":14698
},
{
 "word": " AGATE", 
 "freq":15
},
{
 "word": " AGENT", 
 "freq":4167
},
{
 "word": " AGERS", 
 "freq":1172
},
{
 "word": " AGILE", 
 "freq":49
},
{
 "word": " AGING", 
 "freq":1300
},
{
 "word": " AGNES", 
 "freq":116
},
{
 "word": " AGNEW", 
 "freq":85
},
{
 "word": " AGNOS", 
 "freq":266
},
{
 "word": " AGONY", 
 "freq":164
},
{
 "word": " AGREE", 
 "freq":4618
},
{
 "word": " AHEAD", 
 "freq":6993
},
{
 "word": " AHERN", 
 "freq":19
},
{
 "word": " AHMAD", 
 "freq":192
},
{
 "word": " AHMED", 
 "freq":528
},
{
 "word": " AHMET", 
 "freq":23
},
{
 "word": " AHOLD", 
 "freq":55
},
{
 "word": " AHRAM", 
 "freq":39
},
{
 "word": " AICHI", 
 "freq":19
},
{
 "word": " AIDAN", 
 "freq":15
},
{
 "word": " AIDED", 
 "freq":805
},
{
 "word": " AIDES", 
 "freq":3010
},
{
 "word": " AIDID", 
 "freq":83
},
{
 "word": " AIKEN", 
 "freq":111
},
{
 "word": " AILES", 
 "freq":70
},
{
 "word": " AILEY", 
 "freq":35
},
{
 "word": " AIMED", 
 "freq":4534
},
{
 "word": " AIMEE", 
 "freq":15
},
{
 "word": " AIPAC", 
 "freq":42
},
{
 "word": " AIRED", 
 "freq":570
},
{
 "word": " AIRES", 
 "freq":276
},
{
 "word": " AISLE", 
 "freq":240
},
{
 "word": " AKAKA", 
 "freq":59
},
{
 "word": " AKBAR", 
 "freq":223
},
{
 "word": " AKEEM", 
 "freq":14
},
{
 "word": " AKERS", 
 "freq":250
},
{
 "word": " AKIBA", 
 "freq":25
},
{
 "word": " AKIRA", 
 "freq":64
},
{
 "word": " AKRAM", 
 "freq":20
},
{
 "word": " AKRON", 
 "freq":256
},
{
 "word": " ALAIN", 
 "freq":127
},
{
 "word": " ALAMO", 
 "freq":145
},
{
 "word": " ALANE", 
 "freq":43
},
{
 "word": " ALANN", 
 "freq":75
},
{
 "word": " ALARM", 
 "freq":841
},
{
 "word": " ALBAN", 
 "freq":17
},
{
 "word": " ALBEE", 
 "freq":23
},
{
 "word": " ALBUM", 
 "freq":1678
},
{
 "word": " ALCAN", 
 "freq":103
},
{
 "word": " ALCEE", 
 "freq":60
},
{
 "word": " ALCOA", 
 "freq":225
},
{
 "word": " ALCOR", 
 "freq":18
},
{
 "word": " ALDAY", 
 "freq":21
},
{
 "word": " ALDEN", 
 "freq":72
},
{
 "word": " ALDER", 
 "freq":17
},
{
 "word": " ALDUS", 
 "freq":69
},
{
 "word": " ALECK", 
 "freq":13
},
{
 "word": " ALERT", 
 "freq":1187
},
{
 "word": " ALEUT", 
 "freq":15
},
{
 "word": " ALEXI", 
 "freq":16
},
{
 "word": " ALEXY", 
 "freq":26
},
{
 "word": " ALGAE", 
 "freq":95
},
{
 "word": " ALGER", 
 "freq":56
},
{
 "word": " ALGOM", 
 "freq":27
},
{
 "word": " ALIAS", 
 "freq":91
},
{
 "word": " ALIBI", 
 "freq":49
},
{
 "word": " ALICE", 
 "freq":556
},
{
 "word": " ALIEN", 
 "freq":374
},
{
 "word": " ALIEV", 
 "freq":18
},
{
 "word": " ALIGN", 
 "freq":82
},
{
 "word": " ALIKE", 
 "freq":697
},
{
 "word": " ALISA", 
 "freq":14
},
{
 "word": " ALITO", 
 "freq":59
},
{
 "word": " ALIVE", 
 "freq":2268
},
{
 "word": " ALIXE", 
 "freq":40
},
{
 "word": " ALLAH", 
 "freq":84
},
{
 "word": " ALLAN", 
 "freq":542
},
{
 "word": " ALLAY", 
 "freq":153
},
{
 "word": " ALLEN", 
 "freq":2401
},
{
 "word": " ALLEY", 
 "freq":360
},
{
 "word": " ALLIE", 
 "freq":21
},
{
 "word": " ALLIS", 
 "freq":45
},
{
 "word": " ALLOT", 
 "freq":19
},
{
 "word": " ALLOW", 
 "freq":9576
},
{
 "word": " ALLOY", 
 "freq":86
},
{
 "word": " ALLYN", 
 "freq":24
},
{
 "word": " ALOFT", 
 "freq":116
},
{
 "word": " ALOHA", 
 "freq":200
},
{
 "word": " ALOIS", 
 "freq":34
},
{
 "word": " ALONE", 
 "freq":5190
},
{
 "word": " ALONG", 
 "freq":14657
},
{
 "word": " ALOOF", 
 "freq":76
},
{
 "word": " ALOUD", 
 "freq":168
},
{
 "word": " ALPER", 
 "freq":14
},
{
 "word": " ALPHA", 
 "freq":367
},
{
 "word": " ALSOP", 
 "freq":38
},
{
 "word": " ALTAI", 
 "freq":18
},
{
 "word": " ALTAR", 
 "freq":218
},
{
 "word": " ALTER", 
 "freq":717
},
{
 "word": " ALTON", 
 "freq":190
},
{
 "word": " ALTOS", 
 "freq":751
},
{
 "word": " ALTUS", 
 "freq":101
},
{
 "word": " ALUMS", 
 "freq":23
},
{
 "word": " ALVES", 
 "freq":44
},
{
 "word": " ALVIN", 
 "freq":224
},
{
 "word": " AMADO", 
 "freq":24
},
{
 "word": " AMANA", 
 "freq":23
},
{
 "word": " AMANI", 
 "freq":96
},
{
 "word": " AMARI", 
 "freq":12
},
{
 "word": " AMARU", 
 "freq":54
},
{
 "word": " AMASS", 
 "freq":49
},
{
 "word": " AMATI", 
 "freq":14
},
{
 "word": " AMATO", 
 "freq":81
},
{
 "word": " AMAYA", 
 "freq":40
},
{
 "word": " AMAZE", 
 "freq":20
},
{
 "word": " AMBAC", 
 "freq":113
},
{
 "word": " AMBER", 
 "freq":113
},
{
 "word": " AMBOY", 
 "freq":15
},
{
 "word": " AMBRA", 
 "freq":21
},
{
 "word": " AMCOR", 
 "freq":17
},
{
 "word": " AMDEC", 
 "freq":26
},
{
 "word": " AMEND", 
 "freq":330
},
{
 "word": " AMFAC", 
 "freq":20
},
{
 "word": " AMFAR", 
 "freq":12
},
{
 "word": " AMGEN", 
 "freq":345
},
{
 "word": " AMIGA", 
 "freq":29
},
{
 "word": " AMIGO", 
 "freq":22
},
{
 "word": " AMINO", 
 "freq":49
},
{
 "word": " AMIRI", 
 "freq":16
},
{
 "word": " AMISH", 
 "freq":103
},
{
 "word": " AMISS", 
 "freq":43
},
{
 "word": " AMITY", 
 "freq":23
},
{
 "word": " AMJAD", 
 "freq":25
},
{
 "word": " AMMAN", 
 "freq":375
},
{
 "word": " AMMON", 
 "freq":16
},
{
 "word": " AMNON", 
 "freq":32
},
{
 "word": " AMOCO", 
 "freq":507
},
{
 "word": " AMONG", 
 "freq":30604
},
{
 "word": " AMORY", 
 "freq":26
},
{
 "word": " AMPCO", 
 "freq":25
},
{
 "word": " AMPEX", 
 "freq":18
},
{
 "word": " AMPLE", 
 "freq":407
},
{
 "word": " AMPLY", 
 "freq":47
},
{
 "word": " AMRAM", 
 "freq":22
},
{
 "word": " AMREP", 
 "freq":16
},
{
 "word": " AMSCO", 
 "freq":23
},
{
 "word": " AMUSE", 
 "freq":40
},
{
 "word": " AMWAY", 
 "freq":128
},
{
 "word": " ANAGO", 
 "freq":14
},
{
 "word": " ANAND", 
 "freq":55
},
{
 "word": " ANAYA", 
 "freq":45
},
{
 "word": " ANBAA", 
 "freq":12
},
{
 "word": " ANDES", 
 "freq":112
},
{
 "word": " ANDIE", 
 "freq":18
},
{
 "word": " ANDRE", 
 "freq":384
},
{
 "word": " ANFAC", 
 "freq":16
},
{
 "word": " ANFIA", 
 "freq":26
},
{
 "word": " ANGEL", 
 "freq":443
},
{
 "word": " ANGER", 
 "freq":1280
},
{
 "word": " ANGIE", 
 "freq":60
},
{
 "word": " ANGLE", 
 "freq":275
},
{
 "word": " ANGLO", 
 "freq":456
},
{
 "word": " ANGOP", 
 "freq":49
},
{
 "word": " ANGRY", 
 "freq":2012
},
{
 "word": " ANGST", 
 "freq":72
},
{
 "word": " ANGUS", 
 "freq":88
},
{
 "word": " ANHUI", 
 "freq":22
},
{
 "word": " ANISE", 
 "freq":11
},
{
 "word": " ANITA", 
 "freq":431
},
{
 "word": " ANKLE", 
 "freq":418
},
{
 "word": " ANNEX", 
 "freq":187
},
{
 "word": " ANNIE", 
 "freq":231
},
{
 "word": " ANNOY", 
 "freq":30
},
{
 "word": " ANNUL", 
 "freq":28
},
{
 "word": " ANRIG", 
 "freq":14
},
{
 "word": " ANSEL", 
 "freq":25
},
{
 "word": " ANSON", 
 "freq":35
},
{
 "word": " ANTAR", 
 "freq":76
},
{
 "word": " ANTON", 
 "freq":139
},
{
 "word": " ANTSY", 
 "freq":23
},
{
 "word": " ANVIL", 
 "freq":11
},
{
 "word": " ANWAR", 
 "freq":142
},
{
 "word": " AORTA", 
 "freq":25
},
{
 "word": " APACE", 
 "freq":27
},
{
 "word": " APARO", 
 "freq":12
},
{
 "word": " APART", 
 "freq":2217
},
{
 "word": " APHID", 
 "freq":12
},
{
 "word": " APNEA", 
 "freq":17
},
{
 "word": " APPEL", 
 "freq":33
},
{
 "word": " APPLE", 
 "freq":3404
},
{
 "word": " APPLY", 
 "freq":2656
},
{
 "word": " APRIL", 
 "freq":16900
},
{
 "word": " APRON", 
 "freq":38
},
{
 "word": " APTLY", 
 "freq":63
},
{
 "word": " APTOS", 
 "freq":79
},
{
 "word": " AQABA", 
 "freq":106
},
{
 "word": " ARABS", 
 "freq":2171
},
{
 "word": " ARBAT", 
 "freq":19
},
{
 "word": " ARBED", 
 "freq":12
},
{
 "word": " ARBIT", 
 "freq":9
},
{
 "word": " ARBOR", 
 "freq":258
},
{
 "word": " ARCOS", 
 "freq":26
},
{
 "word": " ARDEN", 
 "freq":68
},
{
 "word": " ARDIS", 
 "freq":24
},
{
 "word": " ARDOR", 
 "freq":31
},
{
 "word": " AREAS", 
 "freq":10147
},
{
 "word": " ARENA", 
 "freq":1261
},
{
 "word": " ARENS", 
 "freq":409
},
{
 "word": " ARGON", 
 "freq":16
},
{
 "word": " ARGUE", 
 "freq":2253
},
{
 "word": " ARGUS", 
 "freq":163
},
{
 "word": " ARIAS", 
 "freq":512
},
{
 "word": " ARIEL", 
 "freq":179
},
{
 "word": " ARIES", 
 "freq":27
},
{
 "word": " ARISE", 
 "freq":375
},
{
 "word": " ARKIN", 
 "freq":108
},
{
 "word": " ARKLA", 
 "freq":89
},
{
 "word": " ARLEN", 
 "freq":142
},
{
 "word": " ARLIN", 
 "freq":27
},
{
 "word": " ARMAS", 
 "freq":28
},
{
 "word": " ARMCO", 
 "freq":217
},
{
 "word": " ARMED", 
 "freq":6145
},
{
 "word": " ARMEY", 
 "freq":85
},
{
 "word": " ARMOR", 
 "freq":303
},
{
 "word": " ARNAZ", 
 "freq":52
},
{
 "word": " ARNDT", 
 "freq":9
},
{
 "word": " ARNEL", 
 "freq":17
},
{
 "word": " ARNIE", 
 "freq":45
},
{
 "word": " AROMA", 
 "freq":89
},
{
 "word": " AROSE", 
 "freq":532
},
{
 "word": " ARRAY", 
 "freq":810
},
{
 "word": " ARROW", 
 "freq":277
},
{
 "word": " ARSON", 
 "freq":574
},
{
 "word": " ARTIE", 
 "freq":65
},
{
 "word": " ARTIS", 
 "freq":18
},
{
 "word": " ARTSY", 
 "freq":21
},
{
 "word": " ARTUR", 
 "freq":47
},
{
 "word": " ARTZT", 
 "freq":81
},
{
 "word": " ARUBA", 
 "freq":38
},
{
 "word": " ARVIN", 
 "freq":27
},
{
 "word": " ARYAN", 
 "freq":89
},
{
 "word": " ARYEH", 
 "freq":21
},
{
 "word": " ASAHI", 
 "freq":211
},
{
 "word": " ASCAP", 
 "freq":25
},
{
 "word": " ASCII", 
 "freq":20
},
{
 "word": " ASCOT", 
 "freq":23
},
{
 "word": " ASEAN", 
 "freq":117
},
{
 "word": " ASHBY", 
 "freq":46
},
{
 "word": " ASHER", 
 "freq":74
},
{
 "word": " ASHES", 
 "freq":229
},
{
 "word": " ASHOK", 
 "freq":20
},
{
 "word": " ASIAN", 
 "freq":3274
},
{
 "word": " ASIDE", 
 "freq":3167
},
{
 "word": " ASKAR", 
 "freq":12
},
{
 "word": " ASKED", 
 "freq":21114
},
{
 "word": " ASKEW", 
 "freq":70
},
{
 "word": " ASKIN", 
 "freq":25
},
{
 "word": " ASLAM", 
 "freq":17
},
{
 "word": " ASMAN", 
 "freq":24
},
{
 "word": " ASNER", 
 "freq":44
},
{
 "word": " ASPEN", 
 "freq":253
},
{
 "word": " ASPIN", 
 "freq":585
},
{
 "word": " ASSAB", 
 "freq":18
},
{
 "word": " ASSAD", 
 "freq":558
},
{
 "word": " ASSAM", 
 "freq":61
},
{
 "word": " ASSAY", 
 "freq":17
},
{
 "word": " ASSET", 
 "freq":2771
},
{
 "word": " ASTIN", 
 "freq":11
},
{
 "word": " ASTON", 
 "freq":22
},
{
 "word": " ASTOR", 
 "freq":31
},
{
 "word": " ASTRA", 
 "freq":119
},
{
 "word": " ASTRO", 
 "freq":111
},
{
 "word": " ASWAN", 
 "freq":15
},
{
 "word": " ATARI", 
 "freq":142
},
{
 "word": " ATHEY", 
 "freq":15
},
{
 "word": " ATHOL", 
 "freq":17
},
{
 "word": " ATLAS", 
 "freq":248
},
{
 "word": " ATLEE", 
 "freq":13
},
{
 "word": " ATMEL", 
 "freq":22
},
{
 "word": " ATOLL", 
 "freq":90
},
{
 "word": " ATOMS", 
 "freq":200
},
{
 "word": " ATONE", 
 "freq":21
},
{
 "word": " ATTIC", 
 "freq":125
},
{
 "word": " AUDEN", 
 "freq":24
},
{
 "word": " AUDIO", 
 "freq":696
},
{
 "word": " AUDIT", 
 "freq":1182
},
{
 "word": " AUGER", 
 "freq":33
},
{
 "word": " AUGUR", 
 "freq":27
},
{
 "word": " AUNTS", 
 "freq":47
},
{
 "word": " AUTOS", 
 "freq":415
},
{
 "word": " AUTRY", 
 "freq":45
},
{
 "word": " AVAIL", 
 "freq":105
},
{
 "word": " AVANT", 
 "freq":136
},
{
 "word": " AVERS", 
 "freq":16
},
{
 "word": " AVERT", 
 "freq":383
},
{
 "word": " AVERY", 
 "freq":265
},
{
 "word": " AVIAN", 
 "freq":17
},
{
 "word": " AVILA", 
 "freq":82
},
{
 "word": " AVNET", 
 "freq":26
},
{
 "word": " AVOID", 
 "freq":5509
},
{
 "word": " AVRIL", 
 "freq":317
},
{
 "word": " AVTEX", 
 "freq":30
},
{
 "word": " AWACS", 
 "freq":75
},
{
 "word": " AWAIT", 
 "freq":438
},
{
 "word": " AWAKE", 
 "freq":209
},
{
 "word": " AWAMI", 
 "freq":27
},
{
 "word": " AWARD", 
 "freq":4213
},
{
 "word": " AWARE", 
 "freq":2611
},
{
 "word": " AWASH", 
 "freq":139
},
{
 "word": " AWEIL", 
 "freq":23
},
{
 "word": " AWFUL", 
 "freq":639
},
{
 "word": " AWOKE", 
 "freq":100
},
{
 "word": " AXING", 
 "freq":13
},
{
 "word": " AXIOM", 
 "freq":23
},
{
 "word": " AXLES", 
 "freq":33
},
{
 "word": " AYALA", 
 "freq":61
},
{
 "word": " AYDIN", 
 "freq":22
},
{
 "word": " AYERS", 
 "freq":52
},
{
 "word": " AYRES", 
 "freq":33
},
{
 "word": " AYYAD", 
 "freq":16
},
{
 "word": " AZABU", 
 "freq":31
},
{
 "word": " AZAWI", 
 "freq":12
},
{
 "word": " AZERI", 
 "freq":15
},
{
 "word": " AZHAR", 
 "freq":15
},
{
 "word": " AZOFF", 
 "freq":21
},
{
 "word": " AZTAR", 
 "freq":31
},
{
 "word": " AZTEC", 
 "freq":55
},
{
 "word": " AZURE", 
 "freq":10
},
{
 "word": " AZUSA", 
 "freq":17
},
{
 "word": " BAATH", 
 "freq":151
},
{
 "word": " BABAR", 
 "freq":26
},
{
 "word": " BABEL", 
 "freq":19
},
{
 "word": " BABES", 
 "freq":51
},
{
 "word": " BACHE", 
 "freq":683
},
{
 "word": " BACKS", 
 "freq":833
},
{
 "word": " BACON", 
 "freq":422
},
{
 "word": " BACOT", 
 "freq":20
},
{
 "word": " BACOW", 
 "freq":13
},
{
 "word": " BADEN", 
 "freq":86
},
{
 "word": " BADER", 
 "freq":55
},
{
 "word": " BADGE", 
 "freq":161
},
{
 "word": " BADLY", 
 "freq":1605
},
{
 "word": " BAENA", 
 "freq":58
},
{
 "word": " BAEZA", 
 "freq":19
},
{
 "word": " BAGEL", 
 "freq":54
},
{
 "word": " BAGGY", 
 "freq":66
},
{
 "word": " BAHIA", 
 "freq":58
},
{
 "word": " BAILY", 
 "freq":25
},
{
 "word": " BAINS", 
 "freq":13
},
{
 "word": " BAIRD", 
 "freq":235
},
{
 "word": " BAITS", 
 "freq":15
},
{
 "word": " BAKED", 
 "freq":366
},
{
 "word": " BAKER", 
 "freq":6588
},
{
 "word": " BAKES", 
 "freq":110
},
{
 "word": " BAKKE", 
 "freq":22
},
{
 "word": " BALAH", 
 "freq":14
},
{
 "word": " BALCH", 
 "freq":25
},
{
 "word": " BALES", 
 "freq":184
},
{
 "word": " BALKS", 
 "freq":19
},
{
 "word": " BALKY", 
 "freq":29
},
{
 "word": " BALLS", 
 "freq":567
},
{
 "word": " BALLY", 
 "freq":176
},
{
 "word": " BALMY", 
 "freq":63
},
{
 "word": " BALSA", 
 "freq":9
},
{
 "word": " BALTS", 
 "freq":16
},
{
 "word": " BAMBA", 
 "freq":26
},
{
 "word": " BAMBI", 
 "freq":39
},
{
 "word": " BANAL", 
 "freq":34
},
{
 "word": " BANCA", 
 "freq":182
},
{
 "word": " BANCO", 
 "freq":432
},
{
 "word": " BANDA", 
 "freq":36
},
{
 "word": " BANDO", 
 "freq":14
},
{
 "word": " BANDS", 
 "freq":735
},
{
 "word": " BANGS", 
 "freq":44
},
{
 "word": " BANJO", 
 "freq":72
},
{
 "word": " BANKS", 
 "freq":16451
},
{
 "word": " BANNA", 
 "freq":33
},
{
 "word": " BANOS", 
 "freq":44
},
{
 "word": " BARAK", 
 "freq":28
},
{
 "word": " BARAM", 
 "freq":18
},
{
 "word": " BARBS", 
 "freq":63
},
{
 "word": " BARCO", 
 "freq":399
},
{
 "word": " BARDO", 
 "freq":29
},
{
 "word": " BARED", 
 "freq":36
},
{
 "word": " BARGE", 
 "freq":543
},
{
 "word": " BARKE", 
 "freq":15
},
{
 "word": " BARKS", 
 "freq":23
},
{
 "word": " BARNS", 
 "freq":68
},
{
 "word": " BARON", 
 "freq":303
},
{
 "word": " BARRA", 
 "freq":11
},
{
 "word": " BARRE", 
 "freq":187
},
{
 "word": " BARRO", 
 "freq":26
},
{
 "word": " BARRY", 
 "freq":2789
},
{
 "word": " BARTH", 
 "freq":80
},
{
 "word": " BARTY", 
 "freq":15
},
{
 "word": " BASAL", 
 "freq":14
},
{
 "word": " BASED", 
 "freq":34681
},
{
 "word": " BASEL", 
 "freq":100
},
{
 "word": " BASES", 
 "freq":2674
},
{
 "word": " BASIC", 
 "freq":4255
},
{
 "word": " BASIE", 
 "freq":30
},
{
 "word": " BASIL", 
 "freq":130
},
{
 "word": " BASIN", 
 "freq":502
},
{
 "word": " BASIS", 
 "freq":7412
},
{
 "word": " BASRA", 
 "freq":236
},
{
 "word": " BASSE", 
 "freq":67
},
{
 "word": " BASSO", 
 "freq":13
},
{
 "word": " BATAC", 
 "freq":15
},
{
 "word": " BATCH", 
 "freq":291
},
{
 "word": " BATES", 
 "freq":350
},
{
 "word": " BATHE", 
 "freq":44
},
{
 "word": " BATHS", 
 "freq":98
},
{
 "word": " BATON", 
 "freq":398
},
{
 "word": " BATOR", 
 "freq":57
},
{
 "word": " BATTY", 
 "freq":13
},
{
 "word": " BATUS", 
 "freq":111
},
{
 "word": " BAUER", 
 "freq":164
},
{
 "word": " BAUGH", 
 "freq":23
},
{
 "word": " BAVIS", 
 "freq":18
},
{
 "word": " BAWDY", 
 "freq":31
},
{
 "word": " BAYAN", 
 "freq":13
},
{
 "word": " BAYER", 
 "freq":194
},
{
 "word": " BAYOL", 
 "freq":19
},
{
 "word": " BAYOU", 
 "freq":77
},
{
 "word": " BAZAR", 
 "freq":12
},
{
 "word": " BAZIN", 
 "freq":24
},
{
 "word": " BEACH", 
 "freq":4590
},
{
 "word": " BEADS", 
 "freq":131
},
{
 "word": " BEALE", 
 "freq":32
},
{
 "word": " BEALL", 
 "freq":77
},
{
 "word": " BEALS", 
 "freq":16
},
{
 "word": " BEAMS", 
 "freq":246
},
{
 "word": " BEANS", 
 "freq":657
},
{
 "word": " BEANT", 
 "freq":21
},
{
 "word": " BEARD", 
 "freq":316
},
{
 "word": " BEARS", 
 "freq":1411
},
{
 "word": " BEAST", 
 "freq":284
},
{
 "word": " BEATS", 
 "freq":189
},
{
 "word": " BEATY", 
 "freq":21
},
{
 "word": " BEAUX", 
 "freq":14
},
{
 "word": " BEBOP", 
 "freq":16
},
{
 "word": " BECKY", 
 "freq":126
},
{
 "word": " BEEBE", 
 "freq":58
},
{
 "word": " BEECH", 
 "freq":138
},
{
 "word": " BEEFY", 
 "freq":45
},
{
 "word": " BEELD", 
 "freq":12
},
{
 "word": " BEENE", 
 "freq":20
},
{
 "word": " BEEPS", 
 "freq":14
},
{
 "word": " BEERS", 
 "freq":468
},
{
 "word": " BEESE", 
 "freq":22
},
{
 "word": " BEETS", 
 "freq":58
},
{
 "word": " BEGAN", 
 "freq":22605
},
{
 "word": " BEGAY", 
 "freq":23
},
{
 "word": " BEGET", 
 "freq":13
},
{
 "word": " BEGGS", 
 "freq":31
},
{
 "word": " BEGIN", 
 "freq":9386
},
{
 "word": " BEGUN", 
 "freq":3672
},
{
 "word": " BEHAR", 
 "freq":12
},
{
 "word": " BEIGE", 
 "freq":126
},
{
 "word": " BEING", 
 "freq":37074
},
{
 "word": " BEITA", 
 "freq":49
},
{
 "word": " BEKAA", 
 "freq":139
},
{
 "word": " BELCH", 
 "freq":17
},
{
 "word": " BELEM", 
 "freq":16
},
{
 "word": " BELEW", 
 "freq":12
},
{
 "word": " BELGE", 
 "freq":16
},
{
 "word": " BELIE", 
 "freq":14
},
{
 "word": " BELLA", 
 "freq":82
},
{
 "word": " BELLE", 
 "freq":156
},
{
 "word": " BELLI", 
 "freq":70
},
{
 "word": " BELLO", 
 "freq":31
},
{
 "word": " BELLS", 
 "freq":630
},
{
 "word": " BELLY", 
 "freq":466
},
{
 "word": " BELOV", 
 "freq":19
},
{
 "word": " BELOW", 
 "freq":7870
},
{
 "word": " BELTH", 
 "freq":14
},
{
 "word": " BELTS", 
 "freq":467
},
{
 "word": " BENCH", 
 "freq":832
},
{
 "word": " BENDS", 
 "freq":42
},
{
 "word": " BENES", 
 "freq":31
},
{
 "word": " BENGT", 
 "freq":9
},
{
 "word": " BENIN", 
 "freq":47
},
{
 "word": " BENNO", 
 "freq":18
},
{
 "word": " BENNY", 
 "freq":178
},
{
 "word": " BENTZ", 
 "freq":14
},
{
 "word": " BERET", 
 "freq":83
},
{
 "word": " BERGE", 
 "freq":37
},
{
 "word": " BERIA", 
 "freq":24
},
{
 "word": " BERLE", 
 "freq":88
},
{
 "word": " BERND", 
 "freq":42
},
{
 "word": " BERNE", 
 "freq":24
},
{
 "word": " BERNT", 
 "freq":15
},
{
 "word": " BERON", 
 "freq":24
},
{
 "word": " BERRA", 
 "freq":28
},
{
 "word": " BERRI", 
 "freq":67
},
{
 "word": " BERRY", 
 "freq":475
},
{
 "word": " BERTH", 
 "freq":126
},
{
 "word": " BERYL", 
 "freq":103
},
{
 "word": " BESET", 
 "freq":250
},
{
 "word": " BETSY", 
 "freq":167
},
{
 "word": " BETTE", 
 "freq":166
},
{
 "word": " BETTI", 
 "freq":29
},
{
 "word": " BETTS", 
 "freq":58
},
{
 "word": " BETTY", 
 "freq":614
},
{
 "word": " BEXAR", 
 "freq":31
},
{
 "word": " BEYER", 
 "freq":41
},
{
 "word": " BIBLE", 
 "freq":782
},
{
 "word": " BIDEN", 
 "freq":589
},
{
 "word": " BIEHL", 
 "freq":27
},
{
 "word": " BIGGS", 
 "freq":108
},
{
 "word": " BIGOT", 
 "freq":35
},
{
 "word": " BIHAR", 
 "freq":48
},
{
 "word": " BIKER", 
 "freq":47
},
{
 "word": " BIKES", 
 "freq":181
},
{
 "word": " BILAK", 
 "freq":26
},
{
 "word": " BILBY", 
 "freq":19
},
{
 "word": " BILDT", 
 "freq":22
},
{
 "word": " BILLS", 
 "freq":6244
},
{
 "word": " BILLY", 
 "freq":888
},
{
 "word": " BIMBO", 
 "freq":40
},
{
 "word": " BINDS", 
 "freq":77
},
{
 "word": " BINGE", 
 "freq":220
},
{
 "word": " BINGO", 
 "freq":203
},
{
 "word": " BIRCH", 
 "freq":145
},
{
 "word": " BIRDS", 
 "freq":1493
},
{
 "word": " BIREH", 
 "freq":34
},
{
 "word": " BIRTH", 
 "freq":2754
},
{
 "word": " BISON", 
 "freq":139
},
{
 "word": " BITCH", 
 "freq":48
},
{
 "word": " BITES", 
 "freq":218
},
{
 "word": " BITTY", 
 "freq":8
},
{
 "word": " BIXBY", 
 "freq":15
},
{
 "word": " BJORK", 
 "freq":27
},
{
 "word": " BJORN", 
 "freq":53
},
{
 "word": " BLACH", 
 "freq":15
},
{
 "word": " BLACK", 
 "freq":19533
},
{
 "word": " BLADE", 
 "freq":281
},
{
 "word": " BLAHA", 
 "freq":26
},
{
 "word": " BLAIR", 
 "freq":501
},
{
 "word": " BLAKE", 
 "freq":301
},
{
 "word": " BLAME", 
 "freq":2223
},
{
 "word": " BLANC", 
 "freq":159
},
{
 "word": " BLAND", 
 "freq":165
},
{
 "word": " BLANK", 
 "freq":510
},
{
 "word": " BLARE", 
 "freq":25
},
{
 "word": " BLASE", 
 "freq":25
},
{
 "word": " BLASS", 
 "freq":36
},
{
 "word": " BLAST", 
 "freq":1463
},
{
 "word": " BLATT", 
 "freq":16
},
{
 "word": " BLAZE", 
 "freq":1285
},
{
 "word": " BLEAK", 
 "freq":454
},
{
 "word": " BLECH", 
 "freq":56
},
{
 "word": " BLEED", 
 "freq":93
},
{
 "word": " BLEND", 
 "freq":477
},
{
 "word": " BLESS", 
 "freq":232
},
{
 "word": " BLICK", 
 "freq":18
},
{
 "word": " BLIER", 
 "freq":17
},
{
 "word": " BLIGH", 
 "freq":83
},
{
 "word": " BLIMP", 
 "freq":66
},
{
 "word": " BLIND", 
 "freq":1022
},
{
 "word": " BLINK", 
 "freq":94
},
{
 "word": " BLIPS", 
 "freq":35
},
{
 "word": " BLISS", 
 "freq":120
},
{
 "word": " BLITZ", 
 "freq":279
},
{
 "word": " BLOAT", 
 "freq":19
},
{
 "word": " BLOBS", 
 "freq":23
},
{
 "word": " BLOCH", 
 "freq":372
},
{
 "word": " BLOCK", 
 "freq":4800
},
{
 "word": " BLOCS", 
 "freq":156
},
{
 "word": " BLOHM", 
 "freq":33
},
{
 "word": " BLOND", 
 "freq":336
},
{
 "word": " BLOOD", 
 "freq":6140
},
{
 "word": " BLOOM", 
 "freq":404
},
{
 "word": " BLOWN", 
 "freq":736
},
{
 "word": " BLOWS", 
 "freq":308
},
{
 "word": " BLUES", 
 "freq":941
},
{
 "word": " BLUFF", 
 "freq":177
},
{
 "word": " BLUNT", 
 "freq":472
},
{
 "word": " BLURB", 
 "freq":22
},
{
 "word": " BLURS", 
 "freq":16
},
{
 "word": " BLUSH", 
 "freq":83
},
{
 "word": " BLYTH", 
 "freq":23
},
{
 "word": " BOALT", 
 "freq":16
},
{
 "word": " BOARD", 
 "freq":27280
},
{
 "word": " BOAST", 
 "freq":231
},
{
 "word": " BOATS", 
 "freq":1290
},
{
 "word": " BOBBI", 
 "freq":24
},
{
 "word": " BOBBY", 
 "freq":715
},
{
 "word": " BOBER", 
 "freq":15
},
{
 "word": " BOCAY", 
 "freq":30
},
{
 "word": " BODEN", 
 "freq":13
},
{
 "word": " BODES", 
 "freq":82
},
{
 "word": " BOEHM", 
 "freq":23
},
{
 "word": " BOEUF", 
 "freq":14
},
{
 "word": " BOGEY", 
 "freq":63
},
{
 "word": " BOGGS", 
 "freq":225
},
{
 "word": " BOGLE", 
 "freq":61
},
{
 "word": " BOGUS", 
 "freq":293
},
{
 "word": " BOIES", 
 "freq":23
},
{
 "word": " BOILS", 
 "freq":89
},
{
 "word": " BOISE", 
 "freq":396
},
{
 "word": " BOLAN", 
 "freq":26
},
{
 "word": " BOLAR", 
 "freq":130
},
{
 "word": " BOLEN", 
 "freq":27
},
{
 "word": " BOLES", 
 "freq":12
},
{
 "word": " BOLIN", 
 "freq":17
},
{
 "word": " BOLSA", 
 "freq":60
},
{
 "word": " BOLTS", 
 "freq":220
},
{
 "word": " BOLTZ", 
 "freq":16
},
{
 "word": " BOMBS", 
 "freq":1752
},
{
 "word": " BONDS", 
 "freq":17381
},
{
 "word": " BONED", 
 "freq":24
},
{
 "word": " BONER", 
 "freq":22
},
{
 "word": " BONES", 
 "freq":780
},
{
 "word": " BONET", 
 "freq":20
},
{
 "word": " BONGO", 
 "freq":39
},
{
 "word": " BONNY", 
 "freq":45
},
{
 "word": " BONUS", 
 "freq":988
},
{
 "word": " BOOBY", 
 "freq":100
},
{
 "word": " BOOED", 
 "freq":124
},
{
 "word": " BOOKS", 
 "freq":5364
},
{
 "word": " BOOMS", 
 "freq":205
},
{
 "word": " BOONE", 
 "freq":274
},
{
 "word": " BOOST", 
 "freq":5127
},
{
 "word": " BOOTH", 
 "freq":595
},
{
 "word": " BOOTS", 
 "freq":535
},
{
 "word": " BOOTY", 
 "freq":51
},
{
 "word": " BOOZE", 
 "freq":113
},
{
 "word": " BORBA", 
 "freq":28
},
{
 "word": " BORED", 
 "freq":280
},
{
 "word": " BOREN", 
 "freq":331
},
{
 "word": " BORER", 
 "freq":31
},
{
 "word": " BORES", 
 "freq":10
},
{
 "word": " BORGE", 
 "freq":57
},
{
 "word": " BORIS", 
 "freq":1115
},
{
 "word": " BORJA", 
 "freq":93
},
{
 "word": " BORNE", 
 "freq":336
},
{
 "word": " BORON", 
 "freq":31
},
{
 "word": " BOSAK", 
 "freq":6
},
{
 "word": " BOSCH", 
 "freq":185
},
{
 "word": " BOSCO", 
 "freq":119
},
{
 "word": " BOSOM", 
 "freq":34
},
{
 "word": " BOSSI", 
 "freq":25
},
{
 "word": " BOSSY", 
 "freq":14
},
{
 "word": " BOTHA", 
 "freq":750
},
{
 "word": " BOTTS", 
 "freq":8
},
{
 "word": " BOUND", 
 "freq":1973
},
{
 "word": " BOURJ", 
 "freq":46
},
{
 "word": " BOUTS", 
 "freq":110
},
{
 "word": " BOVIN", 
 "freq":14
},
{
 "word": " BOWED", 
 "freq":262
},
{
 "word": " BOWEL", 
 "freq":43
},
{
 "word": " BOWEN", 
 "freq":234
},
{
 "word": " BOWER", 
 "freq":45
},
{
 "word": " BOWES", 
 "freq":81
},
{
 "word": " BOWIE", 
 "freq":87
},
{
 "word": " BOWLS", 
 "freq":189
},
{
 "word": " BOWNE", 
 "freq":21
},
{
 "word": " BOXED", 
 "freq":82
},
{
 "word": " BOXER", 
 "freq":323
},
{
 "word": " BOXES", 
 "freq":1327
},
{
 "word": " BOYCE", 
 "freq":70
},
{
 "word": " BOYER", 
 "freq":117
},
{
 "word": " BOYLE", 
 "freq":234
},
{
 "word": " BOYNE", 
 "freq":19
},
{
 "word": " BOZEK", 
 "freq":25
},
{
 "word": " BOZIC", 
 "freq":35
},
{
 "word": " BRACE", 
 "freq":295
},
{
 "word": " BRACH", 
 "freq":19
},
{
 "word": " BRACK", 
 "freq":24
},
{
 "word": " BRACY", 
 "freq":12
},
{
 "word": " BRADY", 
 "freq":1664
},
{
 "word": " BRAGA", 
 "freq":22
},
{
 "word": " BRAGG", 
 "freq":158
},
{
 "word": " BRAGS", 
 "freq":40
},
{
 "word": " BRAID", 
 "freq":21
},
{
 "word": " BRAIN", 
 "freq":2070
},
{
 "word": " BRAKE", 
 "freq":355
},
{
 "word": " BRAND", 
 "freq":2878
},
{
 "word": " BRANT", 
 "freq":42
},
{
 "word": " BRASH", 
 "freq":97
},
{
 "word": " BRASS", 
 "freq":488
},
{
 "word": " BRAUN", 
 "freq":169
},
{
 "word": " BRAVE", 
 "freq":381
},
{
 "word": " BRAVO", 
 "freq":205
},
{
 "word": " BRAWL", 
 "freq":162
},
{
 "word": " BRAWN", 
 "freq":16
},
{
 "word": " BREAD", 
 "freq":1291
},
{
 "word": " BREAK", 
 "freq":6181
},
{
 "word": " BREAM", 
 "freq":20
},
{
 "word": " BRECK", 
 "freq":26
},
{
 "word": " BREED", 
 "freq":446
},
{
 "word": " BREEN", 
 "freq":62
},
{
 "word": " BRENT", 
 "freq":679
},
{
 "word": " BREST", 
 "freq":33
},
{
 "word": " BRETT", 
 "freq":212
},
{
 "word": " BRETZ", 
 "freq":42
},
{
 "word": " BREWS", 
 "freq":69
},
{
 "word": " BRIAN", 
 "freq":1890
},
{
 "word": " BRIBE", 
 "freq":388
},
{
 "word": " BRICE", 
 "freq":35
},
{
 "word": " BRICK", 
 "freq":666
},
{
 "word": " BRIDE", 
 "freq":612
},
{
 "word": " BRIEF", 
 "freq":2992
},
{
 "word": " BRIEN", 
 "freq":31
},
{
 "word": " BRILL", 
 "freq":44
},
{
 "word": " BRINE", 
 "freq":21
},
{
 "word": " BRING", 
 "freq":8360
},
{
 "word": " BRINK", 
 "freq":384
},
{
 "word": " BRISK", 
 "freq":476
},
{
 "word": " BRITE", 
 "freq":25
},
{
 "word": " BRITS", 
 "freq":40
},
{
 "word": " BRITT", 
 "freq":106
},
{
 "word": " BROAD", 
 "freq":3782
},
{
 "word": " BROCK", 
 "freq":249
},
{
 "word": " BRODY", 
 "freq":83
},
{
 "word": " BROEK", 
 "freq":41
},
{
 "word": " BROIL", 
 "freq":26
},
{
 "word": " BROKE", 
 "freq":5437
},
{
 "word": " BRONX", 
 "freq":541
},
{
 "word": " BROOD", 
 "freq":47
},
{
 "word": " BROOK", 
 "freq":247
},
{
 "word": " BROOM", 
 "freq":82
},
{
 "word": " BROTH", 
 "freq":114
},
{
 "word": " BROWN", 
 "freq":6787
},
{
 "word": " BROWS", 
 "freq":16
},
{
 "word": " BRUCE", 
 "freq":2310
},
{
 "word": " BRUIN", 
 "freq":16
},
{
 "word": " BRUNO", 
 "freq":254
},
{
 "word": " BRUNT", 
 "freq":221
},
{
 "word": " BRUSH", 
 "freq":728
},
{
 "word": " BRUTE", 
 "freq":49
},
{
 "word": " BRYAN", 
 "freq":770
},
{
 "word": " BRYCE", 
 "freq":31
},
{
 "word": " BSKYB", 
 "freq":26
},
{
 "word": " BUBBA", 
 "freq":78
},
{
 "word": " BUBKA", 
 "freq":16
},
{
 "word": " BUCHI", 
 "freq":39
},
{
 "word": " BUCKS", 
 "freq":389
},
{
 "word": " BUCKY", 
 "freq":16
},
{
 "word": " BUDDY", 
 "freq":538
},
{
 "word": " BUDGE", 
 "freq":153
},
{
 "word": " BUELL", 
 "freq":21
},
{
 "word": " BUENA", 
 "freq":166
},
{
 "word": " BUENO", 
 "freq":26
},
{
 "word": " BUFFS", 
 "freq":155
},
{
 "word": " BUFFY", 
 "freq":14
},
{
 "word": " BUGGY", 
 "freq":54
},
{
 "word": " BUGLE", 
 "freq":25
},
{
 "word": " BUGSY", 
 "freq":41
},
{
 "word": " BUICK", 
 "freq":276
},
{
 "word": " BUILD", 
 "freq":6700
},
{
 "word": " BUILT", 
 "freq":6977
},
{
 "word": " BUJAK", 
 "freq":23
},
{
 "word": " BULBS", 
 "freq":217
},
{
 "word": " BULGE", 
 "freq":94
},
{
 "word": " BULKY", 
 "freq":103
},
{
 "word": " BULLS", 
 "freq":590
},
{
 "word": " BULLY", 
 "freq":140
},
{
 "word": " BULOW", 
 "freq":43
},
{
 "word": " BUMPS", 
 "freq":125
},
{
 "word": " BUMPY", 
 "freq":109
},
{
 "word": " BUNCH", 
 "freq":699
},
{
 "word": " BUNDY", 
 "freq":337
},
{
 "word": " BUNGE", 
 "freq":13
},
{
 "word": " BUNNY", 
 "freq":204
},
{
 "word": " BUONO", 
 "freq":14
},
{
 "word": " BUOYS", 
 "freq":32
},
{
 "word": " BURAN", 
 "freq":37
},
{
 "word": " BURCH", 
 "freq":46
},
{
 "word": " BURDA", 
 "freq":22
},
{
 "word": " BUREN", 
 "freq":65
},
{
 "word": " BURGE", 
 "freq":29
},
{
 "word": " BURKE", 
 "freq":565
},
{
 "word": " BURKS", 
 "freq":24
},
{
 "word": " BURLY", 
 "freq":98
},
{
 "word": " BURMA", 
 "freq":566
},
{
 "word": " BURNS", 
 "freq":1513
},
{
 "word": " BURNT", 
 "freq":56
},
{
 "word": " BURRO", 
 "freq":25
},
{
 "word": " BURRY", 
 "freq":32
},
{
 "word": " BURST", 
 "freq":868
},
{
 "word": " BURUM", 
 "freq":21
},
{
 "word": " BUSBY", 
 "freq":49
},
{
 "word": " BUSCH", 
 "freq":499
},
{
 "word": " BUSED", 
 "freq":66
},
{
 "word": " BUSER", 
 "freq":23
},
{
 "word": " BUSES", 
 "freq":1549
},
{
 "word": " BUSEY", 
 "freq":149
},
{
 "word": " BUSHY", 
 "freq":42
},
{
 "word": " BUSTS", 
 "freq":67
},
{
 "word": " BUTCH", 
 "freq":93
},
{
 "word": " BUTTE", 
 "freq":113
},
{
 "word": " BUTTS", 
 "freq":132
},
{
 "word": " BUTYL", 
 "freq":35
},
{
 "word": " BUYER", 
 "freq":1808
},
{
 "word": " BYBEE", 
 "freq":15
},
{
 "word": " BYERS", 
 "freq":76
},
{
 "word": " BYLAW", 
 "freq":33
},
{
 "word": " BYNUM", 
 "freq":31
},
{
 "word": " BYRDS", 
 "freq":20
},
{
 "word": " BYRNE", 
 "freq":279
},
{
 "word": " BYRON", 
 "freq":451
},
{
 "word": " BYTES", 
 "freq":28
},
{
 "word": " CABAL", 
 "freq":32
},
{
 "word": " CABEY", 
 "freq":21
},
{
 "word": " CABIN", 
 "freq":530
},
{
 "word": " CABLE", 
 "freq":6822
},
{
 "word": " CABOT", 
 "freq":129
},
{
 "word": " CACHE", 
 "freq":177
},
{
 "word": " CADDY", 
 "freq":18
},
{
 "word": " CADET", 
 "freq":96
},
{
 "word": " CADIZ", 
 "freq":39
},
{
 "word": " CADRE", 
 "freq":97
},
{
 "word": " CAFES", 
 "freq":115
},
{
 "word": " CAFFE", 
 "freq":10
},
{
 "word": " CAGED", 
 "freq":36
},
{
 "word": " CAGES", 
 "freq":114
},
{
 "word": " CAGEY", 
 "freq":24
},
{
 "word": " CAINE", 
 "freq":85
},
{
 "word": " CAIRO", 
 "freq":686
},
{
 "word": " CAIXA", 
 "freq":6
},
{
 "word": " CAJON", 
 "freq":47
},
{
 "word": " CAJUN", 
 "freq":170
},
{
 "word": " CAKED", 
 "freq":26
},
{
 "word": " CAKES", 
 "freq":158
},
{
 "word": " CALEB", 
 "freq":22
},
{
 "word": " CALFA", 
 "freq":47
},
{
 "word": " CALIF", 
 "freq":21
},
{
 "word": " CALLE", 
 "freq":22
},
{
 "word": " CALLS", 
 "freq":11291
},
{
 "word": " CALMS", 
 "freq":19
},
{
 "word": " CALVI", 
 "freq":21
},
{
 "word": " CALVO", 
 "freq":13
},
{
 "word": " CAMEL", 
 "freq":220
},
{
 "word": " CAMEO", 
 "freq":89
},
{
 "word": " CAMPO", 
 "freq":36
},
{
 "word": " CAMPS", 
 "freq":1947
},
{
 "word": " CAMPY", 
 "freq":38
},
{
 "word": " CAMRY", 
 "freq":130
},
{
 "word": " CANAL", 
 "freq":1050
},
{
 "word": " CANDY", 
 "freq":834
},
{
 "word": " CANES", 
 "freq":50
},
{
 "word": " CANIN", 
 "freq":39
},
{
 "word": " CANNY", 
 "freq":40
},
{
 "word": " CANOE", 
 "freq":103
},
{
 "word": " CANON", 
 "freq":246
},
{
 "word": " CANTO", 
 "freq":26
},
{
 "word": " CANTU", 
 "freq":24
},
{
 "word": " CANTY", 
 "freq":29
},
{
 "word": " CAPED", 
 "freq":17
},
{
 "word": " CAPEL", 
 "freq":134
},
{
 "word": " CAPER", 
 "freq":47
},
{
 "word": " CAPES", 
 "freq":25
},
{
 "word": " CAPPS", 
 "freq":40
},
{
 "word": " CAPPY", 
 "freq":11
},
{
 "word": " CAPRA", 
 "freq":78
},
{
 "word": " CAPRI", 
 "freq":34
},
{
 "word": " CARAT", 
 "freq":60
},
{
 "word": " CARDS", 
 "freq":3148
},
{
 "word": " CARED", 
 "freq":320
},
{
 "word": " CAREN", 
 "freq":14
},
{
 "word": " CARES", 
 "freq":361
},
{
 "word": " CAREW", 
 "freq":22
},
{
 "word": " CAREY", 
 "freq":389
},
{
 "word": " CARGO", 
 "freq":1721
},
{
 "word": " CARLA", 
 "freq":296
},
{
 "word": " CARLE", 
 "freq":23
},
{
 "word": " CARLI", 
 "freq":16
},
{
 "word": " CARLO", 
 "freq":274
},
{
 "word": " CARLY", 
 "freq":41
},
{
 "word": " CARNE", 
 "freq":27
},
{
 "word": " CAROL", 
 "freq":968
},
{
 "word": " CARON", 
 "freq":50
},
{
 "word": " CARRE", 
 "freq":46
},
{
 "word": " CARRY", 
 "freq":5268
},
{
 "word": " CARSO", 
 "freq":16
},
{
 "word": " CARTA", 
 "freq":20
},
{
 "word": " CARTE", 
 "freq":82
},
{
 "word": " CARTS", 
 "freq":195
},
{
 "word": " CARTY", 
 "freq":17
},
{
 "word": " CARVE", 
 "freq":153
},
{
 "word": " CARYL", 
 "freq":19
},
{
 "word": " CASAS", 
 "freq":13
},
{
 "word": " CASCO", 
 "freq":9
},
{
 "word": " CASES", 
 "freq":11246
},
{
 "word": " CASEY", 
 "freq":813
},
{
 "word": " CASIO", 
 "freq":27
},
{
 "word": " CASKS", 
 "freq":10
},
{
 "word": " CASON", 
 "freq":65
},
{
 "word": " CASTE", 
 "freq":104
},
{
 "word": " CASTO", 
 "freq":15
},
{
 "word": " CASTS", 
 "freq":182
},
{
 "word": " CATCH", 
 "freq":2062
},
{
 "word": " CATER", 
 "freq":145
},
{
 "word": " CATES", 
 "freq":48
},
{
 "word": " CATHY", 
 "freq":242
},
{
 "word": " CATTO", 
 "freq":17
},
{
 "word": " CAULK", 
 "freq":23
},
{
 "word": " CAUSE", 
 "freq":8104
},
{
 "word": " CAVED", 
 "freq":99
},
{
 "word": " CAVES", 
 "freq":125
},
{
 "word": " CAYNE", 
 "freq":22
},
{
 "word": " CCAIR", 
 "freq":7
},
{
 "word": " CEARA", 
 "freq":20
},
{
 "word": " CEASE", 
 "freq":3205
},
{
 "word": " CECIL", 
 "freq":268
},
{
 "word": " CECIN", 
 "freq":9
},
{
 "word": " CEDAR", 
 "freq":287
},
{
 "word": " CEDED", 
 "freq":90
},
{
 "word": " CEIBA", 
 "freq":13
},
{
 "word": " CELIA", 
 "freq":32
},
{
 "word": " CELLO", 
 "freq":86
},
{
 "word": " CELLS", 
 "freq":2146
},
{
 "word": " CEMEX", 
 "freq":29
},
{
 "word": " CENTS", 
 "freq":65030
},
{
 "word": " CERES", 
 "freq":22
},
{
 "word": " CERNA", 
 "freq":16
},
{
 "word": " CERRO", 
 "freq":24
},
{
 "word": " CERUS", 
 "freq":35
},
{
 "word": " CESAR", 
 "freq":331
},
{
 "word": " CETES", 
 "freq":18
},
{
 "word": " CETUS", 
 "freq":123
},
{
 "word": " CHAFE", 
 "freq":15
},
{
 "word": " CHAFF", 
 "freq":13
},
{
 "word": " CHAIM", 
 "freq":88
},
{
 "word": " CHAIN", 
 "freq":4265
},
{
 "word": " CHAIR", 
 "freq":1165
},
{
 "word": " CHALK", 
 "freq":130
},
{
 "word": " CHAMP", 
 "freq":187
},
{
 "word": " CHAND", 
 "freq":10
},
{
 "word": " CHANG", 
 "freq":307
},
{
 "word": " CHANT", 
 "freq":144
},
{
 "word": " CHAOS", 
 "freq":842
},
{
 "word": " CHAPS", 
 "freq":28
},
{
 "word": " CHARD", 
 "freq":11
},
{
 "word": " CHARM", 
 "freq":303
},
{
 "word": " CHART", 
 "freq":599
},
{
 "word": " CHASE", 
 "freq":1948
},
{
 "word": " CHASM", 
 "freq":33
},
{
 "word": " CHATS", 
 "freq":60
},
{
 "word": " CHAUS", 
 "freq":19
},
{
 "word": " CHEAP", 
 "freq":1708
},
{
 "word": " CHEAT", 
 "freq":159
},
{
 "word": " CHECK", 
 "freq":3793
},
{
 "word": " CHEEK", 
 "freq":305
},
{
 "word": " CHEER", 
 "freq":387
},
{
 "word": " CHEFS", 
 "freq":171
},
{
 "word": " CHEMA", 
 "freq":13
},
{
 "word": " CHENG", 
 "freq":98
},
{
 "word": " CHERI", 
 "freq":14
},
{
 "word": " CHESS", 
 "freq":445
},
{
 "word": " CHEST", 
 "freq":1250
},
{
 "word": " CHEVY", 
 "freq":212
},
{
 "word": " CHEWS", 
 "freq":16
},
{
 "word": " CHEWY", 
 "freq":40
},
{
 "word": " CHIAT", 
 "freq":164
},
{
 "word": " CHIBA", 
 "freq":36
},
{
 "word": " CHICA", 
 "freq":17
},
{
 "word": " CHICK", 
 "freq":103
},
{
 "word": " CHICO", 
 "freq":140
},
{
 "word": " CHIEF", 
 "freq":33457
},
{
 "word": " CHIEN", 
 "freq":40
},
{
 "word": " CHILD", 
 "freq":8766
},
{
 "word": " CHILE", 
 "freq":836
},
{
 "word": " CHILI", 
 "freq":225
},
{
 "word": " CHILL", 
 "freq":380
},
{
 "word": " CHIME", 
 "freq":11
},
{
 "word": " CHIMP", 
 "freq":31
},
{
 "word": " CHINA", 
 "freq":10418
},
{
 "word": " CHING", 
 "freq":77
},
{
 "word": " CHINN", 
 "freq":91
},
{
 "word": " CHINO", 
 "freq":45
},
{
 "word": " CHIPS", 
 "freq":2815
},
{
 "word": " CHITA", 
 "freq":15
},
{
 "word": " CHLOE", 
 "freq":10
},
{
 "word": " CHOCK", 
 "freq":76
},
{
 "word": " CHOIR", 
 "freq":298
},
{
 "word": " CHOKE", 
 "freq":203
},
{
 "word": " CHOMP", 
 "freq":11
},
{
 "word": " CHONG", 
 "freq":66
},
{
 "word": " CHOPS", 
 "freq":102
},
{
 "word": " CHORD", 
 "freq":107
},
{
 "word": " CHORE", 
 "freq":75
},
{
 "word": " CHOSE", 
 "freq":1836
},
{
 "word": " CHOUF", 
 "freq":10
},
{
 "word": " CHRIS", 
 "freq":1468
},
{
 "word": " CHUAN", 
 "freq":18
},
{
 "word": " CHUBB", 
 "freq":160
},
{
 "word": " CHUCK", 
 "freq":770
},
{
 "word": " CHULA", 
 "freq":31
},
{
 "word": " CHUMS", 
 "freq":18
},
{
 "word": " CHUNG", 
 "freq":284
},
{
 "word": " CHUNK", 
 "freq":504
},
{
 "word": " CHURN", 
 "freq":75
},
{
 "word": " CHUTE", 
 "freq":54
},
{
 "word": " CIDER", 
 "freq":29
},
{
 "word": " CIERA", 
 "freq":20
},
{
 "word": " CIFRA", 
 "freq":26
},
{
 "word": " CIGAR", 
 "freq":152
},
{
 "word": " CIGNA", 
 "freq":149
},
{
 "word": " CIHAK", 
 "freq":24
},
{
 "word": " CINCH", 
 "freq":29
},
{
 "word": " CINCO", 
 "freq":29
},
{
 "word": " CINDY", 
 "freq":210
},
{
 "word": " CIRCA", 
 "freq":65
},
{
 "word": " CISCO", 
 "freq":107
},
{
 "word": " CITED", 
 "freq":4497
},
{
 "word": " CITES", 
 "freq":532
},
{
 "word": " CITGO", 
 "freq":41
},
{
 "word": " CITIC", 
 "freq":33
},
{
 "word": " CIVIC", 
 "freq":1162
},
{
 "word": " CIVIL", 
 "freq":10960
},
{
 "word": " CIZIK", 
 "freq":17
},
{
 "word": " CLACK", 
 "freq":15
},
{
 "word": " CLAES", 
 "freq":24
},
{
 "word": " CLAIM", 
 "freq":5736
},
{
 "word": " CLAIR", 
 "freq":121
},
{
 "word": " CLAMP", 
 "freq":104
},
{
 "word": " CLAMS", 
 "freq":73
},
{
 "word": " CLANS", 
 "freq":58
},
{
 "word": " CLAPP", 
 "freq":28
},
{
 "word": " CLARA", 
 "freq":4179
},
{
 "word": " CLARE", 
 "freq":82
},
{
 "word": " CLARK", 
 "freq":2633
},
{
 "word": " CLASH", 
 "freq":993
},
{
 "word": " CLASS", 
 "freq":9114
},
{
 "word": " CLAUS", 
 "freq":338
},
{
 "word": " CLAWS", 
 "freq":51
},
{
 "word": " CLAYS", 
 "freq":18
},
{
 "word": " CLEAN", 
 "freq":4083
},
{
 "word": " CLEAR", 
 "freq":10837
},
{
 "word": " CLEEF", 
 "freq":18
},
{
 "word": " CLEFT", 
 "freq":7
},
{
 "word": " CLEGG", 
 "freq":31
},
{
 "word": " CLERK", 
 "freq":1084
},
{
 "word": " CLEVE", 
 "freq":58
},
{
 "word": " CLICK", 
 "freq":134
},
{
 "word": " CLIFF", 
 "freq":439
},
{
 "word": " CLIFT", 
 "freq":17
},
{
 "word": " CLIMB", 
 "freq":1295
},
{
 "word": " CLINE", 
 "freq":85
},
{
 "word": " CLING", 
 "freq":101
},
{
 "word": " CLINT", 
 "freq":175
},
{
 "word": " CLIOS", 
 "freq":21
},
{
 "word": " CLIPS", 
 "freq":222
},
{
 "word": " CLIVE", 
 "freq":79
},
{
 "word": " CLOAK", 
 "freq":81
},
{
 "word": " CLOCK", 
 "freq":1125
},
{
 "word": " CLOGS", 
 "freq":26
},
{
 "word": " CLONE", 
 "freq":223
},
{
 "word": " CLORE", 
 "freq":12
},
{
 "word": " CLOSE", 
 "freq":18246
},
{
 "word": " CLOTH", 
 "freq":399
},
{
 "word": " CLOTS", 
 "freq":103
},
{
 "word": " CLOUD", 
 "freq":933
},
{
 "word": " CLOUT", 
 "freq":649
},
{
 "word": " CLOVE", 
 "freq":20
},
{
 "word": " CLOWN", 
 "freq":155
},
{
 "word": " CLUBS", 
 "freq":1569
},
{
 "word": " CLUES", 
 "freq":503
},
{
 "word": " CLUMP", 
 "freq":24
},
{
 "word": " CLUNG", 
 "freq":97
},
{
 "word": " CLYDE", 
 "freq":298
},
{
 "word": " COACH", 
 "freq":3408
},
{
 "word": " COALS", 
 "freq":59
},
{
 "word": " COASE", 
 "freq":21
},
{
 "word": " COAST", 
 "freq":8569
},
{
 "word": " COATS", 
 "freq":537
},
{
 "word": " COBLE", 
 "freq":39
},
{
 "word": " COBRA", 
 "freq":128
},
{
 "word": " COCKS", 
 "freq":11
},
{
 "word": " COCKY", 
 "freq":62
},
{
 "word": " COCOA", 
 "freq":669
},
{
 "word": " COCOM", 
 "freq":109
},
{
 "word": " CODED", 
 "freq":126
},
{
 "word": " CODES", 
 "freq":549
},
{
 "word": " COEME", 
 "freq":15
},
{
 "word": " COEUR", 
 "freq":44
},
{
 "word": " COFER", 
 "freq":32
},
{
 "word": " COGAN", 
 "freq":25
},
{
 "word": " COHAN", 
 "freq":13
},
{
 "word": " COHEN", 
 "freq":1372
},
{
 "word": " COHON", 
 "freq":23
},
{
 "word": " COILS", 
 "freq":55
},
{
 "word": " COINS", 
 "freq":432
},
{
 "word": " COKER", 
 "freq":25
},
{
 "word": " COKES", 
 "freq":24
},
{
 "word": " COLAR", 
 "freq":16
},
{
 "word": " COLAS", 
 "freq":67
},
{
 "word": " COLBY", 
 "freq":90
},
{
 "word": " COLDS", 
 "freq":52
},
{
 "word": " COLES", 
 "freq":77
},
{
 "word": " COLIN", 
 "freq":448
},
{
 "word": " COLLA", 
 "freq":21
},
{
 "word": " COLMA", 
 "freq":11
},
{
 "word": " COLON", 
 "freq":430
},
{
 "word": " COLOR", 
 "freq":2528
},
{
 "word": " COLTS", 
 "freq":151
},
{
 "word": " COMAS", 
 "freq":21
},
{
 "word": " COMBE", 
 "freq":40
},
{
 "word": " COMBO", 
 "freq":43
},
{
 "word": " COMBS", 
 "freq":101
},
{
 "word": " COMER", 
 "freq":36
},
{
 "word": " COMES", 
 "freq":7897
},
{
 "word": " COMET", 
 "freq":95
},
{
 "word": " COMEX", 
 "freq":416
},
{
 "word": " COMFY", 
 "freq":12
},
{
 "word": " COMIC", 
 "freq":929
},
{
 "word": " CONAN", 
 "freq":34
},
{
 "word": " CONCH", 
 "freq":17
},
{
 "word": " CONDE", 
 "freq":156
},
{
 "word": " CONDO", 
 "freq":177
},
{
 "word": " CONES", 
 "freq":65
},
{
 "word": " CONEY", 
 "freq":27
},
{
 "word": " CONGA", 
 "freq":18
},
{
 "word": " CONGO", 
 "freq":121
},
{
 "word": " CONTE", 
 "freq":129
},
{
 "word": " CONTI", 
 "freq":60
},
{
 "word": " COOKE", 
 "freq":217
},
{
 "word": " COOKS", 
 "freq":190
},
{
 "word": " COOLS", 
 "freq":64
},
{
 "word": " COONS", 
 "freq":11
},
{
 "word": " COORS", 
 "freq":481
},
{
 "word": " COPED", 
 "freq":39
},
{
 "word": " COPES", 
 "freq":12
},
{
 "word": " CORAL", 
 "freq":359
},
{
 "word": " CORDS", 
 "freq":92
},
{
 "word": " COREA", 
 "freq":14
},
{
 "word": " CORES", 
 "freq":28
},
{
 "word": " COREY", 
 "freq":73
},
{
 "word": " CORKS", 
 "freq":40
},
{
 "word": " CORKY", 
 "freq":26
},
{
 "word": " CORNY", 
 "freq":46
},
{
 "word": " CORPS", 
 "freq":1979
},
{
 "word": " CORRY", 
 "freq":89
},
{
 "word": " CORSA", 
 "freq":14
},
{
 "word": " CORTE", 
 "freq":21
},
{
 "word": " COSBY", 
 "freq":519
},
{
 "word": " COSMO", 
 "freq":57
},
{
 "word": " COSTA", 
 "freq":1323
},
{
 "word": " COSTS", 
 "freq":16322
},
{
 "word": " COTTA", 
 "freq":37
},
{
 "word": " COUCH", 
 "freq":309
},
{
 "word": " COUGH", 
 "freq":158
},
{
 "word": " COULD", 
 "freq":69449
},
{
 "word": " COUNT", 
 "freq":4046
},
{
 "word": " COUPE", 
 "freq":169
},
{
 "word": " COUPS", 
 "freq":129
},
{
 "word": " COURT", 
 "freq":42992
},
{
 "word": " COVER", 
 "freq":6118
},
{
 "word": " COVES", 
 "freq":18
},
{
 "word": " COVET", 
 "freq":31
},
{
 "word": " COVEY", 
 "freq":44
},
{
 "word": " COVIA", 
 "freq":19
},
{
 "word": " COWAN", 
 "freq":119
},
{
 "word": " COWED", 
 "freq":27
},
{
 "word": " COWEN", 
 "freq":142
},
{
 "word": " COYLE", 
 "freq":31
},
{
 "word": " COYLY", 
 "freq":14
},
{
 "word": " COYNE", 
 "freq":48
},
{
 "word": " CRABB", 
 "freq":16
},
{
 "word": " CRABS", 
 "freq":82
},
{
 "word": " CRACK", 
 "freq":1738
},
{
 "word": " CRAFT", 
 "freq":1054
},
{
 "word": " CRAIG", 
 "freq":1685
},
{
 "word": " CRAIN", 
 "freq":32
},
{
 "word": " CRAME", 
 "freq":16
},
{
 "word": " CRAMP", 
 "freq":30
},
{
 "word": " CRANE", 
 "freq":466
},
{
 "word": " CRANK", 
 "freq":93
},
{
 "word": " CRAPS", 
 "freq":29
},
{
 "word": " CRASH", 
 "freq":5035
},
{
 "word": " CRASS", 
 "freq":57
},
{
 "word": " CRATE", 
 "freq":73
},
{
 "word": " CRAVE", 
 "freq":46
},
{
 "word": " CRAWL", 
 "freq":195
},
{
 "word": " CRAXI", 
 "freq":41
},
{
 "word": " CRAZE", 
 "freq":126
},
{
 "word": " CRAZY", 
 "freq":1163
},
{
 "word": " CREAM", 
 "freq":1271
},
{
 "word": " CREDO", 
 "freq":62
},
{
 "word": " CREED", 
 "freq":99
},
{
 "word": " CREEK", 
 "freq":1540
},
{
 "word": " CREEP", 
 "freq":120
},
{
 "word": " CREME", 
 "freq":28
},
{
 "word": " CREPE", 
 "freq":44
},
{
 "word": " CREPT", 
 "freq":142
},
{
 "word": " CREST", 
 "freq":274
},
{
 "word": " CRETE", 
 "freq":84
},
{
 "word": " CREWS", 
 "freq":1639
},
{
 "word": " CRIBS", 
 "freq":20
},
{
 "word": " CRIED", 
 "freq":416
},
{
 "word": " CRIER", 
 "freq":24
},
{
 "word": " CRIES", 
 "freq":289
},
{
 "word": " CRIME", 
 "freq":5896
},
{
 "word": " CRIMP", 
 "freq":83
},
{
 "word": " CRIPS", 
 "freq":51
},
{
 "word": " CRISP", 
 "freq":277
},
{
 "word": " CRISS", 
 "freq":37
},
{
 "word": " CRIST", 
 "freq":68
},
{
 "word": " CROAT", 
 "freq":113
},
{
 "word": " CROCE", 
 "freq":17
},
{
 "word": " CROCK", 
 "freq":17
},
{
 "word": " CROFT", 
 "freq":28
},
{
 "word": " CROIX", 
 "freq":119
},
{
 "word": " CRONY", 
 "freq":29
},
{
 "word": " CROOK", 
 "freq":93
},
{
 "word": " CROPS", 
 "freq":1787
},
{
 "word": " CROSS", 
 "freq":5097
},
{
 "word": " CROWD", 
 "freq":4516
},
{
 "word": " CROWE", 
 "freq":263
},
{
 "word": " CROWN", 
 "freq":1059
},
{
 "word": " CROWS", 
 "freq":35
},
{
 "word": " CRUDE", 
 "freq":4557
},
{
 "word": " CRUEL", 
 "freq":440
},
{
 "word": " CRUMB", 
 "freq":27
},
{
 "word": " CRUMP", 
 "freq":19
},
{
 "word": " CRUSE", 
 "freq":46
},
{
 "word": " CRUSH", 
 "freq":572
},
{
 "word": " CRUST", 
 "freq":193
},
{
 "word": " CRYER", 
 "freq":24
},
{
 "word": " CRYPT", 
 "freq":54
},
{
 "word": " CUBAN", 
 "freq":2159
},
{
 "word": " CUBES", 
 "freq":82
},
{
 "word": " CUBIC", 
 "freq":757
},
{
 "word": " CUFFS", 
 "freq":41
},
{
 "word": " CUGAT", 
 "freq":8
},
{
 "word": " CUITO", 
 "freq":22
},
{
 "word": " CULPA", 
 "freq":13
},
{
 "word": " CULTS", 
 "freq":45
},
{
 "word": " CUMIN", 
 "freq":16
},
{
 "word": " CUNEO", 
 "freq":9
},
{
 "word": " CUNHA", 
 "freq":20
},
{
 "word": " CUOMO", 
 "freq":1085
},
{
 "word": " CUONG", 
 "freq":12
},
{
 "word": " CUPID", 
 "freq":19
},
{
 "word": " CURBS", 
 "freq":416
},
{
 "word": " CURED", 
 "freq":196
},
{
 "word": " CURES", 
 "freq":81
},
{
 "word": " CURIA", 
 "freq":11
},
{
 "word": " CURLS", 
 "freq":46
},
{
 "word": " CURLY", 
 "freq":118
},
{
 "word": " CURRY", 
 "freq":326
},
{
 "word": " CURSE", 
 "freq":150
},
{
 "word": " CURVE", 
 "freq":436
},
{
 "word": " CURVY", 
 "freq":18
},
{
 "word": " CUSHY", 
 "freq":19
},
{
 "word": " CUSIP", 
 "freq":134
},
{
 "word": " CUZCO", 
 "freq":30
},
{
 "word": " CYBER", 
 "freq":10
},
{
 "word": " CYCLE", 
 "freq":1186
},
{
 "word": " CYNDI", 
 "freq":23
},
{
 "word": " CYNIC", 
 "freq":30
},
{
 "word": " CYRIL", 
 "freq":79
},
{
 "word": " CYRIX", 
 "freq":104
},
{
 "word": " CYRUS", 
 "freq":82
},
{
 "word": " CYSTS", 
 "freq":20
},
{
 "word": " CZARS", 
 "freq":36
},
{
 "word": " CZECH", 
 "freq":521
},
{
 "word": " DABAH", 
 "freq":36
},
{
 "word": " DACHA", 
 "freq":35
},
{
 "word": " DADDY", 
 "freq":256
},
{
 "word": " DAFFY", 
 "freq":35
},
{
 "word": " DAFOE", 
 "freq":25
},
{
 "word": " DAHER", 
 "freq":23
},
{
 "word": " DAIEI", 
 "freq":17
},
{
 "word": " DAILY", 
 "freq":8665
},
{
 "word": " DAIRY", 
 "freq":1029
},
{
 "word": " DAISY", 
 "freq":181
},
{
 "word": " DAIWA", 
 "freq":464
},
{
 "word": " DAKAR", 
 "freq":35
},
{
 "word": " DAKIN", 
 "freq":17
},
{
 "word": " DALAI", 
 "freq":268
},
{
 "word": " DALEY", 
 "freq":362
},
{
 "word": " DALIS", 
 "freq":15
},
{
 "word": " DAMAS", 
 "freq":47
},
{
 "word": " DAMES", 
 "freq":23
},
{
 "word": " DAMME", 
 "freq":11
},
{
 "word": " DAMON", 
 "freq":191
},
{
 "word": " DANCE", 
 "freq":2207
},
{
 "word": " DANDY", 
 "freq":47
},
{
 "word": " DANES", 
 "freq":78
},
{
 "word": " DANKO", 
 "freq":15
},
{
 "word": " DANNY", 
 "freq":645
},
{
 "word": " DANTE", 
 "freq":123
},
{
 "word": " DANZA", 
 "freq":22
},
{
 "word": " DAOUD", 
 "freq":82
},
{
 "word": " DARBY", 
 "freq":98
},
{
 "word": " DARCY", 
 "freq":33
},
{
 "word": " DARED", 
 "freq":133
},
{
 "word": " DARES", 
 "freq":56
},
{
 "word": " DARIN", 
 "freq":37
},
{
 "word": " DARIO", 
 "freq":28
},
{
 "word": " DARLA", 
 "freq":11
},
{
 "word": " DARPA", 
 "freq":37
},
{
 "word": " DARTH", 
 "freq":14
},
{
 "word": " DARTS", 
 "freq":142
},
{
 "word": " DARYL", 
 "freq":218
},
{
 "word": " DATED", 
 "freq":768
},
{
 "word": " DATES", 
 "freq":1086
},
{
 "word": " DATUK", 
 "freq":34
},
{
 "word": " DAVAO", 
 "freq":32
},
{
 "word": " DAVAR", 
 "freq":18
},
{
 "word": " DAVES", 
 "freq":17
},
{
 "word": " DAVEY", 
 "freq":54
},
{
 "word": " DAVID", 
 "freq":11341
},
{
 "word": " DAVIE", 
 "freq":12
},
{
 "word": " DAVIS", 
 "freq":3604
},
{
 "word": " DAVOS", 
 "freq":20
},
{
 "word": " DAWES", 
 "freq":22
},
{
 "word": " DAWNS", 
 "freq":13
},
{
 "word": " DAYAL", 
 "freq":14
},
{
 "word": " DAYAN", 
 "freq":23
},
{
 "word": " DAYNA", 
 "freq":20
},
{
 "word": " DAZED", 
 "freq":92
},
{
 "word": " DBASE", 
 "freq":74
},
{
 "word": " DBAYE", 
 "freq":16
},
{
 "word": " DEALS", 
 "freq":3162
},
{
 "word": " DEALT", 
 "freq":996
},
{
 "word": " DEANE", 
 "freq":50
},
{
 "word": " DEANS", 
 "freq":65
},
{
 "word": " DEATH", 
 "freq":15675
},
{
 "word": " DEBBY", 
 "freq":31
},
{
 "word": " DEBIT", 
 "freq":82
},
{
 "word": " DEBOW", 
 "freq":15
},
{
 "word": " DEBRA", 
 "freq":197
},
{
 "word": " DEBTS", 
 "freq":1374
},
{
 "word": " DEBUT", 
 "freq":1193
},
{
 "word": " DECAF", 
 "freq":24
},
{
 "word": " DECAL", 
 "freq":13
},
{
 "word": " DECAY", 
 "freq":205
},
{
 "word": " DECCA", 
 "freq":14
},
{
 "word": " DECKS", 
 "freq":156
},
{
 "word": " DECOR", 
 "freq":132
},
{
 "word": " DECOY", 
 "freq":38
},
{
 "word": " DECRY", 
 "freq":33
},
{
 "word": " DEEDS", 
 "freq":192
},
{
 "word": " DEEMS", 
 "freq":94
},
{
 "word": " DEERE", 
 "freq":232
},
{
 "word": " DEETS", 
 "freq":12
},
{
 "word": " DEFEO", 
 "freq":16
},
{
 "word": " DEFER", 
 "freq":317
},
{
 "word": " DEGAS", 
 "freq":32
},
{
 "word": " DEION", 
 "freq":28
},
{
 "word": " DEITY", 
 "freq":36
},
{
 "word": " DELAY", 
 "freq":3176
},
{
 "word": " DELCO", 
 "freq":45
},
{
 "word": " DELFT", 
 "freq":54
},
{
 "word": " DELHI", 
 "freq":549
},
{
 "word": " DELIA", 
 "freq":20
},
{
 "word": " DELLA", 
 "freq":208
},
{
 "word": " DELLE", 
 "freq":14
},
{
 "word": " DELTA", 
 "freq":2164
},
{
 "word": " DELVE", 
 "freq":52
},
{
 "word": " DEMME", 
 "freq":25
},
{
 "word": " DEMON", 
 "freq":70
},
{
 "word": " DEMOS", 
 "freq":24
},
{
 "word": " DENIM", 
 "freq":96
},
{
 "word": " DENIS", 
 "freq":165
},
{
 "word": " DENKO", 
 "freq":28
},
{
 "word": " DENNY", 
 "freq":214
},
{
 "word": " DENSE", 
 "freq":295
},
{
 "word": " DENTS", 
 "freq":32
},
{
 "word": " DENYS", 
 "freq":23
},
{
 "word": " DEPOT", 
 "freq":523
},
{
 "word": " DEPTH", 
 "freq":726
},
{
 "word": " DERBY", 
 "freq":234
},
{
 "word": " DEREK", 
 "freq":252
},
{
 "word": " DERRY", 
 "freq":27
},
{
 "word": " DESAI", 
 "freq":36
},
{
 "word": " DESKS", 
 "freq":291
},
{
 "word": " DETER", 
 "freq":581
},
{
 "word": " DETOX", 
 "freq":16
},
{
 "word": " DEUTZ", 
 "freq":10
},
{
 "word": " DEVIL", 
 "freq":362
},
{
 "word": " DEVIN", 
 "freq":20
},
{
 "word": " DEVOE", 
 "freq":24
},
{
 "word": " DEVON", 
 "freq":48
},
{
 "word": " DEWEY", 
 "freq":135
},
{
 "word": " DHABI", 
 "freq":253
},
{
 "word": " DHAKA", 
 "freq":254
},
{
 "word": " DIALS", 
 "freq":52
},
{
 "word": " DIANA", 
 "freq":469
},
{
 "word": " DIANE", 
 "freq":591
},
{
 "word": " DIARY", 
 "freq":240
},
{
 "word": " DICED", 
 "freq":34
},
{
 "word": " DICEY", 
 "freq":41
},
{
 "word": " DICKS", 
 "freq":52
},
{
 "word": " DIEGO", 
 "freq":2733
},
{
 "word": " DIEHL", 
 "freq":27
},
{
 "word": " DIETS", 
 "freq":204
},
{
 "word": " DIETZ", 
 "freq":30
},
{
 "word": " DIGGS", 
 "freq":35
},
{
 "word": " DIGIT", 
 "freq":733
},
{
 "word": " DIJON", 
 "freq":27
},
{
 "word": " DIKES", 
 "freq":29
},
{
 "word": " DIMAS", 
 "freq":21
},
{
 "word": " DIMES", 
 "freq":55
},
{
 "word": " DIMLY", 
 "freq":40
},
{
 "word": " DINAH", 
 "freq":42
},
{
 "word": " DINAR", 
 "freq":72
},
{
 "word": " DINCA", 
 "freq":13
},
{
 "word": " DINED", 
 "freq":92
},
{
 "word": " DINER", 
 "freq":131
},
{
 "word": " DINES", 
 "freq":16
},
{
 "word": " DINGS", 
 "freq":10
},
{
 "word": " DINGY", 
 "freq":56
},
{
 "word": " DINSA", 
 "freq":16
},
{
 "word": " DIODE", 
 "freq":10
},
{
 "word": " DIOUF", 
 "freq":35
},
{
 "word": " DIRKS", 
 "freq":17
},
{
 "word": " DIRTY", 
 "freq":981
},
{
 "word": " DISCO", 
 "freq":136
},
{
 "word": " DISCS", 
 "freq":227
},
{
 "word": " DISKS", 
 "freq":547
},
{
 "word": " DITCH", 
 "freq":376
},
{
 "word": " DITKA", 
 "freq":54
},
{
 "word": " DITTO", 
 "freq":63
},
{
 "word": " DITTY", 
 "freq":21
},
{
 "word": " DIVAC", 
 "freq":34
},
{
 "word": " DIVED", 
 "freq":110
},
{
 "word": " DIVER", 
 "freq":168
},
{
 "word": " DIVES", 
 "freq":41
},
{
 "word": " DIVVY", 
 "freq":26
},
{
 "word": " DIXIE", 
 "freq":127
},
{
 "word": " DIXON", 
 "freq":734
},
{
 "word": " DIYAR", 
 "freq":41
},
{
 "word": " DIZZY", 
 "freq":105
},
{
 "word": " DJPIR", 
 "freq":37
},
{
 "word": " DNASE", 
 "freq":23
},
{
 "word": " DOBBS", 
 "freq":49
},
{
 "word": " DOCKS", 
 "freq":148
},
{
 "word": " DODDS", 
 "freq":26
},
{
 "word": " DODGE", 
 "freq":797
},
{
 "word": " DOERR", 
 "freq":24
},
{
 "word": " DOGMA", 
 "freq":66
},
{
 "word": " DOHUK", 
 "freq":43
},
{
 "word": " DOING", 
 "freq":10315
},
{
 "word": " DOLAN", 
 "freq":133
},
{
 "word": " DOLBY", 
 "freq":25
},
{
 "word": " DOLCE", 
 "freq":26
},
{
 "word": " DOLED", 
 "freq":64
},
{
 "word": " DOLES", 
 "freq":28
},
{
 "word": " DOLLS", 
 "freq":398
},
{
 "word": " DOLLY", 
 "freq":141
},
{
 "word": " DOMED", 
 "freq":85
},
{
 "word": " DOMES", 
 "freq":50
},
{
 "word": " DONAL", 
 "freq":11
},
{
 "word": " DONER", 
 "freq":19
},
{
 "word": " DONNA", 
 "freq":501
},
{
 "word": " DONNY", 
 "freq":30
},
{
 "word": " DONOR", 
 "freq":615
},
{
 "word": " DONUT", 
 "freq":27
},
{
 "word": " DOODY", 
 "freq":14
},
{
 "word": " DOOMS", 
 "freq":12
},
{
 "word": " DOORS", 
 "freq":1982
},
{
 "word": " DOPEY", 
 "freq":23
},
{
 "word": " DORAL", 
 "freq":16
},
{
 "word": " DORAN", 
 "freq":45
},
{
 "word": " DOREN", 
 "freq":14
},
{
 "word": " DORIA", 
 "freq":24
},
{
 "word": " DORIS", 
 "freq":192
},
{
 "word": " DORMS", 
 "freq":33
},
{
 "word": " DORON", 
 "freq":22
},
{
 "word": " DORSA", 
 "freq":17
},
{
 "word": " DOSES", 
 "freq":426
},
{
 "word": " DOTAN", 
 "freq":43
},
{
 "word": " DOUBT", 
 "freq":3212
},
{
 "word": " DOUGH", 
 "freq":239
},
{
 "word": " DOUSE", 
 "freq":59
},
{
 "word": " DOVER", 
 "freq":187
},
{
 "word": " DOVES", 
 "freq":61
},
{
 "word": " DOWDY", 
 "freq":64
},
{
 "word": " DOWNE", 
 "freq":50
},
{
 "word": " DOWNS", 
 "freq":635
},
{
 "word": " DOWNY", 
 "freq":13
},
{
 "word": " DOWRY", 
 "freq":22
},
{
 "word": " DOYLE", 
 "freq":262
},
{
 "word": " DOZED", 
 "freq":13
},
{
 "word": " DOZEN", 
 "freq":4845
},
{
 "word": " DRAFT", 
 "freq":2939
},
{
 "word": " DRAGS", 
 "freq":95
},
{
 "word": " DRAIN", 
 "freq":655
},
{
 "word": " DRAKE", 
 "freq":233
},
{
 "word": " DRAMA", 
 "freq":1241
},
{
 "word": " DRAMS", 
 "freq":74
},
{
 "word": " DRANK", 
 "freq":253
},
{
 "word": " DRAPE", 
 "freq":26
},
{
 "word": " DRAVO", 
 "freq":15
},
{
 "word": " DRAWL", 
 "freq":38
},
{
 "word": " DRAWN", 
 "freq":2182
},
{
 "word": " DRAWS", 
 "freq":583
},
{
 "word": " DREAD", 
 "freq":119
},
{
 "word": " DREAM", 
 "freq":2009
},
{
 "word": " DREGS", 
 "freq":11
},
{
 "word": " DRESS", 
 "freq":1157
},
{
 "word": " DRIED", 
 "freq":542
},
{
 "word": " DRIER", 
 "freq":89
},
{
 "word": " DRIES", 
 "freq":57
},
{
 "word": " DRIFT", 
 "freq":357
},
{
 "word": " DRILL", 
 "freq":460
},
{
 "word": " DRINK", 
 "freq":1936
},
{
 "word": " DRIPS", 
 "freq":17
},
{
 "word": " DRIVE", 
 "freq":6319
},
{
 "word": " DROLL", 
 "freq":22
},
{
 "word": " DRONE", 
 "freq":43
},
{
 "word": " DROOL", 
 "freq":15
},
{
 "word": " DROPS", 
 "freq":807
},
{
 "word": " DROVE", 
 "freq":2204
},
{
 "word": " DROWN", 
 "freq":92
},
{
 "word": " DRUGS", 
 "freq":7416
},
{
 "word": " DRUMS", 
 "freq":367
},
{
 "word": " DRUNK", 
 "freq":585
},
{
 "word": " DRURY", 
 "freq":35
},
{
 "word": " DRUSE", 
 "freq":173
},
{
 "word": " DRYER", 
 "freq":106
},
{
 "word": " DRYLY", 
 "freq":19
},
{
 "word": " DUANE", 
 "freq":149
},
{
 "word": " DUBAI", 
 "freq":177
},
{
 "word": " DUBIN", 
 "freq":10
},
{
 "word": " DUCHY", 
 "freq":12
},
{
 "word": " DUCKS", 
 "freq":263
},
{
 "word": " DUCTS", 
 "freq":52
},
{
 "word": " DUDDY", 
 "freq":17
},
{
 "word": " DUDES", 
 "freq":32
},
{
 "word": " DUELS", 
 "freq":71
},
{
 "word": " DUETS", 
 "freq":44
},
{
 "word": " DUFFY", 
 "freq":223
},
{
 "word": " DUGAN", 
 "freq":107
},
{
 "word": " DUKES", 
 "freq":89
},
{
 "word": " DULAY", 
 "freq":15
},
{
 "word": " DUMAS", 
 "freq":199
},
{
 "word": " DUMBO", 
 "freq":11
},
{
 "word": " DUMEZ", 
 "freq":19
},
{
 "word": " DUMMY", 
 "freq":149
},
{
 "word": " DUMPS", 
 "freq":240
},
{
 "word": " DUMPY", 
 "freq":18
},
{
 "word": " DUNCE", 
 "freq":13
},
{
 "word": " DUNEM", 
 "freq":33
},
{
 "word": " DUNES", 
 "freq":104
},
{
 "word": " DUNKS", 
 "freq":15
},
{
 "word": " DUNNE", 
 "freq":163
},
{
 "word": " DUPED", 
 "freq":100
},
{
 "word": " DUPUY", 
 "freq":23
},
{
 "word": " DUQUE", 
 "freq":66
},
{
 "word": " DURAN", 
 "freq":116
},
{
 "word": " DURST", 
 "freq":30
},
{
 "word": " DURUM", 
 "freq":59
},
{
 "word": " DUSAN", 
 "freq":18
},
{
 "word": " DUSKY", 
 "freq":15
},
{
 "word": " DUSTY", 
 "freq":265
},
{
 "word": " DUTCH", 
 "freq":2647
},
{
 "word": " DUTRA", 
 "freq":77
},
{
 "word": " DUVAL", 
 "freq":54
},
{
 "word": " DWARF", 
 "freq":121
},
{
 "word": " DWELL", 
 "freq":98
},
{
 "word": " DWELT", 
 "freq":14
},
{
 "word": " DWYER", 
 "freq":140
},
{
 "word": " DYCOM", 
 "freq":16
},
{
 "word": " DYESS", 
 "freq":48
},
{
 "word": " DYING", 
 "freq":1229
},
{
 "word": " DYKES", 
 "freq":21
},
{
 "word": " DYLAN", 
 "freq":155
},
{
 "word": " DYSON", 
 "freq":141
},
{
 "word": " EAGAN", 
 "freq":74
},
{
 "word": " EAGER", 
 "freq":1478
},
{
 "word": " EAGLE", 
 "freq":921
},
{
 "word": " EAKLE", 
 "freq":23
},
{
 "word": " EAMER", 
 "freq":27
},
{
 "word": " EAMES", 
 "freq":21
},
{
 "word": " EARED", 
 "freq":24
},
{
 "word": " EARLE", 
 "freq":132
},
{
 "word": " EARLY", 
 "freq":25508
},
{
 "word": " EARNS", 
 "freq":382
},
{
 "word": " EARTH", 
 "freq":3349
},
{
 "word": " EASED", 
 "freq":1691
},
{
 "word": " EASEL", 
 "freq":26
},
{
 "word": " EASES", 
 "freq":111
},
{
 "word": " EASON", 
 "freq":26
},
{
 "word": " EATEN", 
 "freq":426
},
{
 "word": " EATER", 
 "freq":30
},
{
 "word": " EATON", 
 "freq":240
},
{
 "word": " EAVES", 
 "freq":42
},
{
 "word": " EBBED", 
 "freq":47
},
{
 "word": " EBERT", 
 "freq":68
},
{
 "word": " EBONY", 
 "freq":50
},
{
 "word": " ECOLE", 
 "freq":16
},
{
 "word": " EDDIE", 
 "freq":655
},
{
 "word": " EDELL", 
 "freq":37
},
{
 "word": " EDEMA", 
 "freq":17
},
{
 "word": " EDGAR", 
 "freq":383
},
{
 "word": " EDGED", 
 "freq":1691
},
{
 "word": " EDGES", 
 "freq":301
},
{
 "word": " EDICT", 
 "freq":68
},
{
 "word": " EDINA", 
 "freq":29
},
{
 "word": " EDITH", 
 "freq":138
},
{
 "word": " EDITS", 
 "freq":65
},
{
 "word": " EDLEY", 
 "freq":27
},
{
 "word": " EDNEY", 
 "freq":15
},
{
 "word": " EDPER", 
 "freq":20
},
{
 "word": " EDSEL", 
 "freq":43
},
{
 "word": " EDSON", 
 "freq":34
},
{
 "word": " EDWIN", 
 "freq":838
},
{
 "word": " EELAM", 
 "freq":107
},
{
 "word": " EERIE", 
 "freq":163
},
{
 "word": " EFREM", 
 "freq":16
},
{
 "word": " EGGED", 
 "freq":28
},
{
 "word": " EGLIN", 
 "freq":34
},
{
 "word": " EGYPT", 
 "freq":2039
},
{
 "word": " EIGHT", 
 "freq":165764
},
{
 "word": " EILAT", 
 "freq":24
},
{
 "word": " EISEN", 
 "freq":19
},
{
 "word": " EITAN", 
 "freq":51
},
{
 "word": " EJECT", 
 "freq":42
},
{
 "word": " EJIDO", 
 "freq":17
},
{
 "word": " EKEUS", 
 "freq":28
},
{
 "word": " EKING", 
 "freq":15
},
{
 "word": " ELBOW", 
 "freq":296
},
{
 "word": " ELCOR", 
 "freq":12
},
{
 "word": " ELDEN", 
 "freq":18
},
{
 "word": " ELDER", 
 "freq":673
},
{
 "word": " ELDON", 
 "freq":31
},
{
 "word": " ELECT", 
 "freq":1990
},
{
 "word": " ELEGY", 
 "freq":15
},
{
 "word": " ELENA", 
 "freq":207
},
{
 "word": " ELGAR", 
 "freq":14
},
{
 "word": " ELGIN", 
 "freq":41
},
{
 "word": " ELIAS", 
 "freq":236
},
{
 "word": " ELIHU", 
 "freq":37
},
{
 "word": " ELION", 
 "freq":20
},
{
 "word": " ELIOT", 
 "freq":87
},
{
 "word": " ELISA", 
 "freq":38
},
{
 "word": " ELISE", 
 "freq":19
},
{
 "word": " ELITE", 
 "freq":835
},
{
 "word": " ELIZA", 
 "freq":18
},
{
 "word": " ELJER", 
 "freq":71
},
{
 "word": " ELKIN", 
 "freq":18
},
{
 "word": " ELLEN", 
 "freq":499
},
{
 "word": " ELLER", 
 "freq":64
},
{
 "word": " ELLIE", 
 "freq":39
},
{
 "word": " ELLIN", 
 "freq":18
},
{
 "word": " ELLIS", 
 "freq":620
},
{
 "word": " ELLYN", 
 "freq":23
},
{
 "word": " ELMER", 
 "freq":209
},
{
 "word": " ELSEY", 
 "freq":10
},
{
 "word": " ELSIE", 
 "freq":63
},
{
 "word": " ELTON", 
 "freq":83
},
{
 "word": " ELUDE", 
 "freq":67
},
{
 "word": " ELVES", 
 "freq":38
},
{
 "word": " ELVIN", 
 "freq":19
},
{
 "word": " ELVIS", 
 "freq":515
},
{
 "word": " ELWAY", 
 "freq":76
},
{
 "word": " EMBRY", 
 "freq":21
},
{
 "word": " EMCEE", 
 "freq":30
},
{
 "word": " EMERY", 
 "freq":165
},
{
 "word": " EMILE", 
 "freq":57
},
{
 "word": " EMILY", 
 "freq":202
},
{
 "word": " EMITS", 
 "freq":62
},
{
 "word": " EMMET", 
 "freq":8
},
{
 "word": " EMMYS", 
 "freq":68
},
{
 "word": " EMORY", 
 "freq":151
},
{
 "word": " EMPTS", 
 "freq":21
},
{
 "word": " EMPTY", 
 "freq":1722
},
{
 "word": " ENACT", 
 "freq":458
},
{
 "word": " ENCOR", 
 "freq":26
},
{
 "word": " ENDED", 
 "freq":15313
},
{
 "word": " ENDOW", 
 "freq":29
},
{
 "word": " ENEMY", 
 "freq":1399
},
{
 "word": " ENGEL", 
 "freq":67
},
{
 "word": " ENGEN", 
 "freq":13
},
{
 "word": " ENGLE", 
 "freq":26
},
{
 "word": " ENJOY", 
 "freq":1567
},
{
 "word": " ENLOE", 
 "freq":12
},
{
 "word": " ENNIS", 
 "freq":55
},
{
 "word": " ENNUI", 
 "freq":15
},
{
 "word": " ENOLA", 
 "freq":15
},
{
 "word": " ENRON", 
 "freq":125
},
{
 "word": " ENSUE", 
 "freq":38
},
{
 "word": " ENTEL", 
 "freq":29
},
{
 "word": " ENTER", 
 "freq":2890
},
{
 "word": " ENTIN", 
 "freq":8
},
{
 "word": " ENTRY", 
 "freq":1966
},
{
 "word": " ENVER", 
 "freq":32
},
{
 "word": " ENVOY", 
 "freq":719
},
{
 "word": " EPCOT", 
 "freq":45
},
{
 "word": " EPICS", 
 "freq":10
},
{
 "word": " EPOCH", 
 "freq":49
},
{
 "word": " EPOXY", 
 "freq":40
},
{
 "word": " EPPEL", 
 "freq":28
},
{
 "word": " EPSON", 
 "freq":40
},
{
 "word": " EQUAL", 
 "freq":3444
},
{
 "word": " EQUIP", 
 "freq":103
},
{
 "word": " ERASE", 
 "freq":296
},
{
 "word": " ERBIL", 
 "freq":15
},
{
 "word": " ERECT", 
 "freq":135
},
{
 "word": " ERICA", 
 "freq":61
},
{
 "word": " ERICH", 
 "freq":316
},
{
 "word": " ERICK", 
 "freq":35
},
{
 "word": " ERIKA", 
 "freq":45
},
{
 "word": " ERISA", 
 "freq":88
},
{
 "word": " ERMAN", 
 "freq":12
},
{
 "word": " ERNIE", 
 "freq":185
},
{
 "word": " ERNST", 
 "freq":416
},
{
 "word": " ERODE", 
 "freq":283
},
{
 "word": " ERRED", 
 "freq":160
},
{
 "word": " ERROL", 
 "freq":48
},
{
 "word": " ERROR", 
 "freq":1851
},
{
 "word": " ERTHA", 
 "freq":38
},
{
 "word": " ERUPT", 
 "freq":128
},
{
 "word": " ERVIN", 
 "freq":49
},
{
 "word": " ERWIN", 
 "freq":83
},
{
 "word": " ESBER", 
 "freq":14
},
{
 "word": " ESKAY", 
 "freq":37
},
{
 "word": " ESKER", 
 "freq":39
},
{
 "word": " ESMAT", 
 "freq":61
},
{
 "word": " ESPER", 
 "freq":8
},
{
 "word": " ESQUE", 
 "freq":20
},
{
 "word": " ESREY", 
 "freq":48
},
{
 "word": " ESSAY", 
 "freq":304
},
{
 "word": " ESSEN", 
 "freq":17
},
{
 "word": " ESSEX", 
 "freq":136
},
{
 "word": " ESTEE", 
 "freq":72
},
{
 "word": " ESTES", 
 "freq":50
},
{
 "word": " ESTEY", 
 "freq":18
},
{
 "word": " ETHAN", 
 "freq":88
},
{
 "word": " ETHEL", 
 "freq":97
},
{
 "word": " ETHER", 
 "freq":69
},
{
 "word": " ETHIC", 
 "freq":224
},
{
 "word": " ETHOS", 
 "freq":47
},
{
 "word": " ETHYL", 
 "freq":84
},
{
 "word": " ETTEN", 
 "freq":16
},
{
 "word": " EVADE", 
 "freq":189
},
{
 "word": " EVANS", 
 "freq":1322
},
{
 "word": " EVENT", 
 "freq":4437
},
{
 "word": " EVERS", 
 "freq":91
},
{
 "word": " EVERT", 
 "freq":51
},
{
 "word": " EVERY", 
 "freq":17159
},
{
 "word": " EVIAN", 
 "freq":40
},
{
 "word": " EVICT", 
 "freq":121
},
{
 "word": " EVILS", 
 "freq":101
},
{
 "word": " EVITA", 
 "freq":18
},
{
 "word": " EVOKE", 
 "freq":106
},
{
 "word": " EWALD", 
 "freq":28
},
{
 "word": " EWELL", 
 "freq":17
},
{
 "word": " EWING", 
 "freq":187
},
{
 "word": " EXACT", 
 "freq":1041
},
{
 "word": " EXAMS", 
 "freq":317
},
{
 "word": " EXCEL", 
 "freq":214
},
{
 "word": " EXECS", 
 "freq":40
},
{
 "word": " EXERT", 
 "freq":252
},
{
 "word": " EXIDE", 
 "freq":18
},
{
 "word": " EXILE", 
 "freq":1355
},
{
 "word": " EXIST", 
 "freq":1773
},
{
 "word": " EXITS", 
 "freq":164
},
{
 "word": " EXLEY", 
 "freq":88
},
{
 "word": " EXPEL", 
 "freq":207
},
{
 "word": " EXPOS", 
 "freq":108
},
{
 "word": " EXTOL", 
 "freq":21
},
{
 "word": " EXTON", 
 "freq":23
},
{
 "word": " EXTRA", 
 "freq":3455
},
{
 "word": " EXUDE", 
 "freq":15
},
{
 "word": " EXXON", 
 "freq":2593
},
{
 "word": " EYTON", 
 "freq":13
},
{
 "word": " EZELL", 
 "freq":27
},
{
 "word": " FABER", 
 "freq":103
},
{
 "word": " FABIO", 
 "freq":46
},
{
 "word": " FABLE", 
 "freq":57
},
{
 "word": " FABRI", 
 "freq":7
},
{
 "word": " FACED", 
 "freq":3029
},
{
 "word": " FACES", 
 "freq":4391
},
{
 "word": " FACET", 
 "freq":71
},
{
 "word": " FACTO", 
 "freq":313
},
{
 "word": " FACTS", 
 "freq":1637
},
{
 "word": " FADED", 
 "freq":461
},
{
 "word": " FADEL", 
 "freq":14
},
{
 "word": " FADES", 
 "freq":69
},
{
 "word": " FAGAN", 
 "freq":85
},
{
 "word": " FAGEN", 
 "freq":25
},
{
 "word": " FAHEY", 
 "freq":40
},
{
 "word": " FAILS", 
 "freq":953
},
{
 "word": " FAINT", 
 "freq":182
},
{
 "word": " FAIRE", 
 "freq":104
},
{
 "word": " FAIRS", 
 "freq":95
},
{
 "word": " FAIRY", 
 "freq":212
},
{
 "word": " FAITH", 
 "freq":2142
},
{
 "word": " FAKED", 
 "freq":80
},
{
 "word": " FAKES", 
 "freq":51
},
{
 "word": " FALCO", 
 "freq":20
},
{
 "word": " FALDO", 
 "freq":55
},
{
 "word": " FALIN", 
 "freq":34
},
{
 "word": " FALLS", 
 "freq":1953
},
{
 "word": " FALSE", 
 "freq":2834
},
{
 "word": " FAMED", 
 "freq":392
},
{
 "word": " FAMER", 
 "freq":49
},
{
 "word": " FANCY", 
 "freq":499
},
{
 "word": " FANGS", 
 "freq":24
},
{
 "word": " FANNY", 
 "freq":59
},
{
 "word": " FANUC", 
 "freq":56
},
{
 "word": " FARAH", 
 "freq":114
},
{
 "word": " FARCE", 
 "freq":139
},
{
 "word": " FARED", 
 "freq":369
},
{
 "word": " FARES", 
 "freq":1475
},
{
 "word": " FARGO", 
 "freq":556
},
{
 "word": " FARID", 
 "freq":18
},
{
 "word": " FARIS", 
 "freq":40
},
{
 "word": " FARMS", 
 "freq":1439
},
{
 "word": " FARSI", 
 "freq":43
},
{
 "word": " FATAH", 
 "freq":374
},
{
 "word": " FATAL", 
 "freq":1361
},
{
 "word": " FATED", 
 "freq":223
},
{
 "word": " FATES", 
 "freq":77
},
{
 "word": " FATHI", 
 "freq":23
},
{
 "word": " FATTY", 
 "freq":164
},
{
 "word": " FAUCI", 
 "freq":59
},
{
 "word": " FAULK", 
 "freq":24
},
{
 "word": " FAULT", 
 "freq":1168
},
{
 "word": " FAUNA", 
 "freq":31
},
{
 "word": " FAURE", 
 "freq":12
},
{
 "word": " FAUST", 
 "freq":66
},
{
 "word": " FAVOR", 
 "freq":4367
},
{
 "word": " FAWAZ", 
 "freq":24
},
{
 "word": " FAXED", 
 "freq":72
},
{
 "word": " FAXES", 
 "freq":126
},
{
 "word": " FAYED", 
 "freq":23
},
{
 "word": " FAYEZ", 
 "freq":18
},
{
 "word": " FAZED", 
 "freq":29
},
{
 "word": " FAZIO", 
 "freq":97
},
{
 "word": " FEARS", 
 "freq":3588
},
{
 "word": " FEAST", 
 "freq":282
},
{
 "word": " FEATS", 
 "freq":64
},
{
 "word": " FECAL", 
 "freq":24
},
{
 "word": " FECES", 
 "freq":56
},
{
 "word": " FEDER", 
 "freq":22
},
{
 "word": " FEEDS", 
 "freq":220
},
{
 "word": " FEELS", 
 "freq":1579
},
{
 "word": " FEELY", 
 "freq":18
},
{
 "word": " FEIGN", 
 "freq":18
},
{
 "word": " FELDE", 
 "freq":16
},
{
 "word": " FELDT", 
 "freq":19
},
{
 "word": " FELIX", 
 "freq":341
},
{
 "word": " FELLA", 
 "freq":25
},
{
 "word": " FELON", 
 "freq":117
},
{
 "word": " FEMME", 
 "freq":20
},
{
 "word": " FEMSA", 
 "freq":28
},
{
 "word": " FENCE", 
 "freq":844
},
{
 "word": " FENDI", 
 "freq":16
},
{
 "word": " FERAL", 
 "freq":15
},
{
 "word": " FERMI", 
 "freq":26
},
{
 "word": " FERNS", 
 "freq":32
},
{
 "word": " FERRE", 
 "freq":52
},
{
 "word": " FERRI", 
 "freq":19
},
{
 "word": " FERRO", 
 "freq":88
},
{
 "word": " FERRY", 
 "freq":764
},
{
 "word": " FESCO", 
 "freq":11
},
{
 "word": " FETAL", 
 "freq":329
},
{
 "word": " FETCH", 
 "freq":281
},
{
 "word": " FETED", 
 "freq":31
},
{
 "word": " FETUS", 
 "freq":378
},
{
 "word": " FEUDS", 
 "freq":56
},
{
 "word": " FEUER", 
 "freq":13
},
{
 "word": " FEVER", 
 "freq":585
},
{
 "word": " FEWER", 
 "freq":3527
},
{
 "word": " FHLMC", 
 "freq":14
},
{
 "word": " FIBER", 
 "freq":896
},
{
 "word": " FIBRE", 
 "freq":15
},
{
 "word": " FICUS", 
 "freq":11
},
{
 "word": " FIDEL", 
 "freq":548
},
{
 "word": " FIELD", 
 "freq":7392
},
{
 "word": " FIERO", 
 "freq":32
},
{
 "word": " FIERS", 
 "freq":122
},
{
 "word": " FIERY", 
 "freq":340
},
{
 "word": " FIFTH", 
 "freq":9949
},
{
 "word": " FIFTY", 
 "freq":106869
},
{
 "word": " FIGHT", 
 "freq":7588
},
{
 "word": " FILED", 
 "freq":11350
},
{
 "word": " FILER", 
 "freq":22
},
{
 "word": " FILES", 
 "freq":1227
},
{
 "word": " FILET", 
 "freq":39
},
{
 "word": " FILHO", 
 "freq":19
},
{
 "word": " FILIP", 
 "freq":15
},
{
 "word": " FILLS", 
 "freq":310
},
{
 "word": " FILLY", 
 "freq":23
},
{
 "word": " FILMS", 
 "freq":2503
},
{
 "word": " FILTH", 
 "freq":32
},
{
 "word": " FINAL", 
 "freq":10146
},
{
 "word": " FINCH", 
 "freq":79
},
{
 "word": " FINCK", 
 "freq":18
},
{
 "word": " FINDS", 
 "freq":1502
},
{
 "word": " FINED", 
 "freq":1879
},
{
 "word": " FINER", 
 "freq":68
},
{
 "word": " FINES", 
 "freq":1928
},
{
 "word": " FINEX", 
 "freq":23
},
{
 "word": " FINIS", 
 "freq":11
},
{
 "word": " FINKS", 
 "freq":16
},
{
 "word": " FINNS", 
 "freq":47
},
{
 "word": " FIONA", 
 "freq":31
},
{
 "word": " FIORE", 
 "freq":29
},
{
 "word": " FIRED", 
 "freq":6004
},
{
 "word": " FIRES", 
 "freq":2193
},
{
 "word": " FIRMS", 
 "freq":7861
},
{
 "word": " FIRST", 
 "freq":109957
},
{
 "word": " FIRTH", 
 "freq":22
},
{
 "word": " FISHY", 
 "freq":28
},
{
 "word": " FISKE", 
 "freq":148
},
{
 "word": " FISTS", 
 "freq":169
},
{
 "word": " FITCH", 
 "freq":244
},
{
 "word": " FITES", 
 "freq":25
},
{
 "word": " FITTS", 
 "freq":32
},
{
 "word": " FIVES", 
 "freq":299
},
{
 "word": " FIXED", 
 "freq":3523
},
{
 "word": " FIXER", 
 "freq":23
},
{
 "word": " FIXES", 
 "freq":87
},
{
 "word": " FLACK", 
 "freq":28
},
{
 "word": " FLAGS", 
 "freq":1151
},
{
 "word": " FLAIR", 
 "freq":112
},
{
 "word": " FLAKE", 
 "freq":58
},
{
 "word": " FLAKY", 
 "freq":25
},
{
 "word": " FLAME", 
 "freq":321
},
{
 "word": " FLANK", 
 "freq":102
},
{
 "word": " FLAPS", 
 "freq":136
},
{
 "word": " FLARE", 
 "freq":173
},
{
 "word": " FLASH", 
 "freq":644
},
{
 "word": " FLASK", 
 "freq":29
},
{
 "word": " FLATS", 
 "freq":343
},
{
 "word": " FLAVR", 
 "freq":18
},
{
 "word": " FLAWS", 
 "freq":325
},
{
 "word": " FLEAS", 
 "freq":55
},
{
 "word": " FLECK", 
 "freq":28
},
{
 "word": " FLEER", 
 "freq":64
},
{
 "word": " FLEES", 
 "freq":32
},
{
 "word": " FLEET", 
 "freq":2152
},
{
 "word": " FLESH", 
 "freq":294
},
{
 "word": " FLEUR", 
 "freq":14
},
{
 "word": " FLICK", 
 "freq":128
},
{
 "word": " FLIER", 
 "freq":351
},
{
 "word": " FLIES", 
 "freq":666
},
{
 "word": " FLING", 
 "freq":59
},
{
 "word": " FLINT", 
 "freq":313
},
{
 "word": " FLIPS", 
 "freq":59
},
{
 "word": " FLIRT", 
 "freq":35
},
{
 "word": " FLOAT", 
 "freq":471
},
{
 "word": " FLOCK", 
 "freq":295
},
{
 "word": " FLOES", 
 "freq":20
},
{
 "word": " FLOOD", 
 "freq":1718
},
{
 "word": " FLOOR", 
 "freq":5556
},
{
 "word": " FLOPS", 
 "freq":88
},
{
 "word": " FLORA", 
 "freq":93
},
{
 "word": " FLOSS", 
 "freq":21
},
{
 "word": " FLOUR", 
 "freq":540
},
{
 "word": " FLOUT", 
 "freq":24
},
{
 "word": " FLOWN", 
 "freq":1404
},
{
 "word": " FLOWS", 
 "freq":620
},
{
 "word": " FLOYD", 
 "freq":319
},
{
 "word": " FLUFF", 
 "freq":48
},
{
 "word": " FLUID", 
 "freq":457
},
{
 "word": " FLUKE", 
 "freq":102
},
{
 "word": " FLUNG", 
 "freq":222
},
{
 "word": " FLUNK", 
 "freq":32
},
{
 "word": " FLUOR", 
 "freq":166
},
{
 "word": " FLUSH", 
 "freq":236
},
{
 "word": " FLUTE", 
 "freq":94
},
{
 "word": " FLYBY", 
 "freq":13
},
{
 "word": " FLYER", 
 "freq":106
},
{
 "word": " FLYNN", 
 "freq":383
},
{
 "word": " FLYNT", 
 "freq":48
},
{
 "word": " FOAMS", 
 "freq":15
},
{
 "word": " FOAMY", 
 "freq":7
},
{
 "word": " FOCAL", 
 "freq":154
},
{
 "word": " FOCUS", 
 "freq":4737
},
{
 "word": " FODOR", 
 "freq":29
},
{
 "word": " FOGEL", 
 "freq":51
},
{
 "word": " FOGGY", 
 "freq":256
},
{
 "word": " FOIST", 
 "freq":17
},
{
 "word": " FOKIN", 
 "freq":12
},
{
 "word": " FOLDS", 
 "freq":45
},
{
 "word": " FOLEY", 
 "freq":1207
},
{
 "word": " FOLHA", 
 "freq":16
},
{
 "word": " FOLIC", 
 "freq":19
},
{
 "word": " FOLIO", 
 "freq":10
},
{
 "word": " FOLKS", 
 "freq":1317
},
{
 "word": " FOLLY", 
 "freq":119
},
{
 "word": " FOLSE", 
 "freq":11
},
{
 "word": " FONDA", 
 "freq":230
},
{
 "word": " FONTS", 
 "freq":43
},
{
 "word": " FOODS", 
 "freq":2278
},
{
 "word": " FOOLS", 
 "freq":118
},
{
 "word": " FOOTE", 
 "freq":235
},
{
 "word": " FORAY", 
 "freq":177
},
{
 "word": " FORCE", 
 "freq":21563
},
{
 "word": " FORDS", 
 "freq":39
},
{
 "word": " FORGE", 
 "freq":439
},
{
 "word": " FORGO", 
 "freq":217
},
{
 "word": " FORKS", 
 "freq":131
},
{
 "word": " FORMA", 
 "freq":137
},
{
 "word": " FORMS", 
 "freq":2220
},
{
 "word": " FORST", 
 "freq":23
},
{
 "word": " FORTE", 
 "freq":104
},
{
 "word": " FORTH", 
 "freq":988
},
{
 "word": " FORTY", 
 "freq":94951
},
{
 "word": " FORUM", 
 "freq":1459
},
{
 "word": " FOSSE", 
 "freq":21
},
{
 "word": " FOUAD", 
 "freq":14
},
{
 "word": " FOULS", 
 "freq":115
},
{
 "word": " FOUND", 
 "freq":24736
},
{
 "word": " FOURS", 
 "freq":91
},
{
 "word": " FOXES", 
 "freq":81
},
{
 "word": " FOYER", 
 "freq":47
},
{
 "word": " FRAGA", 
 "freq":14
},
{
 "word": " FRAIL", 
 "freq":138
},
{
 "word": " FRAME", 
 "freq":815
},
{
 "word": " FRANC", 
 "freq":635
},
{
 "word": " FRANK", 
 "freq":5079
},
{
 "word": " FRANS", 
 "freq":55
},
{
 "word": " FRANZ", 
 "freq":214
},
{
 "word": " FRAUD", 
 "freq":5265
},
{
 "word": " FREAK", 
 "freq":128
},
{
 "word": " FREDY", 
 "freq":15
},
{
 "word": " FREED", 
 "freq":2256
},
{
 "word": " FREEH", 
 "freq":19
},
{
 "word": " FREER", 
 "freq":274
},
{
 "word": " FREES", 
 "freq":79
},
{
 "word": " FREIA", 
 "freq":22
},
{
 "word": " FREIJ", 
 "freq":45
},
{
 "word": " FREON", 
 "freq":30
},
{
 "word": " FRERE", 
 "freq":32
},
{
 "word": " FRESH", 
 "freq":3200
},
{
 "word": " FRETS", 
 "freq":82
},
{
 "word": " FREUD", 
 "freq":87
},
{
 "word": " FRIAR", 
 "freq":108
},
{
 "word": " FRICK", 
 "freq":48
},
{
 "word": " FRIDA", 
 "freq":23
},
{
 "word": " FRIED", 
 "freq":700
},
{
 "word": " FRIES", 
 "freq":218
},
{
 "word": " FRIST", 
 "freq":28
},
{
 "word": " FRITO", 
 "freq":195
},
{
 "word": " FRITZ", 
 "freq":129
},
{
 "word": " FROGS", 
 "freq":97
},
{
 "word": " FRONT", 
 "freq":10960
},
{
 "word": " FROSH", 
 "freq":16
},
{
 "word": " FROST", 
 "freq":528
},
{
 "word": " FROTH", 
 "freq":21
},
{
 "word": " FROWN", 
 "freq":38
},
{
 "word": " FROZE", 
 "freq":259
},
{
 "word": " FRUIT", 
 "freq":2000
},
{
 "word": " FRUTA", 
 "freq":9
},
{
 "word": " FRYER", 
 "freq":98
},
{
 "word": " FUCHS", 
 "freq":71
},
{
 "word": " FUDGE", 
 "freq":65
},
{
 "word": " FUELS", 
 "freq":618
},
{
 "word": " FUGUE", 
 "freq":18
},
{
 "word": " FUISZ", 
 "freq":12
},
{
 "word": " FUJII", 
 "freq":30
},
{
 "word": " FULDA", 
 "freq":13
},
{
 "word": " FULLY", 
 "freq":3584
},
{
 "word": " FULTZ", 
 "freq":23
},
{
 "word": " FUMED", 
 "freq":61
},
{
 "word": " FUMES", 
 "freq":355
},
{
 "word": " FUMIO", 
 "freq":26
},
{
 "word": " FUNDS", 
 "freq":16712
},
{
 "word": " FUNGI", 
 "freq":52
},
{
 "word": " FUNKY", 
 "freq":73
},
{
 "word": " FUNNY", 
 "freq":988
},
{
 "word": " FUQUA", 
 "freq":76
},
{
 "word": " FUROR", 
 "freq":270
},
{
 "word": " FURRY", 
 "freq":47
},
{
 "word": " FURST", 
 "freq":20
},
{
 "word": " FURTH", 
 "freq":17
},
{
 "word": " FUSCO", 
 "freq":48
},
{
 "word": " FUSED", 
 "freq":31
},
{
 "word": " FUSES", 
 "freq":44
},
{
 "word": " FUSSY", 
 "freq":44
},
{
 "word": " FUTCH", 
 "freq":14
},
{
 "word": " FUZZY", 
 "freq":209
},
{
 "word": " GABEL", 
 "freq":89
},
{
 "word": " GABLE", 
 "freq":94
},
{
 "word": " GABON", 
 "freq":130
},
{
 "word": " GABOR", 
 "freq":232
},
{
 "word": " GACHA", 
 "freq":100
},
{
 "word": " GAELS", 
 "freq":35
},
{
 "word": " GAETZ", 
 "freq":54
},
{
 "word": " GAFFE", 
 "freq":53
},
{
 "word": " GAGNE", 
 "freq":16
},
{
 "word": " GAILY", 
 "freq":12
},
{
 "word": " GAINS", 
 "freq":7903
},
{
 "word": " GALAN", 
 "freq":106
},
{
 "word": " GALAS", 
 "freq":19
},
{
 "word": " GALEN", 
 "freq":73
},
{
 "word": " GALES", 
 "freq":16
},
{
 "word": " GALIL", 
 "freq":11
},
{
 "word": " GALLE", 
 "freq":18
},
{
 "word": " GALLO", 
 "freq":251
},
{
 "word": " GAMAL", 
 "freq":51
},
{
 "word": " GAMAY", 
 "freq":12
},
{
 "word": " GAMES", 
 "freq":5776
},
{
 "word": " GAMEZ", 
 "freq":12
},
{
 "word": " GAMMA", 
 "freq":129
},
{
 "word": " GAMUT", 
 "freq":76
},
{
 "word": " GANDY", 
 "freq":12
},
{
 "word": " GANES", 
 "freq":127
},
{
 "word": " GANGS", 
 "freq":614
},
{
 "word": " GANIS", 
 "freq":23
},
{
 "word": " GANSU", 
 "freq":19
},
{
 "word": " GANTT", 
 "freq":164
},
{
 "word": " GARAY", 
 "freq":19
},
{
 "word": " GARBO", 
 "freq":67
},
{
 "word": " GARDE", 
 "freq":145
},
{
 "word": " GARIN", 
 "freq":22
},
{
 "word": " GARRI", 
 "freq":30
},
{
 "word": " GARRY", 
 "freq":191
},
{
 "word": " GARTH", 
 "freq":99
},
{
 "word": " GARZA", 
 "freq":255
},
{
 "word": " GASCH", 
 "freq":49
},
{
 "word": " GASES", 
 "freq":532
},
{
 "word": " GASPS", 
 "freq":31
},
{
 "word": " GATED", 
 "freq":12
},
{
 "word": " GATES", 
 "freq":1947
},
{
 "word": " GATOR", 
 "freq":66
},
{
 "word": " GATOS", 
 "freq":818
},
{
 "word": " GAUDY", 
 "freq":46
},
{
 "word": " GAUGE", 
 "freq":696
},
{
 "word": " GAULT", 
 "freq":86
},
{
 "word": " GAUNT", 
 "freq":37
},
{
 "word": " GAUZE", 
 "freq":36
},
{
 "word": " GAVEL", 
 "freq":116
},
{
 "word": " GAVIN", 
 "freq":109
},
{
 "word": " GAYLE", 
 "freq":83
},
{
 "word": " GAZED", 
 "freq":40
},
{
 "word": " GAZES", 
 "freq":21
},
{
 "word": " GEARS", 
 "freq":161
},
{
 "word": " GEARY", 
 "freq":55
},
{
 "word": " GEDDA", 
 "freq":29
},
{
 "word": " GEENA", 
 "freq":29
},
{
 "word": " GEESE", 
 "freq":107
},
{
 "word": " GEICO", 
 "freq":61
},
{
 "word": " GEIER", 
 "freq":10
},
{
 "word": " GEIGY", 
 "freq":146
},
{
 "word": " GEIST", 
 "freq":22
},
{
 "word": " GEKAS", 
 "freq":25
},
{
 "word": " GELLI", 
 "freq":19
},
{
 "word": " GEMMA", 
 "freq":19
},
{
 "word": " GEMMO", 
 "freq":23
},
{
 "word": " GENES", 
 "freq":577
},
{
 "word": " GENIE", 
 "freq":100
},
{
 "word": " GENOA", 
 "freq":59
},
{
 "word": " GENRE", 
 "freq":197
},
{
 "word": " GENUS", 
 "freq":31
},
{
 "word": " GEOFF", 
 "freq":89
},
{
 "word": " GEORG", 
 "freq":62
},
{
 "word": " GEREN", 
 "freq":33
},
{
 "word": " GERMS", 
 "freq":45
},
{
 "word": " GERRY", 
 "freq":252
},
{
 "word": " GERTZ", 
 "freq":21
},
{
 "word": " GETTY", 
 "freq":267
},
{
 "word": " GEYER", 
 "freq":13
},
{
 "word": " GHALI", 
 "freq":103
},
{
 "word": " GHANA", 
 "freq":146
},
{
 "word": " GHARB", 
 "freq":25
},
{
 "word": " GHAZI", 
 "freq":22
},
{
 "word": " GHOST", 
 "freq":498
},
{
 "word": " GIANT", 
 "freq":4222
},
{
 "word": " GIBBS", 
 "freq":226
},
{
 "word": " GIDDY", 
 "freq":47
},
{
 "word": " GIDEL", 
 "freq":40
},
{
 "word": " GIFTS", 
 "freq":1345
},
{
 "word": " GIGOT", 
 "freq":44
},
{
 "word": " GILAN", 
 "freq":18
},
{
 "word": " GILDA", 
 "freq":36
},
{
 "word": " GILES", 
 "freq":100
},
{
 "word": " GILLS", 
 "freq":12
},
{
 "word": " GILTS", 
 "freq":52
},
{
 "word": " GIMME", 
 "freq":22
},
{
 "word": " GINNY", 
 "freq":39
},
{
 "word": " GINZA", 
 "freq":39
},
{
 "word": " GIRLS", 
 "freq":2231
},
{
 "word": " GIRON", 
 "freq":9
},
{
 "word": " GIRTH", 
 "freq":25
},
{
 "word": " GIVEN", 
 "freq":13163
},
{
 "word": " GIVER", 
 "freq":46
},
{
 "word": " GIVES", 
 "freq":4115
},
{
 "word": " GIZMO", 
 "freq":38
},
{
 "word": " GLADE", 
 "freq":17
},
{
 "word": " GLAND", 
 "freq":101
},
{
 "word": " GLARE", 
 "freq":116
},
{
 "word": " GLASS", 
 "freq":2599
},
{
 "word": " GLAXO", 
 "freq":246
},
{
 "word": " GLAZE", 
 "freq":62
},
{
 "word": " GLEAM", 
 "freq":27
},
{
 "word": " GLEAN", 
 "freq":17
},
{
 "word": " GLEMP", 
 "freq":92
},
{
 "word": " GLENN", 
 "freq":1081
},
{
 "word": " GLENS", 
 "freq":15
},
{
 "word": " GLESS", 
 "freq":38
},
{
 "word": " GLICK", 
 "freq":26
},
{
 "word": " GLIDE", 
 "freq":73
},
{
 "word": " GLINT", 
 "freq":10
},
{
 "word": " GLITZ", 
 "freq":83
},
{
 "word": " GLOAT", 
 "freq":36
},
{
 "word": " GLOBE", 
 "freq":1024
},
{
 "word": " GLOBO", 
 "freq":45
},
{
 "word": " GLOBS", 
 "freq":16
},
{
 "word": " GLOOM", 
 "freq":216
},
{
 "word": " GLORY", 
 "freq":505
},
{
 "word": " GLOSS", 
 "freq":75
},
{
 "word": " GLOVE", 
 "freq":227
},
{
 "word": " GLOWS", 
 "freq":20
},
{
 "word": " GLUCK", 
 "freq":29
},
{
 "word": " GLUED", 
 "freq":96
},
{
 "word": " GLUES", 
 "freq":13
},
{
 "word": " GLYNN", 
 "freq":69
},
{
 "word": " GNATS", 
 "freq":10
},
{
 "word": " GNEHM", 
 "freq":20
},
{
 "word": " GOALS", 
 "freq":2771
},
{
 "word": " GOATS", 
 "freq":184
},
{
 "word": " GOBIE", 
 "freq":117
},
{
 "word": " GOBLE", 
 "freq":13
},
{
 "word": " GODOT", 
 "freq":26
},
{
 "word": " GODOY", 
 "freq":61
},
{
 "word": " GOERS", 
 "freq":124
},
{
 "word": " GOETZ", 
 "freq":158
},
{
 "word": " GOING", 
 "freq":32277
},
{
 "word": " GOINS", 
 "freq":20
},
{
 "word": " GOLAN", 
 "freq":166
},
{
 "word": " GOLDA", 
 "freq":19
},
{
 "word": " GOLDE", 
 "freq":15
},
{
 "word": " GOLDS", 
 "freq":51
},
{
 "word": " GOLLY", 
 "freq":24
},
{
 "word": " GOLOB", 
 "freq":19
},
{
 "word": " GOLUB", 
 "freq":128
},
{
 "word": " GOMES", 
 "freq":43
},
{
 "word": " GOMEZ", 
 "freq":390
},
{
 "word": " GONNA", 
 "freq":303
},
{
 "word": " GONZO", 
 "freq":20
},
{
 "word": " GOOCH", 
 "freq":15
},
{
 "word": " GOODE", 
 "freq":197
},
{
 "word": " GOODS", 
 "freq":6655
},
{
 "word": " GOODY", 
 "freq":32
},
{
 "word": " GOOEY", 
 "freq":46
},
{
 "word": " GOOFY", 
 "freq":105
},
{
 "word": " GOONS", 
 "freq":21
},
{
 "word": " GOOSE", 
 "freq":223
},
{
 "word": " GOPAC", 
 "freq":21
},
{
 "word": " GORAN", 
 "freq":27
},
{
 "word": " GORBY", 
 "freq":60
},
{
 "word": " GORDY", 
 "freq":33
},
{
 "word": " GORED", 
 "freq":27
},
{
 "word": " GOREN", 
 "freq":28
},
{
 "word": " GORGE", 
 "freq":60
},
{
 "word": " GORIA", 
 "freq":23
},
{
 "word": " GORKY", 
 "freq":132
},
{
 "word": " GOTTA", 
 "freq":168
},
{
 "word": " GOTTI", 
 "freq":201
},
{
 "word": " GOUGE", 
 "freq":23
},
{
 "word": " GOUGH", 
 "freq":18
},
{
 "word": " GOULD", 
 "freq":333
},
{
 "word": " GOVAN", 
 "freq":14
},
{
 "word": " GOVPX", 
 "freq":20
},
{
 "word": " GOWER", 
 "freq":14
},
{
 "word": " GOWNS", 
 "freq":169
},
{
 "word": " GRABE", 
 "freq":22
},
{
 "word": " GRABS", 
 "freq":174
},
{
 "word": " GRACE", 
 "freq":1009
},
{
 "word": " GRADE", 
 "freq":2772
},
{
 "word": " GRADS", 
 "freq":58
},
{
 "word": " GRADY", 
 "freq":91
},
{
 "word": " GRAEF", 
 "freq":14
},
{
 "word": " GRAFF", 
 "freq":37
},
{
 "word": " GRAFT", 
 "freq":117
},
{
 "word": " GRAIL", 
 "freq":45
},
{
 "word": " GRAIN", 
 "freq":3342
},
{
 "word": " GRAMM", 
 "freq":894
},
{
 "word": " GRAMS", 
 "freq":265
},
{
 "word": " GRAND", 
 "freq":5885
},
{
 "word": " GRANO", 
 "freq":19
},
{
 "word": " GRANT", 
 "freq":3252
},
{
 "word": " GRAPE", 
 "freq":200
},
{
 "word": " GRAPH", 
 "freq":60
},
{
 "word": " GRASP", 
 "freq":309
},
{
 "word": " GRASS", 
 "freq":1156
},
{
 "word": " GRATA", 
 "freq":25
},
{
 "word": " GRATE", 
 "freq":37
},
{
 "word": " GRAVE", 
 "freq":1183
},
{
 "word": " GRAVY", 
 "freq":92
},
{
 "word": " GRAYS", 
 "freq":47
},
{
 "word": " GRAZE", 
 "freq":72
},
{
 "word": " GREAT", 
 "freq":15116
},
{
 "word": " GRECO", 
 "freq":110
},
{
 "word": " GREED", 
 "freq":397
},
{
 "word": " GREEK", 
 "freq":1531
},
{
 "word": " GREEN", 
 "freq":4807
},
{
 "word": " GREER", 
 "freq":169
},
{
 "word": " GREET", 
 "freq":264
},
{
 "word": " GREGG", 
 "freq":431
},
{
 "word": " GREIF", 
 "freq":11
},
{
 "word": " GRETA", 
 "freq":55
},
{
 "word": " GREVE", 
 "freq":17
},
{
 "word": " GRIDS", 
 "freq":22
},
{
 "word": " GRIEF", 
 "freq":384
},
{
 "word": " GRIER", 
 "freq":15
},
{
 "word": " GRIFF", 
 "freq":16
},
{
 "word": " GRIGG", 
 "freq":41
},
{
 "word": " GRILL", 
 "freq":256
},
{
 "word": " GRIME", 
 "freq":23
},
{
 "word": " GRIMM", 
 "freq":75
},
{
 "word": " GRIMY", 
 "freq":29
},
{
 "word": " GRIND", 
 "freq":162
},
{
 "word": " GRINS", 
 "freq":42
},
{
 "word": " GRIPE", 
 "freq":78
},
{
 "word": " GRIPS", 
 "freq":167
},
{
 "word": " GRISE", 
 "freq":13
},
{
 "word": " GRIST", 
 "freq":31
},
{
 "word": " GRITS", 
 "freq":36
},
{
 "word": " GROAN", 
 "freq":25
},
{
 "word": " GROEP", 
 "freq":20
},
{
 "word": " GROIN", 
 "freq":111
},
{
 "word": " GROOM", 
 "freq":156
},
{
 "word": " GROPE", 
 "freq":20
},
{
 "word": " GROSS", 
 "freq":3042
},
{
 "word": " GROSZ", 
 "freq":198
},
{
 "word": " GROUP", 
 "freq":44058
},
{
 "word": " GROVE", 
 "freq":720
},
{
 "word": " GROWL", 
 "freq":19
},
{
 "word": " GROWN", 
 "freq":2589
},
{
 "word": " GROWS", 
 "freq":653
},
{
 "word": " GRUBB", 
 "freq":48
},
{
 "word": " GRUFF", 
 "freq":40
},
{
 "word": " GRUNT", 
 "freq":31
},
{
 "word": " GRUPO", 
 "freq":198
},
{
 "word": " GTECH", 
 "freq":51
},
{
 "word": " GUARD", 
 "freq":6550
},
{
 "word": " GUBER", 
 "freq":100
},
{
 "word": " GUCCI", 
 "freq":106
},
{
 "word": " GUESS", 
 "freq":1813
},
{
 "word": " GUEST", 
 "freq":1191
},
{
 "word": " GUIDA", 
 "freq":13
},
{
 "word": " GUIDE", 
 "freq":1844
},
{
 "word": " GUIDO", 
 "freq":68
},
{
 "word": " GUILD", 
 "freq":580
},
{
 "word": " GUILE", 
 "freq":11
},
{
 "word": " GUILT", 
 "freq":739
},
{
 "word": " GUINN", 
 "freq":15
},
{
 "word": " GUISE", 
 "freq":124
},
{
 "word": " GULAG", 
 "freq":50
},
{
 "word": " GULCH", 
 "freq":51
},
{
 "word": " GULLS", 
 "freq":46
},
{
 "word": " GULLY", 
 "freq":20
},
{
 "word": " GUMBO", 
 "freq":36
},
{
 "word": " GUMMY", 
 "freq":15
},
{
 "word": " GUNDY", 
 "freq":83
},
{
 "word": " GUPTA", 
 "freq":47
},
{
 "word": " GURUS", 
 "freq":64
},
{
 "word": " GUSTE", 
 "freq":17
},
{
 "word": " GUSTO", 
 "freq":45
},
{
 "word": " GUSTS", 
 "freq":276
},
{
 "word": " GUSTY", 
 "freq":143
},
{
 "word": " GUTSY", 
 "freq":55
},
{
 "word": " GWALA", 
 "freq":17
},
{
 "word": " GWYNN", 
 "freq":59
},
{
 "word": " GYPSY", 
 "freq":149
},
{
 "word": " GYULA", 
 "freq":49
},
{
 "word": " HAAST", 
 "freq":18
},
{
 "word": " HABER", 
 "freq":69
},
{
 "word": " HABIB", 
 "freq":67
},
{
 "word": " HABIT", 
 "freq":471
},
{
 "word": " HABRE", 
 "freq":69
},
{
 "word": " HACKS", 
 "freq":35
},
{
 "word": " HADEN", 
 "freq":25
},
{
 "word": " HAEBE", 
 "freq":9
},
{
 "word": " HAFER", 
 "freq":21
},
{
 "word": " HAFEZ", 
 "freq":256
},
{
 "word": " HAFIF", 
 "freq":25
},
{
 "word": " HAFTS", 
 "freq":28
},
{
 "word": " HAGAN", 
 "freq":80
},
{
 "word": " HAGAR", 
 "freq":16
},
{
 "word": " HAGEN", 
 "freq":81
},
{
 "word": " HAGER", 
 "freq":47
},
{
 "word": " HAGUE", 
 "freq":157
},
{
 "word": " HAIFA", 
 "freq":115
},
{
 "word": " HAIKU", 
 "freq":13
},
{
 "word": " HAILE", 
 "freq":111
},
{
 "word": " HAILS", 
 "freq":42
},
{
 "word": " HAIRS", 
 "freq":60
},
{
 "word": " HAIRY", 
 "freq":77
},
{
 "word": " HAITI", 
 "freq":836
},
{
 "word": " HAJEK", 
 "freq":19
},
{
 "word": " HAKIM", 
 "freq":236
},
{
 "word": " HALEN", 
 "freq":40
},
{
 "word": " HALES", 
 "freq":16
},
{
 "word": " HALEY", 
 "freq":259
},
{
 "word": " HALIM", 
 "freq":27
},
{
 "word": " HALLE", 
 "freq":37
},
{
 "word": " HALLS", 
 "freq":492
},
{
 "word": " HALTS", 
 "freq":73
},
{
 "word": " HALVE", 
 "freq":97
},
{
 "word": " HAMAD", 
 "freq":32
},
{
 "word": " HAMAS", 
 "freq":149
},
{
 "word": " HAMED", 
 "freq":15
},
{
 "word": " HAMEL", 
 "freq":51
},
{
 "word": " HAMER", 
 "freq":41
},
{
 "word": " HAMID", 
 "freq":52
},
{
 "word": " HANAN", 
 "freq":29
},
{
 "word": " HANCE", 
 "freq":54
},
{
 "word": " HANDS", 
 "freq":5822
},
{
 "word": " HANDY", 
 "freq":238
},
{
 "word": " HANES", 
 "freq":41
},
{
 "word": " HANEY", 
 "freq":50
},
{
 "word": " HANGS", 
 "freq":245
},
{
 "word": " HANKS", 
 "freq":121
},
{
 "word": " HANKY", 
 "freq":18
},
{
 "word": " HANNA", 
 "freq":221
},
{
 "word": " HANNS", 
 "freq":12
},
{
 "word": " HANOI", 
 "freq":576
},
{
 "word": " HANSA", 
 "freq":15
},
{
 "word": " HAPPY", 
 "freq":3660
},
{
 "word": " HARAM", 
 "freq":30
},
{
 "word": " HARDY", 
 "freq":377
},
{
 "word": " HAREL", 
 "freq":28
},
{
 "word": " HAREM", 
 "freq":26
},
{
 "word": " HARKS", 
 "freq":21
},
{
 "word": " HARMS", 
 "freq":57
},
{
 "word": " HARRI", 
 "freq":23
},
{
 "word": " HARRY", 
 "freq":1800
},
{
 "word": " HARSH", 
 "freq":1025
},
{
 "word": " HARTE", 
 "freq":33
},
{
 "word": " HARTY", 
 "freq":19
},
{
 "word": " HARTZ", 
 "freq":19
},
{
 "word": " HARUO", 
 "freq":24
},
{
 "word": " HASAN", 
 "freq":65
},
{
 "word": " HASHI", 
 "freq":24
},
{
 "word": " HASTE", 
 "freq":70
},
{
 "word": " HASTY", 
 "freq":139
},
{
 "word": " HATCH", 
 "freq":676
},
{
 "word": " HATED", 
 "freq":322
},
{
 "word": " HATEM", 
 "freq":15
},
{
 "word": " HATES", 
 "freq":116
},
{
 "word": " HATTA", 
 "freq":17
},
{
 "word": " HAUCK", 
 "freq":90
},
{
 "word": " HAUER", 
 "freq":25
},
{
 "word": " HAULS", 
 "freq":45
},
{
 "word": " HAUNT", 
 "freq":184
},
{
 "word": " HAUTE", 
 "freq":86
},
{
 "word": " HAVAS", 
 "freq":43
},
{
 "word": " HAVEL", 
 "freq":641
},
{
 "word": " HAVEN", 
 "freq":852
},
{
 "word": " HAVES", 
 "freq":52
},
{
 "word": " HAVOC", 
 "freq":269
},
{
 "word": " HAVRE", 
 "freq":36
},
{
 "word": " HAWES", 
 "freq":16
},
{
 "word": " HAWKE", 
 "freq":185
},
{
 "word": " HAWKS", 
 "freq":246
},
{
 "word": " HAYDN", 
 "freq":28
},
{
 "word": " HAYEK", 
 "freq":54
},
{
 "word": " HAYES", 
 "freq":604
},
{
 "word": " HAZEL", 
 "freq":94
},
{
 "word": " HAZEN", 
 "freq":25
},
{
 "word": " HEADS", 
 "freq":3563
},
{
 "word": " HEADY", 
 "freq":185
},
{
 "word": " HEALD", 
 "freq":22
},
{
 "word": " HEALS", 
 "freq":20
},
{
 "word": " HEALY", 
 "freq":190
},
{
 "word": " HEAPS", 
 "freq":43
},
{
 "word": " HEARD", 
 "freq":6022
},
{
 "word": " HEARN", 
 "freq":45
},
{
 "word": " HEARS", 
 "freq":208
},
{
 "word": " HEART", 
 "freq":8183
},
{
 "word": " HEATH", 
 "freq":201
},
{
 "word": " HEATS", 
 "freq":90
},
{
 "word": " HEAVE", 
 "freq":26
},
{
 "word": " HEAVY", 
 "freq":8181
},
{
 "word": " HEBEI", 
 "freq":19
},
{
 "word": " HEBER", 
 "freq":13
},
{
 "word": " HECHT", 
 "freq":129
},
{
 "word": " HECLA", 
 "freq":24
},
{
 "word": " HEDDA", 
 "freq":45
},
{
 "word": " HEDGE", 
 "freq":642
},
{
 "word": " HEELS", 
 "freq":567
},
{
 "word": " HEFTY", 
 "freq":794
},
{
 "word": " HEGEL", 
 "freq":14
},
{
 "word": " HEHAI", 
 "freq":16
},
{
 "word": " HEIDI", 
 "freq":129
},
{
 "word": " HEIER", 
 "freq":18
},
{
 "word": " HEIJN", 
 "freq":19
},
{
 "word": " HEINE", 
 "freq":63
},
{
 "word": " HEINZ", 
 "freq":625
},
{
 "word": " HEIRS", 
 "freq":231
},
{
 "word": " HEISE", 
 "freq":16
},
{
 "word": " HEIST", 
 "freq":58
},
{
 "word": " HELEN", 
 "freq":540
},
{
 "word": " HELGA", 
 "freq":30
},
{
 "word": " HELIN", 
 "freq":13
},
{
 "word": " HELIX", 
 "freq":14
},
{
 "word": " HELLO", 
 "freq":194
},
{
 "word": " HELLS", 
 "freq":18
},
{
 "word": " HELMS", 
 "freq":779
},
{
 "word": " HELMY", 
 "freq":15
},
{
 "word": " HELPS", 
 "freq":1816
},
{
 "word": " HEMET", 
 "freq":17
},
{
 "word": " HENAN", 
 "freq":20
},
{
 "word": " HENCE", 
 "freq":328
},
{
 "word": " HENKE", 
 "freq":33
},
{
 "word": " HENRI", 
 "freq":241
},
{
 "word": " HENRY", 
 "freq":2792
},
{
 "word": " HERAT", 
 "freq":36
},
{
 "word": " HERBS", 
 "freq":159
},
{
 "word": " HERDS", 
 "freq":180
},
{
 "word": " HEROD", 
 "freq":24
},
{
 "word": " HERON", 
 "freq":25
},
{
 "word": " HEROS", 
 "freq":27
},
{
 "word": " HERSH", 
 "freq":71
},
{
 "word": " HERTZ", 
 "freq":186
},
{
 "word": " HERVE", 
 "freq":20
},
{
 "word": " HESSE", 
 "freq":84
},
{
 "word": " HETCH", 
 "freq":53
},
{
 "word": " HEUER", 
 "freq":28
},
{
 "word": " HEYER", 
 "freq":13
},
{
 "word": " HIATT", 
 "freq":46
},
{
 "word": " HIBEY", 
 "freq":37
},
{
 "word": " HICKS", 
 "freq":320
},
{
 "word": " HIDEO", 
 "freq":24
},
{
 "word": " HIDES", 
 "freq":135
},
{
 "word": " HIGGS", 
 "freq":21
},
{
 "word": " HIGHS", 
 "freq":1421
},
{
 "word": " HIKED", 
 "freq":73
},
{
 "word": " HIKER", 
 "freq":21
},
{
 "word": " HIKES", 
 "freq":390
},
{
 "word": " HILDA", 
 "freq":39
},
{
 "word": " HILER", 
 "freq":19
},
{
 "word": " HILLS", 
 "freq":3164
},
{
 "word": " HILLY", 
 "freq":85
},
{
 "word": " HIMES", 
 "freq":14
},
{
 "word": " HINDI", 
 "freq":32
},
{
 "word": " HINDS", 
 "freq":23
},
{
 "word": " HINDU", 
 "freq":632
},
{
 "word": " HINER", 
 "freq":20
},
{
 "word": " HINES", 
 "freq":172
},
{
 "word": " HINGE", 
 "freq":114
},
{
 "word": " HINTS", 
 "freq":335
},
{
 "word": " HINTZ", 
 "freq":29
},
{
 "word": " HIRAM", 
 "freq":33
},
{
 "word": " HIRED", 
 "freq":3234
},
{
 "word": " HIRES", 
 "freq":216
},
{
 "word": " HIRSH", 
 "freq":26
},
{
 "word": " HIRST", 
 "freq":23
},
{
 "word": " HITCH", 
 "freq":138
},
{
 "word": " HIVES", 
 "freq":45
},
{
 "word": " HMONG", 
 "freq":59
},
{
 "word": " HOANG", 
 "freq":25
},
{
 "word": " HOARD", 
 "freq":73
},
{
 "word": " HOARE", 
 "freq":50
},
{
 "word": " HOARY", 
 "freq":13
},
{
 "word": " HOBBS", 
 "freq":89
},
{
 "word": " HOBBY", 
 "freq":238
},
{
 "word": " HOBOS", 
 "freq":16
},
{
 "word": " HOCKE", 
 "freq":20
},
{
 "word": " HODEL", 
 "freq":113
},
{
 "word": " HODES", 
 "freq":11
},
{
 "word": " HODGE", 
 "freq":59
},
{
 "word": " HOFFA", 
 "freq":103
},
{
 "word": " HOGAN", 
 "freq":267
},
{
 "word": " HOGUE", 
 "freq":43
},
{
 "word": " HOIST", 
 "freq":58
},
{
 "word": " HOKEY", 
 "freq":32
},
{
 "word": " HOLDS", 
 "freq":3507
},
{
 "word": " HOLED", 
 "freq":157
},
{
 "word": " HOLES", 
 "freq":907
},
{
 "word": " HOLLY", 
 "freq":587
},
{
 "word": " HOLTZ", 
 "freq":39
},
{
 "word": " HOMAN", 
 "freq":15
},
{
 "word": " HOMER", 
 "freq":490
},
{
 "word": " HOMES", 
 "freq":8972
},
{
 "word": " HOMEY", 
 "freq":56
},
{
 "word": " HONDA", 
 "freq":1206
},
{
 "word": " HONDO", 
 "freq":34
},
{
 "word": " HONED", 
 "freq":79
},
{
 "word": " HONEY", 
 "freq":493
},
{
 "word": " HONIG", 
 "freq":145
},
{
 "word": " HONKY", 
 "freq":50
},
{
 "word": " HONOR", 
 "freq":2477
},
{
 "word": " HOOCH", 
 "freq":13
},
{
 "word": " HOODS", 
 "freq":74
},
{
 "word": " HOOKS", 
 "freq":343
},
{
 "word": " HOOKY", 
 "freq":16
},
{
 "word": " HOOPS", 
 "freq":92
},
{
 "word": " HOOTS", 
 "freq":17
},
{
 "word": " HOPED", 
 "freq":3345
},
{
 "word": " HOPES", 
 "freq":6754
},
{
 "word": " HOPPE", 
 "freq":41
},
{
 "word": " HORAN", 
 "freq":67
},
{
 "word": " HORDE", 
 "freq":50
},
{
 "word": " HORNE", 
 "freq":99
},
{
 "word": " HORNS", 
 "freq":295
},
{
 "word": " HORNY", 
 "freq":14
},
{
 "word": " HORSE", 
 "freq":1433
},
{
 "word": " HORST", 
 "freq":83
},
{
 "word": " HOSEA", 
 "freq":22
},
{
 "word": " HOSED", 
 "freq":17
},
{
 "word": " HOSES", 
 "freq":161
},
{
 "word": " HOSNI", 
 "freq":296
},
{
 "word": " HOSTS", 
 "freq":416
},
{
 "word": " HOTEL", 
 "freq":6784
},
{
 "word": " HOTLY", 
 "freq":175
},
{
 "word": " HOUCK", 
 "freq":13
},
{
 "word": " HOUGH", 
 "freq":55
},
{
 "word": " HOUMA", 
 "freq":15
},
{
 "word": " HOUND", 
 "freq":67
},
{
 "word": " HOURS", 
 "freq":14639
},
{
 "word": " HOUSE", 
 "freq":42123
},
{
 "word": " HOVER", 
 "freq":91
},
{
 "word": " HOVIS", 
 "freq":45
},
{
 "word": " HOWDY", 
 "freq":17
},
{
 "word": " HOWES", 
 "freq":25
},
{
 "word": " HOWIE", 
 "freq":38
},
{
 "word": " HOWLS", 
 "freq":37
},
{
 "word": " HOXHA", 
 "freq":64
},
{
 "word": " HOYAS", 
 "freq":10
},
{
 "word": " HOYER", 
 "freq":87
},
{
 "word": " HOYLE", 
 "freq":47
},
{
 "word": " HOYOS", 
 "freq":14
},
{
 "word": " HOYTE", 
 "freq":22
},
{
 "word": " HRAWI", 
 "freq":246
},
{
 "word": " HRBEK", 
 "freq":43
},
{
 "word": " HRKAC", 
 "freq":21
},
{
 "word": " HSIAO", 
 "freq":22
},
{
 "word": " HSIEH", 
 "freq":31
},
{
 "word": " HSIEN", 
 "freq":17
},
{
 "word": " HSING", 
 "freq":24
},
{
 "word": " HUANG", 
 "freq":87
},
{
 "word": " HUBBY", 
 "freq":16
},
{
 "word": " HUBCO", 
 "freq":9
},
{
 "word": " HUBEI", 
 "freq":25
},
{
 "word": " HUBER", 
 "freq":120
},
{
 "word": " HUFFY", 
 "freq":29
},
{
 "word": " HUGEL", 
 "freq":21
},
{
 "word": " HULCE", 
 "freq":15
},
{
 "word": " HULKS", 
 "freq":17
},
{
 "word": " HULLS", 
 "freq":70
},
{
 "word": " HUMAN", 
 "freq":11177
},
{
 "word": " HUMID", 
 "freq":90
},
{
 "word": " HUMOR", 
 "freq":990
},
{
 "word": " HUNAN", 
 "freq":53
},
{
 "word": " HUNCH", 
 "freq":62
},
{
 "word": " HUNDT", 
 "freq":19
},
{
 "word": " HUNKS", 
 "freq":20
},
{
 "word": " HUNKY", 
 "freq":21
},
{
 "word": " HUNTS", 
 "freq":144
},
{
 "word": " HURAL", 
 "freq":26
},
{
 "word": " HURCO", 
 "freq":19
},
{
 "word": " HURON", 
 "freq":79
},
{
 "word": " HURRY", 
 "freq":320
},
{
 "word": " HURST", 
 "freq":115
},
{
 "word": " HURTS", 
 "freq":388
},
{
 "word": " HUSAK", 
 "freq":79
},
{
 "word": " HUSKS", 
 "freq":20
},
{
 "word": " HUSKY", 
 "freq":92
},
{
 "word": " HUTCH", 
 "freq":11
},
{
 "word": " HUTTO", 
 "freq":27
},
{
 "word": " HUTUS", 
 "freq":17
},
{
 "word": " HUYNH", 
 "freq":22
},
{
 "word": " HWANG", 
 "freq":58
},
{
 "word": " HYATT", 
 "freq":288
},
{
 "word": " HYDRA", 
 "freq":16
},
{
 "word": " HYDRO", 
 "freq":219
},
{
 "word": " HYMAN", 
 "freq":114
},
{
 "word": " HYMNS", 
 "freq":102
},
{
 "word": " HYNES", 
 "freq":58
},
{
 "word": " HYONG", 
 "freq":17
},
{
 "word": " HYPED", 
 "freq":59
},
{
 "word": " HYPER", 
 "freq":58
},
{
 "word": " IANNI", 
 "freq":18
},
{
 "word": " IASON", 
 "freq":17
},
{
 "word": " IBSEN", 
 "freq":17
},
{
 "word": " ICAHN", 
 "freq":878
},
{
 "word": " ICING", 
 "freq":117
},
{
 "word": " ICKES", 
 "freq":37
},
{
 "word": " ICKEY", 
 "freq":16
},
{
 "word": " ICONS", 
 "freq":157
},
{
 "word": " IDAHO", 
 "freq":1607
},
{
 "word": " IDEAL", 
 "freq":802
},
{
 "word": " IDEAS", 
 "freq":2764
},
{
 "word": " IDIOM", 
 "freq":26
},
{
 "word": " IDIOT", 
 "freq":60
},
{
 "word": " IDLED", 
 "freq":270
},
{
 "word": " IDOLS", 
 "freq":32
},
{
 "word": " IDRIS", 
 "freq":21
},
{
 "word": " IFINT", 
 "freq":14
},
{
 "word": " IKEDA", 
 "freq":51
},
{
 "word": " ILENE", 
 "freq":22
},
{
 "word": " ILONA", 
 "freq":20
},
{
 "word": " IMAGE", 
 "freq":3691
},
{
 "word": " IMANI", 
 "freq":28
},
{
 "word": " IMPEL", 
 "freq":16
},
{
 "word": " IMPLY", 
 "freq":260
},
{
 "word": " INANE", 
 "freq":28
},
{
 "word": " INCAS", 
 "freq":14
},
{
 "word": " INCUR", 
 "freq":183
},
{
 "word": " INDEX", 
 "freq":17243
},
{
 "word": " INDIA", 
 "freq":3152
},
{
 "word": " INDIO", 
 "freq":14
},
{
 "word": " INEPT", 
 "freq":101
},
{
 "word": " INERT", 
 "freq":50
},
{
 "word": " INFER", 
 "freq":40
},
{
 "word": " INGLE", 
 "freq":29
},
{
 "word": " INGOT", 
 "freq":40
},
{
 "word": " INIKI", 
 "freq":36
},
{
 "word": " INKED", 
 "freq":17
},
{
 "word": " INLET", 
 "freq":93
},
{
 "word": " INMAN", 
 "freq":89
},
{
 "word": " INNER", 
 "freq":1324
},
{
 "word": " INNIS", 
 "freq":17
},
{
 "word": " INOUE", 
 "freq":40
},
{
 "word": " INPUT", 
 "freq":293
},
{
 "word": " INTEL", 
 "freq":1710
},
{
 "word": " INTER", 
 "freq":573
},
{
 "word": " INTIS", 
 "freq":19
},
{
 "word": " INTRA", 
 "freq":97
},
{
 "word": " INUIT", 
 "freq":28
},
{
 "word": " IPSCO", 
 "freq":18
},
{
 "word": " IQBAL", 
 "freq":22
},
{
 "word": " IQLIM", 
 "freq":16
},
{
 "word": " IRANI", 
 "freq":43
},
{
 "word": " IRAQI", 
 "freq":9565
},
{
 "word": " IRATE", 
 "freq":117
},
{
 "word": " IRENE", 
 "freq":152
},
{
 "word": " IRIAN", 
 "freq":20
},
{
 "word": " IRINA", 
 "freq":42
},
{
 "word": " IRISH", 
 "freq":2196
},
{
 "word": " IRKED", 
 "freq":80
},
{
 "word": " IRONS", 
 "freq":93
},
{
 "word": " IRONY", 
 "freq":392
},
{
 "word": " IRVIN", 
 "freq":68
},
{
 "word": " IRWIN", 
 "freq":309
},
{
 "word": " ISAAC", 
 "freq":233
},
{
 "word": " ISAAK", 
 "freq":26
},
{
 "word": " ISALY", 
 "freq":17
},
{
 "word": " ISAMU", 
 "freq":10
},
{
 "word": " ISGRO", 
 "freq":10
},
{
 "word": " ISHAM", 
 "freq":15
},
{
 "word": " ISHAQ", 
 "freq":107
},
{
 "word": " ISHII", 
 "freq":47
},
{
 "word": " ISIAH", 
 "freq":43
},
{
 "word": " ISLAM", 
 "freq":673
},
{
 "word": " ISLES", 
 "freq":36
},
{
 "word": " ISLIP", 
 "freq":10
},
{
 "word": " ISMAT", 
 "freq":11
},
{
 "word": " ISSAM", 
 "freq":38
},
{
 "word": " ISSUE", 
 "freq":23773
},
{
 "word": " ISTAT", 
 "freq":50
},
{
 "word": " ISTEL", 
 "freq":16
},
{
 "word": " ISUZU", 
 "freq":214
},
{
 "word": " ITALO", 
 "freq":13
},
{
 "word": " ITALY", 
 "freq":3051
},
{
 "word": " ITCHY", 
 "freq":26
},
{
 "word": " ITEMS", 
 "freq":4120
},
{
 "word": " IVANA", 
 "freq":113
},
{
 "word": " IVANS", 
 "freq":16
},
{
 "word": " IVECO", 
 "freq":13
},
{
 "word": " IVINS", 
 "freq":27
},
{
 "word": " IVORY", 
 "freq":734
},
{
 "word": " IZUMI", 
 "freq":9
},
{
 "word": " JABER", 
 "freq":125
},
{
 "word": " JACEK", 
 "freq":56
},
{
 "word": " JACKS", 
 "freq":47
},
{
 "word": " JACOB", 
 "freq":354
},
{
 "word": " JACOR", 
 "freq":24
},
{
 "word": " JADED", 
 "freq":72
},
{
 "word": " JAFFA", 
 "freq":23
},
{
 "word": " JAFFE", 
 "freq":188
},
{
 "word": " JAGER", 
 "freq":18
},
{
 "word": " JAILS", 
 "freq":341
},
{
 "word": " JAIME", 
 "freq":228
},
{
 "word": " JAIRO", 
 "freq":17
},
{
 "word": " JAKES", 
 "freq":136
},
{
 "word": " JAKOB", 
 "freq":25
},
{
 "word": " JALAL", 
 "freq":21
},
{
 "word": " JAMAL", 
 "freq":68
},
{
 "word": " JAMBA", 
 "freq":25
},
{
 "word": " JAMES", 
 "freq":11801
},
{
 "word": " JAMIE", 
 "freq":273
},
{
 "word": " JAMIL", 
 "freq":21
},
{
 "word": " JAMMU", 
 "freq":203
},
{
 "word": " JANES", 
 "freq":23
},
{
 "word": " JANET", 
 "freq":667
},
{
 "word": " JANEZ", 
 "freq":23
},
{
 "word": " JANIE", 
 "freq":29
},
{
 "word": " JANIS", 
 "freq":75
},
{
 "word": " JANOS", 
 "freq":70
},
{
 "word": " JANSA", 
 "freq":15
},
{
 "word": " JANUS", 
 "freq":52
},
{
 "word": " JAPAN", 
 "freq":15370
},
{
 "word": " JARED", 
 "freq":49
},
{
 "word": " JARMO", 
 "freq":24
},
{
 "word": " JASON", 
 "freq":513
},
{
 "word": " JATOI", 
 "freq":15
},
{
 "word": " JAUNT", 
 "freq":34
},
{
 "word": " JAVAD", 
 "freq":22
},
{
 "word": " JAWAD", 
 "freq":22
},
{
 "word": " JAWED", 
 "freq":31
},
{
 "word": " JAYNE", 
 "freq":44
},
{
 "word": " JAZZY", 
 "freq":50
},
{
 "word": " JEANE", 
 "freq":57
},
{
 "word": " JEANS", 
 "freq":674
},
{
 "word": " JEEPS", 
 "freq":165
},
{
 "word": " JEERS", 
 "freq":34
},
{
 "word": " JELLY", 
 "freq":122
},
{
 "word": " JENCO", 
 "freq":30
},
{
 "word": " JENIN", 
 "freq":51
},
{
 "word": " JENKS", 
 "freq":22
},
{
 "word": " JENNA", 
 "freq":16
},
{
 "word": " JENNY", 
 "freq":169
},
{
 "word": " JERKS", 
 "freq":40
},
{
 "word": " JERKY", 
 "freq":41
},
{
 "word": " JERRY", 
 "freq":2125
},
{
 "word": " JERZY", 
 "freq":110
},
{
 "word": " JESSE", 
 "freq":1979
},
{
 "word": " JESSI", 
 "freq":23
},
{
 "word": " JESSY", 
 "freq":22
},
{
 "word": " JESUP", 
 "freq":16
},
{
 "word": " JESUS", 
 "freq":952
},
{
 "word": " JETTA", 
 "freq":22
},
{
 "word": " JETTY", 
 "freq":14
},
{
 "word": " JEWEL", 
 "freq":234
},
{
 "word": " JEWRY", 
 "freq":91
},
{
 "word": " JIANG", 
 "freq":234
},
{
 "word": " JIAQI", 
 "freq":22
},
{
 "word": " JIBES", 
 "freq":20
},
{
 "word": " JIDDA", 
 "freq":17
},
{
 "word": " JIFFY", 
 "freq":24
},
{
 "word": " JIHAD", 
 "freq":405
},
{
 "word": " JILIN", 
 "freq":17
},
{
 "word": " JIMMY", 
 "freq":1371
},
{
 "word": " JINKS", 
 "freq":18
},
{
 "word": " JOANN", 
 "freq":59
},
{
 "word": " JOCKS", 
 "freq":30
},
{
 "word": " JODIE", 
 "freq":59
},
{
 "word": " JOERG", 
 "freq":24
},
{
 "word": " JOFFE", 
 "freq":23
},
{
 "word": " JOHAN", 
 "freq":57
},
{
 "word": " JOHNS", 
 "freq":518
},
{
 "word": " JOINS", 
 "freq":390
},
{
 "word": " JOINT", 
 "freq":8031
},
{
 "word": " JOKED", 
 "freq":437
},
{
 "word": " JOKER", 
 "freq":39
},
{
 "word": " JOKES", 
 "freq":596
},
{
 "word": " JOLLA", 
 "freq":143
},
{
 "word": " JOLLY", 
 "freq":78
},
{
 "word": " JOLTS", 
 "freq":38
},
{
 "word": " JONAH", 
 "freq":12
},
{
 "word": " JONAS", 
 "freq":173
},
{
 "word": " JONES", 
 "freq":9735
},
{
 "word": " JONTZ", 
 "freq":39
},
{
 "word": " JOONG", 
 "freq":15
},
{
 "word": " JORGE", 
 "freq":401
},
{
 "word": " JOSEF", 
 "freq":397
},
{
 "word": " JOSIE", 
 "freq":40
},
{
 "word": " JOSIP", 
 "freq":45
},
{
 "word": " JOVIC", 
 "freq":32
},
{
 "word": " JOYCE", 
 "freq":492
},
{
 "word": " JOZEF", 
 "freq":78
},
{
 "word": " JUANA", 
 "freq":9
},
{
 "word": " JUDAH", 
 "freq":51
},
{
 "word": " JUDAS", 
 "freq":46
},
{
 "word": " JUDDS", 
 "freq":39
},
{
 "word": " JUDEA", 
 "freq":32
},
{
 "word": " JUDEO", 
 "freq":35
},
{
 "word": " JUDGE", 
 "freq":18804
},
{
 "word": " JUICE", 
 "freq":1128
},
{
 "word": " JUICY", 
 "freq":90
},
{
 "word": " JULES", 
 "freq":89
},
{
 "word": " JULIA", 
 "freq":337
},
{
 "word": " JULIE", 
 "freq":486
},
{
 "word": " JULIO", 
 "freq":213
},
{
 "word": " JUMBO", 
 "freq":508
},
{
 "word": " JUMPS", 
 "freq":279
},
{
 "word": " JUMPY", 
 "freq":27
},
{
 "word": " JUNDA", 
 "freq":19
},
{
 "word": " JUNGE", 
 "freq":17
},
{
 "word": " JUNTA", 
 "freq":263
},
{
 "word": " JUPPE", 
 "freq":14
},
{
 "word": " JUROR", 
 "freq":349
},
{
 "word": " JUSCO", 
 "freq":11
},
{
 "word": " JUSTE", 
 "freq":24
},
{
 "word": " KABUL", 
 "freq":1233
},
{
 "word": " KADAR", 
 "freq":112
},
{
 "word": " KAFKA", 
 "freq":47
},
{
 "word": " KAGAN", 
 "freq":107
},
{
 "word": " KAHAN", 
 "freq":84
},
{
 "word": " KAHLO", 
 "freq":22
},
{
 "word": " KAIFU", 
 "freq":636
},
{
 "word": " KAIXI", 
 "freq":41
},
{
 "word": " KAMAL", 
 "freq":62
},
{
 "word": " KAMAN", 
 "freq":13
},
{
 "word": " KAMEL", 
 "freq":34
},
{
 "word": " KAMEN", 
 "freq":22
},
{
 "word": " KAMIL", 
 "freq":10
},
{
 "word": " KAMIN", 
 "freq":14
},
{
 "word": " KAMPF", 
 "freq":16
},
{
 "word": " KANAI", 
 "freq":36
},
{
 "word": " KANAK", 
 "freq":13
},
{
 "word": " KANDY", 
 "freq":18
},
{
 "word": " KAPOR", 
 "freq":29
},
{
 "word": " KAPPA", 
 "freq":57
},
{
 "word": " KARAN", 
 "freq":55
},
{
 "word": " KARAS", 
 "freq":24
},
{
 "word": " KARAT", 
 "freq":25
},
{
 "word": " KAREL", 
 "freq":54
},
{
 "word": " KAREM", 
 "freq":41
},
{
 "word": " KAREN", 
 "freq":848
},
{
 "word": " KARIM", 
 "freq":138
},
{
 "word": " KARIN", 
 "freq":52
},
{
 "word": " KARLA", 
 "freq":37
},
{
 "word": " KARMA", 
 "freq":26
},
{
 "word": " KAROL", 
 "freq":20
},
{
 "word": " KAROS", 
 "freq":34
},
{
 "word": " KASEM", 
 "freq":18
},
{
 "word": " KATES", 
 "freq":17
},
{
 "word": " KATHY", 
 "freq":526
},
{
 "word": " KATIA", 
 "freq":13
},
{
 "word": " KATIE", 
 "freq":118
},
{
 "word": " KATYA", 
 "freq":16
},
{
 "word": " KATYN", 
 "freq":76
},
{
 "word": " KAUAI", 
 "freq":69
},
{
 "word": " KAWAI", 
 "freq":20
},
{
 "word": " KAYAK", 
 "freq":39
},
{
 "word": " KAYLA", 
 "freq":14
},
{
 "word": " KAZAN", 
 "freq":29
},
{
 "word": " KAZEM", 
 "freq":10
},
{
 "word": " KAZIS", 
 "freq":8
},
{
 "word": " KAZUO", 
 "freq":30
},
{
 "word": " KEACH", 
 "freq":27
},
{
 "word": " KEANE", 
 "freq":77
},
{
 "word": " KEATS", 
 "freq":14
},
{
 "word": " KEEFE", 
 "freq":245
},
{
 "word": " KEENA", 
 "freq":20
},
{
 "word": " KEENE", 
 "freq":157
},
{
 "word": " KEEPS", 
 "freq":1684
},
{
 "word": " KEHAR", 
 "freq":35
},
{
 "word": " KEHOE", 
 "freq":27
},
{
 "word": " KEIKO", 
 "freq":10
},
{
 "word": " KEITH", 
 "freq":928
},
{
 "word": " KEIZO", 
 "freq":22
},
{
 "word": " KEKER", 
 "freq":104
},
{
 "word": " KELLI", 
 "freq":13
},
{
 "word": " KELLY", 
 "freq":1458
},
{
 "word": " KELSO", 
 "freq":115
},
{
 "word": " KENAI", 
 "freq":38
},
{
 "word": " KENAN", 
 "freq":16
},
{
 "word": " KENJI", 
 "freq":55
},
{
 "word": " KENNY", 
 "freq":279
},
{
 "word": " KENYA", 
 "freq":404
},
{
 "word": " KEOGH", 
 "freq":34
},
{
 "word": " KERBY", 
 "freq":15
},
{
 "word": " KERNS", 
 "freq":27
},
{
 "word": " KERRY", 
 "freq":413
},
{
 "word": " KESEY", 
 "freq":25
},
{
 "word": " KEVIN", 
 "freq":1696
},
{
 "word": " KEYED", 
 "freq":76
},
{
 "word": " KEYES", 
 "freq":63
},
{
 "word": " KGASE", 
 "freq":22
},
{
 "word": " KHAKI", 
 "freq":73
},
{
 "word": " KHALQ", 
 "freq":57
},
{
 "word": " KHARG", 
 "freq":33
},
{
 "word": " KHARK", 
 "freq":17
},
{
 "word": " KHEEL", 
 "freq":28
},
{
 "word": " KHIAM", 
 "freq":15
},
{
 "word": " KHIEU", 
 "freq":54
},
{
 "word": " KHMER", 
 "freq":1451
},
{
 "word": " KHOST", 
 "freq":61
},
{
 "word": " KICKS", 
 "freq":209
},
{
 "word": " KIELY", 
 "freq":40
},
{
 "word": " KILBY", 
 "freq":18
},
{
 "word": " KILEY", 
 "freq":112
},
{
 "word": " KILLS", 
 "freq":429
},
{
 "word": " KILLY", 
 "freq":16
},
{
 "word": " KILNS", 
 "freq":20
},
{
 "word": " KILOS", 
 "freq":56
},
{
 "word": " KIMBA", 
 "freq":60
},
{
 "word": " KINDA", 
 "freq":36
},
{
 "word": " KINDS", 
 "freq":1612
},
{
 "word": " KINGS", 
 "freq":564
},
{
 "word": " KINKS", 
 "freq":35
},
{
 "word": " KINKY", 
 "freq":19
},
{
 "word": " KINNE", 
 "freq":24
},
{
 "word": " KIOSK", 
 "freq":49
},
{
 "word": " KIOWA", 
 "freq":21
},
{
 "word": " KIRBY", 
 "freq":173
},
{
 "word": " KIRCH", 
 "freq":11
},
{
 "word": " KIRIN", 
 "freq":49
},
{
 "word": " KIROV", 
 "freq":69
},
{
 "word": " KISCO", 
 "freq":35
},
{
 "word": " KISER", 
 "freq":35
},
{
 "word": " KISIO", 
 "freq":61
},
{
 "word": " KITES", 
 "freq":43
},
{
 "word": " KITTS", 
 "freq":30
},
{
 "word": " KITTY", 
 "freq":317
},
{
 "word": " KIZER", 
 "freq":54
},
{
 "word": " KJELL", 
 "freq":23
},
{
 "word": " KLAUS", 
 "freq":225
},
{
 "word": " KLEEN", 
 "freq":28
},
{
 "word": " KLEIN", 
 "freq":718
},
{
 "word": " KLENT", 
 "freq":14
},
{
 "word": " KLERK", 
 "freq":1182
},
{
 "word": " KLIBI", 
 "freq":27
},
{
 "word": " KLIMA", 
 "freq":19
},
{
 "word": " KLINE", 
 "freq":128
},
{
 "word": " KLINK", 
 "freq":18
},
{
 "word": " KLOTZ", 
 "freq":19
},
{
 "word": " KLUGE", 
 "freq":88
},
{
 "word": " KLUGT", 
 "freq":15
},
{
 "word": " KLUTZ", 
 "freq":11
},
{
 "word": " KMART", 
 "freq":403
},
{
 "word": " KNACK", 
 "freq":95
},
{
 "word": " KNAPP", 
 "freq":154
},
{
 "word": " KNEAD", 
 "freq":18
},
{
 "word": " KNEED", 
 "freq":18
},
{
 "word": " KNEEL", 
 "freq":27
},
{
 "word": " KNEES", 
 "freq":331
},
{
 "word": " KNELL", 
 "freq":44
},
{
 "word": " KNELT", 
 "freq":54
},
{
 "word": " KNIFE", 
 "freq":765
},
{
 "word": " KNITS", 
 "freq":22
},
{
 "word": " KNOBS", 
 "freq":31
},
{
 "word": " KNOCK", 
 "freq":481
},
{
 "word": " KNOLL", 
 "freq":91
},
{
 "word": " KNOPF", 
 "freq":101
},
{
 "word": " KNORR", 
 "freq":13
},
{
 "word": " KNOTS", 
 "freq":197
},
{
 "word": " KNOTT", 
 "freq":11
},
{
 "word": " KNOWN", 
 "freq":15856
},
{
 "word": " KNOWS", 
 "freq":3550
},
{
 "word": " KNUTE", 
 "freq":13
},
{
 "word": " KOALA", 
 "freq":25
},
{
 "word": " KOBIE", 
 "freq":23
},
{
 "word": " KODAK", 
 "freq":1263
},
{
 "word": " KOGAN", 
 "freq":15
},
{
 "word": " KOGER", 
 "freq":28
},
{
 "word": " KOGYO", 
 "freq":16
},
{
 "word": " KOHUT", 
 "freq":20
},
{
 "word": " KOITO", 
 "freq":161
},
{
 "word": " KOLBE", 
 "freq":35
},
{
 "word": " KOMAG", 
 "freq":31
},
{
 "word": " KONDO", 
 "freq":33
},
{
 "word": " KOOKS", 
 "freq":15
},
{
 "word": " KOOKY", 
 "freq":20
},
{
 "word": " KORAN", 
 "freq":173
},
{
 "word": " KORDA", 
 "freq":16
},
{
 "word": " KOREA", 
 "freq":4636
},
{
 "word": " KORUS", 
 "freq":22
},
{
 "word": " KOVIC", 
 "freq":47
},
{
 "word": " KOZAK", 
 "freq":62
},
{
 "word": " KRAFT", 
 "freq":531
},
{
 "word": " KRAHN", 
 "freq":43
},
{
 "word": " KRANE", 
 "freq":19
},
{
 "word": " KRANZ", 
 "freq":16
},
{
 "word": " KRAUS", 
 "freq":43
},
{
 "word": " KREBS", 
 "freq":39
},
{
 "word": " KRENZ", 
 "freq":248
},
{
 "word": " KRESA", 
 "freq":57
},
{
 "word": " KRESS", 
 "freq":15
},
{
 "word": " KRIEG", 
 "freq":19
},
{
 "word": " KRIER", 
 "freq":22
},
{
 "word": " KRILL", 
 "freq":16
},
{
 "word": " KROLL", 
 "freq":83
},
{
 "word": " KROME", 
 "freq":33
},
{
 "word": " KRONA", 
 "freq":80
},
{
 "word": " KRONE", 
 "freq":66
},
{
 "word": " KROPP", 
 "freq":24
},
{
 "word": " KRUPP", 
 "freq":141
},
{
 "word": " KRUSE", 
 "freq":35
},
{
 "word": " KUALA", 
 "freq":152
},
{
 "word": " KUCAN", 
 "freq":48
},
{
 "word": " KUDOS", 
 "freq":41
},
{
 "word": " KUDZU", 
 "freq":20
},
{
 "word": " KUEHN", 
 "freq":24
},
{
 "word": " KULLY", 
 "freq":13
},
{
 "word": " KUMAR", 
 "freq":72
},
{
 "word": " KUNCE", 
 "freq":18
},
{
 "word": " KUNIN", 
 "freq":85
},
{
 "word": " KUNTZ", 
 "freq":18
},
{
 "word": " KURDS", 
 "freq":714
},
{
 "word": " KURIA", 
 "freq":15
},
{
 "word": " KURIL", 
 "freq":29
},
{
 "word": " KURON", 
 "freq":65
},
{
 "word": " KURRI", 
 "freq":9
},
{
 "word": " KURTH", 
 "freq":22
},
{
 "word": " KURTZ", 
 "freq":71
},
{
 "word": " KWANG", 
 "freq":12
},
{
 "word": " KYODO", 
 "freq":245
},
{
 "word": " KYONG", 
 "freq":15
},
{
 "word": " KYOTO", 
 "freq":59
},
{
 "word": " KYOWA", 
 "freq":31
},
{
 "word": " KYUNG", 
 "freq":37
},
{
 "word": " LABEL", 
 "freq":1553
},
{
 "word": " LABOA", 
 "freq":35
},
{
 "word": " LABOR", 
 "freq":13473
},
{
 "word": " LACED", 
 "freq":240
},
{
 "word": " LACES", 
 "freq":21
},
{
 "word": " LACEY", 
 "freq":132
},
{
 "word": " LACKS", 
 "freq":661
},
{
 "word": " LADEN", 
 "freq":393
},
{
 "word": " LADER", 
 "freq":10
},
{
 "word": " LADLE", 
 "freq":26
},
{
 "word": " LAGER", 
 "freq":31
},
{
 "word": " LAGOS", 
 "freq":95
},
{
 "word": " LAHAD", 
 "freq":10
},
{
 "word": " LAHTI", 
 "freq":21
},
{
 "word": " LAINE", 
 "freq":21
},
{
 "word": " LAING", 
 "freq":35
},
{
 "word": " LAINO", 
 "freq":28
},
{
 "word": " LAIRD", 
 "freq":77
},
{
 "word": " LAITY", 
 "freq":48
},
{
 "word": " LAJOS", 
 "freq":17
},
{
 "word": " LAKAS", 
 "freq":22
},
{
 "word": " LAKER", 
 "freq":21
},
{
 "word": " LAKES", 
 "freq":1319
},
{
 "word": " LALLY", 
 "freq":19
},
{
 "word": " LAMAR", 
 "freq":172
},
{
 "word": " LAMAS", 
 "freq":17
},
{
 "word": " LAMBS", 
 "freq":109
},
{
 "word": " LAMLE", 
 "freq":14
},
{
 "word": " LAMOS", 
 "freq":14
},
{
 "word": " LAMPS", 
 "freq":191
},
{
 "word": " LANAI", 
 "freq":21
},
{
 "word": " LANCE", 
 "freq":723
},
{
 "word": " LANDO", 
 "freq":24
},
{
 "word": " LANDS", 
 "freq":1445
},
{
 "word": " LANDY", 
 "freq":18
},
{
 "word": " LANES", 
 "freq":470
},
{
 "word": " LANEY", 
 "freq":11
},
{
 "word": " LANGE", 
 "freq":180
},
{
 "word": " LANKA", 
 "freq":512
},
{
 "word": " LANKY", 
 "freq":78
},
{
 "word": " LANNY", 
 "freq":30
},
{
 "word": " LANTZ", 
 "freq":13
},
{
 "word": " LANZA", 
 "freq":16
},
{
 "word": " LAPEL", 
 "freq":69
},
{
 "word": " LAPIN", 
 "freq":20
},
{
 "word": " LAPSE", 
 "freq":204
},
{
 "word": " LARAK", 
 "freq":20
},
{
 "word": " LARGE", 
 "freq":16696
},
{
 "word": " LARGO", 
 "freq":73
},
{
 "word": " LARRY", 
 "freq":2384
},
{
 "word": " LARUE", 
 "freq":26
},
{
 "word": " LARVA", 
 "freq":15
},
{
 "word": " LASCH", 
 "freq":35
},
{
 "word": " LASER", 
 "freq":879
},
{
 "word": " LASKO", 
 "freq":37
},
{
 "word": " LASKY", 
 "freq":15
},
{
 "word": " LASMO", 
 "freq":59
},
{
 "word": " LASSE", 
 "freq":14
},
{
 "word": " LASSO", 
 "freq":21
},
{
 "word": " LASTS", 
 "freq":275
},
{
 "word": " LATCH", 
 "freq":66
},
{
 "word": " LATER", 
 "freq":23692
},
{
 "word": " LATEX", 
 "freq":136
},
{
 "word": " LATHE", 
 "freq":16
},
{
 "word": " LATIF", 
 "freq":49
},
{
 "word": " LATIN", 
 "freq":2822
},
{
 "word": " LATTA", 
 "freq":58
},
{
 "word": " LAUDA", 
 "freq":30
},
{
 "word": " LAUDE", 
 "freq":26
},
{
 "word": " LAUER", 
 "freq":29
},
{
 "word": " LAUGH", 
 "freq":673
},
{
 "word": " LAURA", 
 "freq":596
},
{
 "word": " LAURO", 
 "freq":135
},
{
 "word": " LAVAL", 
 "freq":33
},
{
 "word": " LAVAN", 
 "freq":14
},
{
 "word": " LAVIN", 
 "freq":46
},
{
 "word": " LAVON", 
 "freq":10
},
{
 "word": " LAWNS", 
 "freq":186
},
{
 "word": " LAYER", 
 "freq":716
},
{
 "word": " LAYNE", 
 "freq":30
},
{
 "word": " LAYUP", 
 "freq":67
},
{
 "word": " LAZAR", 
 "freq":73
},
{
 "word": " LEACH", 
 "freq":289
},
{
 "word": " LEADS", 
 "freq":1724
},
{
 "word": " LEAFS", 
 "freq":57
},
{
 "word": " LEAFY", 
 "freq":61
},
{
 "word": " LEAHY", 
 "freq":415
},
{
 "word": " LEAKS", 
 "freq":612
},
{
 "word": " LEAKY", 
 "freq":93
},
{
 "word": " LEANS", 
 "freq":62
},
{
 "word": " LEAPS", 
 "freq":139
},
{
 "word": " LEAPT", 
 "freq":66
},
{
 "word": " LEARN", 
 "freq":3147
},
{
 "word": " LEARY", 
 "freq":89
},
{
 "word": " LEASE", 
 "freq":1501
},
{
 "word": " LEASH", 
 "freq":82
},
{
 "word": " LEAST", 
 "freq":23750
},
{
 "word": " LEATH", 
 "freq":30
},
{
 "word": " LEAVE", 
 "freq":10116
},
{
 "word": " LEBER", 
 "freq":50
},
{
 "word": " LEBOW", 
 "freq":154
},
{
 "word": " LEDGE", 
 "freq":78
},
{
 "word": " LEECH", 
 "freq":26
},
{
 "word": " LEEDS", 
 "freq":95
},
{
 "word": " LEEKS", 
 "freq":30
},
{
 "word": " LEERY", 
 "freq":190
},
{
 "word": " LEFTY", 
 "freq":30
},
{
 "word": " LEGAL", 
 "freq":10600
},
{
 "word": " LEGER", 
 "freq":13
},
{
 "word": " LEGGE", 
 "freq":17
},
{
 "word": " LEGGY", 
 "freq":24
},
{
 "word": " LEGIT", 
 "freq":16
},
{
 "word": " LEIGH", 
 "freq":316
},
{
 "word": " LEILA", 
 "freq":20
},
{
 "word": " LEMAY", 
 "freq":31
},
{
 "word": " LEMKE", 
 "freq":26
},
{
 "word": " LEMON", 
 "freq":351
},
{
 "word": " LEMOS", 
 "freq":23
},
{
 "word": " LENDL", 
 "freq":92
},
{
 "word": " LENDS", 
 "freq":155
},
{
 "word": " LENIN", 
 "freq":512
},
{
 "word": " LENNY", 
 "freq":98
},
{
 "word": " LENOX", 
 "freq":47
},
{
 "word": " LENTZ", 
 "freq":23
},
{
 "word": " LEONA", 
 "freq":113
},
{
 "word": " LEONE", 
 "freq":157
},
{
 "word": " LEONG", 
 "freq":24
},
{
 "word": " LEPER", 
 "freq":10
},
{
 "word": " LERER", 
 "freq":13
},
{
 "word": " LEROY", 
 "freq":246
},
{
 "word": " LESER", 
 "freq":15
},
{
 "word": " LETUP", 
 "freq":28
},
{
 "word": " LEUMI", 
 "freq":16
},
{
 "word": " LEUNG", 
 "freq":37
},
{
 "word": " LEVAL", 
 "freq":26
},
{
 "word": " LEVAN", 
 "freq":13
},
{
 "word": " LEVEE", 
 "freq":87
},
{
 "word": " LEVEL", 
 "freq":13385
},
{
 "word": " LEVEN", 
 "freq":14
},
{
 "word": " LEVER", 
 "freq":160
},
{
 "word": " LEVEY", 
 "freq":21
},
{
 "word": " LEVIN", 
 "freq":606
},
{
 "word": " LEVIS", 
 "freq":21
},
{
 "word": " LEVON", 
 "freq":24
},
{
 "word": " LEWIN", 
 "freq":140
},
{
 "word": " LEWIS", 
 "freq":2800
},
{
 "word": " LEXIS", 
 "freq":17
},
{
 "word": " LEXUS", 
 "freq":179
},
{
 "word": " LEYTE", 
 "freq":23
},
{
 "word": " LEYVA", 
 "freq":38
},
{
 "word": " LHASA", 
 "freq":183
},
{
 "word": " LIANG", 
 "freq":50
},
{
 "word": " LIANI", 
 "freq":34
},
{
 "word": " LIARS", 
 "freq":51
},
{
 "word": " LIBBY", 
 "freq":62
},
{
 "word": " LIBEL", 
 "freq":465
},
{
 "word": " LIBOR", 
 "freq":405
},
{
 "word": " LIBRA", 
 "freq":24
},
{
 "word": " LIBRE", 
 "freq":16
},
{
 "word": " LIBYA", 
 "freq":1382
},
{
 "word": " LICHT", 
 "freq":31
},
{
 "word": " LICKS", 
 "freq":39
},
{
 "word": " LIDDY", 
 "freq":36
},
{
 "word": " LIENS", 
 "freq":70
},
{
 "word": " LIFES", 
 "freq":17
},
{
 "word": " LIFFE", 
 "freq":23
},
{
 "word": " LIFTS", 
 "freq":218
},
{
 "word": " LIGHT", 
 "freq":8913
},
{
 "word": " LIKED", 
 "freq":1179
},
{
 "word": " LIKEN", 
 "freq":31
},
{
 "word": " LIKES", 
 "freq":1439
},
{
 "word": " LIKUD", 
 "freq":843
},
{
 "word": " LILAC", 
 "freq":22
},
{
 "word": " LILCO", 
 "freq":93
},
{
 "word": " LILLE", 
 "freq":18
},
{
 "word": " LILLY", 
 "freq":562
},
{
 "word": " LILOV", 
 "freq":34
},
{
 "word": " LIMAN", 
 "freq":89
},
{
 "word": " LIMBO", 
 "freq":161
},
{
 "word": " LIMBS", 
 "freq":211
},
{
 "word": " LIMIT", 
 "freq":4679
},
{
 "word": " LIMON", 
 "freq":67
},
{
 "word": " LIMOS", 
 "freq":29
},
{
 "word": " LINDA", 
 "freq":1092
},
{
 "word": " LINDE", 
 "freq":22
},
{
 "word": " LINDY", 
 "freq":42
},
{
 "word": " LINED", 
 "freq":1180
},
{
 "word": " LINEN", 
 "freq":167
},
{
 "word": " LINER", 
 "freq":264
},
{
 "word": " LINES", 
 "freq":7559
},
{
 "word": " LINGO", 
 "freq":73
},
{
 "word": " LINKE", 
 "freq":26
},
{
 "word": " LINKS", 
 "freq":1426
},
{
 "word": " LIONS", 
 "freq":424
},
{
 "word": " LIPID", 
 "freq":19
},
{
 "word": " LIPPO", 
 "freq":14
},
{
 "word": " LISLE", 
 "freq":23
},
{
 "word": " LISTS", 
 "freq":1406
},
{
 "word": " LISZT", 
 "freq":44
},
{
 "word": " LITAN", 
 "freq":42
},
{
 "word": " LITER", 
 "freq":333
},
{
 "word": " LITHE", 
 "freq":28
},
{
 "word": " LIVAI", 
 "freq":16
},
{
 "word": " LIVED", 
 "freq":3817
},
{
 "word": " LIVEN", 
 "freq":13
},
{
 "word": " LIVER", 
 "freq":917
},
{
 "word": " LIVES", 
 "freq":7094
},
{
 "word": " LIVID", 
 "freq":29
},
{
 "word": " LIZHI", 
 "freq":74
},
{
 "word": " LLAMA", 
 "freq":37
},
{
 "word": " LLOSA", 
 "freq":138
},
{
 "word": " LLOYD", 
 "freq":1608
},
{
 "word": " LOADS", 
 "freq":325
},
{
 "word": " LOANS", 
 "freq":10336
},
{
 "word": " LOATH", 
 "freq":88
},
{
 "word": " LOBBY", 
 "freq":1173
},
{
 "word": " LOBEL", 
 "freq":17
},
{
 "word": " LOBOS", 
 "freq":24
},
{
 "word": " LOBOV", 
 "freq":13
},
{
 "word": " LOCAL", 
 "freq":17320
},
{
 "word": " LOCKE", 
 "freq":144
},
{
 "word": " LOCKS", 
 "freq":322
},
{
 "word": " LODGE", 
 "freq":400
},
{
 "word": " LOEWE", 
 "freq":21
},
{
 "word": " LOEWS", 
 "freq":139
},
{
 "word": " LOEWY", 
 "freq":37
},
{
 "word": " LOFTY", 
 "freq":193
},
{
 "word": " LOGAN", 
 "freq":577
},
{
 "word": " LOGIC", 
 "freq":688
},
{
 "word": " LOGOS", 
 "freq":122
},
{
 "word": " LOGUE", 
 "freq":20
},
{
 "word": " LOIRE", 
 "freq":16
},
{
 "word": " LOMAS", 
 "freq":115
},
{
 "word": " LOMAX", 
 "freq":45
},
{
 "word": " LONER", 
 "freq":70
},
{
 "word": " LONGO", 
 "freq":24
},
{
 "word": " LONGS", 
 "freq":57
},
{
 "word": " LOOKS", 
 "freq":3658
},
{
 "word": " LOOMS", 
 "freq":185
},
{
 "word": " LOONS", 
 "freq":13
},
{
 "word": " LOONY", 
 "freq":21
},
{
 "word": " LOOPS", 
 "freq":70
},
{
 "word": " LOOPY", 
 "freq":13
},
{
 "word": " LOOSE", 
 "freq":1152
},
{
 "word": " LOPES", 
 "freq":35
},
{
 "word": " LOPEZ", 
 "freq":814
},
{
 "word": " LOPID", 
 "freq":34
},
{
 "word": " LORAL", 
 "freq":236
},
{
 "word": " LORDS", 
 "freq":361
},
{
 "word": " LOREN", 
 "freq":118
},
{
 "word": " LORIE", 
 "freq":9
},
{
 "word": " LORIN", 
 "freq":17
},
{
 "word": " LORNA", 
 "freq":19
},
{
 "word": " LORNE", 
 "freq":31
},
{
 "word": " LOSEC", 
 "freq":20
},
{
 "word": " LOSER", 
 "freq":431
},
{
 "word": " LOSES", 
 "freq":552
},
{
 "word": " LOTTA", 
 "freq":12
},
{
 "word": " LOTTE", 
 "freq":18
},
{
 "word": " LOTTO", 
 "freq":215
},
{
 "word": " LOTUS", 
 "freq":813
},
{
 "word": " LOUIE", 
 "freq":95
},
{
 "word": " LOUIS", 
 "freq":4121
},
{
 "word": " LOUSY", 
 "freq":238
},
{
 "word": " LOVED", 
 "freq":1211
},
{
 "word": " LOVER", 
 "freq":483
},
{
 "word": " LOVES", 
 "freq":578
},
{
 "word": " LOWER", 
 "freq":22188
},
{
 "word": " LOWEY", 
 "freq":23
},
{
 "word": " LOWLY", 
 "freq":58
},
{
 "word": " LOWRY", 
 "freq":107
},
{
 "word": " LOYAL", 
 "freq":1007
},
{
 "word": " LUBIN", 
 "freq":28
},
{
 "word": " LUCAS", 
 "freq":582
},
{
 "word": " LUCCI", 
 "freq":18
},
{
 "word": " LUCIA", 
 "freq":132
},
{
 "word": " LUCID", 
 "freq":56
},
{
 "word": " LUCIE", 
 "freq":66
},
{
 "word": " LUCIO", 
 "freq":40
},
{
 "word": " LUCKY", 
 "freq":1267
},
{
 "word": " LUGAR", 
 "freq":233
},
{
 "word": " LUIGI", 
 "freq":58
},
{
 "word": " LUISA", 
 "freq":24
},
{
 "word": " LUJAN", 
 "freq":300
},
{
 "word": " LUKAS", 
 "freq":27
},
{
 "word": " LUKEN", 
 "freq":94
},
{
 "word": " LULLS", 
 "freq":13
},
{
 "word": " LUMET", 
 "freq":11
},
{
 "word": " LUMPS", 
 "freq":84
},
{
 "word": " LUMPY", 
 "freq":21
},
{
 "word": " LUNAR", 
 "freq":192
},
{
 "word": " LUNCH", 
 "freq":1835
},
{
 "word": " LUNDY", 
 "freq":89
},
{
 "word": " LUNGE", 
 "freq":19
},
{
 "word": " LUNGS", 
 "freq":332
},
{
 "word": " LUPUS", 
 "freq":24
},
{
 "word": " LURCH", 
 "freq":51
},
{
 "word": " LURED", 
 "freq":390
},
{
 "word": " LURES", 
 "freq":66
},
{
 "word": " LURID", 
 "freq":55
},
{
 "word": " LURIE", 
 "freq":79
},
{
 "word": " LURKS", 
 "freq":39
},
{
 "word": " LUSTY", 
 "freq":26
},
{
 "word": " LUXOR", 
 "freq":29
},
{
 "word": " LUZON", 
 "freq":119
},
{
 "word": " LYCRA", 
 "freq":40
},
{
 "word": " LYDIA", 
 "freq":67
},
{
 "word": " LYDON", 
 "freq":17
},
{
 "word": " LYING", 
 "freq":1302
},
{
 "word": " LYKES", 
 "freq":13
},
{
 "word": " LYLES", 
 "freq":20
},
{
 "word": " LYMAN", 
 "freq":102
},
{
 "word": " LYMPH", 
 "freq":72
},
{
 "word": " LYNCH", 
 "freq":3682
},
{
 "word": " LYNDA", 
 "freq":65
},
{
 "word": " LYNNE", 
 "freq":120
},
{
 "word": " LYONS", 
 "freq":386
},
{
 "word": " LYRIC", 
 "freq":108
},
{
 "word": " LYTLE", 
 "freq":67
},
{
 "word": " MABEL", 
 "freq":41
},
{
 "word": " MABON", 
 "freq":95
},
{
 "word": " MABRY", 
 "freq":24
},
{
 "word": " MABUS", 
 "freq":75
},
{
 "word": " MACAO", 
 "freq":75
},
{
 "word": " MACEO", 
 "freq":18
},
{
 "word": " MACEY", 
 "freq":15
},
{
 "word": " MACHE", 
 "freq":24
},
{
 "word": " MACHO", 
 "freq":196
},
{
 "word": " MACHU", 
 "freq":19
},
{
 "word": " MACKE", 
 "freq":40
},
{
 "word": " MACON", 
 "freq":182
},
{
 "word": " MACRO", 
 "freq":44
},
{
 "word": " MADAM", 
 "freq":40
},
{
 "word": " MADDY", 
 "freq":43
},
{
 "word": " MADGE", 
 "freq":16
},
{
 "word": " MADLY", 
 "freq":37
},
{
 "word": " MADRE", 
 "freq":47
},
{
 "word": " MAEDA", 
 "freq":74
},
{
 "word": " MAFIA", 
 "freq":469
},
{
 "word": " MAGEE", 
 "freq":46
},
{
 "word": " MAGIC", 
 "freq":1241
},
{
 "word": " MAGID", 
 "freq":25
},
{
 "word": " MAGMA", 
 "freq":97
},
{
 "word": " MAGNA", 
 "freq":115
},
{
 "word": " MAHAL", 
 "freq":231
},
{
 "word": " MAHDI", 
 "freq":168
},
{
 "word": " MAHER", 
 "freq":93
},
{
 "word": " MAHON", 
 "freq":21
},
{
 "word": " MAIDA", 
 "freq":21
},
{
 "word": " MAIDS", 
 "freq":74
},
{
 "word": " MAIER", 
 "freq":61
},
{
 "word": " MAILS", 
 "freq":49
},
{
 "word": " MAINE", 
 "freq":2580
},
{
 "word": " MAINS", 
 "freq":40
},
{
 "word": " MAINZ", 
 "freq":20
},
{
 "word": " MAIZE", 
 "freq":30
},
{
 "word": " MAJID", 
 "freq":38
},
{
 "word": " MAJOR", 
 "freq":30326
},
{
 "word": " MAKER", 
 "freq":7907
},
{
 "word": " MAKES", 
 "freq":10452
},
{
 "word": " MAKIN", 
 "freq":10
},
{
 "word": " MALAN", 
 "freq":57
},
{
 "word": " MALAY", 
 "freq":40
},
{
 "word": " MALEC", 
 "freq":15
},
{
 "word": " MALEK", 
 "freq":83
},
{
 "word": " MALES", 
 "freq":660
},
{
 "word": " MALEV", 
 "freq":24
},
{
 "word": " MALIK", 
 "freq":75
},
{
 "word": " MALIN", 
 "freq":17
},
{
 "word": " MALLE", 
 "freq":14
},
{
 "word": " MALLS", 
 "freq":385
},
{
 "word": " MALTA", 
 "freq":336
},
{
 "word": " MAMBO", 
 "freq":32
},
{
 "word": " MAMET", 
 "freq":34
},
{
 "word": " MAMIE", 
 "freq":11
},
{
 "word": " MANDL", 
 "freq":27
},
{
 "word": " MANDY", 
 "freq":47
},
{
 "word": " MANET", 
 "freq":12
},
{
 "word": " MANGO", 
 "freq":46
},
{
 "word": " MANIA", 
 "freq":113
},
{
 "word": " MANIC", 
 "freq":93
},
{
 "word": " MANLY", 
 "freq":38
},
{
 "word": " MANNA", 
 "freq":19
},
{
 "word": " MANNY", 
 "freq":86
},
{
 "word": " MANON", 
 "freq":18
},
{
 "word": " MANOR", 
 "freq":147
},
{
 "word": " MANOS", 
 "freq":36
},
{
 "word": " MANZI", 
 "freq":43
},
{
 "word": " MAPAM", 
 "freq":12
},
{
 "word": " MAPCO", 
 "freq":6
},
{
 "word": " MAPES", 
 "freq":19
},
{
 "word": " MAPLE", 
 "freq":250
},
{
 "word": " MARCH", 
 "freq":21242
},
{
 "word": " MARCO", 
 "freq":156
},
{
 "word": " MARCY", 
 "freq":70
},
{
 "word": " MARDI", 
 "freq":117
},
{
 "word": " MAREK", 
 "freq":29
},
{
 "word": " MARES", 
 "freq":15
},
{
 "word": " MARGE", 
 "freq":104
},
{
 "word": " MARGO", 
 "freq":88
},
{
 "word": " MARIA", 
 "freq":878
},
{
 "word": " MARIE", 
 "freq":690
},
{
 "word": " MARIN", 
 "freq":296
},
{
 "word": " MARIO", 
 "freq":1106
},
{
 "word": " MARIS", 
 "freq":26
},
{
 "word": " MARKO", 
 "freq":16
},
{
 "word": " MARKS", 
 "freq":7405
},
{
 "word": " MARLA", 
 "freq":78
},
{
 "word": " MARLO", 
 "freq":25
},
{
 "word": " MARNE", 
 "freq":18
},
{
 "word": " MARRY", 
 "freq":556
},
{
 "word": " MARSH", 
 "freq":369
},
{
 "word": " MARTA", 
 "freq":72
},
{
 "word": " MARTI", 
 "freq":355
},
{
 "word": " MARTS", 
 "freq":46
},
{
 "word": " MARTY", 
 "freq":219
},
{
 "word": " MARYS", 
 "freq":35
},
{
 "word": " MASAI", 
 "freq":9
},
{
 "word": " MASAO", 
 "freq":18
},
{
 "word": " MASCO", 
 "freq":47
},
{
 "word": " MASKS", 
 "freq":472
},
{
 "word": " MASON", 
 "freq":905
},
{
 "word": " MASRI", 
 "freq":30
},
{
 "word": " MASSA", 
 "freq":10
},
{
 "word": " MASSE", 
 "freq":101
},
{
 "word": " MASTS", 
 "freq":17
},
{
 "word": " MASUR", 
 "freq":48
},
{
 "word": " MATCH", 
 "freq":2613
},
{
 "word": " MATED", 
 "freq":25
},
{
 "word": " MATEO", 
 "freq":665
},
{
 "word": " MATER", 
 "freq":92
},
{
 "word": " MATES", 
 "freq":184
},
{
 "word": " MATIF", 
 "freq":19
},
{
 "word": " MATIN", 
 "freq":18
},
{
 "word": " MATRA", 
 "freq":65
},
{
 "word": " MATTA", 
 "freq":92
},
{
 "word": " MATTE", 
 "freq":22
},
{
 "word": " MATTY", 
 "freq":18
},
{
 "word": " MATZO", 
 "freq":36
},
{
 "word": " MAUDE", 
 "freq":52
},
{
 "word": " MAUNA", 
 "freq":38
},
{
 "word": " MAUNG", 
 "freq":306
},
{
 "word": " MAUNO", 
 "freq":18
},
{
 "word": " MAURA", 
 "freq":30
},
{
 "word": " MAURO", 
 "freq":50
},
{
 "word": " MAURY", 
 "freq":63
},
{
 "word": " MAUVE", 
 "freq":30
},
{
 "word": " MAUZY", 
 "freq":12
},
{
 "word": " MAVEN", 
 "freq":20
},
{
 "word": " MAXEY", 
 "freq":24
},
{
 "word": " MAXIE", 
 "freq":11
},
{
 "word": " MAXIM", 
 "freq":86
},
{
 "word": " MAXUS", 
 "freq":94
},
{
 "word": " MAYAN", 
 "freq":48
},
{
 "word": " MAYBE", 
 "freq":4381
},
{
 "word": " MAYER", 
 "freq":372
},
{
 "word": " MAYES", 
 "freq":14
},
{
 "word": " MAYNE", 
 "freq":21
},
{
 "word": " MAYOR", 
 "freq":6752
},
{
 "word": " MAZAR", 
 "freq":18
},
{
 "word": " MAZDA", 
 "freq":601
},
{
 "word": " MAZER", 
 "freq":13
},
{
 "word": " MAZES", 
 "freq":21
},
{
 "word": " MAZOR", 
 "freq":17
},
{
 "word": " MAZUR", 
 "freq":25
},
{
 "word": " MAZZA", 
 "freq":9
},
{
 "word": " MBANK", 
 "freq":19
},
{
 "word": " MBEKI", 
 "freq":51
},
{
 "word": " MCCAW", 
 "freq":595
},
{
 "word": " MCCOY", 
 "freq":235
},
{
 "word": " MCCUE", 
 "freq":23
},
{
 "word": " MCGEE", 
 "freq":387
},
{
 "word": " MCKAY", 
 "freq":323
},
{
 "word": " MCKEE", 
 "freq":106
},
{
 "word": " MCKIM", 
 "freq":15
},
{
 "word": " MCORP", 
 "freq":139
},
{
 "word": " MCRAE", 
 "freq":91
},
{
 "word": " MCVAY", 
 "freq":53
},
{
 "word": " MCVEY", 
 "freq":16
},
{
 "word": " MEADE", 
 "freq":86
},
{
 "word": " MEALS", 
 "freq":830
},
{
 "word": " MEALY", 
 "freq":20
},
{
 "word": " MEANA", 
 "freq":16
},
{
 "word": " MEANS", 
 "freq":8998
},
{
 "word": " MEANT", 
 "freq":2633
},
{
 "word": " MEANY", 
 "freq":13
},
{
 "word": " MEARS", 
 "freq":135
},
{
 "word": " MEATS", 
 "freq":248
},
{
 "word": " MEATY", 
 "freq":27
},
{
 "word": " MECCA", 
 "freq":324
},
{
 "word": " MEDAL", 
 "freq":781
},
{
 "word": " MEDCO", 
 "freq":236
},
{
 "word": " MEDEA", 
 "freq":9
},
{
 "word": " MEDIA", 
 "freq":7853
},
{
 "word": " MEDIC", 
 "freq":44
},
{
 "word": " MEDIQ", 
 "freq":21
},
{
 "word": " MEECH", 
 "freq":105
},
{
 "word": " MEEKS", 
 "freq":47
},
{
 "word": " MEESE", 
 "freq":1585
},
{
 "word": " MEETS", 
 "freq":1148
},
{
 "word": " MEGAN", 
 "freq":42
},
{
 "word": " MEHDI", 
 "freq":67
},
{
 "word": " MEHTA", 
 "freq":103
},
{
 "word": " MEIDT", 
 "freq":22
},
{
 "word": " MEIER", 
 "freq":67
},
{
 "word": " MEIJI", 
 "freq":48
},
{
 "word": " MEJIA", 
 "freq":53
},
{
 "word": " MELBA", 
 "freq":24
},
{
 "word": " MELEE", 
 "freq":132
},
{
 "word": " MELIA", 
 "freq":33
},
{
 "word": " MELLO", 
 "freq":456
},
{
 "word": " MELON", 
 "freq":58
},
{
 "word": " MELTS", 
 "freq":40
},
{
 "word": " MEMOS", 
 "freq":306
},
{
 "word": " MENEM", 
 "freq":363
},
{
 "word": " MENLO", 
 "freq":586
},
{
 "word": " MENSA", 
 "freq":12
},
{
 "word": " MENUS", 
 "freq":242
},
{
 "word": " MERCK", 
 "freq":819
},
{
 "word": " MERCY", 
 "freq":434
},
{
 "word": " MERGE", 
 "freq":908
},
{
 "word": " MERIS", 
 "freq":26
},
{
 "word": " MERIT", 
 "freq":794
},
{
 "word": " MERLE", 
 "freq":77
},
{
 "word": " MERLO", 
 "freq":14
},
{
 "word": " MERRY", 
 "freq":259
},
{
 "word": " MERTZ", 
 "freq":29
},
{
 "word": " MERWE", 
 "freq":42
},
{
 "word": " MERYL", 
 "freq":80
},
{
 "word": " MESIC", 
 "freq":45
},
{
 "word": " MESSY", 
 "freq":171
},
{
 "word": " METAL", 
 "freq":2854
},
{
 "word": " METAM", 
 "freq":18
},
{
 "word": " METED", 
 "freq":43
},
{
 "word": " METER", 
 "freq":536
},
{
 "word": " METRO", 
 "freq":501
},
{
 "word": " MEWAS", 
 "freq":19
},
{
 "word": " MEYER", 
 "freq":509
},
{
 "word": " MEZZO", 
 "freq":46
},
{
 "word": " MFUME", 
 "freq":25
},
{
 "word": " MIAMI", 
 "freq":4703
},
{
 "word": " MIATA", 
 "freq":34
},
{
 "word": " MICKY", 
 "freq":16
},
{
 "word": " MICRO", 
 "freq":549
},
{
 "word": " MIDAS", 
 "freq":29
},
{
 "word": " MIDST", 
 "freq":701
},
{
 "word": " MIENO", 
 "freq":84
},
{
 "word": " MIERA", 
 "freq":13
},
{
 "word": " MIERT", 
 "freq":18
},
{
 "word": " MIGHT", 
 "freq":22370
},
{
 "word": " MIHAI", 
 "freq":20
},
{
 "word": " MIKEY", 
 "freq":12
},
{
 "word": " MIKUS", 
 "freq":12
},
{
 "word": " MIKVA", 
 "freq":32
},
{
 "word": " MILAM", 
 "freq":17
},
{
 "word": " MILAN", 
 "freq":818
},
{
 "word": " MILES", 
 "freq":16841
},
{
 "word": " MILKY", 
 "freq":89
},
{
 "word": " MILLE", 
 "freq":22
},
{
 "word": " MILLI", 
 "freq":88
},
{
 "word": " MILLS", 
 "freq":1456
},
{
 "word": " MILNE", 
 "freq":29
},
{
 "word": " MILOS", 
 "freq":70
},
{
 "word": " MIMIC", 
 "freq":124
},
{
 "word": " MINAS", 
 "freq":17
},
{
 "word": " MINCE", 
 "freq":23
},
{
 "word": " MINDS", 
 "freq":1174
},
{
 "word": " MINDY", 
 "freq":42
},
{
 "word": " MINED", 
 "freq":131
},
{
 "word": " MINER", 
 "freq":239
},
{
 "word": " MINES", 
 "freq":1288
},
{
 "word": " MINGO", 
 "freq":54
},
{
 "word": " MINIS", 
 "freq":29
},
{
 "word": " MINKE", 
 "freq":24
},
{
 "word": " MINOR", 
 "freq":2815
},
{
 "word": " MINOT", 
 "freq":41
},
{
 "word": " MINOW", 
 "freq":26
},
{
 "word": " MINSK", 
 "freq":90
},
{
 "word": " MINTS", 
 "freq":37
},
{
 "word": " MINTZ", 
 "freq":55
},
{
 "word": " MINUS", 
 "freq":2015
},
{
 "word": " MIRED", 
 "freq":273
},
{
 "word": " MIRER", 
 "freq":13
},
{
 "word": " MIRON", 
 "freq":28
},
{
 "word": " MIRTH", 
 "freq":15
},
{
 "word": " MIRZA", 
 "freq":20
},
{
 "word": " MISHA", 
 "freq":20
},
{
 "word": " MISSY", 
 "freq":28
},
{
 "word": " MISTS", 
 "freq":20
},
{
 "word": " MISTY", 
 "freq":56
},
{
 "word": " MITCH", 
 "freq":284
},
{
 "word": " MITEL", 
 "freq":26
},
{
 "word": " MITES", 
 "freq":59
},
{
 "word": " MITRA", 
 "freq":21
},
{
 "word": " MITRE", 
 "freq":10
},
{
 "word": " MITTS", 
 "freq":20
},
{
 "word": " MITTY", 
 "freq":111
},
{
 "word": " MITZI", 
 "freq":12
},
{
 "word": " MIXED", 
 "freq":4566
},
{
 "word": " MIXER", 
 "freq":63
},
{
 "word": " MIXES", 
 "freq":163
},
{
 "word": " MIXON", 
 "freq":24
},
{
 "word": " MIXUP", 
 "freq":31
},
{
 "word": " MLADA", 
 "freq":14
},
{
 "word": " MOANS", 
 "freq":46
},
{
 "word": " MOATS", 
 "freq":17
},
{
 "word": " MOBIL", 
 "freq":652
},
{
 "word": " MOCHA", 
 "freq":18
},
{
 "word": " MOCKS", 
 "freq":21
},
{
 "word": " MODAI", 
 "freq":20
},
{
 "word": " MODEL", 
 "freq":4246
},
{
 "word": " MODEM", 
 "freq":204
},
{
 "word": " MODES", 
 "freq":66
},
{
 "word": " MODUS", 
 "freq":29
},
{
 "word": " MOGUL", 
 "freq":169
},
{
 "word": " MOHAN", 
 "freq":25
},
{
 "word": " MOIRA", 
 "freq":25
},
{
 "word": " MOIST", 
 "freq":171
},
{
 "word": " MOLDS", 
 "freq":66
},
{
 "word": " MOLDY", 
 "freq":18
},
{
 "word": " MOLES", 
 "freq":33
},
{
 "word": " MOLLY", 
 "freq":205
},
{
 "word": " MOMAN", 
 "freq":22
},
{
 "word": " MOMMA", 
 "freq":25
},
{
 "word": " MOMMY", 
 "freq":100
},
{
 "word": " MONDE", 
 "freq":78
},
{
 "word": " MONDO", 
 "freq":16
},
{
 "word": " MONET", 
 "freq":66
},
{
 "word": " MONEY", 
 "freq":35740
},
{
 "word": " MONGE", 
 "freq":12
},
{
 "word": " MONIA", 
 "freq":21
},
{
 "word": " MONKS", 
 "freq":344
},
{
 "word": " MONRO", 
 "freq":11
},
{
 "word": " MONTA", 
 "freq":106
},
{
 "word": " MONTE", 
 "freq":394
},
{
 "word": " MONTH", 
 "freq":36378
},
{
 "word": " MONTT", 
 "freq":38
},
{
 "word": " MONTY", 
 "freq":95
},
{
 "word": " MONUS", 
 "freq":62
},
{
 "word": " MOODS", 
 "freq":44
},
{
 "word": " MOODY", 
 "freq":294
},
{
 "word": " MOONS", 
 "freq":85
},
{
 "word": " MOORE", 
 "freq":2097
},
{
 "word": " MOORS", 
 "freq":27
},
{
 "word": " MOOSA", 
 "freq":25
},
{
 "word": " MOOSE", 
 "freq":186
},
{
 "word": " MOPED", 
 "freq":10
},
{
 "word": " MORAL", 
 "freq":1817
},
{
 "word": " MORAN", 
 "freq":293
},
{
 "word": " MOREL", 
 "freq":23
},
{
 "word": " MORES", 
 "freq":60
},
{
 "word": " MOREY", 
 "freq":21
},
{
 "word": " MORIN", 
 "freq":52
},
{
 "word": " MORON", 
 "freq":17
},
{
 "word": " MOROZ", 
 "freq":13
},
{
 "word": " MORRO", 
 "freq":27
},
{
 "word": " MORSE", 
 "freq":220
},
{
 "word": " MOSBY", 
 "freq":18
},
{
 "word": " MOSER", 
 "freq":43
},
{
 "word": " MOSES", 
 "freq":260
},
{
 "word": " MOSHE", 
 "freq":300
},
{
 "word": " MOSKY", 
 "freq":39
},
{
 "word": " MOSUL", 
 "freq":36
},
{
 "word": " MOTEL", 
 "freq":688
},
{
 "word": " MOTHS", 
 "freq":76
},
{
 "word": " MOTIF", 
 "freq":70
},
{
 "word": " MOTOR", 
 "freq":4197
},
{
 "word": " MOTTA", 
 "freq":26
},
{
 "word": " MOTTO", 
 "freq":150
},
{
 "word": " MOUND", 
 "freq":240
},
{
 "word": " MOUNT", 
 "freq":2008
},
{
 "word": " MOURN", 
 "freq":107
},
{
 "word": " MOUSA", 
 "freq":48
},
{
 "word": " MOUSE", 
 "freq":639
},
{
 "word": " MOUTH", 
 "freq":1130
},
{
 "word": " MOVED", 
 "freq":8538
},
{
 "word": " MOVER", 
 "freq":56
},
{
 "word": " MOVES", 
 "freq":3871
},
{
 "word": " MOVIE", 
 "freq":7241
},
{
 "word": " MOWED", 
 "freq":37
},
{
 "word": " MOWER", 
 "freq":87
},
{
 "word": " MOWRY", 
 "freq":29
},
{
 "word": " MOYER", 
 "freq":24
},
{
 "word": " MOZER", 
 "freq":157
},
{
 "word": " MUCUS", 
 "freq":33
},
{
 "word": " MUDAR", 
 "freq":10
},
{
 "word": " MUDDY", 
 "freq":221
},
{
 "word": " MUDGE", 
 "freq":26
},
{
 "word": " MUFTI", 
 "freq":34
},
{
 "word": " MUGGY", 
 "freq":25
},
{
 "word": " MULCH", 
 "freq":75
},
{
 "word": " MULES", 
 "freq":45
},
{
 "word": " MULLS", 
 "freq":21
},
{
 "word": " MULTI", 
 "freq":774
},
{
 "word": " MUMBO", 
 "freq":10
},
{
 "word": " MUMMY", 
 "freq":46
},
{
 "word": " MUMPS", 
 "freq":25
},
{
 "word": " MUNCH", 
 "freq":44
},
{
 "word": " MUNDI", 
 "freq":25
},
{
 "word": " MUNDO", 
 "freq":12
},
{
 "word": " MUNDY", 
 "freq":160
},
{
 "word": " MUNIS", 
 "freq":87
},
{
 "word": " MUNIZ", 
 "freq":20
},
{
 "word": " MUNOZ", 
 "freq":85
},
{
 "word": " MUNRO", 
 "freq":104
},
{
 "word": " MURAD", 
 "freq":16
},
{
 "word": " MURAI", 
 "freq":14
},
{
 "word": " MURAL", 
 "freq":134
},
{
 "word": " MURCH", 
 "freq":16
},
{
 "word": " MURES", 
 "freq":26
},
{
 "word": " MURKY", 
 "freq":157
},
{
 "word": " MURRY", 
 "freq":14
},
{
 "word": " MUSED", 
 "freq":64
},
{
 "word": " MUSEE", 
 "freq":21
},
{
 "word": " MUSES", 
 "freq":54
},
{
 "word": " MUSHY", 
 "freq":38
},
{
 "word": " MUSIC", 
 "freq":7975
},
{
 "word": " MUSTO", 
 "freq":26
},
{
 "word": " MUSTY", 
 "freq":30
},
{
 "word": " MUTED", 
 "freq":226
},
{
 "word": " MUZAK", 
 "freq":13
},
{
 "word": " MYERS", 
 "freq":1159
},
{
 "word": " MYLAN", 
 "freq":57
},
{
 "word": " MYLAR", 
 "freq":16
},
{
 "word": " MYLES", 
 "freq":47
},
{
 "word": " MYRNA", 
 "freq":42
},
{
 "word": " MYRON", 
 "freq":79
},
{
 "word": " MYTHS", 
 "freq":149
},
{
 "word": " MYUNG", 
 "freq":29
},
{
 "word": " NABET", 
 "freq":15
},
{
 "word": " NABIH", 
 "freq":46
},
{
 "word": " NABIL", 
 "freq":30
},
{
 "word": " NACCO", 
 "freq":23
},
{
 "word": " NADEL", 
 "freq":24
},
{
 "word": " NADER", 
 "freq":257
},
{
 "word": " NADIA", 
 "freq":57
},
{
 "word": " NADIR", 
 "freq":82
},
{
 "word": " NAFTA", 
 "freq":1015
},
{
 "word": " NAGEL", 
 "freq":60
},
{
 "word": " NAGLE", 
 "freq":58
},
{
 "word": " NAHAR", 
 "freq":82
},
{
 "word": " NAHAS", 
 "freq":36
},
{
 "word": " NAHAT", 
 "freq":10
},
{
 "word": " NAILS", 
 "freq":195
},
{
 "word": " NAITO", 
 "freq":14
},
{
 "word": " NAIVE", 
 "freq":343
},
{
 "word": " NAJAF", 
 "freq":41
},
{
 "word": " NAJAH", 
 "freq":10
},
{
 "word": " NAJIB", 
 "freq":393
},
{
 "word": " NAKAO", 
 "freq":18
},
{
 "word": " NAKED", 
 "freq":552
},
{
 "word": " NALCO", 
 "freq":21
},
{
 "word": " NAMED", 
 "freq":13378
},
{
 "word": " NAMES", 
 "freq":4480
},
{
 "word": " NANCE", 
 "freq":41
},
{
 "word": " NANCY", 
 "freq":1583
},
{
 "word": " NANNY", 
 "freq":165
},
{
 "word": " NAOMI", 
 "freq":64
},
{
 "word": " NAQVI", 
 "freq":40
},
{
 "word": " NARAL", 
 "freq":19
},
{
 "word": " NARCO", 
 "freq":46
},
{
 "word": " NARDI", 
 "freq":14
},
{
 "word": " NASAL", 
 "freq":71
},
{
 "word": " NASIR", 
 "freq":40
},
{
 "word": " NASON", 
 "freq":15
},
{
 "word": " NASTY", 
 "freq":489
},
{
 "word": " NATAL", 
 "freq":258
},
{
 "word": " NATAN", 
 "freq":42
},
{
 "word": " NATEC", 
 "freq":15
},
{
 "word": " NATTY", 
 "freq":17
},
{
 "word": " NAURU", 
 "freq":11
},
{
 "word": " NAVAL", 
 "freq":2201
},
{
 "word": " NAVEH", 
 "freq":22
},
{
 "word": " NAVEL", 
 "freq":58
},
{
 "word": " NAVON", 
 "freq":8
},
{
 "word": " NAWAZ", 
 "freq":36
},
{
 "word": " NAYEF", 
 "freq":22
},
{
 "word": " NAZER", 
 "freq":124
},
{
 "word": " NAZIS", 
 "freq":589
},
{
 "word": " NCUBE", 
 "freq":24
},
{
 "word": " NEALE", 
 "freq":41
},
{
 "word": " NEALY", 
 "freq":17
},
{
 "word": " NEARS", 
 "freq":122
},
{
 "word": " NEARY", 
 "freq":20
},
{
 "word": " NECKS", 
 "freq":133
},
{
 "word": " NEEDS", 
 "freq":7695
},
{
 "word": " NEEDY", 
 "freq":371
},
{
 "word": " NEELY", 
 "freq":61
},
{
 "word": " NEGEV", 
 "freq":60
},
{
 "word": " NEGRO", 
 "freq":127
},
{
 "word": " NEHRU", 
 "freq":61
},
{
 "word": " NEIDL", 
 "freq":28
},
{
 "word": " NEILL", 
 "freq":40
},
{
 "word": " NELLO", 
 "freq":22
},
{
 "word": " NEORX", 
 "freq":10
},
{
 "word": " NEPAL", 
 "freq":239
},
{
 "word": " NERCO", 
 "freq":57
},
{
 "word": " NERDS", 
 "freq":39
},
{
 "word": " NERDY", 
 "freq":18
},
{
 "word": " NERVE", 
 "freq":619
},
{
 "word": " NESTE", 
 "freq":15
},
{
 "word": " NESTS", 
 "freq":127
},
{
 "word": " NEUES", 
 "freq":60
},
{
 "word": " NEVER", 
 "freq":19831
},
{
 "word": " NEVES", 
 "freq":21
},
{
 "word": " NEVIN", 
 "freq":15
},
{
 "word": " NEVIS", 
 "freq":19
},
{
 "word": " NEWBY", 
 "freq":31
},
{
 "word": " NEWCO", 
 "freq":12
},
{
 "word": " NEWER", 
 "freq":441
},
{
 "word": " NEWLY", 
 "freq":3072
},
{
 "word": " NEWRY", 
 "freq":18
},
{
 "word": " NEXUS", 
 "freq":24
},
{
 "word": " NIAID", 
 "freq":7
},
{
 "word": " NIALL", 
 "freq":11
},
{
 "word": " NICER", 
 "freq":78
},
{
 "word": " NICHE", 
 "freq":496
},
{
 "word": " NICKS", 
 "freq":26
},
{
 "word": " NICKY", 
 "freq":31
},
{
 "word": " NICOL", 
 "freq":18
},
{
 "word": " NIDAL", 
 "freq":252
},
{
 "word": " NIECE", 
 "freq":178
},
{
 "word": " NIELS", 
 "freq":19
},
{
 "word": " NIETO", 
 "freq":19
},
{
 "word": " NIFTY", 
 "freq":72
},
{
 "word": " NIGEL", 
 "freq":168
},
{
 "word": " NIGER", 
 "freq":68
},
{
 "word": " NIGHT", 
 "freq":19338
},
{
 "word": " NIHON", 
 "freq":115
},
{
 "word": " NIKKI", 
 "freq":38
},
{
 "word": " NIKKO", 
 "freq":473
},
{
 "word": " NIKON", 
 "freq":50
},
{
 "word": " NIKOS", 
 "freq":27
},
{
 "word": " NILES", 
 "freq":121
},
{
 "word": " NILLY", 
 "freq":23
},
{
 "word": " NIMBA", 
 "freq":32
},
{
 "word": " NIMOY", 
 "freq":29
},
{
 "word": " NINER", 
 "freq":20
},
{
 "word": " NINES", 
 "freq":92
},
{
 "word": " NINJA", 
 "freq":228
},
{
 "word": " NINTH", 
 "freq":6153
},
{
 "word": " NISHI", 
 "freq":10
},
{
 "word": " NITRO", 
 "freq":15
},
{
 "word": " NITTY", 
 "freq":34
},
{
 "word": " NITZE", 
 "freq":18
},
{
 "word": " NIVEN", 
 "freq":23
},
{
 "word": " NIXED", 
 "freq":27
},
{
 "word": " NIXON", 
 "freq":1543
},
{
 "word": " NIZAR", 
 "freq":24
},
{
 "word": " NKOMO", 
 "freq":14
},
{
 "word": " NOBEL", 
 "freq":1028
},
{
 "word": " NOBLE", 
 "freq":508
},
{
 "word": " NOBUO", 
 "freq":17
},
{
 "word": " NODES", 
 "freq":54
},
{
 "word": " NOISE", 
 "freq":1013
},
{
 "word": " NOISY", 
 "freq":273
},
{
 "word": " NOKES", 
 "freq":14
},
{
 "word": " NOKIA", 
 "freq":61
},
{
 "word": " NOLAN", 
 "freq":263
},
{
 "word": " NOLTE", 
 "freq":61
},
{
 "word": " NOOKS", 
 "freq":15
},
{
 "word": " NOOSE", 
 "freq":51
},
{
 "word": " NORAD", 
 "freq":25
},
{
 "word": " NORCO", 
 "freq":13
},
{
 "word": " NOREN", 
 "freq":9
},
{
 "word": " NORGE", 
 "freq":17
},
{
 "word": " NORIO", 
 "freq":15
},
{
 "word": " NORMA", 
 "freq":202
},
{
 "word": " NORMS", 
 "freq":181
},
{
 "word": " NORSK", 
 "freq":48
},
{
 "word": " NORTE", 
 "freq":101
},
{
 "word": " NORTH", 
 "freq":20888
},
{
 "word": " NOSED", 
 "freq":141
},
{
 "word": " NOSES", 
 "freq":152
},
{
 "word": " NOTCH", 
 "freq":254
},
{
 "word": " NOTED", 
 "freq":7406
},
{
 "word": " NOTES", 
 "freq":10085
},
{
 "word": " NOTIS", 
 "freq":21
},
{
 "word": " NOTRE", 
 "freq":378
},
{
 "word": " NOURI", 
 "freq":23
},
{
 "word": " NOVAK", 
 "freq":113
},
{
 "word": " NOVEL", 
 "freq":1749
},
{
 "word": " NOWAK", 
 "freq":52
},
{
 "word": " NOYCE", 
 "freq":47
},
{
 "word": " NOYES", 
 "freq":22
},
{
 "word": " NUCCI", 
 "freq":16
},
{
 "word": " NUCOR", 
 "freq":70
},
{
 "word": " NUDES", 
 "freq":40
},
{
 "word": " NUDGE", 
 "freq":169
},
{
 "word": " NUEVA", 
 "freq":39
},
{
 "word": " NUEVO", 
 "freq":135
},
{
 "word": " NUKES", 
 "freq":25
},
{
 "word": " NUMAC", 
 "freq":13
},
{
 "word": " NUMED", 
 "freq":18
},
{
 "word": " NUMMI", 
 "freq":39
},
{
 "word": " NUNES", 
 "freq":12
},
{
 "word": " NUNEZ", 
 "freq":88
},
{
 "word": " NURSE", 
 "freq":912
},
{
 "word": " NUTRI", 
 "freq":101
},
{
 "word": " NUTTY", 
 "freq":43
},
{
 "word": " NYACK", 
 "freq":27
},
{
 "word": " NYCOR", 
 "freq":47
},
{
 "word": " NYERS", 
 "freq":64
},
{
 "word": " NYLON", 
 "freq":172
},
{
 "word": " NYMEX", 
 "freq":56
},
{
 "word": " NYNEX", 
 "freq":576
},
{
 "word": " NYUNT", 
 "freq":19
},
{
 "word": " OAKAR", 
 "freq":73
},
{
 "word": " OAKES", 
 "freq":55
},
{
 "word": " OASIS", 
 "freq":128
},
{
 "word": " OATES", 
 "freq":100
},
{
 "word": " OATHS", 
 "freq":26
},
{
 "word": " OBEID", 
 "freq":283
},
{
 "word": " OBERG", 
 "freq":39
},
{
 "word": " OBESE", 
 "freq":64
},
{
 "word": " OBEYS", 
 "freq":16
},
{
 "word": " OBOTE", 
 "freq":16
},
{
 "word": " OCALA", 
 "freq":72
},
{
 "word": " OCCUR", 
 "freq":1795
},
{
 "word": " OCEAN", 
 "freq":1897
},
{
 "word": " OCHOA", 
 "freq":194
},
{
 "word": " OCTEL", 
 "freq":35
},
{
 "word": " ODDLY", 
 "freq":181
},
{
 "word": " ODELL", 
 "freq":21
},
{
 "word": " ODEON", 
 "freq":39
},
{
 "word": " ODIER", 
 "freq":23
},
{
 "word": " ODORS", 
 "freq":86
},
{
 "word": " OFFER", 
 "freq":15307
},
{
 "word": " OFTEN", 
 "freq":12761
},
{
 "word": " OGAWA", 
 "freq":32
},
{
 "word": " OGDEN", 
 "freq":175
},
{
 "word": " OGINO", 
 "freq":20
},
{
 "word": " OILED", 
 "freq":79
},
{
 "word": " OILER", 
 "freq":13
},
{
 "word": " OJEDA", 
 "freq":48
},
{
 "word": " OKADA", 
 "freq":18
},
{
 "word": " OKOYE", 
 "freq":16
},
{
 "word": " OKUNO", 
 "freq":17
},
{
 "word": " OLDEN", 
 "freq":29
},
{
 "word": " OLDER", 
 "freq":3623
},
{
 "word": " OLICK", 
 "freq":13
},
{
 "word": " OLIVA", 
 "freq":29
},
{
 "word": " OLIVE", 
 "freq":423
},
{
 "word": " OLLER", 
 "freq":23
},
{
 "word": " OLLIE", 
 "freq":95
},
{
 "word": " OLMOS", 
 "freq":40
},
{
 "word": " OLNEY", 
 "freq":22
},
{
 "word": " OLSEN", 
 "freq":185
},
{
 "word": " OLSON", 
 "freq":379
},
{
 "word": " OMAHA", 
 "freq":633
},
{
 "word": " OMANI", 
 "freq":16
},
{
 "word": " OMEGA", 
 "freq":86
},
{
 "word": " OMENS", 
 "freq":25
},
{
 "word": " OMITS", 
 "freq":42
},
{
 "word": " ONION", 
 "freq":244
},
{
 "word": " ONODA", 
 "freq":21
},
{
 "word": " ONOUE", 
 "freq":36
},
{
 "word": " ONSET", 
 "freq":226
},
{
 "word": " OOMPH", 
 "freq":13
},
{
 "word": " OOZED", 
 "freq":13
},
{
 "word": " OPENS", 
 "freq":1184
},
{
 "word": " OPERA", 
 "freq":2044
},
{
 "word": " OPIUM", 
 "freq":170
},
{
 "word": " OPRAH", 
 "freq":138
},
{
 "word": " OPTED", 
 "freq":397
},
{
 "word": " OPTIC", 
 "freq":315
},
{
 "word": " ORBIT", 
 "freq":994
},
{
 "word": " ORDER", 
 "freq":14787
},
{
 "word": " OREOS", 
 "freq":17
},
{
 "word": " ORGAN", 
 "freq":635
},
{
 "word": " ORION", 
 "freq":442
},
{
 "word": " ORKIN", 
 "freq":21
},
{
 "word": " ORLOV", 
 "freq":42
},
{
 "word": " ORMAN", 
 "freq":14
},
{
 "word": " ORNDA", 
 "freq":17
},
{
 "word": " ORRIN", 
 "freq":181
},
{
 "word": " ORSON", 
 "freq":54
},
{
 "word": " ORTHO", 
 "freq":109
},
{
 "word": " ORTIS", 
 "freq":19
},
{
 "word": " ORTIZ", 
 "freq":185
},
{
 "word": " ORTON", 
 "freq":29
},
{
 "word": " OSAGE", 
 "freq":23
},
{
 "word": " OSAKA", 
 "freq":269
},
{
 "word": " OSAKE", 
 "freq":27
},
{
 "word": " OSAMA", 
 "freq":22
},
{
 "word": " OSAMU", 
 "freq":23
},
{
 "word": " OSCAR", 
 "freq":1198
},
{
 "word": " OSKAR", 
 "freq":47
},
{
 "word": " OSLIN", 
 "freq":33
},
{
 "word": " OSMAN", 
 "freq":52
},
{
 "word": " OSTER", 
 "freq":82
},
{
 "word": " OSUNA", 
 "freq":12
},
{
 "word": " OTERO", 
 "freq":20
},
{
 "word": " OTHER", 
 "freq":106052
},
{
 "word": " OTTER", 
 "freq":57
},
{
 "word": " OTTIS", 
 "freq":6
},
{
 "word": " OUGHT", 
 "freq":1734
},
{
 "word": " OUNCE", 
 "freq":4253
},
{
 "word": " OUTDO", 
 "freq":37
},
{
 "word": " OUTER", 
 "freq":422
},
{
 "word": " OUTTA", 
 "freq":21
},
{
 "word": " OUVEA", 
 "freq":33
},
{
 "word": " OVARY", 
 "freq":19
},
{
 "word": " OVENS", 
 "freq":126
},
{
 "word": " OVERS", 
 "freq":26
},
{
 "word": " OVERT", 
 "freq":133
},
{
 "word": " OVITZ", 
 "freq":52
},
{
 "word": " OWADA", 
 "freq":12
},
{
 "word": " OWENS", 
 "freq":634
},
{
 "word": " OWING", 
 "freq":128
},
{
 "word": " OWNED", 
 "freq":9615
},
{
 "word": " OWNER", 
 "freq":5268
},
{
 "word": " OXFAM", 
 "freq":26
},
{
 "word": " OXIDE", 
 "freq":183
},
{
 "word": " OXLEY", 
 "freq":28
},
{
 "word": " OZARK", 
 "freq":39
},
{
 "word": " OZAWA", 
 "freq":99
},
{
 "word": " OZIEL", 
 "freq":19
},
{
 "word": " OZONE", 
 "freq":978
},
{
 "word": " OZZIE", 
 "freq":78
},
{
 "word": " PABLO", 
 "freq":295
},
{
 "word": " PABST", 
 "freq":16
},
{
 "word": " PACED", 
 "freq":247
},
{
 "word": " PACES", 
 "freq":59
},
{
 "word": " PACHO", 
 "freq":11
},
{
 "word": " PACKS", 
 "freq":301
},
{
 "word": " PACTS", 
 "freq":238
},
{
 "word": " PADDY", 
 "freq":79
},
{
 "word": " PADRE", 
 "freq":56
},
{
 "word": " PADUA", 
 "freq":17
},
{
 "word": " PAEAN", 
 "freq":16
},
{
 "word": " PAGAN", 
 "freq":83
},
{
 "word": " PAGER", 
 "freq":71
},
{
 "word": " PAGES", 
 "freq":2206
},
{
 "word": " PAIGE", 
 "freq":70
},
{
 "word": " PAILS", 
 "freq":12
},
{
 "word": " PAINE", 
 "freq":106
},
{
 "word": " PAINS", 
 "freq":503
},
{
 "word": " PAINT", 
 "freq":1492
},
{
 "word": " PAIRS", 
 "freq":366
},
{
 "word": " PALAU", 
 "freq":70
},
{
 "word": " PALED", 
 "freq":19
},
{
 "word": " PALES", 
 "freq":58
},
{
 "word": " PALEY", 
 "freq":63
},
{
 "word": " PALMA", 
 "freq":181
},
{
 "word": " PALME", 
 "freq":184
},
{
 "word": " PALMS", 
 "freq":171
},
{
 "word": " PALOS", 
 "freq":42
},
{
 "word": " PALSY", 
 "freq":69
},
{
 "word": " PAMPA", 
 "freq":17
},
{
 "word": " PANAY", 
 "freq":15
},
{
 "word": " PANDA", 
 "freq":124
},
{
 "word": " PANEL", 
 "freq":6476
},
{
 "word": " PANES", 
 "freq":27
},
{
 "word": " PANGS", 
 "freq":21
},
{
 "word": " PANIC", 
 "freq":951
},
{
 "word": " PANKY", 
 "freq":16
},
{
 "word": " PANTS", 
 "freq":692
},
{
 "word": " PANTY", 
 "freq":23
},
{
 "word": " PAOLI", 
 "freq":13
},
{
 "word": " PAOLO", 
 "freq":90
},
{
 "word": " PAPAL", 
 "freq":223
},
{
 "word": " PAPER", 
 "freq":8322
},
{
 "word": " PAPUA", 
 "freq":81
},
{
 "word": " PARDO", 
 "freq":40
},
{
 "word": " PARED", 
 "freq":194
},
{
 "word": " PARIS", 
 "freq":4301
},
{
 "word": " PARKA", 
 "freq":22
},
{
 "word": " PARKE", 
 "freq":43
},
{
 "word": " PARKS", 
 "freq":1773
},
{
 "word": " PARMA", 
 "freq":28
},
{
 "word": " PARRA", 
 "freq":47
},
{
 "word": " PARRY", 
 "freq":73
},
{
 "word": " PARTI", 
 "freq":31
},
{
 "word": " PARTS", 
 "freq":8139
},
{
 "word": " PARTY", 
 "freq":31282
},
{
 "word": " PASCO", 
 "freq":46
},
{
 "word": " PASEO", 
 "freq":60
},
{
 "word": " PASOK", 
 "freq":62
},
{
 "word": " PASSE", 
 "freq":57
},
{
 "word": " PASTA", 
 "freq":438
},
{
 "word": " PASTE", 
 "freq":163
},
{
 "word": " PASTS", 
 "freq":14
},
{
 "word": " PATCH", 
 "freq":548
},
{
 "word": " PATEL", 
 "freq":77
},
{
 "word": " PATHE", 
 "freq":333
},
{
 "word": " PATHS", 
 "freq":219
},
{
 "word": " PATIO", 
 "freq":152
},
{
 "word": " PATON", 
 "freq":29
},
{
 "word": " PATSY", 
 "freq":63
},
{
 "word": " PATTI", 
 "freq":143
},
{
 "word": " PATTY", 
 "freq":169
},
{
 "word": " PAULA", 
 "freq":295
},
{
 "word": " PAULO", 
 "freq":266
},
{
 "word": " PAUSE", 
 "freq":358
},
{
 "word": " PAVED", 
 "freq":243
},
{
 "word": " PAVEL", 
 "freq":57
},
{
 "word": " PAVES", 
 "freq":44
},
{
 "word": " PAVIN", 
 "freq":12
},
{
 "word": " PAVON", 
 "freq":9
},
{
 "word": " PAWNS", 
 "freq":72
},
{
 "word": " PAXON", 
 "freq":7
},
{
 "word": " PAYER", 
 "freq":78
},
{
 "word": " PAYNE", 
 "freq":327
},
{
 "word": " PDVSA", 
 "freq":15
},
{
 "word": " PEACE", 
 "freq":12657
},
{
 "word": " PEACH", 
 "freq":260
},
{
 "word": " PEAKS", 
 "freq":444
},
{
 "word": " PEALE", 
 "freq":25
},
{
 "word": " PEARL", 
 "freq":614
},
{
 "word": " PEARS", 
 "freq":90
},
{
 "word": " PEARY", 
 "freq":49
},
{
 "word": " PEASE", 
 "freq":115
},
{
 "word": " PECAN", 
 "freq":51
},
{
 "word": " PECOS", 
 "freq":19
},
{
 "word": " PEDAL", 
 "freq":109
},
{
 "word": " PEDRO", 
 "freq":389
},
{
 "word": " PEEKS", 
 "freq":24
},
{
 "word": " PEELS", 
 "freq":23
},
{
 "word": " PEERS", 
 "freq":394
},
{
 "word": " PEERY", 
 "freq":14
},
{
 "word": " PEETE", 
 "freq":18
},
{
 "word": " PEGGY", 
 "freq":430
},
{
 "word": " PEKIN", 
 "freq":14
},
{
 "word": " PELAT", 
 "freq":14
},
{
 "word": " PELED", 
 "freq":28
},
{
 "word": " PELLE", 
 "freq":34
},
{
 "word": " PELTS", 
 "freq":28
},
{
 "word": " PELTZ", 
 "freq":48
},
{
 "word": " PEMEX", 
 "freq":167
},
{
 "word": " PENAL", 
 "freq":99
},
{
 "word": " PENCE", 
 "freq":1805
},
{
 "word": " PENIS", 
 "freq":58
},
{
 "word": " PENNY", 
 "freq":923
},
{
 "word": " PENRY", 
 "freq":23
},
{
 "word": " PENTA", 
 "freq":19
},
{
 "word": " PEPIN", 
 "freq":22
},
{
 "word": " PEPPY", 
 "freq":25
},
{
 "word": " PEPSI", 
 "freq":963
},
{
 "word": " PEPTO", 
 "freq":22
},
{
 "word": " PERCE", 
 "freq":10
},
{
 "word": " PERCH", 
 "freq":101
},
{
 "word": " PERCS", 
 "freq":43
},
{
 "word": " PERCY", 
 "freq":109
},
{
 "word": " PERES", 
 "freq":739
},
{
 "word": " PEREZ", 
 "freq":1681
},
{
 "word": " PERIL", 
 "freq":138
},
{
 "word": " PERKS", 
 "freq":178
},
{
 "word": " PERKY", 
 "freq":30
},
{
 "word": " PERLE", 
 "freq":47
},
{
 "word": " PERON", 
 "freq":53
},
{
 "word": " PEROT", 
 "freq":1239
},
{
 "word": " PERRY", 
 "freq":825
},
{
 "word": " PERTH", 
 "freq":92
},
{
 "word": " PESCI", 
 "freq":23
},
{
 "word": " PESKY", 
 "freq":65
},
{
 "word": " PESOS", 
 "freq":261
},
{
 "word": " PESTO", 
 "freq":33
},
{
 "word": " PESTS", 
 "freq":172
},
{
 "word": " PETAH", 
 "freq":15
},
{
 "word": " PETAL", 
 "freq":15
},
{
 "word": " PETAR", 
 "freq":64
},
{
 "word": " PETER", 
 "freq":4719
},
{
 "word": " PETIT", 
 "freq":86
},
{
 "word": " PETRA", 
 "freq":48
},
{
 "word": " PETRE", 
 "freq":48
},
{
 "word": " PETRI", 
 "freq":48
},
{
 "word": " PETRO", 
 "freq":110
},
{
 "word": " PETRY", 
 "freq":16
},
{
 "word": " PETTY", 
 "freq":595
},
{
 "word": " PEZIM", 
 "freq":20
},
{
 "word": " PHASE", 
 "freq":1754
},
{
 "word": " PHILO", 
 "freq":18
},
{
 "word": " PHNOM", 
 "freq":358
},
{
 "word": " PHONE", 
 "freq":7020
},
{
 "word": " PHONG", 
 "freq":18
},
{
 "word": " PHONY", 
 "freq":436
},
{
 "word": " PHOTO", 
 "freq":1247
},
{
 "word": " PIANO", 
 "freq":843
},
{
 "word": " PICCO", 
 "freq":21
},
{
 "word": " PICKS", 
 "freq":651
},
{
 "word": " PICKY", 
 "freq":40
},
{
 "word": " PIECE", 
 "freq":3171
},
{
 "word": " PIECH", 
 "freq":64
},
{
 "word": " PIERO", 
 "freq":28
},
{
 "word": " PIERS", 
 "freq":53
},
{
 "word": " PIETY", 
 "freq":28
},
{
 "word": " PIGGY", 
 "freq":72
},
{
 "word": " PIKES", 
 "freq":19
},
{
 "word": " PILAR", 
 "freq":21
},
{
 "word": " PILED", 
 "freq":372
},
{
 "word": " PILES", 
 "freq":231
},
{
 "word": " PILLS", 
 "freq":406
},
{
 "word": " PILON", 
 "freq":31
},
{
 "word": " PILOT", 
 "freq":4075
},
{
 "word": " PIMCO", 
 "freq":15
},
{
 "word": " PIMEN", 
 "freq":34
},
{
 "word": " PIMPS", 
 "freq":21
},
{
 "word": " PINCH", 
 "freq":362
},
{
 "word": " PINES", 
 "freq":166
},
{
 "word": " PINEY", 
 "freq":17
},
{
 "word": " PINKS", 
 "freq":11
},
{
 "word": " PINKY", 
 "freq":28
},
{
 "word": " PINOT", 
 "freq":90
},
{
 "word": " PINTO", 
 "freq":81
},
{
 "word": " PINTS", 
 "freq":68
},
{
 "word": " PIOTR", 
 "freq":24
},
{
 "word": " PIOUS", 
 "freq":27
},
{
 "word": " PIPED", 
 "freq":74
},
{
 "word": " PIPER", 
 "freq":379
},
{
 "word": " PIPES", 
 "freq":511
},
{
 "word": " PIQUE", 
 "freq":49
},
{
 "word": " PIRES", 
 "freq":17
},
{
 "word": " PIRIE", 
 "freq":35
},
{
 "word": " PIRKO", 
 "freq":35
},
{
 "word": " PIRUL", 
 "freq":60
},
{
 "word": " PITCH", 
 "freq":1107
},
{
 "word": " PITHY", 
 "freq":18
},
{
 "word": " PITRE", 
 "freq":17
},
{
 "word": " PITTS", 
 "freq":104
},
{
 "word": " PIVOT", 
 "freq":22
},
{
 "word": " PIZZA", 
 "freq":1190
},
{
 "word": " PIZZO", 
 "freq":20
},
{
 "word": " PLACE", 
 "freq":17057
},
{
 "word": " PLAID", 
 "freq":132
},
{
 "word": " PLAIN", 
 "freq":944
},
{
 "word": " PLANE", 
 "freq":7503
},
{
 "word": " PLANK", 
 "freq":111
},
{
 "word": " PLANO", 
 "freq":64
},
{
 "word": " PLANS", 
 "freq":22606
},
{
 "word": " PLANT", 
 "freq":13143
},
{
 "word": " PLATA", 
 "freq":58
},
{
 "word": " PLATE", 
 "freq":938
},
{
 "word": " PLATH", 
 "freq":22
},
{
 "word": " PLATO", 
 "freq":36
},
{
 "word": " PLATT", 
 "freq":221
},
{
 "word": " PLATZ", 
 "freq":37
},
{
 "word": " PLAYA", 
 "freq":22
},
{
 "word": " PLAYS", 
 "freq":2814
},
{
 "word": " PLAZA", 
 "freq":875
},
{
 "word": " PLEAD", 
 "freq":612
},
{
 "word": " PLEAS", 
 "freq":632
},
{
 "word": " PLIED", 
 "freq":31
},
{
 "word": " PLOTS", 
 "freq":268
},
{
 "word": " PLOWS", 
 "freq":32
},
{
 "word": " PLOYS", 
 "freq":25
},
{
 "word": " PLUCK", 
 "freq":52
},
{
 "word": " PLUGS", 
 "freq":102
},
{
 "word": " PLUMB", 
 "freq":48
},
{
 "word": " PLUME", 
 "freq":91
},
{
 "word": " PLUMP", 
 "freq":60
},
{
 "word": " PLUMS", 
 "freq":48
},
{
 "word": " PLUNK", 
 "freq":28
},
{
 "word": " PLUSH", 
 "freq":117
},
{
 "word": " PLUTO", 
 "freq":31
},
{
 "word": " POACH", 
 "freq":18
},
{
 "word": " POEHL", 
 "freq":118
},
{
 "word": " POEMS", 
 "freq":227
},
{
 "word": " POETS", 
 "freq":216
},
{
 "word": " POGUE", 
 "freq":72
},
{
 "word": " POINT", 
 "freq":20071
},
{
 "word": " POISE", 
 "freq":40
},
{
 "word": " POKED", 
 "freq":113
},
{
 "word": " POKER", 
 "freq":190
},
{
 "word": " POKES", 
 "freq":34
},
{
 "word": " POLAR", 
 "freq":214
},
{
 "word": " POLES", 
 "freq":886
},
{
 "word": " POLIO", 
 "freq":193
},
{
 "word": " POLKA", 
 "freq":163
},
{
 "word": " POLLO", 
 "freq":18
},
{
 "word": " POLLS", 
 "freq":3037
},
{
 "word": " POLLY", 
 "freq":203
},
{
 "word": " POLYP", 
 "freq":24
},
{
 "word": " PONCA", 
 "freq":14
},
{
 "word": " PONCE", 
 "freq":143
},
{
 "word": " PONDS", 
 "freq":121
},
{
 "word": " PONTE", 
 "freq":28
},
{
 "word": " PONZI", 
 "freq":31
},
{
 "word": " POOCH", 
 "freq":24
},
{
 "word": " POOLE", 
 "freq":66
},
{
 "word": " POOLS", 
 "freq":619
},
{
 "word": " POORE", 
 "freq":24
},
{
 "word": " POORS", 
 "freq":49
},
{
 "word": " POPES", 
 "freq":17
},
{
 "word": " POPOV", 
 "freq":121
},
{
 "word": " POPPA", 
 "freq":20
},
{
 "word": " POPPY", 
 "freq":93
},
{
 "word": " PORAT", 
 "freq":54
},
{
 "word": " PORCH", 
 "freq":232
},
{
 "word": " PORED", 
 "freq":12
},
{
 "word": " PORES", 
 "freq":16
},
{
 "word": " PORKY", 
 "freq":24
},
{
 "word": " PORNO", 
 "freq":27
},
{
 "word": " POROS", 
 "freq":24
},
{
 "word": " PORTA", 
 "freq":11
},
{
 "word": " PORTE", 
 "freq":18
},
{
 "word": " PORTO", 
 "freq":42
},
{
 "word": " PORTS", 
 "freq":714
},
{
 "word": " POSCO", 
 "freq":29
},
{
 "word": " POSED", 
 "freq":901
},
{
 "word": " POSES", 
 "freq":514
},
{
 "word": " POSEY", 
 "freq":39
},
{
 "word": " POSSE", 
 "freq":73
},
{
 "word": " POSTS", 
 "freq":1634
},
{
 "word": " POTTS", 
 "freq":49
},
{
 "word": " POTTY", 
 "freq":31
},
{
 "word": " POUCH", 
 "freq":45
},
{
 "word": " POUGH", 
 "freq":40
},
{
 "word": " POUND", 
 "freq":6406
},
{
 "word": " POURS", 
 "freq":60
},
{
 "word": " POWER", 
 "freq":22021
},
{
 "word": " PRADO", 
 "freq":36
},
{
 "word": " PRANK", 
 "freq":85
},
{
 "word": " PRATT", 
 "freq":615
},
{
 "word": " PRAVO", 
 "freq":51
},
{
 "word": " PRAYS", 
 "freq":23
},
{
 "word": " PREGO", 
 "freq":43
},
{
 "word": " PRESS", 
 "freq":13467
},
{
 "word": " PRICE", 
 "freq":31807
},
{
 "word": " PRICK", 
 "freq":20
},
{
 "word": " PRIDE", 
 "freq":1119
},
{
 "word": " PRIED", 
 "freq":37
},
{
 "word": " PRIMA", 
 "freq":63
},
{
 "word": " PRIME", 
 "freq":11902
},
{
 "word": " PRIMO", 
 "freq":21
},
{
 "word": " PRINT", 
 "freq":1389
},
{
 "word": " PRIOR", 
 "freq":2977
},
{
 "word": " PRISM", 
 "freq":40
},
{
 "word": " PRIVY", 
 "freq":68
},
{
 "word": " PRIZE", 
 "freq":2543
},
{
 "word": " PRIZM", 
 "freq":39
},
{
 "word": " PROBE", 
 "freq":1934
},
{
 "word": " PRODS", 
 "freq":30
},
{
 "word": " PROFS", 
 "freq":21
},
{
 "word": " PROMO", 
 "freq":15
},
{
 "word": " PROMS", 
 "freq":20
},
{
 "word": " PRONE", 
 "freq":431
},
{
 "word": " PRONG", 
 "freq":15
},
{
 "word": " PROOF", 
 "freq":1544
},
{
 "word": " PROPS", 
 "freq":121
},
{
 "word": " PROSE", 
 "freq":148
},
{
 "word": " PROTO", 
 "freq":17
},
{
 "word": " PROUD", 
 "freq":1399
},
{
 "word": " PROUT", 
 "freq":16
},
{
 "word": " PROVE", 
 "freq":3054
},
{
 "word": " PROVO", 
 "freq":107
},
{
 "word": " PROWL", 
 "freq":53
},
{
 "word": " PROXY", 
 "freq":1314
},
{
 "word": " PRUNE", 
 "freq":78
},
{
 "word": " PRYCE", 
 "freq":45
},
{
 "word": " PRYOR", 
 "freq":296
},
{
 "word": " PSALM", 
 "freq":13
},
{
 "word": " PUBIC", 
 "freq":16
},
{
 "word": " PUCCI", 
 "freq":28
},
{
 "word": " PUCHE", 
 "freq":18
},
{
 "word": " PUDGY", 
 "freq":20
},
{
 "word": " PUEDE", 
 "freq":25
},
{
 "word": " PUFFS", 
 "freq":47
},
{
 "word": " PUFFY", 
 "freq":41
},
{
 "word": " PUGET", 
 "freq":147
},
{
 "word": " PULLS", 
 "freq":308
},
{
 "word": " PULSE", 
 "freq":171
},
{
 "word": " PUMPS", 
 "freq":464
},
{
 "word": " PUNCH", 
 "freq":513
},
{
 "word": " PUNKS", 
 "freq":20
},
{
 "word": " PUNTA", 
 "freq":56
},
{
 "word": " PUNTS", 
 "freq":64
},
{
 "word": " PUPIL", 
 "freq":153
},
{
 "word": " PUPPY", 
 "freq":98
},
{
 "word": " PURDY", 
 "freq":124
},
{
 "word": " PUREE", 
 "freq":79
},
{
 "word": " PURER", 
 "freq":15
},
{
 "word": " PUREX", 
 "freq":12
},
{
 "word": " PURGE", 
 "freq":211
},
{
 "word": " PURIM", 
 "freq":11
},
{
 "word": " PURIS", 
 "freq":46
},
{
 "word": " PURSE", 
 "freq":328
},
{
 "word": " PUSAN", 
 "freq":48
},
{
 "word": " PUSHY", 
 "freq":29
},
{
 "word": " PUTTS", 
 "freq":29
},
{
 "word": " PUTTY", 
 "freq":40
},
{
 "word": " PUZZO", 
 "freq":31
},
{
 "word": " PYGMY", 
 "freq":26
},
{
 "word": " PYLON", 
 "freq":13
},
{
 "word": " PYOTR", 
 "freq":35
},
{
 "word": " PYXIS", 
 "freq":17
},
{
 "word": " QABAS", 
 "freq":20
},
{
 "word": " QATAR", 
 "freq":215
},
{
 "word": " QUACK", 
 "freq":13
},
{
 "word": " QUAID", 
 "freq":43
},
{
 "word": " QUAIL", 
 "freq":95
},
{
 "word": " QUAIN", 
 "freq":19
},
{
 "word": " QUAKE", 
 "freq":1964
},
{
 "word": " QUANG", 
 "freq":34
},
{
 "word": " QUART", 
 "freq":112
},
{
 "word": " QUASH", 
 "freq":97
},
{
 "word": " QUASI", 
 "freq":192
},
{
 "word": " QUEEN", 
 "freq":1400
},
{
 "word": " QUEER", 
 "freq":38
},
{
 "word": " QUELL", 
 "freq":379
},
{
 "word": " QUERY", 
 "freq":67
},
{
 "word": " QUEST", 
 "freq":604
},
{
 "word": " QUEUE", 
 "freq":39
},
{
 "word": " QUICK", 
 "freq":3008
},
{
 "word": " QUIET", 
 "freq":2370
},
{
 "word": " QUILL", 
 "freq":52
},
{
 "word": " QUILT", 
 "freq":172
},
{
 "word": " QUINN", 
 "freq":398
},
{
 "word": " QUINT", 
 "freq":42
},
{
 "word": " QUIPS", 
 "freq":58
},
{
 "word": " QUIRK", 
 "freq":81
},
{
 "word": " QUIST", 
 "freq":211
},
{
 "word": " QUITE", 
 "freq":4382
},
{
 "word": " QUITO", 
 "freq":63
},
{
 "word": " QUITS", 
 "freq":88
},
{
 "word": " QUOTA", 
 "freq":861
},
{
 "word": " QUOTE", 
 "freq":486
},
{
 "word": " QUYEN", 
 "freq":30
},
{
 "word": " RABAT", 
 "freq":23
},
{
 "word": " RABBI", 
 "freq":550
},
{
 "word": " RABBO", 
 "freq":19
},
{
 "word": " RABBY", 
 "freq":11
},
{
 "word": " RABID", 
 "freq":53
},
{
 "word": " RABIN", 
 "freq":568
},
{
 "word": " RABTA", 
 "freq":103
},
{
 "word": " RACAL", 
 "freq":60
},
{
 "word": " RACED", 
 "freq":281
},
{
 "word": " RACER", 
 "freq":63
},
{
 "word": " RACES", 
 "freq":1256
},
{
 "word": " RACKS", 
 "freq":144
},
{
 "word": " RADAR", 
 "freq":1473
},
{
 "word": " RADER", 
 "freq":32
},
{
 "word": " RADIN", 
 "freq":66
},
{
 "word": " RADIO", 
 "freq":11117
},
{
 "word": " RADLO", 
 "freq":23
},
{
 "word": " RADON", 
 "freq":153
},
{
 "word": " RAESE", 
 "freq":16
},
{
 "word": " RAFAH", 
 "freq":92
},
{
 "word": " RAFFI", 
 "freq":18
},
{
 "word": " RAFKO", 
 "freq":13
},
{
 "word": " RAFTS", 
 "freq":82
},
{
 "word": " RAGAN", 
 "freq":16
},
{
 "word": " RAGED", 
 "freq":253
},
{
 "word": " RAGES", 
 "freq":58
},
{
 "word": " RAHAL", 
 "freq":19
},
{
 "word": " RAHIM", 
 "freq":42
},
{
 "word": " RAIDS", 
 "freq":878
},
{
 "word": " RAILS", 
 "freq":176
},
{
 "word": " RAINS", 
 "freq":927
},
{
 "word": " RAINY", 
 "freq":285
},
{
 "word": " RAISA", 
 "freq":182
},
{
 "word": " RAISE", 
 "freq":8855
},
{
 "word": " RAITT", 
 "freq":55
},
{
 "word": " RAJIV", 
 "freq":211
},
{
 "word": " RAKED", 
 "freq":83
},
{
 "word": " RAKES", 
 "freq":25
},
{
 "word": " RALES", 
 "freq":33
},
{
 "word": " RALEY", 
 "freq":8
},
{
 "word": " RALLY", 
 "freq":6340
},
{
 "word": " RALPH", 
 "freq":1253
},
{
 "word": " RAMAN", 
 "freq":18
},
{
 "word": " RAMAT", 
 "freq":15
},
{
 "word": " RAMBO", 
 "freq":178
},
{
 "word": " RAMEN", 
 "freq":22
},
{
 "word": " RAMEY", 
 "freq":49
},
{
 "word": " RAMIZ", 
 "freq":46
},
{
 "word": " RAMON", 
 "freq":320
},
{
 "word": " RAMOS", 
 "freq":266
},
{
 "word": " RAMPS", 
 "freq":94
},
{
 "word": " RANCE", 
 "freq":10
},
{
 "word": " RANCH", 
 "freq":1323
},
{
 "word": " RANDI", 
 "freq":31
},
{
 "word": " RANDY", 
 "freq":577
},
{
 "word": " RANGE", 
 "freq":9205
},
{
 "word": " RANKS", 
 "freq":1676
},
{
 "word": " RAOUL", 
 "freq":72
},
{
 "word": " RAPED", 
 "freq":627
},
{
 "word": " RAPES", 
 "freq":151
},
{
 "word": " RAPID", 
 "freq":1859
},
{
 "word": " RARER", 
 "freq":27
},
{
 "word": " RASPY", 
 "freq":50
},
{
 "word": " RATED", 
 "freq":3308
},
{
 "word": " RATES", 
 "freq":23334
},
{
 "word": " RATIO", 
 "freq":1400
},
{
 "word": " RATIU", 
 "freq":30
},
{
 "word": " RATON", 
 "freq":244
},
{
 "word": " RAUCH", 
 "freq":22
},
{
 "word": " RAVED", 
 "freq":24
},
{
 "word": " RAVEL", 
 "freq":17
},
{
 "word": " RAVEN", 
 "freq":87
},
{
 "word": " RAVES", 
 "freq":51
},
{
 "word": " RAWLS", 
 "freq":31
},
{
 "word": " RAYED", 
 "freq":24
},
{
 "word": " RAYON", 
 "freq":33
},
{
 "word": " RAZED", 
 "freq":95
},
{
 "word": " RAZOR", 
 "freq":293
},
{
 "word": " REACH", 
 "freq":6301
},
{
 "word": " REACT", 
 "freq":669
},
{
 "word": " READS", 
 "freq":558
},
{
 "word": " READY", 
 "freq":5785
},
{
 "word": " REALM", 
 "freq":221
},
{
 "word": " REAMS", 
 "freq":82
},
{
 "word": " REAPS", 
 "freq":19
},
{
 "word": " REARM", 
 "freq":23
},
{
 "word": " REBEL", 
 "freq":2890
},
{
 "word": " REBER", 
 "freq":15
},
{
 "word": " REBUT", 
 "freq":64
},
{
 "word": " RECAP", 
 "freq":23
},
{
 "word": " RECUR", 
 "freq":49
},
{
 "word": " REDDY", 
 "freq":35
},
{
 "word": " REDEL", 
 "freq":17
},
{
 "word": " REECE", 
 "freq":31
},
{
 "word": " REEDS", 
 "freq":31
},
{
 "word": " REEDY", 
 "freq":39
},
{
 "word": " REEFS", 
 "freq":82
},
{
 "word": " REEKS", 
 "freq":18
},
{
 "word": " REELS", 
 "freq":49
},
{
 "word": " REESE", 
 "freq":147
},
{
 "word": " REEVE", 
 "freq":30
},
{
 "word": " REFAC", 
 "freq":12
},
{
 "word": " REFCO", 
 "freq":158
},
{
 "word": " REFER", 
 "freq":619
},
{
 "word": " REFIT", 
 "freq":14
},
{
 "word": " REGAL", 
 "freq":126
},
{
 "word": " REGAN", 
 "freq":295
},
{
 "word": " REGES", 
 "freq":20
},
{
 "word": " REGIS", 
 "freq":90
},
{
 "word": " REHAB", 
 "freq":66
},
{
 "word": " REICH", 
 "freq":364
},
{
 "word": " REIDY", 
 "freq":51
},
{
 "word": " REIGN", 
 "freq":391
},
{
 "word": " REINS", 
 "freq":182
},
{
 "word": " REISS", 
 "freq":43
},
{
 "word": " REITZ", 
 "freq":32
},
{
 "word": " RELAX", 
 "freq":577
},
{
 "word": " RELAY", 
 "freq":287
},
{
 "word": " RELIC", 
 "freq":72
},
{
 "word": " REMER", 
 "freq":30
},
{
 "word": " REMIC", 
 "freq":378
},
{
 "word": " REMIT", 
 "freq":19
},
{
 "word": " RENAL", 
 "freq":33
},
{
 "word": " RENEE", 
 "freq":93
},
{
 "word": " RENEW", 
 "freq":617
},
{
 "word": " RENIN", 
 "freq":21
},
{
 "word": " RENSI", 
 "freq":20
},
{
 "word": " RENTA", 
 "freq":20
},
{
 "word": " RENTS", 
 "freq":464
},
{
 "word": " RENTZ", 
 "freq":13
},
{
 "word": " REPAP", 
 "freq":12
},
{
 "word": " REPAY", 
 "freq":880
},
{
 "word": " REPEL", 
 "freq":86
},
{
 "word": " REPLY", 
 "freq":583
},
{
 "word": " REPOS", 
 "freq":25
},
{
 "word": " RERUN", 
 "freq":115
},
{
 "word": " RESCH", 
 "freq":12
},
{
 "word": " RESET", 
 "freq":179
},
{
 "word": " RESIN", 
 "freq":95
},
{
 "word": " RESSA", 
 "freq":17
},
{
 "word": " RESTS", 
 "freq":264
},
{
 "word": " RETIN", 
 "freq":60
},
{
 "word": " RETRO", 
 "freq":20
},
{
 "word": " RETRY", 
 "freq":61
},
{
 "word": " REUSE", 
 "freq":56
},
{
 "word": " REUSS", 
 "freq":63
},
{
 "word": " REVCO", 
 "freq":224
},
{
 "word": " REVEL", 
 "freq":52
},
{
 "word": " REVIS", 
 "freq":17
},
{
 "word": " REVUE", 
 "freq":79
},
{
 "word": " REWEY", 
 "freq":26
},
{
 "word": " REYES", 
 "freq":191
},
{
 "word": " REYNA", 
 "freq":9
},
{
 "word": " RHEIN", 
 "freq":36
},
{
 "word": " RHETT", 
 "freq":46
},
{
 "word": " RHINE", 
 "freq":140
},
{
 "word": " RHINO", 
 "freq":86
},
{
 "word": " RHODA", 
 "freq":29
},
{
 "word": " RHODE", 
 "freq":883
},
{
 "word": " RHONE", 
 "freq":275
},
{
 "word": " RHYME", 
 "freq":60
},
{
 "word": " RIALS", 
 "freq":14
},
{
 "word": " RIBAS", 
 "freq":17
},
{
 "word": " RIBBS", 
 "freq":49
},
{
 "word": " RIBIS", 
 "freq":13
},
{
 "word": " RICAN", 
 "freq":437
},
{
 "word": " RICCI", 
 "freq":35
},
{
 "word": " RICHE", 
 "freq":17
},
{
 "word": " RICKI", 
 "freq":18
},
{
 "word": " RICKS", 
 "freq":30
},
{
 "word": " RICKY", 
 "freq":214
},
{
 "word": " RICOH", 
 "freq":45
},
{
 "word": " RIDER", 
 "freq":181
},
{
 "word": " RIDES", 
 "freq":442
},
{
 "word": " RIDGE", 
 "freq":651
},
{
 "word": " RIFAI", 
 "freq":33
},
{
 "word": " RIFFS", 
 "freq":25
},
{
 "word": " RIFLE", 
 "freq":971
},
{
 "word": " RIFTS", 
 "freq":50
},
{
 "word": " RIGBY", 
 "freq":33
},
{
 "word": " RIGEL", 
 "freq":17
},
{
 "word": " RIGGS", 
 "freq":149
},
{
 "word": " RIGHT", 
 "freq":24442
},
{
 "word": " RIGID", 
 "freq":410
},
{
 "word": " RIGOR", 
 "freq":37
},
{
 "word": " RIKER", 
 "freq":25
},
{
 "word": " RILED", 
 "freq":32
},
{
 "word": " RILES", 
 "freq":53
},
{
 "word": " RILEY", 
 "freq":389
},
{
 "word": " RINDS", 
 "freq":40
},
{
 "word": " RINEY", 
 "freq":78
},
{
 "word": " RINGO", 
 "freq":41
},
{
 "word": " RINGS", 
 "freq":529
},
{
 "word": " RINKS", 
 "freq":17
},
{
 "word": " RINSE", 
 "freq":76
},
{
 "word": " RIOJA", 
 "freq":19
},
{
 "word": " RIOTS", 
 "freq":1067
},
{
 "word": " RIPEN", 
 "freq":38
},
{
 "word": " RIPPE", 
 "freq":20
},
{
 "word": " RISEN", 
 "freq":1723
},
{
 "word": " RISER", 
 "freq":15
},
{
 "word": " RISES", 
 "freq":892
},
{
 "word": " RISKS", 
 "freq":2269
},
{
 "word": " RISKY", 
 "freq":1029
},
{
 "word": " RISON", 
 "freq":23
},
{
 "word": " RITES", 
 "freq":157
},
{
 "word": " RITZY", 
 "freq":32
},
{
 "word": " RIVAL", 
 "freq":3553
},
{
 "word": " RIVAS", 
 "freq":85
},
{
 "word": " RIVEN", 
 "freq":19
},
{
 "word": " RIVER", 
 "freq":5946
},
{
 "word": " RIVES", 
 "freq":16
},
{
 "word": " RIVET", 
 "freq":19
},
{
 "word": " RIZVI", 
 "freq":19
},
{
 "word": " RIZZO", 
 "freq":100
},
{
 "word": " ROACH", 
 "freq":192
},
{
 "word": " ROADS", 
 "freq":1878
},
{
 "word": " ROALD", 
 "freq":35
},
{
 "word": " ROAMS", 
 "freq":22
},
{
 "word": " ROARK", 
 "freq":35
},
{
 "word": " ROARS", 
 "freq":36
},
{
 "word": " ROAST", 
 "freq":223
},
{
 "word": " ROBBY", 
 "freq":63
},
{
 "word": " ROBED", 
 "freq":56
},
{
 "word": " ROBES", 
 "freq":156
},
{
 "word": " ROBIN", 
 "freq":935
},
{
 "word": " ROBOT", 
 "freq":281
},
{
 "word": " ROBYN", 
 "freq":37
},
{
 "word": " ROCAP", 
 "freq":16
},
{
 "word": " ROCCO", 
 "freq":62
},
{
 "word": " ROCHA", 
 "freq":27
},
{
 "word": " ROCHE", 
 "freq":387
},
{
 "word": " ROCKS", 
 "freq":1102
},
{
 "word": " ROCKY", 
 "freq":1175
},
{
 "word": " RODDY", 
 "freq":35
},
{
 "word": " RODEO", 
 "freq":213
},
{
 "word": " RODIN", 
 "freq":35
},
{
 "word": " ROECK", 
 "freq":14
},
{
 "word": " ROEHM", 
 "freq":16
},
{
 "word": " ROGER", 
 "freq":2026
},
{
 "word": " ROGOW", 
 "freq":15
},
{
 "word": " ROGUE", 
 "freq":120
},
{
 "word": " ROHDE", 
 "freq":17
},
{
 "word": " ROJAS", 
 "freq":60
},
{
 "word": " ROLES", 
 "freq":1216
},
{
 "word": " ROLEX", 
 "freq":44
},
{
 "word": " ROLFE", 
 "freq":12
},
{
 "word": " ROLLA", 
 "freq":12
},
{
 "word": " ROLLE", 
 "freq":18
},
{
 "word": " ROLLS", 
 "freq":912
},
{
 "word": " ROMAN", 
 "freq":2710
},
{
 "word": " ROMEO", 
 "freq":169
},
{
 "word": " ROMER", 
 "freq":156
},
{
 "word": " RONEY", 
 "freq":15
},
{
 "word": " RONIN", 
 "freq":14
},
{
 "word": " RONNI", 
 "freq":16
},
{
 "word": " ROOFS", 
 "freq":342
},
{
 "word": " ROOKS", 
 "freq":22
},
{
 "word": " ROOMS", 
 "freq":1900
},
{
 "word": " ROOMY", 
 "freq":31
},
{
 "word": " ROONE", 
 "freq":22
},
{
 "word": " ROOST", 
 "freq":47
},
{
 "word": " ROOTS", 
 "freq":1309
},
{
 "word": " ROPED", 
 "freq":32
},
{
 "word": " ROPER", 
 "freq":248
},
{
 "word": " ROPES", 
 "freq":173
},
{
 "word": " ROQUE", 
 "freq":35
},
{
 "word": " RORER", 
 "freq":180
},
{
 "word": " RORKE", 
 "freq":16
},
{
 "word": " ROSAS", 
 "freq":18
},
{
 "word": " ROSEN", 
 "freq":366
},
{
 "word": " ROSES", 
 "freq":485
},
{
 "word": " ROSIE", 
 "freq":96
},
{
 "word": " ROSSE", 
 "freq":13
},
{
 "word": " ROSSI", 
 "freq":104
},
{
 "word": " ROTHE", 
 "freq":25
},
{
 "word": " ROTOR", 
 "freq":126
},
{
 "word": " ROUEN", 
 "freq":18
},
{
 "word": " ROUGE", 
 "freq":1660
},
{
 "word": " ROUGH", 
 "freq":1021
},
{
 "word": " ROUND", 
 "freq":5734
},
{
 "word": " ROUSE", 
 "freq":125
},
{
 "word": " ROUSH", 
 "freq":21
},
{
 "word": " ROUTE", 
 "freq":2923
},
{
 "word": " ROUTH", 
 "freq":11
},
{
 "word": " ROVER", 
 "freq":181
},
{
 "word": " ROWAN", 
 "freq":201
},
{
 "word": " ROWDY", 
 "freq":103
},
{
 "word": " ROWED", 
 "freq":10
},
{
 "word": " ROWNY", 
 "freq":40
},
{
 "word": " ROYAL", 
 "freq":2737
},
{
 "word": " ROYCE", 
 "freq":377
},
{
 "word": " ROYER", 
 "freq":30
},
{
 "word": " ROYKO", 
 "freq":13
},
{
 "word": " ROZET", 
 "freq":42
},
{
 "word": " RUBEL", 
 "freq":47
},
{
 "word": " RUBEN", 
 "freq":191
},
{
 "word": " RUBIA", 
 "freq":13
},
{
 "word": " RUBIN", 
 "freq":489
},
{
 "word": " RUBIO", 
 "freq":43
},
{
 "word": " RUBLE", 
 "freq":468
},
{
 "word": " RUDDY", 
 "freq":37
},
{
 "word": " RUDER", 
 "freq":120
},
{
 "word": " RUDIN", 
 "freq":51
},
{
 "word": " RUEHE", 
 "freq":27
},
{
 "word": " RUFFO", 
 "freq":22
},
{
 "word": " RUFUS", 
 "freq":60
},
{
 "word": " RUGBY", 
 "freq":76
},
{
 "word": " RUGER", 
 "freq":39
},
{
 "word": " RUINS", 
 "freq":333
},
{
 "word": " RULED", 
 "freq":5951
},
{
 "word": " RULER", 
 "freq":443
},
{
 "word": " RULES", 
 "freq":8604
},
{
 "word": " RUMBA", 
 "freq":17
},
{
 "word": " RUMOR", 
 "freq":567
},
{
 "word": " RUNGS", 
 "freq":22
},
{
 "word": " RUNNY", 
 "freq":24
},
{
 "word": " RUNUP", 
 "freq":134
},
{
 "word": " RUPEE", 
 "freq":22
},
{
 "word": " RURAL", 
 "freq":2682
},
{
 "word": " RUSSA", 
 "freq":325
},
{
 "word": " RUSSO", 
 "freq":160
},
{
 "word": " RUSTY", 
 "freq":165
},
{
 "word": " RUTAN", 
 "freq":26
},
{
 "word": " RYDER", 
 "freq":212
},
{
 "word": " RYLES", 
 "freq":16
},
{
 "word": " RYMER", 
 "freq":22
},
{
 "word": " SAADI", 
 "freq":10
},
{
 "word": " SABAH", 
 "freq":353
},
{
 "word": " SABER", 
 "freq":64
},
{
 "word": " SABHA", 
 "freq":26
},
{
 "word": " SABIN", 
 "freq":20
},
{
 "word": " SABLE", 
 "freq":116
},
{
 "word": " SABRA", 
 "freq":20
},
{
 "word": " SABRE", 
 "freq":68
},
{
 "word": " SABRI", 
 "freq":23
},
{
 "word": " SABRY", 
 "freq":20
},
{
 "word": " SACCO", 
 "freq":20
},
{
 "word": " SACHS", 
 "freq":1820
},
{
 "word": " SACKS", 
 "freq":200
},
{
 "word": " SADAT", 
 "freq":160
},
{
 "word": " SADEK", 
 "freq":88
},
{
 "word": " SADIE", 
 "freq":22
},
{
 "word": " SADIK", 
 "freq":17
},
{
 "word": " SADIQ", 
 "freq":25
},
{
 "word": " SADLY", 
 "freq":175
},
{
 "word": " SAEED", 
 "freq":84
},
{
 "word": " SAENZ", 
 "freq":23
},
{
 "word": " SAFER", 
 "freq":652
},
{
 "word": " SAFES", 
 "freq":20
},
{
 "word": " SAFIR", 
 "freq":56
},
{
 "word": " SAFRA", 
 "freq":98
},
{
 "word": " SAGAN", 
 "freq":40
},
{
 "word": " SAGAS", 
 "freq":8
},
{
 "word": " SAGER", 
 "freq":24
},
{
 "word": " SAGES", 
 "freq":22
},
{
 "word": " SAHEL", 
 "freq":34
},
{
 "word": " SAIKI", 
 "freq":76
},
{
 "word": " SAILS", 
 "freq":92
},
{
 "word": " SAINT", 
 "freq":8665
},
{
 "word": " SAITO", 
 "freq":72
},
{
 "word": " SAJAK", 
 "freq":89
},
{
 "word": " SAKAI", 
 "freq":30
},
{
 "word": " SALAD", 
 "freq":598
},
{
 "word": " SALAH", 
 "freq":73
},
{
 "word": " SALAM", 
 "freq":26
},
{
 "word": " SALAS", 
 "freq":27
},
{
 "word": " SALEH", 
 "freq":113
},
{
 "word": " SALEM", 
 "freq":595
},
{
 "word": " SALES", 
 "freq":40082
},
{
 "word": " SALGO", 
 "freq":14
},
{
 "word": " SALII", 
 "freq":21
},
{
 "word": " SALIM", 
 "freq":198
},
{
 "word": " SALLE", 
 "freq":40
},
{
 "word": " SALLY", 
 "freq":435
},
{
 "word": " SALON", 
 "freq":186
},
{
 "word": " SALSA", 
 "freq":133
},
{
 "word": " SALTS", 
 "freq":41
},
{
 "word": " SALTY", 
 "freq":102
},
{
 "word": " SALVE", 
 "freq":23
},
{
 "word": " SALVO", 
 "freq":101
},
{
 "word": " SAMAR", 
 "freq":21
},
{
 "word": " SAMBA", 
 "freq":65
},
{
 "word": " SAMBO", 
 "freq":10
},
{
 "word": " SAMIR", 
 "freq":139
},
{
 "word": " SAMMY", 
 "freq":152
},
{
 "word": " SAMOA", 
 "freq":96
},
{
 "word": " SANDA", 
 "freq":21
},
{
 "word": " SANDI", 
 "freq":29
},
{
 "word": " SANDS", 
 "freq":212
},
{
 "word": " SANDY", 
 "freq":473
},
{
 "word": " SANTA", 
 "freq":8729
},
{
 "word": " SANTE", 
 "freq":11
},
{
 "word": " SANTO", 
 "freq":152
},
{
 "word": " SANWA", 
 "freq":122
},
{
 "word": " SANYO", 
 "freq":88
},
{
 "word": " SAPOA", 
 "freq":90
},
{
 "word": " SAPPY", 
 "freq":15
},
{
 "word": " SARAH", 
 "freq":553
},
{
 "word": " SARID", 
 "freq":27
},
{
 "word": " SARIN", 
 "freq":21
},
{
 "word": " SARNI", 
 "freq":18
},
{
 "word": " SASHA", 
 "freq":21
},
{
 "word": " SASSA", 
 "freq":14
},
{
 "word": " SASSO", 
 "freq":94
},
{
 "word": " SASSY", 
 "freq":59
},
{
 "word": " SATAN", 
 "freq":128
},
{
 "word": " SATED", 
 "freq":18
},
{
 "word": " SATIN", 
 "freq":110
},
{
 "word": " SAUCE", 
 "freq":834
},
{
 "word": " SAUCY", 
 "freq":16
},
{
 "word": " SAUDI", 
 "freq":6458
},
{
 "word": " SAUER", 
 "freq":32
},
{
 "word": " SAULT", 
 "freq":81
},
{
 "word": " SAUNA", 
 "freq":51
},
{
 "word": " SAUTE", 
 "freq":113
},
{
 "word": " SAVED", 
 "freq":1421
},
{
 "word": " SAVER", 
 "freq":76
},
{
 "word": " SAVES", 
 "freq":311
},
{
 "word": " SAVIN", 
 "freq":24
},
{
 "word": " SAVOR", 
 "freq":68
},
{
 "word": " SAVOY", 
 "freq":89
},
{
 "word": " SAVVY", 
 "freq":356
},
{
 "word": " SAWED", 
 "freq":80
},
{
 "word": " SAXON", 
 "freq":59
},
{
 "word": " SAYED", 
 "freq":46
},
{
 "word": " SAYRE", 
 "freq":15
},
{
 "word": " SCABS", 
 "freq":13
},
{
 "word": " SCALA", 
 "freq":57
},
{
 "word": " SCALE", 
 "freq":3661
},
{
 "word": " SCALI", 
 "freq":93
},
{
 "word": " SCALP", 
 "freq":92
},
{
 "word": " SCAMS", 
 "freq":97
},
{
 "word": " SCANS", 
 "freq":80
},
{
 "word": " SCANT", 
 "freq":319
},
{
 "word": " SCARE", 
 "freq":580
},
{
 "word": " SCARF", 
 "freq":94
},
{
 "word": " SCARS", 
 "freq":184
},
{
 "word": " SCARY", 
 "freq":395
},
{
 "word": " SCENE", 
 "freq":3614
},
{
 "word": " SCENT", 
 "freq":136
},
{
 "word": " SCHER", 
 "freq":13
},
{
 "word": " SCHON", 
 "freq":16
},
{
 "word": " SCHOR", 
 "freq":11
},
{
 "word": " SCION", 
 "freq":44
},
{
 "word": " SCIOS", 
 "freq":11
},
{
 "word": " SCOFF", 
 "freq":51
},
{
 "word": " SCOOP", 
 "freq":136
},
{
 "word": " SCOPE", 
 "freq":727
},
{
 "word": " SCORE", 
 "freq":1565
},
{
 "word": " SCORN", 
 "freq":108
},
{
 "word": " SCOTS", 
 "freq":46
},
{
 "word": " SCOTT", 
 "freq":2861
},
{
 "word": " SCOUR", 
 "freq":43
},
{
 "word": " SCOUT", 
 "freq":422
},
{
 "word": " SCOWL", 
 "freq":10
},
{
 "word": " SCRAP", 
 "freq":607
},
{
 "word": " SCREW", 
 "freq":148
},
{
 "word": " SCRIP", 
 "freq":16
},
{
 "word": " SCRUB", 
 "freq":110
},
{
 "word": " SCUBA", 
 "freq":105
},
{
 "word": " SCUDS", 
 "freq":111
},
{
 "word": " SCVAL", 
 "freq":14
},
{
 "word": " SEAGA", 
 "freq":60
},
{
 "word": " SEALE", 
 "freq":85
},
{
 "word": " SEALS", 
 "freq":330
},
{
 "word": " SEALY", 
 "freq":44
},
{
 "word": " SEAMS", 
 "freq":66
},
{
 "word": " SEAMY", 
 "freq":21
},
{
 "word": " SEARS", 
 "freq":2083
},
{
 "word": " SEATS", 
 "freq":4456
},
{
 "word": " SECOM", 
 "freq":16
},
{
 "word": " SECOR", 
 "freq":12
},
{
 "word": " SECTS", 
 "freq":34
},
{
 "word": " SEDAN", 
 "freq":408
},
{
 "word": " SEDER", 
 "freq":32
},
{
 "word": " SEEDS", 
 "freq":638
},
{
 "word": " SEEDY", 
 "freq":72
},
{
 "word": " SEEKS", 
 "freq":1846
},
{
 "word": " SEEMS", 
 "freq":6732
},
{
 "word": " SEEPS", 
 "freq":26
},
{
 "word": " SEERS", 
 "freq":20
},
{
 "word": " SEGAL", 
 "freq":119
},
{
 "word": " SEGER", 
 "freq":49
},
{
 "word": " SEIBU", 
 "freq":34
},
{
 "word": " SEIFE", 
 "freq":11
},
{
 "word": " SEIGE", 
 "freq":18
},
{
 "word": " SEIJI", 
 "freq":21
},
{
 "word": " SEIKO", 
 "freq":89
},
{
 "word": " SEINE", 
 "freq":55
},
{
 "word": " SEITZ", 
 "freq":45
},
{
 "word": " SEIZE", 
 "freq":704
},
{
 "word": " SELBY", 
 "freq":35
},
{
 "word": " SELES", 
 "freq":140
},
{
 "word": " SELIG", 
 "freq":25
},
{
 "word": " SELLA", 
 "freq":13
},
{
 "word": " SELLS", 
 "freq":2294
},
{
 "word": " SELMA", 
 "freq":121
},
{
 "word": " SEMEL", 
 "freq":38
},
{
 "word": " SEMEN", 
 "freq":107
},
{
 "word": " SENDS", 
 "freq":725
},
{
 "word": " SENNA", 
 "freq":19
},
{
 "word": " SENSE", 
 "freq":5774
},
{
 "word": " SEOUL", 
 "freq":1623
},
{
 "word": " SEPIA", 
 "freq":13
},
{
 "word": " SEPTA", 
 "freq":20
},
{
 "word": " SEQUA", 
 "freq":35
},
{
 "word": " SERAW", 
 "freq":26
},
{
 "word": " SERBS", 
 "freq":772
},
{
 "word": " SERGE", 
 "freq":77
},
{
 "word": " SERNA", 
 "freq":7
},
{
 "word": " SERRA", 
 "freq":138
},
{
 "word": " SERUM", 
 "freq":72
},
{
 "word": " SERVE", 
 "freq":4945
},
{
 "word": " SESSA", 
 "freq":14
},
{
 "word": " SETON", 
 "freq":87
},
{
 "word": " SETUP", 
 "freq":136
},
{
 "word": " SEUNG", 
 "freq":11
},
{
 "word": " SEUSS", 
 "freq":47
},
{
 "word": " SEVEN", 
 "freq":178842
},
{
 "word": " SEVER", 
 "freq":134
},
{
 "word": " SEVIN", 
 "freq":12
},
{
 "word": " SEWED", 
 "freq":24
},
{
 "word": " SEWER", 
 "freq":445
},
{
 "word": " SEXES", 
 "freq":132
},
{
 "word": " SFEIR", 
 "freq":35
},
{
 "word": " SHACK", 
 "freq":182
},
{
 "word": " SHADE", 
 "freq":323
},
{
 "word": " SHADY", 
 "freq":116
},
{
 "word": " SHAFI", 
 "freq":11
},
{
 "word": " SHAFT", 
 "freq":197
},
{
 "word": " SHAKE", 
 "freq":915
},
{
 "word": " SHAKY", 
 "freq":370
},
{
 "word": " SHALE", 
 "freq":66
},
{
 "word": " SHALL", 
 "freq":878
},
{
 "word": " SHALT", 
 "freq":43
},
{
 "word": " SHAME", 
 "freq":545
},
{
 "word": " SHAMS", 
 "freq":21
},
{
 "word": " SHAMU", 
 "freq":19
},
{
 "word": " SHANA", 
 "freq":11
},
{
 "word": " SHAND", 
 "freq":17
},
{
 "word": " SHANE", 
 "freq":145
},
{
 "word": " SHANK", 
 "freq":51
},
{
 "word": " SHAPE", 
 "freq":1998
},
{
 "word": " SHARE", 
 "freq":43286
},
{
 "word": " SHARI", 
 "freq":31
},
{
 "word": " SHARK", 
 "freq":303
},
{
 "word": " SHARP", 
 "freq":4257
},
{
 "word": " SHARQ", 
 "freq":31
},
{
 "word": " SHATI", 
 "freq":43
},
{
 "word": " SHATT", 
 "freq":141
},
{
 "word": " SHAUL", 
 "freq":13
},
{
 "word": " SHAUN", 
 "freq":52
},
{
 "word": " SHAVE", 
 "freq":169
},
{
 "word": " SHAWL", 
 "freq":35
},
{
 "word": " SHAWN", 
 "freq":120
},
{
 "word": " SHAYE", 
 "freq":18
},
{
 "word": " SHAYS", 
 "freq":45
},
{
 "word": " SHEAF", 
 "freq":16
},
{
 "word": " SHEAR", 
 "freq":79
},
{
 "word": " SHEBA", 
 "freq":19
},
{
 "word": " SHEDD", 
 "freq":20
},
{
 "word": " SHEDS", 
 "freq":91
},
{
 "word": " SHEEN", 
 "freq":186
},
{
 "word": " SHEEP", 
 "freq":511
},
{
 "word": " SHEER", 
 "freq":435
},
{
 "word": " SHEET", 
 "freq":1387
},
{
 "word": " SHEIK", 
 "freq":735
},
{
 "word": " SHELF", 
 "freq":696
},
{
 "word": " SHELL", 
 "freq":1488
},
{
 "word": " SHENG", 
 "freq":27
},
{
 "word": " SHERI", 
 "freq":38
},
{
 "word": " SHIED", 
 "freq":115
},
{
 "word": " SHIES", 
 "freq":15
},
{
 "word": " SHIFA", 
 "freq":35
},
{
 "word": " SHIFT", 
 "freq":2792
},
{
 "word": " SHIMA", 
 "freq":34
},
{
 "word": " SHINE", 
 "freq":242
},
{
 "word": " SHING", 
 "freq":36
},
{
 "word": " SHINN", 
 "freq":29
},
{
 "word": " SHINY", 
 "freq":172
},
{
 "word": " SHIPP", 
 "freq":38
},
{
 "word": " SHIPS", 
 "freq":2571
},
{
 "word": " SHIRE", 
 "freq":23
},
{
 "word": " SHIRK", 
 "freq":14
},
{
 "word": " SHIRT", 
 "freq":1111
},
{
 "word": " SHOAL", 
 "freq":46
},
{
 "word": " SHOCK", 
 "freq":1559
},
{
 "word": " SHOEN", 
 "freq":46
},
{
 "word": " SHOES", 
 "freq":1430
},
{
 "word": " SHOJI", 
 "freq":16
},
{
 "word": " SHONE", 
 "freq":52
},
{
 "word": " SHOOB", 
 "freq":34
},
{
 "word": " SHOOK", 
 "freq":779
},
{
 "word": " SHOOT", 
 "freq":1442
},
{
 "word": " SHOPS", 
 "freq":1599
},
{
 "word": " SHORE", 
 "freq":1260
},
{
 "word": " SHORN", 
 "freq":26
},
{
 "word": " SHORT", 
 "freq":14950
},
{
 "word": " SHOTS", 
 "freq":1958
},
{
 "word": " SHOUT", 
 "freq":181
},
{
 "word": " SHOVE", 
 "freq":106
},
{
 "word": " SHOWA", 
 "freq":56
},
{
 "word": " SHOWN", 
 "freq":3418
},
{
 "word": " SHOWS", 
 "freq":7462
},
{
 "word": " SHOWY", 
 "freq":51
},
{
 "word": " SHRED", 
 "freq":73
},
{
 "word": " SHREW", 
 "freq":19
},
{
 "word": " SHRUB", 
 "freq":36
},
{
 "word": " SHRUG", 
 "freq":138
},
{
 "word": " SHRUM", 
 "freq":13
},
{
 "word": " SHULA", 
 "freq":25
},
{
 "word": " SHUNS", 
 "freq":53
},
{
 "word": " SHURA", 
 "freq":25
},
{
 "word": " SHUTS", 
 "freq":74
},
{
 "word": " SHUWA", 
 "freq":36
},
{
 "word": " SHYLY", 
 "freq":23
},
{
 "word": " SIANO", 
 "freq":8
},
{
 "word": " SIBIU", 
 "freq":24
},
{
 "word": " SIDED", 
 "freq":482
},
{
 "word": " SIDER", 
 "freq":24
},
{
 "word": " SIDES", 
 "freq":5178
},
{
 "word": " SIDON", 
 "freq":259
},
{
 "word": " SIEBE", 
 "freq":20
},
{
 "word": " SIECK", 
 "freq":55
},
{
 "word": " SIEGE", 
 "freq":610
},
{
 "word": " SIENA", 
 "freq":22
},
{
 "word": " SIEVE", 
 "freq":25
},
{
 "word": " SIGHS", 
 "freq":93
},
{
 "word": " SIGHT", 
 "freq":1186
},
{
 "word": " SIGLO", 
 "freq":10
},
{
 "word": " SIGMA", 
 "freq":73
},
{
 "word": " SIGNS", 
 "freq":4967
},
{
 "word": " SIGUR", 
 "freq":21
},
{
 "word": " SIKES", 
 "freq":138
},
{
 "word": " SIKHS", 
 "freq":327
},
{
 "word": " SILAS", 
 "freq":39
},
{
 "word": " SILER", 
 "freq":21
},
{
 "word": " SILEX", 
 "freq":14
},
{
 "word": " SILKS", 
 "freq":30
},
{
 "word": " SILKY", 
 "freq":35
},
{
 "word": " SILLS", 
 "freq":63
},
{
 "word": " SILLY", 
 "freq":429
},
{
 "word": " SILOS", 
 "freq":85
},
{
 "word": " SILVA", 
 "freq":400
},
{
 "word": " SIMES", 
 "freq":27
},
{
 "word": " SIMEX", 
 "freq":11
},
{
 "word": " SIMMS", 
 "freq":86
},
{
 "word": " SIMON", 
 "freq":2152
},
{
 "word": " SINAI", 
 "freq":456
},
{
 "word": " SINCE", 
 "freq":51385
},
{
 "word": " SINDH", 
 "freq":45
},
{
 "word": " SINGH", 
 "freq":766
},
{
 "word": " SINGS", 
 "freq":278
},
{
 "word": " SINKS", 
 "freq":116
},
{
 "word": " SINUS", 
 "freq":31
},
{
 "word": " SIOUX", 
 "freq":390
},
{
 "word": " SIREN", 
 "freq":103
},
{
 "word": " SIRRI", 
 "freq":17
},
{
 "word": " SISON", 
 "freq":16
},
{
 "word": " SISSY", 
 "freq":32
},
{
 "word": " SITES", 
 "freq":2349
},
{
 "word": " SITHE", 
 "freq":17
},
{
 "word": " SITKA", 
 "freq":20
},
{
 "word": " SIWEK", 
 "freq":17
},
{
 "word": " SIXES", 
 "freq":46
},
{
 "word": " SIXTH", 
 "freq":6927
},
{
 "word": " SIXTY", 
 "freq":73086
},
{
 "word": " SIZED", 
 "freq":1198
},
{
 "word": " SIZES", 
 "freq":412
},
{
 "word": " SKASE", 
 "freq":19
},
{
 "word": " SKATE", 
 "freq":110
},
{
 "word": " SKEEN", 
 "freq":21
},
{
 "word": " SKEET", 
 "freq":11
},
{
 "word": " SKIDS", 
 "freq":31
},
{
 "word": " SKIED", 
 "freq":22
},
{
 "word": " SKIER", 
 "freq":105
},
{
 "word": " SKIES", 
 "freq":766
},
{
 "word": " SKIFF", 
 "freq":14
},
{
 "word": " SKILL", 
 "freq":514
},
{
 "word": " SKIMP", 
 "freq":21
},
{
 "word": " SKINS", 
 "freq":154
},
{
 "word": " SKIPS", 
 "freq":25
},
{
 "word": " SKIRT", 
 "freq":248
},
{
 "word": " SKITS", 
 "freq":28
},
{
 "word": " SKLAR", 
 "freq":24
},
{
 "word": " SKODA", 
 "freq":71
},
{
 "word": " SKULL", 
 "freq":362
},
{
 "word": " SKUNK", 
 "freq":90
},
{
 "word": " SLABS", 
 "freq":94
},
{
 "word": " SLACK", 
 "freq":374
},
{
 "word": " SLADE", 
 "freq":65
},
{
 "word": " SLAIN", 
 "freq":1074
},
{
 "word": " SLAMS", 
 "freq":39
},
{
 "word": " SLANG", 
 "freq":77
},
{
 "word": " SLANT", 
 "freq":60
},
{
 "word": " SLAPS", 
 "freq":36
},
{
 "word": " SLASH", 
 "freq":779
},
{
 "word": " SLATE", 
 "freq":560
},
{
 "word": " SLATS", 
 "freq":40
},
{
 "word": " SLAVA", 
 "freq":23
},
{
 "word": " SLAVE", 
 "freq":276
},
{
 "word": " SLAVS", 
 "freq":57
},
{
 "word": " SLEDS", 
 "freq":34
},
{
 "word": " SLEEK", 
 "freq":168
},
{
 "word": " SLEEP", 
 "freq":1307
},
{
 "word": " SLEET", 
 "freq":93
},
{
 "word": " SLEPT", 
 "freq":366
},
{
 "word": " SLICE", 
 "freq":453
},
{
 "word": " SLICK", 
 "freq":506
},
{
 "word": " SLIDE", 
 "freq":1421
},
{
 "word": " SLIME", 
 "freq":51
},
{
 "word": " SLIMS", 
 "freq":34
},
{
 "word": " SLIMY", 
 "freq":50
},
{
 "word": " SLING", 
 "freq":45
},
{
 "word": " SLIPS", 
 "freq":213
},
{
 "word": " SLITS", 
 "freq":28
},
{
 "word": " SLIWA", 
 "freq":36
},
{
 "word": " SLOAN", 
 "freq":224
},
{
 "word": " SLOOP", 
 "freq":25
},
{
 "word": " SLOPE", 
 "freq":316
},
{
 "word": " SLORC", 
 "freq":24
},
{
 "word": " SLOTH", 
 "freq":21
},
{
 "word": " SLOTS", 
 "freq":388
},
{
 "word": " SLOVO", 
 "freq":55
},
{
 "word": " SLOWS", 
 "freq":177
},
{
 "word": " SLUGS", 
 "freq":57
},
{
 "word": " SLUMP", 
 "freq":1587
},
{
 "word": " SLUMS", 
 "freq":256
},
{
 "word": " SLUNG", 
 "freq":48
},
{
 "word": " SLURS", 
 "freq":132
},
{
 "word": " SLUSH", 
 "freq":65
},
{
 "word": " SLYKE", 
 "freq":26
},
{
 "word": " SMABY", 
 "freq":19
},
{
 "word": " SMACK", 
 "freq":71
},
{
 "word": " SMALE", 
 "freq":46
},
{
 "word": " SMALL", 
 "freq":22042
},
{
 "word": " SMART", 
 "freq":1085
},
{
 "word": " SMASH", 
 "freq":192
},
{
 "word": " SMEAL", 
 "freq":41
},
{
 "word": " SMEAR", 
 "freq":143
},
{
 "word": " SMELL", 
 "freq":588
},
{
 "word": " SMELT", 
 "freq":54
},
{
 "word": " SMICK", 
 "freq":21
},
{
 "word": " SMILE", 
 "freq":741
},
{
 "word": " SMIRK", 
 "freq":30
},
{
 "word": " SMITH", 
 "freq":7428
},
{
 "word": " SMITS", 
 "freq":44
},
{
 "word": " SMOCK", 
 "freq":23
},
{
 "word": " SMOKE", 
 "freq":2688
},
{
 "word": " SMOKY", 
 "freq":151
},
{
 "word": " SMOOT", 
 "freq":50
},
{
 "word": " SMUTS", 
 "freq":11
},
{
 "word": " SMYTH", 
 "freq":30
},
{
 "word": " SNACK", 
 "freq":417
},
{
 "word": " SNAFU", 
 "freq":27
},
{
 "word": " SNAGS", 
 "freq":93
},
{
 "word": " SNAIL", 
 "freq":60
},
{
 "word": " SNAKE", 
 "freq":318
},
{
 "word": " SNAPS", 
 "freq":82
},
{
 "word": " SNARE", 
 "freq":94
},
{
 "word": " SNARL", 
 "freq":43
},
{
 "word": " SNEAD", 
 "freq":23
},
{
 "word": " SNEAK", 
 "freq":198
},
{
 "word": " SNEED", 
 "freq":13
},
{
 "word": " SNEER", 
 "freq":34
},
{
 "word": " SNELL", 
 "freq":81
},
{
 "word": " SNIDE", 
 "freq":20
},
{
 "word": " SNIFF", 
 "freq":61
},
{
 "word": " SNIPE", 
 "freq":19
},
{
 "word": " SNOBS", 
 "freq":15
},
{
 "word": " SNORT", 
 "freq":17
},
{
 "word": " SNOUT", 
 "freq":31
},
{
 "word": " SNOWE", 
 "freq":45
},
{
 "word": " SNOWS", 
 "freq":48
},
{
 "word": " SNOWY", 
 "freq":120
},
{
 "word": " SNUCK", 
 "freq":18
},
{
 "word": " SNUFF", 
 "freq":112
},
{
 "word": " SOAKS", 
 "freq":11
},
{
 "word": " SOAPS", 
 "freq":98
},
{
 "word": " SOAPY", 
 "freq":21
},
{
 "word": " SOARS", 
 "freq":40
},
{
 "word": " SOBEL", 
 "freq":27
},
{
 "word": " SOBER", 
 "freq":226
},
{
 "word": " SOBOL", 
 "freq":25
},
{
 "word": " SOCIO", 
 "freq":72
},
{
 "word": " SOCKS", 
 "freq":247
},
{
 "word": " SODAS", 
 "freq":42
},
{
 "word": " SODOM", 
 "freq":12
},
{
 "word": " SOFAS", 
 "freq":38
},
{
 "word": " SOFIA", 
 "freq":204
},
{
 "word": " SOGGY", 
 "freq":91
},
{
 "word": " SOILS", 
 "freq":89
},
{
 "word": " SOKOL", 
 "freq":40
},
{
 "word": " SOLAR", 
 "freq":662
},
{
 "word": " SOLES", 
 "freq":67
},
{
 "word": " SOLID", 
 "freq":2159
},
{
 "word": " SOLIS", 
 "freq":159
},
{
 "word": " SOLON", 
 "freq":19
},
{
 "word": " SOLOS", 
 "freq":65
},
{
 "word": " SOLOW", 
 "freq":22
},
{
 "word": " SOLTI", 
 "freq":24
},
{
 "word": " SOLVE", 
 "freq":1684
},
{
 "word": " SONAR", 
 "freq":80
},
{
 "word": " SONAT", 
 "freq":41
},
{
 "word": " SONGS", 
 "freq":2003
},
{
 "word": " SONIA", 
 "freq":72
},
{
 "word": " SONIC", 
 "freq":90
},
{
 "word": " SONJA", 
 "freq":44
},
{
 "word": " SONNY", 
 "freq":205
},
{
 "word": " SONYA", 
 "freq":27
},
{
 "word": " SOOTY", 
 "freq":17
},
{
 "word": " SOPER", 
 "freq":15
},
{
 "word": " SORCI", 
 "freq":28
},
{
 "word": " SORES", 
 "freq":56
},
{
 "word": " SORIA", 
 "freq":27
},
{
 "word": " SOROS", 
 "freq":141
},
{
 "word": " SORRY", 
 "freq":1025
},
{
 "word": " SORTS", 
 "freq":652
},
{
 "word": " SOSIN", 
 "freq":26
},
{
 "word": " SOUCY", 
 "freq":14
},
{
 "word": " SOULE", 
 "freq":8
},
{
 "word": " SOULS", 
 "freq":241
},
{
 "word": " SOUND", 
 "freq":4782
},
{
 "word": " SOUPS", 
 "freq":131
},
{
 "word": " SOURS", 
 "freq":15
},
{
 "word": " SOUSA", 
 "freq":42
},
{
 "word": " SOUTH", 
 "freq":26377
},
{
 "word": " SOUZA", 
 "freq":100
},
{
 "word": " SOWED", 
 "freq":22
},
{
 "word": " SOYUZ", 
 "freq":109
},
{
 "word": " SPACE", 
 "freq":9880
},
{
 "word": " SPADE", 
 "freq":36
},
{
 "word": " SPAGO", 
 "freq":13
},
{
 "word": " SPAIN", 
 "freq":2186
},
{
 "word": " SPANN", 
 "freq":24
},
{
 "word": " SPANO", 
 "freq":12
},
{
 "word": " SPANS", 
 "freq":104
},
{
 "word": " SPARC", 
 "freq":49
},
{
 "word": " SPARE", 
 "freq":892
},
{
 "word": " SPARK", 
 "freq":626
},
{
 "word": " SPASM", 
 "freq":27
},
{
 "word": " SPASO", 
 "freq":18
},
{
 "word": " SPATE", 
 "freq":317
},
{
 "word": " SPATH", 
 "freq":26
},
{
 "word": " SPATS", 
 "freq":24
},
{
 "word": " SPAWN", 
 "freq":105
},
{
 "word": " SPEAK", 
 "freq":3137
},
{
 "word": " SPEAR", 
 "freq":177
},
{
 "word": " SPECK", 
 "freq":60
},
{
 "word": " SPECS", 
 "freq":19
},
{
 "word": " SPEED", 
 "freq":3621
},
{
 "word": " SPEER", 
 "freq":69
},
{
 "word": " SPELL", 
 "freq":705
},
{
 "word": " SPEND", 
 "freq":5625
},
{
 "word": " SPENO", 
 "freq":13
},
{
 "word": " SPENT", 
 "freq":8890
},
{
 "word": " SPERM", 
 "freq":225
},
{
 "word": " SPERO", 
 "freq":24
},
{
 "word": " SPEWS", 
 "freq":16
},
{
 "word": " SPICE", 
 "freq":185
},
{
 "word": " SPICY", 
 "freq":180
},
{
 "word": " SPIED", 
 "freq":83
},
{
 "word": " SPIEL", 
 "freq":24
},
{
 "word": " SPIES", 
 "freq":347
},
{
 "word": " SPIKE", 
 "freq":285
},
{
 "word": " SPIKY", 
 "freq":12
},
{
 "word": " SPILL", 
 "freq":2197
},
{
 "word": " SPINA", 
 "freq":62
},
{
 "word": " SPINE", 
 "freq":144
},
{
 "word": " SPINS", 
 "freq":58
},
{
 "word": " SPIRA", 
 "freq":37
},
{
 "word": " SPIRE", 
 "freq":25
},
{
 "word": " SPIRO", 
 "freq":45
},
{
 "word": " SPITE", 
 "freq":454
},
{
 "word": " SPITS", 
 "freq":26
},
{
 "word": " SPITZ", 
 "freq":58
},
{
 "word": " SPLIT", 
 "freq":3436
},
{
 "word": " SPOCK", 
 "freq":45
},
{
 "word": " SPOIL", 
 "freq":112
},
{
 "word": " SPOKE", 
 "freq":5608
},
{
 "word": " SPONG", 
 "freq":32
},
{
 "word": " SPOOF", 
 "freq":88
},
{
 "word": " SPOOK", 
 "freq":46
},
{
 "word": " SPOON", 
 "freq":184
},
{
 "word": " SPOOR", 
 "freq":21
},
{
 "word": " SPORT", 
 "freq":1332
},
{
 "word": " SPOTS", 
 "freq":1406
},
{
 "word": " SPOUT", 
 "freq":26
},
{
 "word": " SPRAY", 
 "freq":549
},
{
 "word": " SPREE", 
 "freq":474
},
{
 "word": " SPRIG", 
 "freq":15
},
{
 "word": " SPUDS", 
 "freq":29
},
{
 "word": " SPUNK", 
 "freq":24
},
{
 "word": " SPURN", 
 "freq":31
},
{
 "word": " SPURS", 
 "freq":189
},
{
 "word": " SPURT", 
 "freq":204
},
{
 "word": " SQUAD", 
 "freq":876
},
{
 "word": " SQUAT", 
 "freq":47
},
{
 "word": " SQUAW", 
 "freq":34
},
{
 "word": " SQUID", 
 "freq":75
},
{
 "word": " STABS", 
 "freq":22
},
{
 "word": " STACI", 
 "freq":16
},
{
 "word": " STACK", 
 "freq":312
},
{
 "word": " STACY", 
 "freq":99
},
{
 "word": " STADE", 
 "freq":19
},
{
 "word": " STADT", 
 "freq":29
},
{
 "word": " STAFF", 
 "freq":10450
},
{
 "word": " STAGE", 
 "freq":5277
},
{
 "word": " STAHL", 
 "freq":152
},
{
 "word": " STAID", 
 "freq":86
},
{
 "word": " STAIN", 
 "freq":104
},
{
 "word": " STAIR", 
 "freq":34
},
{
 "word": " STAKE", 
 "freq":6807
},
{
 "word": " STALE", 
 "freq":69
},
{
 "word": " STALK", 
 "freq":57
},
{
 "word": " STALL", 
 "freq":271
},
{
 "word": " STAMP", 
 "freq":777
},
{
 "word": " STAND", 
 "freq":6076
},
{
 "word": " STARE", 
 "freq":135
},
{
 "word": " STARK", 
 "freq":632
},
{
 "word": " STARR", 
 "freq":328
},
{
 "word": " STARS", 
 "freq":2596
},
{
 "word": " START", 
 "freq":12356
},
{
 "word": " STASH", 
 "freq":54
},
{
 "word": " STASI", 
 "freq":140
},
{
 "word": " STATE", 
 "freq":69604
},
{
 "word": " STATS", 
 "freq":49
},
{
 "word": " STAVE", 
 "freq":164
},
{
 "word": " STAYS", 
 "freq":595
},
{
 "word": " STEAD", 
 "freq":55
},
{
 "word": " STEAK", 
 "freq":283
},
{
 "word": " STEAL", 
 "freq":653
},
{
 "word": " STEAM", 
 "freq":962
},
{
 "word": " STECK", 
 "freq":16
},
{
 "word": " STEED", 
 "freq":40
},
{
 "word": " STEEL", 
 "freq":6315
},
{
 "word": " STEEN", 
 "freq":221
},
{
 "word": " STEEP", 
 "freq":1221
},
{
 "word": " STEER", 
 "freq":425
},
{
 "word": " STEIN", 
 "freq":395
},
{
 "word": " STEMS", 
 "freq":735
},
{
 "word": " STENA", 
 "freq":21
},
{
 "word": " STENY", 
 "freq":38
},
{
 "word": " STEPP", 
 "freq":68
},
{
 "word": " STEPS", 
 "freq":4310
},
{
 "word": " STERN", 
 "freq":817
},
{
 "word": " STEVE", 
 "freq":2841
},
{
 "word": " STEWS", 
 "freq":24
},
{
 "word": " STEYR", 
 "freq":14
},
{
 "word": " STICH", 
 "freq":49
},
{
 "word": " STICK", 
 "freq":1491
},
{
 "word": " STIEB", 
 "freq":22
},
{
 "word": " STIER", 
 "freq":18
},
{
 "word": " STIFF", 
 "freq":739
},
{
 "word": " STILL", 
 "freq":38324
},
{
 "word": " STINE", 
 "freq":18
},
{
 "word": " STING", 
 "freq":507
},
{
 "word": " STINK", 
 "freq":69
},
{
 "word": " STINT", 
 "freq":348
},
{
 "word": " STIPE", 
 "freq":58
},
{
 "word": " STIRS", 
 "freq":51
},
{
 "word": " STITH", 
 "freq":13
},
{
 "word": " STITT", 
 "freq":12
},
{
 "word": " STOCK", 
 "freq":54645
},
{
 "word": " STOIC", 
 "freq":48
},
{
 "word": " STOKE", 
 "freq":32
},
{
 "word": " STOLE", 
 "freq":663
},
{
 "word": " STOLL", 
 "freq":23
},
{
 "word": " STOLT", 
 "freq":11
},
{
 "word": " STOMP", 
 "freq":35
},
{
 "word": " STONE", 
 "freq":2608
},
{
 "word": " STONY", 
 "freq":43
},
{
 "word": " STOOD", 
 "freq":3174
},
{
 "word": " STOOL", 
 "freq":74
},
{
 "word": " STOOP", 
 "freq":40
},
{
 "word": " STOPH", 
 "freq":17
},
{
 "word": " STOPS", 
 "freq":1000
},
{
 "word": " STORA", 
 "freq":37
},
{
 "word": " STORE", 
 "freq":8305
},
{
 "word": " STORK", 
 "freq":27
},
{
 "word": " STORM", 
 "freq":3326
},
{
 "word": " STORY", 
 "freq":8936
},
{
 "word": " STOTT", 
 "freq":18
},
{
 "word": " STOUT", 
 "freq":107
},
{
 "word": " STOVE", 
 "freq":193
},
{
 "word": " STOWE", 
 "freq":61
},
{
 "word": " STRAM", 
 "freq":13
},
{
 "word": " STRAP", 
 "freq":100
},
{
 "word": " STRAT", 
 "freq":11
},
{
 "word": " STRAW", 
 "freq":344
},
{
 "word": " STRAY", 
 "freq":218
},
{
 "word": " STREP", 
 "freq":44
},
{
 "word": " STRIP", 
 "freq":2783
},
{
 "word": " STROH", 
 "freq":112
},
{
 "word": " STROM", 
 "freq":153
},
{
 "word": " STRUB", 
 "freq":16
},
{
 "word": " STRUM", 
 "freq":15
},
{
 "word": " STRUT", 
 "freq":43
},
{
 "word": " STUBS", 
 "freq":28
},
{
 "word": " STUCK", 
 "freq":1314
},
{
 "word": " STUDS", 
 "freq":50
},
{
 "word": " STUDY", 
 "freq":13347
},
{
 "word": " STUFF", 
 "freq":1999
},
{
 "word": " STULL", 
 "freq":14
},
{
 "word": " STUMP", 
 "freq":200
},
{
 "word": " STUNG", 
 "freq":210
},
{
 "word": " STUNT", 
 "freq":244
},
{
 "word": " STURM", 
 "freq":41
},
{
 "word": " STYLE", 
 "freq":4594
},
{
 "word": " SUAVE", 
 "freq":33
},
{
 "word": " SUAZO", 
 "freq":32
},
{
 "word": " SUBHI", 
 "freq":8
},
{
 "word": " SUBIC", 
 "freq":268
},
{
 "word": " SUCKS", 
 "freq":31
},
{
 "word": " SUCRE", 
 "freq":14
},
{
 "word": " SUDAN", 
 "freq":669
},
{
 "word": " SUDOL", 
 "freq":21
},
{
 "word": " SUEDE", 
 "freq":56
},
{
 "word": " SUGAR", 
 "freq":2383
},
{
 "word": " SUGGS", 
 "freq":15
},
{
 "word": " SUING", 
 "freq":572
},
{
 "word": " SUITE", 
 "freq":568
},
{
 "word": " SUITS", 
 "freq":2394
},
{
 "word": " SULFA", 
 "freq":13
},
{
 "word": " SULLY", 
 "freq":23
},
{
 "word": " SULYA", 
 "freq":24
},
{
 "word": " SUMMA", 
 "freq":42
},
{
 "word": " SUNIA", 
 "freq":18
},
{
 "word": " SUNNI", 
 "freq":265
},
{
 "word": " SUNNY", 
 "freq":533
},
{
 "word": " SUNOL", 
 "freq":26
},
{
 "word": " SUPER", 
 "freq":2760
},
{
 "word": " SURER", 
 "freq":16
},
{
 "word": " SURGE", 
 "freq":1897
},
{
 "word": " SURLY", 
 "freq":28
},
{
 "word": " SUSAN", 
 "freq":1544
},
{
 "word": " SUSHI", 
 "freq":96
},
{
 "word": " SUSIE", 
 "freq":76
},
{
 "word": " SUTER", 
 "freq":23
},
{
 "word": " SUTRO", 
 "freq":50
},
{
 "word": " SUVAR", 
 "freq":53
},
{
 "word": " SUVIT", 
 "freq":21
},
{
 "word": " SUWON", 
 "freq":21
},
{
 "word": " SUZIE", 
 "freq":24
},
{
 "word": " SWAIN", 
 "freq":71
},
{
 "word": " SWAMI", 
 "freq":27
},
{
 "word": " SWAMP", 
 "freq":198
},
{
 "word": " SWANK", 
 "freq":52
},
{
 "word": " SWANN", 
 "freq":45
},
{
 "word": " SWANS", 
 "freq":28
},
{
 "word": " SWAPO", 
 "freq":326
},
{
 "word": " SWAPP", 
 "freq":92
},
{
 "word": " SWAPS", 
 "freq":266
},
{
 "word": " SWARM", 
 "freq":93
},
{
 "word": " SWATH", 
 "freq":102
},
{
 "word": " SWEAR", 
 "freq":148
},
{
 "word": " SWEAT", 
 "freq":382
},
{
 "word": " SWEDE", 
 "freq":43
},
{
 "word": " SWEEP", 
 "freq":638
},
{
 "word": " SWEET", 
 "freq":1370
},
{
 "word": " SWELL", 
 "freq":204
},
{
 "word": " SWEPT", 
 "freq":1280
},
{
 "word": " SWIFT", 
 "freq":661
},
{
 "word": " SWIMS", 
 "freq":48
},
{
 "word": " SWINE", 
 "freq":75
},
{
 "word": " SWING", 
 "freq":966
},
{
 "word": " SWIPE", 
 "freq":85
},
{
 "word": " SWIRE", 
 "freq":49
},
{
 "word": " SWIRL", 
 "freq":76
},
{
 "word": " SWISS", 
 "freq":3226
},
{
 "word": " SWOON", 
 "freq":34
},
{
 "word": " SWOOP", 
 "freq":78
},
{
 "word": " SWOPE", 
 "freq":18
},
{
 "word": " SWORD", 
 "freq":266
},
{
 "word": " SWORE", 
 "freq":121
},
{
 "word": " SWORN", 
 "freq":675
},
{
 "word": " SWUNG", 
 "freq":247
},
{
 "word": " SYBIL", 
 "freq":27
},
{
 "word": " SYDOW", 
 "freq":23
},
{
 "word": " SYKES", 
 "freq":48
},
{
 "word": " SYMES", 
 "freq":22
},
{
 "word": " SYMMS", 
 "freq":78
},
{
 "word": " SYNAR", 
 "freq":94
},
{
 "word": " SYNCH", 
 "freq":17
},
{
 "word": " SYNOD", 
 "freq":119
},
{
 "word": " SYRAH", 
 "freq":12
},
{
 "word": " SYRIA", 
 "freq":1994
},
{
 "word": " SYRON", 
 "freq":12
},
{
 "word": " SYRUP", 
 "freq":187
},
{
 "word": " SYSCO", 
 "freq":20
},
{
 "word": " SYUFY", 
 "freq":16
},
{
 "word": " SZABO", 
 "freq":48
},
{
 "word": " SZOKA", 
 "freq":36
},
{
 "word": " TABAK", 
 "freq":30
},
{
 "word": " TABER", 
 "freq":19
},
{
 "word": " TABLE", 
 "freq":3245
},
{
 "word": " TABOO", 
 "freq":164
},
{
 "word": " TABOR", 
 "freq":43
},
{
 "word": " TACIT", 
 "freq":111
},
{
 "word": " TACKS", 
 "freq":23
},
{
 "word": " TACKY", 
 "freq":78
},
{
 "word": " TACOS", 
 "freq":37
},
{
 "word": " TAEGU", 
 "freq":31
},
{
 "word": " TAFFY", 
 "freq":11
},
{
 "word": " TAHER", 
 "freq":19
},
{
 "word": " TAHOE", 
 "freq":233
},
{
 "word": " TAIKO", 
 "freq":25
},
{
 "word": " TAILS", 
 "freq":114
},
{
 "word": " TAINT", 
 "freq":71
},
{
 "word": " TAIYO", 
 "freq":87
},
{
 "word": " TAIZO", 
 "freq":37
},
{
 "word": " TAKAO", 
 "freq":20
},
{
 "word": " TAKEN", 
 "freq":14530
},
{
 "word": " TAKEO", 
 "freq":24
},
{
 "word": " TAKER", 
 "freq":61
},
{
 "word": " TAKES", 
 "freq":5633
},
{
 "word": " TALAL", 
 "freq":12
},
{
 "word": " TALEB", 
 "freq":15
},
{
 "word": " TALES", 
 "freq":477
},
{
 "word": " TALKS", 
 "freq":15623
},
{
 "word": " TALLY", 
 "freq":605
},
{
 "word": " TALON", 
 "freq":13
},
{
 "word": " TAMAR", 
 "freq":15
},
{
 "word": " TAMAS", 
 "freq":17
},
{
 "word": " TAMBO", 
 "freq":76
},
{
 "word": " TAMED", 
 "freq":43
},
{
 "word": " TAMER", 
 "freq":31
},
{
 "word": " TAMIL", 
 "freq":1023
},
{
 "word": " TAMIR", 
 "freq":15
},
{
 "word": " TAMMY", 
 "freq":241
},
{
 "word": " TAMPA", 
 "freq":961
},
{
 "word": " TANAI", 
 "freq":61
},
{
 "word": " TANDY", 
 "freq":373
},
{
 "word": " TANGO", 
 "freq":46
},
{
 "word": " TANGY", 
 "freq":35
},
{
 "word": " TANIA", 
 "freq":10
},
{
 "word": " TANKS", 
 "freq":2953
},
{
 "word": " TANYA", 
 "freq":77
},
{
 "word": " TAPED", 
 "freq":626
},
{
 "word": " TAPER", 
 "freq":71
},
{
 "word": " TAPES", 
 "freq":1196
},
{
 "word": " TAPIA", 
 "freq":25
},
{
 "word": " TAPIE", 
 "freq":42
},
{
 "word": " TARDO", 
 "freq":9
},
{
 "word": " TARDY", 
 "freq":32
},
{
 "word": " TAREK", 
 "freq":25
},
{
 "word": " TARIM", 
 "freq":15
},
{
 "word": " TARIQ", 
 "freq":208
},
{
 "word": " TARTS", 
 "freq":18
},
{
 "word": " TASKS", 
 "freq":673
},
{
 "word": " TASTE", 
 "freq":1551
},
{
 "word": " TASTY", 
 "freq":107
},
{
 "word": " TATAR", 
 "freq":14
},
{
 "word": " TATRA", 
 "freq":10
},
{
 "word": " TATUM", 
 "freq":40
},
{
 "word": " TAUKE", 
 "freq":64
},
{
 "word": " TAUNT", 
 "freq":30
},
{
 "word": " TAWIL", 
 "freq":23
},
{
 "word": " TAWNY", 
 "freq":8
},
{
 "word": " TAXED", 
 "freq":482
},
{
 "word": " TAXES", 
 "freq":9704
},
{
 "word": " TAXIS", 
 "freq":143
},
{
 "word": " TAXOL", 
 "freq":136
},
{
 "word": " TEACH", 
 "freq":1361
},
{
 "word": " TEALE", 
 "freq":10
},
{
 "word": " TEAMS", 
 "freq":2974
},
{
 "word": " TEARS", 
 "freq":970
},
{
 "word": " TEARY", 
 "freq":35
},
{
 "word": " TEASE", 
 "freq":40
},
{
 "word": " TEDDY", 
 "freq":350
},
{
 "word": " TEEMS", 
 "freq":10
},
{
 "word": " TEENS", 
 "freq":605
},
{
 "word": " TEENY", 
 "freq":29
},
{
 "word": " TEETH", 
 "freq":749
},
{
 "word": " TEETS", 
 "freq":19
},
{
 "word": " TEJAS", 
 "freq":36
},
{
 "word": " TEJON", 
 "freq":28
},
{
 "word": " TELAM", 
 "freq":24
},
{
 "word": " TELCO", 
 "freq":22
},
{
 "word": " TELEX", 
 "freq":165
},
{
 "word": " TELLS", 
 "freq":1708
},
{
 "word": " TELLY", 
 "freq":25
},
{
 "word": " TEMPE", 
 "freq":122
},
{
 "word": " TEMPO", 
 "freq":147
},
{
 "word": " TEMPS", 
 "freq":25
},
{
 "word": " TEMPT", 
 "freq":56
},
{
 "word": " TENDS", 
 "freq":704
},
{
 "word": " TENER", 
 "freq":13
},
{
 "word": " TENET", 
 "freq":53
},
{
 "word": " TENOR", 
 "freq":257
},
{
 "word": " TENSE", 
 "freq":500
},
{
 "word": " TENTH", 
 "freq":3560
},
{
 "word": " TENTS", 
 "freq":433
},
{
 "word": " TEPEE", 
 "freq":13
},
{
 "word": " TEPID", 
 "freq":95
},
{
 "word": " TEREX", 
 "freq":33
},
{
 "word": " TERMS", 
 "freq":10091
},
{
 "word": " TERRA", 
 "freq":81
},
{
 "word": " TERRE", 
 "freq":53
},
{
 "word": " TERRI", 
 "freq":79
},
{
 "word": " TERRY", 
 "freq":2080
},
{
 "word": " TERSE", 
 "freq":116
},
{
 "word": " TERZI", 
 "freq":17
},
{
 "word": " TESCO", 
 "freq":19
},
{
 "word": " TESSA", 
 "freq":14
},
{
 "word": " TESTA", 
 "freq":19
},
{
 "word": " TESTS", 
 "freq":4852
},
{
 "word": " TESTY", 
 "freq":69
},
{
 "word": " TETON", 
 "freq":82
},
{
 "word": " TETRA", 
 "freq":36
},
{
 "word": " TEXAN", 
 "freq":207
},
{
 "word": " TEXAS", 
 "freq":16251
},
{
 "word": " TEXTS", 
 "freq":215
},
{
 "word": " THABO", 
 "freq":15
},
{
 "word": " THACH", 
 "freq":104
},
{
 "word": " THAIS", 
 "freq":103
},
{
 "word": " THANH", 
 "freq":42
},
{
 "word": " THANK", 
 "freq":1318
},
{
 "word": " THARP", 
 "freq":40
},
{
 "word": " THEFT", 
 "freq":1202
},
{
 "word": " THEIR", 
 "freq":145434
},
{
 "word": " THEME", 
 "freq":1979
},
{
 "word": " THERE", 
 "freq":86502
},
{
 "word": " THESE", 
 "freq":32300
},
{
 "word": " THETA", 
 "freq":17
},
{
 "word": " THICK", 
 "freq":1136
},
{
 "word": " THIEF", 
 "freq":225
},
{
 "word": " THIEL", 
 "freq":18
},
{
 "word": " THIGH", 
 "freq":162
},
{
 "word": " THING", 
 "freq":10161
},
{
 "word": " THINK", 
 "freq":30475
},
{
 "word": " THINS", 
 "freq":12
},
{
 "word": " THIRD", 
 "freq":29372
},
{
 "word": " THONG", 
 "freq":22
},
{
 "word": " THORN", 
 "freq":182
},
{
 "word": " THORP", 
 "freq":65
},
{
 "word": " THOSE", 
 "freq":45031
},
{
 "word": " THREE", 
 "freq":273077
},
{
 "word": " THREW", 
 "freq":1944
},
{
 "word": " THROW", 
 "freq":1809
},
{
 "word": " THUDS", 
 "freq":15
},
{
 "word": " THUGS", 
 "freq":260
},
{
 "word": " THUMB", 
 "freq":289
},
{
 "word": " THUMP", 
 "freq":46
},
{
 "word": " THURS", 
 "freq":22
},
{
 "word": " THYME", 
 "freq":42
},
{
 "word": " TIARA", 
 "freq":39
},
{
 "word": " TIBET", 
 "freq":332
},
{
 "word": " TIBOR", 
 "freq":9
},
{
 "word": " TICKS", 
 "freq":114
},
{
 "word": " TICOR", 
 "freq":15
},
{
 "word": " TIDAL", 
 "freq":193
},
{
 "word": " TIDES", 
 "freq":204
},
{
 "word": " TIERS", 
 "freq":63
},
{
 "word": " TIGER", 
 "freq":499
},
{
 "word": " TIGHT", 
 "freq":2253
},
{
 "word": " TIGRE", 
 "freq":106
},
{
 "word": " TIKES", 
 "freq":15
},
{
 "word": " TIKVA", 
 "freq":15
},
{
 "word": " TILED", 
 "freq":27
},
{
 "word": " TILES", 
 "freq":189
},
{
 "word": " TILLS", 
 "freq":15
},
{
 "word": " TILTS", 
 "freq":22
},
{
 "word": " TIMED", 
 "freq":268
},
{
 "word": " TIMER", 
 "freq":88
},
{
 "word": " TIMES", 
 "freq":20009
},
{
 "word": " TIMEX", 
 "freq":17
},
{
 "word": " TIMID", 
 "freq":126
},
{
 "word": " TIMMY", 
 "freq":27
},
{
 "word": " TIMOR", 
 "freq":56
},
{
 "word": " TIMUR", 
 "freq":13
},
{
 "word": " TINGE", 
 "freq":28
},
{
 "word": " TINGO", 
 "freq":18
},
{
 "word": " TINNY", 
 "freq":17
},
{
 "word": " TIPSY", 
 "freq":14
},
{
 "word": " TIRED", 
 "freq":1254
},
{
 "word": " TIRES", 
 "freq":743
},
{
 "word": " TIRGU", 
 "freq":25
},
{
 "word": " TIRZA", 
 "freq":23
},
{
 "word": " TISCH", 
 "freq":221
},
{
 "word": " TITAN", 
 "freq":241
},
{
 "word": " TITHE", 
 "freq":18
},
{
 "word": " TITLE", 
 "freq":3131
},
{
 "word": " TITOV", 
 "freq":37
},
{
 "word": " TITUS", 
 "freq":30
},
{
 "word": " TOADS", 
 "freq":34
},
{
 "word": " TOAST", 
 "freq":211
},
{
 "word": " TOBIN", 
 "freq":91
},
{
 "word": " TOCOR", 
 "freq":7
},
{
 "word": " TODAY", 
 "freq":38681
},
{
 "word": " TODOR", 
 "freq":96
},
{
 "word": " TOKAI", 
 "freq":57
},
{
 "word": " TOKEN", 
 "freq":310
},
{
 "word": " TOKIO", 
 "freq":8
},
{
 "word": " TOKOS", 
 "freq":44
},
{
 "word": " TOKYO", 
 "freq":7772
},
{
 "word": " TOKYU", 
 "freq":60
},
{
 "word": " TOLBA", 
 "freq":13
},
{
 "word": " TOLER", 
 "freq":24
},
{
 "word": " TOLLS", 
 "freq":125
},
{
 "word": " TOMAS", 
 "freq":157
},
{
 "word": " TOMBS", 
 "freq":73
},
{
 "word": " TOMEN", 
 "freq":11
},
{
 "word": " TOMES", 
 "freq":25
},
{
 "word": " TOMMY", 
 "freq":558
},
{
 "word": " TONAL", 
 "freq":16
},
{
 "word": " TONED", 
 "freq":106
},
{
 "word": " TONER", 
 "freq":51
},
{
 "word": " TONES", 
 "freq":176
},
{
 "word": " TONEY", 
 "freq":47
},
{
 "word": " TONGA", 
 "freq":45
},
{
 "word": " TONGS", 
 "freq":16
},
{
 "word": " TONIC", 
 "freq":55
},
{
 "word": " TONKA", 
 "freq":126
},
{
 "word": " TONTO", 
 "freq":11
},
{
 "word": " TONYA", 
 "freq":68
},
{
 "word": " TONYS", 
 "freq":10
},
{
 "word": " TOOLE", 
 "freq":18
},
{
 "word": " TOOLS", 
 "freq":1210
},
{
 "word": " TOOTH", 
 "freq":247
},
{
 "word": " TOPAZ", 
 "freq":68
},
{
 "word": " TOPIC", 
 "freq":701
},
{
 "word": " TOPIX", 
 "freq":196
},
{
 "word": " TOPOL", 
 "freq":21
},
{
 "word": " TOPPS", 
 "freq":73
},
{
 "word": " TOPSY", 
 "freq":39
},
{
 "word": " TORAH", 
 "freq":63
},
{
 "word": " TORCH", 
 "freq":196
},
{
 "word": " TORIT", 
 "freq":17
},
{
 "word": " TORME", 
 "freq":24
},
{
 "word": " TORRE", 
 "freq":42
},
{
 "word": " TORSO", 
 "freq":90
},
{
 "word": " TORTS", 
 "freq":22
},
{
 "word": " TOSCA", 
 "freq":16
},
{
 "word": " TOSCO", 
 "freq":35
},
{
 "word": " TOTAL", 
 "freq":16035
},
{
 "word": " TOTED", 
 "freq":16
},
{
 "word": " TOTEM", 
 "freq":36
},
{
 "word": " TOTES", 
 "freq":10
},
{
 "word": " TOUCH", 
 "freq":1910
},
{
 "word": " TOUGH", 
 "freq":4918
},
{
 "word": " TOURS", 
 "freq":728
},
{
 "word": " TOUTS", 
 "freq":88
},
{
 "word": " TOVAR", 
 "freq":13
},
{
 "word": " TOWED", 
 "freq":215
},
{
 "word": " TOWEL", 
 "freq":211
},
{
 "word": " TOWER", 
 "freq":2219
},
{
 "word": " TOWNE", 
 "freq":73
},
{
 "word": " TOWNS", 
 "freq":1746
},
{
 "word": " TOXIC", 
 "freq":1575
},
{
 "word": " TOXIN", 
 "freq":111
},
{
 "word": " TOYED", 
 "freq":39
},
{
 "word": " TRABI", 
 "freq":14
},
{
 "word": " TRACE", 
 "freq":510
},
{
 "word": " TRACI", 
 "freq":23
},
{
 "word": " TRACK", 
 "freq":3672
},
{
 "word": " TRACT", 
 "freq":255
},
{
 "word": " TRACY", 
 "freq":625
},
{
 "word": " TRADE", 
 "freq":26587
},
{
 "word": " TRAIL", 
 "freq":1295
},
{
 "word": " TRAIN", 
 "freq":3894
},
{
 "word": " TRAIT", 
 "freq":66
},
{
 "word": " TRAMP", 
 "freq":58
},
{
 "word": " TRAMS", 
 "freq":13
},
{
 "word": " TRANS", 
 "freq":956
},
{
 "word": " TRAPP", 
 "freq":64
},
{
 "word": " TRAPS", 
 "freq":258
},
{
 "word": " TRASH", 
 "freq":1142
},
{
 "word": " TRAUB", 
 "freq":44
},
{
 "word": " TRAYS", 
 "freq":83
},
{
 "word": " TREAD", 
 "freq":103
},
{
 "word": " TREAT", 
 "freq":1809
},
{
 "word": " TREEN", 
 "freq":48
},
{
 "word": " TREES", 
 "freq":2876
},
{
 "word": " TREJO", 
 "freq":19
},
{
 "word": " TREKS", 
 "freq":18
},
{
 "word": " TREND", 
 "freq":3277
},
{
 "word": " TRENT", 
 "freq":120
},
{
 "word": " TREVI", 
 "freq":15
},
{
 "word": " TRIAD", 
 "freq":49
},
{
 "word": " TRIAL", 
 "freq":12443
},
{
 "word": " TRIBE", 
 "freq":602
},
{
 "word": " TRICE", 
 "freq":12
},
{
 "word": " TRICK", 
 "freq":502
},
{
 "word": " TRIED", 
 "freq":9370
},
{
 "word": " TRIER", 
 "freq":13
},
{
 "word": " TRIES", 
 "freq":1231
},
{
 "word": " TRIMS", 
 "freq":48
},
{
 "word": " TRINA", 
 "freq":15
},
{
 "word": " TRINH", 
 "freq":18
},
{
 "word": " TRIPE", 
 "freq":14
},
{
 "word": " TRIPP", 
 "freq":17
},
{
 "word": " TRIPS", 
 "freq":1553
},
{
 "word": " TRISH", 
 "freq":22
},
{
 "word": " TRITE", 
 "freq":20
},
{
 "word": " TROIS", 
 "freq":16
},
{
 "word": " TROLL", 
 "freq":34
},
{
 "word": " TROOP", 
 "freq":1128
},
{
 "word": " TROST", 
 "freq":45
},
{
 "word": " TROTS", 
 "freq":11
},
{
 "word": " TROTT", 
 "freq":31
},
{
 "word": " TROUP", 
 "freq":6
},
{
 "word": " TROUT", 
 "freq":357
},
{
 "word": " TROVE", 
 "freq":50
},
{
 "word": " TRUCE", 
 "freq":991
},
{
 "word": " TRUCK", 
 "freq":4613
},
{
 "word": " TRUDY", 
 "freq":34
},
{
 "word": " TRUER", 
 "freq":21
},
{
 "word": " TRULY", 
 "freq":1439
},
{
 "word": " TRUMP", 
 "freq":2213
},
{
 "word": " TRUNK", 
 "freq":341
},
{
 "word": " TRUPP", 
 "freq":30
},
{
 "word": " TRUST", 
 "freq":6934
},
{
 "word": " TRUTH", 
 "freq":2212
},
{
 "word": " TRUTT", 
 "freq":35
},
{
 "word": " TRYGG", 
 "freq":14
},
{
 "word": " TRYON", 
 "freq":19
},
{
 "word": " TRYST", 
 "freq":27
},
{
 "word": " TSANG", 
 "freq":14
},
{
 "word": " TSENG", 
 "freq":25
},
{
 "word": " TSUJI", 
 "freq":14
},
{
 "word": " TUBAL", 
 "freq":31
},
{
 "word": " TUBAS", 
 "freq":10
},
{
 "word": " TUBBS", 
 "freq":34
},
{
 "word": " TUBBY", 
 "freq":11
},
{
 "word": " TUBES", 
 "freq":450
},
{
 "word": " TUCCI", 
 "freq":32
},
{
 "word": " TUCKS", 
 "freq":21
},
{
 "word": " TUDOR", 
 "freq":121
},
{
 "word": " TUFTS", 
 "freq":117
},
{
 "word": " TULIP", 
 "freq":39
},
{
 "word": " TULLE", 
 "freq":14
},
{
 "word": " TULLY", 
 "freq":128
},
{
 "word": " TULSA", 
 "freq":383
},
{
 "word": " TUMMY", 
 "freq":28
},
{
 "word": " TUMOR", 
 "freq":461
},
{
 "word": " TUNED", 
 "freq":268
},
{
 "word": " TUNER", 
 "freq":20
},
{
 "word": " TUNES", 
 "freq":280
},
{
 "word": " TUNIC", 
 "freq":23
},
{
 "word": " TUNIS", 
 "freq":238
},
{
 "word": " TUPAC", 
 "freq":54
},
{
 "word": " TURBO", 
 "freq":108
},
{
 "word": " TURCO", 
 "freq":53
},
{
 "word": " TURIN", 
 "freq":108
},
{
 "word": " TURKI", 
 "freq":22
},
{
 "word": " TURKS", 
 "freq":372
},
{
 "word": " TURNS", 
 "freq":2056
},
{
 "word": " TUROW", 
 "freq":19
},
{
 "word": " TURVY", 
 "freq":30
},
{
 "word": " TUSKS", 
 "freq":59
},
{
 "word": " TUTOR", 
 "freq":89
},
{
 "word": " TUTSI", 
 "freq":66
},
{
 "word": " TUTTE", 
 "freq":22
},
{
 "word": " TWAIN", 
 "freq":133
},
{
 "word": " TWANG", 
 "freq":21
},
{
 "word": " TWEAK", 
 "freq":23
},
{
 "word": " TWEED", 
 "freq":89
},
{
 "word": " TWICE", 
 "freq":4293
},
{
 "word": " TWIGG", 
 "freq":52
},
{
 "word": " TWIGS", 
 "freq":23
},
{
 "word": " TWINE", 
 "freq":30
},
{
 "word": " TWINS", 
 "freq":804
},
{
 "word": " TWIST", 
 "freq":502
},
{
 "word": " TWYLA", 
 "freq":25
},
{
 "word": " TYACK", 
 "freq":18
},
{
 "word": " TYING", 
 "freq":411
},
{
 "word": " TYKES", 
 "freq":12
},
{
 "word": " TYLER", 
 "freq":329
},
{
 "word": " TYNAN", 
 "freq":37
},
{
 "word": " TYNER", 
 "freq":9
},
{
 "word": " TYPED", 
 "freq":103
},
{
 "word": " TYPES", 
 "freq":1951
},
{
 "word": " TYREE", 
 "freq":15
},
{
 "word": " TYROL", 
 "freq":23
},
{
 "word": " TYSON", 
 "freq":934
},
{
 "word": " UCLAF", 
 "freq":64
},
{
 "word": " UDALL", 
 "freq":96
},
{
 "word": " UDVAR", 
 "freq":12
},
{
 "word": " UKIAH", 
 "freq":24
},
{
 "word": " ULCER", 
 "freq":149
},
{
 "word": " ULMER", 
 "freq":24
},
{
 "word": " ULSAN", 
 "freq":46
},
{
 "word": " ULTRA", 
 "freq":540
},
{
 "word": " UMASS", 
 "freq":11
},
{
 "word": " UNCLE", 
 "freq":873
},
{
 "word": " UNCUT", 
 "freq":50
},
{
 "word": " UNDER", 
 "freq":49785
},
{
 "word": " UNDUE", 
 "freq":187
},
{
 "word": " UNFIT", 
 "freq":125
},
{
 "word": " UNGER", 
 "freq":50
},
{
 "word": " UNIFI", 
 "freq":10
},
{
 "word": " UNIFY", 
 "freq":127
},
{
 "word": " UNION", 
 "freq":30287
},
{
 "word": " UNITA", 
 "freq":482
},
{
 "word": " UNITE", 
 "freq":478
},
{
 "word": " UNITS", 
 "freq":6823
},
{
 "word": " UNITY", 
 "freq":1693
},
{
 "word": " UNIVA", 
 "freq":29
},
{
 "word": " UNMET", 
 "freq":45
},
{
 "word": " UNRUH", 
 "freq":73
},
{
 "word": " UNRWA", 
 "freq":14
},
{
 "word": " UNSER", 
 "freq":18
},
{
 "word": " UNTAC", 
 "freq":14
},
{
 "word": " UNTIL", 
 "freq":26890
},
{
 "word": " UNWED", 
 "freq":80
},
{
 "word": " UNZEN", 
 "freq":14
},
{
 "word": " UPHAM", 
 "freq":554
},
{
 "word": " UPPED", 
 "freq":54
},
{
 "word": " UPPER", 
 "freq":2996
},
{
 "word": " UPSET", 
 "freq":1776
},
{
 "word": " UPTON", 
 "freq":41
},
{
 "word": " URALS", 
 "freq":38
},
{
 "word": " URBAN", 
 "freq":3066
},
{
 "word": " URGED", 
 "freq":4970
},
{
 "word": " URGES", 
 "freq":360
},
{
 "word": " URIBE", 
 "freq":63
},
{
 "word": " URICH", 
 "freq":17
},
{
 "word": " URINE", 
 "freq":275
},
{
 "word": " URSUS", 
 "freq":21
},
{
 "word": " USAGE", 
 "freq":295
},
{
 "word": " USERS", 
 "freq":2480
},
{
 "word": " USERY", 
 "freq":34
},
{
 "word": " USHER", 
 "freq":151
},
{
 "word": " USING", 
 "freq":10739
},
{
 "word": " USTED", 
 "freq":47
},
{
 "word": " USUAL", 
 "freq":2501
},
{
 "word": " USURP", 
 "freq":26
},
{
 "word": " USURY", 
 "freq":15
},
{
 "word": " UTICA", 
 "freq":53
},
{
 "word": " UTLEY", 
 "freq":34
},
{
 "word": " UTTAR", 
 "freq":57
},
{
 "word": " UTTER", 
 "freq":129
},
{
 "word": " UYGUR", 
 "freq":15
},
{
 "word": " UZBEK", 
 "freq":64
},
{
 "word": " VADER", 
 "freq":15
},
{
 "word": " VADIM", 
 "freq":129
},
{
 "word": " VAGUE", 
 "freq":640
},
{
 "word": " VALEO", 
 "freq":9
},
{
 "word": " VALET", 
 "freq":25
},
{
 "word": " VALHI", 
 "freq":58
},
{
 "word": " VALID", 
 "freq":694
},
{
 "word": " VALLE", 
 "freq":55
},
{
 "word": " VALLI", 
 "freq":23
},
{
 "word": " VALOR", 
 "freq":56
},
{
 "word": " VALUE", 
 "freq":14151
},
{
 "word": " VALVE", 
 "freq":503
},
{
 "word": " VANCE", 
 "freq":357
},
{
 "word": " VANES", 
 "freq":18
},
{
 "word": " VANIK", 
 "freq":68
},
{
 "word": " VANNA", 
 "freq":50
},
{
 "word": " VANYA", 
 "freq":18
},
{
 "word": " VAPID", 
 "freq":17
},
{
 "word": " VAPOR", 
 "freq":149
},
{
 "word": " VARIG", 
 "freq":36
},
{
 "word": " VARNA", 
 "freq":11
},
{
 "word": " VASCO", 
 "freq":13
},
{
 "word": " VASES", 
 "freq":39
},
{
 "word": " VASIL", 
 "freq":26
},
{
 "word": " VAULT", 
 "freq":206
},
{
 "word": " VEECK", 
 "freq":13
},
{
 "word": " VEERS", 
 "freq":10
},
{
 "word": " VEGAS", 
 "freq":1403
},
{
 "word": " VEILS", 
 "freq":38
},
{
 "word": " VEINS", 
 "freq":69
},
{
 "word": " VELEZ", 
 "freq":19
},
{
 "word": " VENAL", 
 "freq":17
},
{
 "word": " VENDA", 
 "freq":16
},
{
 "word": " VENOM", 
 "freq":53
},
{
 "word": " VENTO", 
 "freq":142
},
{
 "word": " VENTS", 
 "freq":72
},
{
 "word": " VENUE", 
 "freq":191
},
{
 "word": " VENUS", 
 "freq":400
},
{
 "word": " VERBS", 
 "freq":11
},
{
 "word": " VERDE", 
 "freq":159
},
{
 "word": " VERDI", 
 "freq":74
},
{
 "word": " VERGE", 
 "freq":442
},
{
 "word": " VERIT", 
 "freq":29
},
{
 "word": " VERNA", 
 "freq":29
},
{
 "word": " VERNE", 
 "freq":37
},
{
 "word": " VERSA", 
 "freq":137
},
{
 "word": " VERSE", 
 "freq":136
},
{
 "word": " VERVE", 
 "freq":36
},
{
 "word": " VESCO", 
 "freq":21
},
{
 "word": " VESTS", 
 "freq":119
},
{
 "word": " VEVEY", 
 "freq":15
},
{
 "word": " VEXED", 
 "freq":22
},
{
 "word": " VIALS", 
 "freq":100
},
{
 "word": " VIBES", 
 "freq":28
},
{
 "word": " VICAR", 
 "freq":41
},
{
 "word": " VICES", 
 "freq":28
},
{
 "word": " VICHY", 
 "freq":24
},
{
 "word": " VICKI", 
 "freq":131
},
{
 "word": " VICKS", 
 "freq":17
},
{
 "word": " VICKY", 
 "freq":45
},
{
 "word": " VIDAL", 
 "freq":62
},
{
 "word": " VIDEO", 
 "freq":5193
},
{
 "word": " VIDES", 
 "freq":16
},
{
 "word": " VIEJO", 
 "freq":38
},
{
 "word": " VIERA", 
 "freq":19
},
{
 "word": " VIEWS", 
 "freq":2991
},
{
 "word": " VIGIL", 
 "freq":339
},
{
 "word": " VIGOR", 
 "freq":179
},
{
 "word": " VILLA", 
 "freq":409
},
{
 "word": " VILLE", 
 "freq":17
},
{
 "word": " VINCE", 
 "freq":165
},
{
 "word": " VINCI", 
 "freq":51
},
{
 "word": " VINES", 
 "freq":162
},
{
 "word": " VINIK", 
 "freq":25
},
{
 "word": " VINNY", 
 "freq":24
},
{
 "word": " VINYL", 
 "freq":171
},
{
 "word": " VIOLA", 
 "freq":110
},
{
 "word": " VIPER", 
 "freq":69
},
{
 "word": " VIRAL", 
 "freq":185
},
{
 "word": " VIRUS", 
 "freq":3154
},
{
 "word": " VISAS", 
 "freq":683
},
{
 "word": " VISIT", 
 "freq":8175
},
{
 "word": " VISOR", 
 "freq":30
},
{
 "word": " VISTA", 
 "freq":402
},
{
 "word": " VITAL", 
 "freq":1381
},
{
 "word": " VITEK", 
 "freq":20
},
{
 "word": " VITRO", 
 "freq":166
},
{
 "word": " VIVAS", 
 "freq":17
},
{
 "word": " VIVID", 
 "freq":259
},
{
 "word": " VIXEN", 
 "freq":8
},
{
 "word": " VLADE", 
 "freq":23
},
{
 "word": " VLASI", 
 "freq":34
},
{
 "word": " VOCAL", 
 "freq":669
},
{
 "word": " VODKA", 
 "freq":358
},
{
 "word": " VOGEL", 
 "freq":229
},
{
 "word": " VOGUE", 
 "freq":186
},
{
 "word": " VOICE", 
 "freq":4410
},
{
 "word": " VOIDS", 
 "freq":12
},
{
 "word": " VOIGT", 
 "freq":22
},
{
 "word": " VOILA", 
 "freq":24
},
{
 "word": " VOLGA", 
 "freq":56
},
{
 "word": " VOLPE", 
 "freq":41
},
{
 "word": " VOLTS", 
 "freq":51
},
{
 "word": " VOLVO", 
 "freq":448
},
{
 "word": " VOMIT", 
 "freq":35
},
{
 "word": " VOTED", 
 "freq":5502
},
{
 "word": " VOTER", 
 "freq":983
},
{
 "word": " VOTES", 
 "freq":4922
},
{
 "word": " VOUCH", 
 "freq":19
},
{
 "word": " VOWED", 
 "freq":1544
},
{
 "word": " VRAIN", 
 "freq":13
},
{
 "word": " VROOM", 
 "freq":18
},
{
 "word": " VUONO", 
 "freq":27
},
{
 "word": " VYING", 
 "freq":261
},
{
 "word": " WABAN", 
 "freq":26
},
{
 "word": " WACHS", 
 "freq":22
},
{
 "word": " WACKO", 
 "freq":32
},
{
 "word": " WACKY", 
 "freq":95
},
{
 "word": " WADED", 
 "freq":53
},
{
 "word": " WAFER", 
 "freq":52
},
{
 "word": " WAFRA", 
 "freq":14
},
{
 "word": " WAFTS", 
 "freq":12
},
{
 "word": " WAGED", 
 "freq":449
},
{
 "word": " WAGER", 
 "freq":52
},
{
 "word": " WAGES", 
 "freq":2250
},
{
 "word": " WAGON", 
 "freq":399
},
{
 "word": " WAGYU", 
 "freq":17
},
{
 "word": " WAHAB", 
 "freq":22
},
{
 "word": " WAILS", 
 "freq":22
},
{
 "word": " WAIST", 
 "freq":249
},
{
 "word": " WAITE", 
 "freq":312
},
{
 "word": " WAITS", 
 "freq":220
},
{
 "word": " WAIVE", 
 "freq":264
},
{
 "word": " WAJDA", 
 "freq":19
},
{
 "word": " WAKES", 
 "freq":72
},
{
 "word": " WAKIL", 
 "freq":36
},
{
 "word": " WALDO", 
 "freq":33
},
{
 "word": " WALES", 
 "freq":345
},
{
 "word": " WALID", 
 "freq":89
},
{
 "word": " WALKS", 
 "freq":536
},
{
 "word": " WALLA", 
 "freq":62
},
{
 "word": " WALLS", 
 "freq":1747
},
{
 "word": " WALLY", 
 "freq":125
},
{
 "word": " WALSH", 
 "freq":1338
},
{
 "word": " WALTZ", 
 "freq":70
},
{
 "word": " WANDA", 
 "freq":136
},
{
 "word": " WANED", 
 "freq":123
},
{
 "word": " WANES", 
 "freq":13
},
{
 "word": " WANNA", 
 "freq":125
},
{
 "word": " WANTS", 
 "freq":9455
},
{
 "word": " WARDS", 
 "freq":155
},
{
 "word": " WARES", 
 "freq":163
},
{
 "word": " WARMS", 
 "freq":37
},
{
 "word": " WARNS", 
 "freq":680
},
{
 "word": " WARTS", 
 "freq":62
},
{
 "word": " WASPS", 
 "freq":62
},
{
 "word": " WASTE", 
 "freq":4701
},
{
 "word": " WATAN", 
 "freq":18
},
{
 "word": " WATCH", 
 "freq":3758
},
{
 "word": " WATER", 
 "freq":16061
},
{
 "word": " WATTS", 
 "freq":304
},
{
 "word": " WAUGH", 
 "freq":30
},
{
 "word": " WAVED", 
 "freq":520
},
{
 "word": " WAVER", 
 "freq":33
},
{
 "word": " WAVES", 
 "freq":1013
},
{
 "word": " WAXED", 
 "freq":46
},
{
 "word": " WAXES", 
 "freq":27
},
{
 "word": " WAYNE", 
 "freq":1458
},
{
 "word": " WAZIR", 
 "freq":109
},
{
 "word": " WEARS", 
 "freq":416
},
{
 "word": " WEARY", 
 "freq":352
},
{
 "word": " WEAVE", 
 "freq":58
},
{
 "word": " WEBER", 
 "freq":386
},
{
 "word": " WEDEL", 
 "freq":21
},
{
 "word": " WEDGE", 
 "freq":146
},
{
 "word": " WEEDS", 
 "freq":202
},
{
 "word": " WEEKS", 
 "freq":17151
},
{
 "word": " WEGEE", 
 "freq":20
},
{
 "word": " WEIGH", 
 "freq":514
},
{
 "word": " WEILL", 
 "freq":159
},
{
 "word": " WEIRD", 
 "freq":339
},
{
 "word": " WEISE", 
 "freq":20
},
{
 "word": " WEISS", 
 "freq":646
},
{
 "word": " WEITZ", 
 "freq":32
},
{
 "word": " WELCH", 
 "freq":406
},
{
 "word": " WELDS", 
 "freq":13
},
{
 "word": " WELLS", 
 "freq":1861
},
{
 "word": " WELSH", 
 "freq":168
},
{
 "word": " WELTY", 
 "freq":59
},
{
 "word": " WENDT", 
 "freq":73
},
{
 "word": " WENDY", 
 "freq":271
},
{
 "word": " WENTE", 
 "freq":18
},
{
 "word": " WENTZ", 
 "freq":15
},
{
 "word": " WERKE", 
 "freq":84
},
{
 "word": " WERTZ", 
 "freq":34
},
{
 "word": " WHACK", 
 "freq":54
},
{
 "word": " WHALE", 
 "freq":405
},
{
 "word": " WHARF", 
 "freq":303
},
{
 "word": " WHEAT", 
 "freq":4644
},
{
 "word": " WHEEL", 
 "freq":1081
},
{
 "word": " WHERE", 
 "freq":42284
},
{
 "word": " WHICH", 
 "freq":142146
},
{
 "word": " WHIFF", 
 "freq":73
},
{
 "word": " WHILE", 
 "freq":46686
},
{
 "word": " WHIMS", 
 "freq":58
},
{
 "word": " WHINE", 
 "freq":59
},
{
 "word": " WHINY", 
 "freq":20
},
{
 "word": " WHIPS", 
 "freq":61
},
{
 "word": " WHIRL", 
 "freq":50
},
{
 "word": " WHISK", 
 "freq":83
},
{
 "word": " WHITE", 
 "freq":26161
},
{
 "word": " WHOLE", 
 "freq":6471
},
{
 "word": " WHOOP", 
 "freq":15
},
{
 "word": " WHORE", 
 "freq":29
},
{
 "word": " WHOSE", 
 "freq":15569
},
{
 "word": " WHYTE", 
 "freq":51
},
{
 "word": " WICKS", 
 "freq":20
},
{
 "word": " WIDEN", 
 "freq":363
},
{
 "word": " WIDER", 
 "freq":920
},
{
 "word": " WIDOW", 
 "freq":754
},
{
 "word": " WIDTH", 
 "freq":104
},
{
 "word": " WIELD", 
 "freq":134
},
{
 "word": " WIESE", 
 "freq":12
},
{
 "word": " WIEST", 
 "freq":12
},
{
 "word": " WIGHT", 
 "freq":22
},
{
 "word": " WILDE", 
 "freq":59
},
{
 "word": " WILDS", 
 "freq":33
},
{
 "word": " WILES", 
 "freq":33
},
{
 "word": " WILEY", 
 "freq":139
},
{
 "word": " WILKE", 
 "freq":13
},
{
 "word": " WILKS", 
 "freq":32
},
{
 "word": " WILLA", 
 "freq":22
},
{
 "word": " WILLI", 
 "freq":35
},
{
 "word": " WILLS", 
 "freq":157
},
{
 "word": " WILLY", 
 "freq":182
},
{
 "word": " WILMA", 
 "freq":36
},
{
 "word": " WIMPS", 
 "freq":24
},
{
 "word": " WIMPY", 
 "freq":27
},
{
 "word": " WINCE", 
 "freq":24
},
{
 "word": " WINCH", 
 "freq":14
},
{
 "word": " WINDS", 
 "freq":2447
},
{
 "word": " WINDY", 
 "freq":211
},
{
 "word": " WINED", 
 "freq":11
},
{
 "word": " WINER", 
 "freq":18
},
{
 "word": " WINES", 
 "freq":705
},
{
 "word": " WINGS", 
 "freq":837
},
{
 "word": " WINKS", 
 "freq":18
},
{
 "word": " WIPED", 
 "freq":546
},
{
 "word": " WIPER", 
 "freq":73
},
{
 "word": " WIPES", 
 "freq":60
},
{
 "word": " WIRED", 
 "freq":152
},
{
 "word": " WIRES", 
 "freq":397
},
{
 "word": " WIRTH", 
 "freq":166
},
{
 "word": " WIRTZ", 
 "freq":16
},
{
 "word": " WISER", 
 "freq":95
},
{
 "word": " WISPY", 
 "freq":16
},
{
 "word": " WITCH", 
 "freq":223
},
{
 "word": " WITCO", 
 "freq":29
},
{
 "word": " WITTE", 
 "freq":18
},
{
 "word": " WITTY", 
 "freq":159
},
{
 "word": " WIVES", 
 "freq":693
},
{
 "word": " WIXOM", 
 "freq":25
},
{
 "word": " WOKEN", 
 "freq":16
},
{
 "word": " WOLFE", 
 "freq":288
},
{
 "word": " WOLFF", 
 "freq":111
},
{
 "word": " WOLIN", 
 "freq":14
},
{
 "word": " WOLLO", 
 "freq":20
},
{
 "word": " WOLPE", 
 "freq":57
},
{
 "word": " WOMAN", 
 "freq":11032
},
{
 "word": " WOMEN", 
 "freq":18245
},
{
 "word": " WOMER", 
 "freq":15
},
{
 "word": " WONKA", 
 "freq":17
},
{
 "word": " WOODS", 
 "freq":1177
},
{
 "word": " WOODY", 
 "freq":326
},
{
 "word": " WOOED", 
 "freq":87
},
{
 "word": " WOOLF", 
 "freq":66
},
{
 "word": " WORDS", 
 "freq":4262
},
{
 "word": " WORKS", 
 "freq":6890
},
{
 "word": " WORLD", 
 "freq":36091
},
{
 "word": " WORMS", 
 "freq":190
},
{
 "word": " WORRY", 
 "freq":2683
},
{
 "word": " WORSE", 
 "freq":3375
},
{
 "word": " WORST", 
 "freq":4643
},
{
 "word": " WORTH", 
 "freq":7831
},
{
 "word": " WOULD", 
 "freq":159875
},
{
 "word": " WOUND", 
 "freq":1176
},
{
 "word": " WOVEN", 
 "freq":126
},
{
 "word": " WOWED", 
 "freq":22
},
{
 "word": " WRAPS", 
 "freq":138
},
{
 "word": " WRATH", 
 "freq":221
},
{
 "word": " WREAK", 
 "freq":54
},
{
 "word": " WRECK", 
 "freq":386
},
{
 "word": " WRENN", 
 "freq":13
},
{
 "word": " WREST", 
 "freq":122
},
{
 "word": " WRING", 
 "freq":67
},
{
 "word": " WRIST", 
 "freq":311
},
{
 "word": " WRITE", 
 "freq":4562
},
{
 "word": " WRITS", 
 "freq":17
},
{
 "word": " WRONG", 
 "freq":5113
},
{
 "word": " WROTE", 
 "freq":7693
},
{
 "word": " WRUNG", 
 "freq":35
},
{
 "word": " WRYLY", 
 "freq":42
},
{
 "word": " WUHAN", 
 "freq":43
},
{
 "word": " WYATT", 
 "freq":164
},
{
 "word": " WYCHE", 
 "freq":96
},
{
 "word": " WYDEN", 
 "freq":145
},
{
 "word": " WYETH", 
 "freq":95
},
{
 "word": " WYGOD", 
 "freq":25
},
{
 "word": " WYLER", 
 "freq":23
},
{
 "word": " WYLIE", 
 "freq":69
},
{
 "word": " WYMAN", 
 "freq":115
},
{
 "word": " WYMER", 
 "freq":82
},
{
 "word": " WYNNE", 
 "freq":45
},
{
 "word": " WYSER", 
 "freq":40
},
{
 "word": " XANAX", 
 "freq":20
},
{
 "word": " XENON", 
 "freq":11
},
{
 "word": " XEROX", 
 "freq":697
},
{
 "word": " XHOSA", 
 "freq":32
},
{
 "word": " XIONG", 
 "freq":22
},
{
 "word": " YACHT", 
 "freq":473
},
{
 "word": " YACOS", 
 "freq":16
},
{
 "word": " YAFFE", 
 "freq":15
},
{
 "word": " YAGER", 
 "freq":20
},
{
 "word": " YAKOV", 
 "freq":14
},
{
 "word": " YALOM", 
 "freq":7
},
{
 "word": " YALTA", 
 "freq":40
},
{
 "word": " YANBU", 
 "freq":14
},
{
 "word": " YANEZ", 
 "freq":22
},
{
 "word": " YANKS", 
 "freq":37
},
{
 "word": " YAQUB", 
 "freq":24
},
{
 "word": " YARDS", 
 "freq":2689
},
{
 "word": " YARNS", 
 "freq":36
},
{
 "word": " YARON", 
 "freq":23
},
{
 "word": " YASUO", 
 "freq":20
},
{
 "word": " YATES", 
 "freq":183
},
{
 "word": " YAWNS", 
 "freq":22
},
{
 "word": " YAZOV", 
 "freq":181
},
{
 "word": " YEARN", 
 "freq":53
},
{
 "word": " YEARS", 
 "freq":88900
},
{
 "word": " YEAST", 
 "freq":121
},
{
 "word": " YEATS", 
 "freq":36
},
{
 "word": " YEGOR", 
 "freq":140
},
{
 "word": " YELLS", 
 "freq":60
},
{
 "word": " YEMEN", 
 "freq":368
},
{
 "word": " YEMMA", 
 "freq":21
},
{
 "word": " YERBA", 
 "freq":70
},
{
 "word": " YERXA", 
 "freq":15
},
{
 "word": " YEUNG", 
 "freq":11
},
{
 "word": " YIELD", 
 "freq":10456
},
{
 "word": " YIGAL", 
 "freq":8
},
{
 "word": " YILIN", 
 "freq":15
},
{
 "word": " YODER", 
 "freq":32
},
{
 "word": " YOLKS", 
 "freq":40
},
{
 "word": " YORAM", 
 "freq":15
},
{
 "word": " YORBA", 
 "freq":22
},
{
 "word": " YOSEF", 
 "freq":77
},
{
 "word": " YOSSI", 
 "freq":137
},
{
 "word": " YOUNG", 
 "freq":13220
},
{
 "word": " YOUNT", 
 "freq":13
},
{
 "word": " YOURS", 
 "freq":202
},
{
 "word": " YOUTH", 
 "freq":2520
},
{
 "word": " YUCCA", 
 "freq":48
},
{
 "word": " YUKIO", 
 "freq":33
},
{
 "word": " YUKON", 
 "freq":70
},
{
 "word": " YUNIS", 
 "freq":84
},
{
 "word": " YUSEF", 
 "freq":35
},
{
 "word": " YUSUF", 
 "freq":87
},
{
 "word": " YUVAL", 
 "freq":24
},
{
 "word": " ZACKS", 
 "freq":182
},
{
 "word": " ZAGAT", 
 "freq":14
},
{
 "word": " ZAGEL", 
 "freq":16
},
{
 "word": " ZAHER", 
 "freq":15
},
{
 "word": " ZAHIR", 
 "freq":52
},
{
 "word": " ZAIRE", 
 "freq":325
},
{
 "word": " ZAKHO", 
 "freq":58
},
{
 "word": " ZANDI", 
 "freq":24
},
{
 "word": " ZANER", 
 "freq":21
},
{
 "word": " ZAPPA", 
 "freq":39
},
{
 "word": " ZARIF", 
 "freq":9
},
{
 "word": " ZAYED", 
 "freq":66
},
{
 "word": " ZAYRE", 
 "freq":85
},
{
 "word": " ZEBRA", 
 "freq":62
},
{
 "word": " ZEDER", 
 "freq":26
},
{
 "word": " ZEESE", 
 "freq":12
},
{
 "word": " ZEIEN", 
 "freq":20
},
{
 "word": " ZEISS", 
 "freq":13
},
{
 "word": " ZELDA", 
 "freq":15
},
{
 "word": " ZELIA", 
 "freq":20
},
{
 "word": " ZEMIN", 
 "freq":72
},
{
 "word": " ZEMKE", 
 "freq":16
},
{
 "word": " ZEROS", 
 "freq":104
},
{
 "word": " ZHANG", 
 "freq":191
},
{
 "word": " ZHENG", 
 "freq":20
},
{
 "word": " ZIGGY", 
 "freq":15
},
{
 "word": " ZILCH", 
 "freq":12
},
{
 "word": " ZILOG", 
 "freq":28
},
{
 "word": " ZIPPY", 
 "freq":17
},
{
 "word": " ZLOTY", 
 "freq":46
},
{
 "word": " ZOBEL", 
 "freq":30
},
{
 "word": " ZOCOR", 
 "freq":15
},
{
 "word": " ZOETE", 
 "freq":185
},
{
 "word": " ZOGBY", 
 "freq":26
},
{
 "word": " ZONED", 
 "freq":43
},
{
 "word": " ZONES", 
 "freq":762
},
{
 "word": " ZORBA", 
 "freq":28
},
{
 "word": " ZORRO", 
 "freq":23
},
{
 "word": " ZORZA", 
 "freq":13
},
{
 "word": " ZUBIN", 
 "freq":32
},
{
 "word": " ZULUS", 
 "freq":119
},
{
 "word": " ZUSEL", 
 "freq":31
},
{
 "word": " ZUYEV", 
 "freq":17
},
{
 "word": " ZVIAD", 
 "freq":30
},
{
 "word": " ZWEIG", 
 "freq":44
},
{
 "word": " ZWICK", 
 "freq":34
},
{
 "word": " ZYCIE", 
 "freq":14
},
{
 "word": " ZYMAN", 
 "freq":16
}];
 return {'dictionary': words};
}]);