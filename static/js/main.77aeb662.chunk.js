(this.webpackJsonpcolorpalette=this.webpackJsonpcolorpalette||[]).push([[0],{212:function(e,a,t){e.exports=t(413)},217:function(e,a,t){},227:function(e,a,t){},413:function(e,a,t){"use strict";t.r(a);var o=t(0),n=t.n(o),r=t(8),l=t.n(r),c=(t(217),t(89)),i=t(41),s=t(42),m=t(86),d=t(46),u=t(45),p=t(185),h=t(37),f=t(414),g=t(56),b=t.n(g),v={colorBox:{width:" 20%",height:function(e){return e.showAllColors?"25%":"50%"},display:" inline-block",cursor:" pointer",margin:" 0 auto",position:" relative",textTransform:" uppercase",marginBottom:" -4.5px",color:" rgba(0, 0, 0, 0.5)","&:hover button":{opacity:"1",transition:"0.5s"}},textStyle:{color:function(e){return b()(e.backgroundColor).luminance()>=.7?"rgba(0,0,0,0.5)":"rgba(255,255,255,0.9)"}},darkColor:{color:function(e){return b()(e.backgroundColor).luminance()<=.08?"rgba(255,255,255,0.9)":"rgba(0,0,0,0.5)"}},seeMoreLink:{color:"white",textDecoration:"none"},seeMore:{backgroundColor:"rgba(255, 255, 255, 0.3)",position:"absolute",border:"none",right:"0px",color:function(e){return b()(e.backgroundColor).luminance()>=.7?"rgba(0,0,0,0.5)":"rgba(255,255,255,0.9)"},bottom:"0px",width:"60px",height:"30px",textAlign:"center",lineHeight:"30px",textDecoration:"none",outline:"none"},copyButton:{position:"absolute",top:"50%",left:"50%",width:"100px",height:"30px",marginLeft:"-50px",marginTop:"-15px",outline:"none",backgroundColor:"rgba(255, 255, 255, 0.3)",fontSize:"1rem",lineHeight:"30px",color:"white",border:"none",textDecoration:"none",textAlign:"center",opacity:"0"},boxContent:{position:"absolute",width:"100%",bottom:"0px",left:"0px",padding:"10px",letterSpacing:"1px",fontSize:"12px"},copyOverlay:{opacity:"0",width:" 100%",height:" 100%",zIndex:"0",transition:"transform 0.6s ease-in-out",transform:"scale(0.1)"},showOverLay:{opacity:"1",transform:"scale(50)",zIndex:"10",position:"absolute"},copyMessage:{position:" fixed",top:" 0",bottom:" 0",left:" 0",right:" 0",display:" flex",alignItems:" center",justifyContent:" center",flexDirection:" column",fontSize:" 4rem",transform:" scale(0.1)",opacity:" 0","& h1":{fontWeight:"400",textShadow:"1px 2px black",background:"rgba(255, 255, 255, 0.2)",width:"100%",textAlign:"center",marginBottom:"0",padding:"1rem",textTransform:"uppercase"},"& p":{fontSize:"2rem",fontWeight:"100"}},showMessage:{opacity:" 1",transform:" scale(1)",zIndex:" 25",transition:" all 0.4s ease-in-out",transitionDelay:" 0.3s"}},C=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(i.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={copied:!1},e.handleClick=function(){e.setState({copied:!0},(function(){setTimeout((function(){e.setState({copied:!1})}),1500)}))},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this.props,a=e.name,t=e.backgroundColor,o=e.moreURL,r=e.showAllColors,l=e.classes,c=this.state.copied;return n.a.createElement(p.CopyToClipboard,{text:t,onCopy:this.handleClick},n.a.createElement("div",{style:{backgroundColor:t},className:l.colorBox},n.a.createElement("div",{style:{backgroundColor:t},className:"".concat(l.copyOverlay," ").concat(c&&l.showOverLay)}),n.a.createElement("div",{className:"".concat(l.copyMessage," ").concat(c&&l.showMessage," ").concat(l.darkColor)},n.a.createElement("h1",null,"Copied!!!"),n.a.createElement("p",{className:l.copyText},t)),n.a.createElement("div",{className:"copy-container"},n.a.createElement("div",{className:l.boxContent},n.a.createElement("span",{className:l.darkColor},a)),n.a.createElement("button",{className:l.copyButton},"Copy")),r&&n.a.createElement(h.b,{to:o,onClick:function(e){return e.stopPropagation()},className:l.seeMoreLink},n.a.createElement("span",{className:l.seeMore},"More"))))}}]),t}(o.Component),E=Object(f.a)(v)(C),y=t(194),x=t(471),w=t(474),j=t(472),k=t(459),N=t(188),O=t.n(N),S=(t(226),function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(i.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={format:"hex",open:!1},e.handleChange=function(a){e.setState({format:a.target.value,open:!0}),e.props.handleChange(a.target.value)},e.closeSnackbar=function(){e.setState({open:!1})},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this.props,a=e.level,t=e.changeLevel,o=e.showAllColors,r=e.classes,l=this.state.format;return n.a.createElement("header",{className:r.Navbar},n.a.createElement("div",{className:r.logo},n.a.createElement(h.b,{to:"/"},"ColorPalette")),o&&n.a.createElement(n.a.Fragment,null,n.a.createElement("span",null,"Level ",a),n.a.createElement("div",{className:r.slider},n.a.createElement(y.a,{defaultValue:a,min:100,max:900,step:100,onAfterChange:t}))),n.a.createElement("div",{className:r.selectContainer},n.a.createElement(x.a,{value:l,onChange:this.handleChange},n.a.createElement(w.a,{value:"hex"},"HEX - #ffffff"),n.a.createElement(w.a,{value:"rgb"},"RGB - rgb(255,255,255)"),n.a.createElement(w.a,{value:"rgba"},"RGBA -rgba(255,255,255,1.0)"))),n.a.createElement(j.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.open,autoHideDuration:3e3,message:n.a.createElement("span",{id:"message-id"},"Format Changed to ",l.toUpperCase()),ContentProps:{"aria-describedby":"message-id"},onClose:this.closeSnackbar,action:[n.a.createElement(k.a,{onClick:this.closeSnackbar,color:"inherit",key:"close","aria-label":"close"},n.a.createElement(O.a,null))]}))}}]),t}(o.Component)),B=Object(f.a)({Navbar:{display:"flex",height:"6vh",alignItems:"center"},logo:{marginRight:"15px",padding:"0 13px",fontSize:"22px",backgroundColor:"#eceff1",fontFamily:"Roboto",height:"100%",display:"flex",alignItems:"center","& a":{textDecoration:"none",color:"black"}},slider:{width:"340px",margin:"0 10px",display:"inline-block","& .rc-slider-track":{backgroundColor:"transparent"},"& .rc-slider-rail":{height:"8px"},"&  .rc-slider-handle,.rc-slider-handle:active,.rc-slider-handle:focus,.rc-slider-handle:hover":{backgroundColor:"green",outline:"none",border:"2px solid green",boxShadow:"none",width:"13px",height:"13px",marginTop:"-2.5px"}},selectContainer:{marginLeft:"auto",marginRight:"1rem"}})(S),F=Object(f.a)({PaletteFooter:{display:" flex",justifyContent:" flex-end",backgroundColor:" white",height:" 5vh",fontWeight:" bold","& .emoji":{fontSize:"1.5rem",margin:"0 1rem"}}})((function(e){var a=e.paletteName,t=e.emoji,o=e.classes;return n.a.createElement("footer",{className:o.PaletteFooter},a,n.a.createElement("span",{className:"emoji"},t))})),P=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(i.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={level:500,format:"hex"},e.changeLevel=function(a){e.setState({level:a})},e.changeFormat=function(a){e.setState({format:a})},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this,a=this.props.palette,t=a.colors,o=a.paletteName,r=a.emoji,l=a.id,c=this.props.classes,i=this.state,s=i.level,m=i.format,d=t[s].map((function(a){return n.a.createElement(E,{backgroundColor:a[m],name:a.name,handleChange:e.changeFormat,key:a.id,moreURL:"/palette/".concat(l,"/").concat(a.id),showAllColors:!0})}));return n.a.createElement("div",{className:c.Palette},n.a.createElement(B,{level:s,changeLevel:this.changeLevel,handleChange:this.changeFormat,showAllColors:!0}),n.a.createElement("div",{className:c.colors},d),n.a.createElement(F,{paletteName:o,emoji:r}))}}]),t}(o.Component),A=Object(f.a)({Palette:{height:" 100vh",display:" flex",flexDirection:" column",margin:" 0 0.2rem"},colors:{height:"90%"}})(P),D=t(20),I=(t(227),[{paletteName:"Material UI Colors",id:"material-ui-colors",emoji:"\ud83c\udfa8",colors:[{name:"red",color:"#F44336"},{name:"pink",color:"#E91E63"},{name:"purple",color:"#9C27B0"},{name:"deeppurple",color:"#673AB7"},{name:"indigo",color:"#3F51B5"},{name:"blue",color:"#2196F3"},{name:"lightblue",color:"#03A9F4"},{name:"cyan",color:"#00BCD4"},{name:"teal",color:"#009688"},{name:"green",color:"#4CAF50"},{name:"lightgreen",color:"#8BC34A"},{name:"lime",color:"#CDDC39"},{name:"yellow",color:"#FFEB3B"},{name:"amber",color:"#FFC107"},{name:"orange",color:"#FF9800"},{name:"deeporange",color:"#FF5722"},{name:"brown",color:"#795548"},{name:"grey",color:"#9E9E9E"},{name:"bluegrey",color:"#607D8B"}]},{paletteName:"Flat UI Colors v1",id:"flat-ui-colors-v1",emoji:"\ud83e\udd19",colors:[{name:"Turquoise",color:"#1abc9c"},{name:"Emerald",color:"#2ecc71"},{name:"PeterRiver",color:"#3498db"},{name:"Amethyst",color:"#9b59b6"},{name:"WetAsphalt",color:"#34495e"},{name:"GreenSea",color:"#16a085"},{name:"Nephritis",color:"#27ae60"},{name:"BelizeHole",color:"#2980b9"},{name:"Wisteria",color:"#8e44ad"},{name:"MidnightBlue",color:"#2c3e50"},{name:"SunFlower",color:"#f1c40f"},{name:"Carrot",color:"#e67e22"},{name:"Alizarin",color:"#e74c3c"},{name:"Clouds",color:"#ecf0f1"},{name:"Concrete",color:"#95a5a6"},{name:"Orange",color:"#f39c12"},{name:"Pumpkin",color:"#d35400"},{name:"Pomegranate",color:"#c0392b"},{name:"Silver",color:"#bdc3c7"},{name:"Asbestos",color:"#7f8c8d"}]},{paletteName:"Flat UI Colors Dutch",id:"flat-ui-colors-dutch",emoji:"\ud83c\uddf3\ud83c\uddf1",colors:[{name:"Sunflower",color:"#FFC312"},{name:"Energos",color:"#C4E538"},{name:"BlueMartina",color:"#12CBC4"},{name:"LavenderRose",color:"#FDA7DF"},{name:"BaraRose",color:"#ED4C67"},{name:"RadiantYellow",color:"#F79F1F"},{name:"AndroidGreen",color:"#A3CB38"},{name:"MediterraneanSea",color:"#1289A7"},{name:"LavenderTea",color:"#D980FA"},{name:"VerryBerry",color:"#B53471"},{name:"PuffinsBill",color:"#EE5A24"},{name:"PixelatedGrass",color:"#009432"},{name:"MerchantMarineBlue",color:"#0652DD"},{name:"ForgottenPurple",color:"#9980FA"},{name:"HollyHock",color:"#833471"},{name:"RedPigment",color:"#EA2027"},{name:"TurkishAqua",color:"#006266"},{name:"20000LeaguesUnderTheSea",color:"#1B1464"},{name:"CircumorbitalRing",color:"#5758BB"},{name:"MagentaPurple",color:"#6F1E51"}]},{paletteName:"Flat UI Colors American",id:"flat-ui-colors-american",emoji:"\ud83c\uddfa\ud83c\uddf8",colors:[{name:"LightGreenishBlue",color:"#55efc4"},{name:"FadedPoster",color:"#81ecec"},{name:"GreenDarnerTail",color:"#74b9ff"},{name:"ShyMoment",color:"#a29bfe"},{name:"CityLights",color:"#dfe6e9"},{name:"MintLeaf",color:"#00b894"},{name:"RobinsEggBlue",color:"#00cec9"},{name:"ElectronBlue",color:"#0984e3"},{name:"ExodusFruit",color:"#6c5ce7"},{name:"SoothingBreeze",color:"#b2bec3"},{name:"SourLemon",color:"#ffeaa7"},{name:"FirstDate",color:"#fab1a0"},{name:"PinkGlamour",color:"#ff7675"},{name:"Pico8Pink",color:"#fd79a8"},{name:"AmericanRiver",color:"#636e72"},{name:"BrightYarrow",color:"#fdcb6e"},{name:"OrangeVille",color:"#e17055"},{name:"Chi-Gong",color:"#d63031"},{name:"PrunusAvium",color:"#e84393"},{name:"DraculaOrchid",color:"#2d3436"}]},{paletteName:"Flat UI Colors Aussie",id:"flat-ui-colors-aussie",emoji:"\ud83e\udd98",colors:[{name:"Beekeeper",color:"#f6e58d"},{name:"SpicedNectarine",color:"#ffbe76"},{name:"PinkGlamour",color:"#ff7979"},{name:"JuneBud",color:"#badc58"},{name:"CoastalBreeze",color:"#dff9fb"},{name:"Turbo",color:"#f9ca24"},{name:"QuinceJelly",color:"#f0932b"},{name:"CarminePink",color:"#eb4d4b"},{name:"PureApple",color:"#6ab04c"},{name:"HintOfIcePack",color:"#c7ecee"},{name:"MiddleBlue",color:"#7ed6df"},{name:"Heliotrope",color:"#e056fd"},{name:"ExodusFruit",color:"#686de0"},{name:"DeepKoamaru",color:"#30336b"},{name:"SoaringEagle",color:"#95afc0"},{name:"GreenlandGreen",color:"#22a6b3"},{name:"SteelPink",color:"#be2edd"},{name:"Blurple",color:"#4834d4"},{name:"DeepCove",color:"#130f40"},{name:"WizardGrey",color:"#535c68"}]},{paletteName:"Flat UI Colors British",id:"flat-ui-colors-british",emoji:"\ud83c\uddec\ud83c\udde7",colors:[{name:"ProtossPylon",color:"#00a8ff"},{name:"Periwinkle",color:"#9c88ff"},{name:"Rise-N-Shine",color:"#fbc531"},{name:"DownloadProgress",color:"#4cd137"},{name:"Seabrook",color:"#487eb0"},{name:"VanaDylBlue",color:"#0097e6"},{name:"MattPurple",color:"#8c7ae6"},{name:"NanohanachaGold",color:"#e1b12c"},{name:"SkirretGreen",color:"#44bd32"},{name:"Naval",color:"#40739e"},{name:"NasturcianFlower",color:"#e84118"},{name:"LynxWhite",color:"#f5f6fa"},{name:"BlueberrySoda",color:"#7f8fa6"},{name:"MazarineBlue",color:"#273c75"},{name:"BlueNights",color:"#353b48"},{name:"HarleyOrange",color:"#c23616"},{name:"HintOfPensive",color:"#dcdde1"},{name:"ChainGangGrey",color:"#718093"},{name:"PicoVoid",color:"#192a56"},{name:"ElectroMagnetic",color:"#2f3640"}]},{paletteName:"Flat UI Colors Spanish",id:"flat-ui-colors-spanish",emoji:"\ud83c\uddea\ud83c\uddf8",colors:[{name:"JacksonsPurple",color:"#40407a"},{name:"C64Purple",color:"#706fd3"},{name:"SwanWhite",color:"#f7f1e3"},{name:"SummerSky",color:"#34ace0"},{name:"CelestialGreen",color:"#33d9b2"},{name:"LuckyPoint",color:"#2c2c54"},{name:"Liberty",color:"#474787"},{name:"HotStone",color:"#aaa69d"},{name:"DevilBlue",color:"#227093"},{name:"PalmSpringsSplash",color:"#218c74"},{name:"FlourescentRed",color:"#ff5252"},{name:"SyntheticPumpkin",color:"#ff793f"},{name:"CrocodileTooth",color:"#d1ccc0"},{name:"MandarinSorbet",color:"#ffb142"},{name:"SpicedButterNut",color:"#ffda79"},{name:"EyeOfNewt",color:"#b33939"},{name:"ChileanFire",color:"#cd6133"},{name:"GreyPorcelain",color:"#84817a"},{name:"AlamedaOchre",color:"#cc8e35"},{name:"Desert",color:"#ccae62"}]},{paletteName:"Flat UI Colors Indian",id:"flat-ui-colors-indian",emoji:"\ud83c\uddee\ud83c\uddf3",colors:[{name:"OrchidOrange",color:"#FEA47F"},{name:"SpiroDiscoBall",color:"#25CCF7"},{name:"HoneyGlow",color:"#EAB543"},{name:"SweetGarden",color:"#55E6C1"},{name:"FallingStar",color:"#CAD3C8"},{name:"RichGardenia",color:"#F97F51"},{name:"ClearChill",color:"#1B9CFC"},{name:"WhitePepper",color:"#F8EFBA"},{name:"Keppel",color:"#58B19F"},{name:"ShipsOfficer",color:"#2C3A47"},{name:"FieryFuchsia",color:"#B33771"},{name:"BlueBell",color:"#3B3B98"},{name:"GeorgiaPeach",color:"#FD7272"},{name:"OasisStream",color:"#9AECDB"},{name:"BrightUbe",color:"#D6A2E8"},{name:"MagentaPurple",color:"#6D214F"},{name:"EndingNavyBlue",color:"#182C61"},{name:"SasquatchSocks",color:"#FC427B"},{name:"PineGlade",color:"#BDC581"},{name:"HighlighterLavender",color:"#82589F"}]},{paletteName:"Flat UI Colors French",id:"flat-ui-colors-french",emoji:"\ud83c\uddeb\ud83c\uddf7",colors:[{name:"FlatFlesh",color:"#fad390"},{name:"MelonMelody",color:"#f8c291"},{name:"Livid",color:"#6a89cc"},{name:"Spray",color:"#82ccdd"},{name:"ParadiseGreen",color:"#b8e994"},{name:"SquashBlossom",color:"#f6b93b"},{name:"MandarinRed",color:"#e55039"},{name:"AzraqBlue",color:"#4a69bd"},{name:"Dupain",color:"#60a3bc"},{name:"AuroraGreen",color:"#78e08f"},{name:"IcelandPoppy",color:"#fa983a"},{name:"TomatoRed",color:"#eb2f06"},{name:"YueGuangBlue",color:"#1e3799"},{name:"GoodSamaritan",color:"#3c6382"},{name:"Waterfall",color:"#38ada9"},{name:"CarrotOrange",color:"#e58e26"},{name:"JalapenoRed",color:"#b71540"},{name:"DarkSapphire",color:"#0c2461"},{name:"ForestBlues",color:"#0a3d62"},{name:"ReefEncounter",color:"#079992"}]}]),L=t(88),G=[50,100,200,300,400,500,600,700,800,900];function M(e){var a,t={paletteName:e.paletteName,id:e.id,emoji:e.emoji,colors:{}},o=Object(L.a)(G);try{for(o.s();!(a=o.n()).done;){var n=a.value;t.colors[n]=[]}}catch(u){o.e(u)}finally{o.f()}var r,l,c,i=Object(L.a)(e.colors);try{for(i.s();!(r=i.n()).done;)for(var s=r.value,m=(l=s.color,c=10,b.a.scale(function(e){return[b()(e).darken(1.4).hex(),e,"#fff"]}(l)).mode("lab").colors(c)).reverse(),d=0;d<m.length;d++)t.colors[G[d]].push({name:"".concat(s.name," ").concat(G[d]),id:s.name.toLowerCase().replace("/ /g","-"),hex:m[d],rgb:b()(m[d]).css(),rgba:b()(m[d]).css().replace("rgb","rgba").replace(")",", 1.0)")})}catch(u){i.e(u)}finally{i.f()}return t}var R=t(6),T=t(108),z=t.n(T);var U=Object(R.a)({root:{backgroundColor:"white",border:"1px solid black",borderRadius:"5px",padding:"0.5rem",position:"relative",overflow:"hidden",cursor:"pointer","&:hover svg":{opacity:"1"}},colors:{backgroundColor:"#dae1e4",height:"150px",width:"100%",borderRadius:"5px",overflow:"hidden",display:"flex",flexWrap:"wrap",flexDirection:"flex-start"},title:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"0",color:"black",paddingTop:"0.5rem",fontSize:"1rem",position:"relative"},emoji:{marginLeft:"0.5rem",fontSize:"1.5rem"},miniColor:{flexBasis:"20%",flexGrow:"1"},delete:{},deleteIcon:{position:"absolute",top:"0",right:"0",color:"white",padding:"10px",zIndex:"10",margin:"2px",backgroundColor:"#eb3d30",opacity:0,"&:hover":{transform:"scale(1.1)"}}})((function(e){var a=e.classes,t=e.paletteName,r=e.emoji,l=e.colors.map((function(e){return n.a.createElement("div",{className:a.miniColor,style:{backgroundColor:e.color},key:e.name})})),c=Object(o.createRef)();return n.a.createElement("div",{className:a.root,onClick:e.handleClick,ref:c},n.a.createElement(z.a,{className:a.deleteIcon,styles:{transition:"all .3s ease-in-out"}}),n.a.createElement("div",{className:a.colors},l),n.a.createElement("h5",{className:a.title},t," ",n.a.createElement("span",{className:a.emoji},r)))})),H=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(i.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={},e}return Object(s.a)(t,[{key:"goToPalette",value:function(e){this.props.history.push("/palette/".concat(e))}},{key:"render",value:function(){var e=this,a=this.props,t=a.palettes,o=a.classes;return n.a.createElement("div",{className:o.root},n.a.createElement("div",{className:o.container},n.a.createElement("nav",{className:o.nav},n.a.createElement("h1",null,"React Colors"),n.a.createElement(h.b,{to:"/palette/new"},"Create Palette")),n.a.createElement("div",{className:o.palettes},t.map((function(a){return n.a.createElement(U,Object.assign({key:a.id},a,{handleClick:e.goToPalette.bind(e,a.id)}))})))))}}]),t}(o.Component),q=Object(R.a)({root:{backgroundColor:"blue",height:"100vh",overflowY:"auto",display:"flex",alignItems:"flex-start",justifyContent:"center"},container:{width:"50%",display:"flex",alignItems:"flex-start",flexDirection:"column",flexWrap:"wrap"},nav:{display:"flex",width:"100%",justifyContent:"space-between",color:"white",alignItems:"center","& a":{color:"white"}},palettes:{boxSizing:"border-box",width:"100%",display:"grid",gridTemplateColumns:"repeat(3, 30%)",columnGap:"5%",rowGap:"5%"}})(H),W=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(e){var o;return Object(i.a)(this,t),(o=a.call(this,e)).changeFormat=function(e){o.setState({format:e})},o._shade=o.getshade(o.props.palette,o.props.colorId),o.state={format:"hex"},o}return Object(s.a)(t,[{key:"getshade",value:function(e,a){var t,o=[],n=e.colors,r=Object(L.a)(Object.entries(n).map((function(e){return e[0]})));try{for(r.s();!(t=r.n()).done;){var l=t.value;o=o.concat(n[l].filter((function(e){return e.id===a})))}}catch(c){r.e(c)}finally{r.f()}return o.slice(1)}},{key:"render",value:function(){var e=this.props.palette,a=e.paletteName,t=e.emoji,o=e.id,r=this.props.classes,l=this.state.format,c=this._shade.map((function(e){return n.a.createElement(E,{key:e.name,name:e.name,backgroundColor:e[l],showAllColors:!1})}));return n.a.createElement("div",{className:r.Palette},n.a.createElement(B,{handleChange:this.changeFormat,showAllColors:!1}),n.a.createElement("div",{className:r.colors},c,n.a.createElement("div",{className:r.goBack},n.a.createElement(h.b,{to:"/palette/".concat(o)},"GO BACK"))),n.a.createElement(F,{paletteName:a,emoji:t}))}}]),t}(o.Component),V=Object(f.a)({Palette:{height:"100vh",display:"flex",flexDirection:"column"},colors:{height:"90%"},goBack:{position:"relative",backgroundColor:"black",display:"inline-block",width:"20%",height:"50%",marginBottom:"-4.5px","& a":{position:"absolute",top:"50%",left:"50%",width:"100px",height:"30px",marginLeft:"-50px",marginTop:"-15px",outline:"none",backgroundColor:"rgba(255, 255, 255, 0.3)",fontSize:"1rem",lineHeight:"30px",color:"white",border:"none",textDecoration:"none",textAlign:"center"}}})(W),J=t(68),Y=t(47),K=t(5),_=t(473),Q=t(470),X=t(199),$=t(193),Z=t.n($),ee=t(465),ae=t(109),te={root:{width:"20%",height:"25%",margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-5.5px","&:hover svg":{color:"white",transform:"scale(1.5)"}},boxContent:{position:"absolute",width:"100%",left:"0px",bottom:"0px",padding:"10px",color:"rgba(0, 0, 0, 0.5)",letterSpacing:"1px",textTransform:"uppercase",fontSize:"12px",display:"flex",justifyContent:"space-between"},deleteIcon:{transition:"all 0.3s ease-in-out"}},oe=Object(ae.b)((function(e){var a=e.classes,t=e.handleClick,o=e.name,r=e.color;return n.a.createElement("div",{className:a.root,style:{backgroundColor:r}},n.a.createElement("div",{className:a.boxContent},n.a.createElement("span",null," ",o),n.a.createElement(z.a,{className:a.deleteIcon,onClick:t})))})),ne=Object(f.a)(te)(oe),re=Object(ae.a)((function(e){var a=e.colors,t=e.removeColorBox;return n.a.createElement("div",{style:{height:"100%"}},a.map((function(e,a){return n.a.createElement(ne,{distance:1,index:a,key:e.name,color:e.color,name:e.name,handleClick:function(){return t(e.name)}})})))})),le=t(189),ce=t.n(le),ie=t(467),se=t(468),me=t(469),de=t(191),ue=t.n(de),pe=t(460),he=t(464),fe=t(462),ge=t(463),be=t(461),ve=t(57),Ce=t(195);t(249);function Ee(e){var a=Object(o.useState)(""),t=Object(Y.a)(a,2),r=t[0],l=t[1],c=e.handleSubmit,i=e.hideForm,s=Object(o.useState)("form"),m=Object(Y.a)(s,2),d=m[0],u=m[1];Object(o.useEffect)((function(){ve.ValidatorForm.addValidationRule("isPaletteNameUnique",(function(a){return e.palettes.every((function(e){return e.paletteName!==a}))}))}),[e.palettes]);return n.a.createElement("div",null,n.a.createElement(pe.a,{open:"emoji"===d,onClose:i},n.a.createElement(be.a,{id:"form-dialog-title"},"Choose a Palette Emoji"),n.a.createElement(Ce.a,{onSelect:function(e){var a={paletteName:r,emoji:e.native};c(a)}})),n.a.createElement(pe.a,{open:"form"===d,onClose:i,"aria-labelledby":"form-dialog-title"},n.a.createElement(be.a,{id:"form-dialog-title"},"Choose A Palette Name"),n.a.createElement(ve.ValidatorForm,{onSubmit:function(){u("emoji")}},n.a.createElement(fe.a,null,n.a.createElement(ge.a,null,"Please enter a name for your new beautiful palette. Make sure it's unique!"),n.a.createElement(ve.TextValidator,{label:"PaletteName",value:r,name:"newPaletteName",onChange:function(e){l(e.target.value)},fullWidth:!0,margin:"normal",validators:["required","isPaletteNameUnique"],errorMessages:["Enter a Palette Name","PaletteName must be unique"]})),n.a.createElement(he.a,null,n.a.createElement(ee.a,{onClick:i,color:"primary"},"Cancel"),n.a.createElement(ee.a,{variant:"contained",color:"primary",type:"submit"},"Save Palette")))))}var ye=t(466),xe=Object(ye.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),height:"54px"},appBarShift:{width:"calc(100% - ".concat(400,"px)"),marginLeft:400,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},btnGroup:{marginLeft:"auto",display:"flex","& a":{textDecoration:"none"}}}})),we=function(e){var a=e.handleDrawerOpen,t=e.open,r=e.handleSubmit,l=e.palettes,c=xe(),i=Object(o.useState)(!1),s=Object(Y.a)(i,2),m=s[0],d=s[1];return n.a.createElement("div",{className:c.root},n.a.createElement(ie.a,null),n.a.createElement(se.a,{position:"fixed",color:"default",className:Object(K.a)(c.appBar,Object(J.a)({},c.appBarShift,t))},n.a.createElement(me.a,null,n.a.createElement(k.a,{color:"inherit","aria-label":"open drawer",onClick:function(){return a()},edge:"start",className:Object(K.a)(c.menuButton,Object(J.a)({},c.hide,t))},n.a.createElement(ue.a,null)),n.a.createElement(X.a,{variant:"h6",noWrap:!0},"Create New Palette"),n.a.createElement("div",{className:c.btnGroup},n.a.createElement(h.b,{to:"/"},n.a.createElement(ee.a,{variant:"contained",color:"secondary"},"Go Back")),n.a.createElement(ee.a,{variant:"contained",color:"primary",onClick:function(){d(!0)},className:c.button},"Save")))),m&&n.a.createElement(Ee,{handleSubmit:r,classes:c,palettes:l,hideForm:function(){d(!1)}}))},je=t(192),ke=Object(ye.a)((function(e){return{root:{width:"100%",height:"100%"},picker:{width:"100% !important",marginTop:"2rem"},addColor:{width:"100%",padding:"1rem",marginTop:"1rem",fontSize:"2rem"},colorNameInput:{width:"100%",height:"70px"}}})),Ne=function(e){var a=e.paletteFull,t=e.addNewColor,r=e.colors,l=ke(),c=Object(o.useState)({r:0,g:0,b:0,a:1}),i=Object(Y.a)(c,2),s=i[0],m=i[1],d=Object(o.useState)("#000000"),u=Object(Y.a)(d,2),p=u[0],h=u[1],f=Object(o.useState)(""),g=Object(Y.a)(f,2),b=g[0],v=g[1];return Object(o.useEffect)((function(){ve.ValidatorForm.addValidationRule("isColorNameUnique",(function(e){return r.every((function(a){return a.name.toLowerCase()!==e.toLowerCase()}))})),ve.ValidatorForm.addValidationRule("isColorUnique",(function(e){return r.every((function(e){return e.color!==p}))}))}),[r,p]),n.a.createElement("div",{className:l.root},n.a.createElement(je.ChromePicker,{color:s,onChangeComplete:function(e){e.rgb!==s&&(m(e.rgb),h(e.hex))},disableAlpha:!0,className:l.picker}),n.a.createElement(ve.ValidatorForm,{onSubmit:function(){t({color:p,name:b}),v("")}},n.a.createElement(ve.TextValidator,{name:"newName",value:b,className:l.colorNameInput,placeholder:"Color Name",variant:"filled",margin:"normal",onChange:function(e){v(e.target.value)},validators:["required","isColorNameUnique","isColorUnique"],errorMessages:["Enter a color name","Color name must be unique","Color already used!"]}),n.a.createElement(ee.a,{variant:"contained",type:"submit",color:"primary",className:l.addColor,style:{backgroundColor:p},disabled:a},a?"PALETTE FULL":"Add Color")))},Oe=t(136),Se=Object(ye.a)((function(e){return{root:{display:"flex"},drawer:{width:400,flexShrink:0,height:"100vh"},drawerPaper:{width:400,display:"flex",alignItems:"center"},drawerHeader:Object(Oe.a)(Object(Oe.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end",width:"100%"}),content:{flexGrow:1,height:"calc(100vh - 64px)",padding:0,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-400},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},container:{width:"90%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center !important",alignItems:"center"},buttons:{width:"100%"},button:{width:"50%"}}}));function Be(e){var a=Se(),t=Object(o.useState)(!1),r=Object(Y.a)(t,2),l=r[0],i=r[1],s=Object(o.useState)(e.palettes[0].colors),m=Object(Y.a)(s,2),d=m[0],u=m[1],p=d.length>=e.maxColors;return n.a.createElement("div",{className:a.root},n.a.createElement(we,{open:l,handleDrawerOpen:function(){i(!0)},handleSubmit:function(a){a.id=a.paletteName.toLowerCase().replace(/ /g,"-"),a.colors=d,e.savePalette(a),e.history.push("/")},palettes:e.palettes}),n.a.createElement(_.a,{className:a.drawer,variant:"persistent",anchor:"left",open:l,classes:{paper:a.drawerPaper}},n.a.createElement("div",{className:a.drawerHeader},n.a.createElement(k.a,{onClick:function(){i(!1)}},n.a.createElement(Z.a,null))),n.a.createElement(Q.a,null),n.a.createElement("div",{className:a.container},n.a.createElement(X.a,{variant:"h4",gutterBottom:!0},"Design Your Palette"),n.a.createElement("div",{className:a.buttons},n.a.createElement(ee.a,{variant:"contained",className:a.button,color:"secondary",onClick:function(){u([])}},"Clear Palette"),n.a.createElement(ee.a,{variant:"contained",color:"primary",className:a.button,onClick:function(){for(var a=e.palettes.map((function(e){return e.colors})).flat(),t=Math.floor(Math.random()*a.length);d.includes(a[t])&&d.length<=20;)t=Math.floor(Math.random()*a.length);u((function(e){return[].concat(Object(c.a)(e),[a[t]])}))},disabled:p},"Random Color")),n.a.createElement(Ne,{paletteFull:p,addNewColor:function(e){u([].concat(Object(c.a)(d),[e]))},colors:d}))),n.a.createElement("main",{className:Object(K.a)(a.content,Object(J.a)({},a.contentShift,l))},n.a.createElement("div",{className:a.drawerHeader}),n.a.createElement(re,{colors:d,removeColorBox:function(e){u((function(a){return a.filter((function(a){return a.name!==e}))}))},axis:"xy",onSortEnd:function(e){var a=e.oldIndex,t=e.newIndex;u((function(e){return ce()(e,a,t)}))}})))}Be.defaultProps={maxColors:20};var Fe=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(e){var o;Object(i.a)(this,t),o=a.call(this,e);var n=JSON.parse(window.localStorage.getItem("palettes"));return o.state={palettes:n||I},o.findPalette=o.findPalette.bind(Object(m.a)(o)),o.savePalette=o.savePalette.bind(Object(m.a)(o)),o}return Object(s.a)(t,[{key:"findPalette",value:function(e){return this.state.palettes.find((function(a){return a.id===e}))}},{key:"savePalette",value:function(e){this.setState({palettes:[].concat(Object(c.a)(this.state.palettes),[e])},this.syncLocalStorage)}},{key:"syncLocalStorage",value:function(){window.localStorage.setItem("palettes",JSON.stringify(this.state.palettes))}},{key:"render",value:function(){var e=this;return n.a.createElement(D.c,null,n.a.createElement(D.a,{exact:!0,path:"/",render:function(a){return n.a.createElement(q,Object.assign({palettes:e.state.palettes},a))}}),n.a.createElement(D.a,{exact:!0,path:"/palette/new",render:function(a){return n.a.createElement(Be,Object.assign({},a,{savePalette:e.savePalette,palettes:e.state.palettes}))}}),n.a.createElement(D.a,{exact:!0,path:"/palette/:id",render:function(a){return n.a.createElement(A,{palette:M(e.findPalette(a.match.params.id))})}}),n.a.createElement(D.a,{exact:!0,path:"/palette/:paletteId/:colorId",render:function(a){return n.a.createElement(V,{colorId:a.match.params.colorId,palette:M(e.findPalette(a.match.params.paletteId))})}}))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(h.a,null,n.a.createElement(Fe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[212,1,2]]]);
//# sourceMappingURL=main.77aeb662.chunk.js.map