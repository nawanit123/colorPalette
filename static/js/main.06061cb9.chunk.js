(this.webpackJsonpcolorpalette=this.webpackJsonpcolorpalette||[]).push([[0],{195:function(e,a,t){e.exports=t.p+"static/media/bg.2493dc44.svg"},222:function(e,a,t){e.exports=t(424)},227:function(e,a,t){},237:function(e,a,t){},423:function(e,a,t){},424:function(e,a,t){"use strict";t.r(a);var o,n,r=t(0),l=t.n(r),c=t(8),i=t.n(c),s=(t(227),t(92)),m=t(42),d=t(43),u=t(77),p=t(47),h=t(46),f=t(192),g=t(33),b=t(425),v=t(13),C=t(58),E=t.n(C),y=function(e){return"@media(max-width: ".concat({xs:575.98,sm:767.98,md:991.98,lg:1199.98,xl:1600}[e],"px)")},x={colorBox:(o={width:" 20%",height:function(e){return e.showAllColors?"25%":"50%"},maxWidth:"100vw",maxHeight:"100vh",display:" inline-block",cursor:" pointer",margin:" 0 auto",position:" relative",textTransform:" uppercase",marginBottom:" -4.5px",color:" rgba(0, 0, 0, 0.5)","&:hover button":{opacity:"1",transition:"0.1s"}},Object(v.a)(o,y(["lg"]),{width:"25%",height:function(e){return e.showAllColors?"20%":"33.3333%"}}),Object(v.a)(o,y(["md"]),{width:"50%",height:function(e){return e.showAllColors?"10%":"20%"}}),Object(v.a)(o,y(["sm"]),{width:"100%",height:function(e){return e.showAllColors?"5%":"10%"}}),o),textStyle:{color:function(e){return E()(e.backgroundColor).luminance()>=.7?"rgba(0,0,0,0.5)":"rgba(255,255,255,0.9)"}},darkColor:{color:function(e){return E()(e.backgroundColor).luminance()<=.08?"rgba(255,255,255,0.9)":"rgba(0,0,0,0.5)"}},seeMoreLink:{color:"white",textDecoration:"none"},seeMore:{backgroundColor:"rgba(255, 255, 255, 0.3)",position:"absolute",border:"none",right:"0px",color:function(e){return E()(e.backgroundColor).luminance()>=.7?"rgba(0,0,0,0.5)":"rgba(255,255,255,0.9)"},bottom:"0px",width:"60px",height:"30px",textAlign:"center",lineHeight:"30px",textDecoration:"none",outline:"none"},copyButton:{position:"absolute",top:"50%",left:"50%",width:"100px",height:"30px",marginLeft:"-50px",marginTop:"-15px",outline:"none",backgroundColor:"rgba(255, 255, 255, 0.3)",fontSize:"1rem",lineHeight:"30px",color:"white",border:"none",textDecoration:"none",textAlign:"center",opacity:"0"},boxContent:{position:"absolute",width:"100%",bottom:"0px",left:"0px",padding:"10px",letterSpacing:"1px",fontSize:"12px"},copyOverlay:{opacity:"0",width:" 100%",height:" 100%",zIndex:"0",transition:"transform 0.6s ease-in-out",transform:"scale(0.1)"},showOverLay:{opacity:"1",transform:"scale(50)",zIndex:"10",position:"absolute"},copyMessage:{position:" fixed",top:" 0",bottom:" 0",left:" 0",right:" 0",display:" flex",alignItems:" center",justifyContent:" center",flexDirection:" column",transform:" scale(0.1)",opacity:" 0","& h1":(n={fontWeight:"400",textShadow:"1px 2px black",background:"rgba(255, 255, 255, 0.2)",width:"100%",fontSize:"8rem",textAlign:"center",marginBottom:"0",padding:"1rem",textTransform:"uppercase"},Object(v.a)(n,y("lg"),{fontSize:"7rem"}),Object(v.a)(n,y("sm"),{fontSize:"6rem"}),n),"& p":{fontSize:"2rem",fontWeight:"100"}},showMessage:{opacity:" 1",transform:" scale(1)",zIndex:" 25",transition:" all 0.4s ease-in-out",transitionDelay:" 0.3s"}},j=function(e){Object(p.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(m.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={copied:!1},e.handleClick=function(){e.setState({copied:!0},(function(){setTimeout((function(){e.setState({copied:!1})}),1500)}))},e}return Object(d.a)(t,[{key:"render",value:function(){var e=this.props,a=e.name,t=e.backgroundColor,o=e.moreURL,n=e.showAllColors,r=e.classes,c=this.state.copied;return l.a.createElement(f.CopyToClipboard,{text:t,onCopy:this.handleClick},l.a.createElement("div",{style:{backgroundColor:t},className:r.colorBox},l.a.createElement("div",{style:{backgroundColor:t},className:"".concat(r.copyOverlay," ").concat(c&&r.showOverLay)}),l.a.createElement("div",{className:"".concat(r.copyMessage," ").concat(c&&r.showMessage," ").concat(r.darkColor)},l.a.createElement("h1",null,"Copied!!!"),l.a.createElement("p",{className:r.copyText},t)),l.a.createElement("div",{className:"copy-container"},l.a.createElement("div",{className:r.boxContent},l.a.createElement("span",{className:r.darkColor},a)),l.a.createElement("button",{className:r.copyButton},"Copy")),n&&l.a.createElement(g.b,{to:o,onClick:function(e){e.stopPropagation()},className:r.seeMoreLink},l.a.createElement("span",{className:r.seeMore},"More"))))}}]),t}(r.Component),w=Object(b.a)(x)(j),O=t(202),k=t(485),N=t(470),S=t(487),P=t(471),B=t(113),F=t.n(B),D=(t(236),{Navbar:{display:"flex",height:"6vh",alignItems:"center",margin:"0.2rem 0"},logo:Object(v.a)({marginRight:"15px",padding:"0 13px",fontSize:"22px",backgroundColor:"#eceff1",fontFamily:"Roboto",height:"100%",display:"flex",alignItems:"center","& a":{textDecoration:"none",color:"black"}},y("xs"),{display:"none"}),slider:Object(v.a)({width:"340px",margin:"0 10px",display:"inline-block","& .rc-slider-track":{backgroundColor:"transparent"},"& .rc-slider-rail":{height:"8px"},"&  .rc-slider-handle,.rc-slider-handle:active,.rc-slider-handle:focus,.rc-slider-handle:hover":{backgroundColor:"green",outline:"none",border:"2px solid green",boxShadow:"none",width:"13px",height:"13px",marginTop:"-2.5px"}},y("md"),{width:"150px"}),selectContainer:{marginLeft:"auto",marginRight:"1rem"}}),A=function(e){Object(p.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(m.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={format:"hex",open:!1},e.handleChange=function(a){e.setState({format:a.target.value,open:!0}),e.props.handleChange(a.target.value)},e.closeSnackbar=function(){e.setState({open:!1})},e}return Object(d.a)(t,[{key:"render",value:function(){var e=this.props,a=e.level,t=e.changeLevel,o=e.showAllColors,n=e.classes,r=this.state.format;return l.a.createElement("header",{className:n.Navbar},l.a.createElement("div",{className:n.logo},l.a.createElement(g.b,{to:"/"},"ColorPalette")),o&&l.a.createElement(l.a.Fragment,null,l.a.createElement("span",null,"Level ",a),l.a.createElement("div",{className:n.slider},l.a.createElement(O.a,{defaultValue:a,min:100,max:900,step:100,onAfterChange:t}))),l.a.createElement("div",{className:n.selectContainer},l.a.createElement(k.a,{value:r,onChange:this.handleChange},l.a.createElement(N.a,{value:"hex"},"HEX - #ffffff"),l.a.createElement(N.a,{value:"rgb"},"RGB - rgb(255,255,255)"),l.a.createElement(N.a,{value:"rgba"},"RGBA -rgba(255,255,255,1.0)"))),l.a.createElement(S.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.open,autoHideDuration:3e3,message:l.a.createElement("span",{id:"message-id"},"Format Changed to ",r.toUpperCase()),ContentProps:{"aria-describedby":"message-id"},onClose:this.closeSnackbar,action:[l.a.createElement(P.a,{onClick:this.closeSnackbar,color:"inherit",key:"close","aria-label":"close"},l.a.createElement(F.a,null))]}))}}]),t}(r.Component),I=Object(b.a)(D)(A),L=Object(b.a)({PaletteFooter:{display:" flex",justifyContent:" flex-end",backgroundColor:" white",height:" 5vh",fontWeight:" bold","& .emoji":{fontSize:"1.5rem",margin:"0 1rem"}}})((function(e){var a=e.paletteName,t=e.emoji,o=e.classes;return l.a.createElement("footer",{className:o.PaletteFooter},a,l.a.createElement("span",{className:"emoji"},t))})),G=function(e){Object(p.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(m.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={level:500,format:"hex"},e.changeLevel=function(a){e.setState({level:a})},e.changeFormat=function(a){e.setState({format:a})},e}return Object(d.a)(t,[{key:"render",value:function(){var e=this,a=this.props.palette,t=a.colors,o=a.paletteName,n=a.emoji,r=a.id,c=this.props,i=c.classes,s=c.history,m=this.state,d=m.level,u=m.format,p=t[d].map((function(a){return l.a.createElement(w,{history:s,backgroundColor:a[u],name:a.name,handleChange:e.changeFormat,key:a.id,moreURL:"/palette/".concat(r,"/").concat(a.id),showAllColors:!0})}));return l.a.createElement("div",{className:i.Palette},l.a.createElement(I,{level:d,changeLevel:this.changeLevel,handleChange:this.changeFormat,showAllColors:!0}),l.a.createElement("div",{className:i.colors},p),l.a.createElement("div",{className:i.goBack},l.a.createElement(g.b,{to:"/",onClick:function(e){e.preventDefault(),s.goBack()}},"GO BACK")),l.a.createElement(L,{paletteName:o,emoji:n}))}}]),t}(r.Component),M=Object(b.a)({Palette:{height:" 100vh",display:" flex",flexDirection:" column",margin:" 0 0.2rem"},colors:{height:"90%"}})(G),R=t(22),T=(t(237),[{paletteName:"Material UI Colors",id:"material-ui-colors",emoji:"\ud83c\udfa8",colors:[{name:"red",color:"#F44336"},{name:"pink",color:"#E91E63"},{name:"purple",color:"#9C27B0"},{name:"deeppurple",color:"#673AB7"},{name:"indigo",color:"#3F51B5"},{name:"blue",color:"#2196F3"},{name:"lightblue",color:"#03A9F4"},{name:"cyan",color:"#00BCD4"},{name:"teal",color:"#009688"},{name:"green",color:"#4CAF50"},{name:"lightgreen",color:"#8BC34A"},{name:"lime",color:"#CDDC39"},{name:"yellow",color:"#FFEB3B"},{name:"amber",color:"#FFC107"},{name:"orange",color:"#FF9800"},{name:"deeporange",color:"#FF5722"},{name:"brown",color:"#795548"},{name:"grey",color:"#9E9E9E"},{name:"bluegrey",color:"#607D8B"}]},{paletteName:"Flat UI Colors v1",id:"flat-ui-colors-v1",emoji:"\ud83e\udd19",colors:[{name:"Turquoise",color:"#1abc9c"},{name:"Emerald",color:"#2ecc71"},{name:"PeterRiver",color:"#3498db"},{name:"Amethyst",color:"#9b59b6"},{name:"WetAsphalt",color:"#34495e"},{name:"GreenSea",color:"#16a085"},{name:"Nephritis",color:"#27ae60"},{name:"BelizeHole",color:"#2980b9"},{name:"Wisteria",color:"#8e44ad"},{name:"MidnightBlue",color:"#2c3e50"},{name:"SunFlower",color:"#f1c40f"},{name:"Carrot",color:"#e67e22"},{name:"Alizarin",color:"#e74c3c"},{name:"Clouds",color:"#ecf0f1"},{name:"Concrete",color:"#95a5a6"},{name:"Orange",color:"#f39c12"},{name:"Pumpkin",color:"#d35400"},{name:"Pomegranate",color:"#c0392b"},{name:"Silver",color:"#bdc3c7"},{name:"Asbestos",color:"#7f8c8d"}]},{paletteName:"Flat UI Colors Dutch",id:"flat-ui-colors-dutch",emoji:"\ud83c\uddf3\ud83c\uddf1",colors:[{name:"Sunflower",color:"#FFC312"},{name:"Energos",color:"#C4E538"},{name:"BlueMartina",color:"#12CBC4"},{name:"LavenderRose",color:"#FDA7DF"},{name:"BaraRose",color:"#ED4C67"},{name:"RadiantYellow",color:"#F79F1F"},{name:"AndroidGreen",color:"#A3CB38"},{name:"MediterraneanSea",color:"#1289A7"},{name:"LavenderTea",color:"#D980FA"},{name:"VerryBerry",color:"#B53471"},{name:"PuffinsBill",color:"#EE5A24"},{name:"PixelatedGrass",color:"#009432"},{name:"MerchantMarineBlue",color:"#0652DD"},{name:"ForgottenPurple",color:"#9980FA"},{name:"HollyHock",color:"#833471"},{name:"RedPigment",color:"#EA2027"},{name:"TurkishAqua",color:"#006266"},{name:"20000LeaguesUnderTheSea",color:"#1B1464"},{name:"CircumorbitalRing",color:"#5758BB"},{name:"MagentaPurple",color:"#6F1E51"}]},{paletteName:"Flat UI Colors American",id:"flat-ui-colors-american",emoji:"\ud83c\uddfa\ud83c\uddf8",colors:[{name:"LightGreenishBlue",color:"#55efc4"},{name:"FadedPoster",color:"#81ecec"},{name:"GreenDarnerTail",color:"#74b9ff"},{name:"ShyMoment",color:"#a29bfe"},{name:"CityLights",color:"#dfe6e9"},{name:"MintLeaf",color:"#00b894"},{name:"RobinsEggBlue",color:"#00cec9"},{name:"ElectronBlue",color:"#0984e3"},{name:"ExodusFruit",color:"#6c5ce7"},{name:"SoothingBreeze",color:"#b2bec3"},{name:"SourLemon",color:"#ffeaa7"},{name:"FirstDate",color:"#fab1a0"},{name:"PinkGlamour",color:"#ff7675"},{name:"Pico8Pink",color:"#fd79a8"},{name:"AmericanRiver",color:"#636e72"},{name:"BrightYarrow",color:"#fdcb6e"},{name:"OrangeVille",color:"#e17055"},{name:"Chi-Gong",color:"#d63031"},{name:"PrunusAvium",color:"#e84393"},{name:"DraculaOrchid",color:"#2d3436"}]},{paletteName:"Flat UI Colors Aussie",id:"flat-ui-colors-aussie",emoji:"\ud83e\udd98",colors:[{name:"Beekeeper",color:"#f6e58d"},{name:"SpicedNectarine",color:"#ffbe76"},{name:"PinkGlamour",color:"#ff7979"},{name:"JuneBud",color:"#badc58"},{name:"CoastalBreeze",color:"#dff9fb"},{name:"Turbo",color:"#f9ca24"},{name:"QuinceJelly",color:"#f0932b"},{name:"CarminePink",color:"#eb4d4b"},{name:"PureApple",color:"#6ab04c"},{name:"HintOfIcePack",color:"#c7ecee"},{name:"MiddleBlue",color:"#7ed6df"},{name:"Heliotrope",color:"#e056fd"},{name:"ExodusFruit",color:"#686de0"},{name:"DeepKoamaru",color:"#30336b"},{name:"SoaringEagle",color:"#95afc0"},{name:"GreenlandGreen",color:"#22a6b3"},{name:"SteelPink",color:"#be2edd"},{name:"Blurple",color:"#4834d4"},{name:"DeepCove",color:"#130f40"},{name:"WizardGrey",color:"#535c68"}]},{paletteName:"Flat UI Colors British",id:"flat-ui-colors-british",emoji:"\ud83c\uddec\ud83c\udde7",colors:[{name:"ProtossPylon",color:"#00a8ff"},{name:"Periwinkle",color:"#9c88ff"},{name:"Rise-N-Shine",color:"#fbc531"},{name:"DownloadProgress",color:"#4cd137"},{name:"Seabrook",color:"#487eb0"},{name:"VanaDylBlue",color:"#0097e6"},{name:"MattPurple",color:"#8c7ae6"},{name:"NanohanachaGold",color:"#e1b12c"},{name:"SkirretGreen",color:"#44bd32"},{name:"Naval",color:"#40739e"},{name:"NasturcianFlower",color:"#e84118"},{name:"LynxWhite",color:"#f5f6fa"},{name:"BlueberrySoda",color:"#7f8fa6"},{name:"MazarineBlue",color:"#273c75"},{name:"BlueNights",color:"#353b48"},{name:"HarleyOrange",color:"#c23616"},{name:"HintOfPensive",color:"#dcdde1"},{name:"ChainGangGrey",color:"#718093"},{name:"PicoVoid",color:"#192a56"},{name:"ElectroMagnetic",color:"#2f3640"}]},{paletteName:"Flat UI Colors Spanish",id:"flat-ui-colors-spanish",emoji:"\ud83c\uddea\ud83c\uddf8",colors:[{name:"JacksonsPurple",color:"#40407a"},{name:"C64Purple",color:"#706fd3"},{name:"SwanWhite",color:"#f7f1e3"},{name:"SummerSky",color:"#34ace0"},{name:"CelestialGreen",color:"#33d9b2"},{name:"LuckyPoint",color:"#2c2c54"},{name:"Liberty",color:"#474787"},{name:"HotStone",color:"#aaa69d"},{name:"DevilBlue",color:"#227093"},{name:"PalmSpringsSplash",color:"#218c74"},{name:"FlourescentRed",color:"#ff5252"},{name:"SyntheticPumpkin",color:"#ff793f"},{name:"CrocodileTooth",color:"#d1ccc0"},{name:"MandarinSorbet",color:"#ffb142"},{name:"SpicedButterNut",color:"#ffda79"},{name:"EyeOfNewt",color:"#b33939"},{name:"ChileanFire",color:"#cd6133"},{name:"GreyPorcelain",color:"#84817a"},{name:"AlamedaOchre",color:"#cc8e35"},{name:"Desert",color:"#ccae62"}]},{paletteName:"Flat UI Colors Indian",id:"flat-ui-colors-indian",emoji:"\ud83c\uddee\ud83c\uddf3",colors:[{name:"OrchidOrange",color:"#FEA47F"},{name:"SpiroDiscoBall",color:"#25CCF7"},{name:"HoneyGlow",color:"#EAB543"},{name:"SweetGarden",color:"#55E6C1"},{name:"FallingStar",color:"#CAD3C8"},{name:"RichGardenia",color:"#F97F51"},{name:"ClearChill",color:"#1B9CFC"},{name:"WhitePepper",color:"#F8EFBA"},{name:"Keppel",color:"#58B19F"},{name:"ShipsOfficer",color:"#2C3A47"},{name:"FieryFuchsia",color:"#B33771"},{name:"BlueBell",color:"#3B3B98"},{name:"GeorgiaPeach",color:"#FD7272"},{name:"OasisStream",color:"#9AECDB"},{name:"BrightUbe",color:"#D6A2E8"},{name:"MagentaPurple",color:"#6D214F"},{name:"EndingNavyBlue",color:"#182C61"},{name:"SasquatchSocks",color:"#FC427B"},{name:"PineGlade",color:"#BDC581"},{name:"HighlighterLavender",color:"#82589F"}]},{paletteName:"Flat UI Colors French",id:"flat-ui-colors-french",emoji:"\ud83c\uddeb\ud83c\uddf7",colors:[{name:"FlatFlesh",color:"#fad390"},{name:"MelonMelody",color:"#f8c291"},{name:"Livid",color:"#6a89cc"},{name:"Spray",color:"#82ccdd"},{name:"ParadiseGreen",color:"#b8e994"},{name:"SquashBlossom",color:"#f6b93b"},{name:"MandarinRed",color:"#e55039"},{name:"AzraqBlue",color:"#4a69bd"},{name:"Dupain",color:"#60a3bc"},{name:"AuroraGreen",color:"#78e08f"},{name:"IcelandPoppy",color:"#fa983a"},{name:"TomatoRed",color:"#eb2f06"},{name:"YueGuangBlue",color:"#1e3799"},{name:"GoodSamaritan",color:"#3c6382"},{name:"Waterfall",color:"#38ada9"},{name:"CarrotOrange",color:"#e58e26"},{name:"JalapenoRed",color:"#b71540"},{name:"DarkSapphire",color:"#0c2461"},{name:"ForestBlues",color:"#0a3d62"},{name:"ReefEncounter",color:"#079992"}]}]),z=t(91),U=[50,100,200,300,400,500,600,700,800,900];function H(e){var a,t={paletteName:e.paletteName,id:e.id,emoji:e.emoji,colors:{}},o=Object(z.a)(U);try{for(o.s();!(a=o.n()).done;){var n=a.value;t.colors[n]=[]}}catch(u){o.e(u)}finally{o.f()}var r,l,c,i=Object(z.a)(e.colors);try{for(i.s();!(r=i.n()).done;)for(var s=r.value,m=(l=s.color,c=10,E.a.scale(function(e){return[E()(e).darken(1.4).hex(),e,"#fff"]}(l)).mode("lab").colors(c)).reverse(),d=0;d<m.length;d++)t.colors[U[d]].push({name:"".concat(s.name," ").concat(U[d]),id:s.name.toLowerCase().replace("/ /g","-"),hex:m[d],rgb:E()(m[d]).css(),rgba:E()(m[d]).css().replace("rgb","rgba").replace(")",", 1.0)")})}catch(u){i.e(u)}finally{i.f()}return t}var W=t(6),q=t(114),V=t.n(q);var J,Y,K,_,Q=Object(W.a)({root:{backgroundColor:"white",border:"1px solid black",borderRadius:"5px",padding:"0.5rem",position:"relative",overflow:"hidden",cursor:"pointer","&:hover svg":{opacity:"1"}},colors:{backgroundColor:"#dae1e4",height:"150px",width:"100%",borderRadius:"5px",overflow:"hidden",display:"flex",flexWrap:"wrap",flexDirection:"flex-start"},title:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"0",color:"black",paddingTop:"0.5rem",fontSize:"1rem",position:"relative"},emoji:{marginLeft:"0.5rem",fontSize:"1.5rem"},miniColor:{flexBasis:"20%",flexGrow:"1"},delete:{},deleteIcon:{position:"absolute",top:"0",right:"0",color:"white",padding:"10px",zIndex:"10",margin:"2px",backgroundColor:"#eb3d30",opacity:0,fontSize:"1.5rem","&:hover":{transform:"scale(1.1)"}}})((function(e){var a=e.classes,t=e.paletteName,o=e.emoji,n=e.colors,c=e.openDialog,i=e.id,s=n.map((function(e){return l.a.createElement("div",{className:a.miniColor,style:{backgroundColor:e.color},key:e.name})})),m=Object(r.useRef)();return l.a.createElement("div",{className:a.root,onClick:e.handleClick,ref:m},l.a.createElement(V.a,{className:a.deleteIcon,styles:{transition:"all .3s ease-in-out"},onClick:function(e){e.stopPropagation(),c(i)}}),l.a.createElement("div",{className:a.colors},s),l.a.createElement("h5",{className:a.title},t," ",l.a.createElement("span",{className:a.emoji},o)))})),X=t(488),$=t(486),Z=t(472),ee=t(473),ae=t(469),te=t(427),oe=t(474),ne=t(489),re=t(475),le=t(196),ce=t.n(le),ie=t(141),se=t.n(ie),me=t(142),de=t.n(me),ue=t(195),pe={"@global":{".fade-exit":{opacity:1},".fade-exit-active":{opacity:0,transition:"opacity 500ms ease-out"}},root:{height:"100vh",overflowY:"auto",display:"flex",alignItems:"flex-start",justifyContent:"center",flexWrap:"wrap",backgroundColor:"#4006aa",backgroundImage:"url(".concat(t.n(ue).a,")")},container:(J={width:"50%",display:"flex",alignItems:"flex-start",flexDirection:"column",flexWrap:"wrap"},Object(v.a)(J,y("xl"),{width:"80%"}),Object(v.a)(J,y("xs"),{width:"70%"}),J),nav:{display:"flex",width:"100%",justifyContent:"space-between",color:"white",alignItems:"center","& a":{color:"white"}},palettes:(Y={boxSizing:"border-box",width:"100%",display:"grid",gridTemplateColumns:"repeat(3, 30%)",columnGap:"2.5rem",rowGap:"5rem"},Object(v.a)(Y,y("md"),{gridTemplateColumns:"repeat(2, 50%)"}),Object(v.a)(Y,y("xs"),{gridTemplateColumns:"repeat(1, 100%)",gridGap:"1rem"}),Y)},he=function(e){Object(p.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(m.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={openDeleteDialogue:!1,deletingId:""},e.openDialog=function(a){e.setState({openDeleteDialogue:!0,deletingId:a})},e.closeDialog=function(){e.setState({openDeleteDialogue:!1,deletingId:""})},e.handleDelete=function(){e.props.deletePalette(e.state.deletingId),e.closeDialog()},e}return Object(d.a)(t,[{key:"goToPalette",value:function(e){this.props.history.push("/palette/".concat(e))}},{key:"render",value:function(){var e=this,a=this.props,t=a.palettes,o=a.classes,n=this.state.openDeleteDialogue;return l.a.createElement("div",{className:o.root},l.a.createElement("div",{className:o.container},l.a.createElement("nav",{className:o.nav},l.a.createElement("h1",null,"React Colors"),l.a.createElement(g.b,{to:"/palette/new"},"Create Palette")),l.a.createElement(X.a,{className:o.palettes},t.map((function(a){return l.a.createElement($.a,{classNames:"fade",key:a.id,timeout:500},l.a.createElement(Q,Object.assign({id:a.id,key:a.id},a,{handleClick:e.goToPalette.bind(e,a.id),openDialog:e.openDialog})))})))),l.a.createElement(Z.a,{open:n,"aria-labelledby":"delete-dialog-title",onClose:this.closeDialog},l.a.createElement(ee.a,{id:"delete-dialog-title"},"Delete the Palette?"),l.a.createElement(ae.a,null,l.a.createElement(te.a,{button:!0,onClick:this.handleDelete},l.a.createElement(oe.a,null,l.a.createElement(ne.a,{style:{backgroundColor:se.a[100],color:se.a[600]}},l.a.createElement(ce.a,null))),l.a.createElement(re.a,{primary:"Delete"})),l.a.createElement(te.a,{button:!0,onClick:this.closeDialog},l.a.createElement(oe.a,null,l.a.createElement(ne.a,{style:{backgroundColor:de.a[100],color:de.a[600]}},l.a.createElement(F.a,null))),l.a.createElement(re.a,{primary:"Cancel"})))))}}]),t}(r.Component),fe=Object(W.a)(pe)(he),ge={Palette:{height:"100vh",display:"flex",flexDirection:"column"},colors:{height:"90%"},goBack:(K={position:"relative",backgroundColor:"black",display:"inline-block",width:"20%",height:"50%",marginBottom:"-4.5px","& a":{position:"absolute",top:"50%",left:"50%",width:"100px",height:"30px",marginLeft:"-50px",marginTop:"-15px",outline:"none",backgroundColor:"rgba(255, 255, 255, 0.3)",fontSize:"1rem",lineHeight:"30px",color:"white",border:"none",textDecoration:"none",textAlign:"center"}},Object(v.a)(K,y(["lg"]),{width:"25%",height:"33.3333%"}),Object(v.a)(K,y(["md"]),{width:"50%",height:"20%"}),Object(v.a)(K,y(["sm"]),{width:"100%",height:"10%"}),K)},be=function(e){Object(p.a)(t,e);var a=Object(h.a)(t);function t(e){var o;return Object(m.a)(this,t),(o=a.call(this,e)).changeFormat=function(e){o.setState({format:e})},o._shade=o.getshade(o.props.palette,o.props.colorId),o.state={format:"hex"},o}return Object(d.a)(t,[{key:"getshade",value:function(e,a){var t,o=[],n=e.colors,r=Object(z.a)(Object.entries(n).map((function(e){return e[0]})));try{for(r.s();!(t=r.n()).done;){var l=t.value;o=o.concat(n[l].filter((function(e){return e.id===a})))}}catch(c){r.e(c)}finally{r.f()}return o.slice(1)}},{key:"render",value:function(){var e=this.props.palette,a=e.paletteName,t=e.emoji,o=this.props,n=o.classes,r=o.history,c=this.state.format,i=this._shade.map((function(e){return l.a.createElement(w,{key:e.name,name:e.name,backgroundColor:e[c],showAllColors:!1})}));return l.a.createElement("div",{className:n.Palette},l.a.createElement(I,{handleChange:this.changeFormat,showAllColors:!1}),l.a.createElement("div",{className:n.colors},i,l.a.createElement("div",{className:n.goBack},l.a.createElement(g.b,{to:"/",onClick:function(e){e.preventDefault(),r.goBack()}},"GO BACK"))),l.a.createElement(L,{paletteName:a,emoji:t}))}}]),t}(r.Component),ve=Object(b.a)(ge)(be),Ce=t(48),Ee=t(5),ye=t(490),xe=t(484),je=t(81),we=t(201),Oe=t.n(we),ke=t(479),Ne=t(115),Se={root:(_={width:"20%",height:"25%",margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-5.5px","&:hover svg":{color:"white",transform:"scale(1.5)"}},Object(v.a)(_,y("lg"),{width:"25%",height:"20%"}),Object(v.a)(_,y("md"),{width:"50%",height:"10%"}),Object(v.a)(_,y("xs"),{width:"100%",height:"5%"}),_),boxContent:{position:"absolute",width:"100%",left:"0px",bottom:"0px",padding:"10px",color:"rgba(0, 0, 0, 0.5)",letterSpacing:"1px",textTransform:"uppercase",fontSize:"12px",display:"flex",justifyContent:"space-between"},deleteIcon:{transition:"all 0.3s ease-in-out"}},Pe=Object(Ne.b)((function(e){var a=e.classes,t=e.handleClick,o=e.name,n=e.color;return l.a.createElement("div",{className:a.root,style:{backgroundColor:n}},l.a.createElement("div",{className:a.boxContent},l.a.createElement("span",null," ",o),l.a.createElement(V.a,{className:a.deleteIcon,onClick:t})))})),Be=Object(b.a)(Se)(Pe),Fe=Object(Ne.a)((function(e){var a=e.colors,t=e.removeColorBox;return l.a.createElement("div",{style:{height:"100%"}},a.map((function(e,a){return l.a.createElement(Be,{distance:1,index:a,key:e.name,color:e.color,name:e.name,handleClick:function(){return t(e.name)}})})))})),De=t(197),Ae=t.n(De),Ie=t(481),Le=t(482),Ge=t(483),Me=t(199),Re=t.n(Me),Te=t(478),ze=t(476),Ue=t(477),He=t(59),We=t(203);t(259);function qe(e){var a=Object(r.useState)(""),t=Object(Ce.a)(a,2),o=t[0],n=t[1],c=e.handleSubmit,i=e.hideForm,s=Object(r.useState)("form"),m=Object(Ce.a)(s,2),d=m[0],u=m[1];Object(r.useEffect)((function(){He.ValidatorForm.addValidationRule("isPaletteNameUnique",(function(a){return e.palettes.every((function(e){return e.paletteName!==a}))}))}),[e.palettes]);return l.a.createElement("div",null,l.a.createElement(Z.a,{open:"emoji"===d,onClose:i},l.a.createElement(ee.a,{id:"form-dialog-title"},"Choose a Palette Emoji"),l.a.createElement(We.a,{onSelect:function(e){var a={paletteName:o,emoji:e.native};c(a),u("")}})),l.a.createElement(Z.a,{open:"form"===d,onClose:i,"aria-labelledby":"form-dialog-title"},l.a.createElement(ee.a,{id:"form-dialog-title"},"Choose A Palette Name"),l.a.createElement(He.ValidatorForm,{onSubmit:function(){u("emoji")}},l.a.createElement(ze.a,null,l.a.createElement(Ue.a,null,"Please enter a name for your new beautiful palette. Make sure it's unique!"),l.a.createElement(He.TextValidator,{label:"PaletteName",value:o,name:"newPaletteName",onChange:function(e){n(e.target.value)},fullWidth:!0,margin:"normal",validators:["required","isPaletteNameUnique"],errorMessages:["Enter a Palette Name","PaletteName must be unique"]})),l.a.createElement(Te.a,null,l.a.createElement(ke.a,{onClick:i,color:"primary"},"Cancel"),l.a.createElement(ke.a,{variant:"contained",color:"primary",type:"submit"},"Save Palette")))))}var Ve=t(480),Je=Object(Ve.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),height:"54px"},appBarShift:{width:"calc(100% - ".concat(400,"px)"),marginLeft:400,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},btnGroup:Object(v.a)({padding:0,marginLeft:"auto",display:"flex","& a":{textDecoration:"none"}},y("xs"),{marginRight:"0.5rem"}),button:Object(v.a)({margin:"0 0.5rem"},y("xs"),{margin:"0 0.2rem",padding:0})}})),Ye=function(e){var a=e.handleDrawerOpen,t=e.open,o=e.handleSubmit,n=e.palettes,c=Je(),i=Object(r.useState)(!1),s=Object(Ce.a)(i,2),m=s[0],d=s[1];return l.a.createElement("div",{className:c.root},l.a.createElement(Ie.a,null),l.a.createElement(Le.a,{position:"fixed",color:"default",className:Object(Ee.a)(c.appBar,Object(v.a)({},c.appBarShift,t))},l.a.createElement(Ge.a,null,l.a.createElement(P.a,{color:"inherit","aria-label":"open drawer",onClick:function(){return a()},edge:"start",className:Object(Ee.a)(c.menuButton,Object(v.a)({},c.hide,t))},l.a.createElement(Re.a,null)),l.a.createElement(je.a,{variant:"h6",noWrap:!0},"Create New Palette"),l.a.createElement("div",{className:c.btnGroup},l.a.createElement(g.b,{to:"/"},l.a.createElement(ke.a,{variant:"contained",color:"secondary",className:c.button},"Go Back")),l.a.createElement(ke.a,{variant:"contained",color:"primary",onClick:function(){d(!0)},className:c.button},"Save")))),m&&l.a.createElement(qe,{handleSubmit:o,classes:c,palettes:n,hideForm:function(){d(!1)}}))},Ke=t(200),_e=Object(Ve.a)((function(e){return{root:{width:"100%",height:"100%"},picker:{width:"100% !important",marginTop:"2rem"},addColor:{width:"100%",padding:"1rem",marginTop:"1rem",fontSize:"2rem"},colorNameInput:{width:"100%",height:"70px"}}})),Qe=function(e){var a=e.paletteFull,t=e.addNewColor,o=e.colors,n=_e(),c=Object(r.useState)({r:0,g:0,b:0,a:1}),i=Object(Ce.a)(c,2),s=i[0],m=i[1],d=Object(r.useState)("#000000"),u=Object(Ce.a)(d,2),p=u[0],h=u[1],f=Object(r.useState)(""),g=Object(Ce.a)(f,2),b=g[0],v=g[1];return Object(r.useEffect)((function(){He.ValidatorForm.addValidationRule("isColorNameUnique",(function(e){return o.every((function(a){return a.name.toLowerCase()!==e.toLowerCase()}))})),He.ValidatorForm.addValidationRule("isColorUnique",(function(e){return o.every((function(e){return e.color!==p}))}))}),[o,p]),l.a.createElement("div",{className:n.root},l.a.createElement(Ke.ChromePicker,{color:s,onChangeComplete:function(e){e.rgb!==s&&(m(e.rgb),h(e.hex))},disableAlpha:!0,className:n.picker}),l.a.createElement(He.ValidatorForm,{onSubmit:function(){t({color:p,name:b}),v("")}},l.a.createElement(He.TextValidator,{name:"newName",value:b,className:n.colorNameInput,placeholder:"Color Name",variant:"filled",margin:"normal",onChange:function(e){v(e.target.value)},validators:["required","isColorNameUnique","isColorUnique"],errorMessages:["Enter a color name","Color name must be unique","Color already used!"]}),l.a.createElement(ke.a,{variant:"contained",type:"submit",color:"primary",className:n.addColor,style:{backgroundColor:p},disabled:a},a?"PALETTE FULL":"Add Color")))},Xe=t(143),$e=Object(Ve.a)((function(e){return{root:{display:"flex"},drawer:{width:400,flexShrink:0,height:"100vh"},drawerPaper:{width:400,display:"flex",alignItems:"center"},drawerHeader:Object(Xe.a)(Object(Xe.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end",width:"100%"}),content:{flexGrow:1,height:"calc(100vh - 64px)",padding:0,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-400},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},container:{width:"90%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center !important",alignItems:"center"},buttons:{width:"100%"},button:{width:"50%"}}}));function Ze(e){var a=$e(),t=Object(r.useState)(!1),o=Object(Ce.a)(t,2),n=o[0],c=o[1],i=Object(r.useState)(e.palettes[0].colors),m=Object(Ce.a)(i,2),d=m[0],u=m[1],p=d.length>=e.maxColors;return l.a.createElement("div",{className:a.root},l.a.createElement(Ye,{open:n,handleDrawerOpen:function(){c(!0)},handleSubmit:function(a){a.id=a.paletteName.toLowerCase().replace(/ /g,"-"),a.colors=d,e.savePalette(a),e.history.push("/")},palettes:e.palettes}),l.a.createElement(ye.a,{className:a.drawer,variant:"persistent",anchor:"left",open:n,classes:{paper:a.drawerPaper}},l.a.createElement("div",{className:a.drawerHeader},l.a.createElement(P.a,{onClick:function(){c(!1)}},l.a.createElement(Oe.a,null))),l.a.createElement(xe.a,null),l.a.createElement("div",{className:a.container},l.a.createElement(je.a,{variant:"h4",gutterBottom:!0},"Design Your Palette"),l.a.createElement("div",{className:a.buttons},l.a.createElement(ke.a,{variant:"contained",className:a.button,color:"secondary",onClick:function(){u([])}},"Clear Palette"),l.a.createElement(ke.a,{variant:"contained",color:"primary",className:a.button,onClick:function(){for(var a=e.palettes.map((function(e){return e.colors})).flat(),t=Math.floor(Math.random()*a.length);d.includes(a[t])&&d.length<=20;)t=Math.floor(Math.random()*a.length);u((function(e){return[].concat(Object(s.a)(e),[a[t]])}))},disabled:p},"Random Color")),l.a.createElement(Qe,{paletteFull:p,addNewColor:function(e){u([].concat(Object(s.a)(d),[e]))},colors:d}))),l.a.createElement("main",{className:Object(Ee.a)(a.content,Object(v.a)({},a.contentShift,n))},l.a.createElement("div",{className:a.drawerHeader}),l.a.createElement(Fe,{colors:d,removeColorBox:function(e){u((function(a){return a.filter((function(a){return a.name!==e}))}))},axis:"xy",onSortEnd:function(e){var a=e.oldIndex,t=e.newIndex;u((function(e){return Ae()(e,a,t)}))},distance:20})))}Ze.defaultProps={maxColors:20};t(423);var ea=function(e){return l.a.createElement("section",{className:"page direction"},e.children)},aa=function(e){Object(p.a)(t,e);var a=Object(h.a)(t);function t(e){var o;Object(m.a)(this,t),(o=a.call(this,e)).getPathDepth=function(e){var a=e.pathname.split("/");return(a=a.filter((function(e){return""!==e}))).length};var n=JSON.parse(window.localStorage.getItem("palettes"));return o.state={palettes:n||T,prevDepth:o.getPathDepth(o.props.location)},o.findPalette=o.findPalette.bind(Object(u.a)(o)),o.savePalette=o.savePalette.bind(Object(u.a)(o)),o.deletePalette=o.deletePalette.bind(Object(u.a)(o)),o}return Object(d.a)(t,[{key:"componentWillReceiveProps",value:function(){this.setState({prevDepth:this.getPathDepth(this.props.location)})}},{key:"findPalette",value:function(e){return this.state.palettes.find((function(a){return a.id===e}))}},{key:"savePalette",value:function(e){this.setState({palettes:[].concat(Object(s.a)(this.state.palettes),[e])},this.syncLocalStorage)}},{key:"deletePalette",value:function(e){this.setState((function(a){return{palettes:a.palettes.filter((function(a){return a.id!==e}))}}),this.syncLocalStorage)}},{key:"syncLocalStorage",value:function(){window.localStorage.setItem("palettes",JSON.stringify(this.state.palettes))}},{key:"render",value:function(){var e=this;return l.a.createElement(R.a,{render:function(a){var t=a.location;return l.a.createElement(X.a,null,l.a.createElement($.a,{key:t.pathname,classNames:"page",timeout:500},l.a.createElement("div",{className:e.getPathDepth(t)-e.state.prevDepth>=0?"left":"right"},l.a.createElement(R.c,{location:t},l.a.createElement(R.a,{exact:!0,path:"/",render:function(a){return l.a.createElement(ea,{location:t},l.a.createElement(fe,Object.assign({palettes:e.state.palettes,deletePalette:e.deletePalette},a)))}}),l.a.createElement(R.a,{exact:!0,path:"/palette/new",render:function(a){return l.a.createElement(ea,{location:t},l.a.createElement(Ze,Object.assign({},a,{savePalette:e.savePalette,palettes:e.state.palettes})))}}),l.a.createElement(R.a,{exact:!0,path:"/palette/:id",render:function(a){return l.a.createElement(ea,{location:t},l.a.createElement(M,Object.assign({},a,{palette:H(e.findPalette(a.match.params.id))})))}}),l.a.createElement(R.a,{exact:!0,path:"/palette/:paletteId/:colorId",render:function(a){return l.a.createElement(ea,{location:t},l.a.createElement(ve,Object.assign({},a,{colorId:a.match.params.colorId,palette:H(e.findPalette(a.match.params.paletteId))})))}})))))}})}}]),t}(r.Component),ta=Object(R.f)(aa);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g.a,null,l.a.createElement(ta,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[222,1,2]]]);
//# sourceMappingURL=main.06061cb9.chunk.js.map