var gi=0;
var gcelt=null;
var gpid=null;
var gcountry=null;
var dds={country:null,state:null,city:null,area:null,land:null};
var ddslabel={state:'State',city:'City',area:'Area',land:'Landmark'};
var ddsopt={valueField:'id',labelField:'t',searchField:'t'};
var landmarkcookie={};
var ggetpost={pagin:1,interest:1};
var gsearchposts={};
var listofposts=null;
var gprofile={lid:null,uid:null,landmark:[],interest:[],land:null};
var gpreservelike={l:[],dl:[],st:[]};
function pageredirect(loc){window.location=loc;}
function windowLocation(link){window.location=link;}
function navexpander(){$('body').toggleClass('nav-expanded');}
function navclose(){$('body').removeClass('nav-expanded');}
var ltypeGElt=null;
var gtempelt=null;
var gtempelta=null;
var gtempeltland=null;
var listofcountries={
1:['Afghanistan','93','AF','AFG'],
2:['Albania','355','AL','ALB'],
3:['Algeria','213','DZ','DZA'],
4:['American Samoa','1684','AS','ASM'],
5:['Andorra','376','AD','AND'],
6:['Angola','244','AO','AGO'],
7:['Anguilla','1264','AI','AIA'],
8:['Antarctica','672','AQ','ATA'],
9:['Antigua and Barbuda','1268','AG','ATG'],
10:['Argentina','54','AR','ARG'],
11:['Armenia','374','AM','ARM'],
12:['Aruba','297','AW','ABW'],
13:['Australia','61','AU','AUS'],
14:['Austria','43','AT','AUT'],
15:['Azerbaijan','994','AZ','AZE'],
16:['Bahamas','1242','BS','BHS'],
17:['Bahrain','973','BH','BHR'],
18:['Bangladesh','880','BD','BGD'],
19:['Barbados','1246','BB','BRB'],
20:['Belarus','375','BY','BLR'],
21:['Belgium','32','BE','BEL'],
22:['Belize','501','BZ','BLZ'],
23:['Benin','229','BJ','BEN'],
24:['Bermuda','1441','BM','BMU'],
25:['Bhutan','975','BT','BTN'],
26:['Bolivia','591','BO','BOL'],
27:['Bosnia and Herzegovina','387','BA','BIH'],
28:['Botswana','267','BW','BWA'],
29:['Brazil','55','BR','BRA'],
30:['British Indian Ocean Territory','246','IO','IOT'],
31:['British Virgin Islands','1284','VG','VGB'],
32:['Brunei','673','BN','BRN'],
33:['Bulgaria','359','BG','BGR'],
34:['Burkina Faso','226','BF','BFA'],
35:['Burundi','257','BI','BDI'],
36:['Cambodia','855','KH','KHM'],
37:['Cameroon','237','CM','CMR'],
38:['Canada','1','CA','CAN'],
39:['Cape Verde','238','CV','CPV'],
40:['Cayman Islands','1345','KY','CYM'],
41:['Central African Republic','236','CF','CAF'],
42:['Chad','235','TD','TCD'],
43:['Chile','56','CL','CHL'],
44:['China','86','CN','CHN'],
45:['Christmas Island','61','CX','CXR'],
46:['Cocos Islands','61','CC','CCK'],
47:['Colombia','57','CO','COL'],
48:['Comoros','269','KM','COM'],
49:['Cook Islands','682','CK','COK'],
50:['Costa Rica','506','CR','CRI'],
51:['Croatia','385','HR','HRV'],
52:['Cuba','53','CU','CUB'],
53:['Curacao','599','CW','CUW'],
54:['Cyprus','357','CY','CYP'],
55:['Czech Republic','420','CZ','CZE'],
56:['Democratic Republic of the Congo','243','CD','COD'],
57:['Denmark','45','DK','DNK'],
58:['Djibouti','253','DJ','DJI'],
59:['Dominica','1767','DM','DMA'],
60:['Dominican Republic','1809','DO','DOM'],
61:['East Timor','670','TL','TLS'],
62:['Ecuador','593','EC','ECU'],
63:['Egypt','20','EG','EGY'],
64:['El Salvador','503','SV','SLV'],
65:['Equatorial Guinea','240','GQ','GNQ'],
66:['Eritrea','291','ER','ERI'],
67:['Estonia','372','EE','EST'],
68:['Ethiopia','251','ET','ETH'],
69:['Falkland Islands','500','FK','FLK'],
70:['Faroe Islands','298','FO','FRO'],
71:['Fiji','679','FJ','FJI'],
72:['Finland','358','FI','FIN'],
73:['France','33','FR','FRA'],
74:['French Polynesia','689','PF','PYF'],
75:['Gabon','241','GA','GAB'],
76:['Gambia','220','GM','GMB'],
77:['Georgia','995','GE','GEO'],
78:['Germany','49','DE','DEU'],
79:['Ghana','233','GH','GHA'],
80:['Gibraltar','350','GI','GIB'],
81:['Greece','30','GR','GRC'],
82:['Greenland','299','GL','GRL'],
83:['Grenada','1473','GD','GRD'],
84:['Guam','1671','GU','GUM'],
85:['Guatemala','502','GT','GTM'],
86:['Guernsey','441481','GG','GGY'],
87:['Guinea','224','GN','GIN'],
88:['Guinea-Bissau','245','GW','GNB'],
89:['Guyana','592','GY','GUY'],
90:['Haiti','509','HT','HTI'],
91:['Honduras','504','HN','HND'],
92:['Hong Kong','852','HK','HKG'],
93:['Hungary','36','HU','HUN'],
94:['Iceland','354','IS','ISL'],
95:['India','91','IN','IND'],
96:['Indonesia','62','ID','IDN'],
97:['Iran','98','IR','IRN'],
98:['Iraq','964','IQ','IRQ'],
99:['Ireland','353','IE','IRL'],
100:['Isle of Man','441624','IM','IMN'],
101:['Israel','972','IL','ISR'],
102:['Italy','39','IT','ITA'],
103:['Ivory Coast','225','CI','CIV'],
104:['Jamaica','1876','JM','JAM'],
105:['Japan','81','JP','JPN'],
106:['Jersey','441534','JE','JEY'],
107:['Jordan','962','JO','JOR'],
108:['Kazakhstan','7','KZ','KAZ'],
109:['Kenya','254','KE','KEN'],
110:['Kiribati','686','KI','KIR'],
111:['Kosovo','383','XK','XKX'],
112:['Kuwait','965','KW','KWT'],
113:['Kyrgyzstan','996','KG','KGZ'],
114:['Laos','856','LA','LAO'],
115:['Latvia','371','LV','LVA'],
116:['Lebanon','961','LB','LBN'],
117:['Lesotho','266','LS','LSO'],
118:['Liberia','231','LR','LBR'],
119:['Libya','218','LY','LBY'],
120:['Liechtenstein','423','LI','LIE'],
121:['Lithuania','370','LT','LTU'],
122:['Luxembourg','352','LU','LUX'],
123:['Macao','853','MO','MAC'],
124:['Macedonia','389','MK','MKD'],
125:['Madagascar','261','MG','MDG'],
126:['Malawi','265','MW','MWI'],
127:['Malaysia','60','MY','MYS'],
128:['Maldives','960','MV','MDV'],
129:['Mali','223','ML','MLI'],
130:['Malta','356','MT','MLT'],
131:['Marshall Islands','692','MH','MHL'],
132:['Mauritania','222','MR','MRT'],
133:['Mauritius','230','MU','MUS'],
134:['Mayotte','262','YT','MYT'],
135:['Mexico','52','MX','MEX'],
136:['Micronesia','691','FM','FSM'],
137:['Moldova','373','MD','MDA'],
138:['Monaco','377','MC','MCO'],
139:['Mongolia','976','MN','MNG'],
140:['Montenegro','382','ME','MNE'],
141:['Montserrat','1664','MS','MSR'],
142:['Morocco','212','MA','MAR'],
143:['Mozambique','258','MZ','MOZ'],
144:['Myanmar','95','MM','MMR'],
145:['Namibia','264','NA','NAM'],
146:['Nauru','674','NR','NRU'],
147:['Nepal','977','NP','NPL'],
148:['Netherlands','31','NL','NLD'],
149:['Netherlands Antilles','599','AN','ANT'],
150:['New Caledonia','687','NC','NCL'],
151:['New Zealand','64','NZ','NZL'],
152:['Nicaragua','505','NI','NIC'],
153:['Niger','227','NE','NER'],
154:['Nigeria','234','NG','NGA'],
155:['Niue','683','NU','NIU'],
156:['North Korea','850','KP','PRK'],
157:['Northern Mariana Islands','1670','MP','MNP'],
158:['Norway','47','NO','NOR'],
159:['Oman','968','OM','OMN'],
160:['Pakistan','92','PK','PAK'],
161:['Palau','680','PW','PLW'],
162:['Palestine','970','PS','PSE'],
163:['Panama','507','PA','PAN'],
164:['Papua New Guinea','675','PG','PNG'],
165:['Paraguay','595','PY','PRY'],
166:['Peru','51','PE','PER'],
167:['Philippines','63','PH','PHL'],
168:['Pitcairn','64','PN','PCN'],
169:['Poland','48','PL','POL'],
170:['Portugal','351','PT','PRT'],
171:['Puerto Rico','1787','PR','PRI'],
172:['Qatar','974','QA','QAT'],
173:['Republic of the Congo','242','CG','COG'],
174:['Reunion','262','RE','REU'],
175:['Romania','40','RO','ROU'],
176:['Russia','7','RU','RUS'],
177:['Rwanda','250','RW','RWA'],
178:['Saint Barthelemy','590','BL','BLM'],
179:['Saint Helena','290','SH','SHN'],
180:['Saint Kitts and Nevis','1869','KN','KNA'],
181:['Saint Lucia','1758','LC','LCA'],
182:['Saint Martin','590','MF','MAF'],
183:['Saint Pierre and Miquelon','508','PM','SPM'],
184:['Saint Vincent and the Grenadines','1784','VC','VCT'],
185:['Samoa','685','WS','WSM'],
186:['San Marino','378','SM','SMR'],
187:['Sao Tome and Principe','239','ST','STP'],
188:['Saudi Arabia','966','SA','SAU'],
189:['Senegal','221','SN','SEN'],
190:['Serbia','381','RS','SRB'],
191:['Seychelles','248','SC','SYC'],
192:['Sierra Leone','232','SL','SLE'],
193:['Singapore','65','SG','SGP'],
194:['Sint Maarten','1721','SX','SXM'],
195:['Slovakia','421','SK','SVK'],
196:['Slovenia','386','SI','SVN'],
197:['Solomon Islands','677','SB','SLB'],
198:['Somalia','252','SO','SOM'],
199:['South Africa','27','ZA','ZAF'],
200:['South Korea','82','KR','KOR'],
201:['South Sudan','211','SS','SSD'],
202:['Spain','34','ES','ESP'],
203:['Sri Lanka','94','LK','LKA'],
204:['Sudan','249','SD','SDN'],
205:['Suriname','597','SR','SUR'],
206:['Svalbard and Jan Mayen','47','SJ','SJM'],
207:['Swaziland','268','SZ','SWZ'],
208:['Sweden','46','SE','SWE'],
209:['Switzerland','41','CH','CHE'],
210:['Syria','963','SY','SYR'],
211:['Taiwan','886','TW','TWN'],
212:['Tajikistan','992','TJ','TJK'],
213:['Tanzania','255','TZ','TZA'],
214:['Thailand','66','TH','THA'],
215:['Togo','228','TG','TGO'],
216:['Tokelau','690','TK','TKL'],
217:['Tonga','676','TO','TON'],
218:['Trinidad and Tobago','1868','TT','TTO'],
219:['Tunisia','216','TN','TUN'],
220:['Turkey','90','TR','TUR'],
221:['Turkmenistan','993','TM','TKM'],
222:['Turks and Caicos Islands','1649','TC','TCA'],
223:['Tuvalu','688','TV','TUV'],
224:['U.S. Virgin Islands','1340','VI','VIR'],
225:['Uganda','256','UG','UGA'],
226:['Ukraine','380','UA','UKR'],
227:['United Arab Emirates','971','AE','ARE'],
228:['United Kingdom','44','GB','GBR'],
229:['United States','1','US','USA'],
230:['Uruguay','598','UY','URY'],
231:['Uzbekistan','998','UZ','UZB'],
232:['Vanuatu','678','VU','VUT'],
233:['Vatican','379','VA','VAT'],
234:['Venezuela','58','VE','VEN'],
235:['Vietnam','84','VN','VNM'],
236:['Wallis and Futuna','681','WF','WLF'],
237:['Western Sahara','212','EH','ESH'],
238:['Yemen','967','YE','YEM'],
239:['Zambia','260','ZM','ZMB'],
240:['Zimbabwe','263','ZW','ZWE']
};