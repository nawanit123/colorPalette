(this.webpackJsonpcolorpalette=this.webpackJsonpcolorpalette||[]).push([[0],{195:function(e,a,t){e.exports=t.p+"static/media/bg.2493dc44.svg"},222:function(e,a,t){e.exports=t(423)},421:function(e,a,t){},422:function(e,a,t){},423:function(e,a,t){"use strict";t.r(a);var o,n,r,l,c,i=t(0),s=t.n(i),m=t(9),d=t.n(m),u=t(38),p=t(92),h=t(42),f=t(43),g=t(77),b=t(47),v=t(46),C=t(22),x=t(487),E=t(485),y=t(7),j=t(192),O=t(424),w=t(5),S=t(52),k=t.n(S),N=function(e){return"@media(max-width: ".concat({xs:575.98,sm:767.98,md:991.98,lg:1199.98,xl:1600}[e],"px)")},B={colorBox:(o={width:" 20%",height:function(e){return e.showAllColors?"25%":"50%"},maxWidth:"100vw",maxHeight:"100vh",display:" inline-block",cursor:" pointer",margin:" 0 auto",position:" relative",textTransform:" uppercase",marginBottom:" -4.5px",color:" rgba(0, 0, 0, 0.5)","&:hover button":{opacity:"1",transition:"0.1s"}},Object(y.a)(o,N(["lg"]),{width:"25%",height:function(e){return e.showAllColors?"20%":"33.3333%"}}),Object(y.a)(o,N(["md"]),{width:"50%",height:function(e){return e.showAllColors?"10%":"20%"}}),Object(y.a)(o,N(["sm"]),{width:"100%",height:function(e){return e.showAllColors?"5%":"10%"}}),Object(y.a)(o,N(["xs"]),{width:"100%",height:function(e){return e.showAllColors?"4.8%":"10%"}}),o),textStyle:{color:function(e){return k()(e.backgroundColor).luminance()>=.7?"rgba(0,0,0,0.5)":"rgba(255,255,255,0.9)"}},darkColor:{color:function(e){return k()(e.backgroundColor).luminance()<=.08?"rgba(255,255,255,0.9)":"rgba(0,0,0,0.5)"}},seeMoreLink:{textDecoration:"none"},seeMore:(n={backgroundColor:"rgba(255, 255, 255, 0.3)",position:"absolute",border:"none",right:"0px",color:function(e){return k()(e.backgroundColor).luminance()<=.08?"rgba(255,255,255,0.9)":"rgba(0,0,0,0.5)"},bottom:"0px",width:"60px",height:"30px",textAlign:"center",lineHeight:"30px",textDecoration:"none",outline:"none"},Object(y.a)(n,N("sm"),{marginBottom:"2.25px"}),Object(y.a)(n,N("xs"),{margin:"0",height:"100%",fontSize:"0.5rem"}),n),copyButton:Object(y.a)({position:"absolute",top:"50%",left:"50%",width:"100px",height:"30px",marginLeft:"-50px",marginTop:"-15px",outline:"none",backgroundColor:"rgba(255, 255, 255, 0.3)",fontSize:"1rem",lineHeight:"30px",color:"white",border:"none",textDecoration:"none",textAlign:"center",opacity:"0"},N("xs"),{fontSize:"0.5rem",height:"95%",marginTop:-11}),boxContent:Object(y.a)({position:"absolute",width:"100%",bottom:"0px",left:"0px",padding:"10px",letterSpacing:"1px",fontSize:"12px"},N("xs"),{fontSize:"0.5rem"}),copyOverlay:{opacity:"0",width:" 100%",height:" 100%",zIndex:"0",transition:"transform 0.6s ease-in-out",transform:"scale(0.1)"},showOverLay:{opacity:"1",transform:"scale(50)",zIndex:"10",position:"absolute"},copyMessage:{position:" fixed",top:" 0",bottom:" 0",left:" 0",right:" 0",display:" flex",alignItems:" center",justifyContent:" center",flexDirection:" column",transform:" scale(0.1)",opacity:" 0","& h1":(r={fontWeight:"400",textShadow:"1px 2px black",background:"rgba(255, 255, 255, 0.2)",width:"100%",fontSize:"8rem",textAlign:"center",marginBottom:"0",padding:"1rem",textTransform:"uppercase"},Object(y.a)(r,N("lg"),{fontSize:"7rem"}),Object(y.a)(r,N("sm"),{fontSize:"6rem"}),r),"& p":{fontSize:"2rem",fontWeight:"100"}},showMessage:{opacity:" 1",transform:" scale(1)",zIndex:" 25",transition:" all 0.4s ease-in-out",transitionDelay:" 0.3s"}},P=function(e){Object(b.a)(t,e);var a=Object(v.a)(t);function t(){var e;Object(h.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={copied:!1},e.handleClick=function(){e.setState({copied:!0},(function(){setTimeout((function(){e.setState({copied:!1})}),1500)}))},e}return Object(f.a)(t,[{key:"render",value:function(){var e=this.props,a=e.name,t=e.backgroundColor,o=e.moreURL,n=e.showAllColors,r=e.classes,l=this.state.copied;return s.a.createElement(j.CopyToClipboard,{text:t,onCopy:this.handleClick},s.a.createElement("div",{style:{backgroundColor:t},className:r.colorBox},s.a.createElement("div",{style:{backgroundColor:t},className:Object(w.a)(r.copyOverlay,Object(y.a)({},r.showOverLay,l))}),s.a.createElement("div",{className:Object(w.a)(r.copyMessage,r.darkColor,Object(y.a)({},r.showMessage,l))},s.a.createElement("h1",null,"Copied!!!"),s.a.createElement("p",{className:r.copyText},t)),s.a.createElement("div",{className:"copy-container"},s.a.createElement("div",{className:r.boxContent},s.a.createElement("span",{className:r.darkColor},a)),s.a.createElement("button",{className:r.copyButton},"Copy")),n&&s.a.createElement(u.b,{to:o,onClick:function(e){e.stopPropagation()},className:r.seeMoreLink},s.a.createElement("span",{className:r.seeMore},"More"))))}}]),t}(i.Component),F=Object(O.a)(B)(P),D=t(202),A=t(484),I=t(469),L=t(486),z=t(470),G=t(114),M=t.n(G),T=(t(235),{Navbar:{display:"flex",height:"5vh",alignItems:"center",margin:0,marginTop:"0.2rem"},logo:Object(y.a)({marginRight:"15px",padding:"0 13px",fontSize:"22px",backgroundColor:"#eceff1",fontFamily:"Roboto",height:"100%",display:"flex",alignItems:"center","& a":{textDecoration:"none",color:"black"}},N("xs"),{display:"none"}),levelSpan:Object(y.a)({},N("xs"),{fontSize:"0.5rem"}),slider:(l={width:"340px",margin:"0 10px",display:"inline-block","& .rc-slider-track":{backgroundColor:"transparent"},"& .rc-slider-rail":{height:"8px"},"&  .rc-slider-handle,.rc-slider-handle:active,.rc-slider-handle:focus,.rc-slider-handle:hover":{backgroundColor:"green",outline:"none",border:"2px solid green",boxShadow:"none",width:"13px",height:"13px",marginTop:"-2.5px"}},Object(y.a)(l,N("sm"),{width:"150px"}),Object(y.a)(l,N("xs"),{width:"110px"}),l),selectContainer:{marginLeft:"auto",marginRight:"1rem"},selectField:Object(y.a)({},N("xs"),{fontSize:"0.5rem"})}),R=function(e){Object(b.a)(t,e);var a=Object(v.a)(t);function t(){var e;Object(h.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={format:"hex",open:!1},e.handleChange=function(a){e.setState({format:a.target.value,open:!0}),e.props.handleChange(a.target.value)},e.closeSnackbar=function(){e.setState({open:!1})},e}return Object(f.a)(t,[{key:"render",value:function(){var e=this.props,a=e.level,t=e.changeLevel,o=e.showAllColors,n=e.classes,r=this.state,l=r.format,c=r.open;return s.a.createElement("header",{className:n.Navbar},s.a.createElement("div",{className:n.logo},s.a.createElement(u.b,{to:"/"},"ColorPalette")),o&&s.a.createElement(s.a.Fragment,null,s.a.createElement("span",{className:n.levelSpan},"Level ",a),s.a.createElement("div",{className:n.slider},s.a.createElement(D.a,{defaultValue:a,min:100,max:900,step:100,onAfterChange:t}))),s.a.createElement("div",{className:n.selectContainer},s.a.createElement(A.a,{className:n.selectField,value:l,onChange:this.handleChange},s.a.createElement(I.a,{value:"hex"},"HEX - #ffffff"),s.a.createElement(I.a,{value:"rgb"},"RGB - rgb(255,255,255)"),s.a.createElement(I.a,{value:"rgba"},"RGBA -rgba(255,255,255,1.0)"))),s.a.createElement(L.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:c,autoHideDuration:3e3,message:s.a.createElement("span",{id:"message-id"},"Format Changed to ",l.toUpperCase()),ContentProps:{"aria-describedby":"message-id"},onClose:this.closeSnackbar,action:[s.a.createElement(z.a,{onClick:this.closeSnackbar,color:"inherit",key:"close","aria-label":"close"},s.a.createElement(M.a,null))]}))}}]),t}(i.Component),U=Object(O.a)(T)(R),H=t(471),W={PaletteFooter:{display:" flex",justifyContent:" space-between",backgroundColor:" white",height:" 5vh",padding:"0.5rem",fontWeight:" bold","& .emoji":Object(y.a)({fontSize:"1.5rem",margin:"0 1rem"},N("xs"),{fontSize:"0.8rem"}),"& .paletteName":Object(y.a)({fontWeight:"500",textTransform:"uppercase"},N("xs"),{fontSize:"0.8rem",display:"flex",alignItems:"center"}),"& .goBack":Object(y.a)({},N("xs"),{fontSize:"0.8rem",margin:"0",padding:"0","& span":{alignItems:"flex-start"}})}},q=Object(O.a)(W)((function(e){var a=e.paletteName,t=e.emoji,o=e.classes,n=e.history;return s.a.createElement("footer",{className:o.PaletteFooter},s.a.createElement(H.a,{onClick:function(e){e.preventDefault(),n.push("/")},className:"goBack"},"GO BACK"),s.a.createElement("span",{className:"paletteName"},a," ",s.a.createElement("span",{className:"emoji"},t)))})),V={Palette:Object(y.a)({height:" 100vh",overflowX:"hidden",overflowY:"scroll",display:" flex",flexDirection:" column",margin:" 0 0.2rem",marginBottom:"20px"},N("md"),{height:"100vh"}),colors:(c={margin:"0",height:"85%"},Object(y.a)(c,N("sm"),{height:"82%"}),Object(y.a)(c,N("xs"),{height:"77%"}),c)},J=function(e){Object(b.a)(t,e);var a=Object(v.a)(t);function t(){var e;Object(h.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={level:500,format:"hex"},e.changeLevel=function(a){e.setState({level:a})},e.changeFormat=function(a){e.setState({format:a})},e}return Object(f.a)(t,[{key:"render",value:function(){var e=this,a=this.props.palette,t=a.colors,o=a.paletteName,n=a.emoji,r=a.id,l=this.props,c=l.classes,i=l.history,m=this.state,d=m.level,u=m.format,p=t[d].map((function(a){return s.a.createElement(F,{history:i,backgroundColor:a[u],name:a.name,handleChange:e.changeFormat,key:a.id,moreURL:"/palette/".concat(r,"/").concat(a.id),showAllColors:!0})}));return s.a.createElement("div",{className:c.Palette},s.a.createElement(U,{level:d,changeLevel:this.changeLevel,handleChange:this.changeFormat,showAllColors:!0}),s.a.createElement("div",{className:c.colors},p),s.a.createElement(q,{paletteName:o,emoji:n,history:i}))}}]),t}(i.Component),Y=Object(O.a)(V)(J),K=t(6),X=t(115),_=t.n(X);var Q,$,Z,ee,ae=Object(K.a)({root:{backgroundColor:"white",border:"1px solid black",borderRadius:"5px",padding:"0.5rem",position:"relative",overflow:"hidden",cursor:"pointer","&:hover svg":{opacity:"1"}},colors:{backgroundColor:"#dae1e4",height:"150px",width:"100%",borderRadius:"5px",overflow:"hidden",display:"flex",flexWrap:"wrap",flexDirection:"flex-start"},title:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"0",color:"black",paddingTop:"0.5rem",fontSize:"1rem",position:"relative"},emoji:{marginLeft:"0.5rem",fontSize:"1.5rem"},miniColor:{flexBasis:"20%",flexGrow:"1"},delete:{},deleteIcon:{position:"absolute",top:"0",right:"0",color:"white",padding:"10px",zIndex:"10",margin:"2px",backgroundColor:"#eb3d30",opacity:0,fontSize:"1.5rem",transition:"all 0.3s ease-in-out","&:hover":{transform:"scale(1.1)"}}})(Object(i.memo)((function(e){var a=e.classes,t=e.paletteName,o=e.emoji,n=e.colors,r=e.openDialog,l=e.id,c=e.goToPalette,m=n.map((function(e){return s.a.createElement("div",{className:a.miniColor,style:{backgroundColor:e.color},key:e.name})})),d=Object(i.useRef)();return s.a.createElement("div",{className:a.root,onClick:function(e){return c(l)},ref:d},s.a.createElement(_.a,{className:a.deleteIcon,onClick:function(e){e.stopPropagation(),r(l)}}),s.a.createElement("div",{className:a.colors},m),s.a.createElement("h5",{className:a.title},t," ",s.a.createElement("span",{className:a.emoji},o)))}),(function(e,a){return e.label===a.label}))),te=t(472),oe=t(473),ne=t(468),re=t(426),le=t(474),ce=t(488),ie=t(475),se=t(196),me=t.n(se),de=t(141),ue=t.n(de),pe=t(142),he=t.n(pe),fe=t(195),ge={"@global":{".fade-exit":{opacity:1},".fade-exit-active":{opacity:0,transition:"opacity 500ms ease-out"}},root:{height:"100vh",overflowY:"auto",display:"flex",alignItems:"flex-start",justifyContent:"center",flexWrap:"wrap",backgroundColor:"#4006aa",backgroundImage:"url(".concat(t.n(fe).a,")")},container:(Q={width:"50%",marginBottom:"100px",display:"flex",alignItems:"flex-start",flexDirection:"column",flexWrap:"wrap"},Object(y.a)(Q,N("xl"),{width:"80%"}),Object(y.a)(Q,N("xs"),{width:"70%"}),Q),nav:{display:"flex",width:"100%",justifyContent:"space-between",color:"white",alignItems:"center","& a":{color:"white"}},palettes:($={boxSizing:"border-box",width:"100%",display:"grid",gridTemplateColumns:"repeat(3, 30%)",columnGap:"2.5rem",rowGap:"3.5rem"},Object(y.a)($,N("md"),{gridTemplateColumns:"repeat(2, 50%)"}),Object(y.a)($,N("xs"),{gridTemplateColumns:"repeat(1, 100%)",gridGap:"1rem"}),$)},be=function(e){Object(b.a)(t,e);var a=Object(v.a)(t);function t(){var e;Object(h.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={openDeleteDialogue:!1,deletingId:""},e.goToPalette=function(a){e.props.history.push("/palette/".concat(a))},e.openDialog=function(a){e.setState({openDeleteDialogue:!0,deletingId:a})},e.closeDialog=function(){e.setState({openDeleteDialogue:!1,deletingId:""})},e.handleDelete=function(){e.props.deletePalette(e.state.deletingId),e.closeDialog()},e}return Object(f.a)(t,[{key:"render",value:function(){var e=this,a=this.props,t=a.palettes,o=a.classes,n=this.state.openDeleteDialogue;return s.a.createElement("div",{className:o.root},s.a.createElement("div",{className:o.container},s.a.createElement("nav",{className:o.nav},s.a.createElement("h1",null,"React Colors"),s.a.createElement(u.b,{to:"/palette/new"},"Create Palette")),s.a.createElement(x.a,{className:o.palettes},t.map((function(a){return s.a.createElement(E.a,{classNames:"fade",key:a.id,timeout:500},s.a.createElement(ae,Object.assign({id:a.id,key:a.id},a,{goToPalette:e.goToPalette,openDialog:e.openDialog})))})))),s.a.createElement(te.a,{open:n,"aria-labelledby":"delete-dialog-title",onClose:this.closeDialog},s.a.createElement(oe.a,{id:"delete-dialog-title"},"Delete the Palette?"),s.a.createElement(ne.a,null,s.a.createElement(re.a,{button:!0,onClick:this.handleDelete},s.a.createElement(le.a,null,s.a.createElement(ce.a,{style:{backgroundColor:ue.a[100],color:ue.a[600]}},s.a.createElement(me.a,null))),s.a.createElement(ie.a,{primary:"Delete"})),s.a.createElement(re.a,{button:!0,onClick:this.closeDialog},s.a.createElement(le.a,null,s.a.createElement(ce.a,{style:{backgroundColor:he.a[100],color:he.a[600]}},s.a.createElement(M.a,null))),s.a.createElement(ie.a,{primary:"Cancel"})))))}}]),t}(i.Component),ve=Object(K.a)(ge)(be),Ce=t(91),xe={Palette:{height:"100vh",display:"flex",flexDirection:"column"},colors:{height:"90%"},goBack:(Z={position:"relative",backgroundColor:"black",display:"inline-block",width:"20%",height:"50%",marginBottom:"-4.5px","& a":{position:"absolute",top:"50%",left:"50%",width:"100px",height:"30px",marginLeft:"-50px",marginTop:"-15px",outline:"none",backgroundColor:"rgba(255, 255, 255, 0.3)",fontSize:"1rem",lineHeight:"30px",color:"white",border:"none",textDecoration:"none",textAlign:"center"}},Object(y.a)(Z,N(["lg"]),{width:"25%",height:"33.3333%"}),Object(y.a)(Z,N(["md"]),{width:"50%",height:"20%"}),Object(y.a)(Z,N(["sm"]),{width:"100%",height:"10%"}),Z)},Ee=function(e){Object(b.a)(t,e);var a=Object(v.a)(t);function t(e){var o;return Object(h.a)(this,t),(o=a.call(this,e)).changeFormat=function(e){o.setState({format:e})},o._shade=o.getshade(o.props.palette,o.props.colorId),o.state={format:"hex"},o}return Object(f.a)(t,[{key:"getshade",value:function(e,a){var t,o=[],n=e.colors,r=Object(Ce.a)(Object.entries(n).map((function(e){return e[0]})));try{for(r.s();!(t=r.n()).done;){var l=t.value;o=o.concat(n[l].filter((function(e){return e.id===a})))}}catch(c){r.e(c)}finally{r.f()}return o.slice(1)}},{key:"render",value:function(){var e=this.props,a=e.classes,t=e.history,o=this.state.format,n=this._shade.map((function(e){return s.a.createElement(F,{key:e.name,name:e.name,backgroundColor:e[o],showAllColors:!1})}));return s.a.createElement("div",{className:a.Palette},s.a.createElement(U,{handleChange:this.changeFormat,showAllColors:!1}),s.a.createElement("div",{className:a.colors},n,s.a.createElement("div",{className:a.goBack},s.a.createElement(u.b,{to:"/",onClick:function(e){e.preventDefault(),t.goBack()}},"GO BACK"))))}}]),t}(i.Component),ye=Object(O.a)(xe)(Ee),je=t(48),Oe=t(197),we=t.n(Oe),Se=t(489),ke=t(483),Ne=t(81),Be=t(201),Pe=t.n(Be),Fe=t(116),De={root:(ee={backgroundColor:function(e){return e.color},width:"20%",height:"25%",margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-5.5px","&:hover svg":{color:"white",transform:"scale(1.5)"}},Object(y.a)(ee,N("lg"),{width:"25%",height:"20%"}),Object(y.a)(ee,N("md"),{width:"50%",height:"10%"}),Object(y.a)(ee,N("xs"),{width:"100%",height:"4.8%"}),ee),boxContent:Object(y.a)({position:"absolute",width:"100%",left:"0px",bottom:"0px",padding:"10px",color:function(e){return k()(e.color).luminance()<=.08?"rgba(255,255,255,0.9)":"rgba(0,0,0,0.5)"},letterSpacing:"1px",textTransform:"uppercase",fontSize:"12px",display:"flex",justifyContent:"space-between"},N("xs"),{fontSize:"0.5rem"}),deleteIcon:Object(y.a)({transition:"all 0.3s ease-in-out"},N("xs"),{fontSize:"0.6rem"})},Ae=Object(Fe.b)((function(e){var a=e.classes,t=e.handleClick,o=e.name;return s.a.createElement("div",{className:a.root},s.a.createElement("div",{className:a.boxContent},s.a.createElement("span",null," ",o),s.a.createElement(_.a,{className:a.deleteIcon,onClick:t})))})),Ie=Object(O.a)(De)(Ae),Le=Object(Fe.a)((function(e){var a=e.colors,t=e.removeColorBox;return s.a.createElement("div",{style:{height:"90%"}},a.map((function(e,a){return s.a.createElement(Ie,{distance:1,index:a,key:e.name,color:e.color,name:e.name,handleClick:function(){return t(e.name)}})})))})),ze=t(480),Ge=t(481),Me=t(482),Te=t(199),Re=t.n(Te),Ue=t(478),He=t(476),We=t(477),qe=t(59),Ve=t(203);t(257);function Je(e){var a=Object(i.useState)(""),t=Object(je.a)(a,2),o=t[0],n=t[1],r=e.handleSubmit,l=e.hideForm,c=Object(i.useState)("form"),m=Object(je.a)(c,2),d=m[0],u=m[1];Object(i.useEffect)((function(){qe.ValidatorForm.addValidationRule("isPaletteNameUnique",(function(a){return e.palettes.every((function(e){return e.paletteName!==a}))}))}),[e.palettes]);return s.a.createElement("div",null,s.a.createElement(te.a,{open:"emoji"===d,onClose:l},s.a.createElement(oe.a,{id:"form-dialog-title"},"Choose a Palette Emoji"),s.a.createElement(Ve.a,{onSelect:function(e){var a={paletteName:o,emoji:e.native};r(a),u("")}})),s.a.createElement(te.a,{open:"form"===d,onClose:l,"aria-labelledby":"form-dialog-title"},s.a.createElement(oe.a,{id:"form-dialog-title"},"Choose A Palette Name"),s.a.createElement(qe.ValidatorForm,{onSubmit:function(){u("emoji")}},s.a.createElement(He.a,null,s.a.createElement(We.a,null,"Please enter a name for your new beautiful palette. Make sure it's unique!"),s.a.createElement(qe.TextValidator,{label:"PaletteName",value:o,name:"newPaletteName",onChange:function(e){n(e.target.value)},fullWidth:!0,margin:"normal",validators:["required","isPaletteNameUnique"],errorMessages:["Enter a Palette Name","PaletteName must be unique"]})),s.a.createElement(Ue.a,null,s.a.createElement(H.a,{onClick:l,color:"primary"},"Cancel"),s.a.createElement(H.a,{variant:"contained",color:"primary",type:"submit"},"Save Palette")))))}var Ye=t(479),Ke=Object(Ye.a)((function(e){var a;return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),height:"54px"},appBarShift:{width:"calc(100% - ".concat(400,"px)"),marginLeft:400,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},btnGroup:Object(y.a)({padding:0,marginLeft:"auto",display:"flex","& a":{textDecoration:"none"}},N("xs"),{marginRight:"0.5rem"}),button:Object(y.a)({margin:"0 0.5rem"},N("xs"),{margin:"0 0.2rem",padding:0}),createPallet:(a={},Object(y.a)(a,N("sm"),{fontSize:"0.8rem"}),Object(y.a)(a,N("xs"),{fontSize:"0.6rem"}),a)}})),Xe=function(e){var a=e.handleDrawerOpen,t=e.open,o=e.handleSubmit,n=e.palettes,r=Ke(),l=Object(i.useState)(!1),c=Object(je.a)(l,2),m=c[0],d=c[1];return s.a.createElement("div",{className:r.root},s.a.createElement(ze.a,null),s.a.createElement(Ge.a,{position:"fixed",color:"default",className:Object(w.a)(r.appBar,Object(y.a)({},r.appBarShift,t))},s.a.createElement(Me.a,null,s.a.createElement(z.a,{color:"inherit","aria-label":"open drawer",onClick:function(){return a()},edge:"start",className:Object(w.a)(r.menuButton,Object(y.a)({},r.hide,t))},s.a.createElement(Re.a,null)),s.a.createElement(Ne.a,{variant:"h6",noWrap:!0,className:r.createPallet},"Create New Palette"),s.a.createElement("div",{className:r.btnGroup},s.a.createElement(u.b,{to:"/"},s.a.createElement(H.a,{variant:"contained",color:"secondary",className:r.button},"Go Back")),s.a.createElement(H.a,{variant:"contained",color:"primary",onClick:function(){d(!0)},className:r.button},"Save")))),m&&s.a.createElement(Je,{handleSubmit:o,classes:r,palettes:n,hideForm:function(){d(!1)}}))},_e=t(200),Qe=Object(Ye.a)((function(e){return{root:{width:"100%",height:"100%"},picker:Object(y.a)({width:"100% !important",margin:"1.2rem auto !important"},N("xs"),{width:"50% !important"}),addColor:{width:"100%",padding:"1rem",marginTop:"1rem",fontSize:"2rem"},colorNameInput:{width:"100%",height:"70px"}}})),$e=function(e){var a=e.paletteFull,t=e.addNewColor,o=e.colors,n=Qe(),r=Object(i.useState)({r:0,g:0,b:0,a:1}),l=Object(je.a)(r,2),c=l[0],m=l[1],d=Object(i.useState)("#000000"),u=Object(je.a)(d,2),p=u[0],h=u[1],f=Object(i.useState)(""),g=Object(je.a)(f,2),b=g[0],v=g[1];return Object(i.useEffect)((function(){qe.ValidatorForm.addValidationRule("isColorNameUnique",(function(e){return o.every((function(a){return a.name.toLowerCase()!==e.toLowerCase()}))})),qe.ValidatorForm.addValidationRule("isColorUnique",(function(e){return o.every((function(e){return e.color!==p}))}))}),[o,p]),s.a.createElement("div",{className:n.root},s.a.createElement(_e.ChromePicker,{color:c,onChangeComplete:function(e){e.rgb!==c&&(m(e.rgb),h(e.hex))},disableAlpha:!0,className:n.picker}),s.a.createElement(qe.ValidatorForm,{onSubmit:function(){t({color:p,name:b}),v("")},instantValidate:!1},s.a.createElement(qe.TextValidator,{name:"newName",value:b,className:n.colorNameInput,placeholder:"Color Name",variant:"filled",margin:"normal",onChange:function(e){v(e.target.value)},validators:["required","isColorNameUnique","isColorUnique"],errorMessages:["Enter a color name","Color name must be unique","Color already used!"]}),s.a.createElement(H.a,{variant:"contained",type:"submit",color:"primary",className:n.addColor,style:{backgroundColor:a?"grey":p},disabled:a},a?"PALETTE FULL":"Add Color")))},Ze=[{paletteName:"Material UI Colors",id:"material-ui-colors",emoji:"\ud83c\udfa8",colors:[{name:"red",color:"#F44336"},{name:"pink",color:"#E91E63"},{name:"purple",color:"#9C27B0"},{name:"deeppurple",color:"#673AB7"},{name:"indigo",color:"#3F51B5"},{name:"blue",color:"#2196F3"},{name:"lightblue",color:"#03A9F4"},{name:"cyan",color:"#00BCD4"},{name:"teal",color:"#009688"},{name:"green",color:"#4CAF50"},{name:"lightgreen",color:"#8BC34A"},{name:"lime",color:"#CDDC39"},{name:"yellow",color:"#FFEB3B"},{name:"amber",color:"#FFC107"},{name:"orange",color:"#FF9800"},{name:"deeporange",color:"#FF5722"},{name:"brown",color:"#795548"},{name:"grey",color:"#9E9E9E"},{name:"bluegrey",color:"#607D8B"}]},{paletteName:"Flat UI Colors v1",id:"flat-ui-colors-v1",emoji:"\ud83e\udd19",colors:[{name:"Turquoise",color:"#1abc9c"},{name:"Emerald",color:"#2ecc71"},{name:"PeterRiver",color:"#3498db"},{name:"Amethyst",color:"#9b59b6"},{name:"WetAsphalt",color:"#34495e"},{name:"GreenSea",color:"#16a085"},{name:"Nephritis",color:"#27ae60"},{name:"BelizeHole",color:"#2980b9"},{name:"Wisteria",color:"#8e44ad"},{name:"MidnightBlue",color:"#2c3e50"},{name:"SunFlower",color:"#f1c40f"},{name:"Carrot",color:"#e67e22"},{name:"Alizarin",color:"#e74c3c"},{name:"Clouds",color:"#ecf0f1"},{name:"Concrete",color:"#95a5a6"},{name:"Orange",color:"#f39c12"},{name:"Pumpkin",color:"#d35400"},{name:"Pomegranate",color:"#c0392b"},{name:"Silver",color:"#bdc3c7"},{name:"Asbestos",color:"#7f8c8d"}]},{paletteName:"Flat UI Colors Dutch",id:"flat-ui-colors-dutch",emoji:"\ud83c\uddf3\ud83c\uddf1",colors:[{name:"Sunflower",color:"#FFC312"},{name:"Energos",color:"#C4E538"},{name:"BlueMartina",color:"#12CBC4"},{name:"LavenderRose",color:"#FDA7DF"},{name:"BaraRose",color:"#ED4C67"},{name:"RadiantYellow",color:"#F79F1F"},{name:"AndroidGreen",color:"#A3CB38"},{name:"MediterraneanSea",color:"#1289A7"},{name:"LavenderTea",color:"#D980FA"},{name:"VerryBerry",color:"#B53471"},{name:"PuffinsBill",color:"#EE5A24"},{name:"PixelatedGrass",color:"#009432"},{name:"MerchantMarineBlue",color:"#0652DD"},{name:"ForgottenPurple",color:"#9980FA"},{name:"HollyHock",color:"#833471"},{name:"RedPigment",color:"#EA2027"},{name:"TurkishAqua",color:"#006266"},{name:"20000LeaguesUnderTheSea",color:"#1B1464"},{name:"CircumorbitalRing",color:"#5758BB"},{name:"MagentaPurple",color:"#6F1E51"}]},{paletteName:"Flat UI Colors American",id:"flat-ui-colors-american",emoji:"\ud83c\uddfa\ud83c\uddf8",colors:[{name:"LightGreenishBlue",color:"#55efc4"},{name:"FadedPoster",color:"#81ecec"},{name:"GreenDarnerTail",color:"#74b9ff"},{name:"ShyMoment",color:"#a29bfe"},{name:"CityLights",color:"#dfe6e9"},{name:"MintLeaf",color:"#00b894"},{name:"RobinsEggBlue",color:"#00cec9"},{name:"ElectronBlue",color:"#0984e3"},{name:"ExodusFruit",color:"#6c5ce7"},{name:"SoothingBreeze",color:"#b2bec3"},{name:"SourLemon",color:"#ffeaa7"},{name:"FirstDate",color:"#fab1a0"},{name:"PinkGlamour",color:"#ff7675"},{name:"Pico8Pink",color:"#fd79a8"},{name:"AmericanRiver",color:"#636e72"},{name:"BrightYarrow",color:"#fdcb6e"},{name:"OrangeVille",color:"#e17055"},{name:"Chi-Gong",color:"#d63031"},{name:"PrunusAvium",color:"#e84393"},{name:"DraculaOrchid",color:"#2d3436"}]},{paletteName:"Flat UI Colors Aussie",id:"flat-ui-colors-aussie",emoji:"\ud83e\udd98",colors:[{name:"Beekeeper",color:"#f6e58d"},{name:"SpicedNectarine",color:"#ffbe76"},{name:"PinkGlamour",color:"#ff7979"},{name:"JuneBud",color:"#badc58"},{name:"CoastalBreeze",color:"#dff9fb"},{name:"Turbo",color:"#f9ca24"},{name:"QuinceJelly",color:"#f0932b"},{name:"CarminePink",color:"#eb4d4b"},{name:"PureApple",color:"#6ab04c"},{name:"HintOfIcePack",color:"#c7ecee"},{name:"MiddleBlue",color:"#7ed6df"},{name:"Heliotrope",color:"#e056fd"},{name:"ExodusFruit",color:"#686de0"},{name:"DeepKoamaru",color:"#30336b"},{name:"SoaringEagle",color:"#95afc0"},{name:"GreenlandGreen",color:"#22a6b3"},{name:"SteelPink",color:"#be2edd"},{name:"Blurple",color:"#4834d4"},{name:"DeepCove",color:"#130f40"},{name:"WizardGrey",color:"#535c68"}]},{paletteName:"Flat UI Colors British",id:"flat-ui-colors-british",emoji:"\ud83c\uddec\ud83c\udde7",colors:[{name:"ProtossPylon",color:"#00a8ff"},{name:"Periwinkle",color:"#9c88ff"},{name:"Rise-N-Shine",color:"#fbc531"},{name:"DownloadProgress",color:"#4cd137"},{name:"Seabrook",color:"#487eb0"},{name:"VanaDylBlue",color:"#0097e6"},{name:"MattPurple",color:"#8c7ae6"},{name:"NanohanachaGold",color:"#e1b12c"},{name:"SkirretGreen",color:"#44bd32"},{name:"Naval",color:"#40739e"},{name:"NasturcianFlower",color:"#e84118"},{name:"LynxWhite",color:"#f5f6fa"},{name:"BlueberrySoda",color:"#7f8fa6"},{name:"MazarineBlue",color:"#273c75"},{name:"BlueNights",color:"#353b48"},{name:"HarleyOrange",color:"#c23616"},{name:"HintOfPensive",color:"#dcdde1"},{name:"ChainGangGrey",color:"#718093"},{name:"PicoVoid",color:"#192a56"},{name:"ElectroMagnetic",color:"#2f3640"}]},{paletteName:"Flat UI Colors Spanish",id:"flat-ui-colors-spanish",emoji:"\ud83c\uddea\ud83c\uddf8",colors:[{name:"JacksonsPurple",color:"#40407a"},{name:"C64Purple",color:"#706fd3"},{name:"SwanWhite",color:"#f7f1e3"},{name:"SummerSky",color:"#34ace0"},{name:"CelestialGreen",color:"#33d9b2"},{name:"LuckyPoint",color:"#2c2c54"},{name:"Liberty",color:"#474787"},{name:"HotStone",color:"#aaa69d"},{name:"DevilBlue",color:"#227093"},{name:"PalmSpringsSplash",color:"#218c74"},{name:"FlourescentRed",color:"#ff5252"},{name:"SyntheticPumpkin",color:"#ff793f"},{name:"CrocodileTooth",color:"#d1ccc0"},{name:"MandarinSorbet",color:"#ffb142"},{name:"SpicedButterNut",color:"#ffda79"},{name:"EyeOfNewt",color:"#b33939"},{name:"ChileanFire",color:"#cd6133"},{name:"GreyPorcelain",color:"#84817a"},{name:"AlamedaOchre",color:"#cc8e35"},{name:"Desert",color:"#ccae62"}]},{paletteName:"Flat UI Colors Indian",id:"flat-ui-colors-indian",emoji:"\ud83c\uddee\ud83c\uddf3",colors:[{name:"OrchidOrange",color:"#FEA47F"},{name:"SpiroDiscoBall",color:"#25CCF7"},{name:"HoneyGlow",color:"#EAB543"},{name:"SweetGarden",color:"#55E6C1"},{name:"FallingStar",color:"#CAD3C8"},{name:"RichGardenia",color:"#F97F51"},{name:"ClearChill",color:"#1B9CFC"},{name:"WhitePepper",color:"#F8EFBA"},{name:"Keppel",color:"#58B19F"},{name:"ShipsOfficer",color:"#2C3A47"},{name:"FieryFuchsia",color:"#B33771"},{name:"BlueBell",color:"#3B3B98"},{name:"GeorgiaPeach",color:"#FD7272"},{name:"OasisStream",color:"#9AECDB"},{name:"BrightUbe",color:"#D6A2E8"},{name:"MagentaPurple",color:"#6D214F"},{name:"EndingNavyBlue",color:"#182C61"},{name:"SasquatchSocks",color:"#FC427B"},{name:"PineGlade",color:"#BDC581"},{name:"HighlighterLavender",color:"#82589F"}]},{paletteName:"Flat UI Colors French",id:"flat-ui-colors-french",emoji:"\ud83c\uddeb\ud83c\uddf7",colors:[{name:"FlatFlesh",color:"#fad390"},{name:"MelonMelody",color:"#f8c291"},{name:"Livid",color:"#6a89cc"},{name:"Spray",color:"#82ccdd"},{name:"ParadiseGreen",color:"#b8e994"},{name:"SquashBlossom",color:"#f6b93b"},{name:"MandarinRed",color:"#e55039"},{name:"AzraqBlue",color:"#4a69bd"},{name:"Dupain",color:"#60a3bc"},{name:"AuroraGreen",color:"#78e08f"},{name:"IcelandPoppy",color:"#fa983a"},{name:"TomatoRed",color:"#eb2f06"},{name:"YueGuangBlue",color:"#1e3799"},{name:"GoodSamaritan",color:"#3c6382"},{name:"Waterfall",color:"#38ada9"},{name:"CarrotOrange",color:"#e58e26"},{name:"JalapenoRed",color:"#b71540"},{name:"DarkSapphire",color:"#0c2461"},{name:"ForestBlues",color:"#0a3d62"},{name:"ReefEncounter",color:"#079992"}]}],ea=t(143),aa=Object(Ye.a)((function(e){return{root:{display:"flex",width:"100vw"},drawer:{width:400,flexShrink:0,height:"100vh"},drawerPaper:Object(y.a)({width:400,display:"flex",alignItems:"center",flexDirection:"column"},N("sm"),{width:"100vw"}),drawerHeader:Object(ea.a)(Object(ea.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end",width:"100%",margin:"0"}),content:{flexGrow:1,height:"calc(100vh - 64px)",padding:0,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-400},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},container:{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center !important",alignItems:"center !important"},buttons:Object(y.a)({width:"100%"},N("sm"),{width:"90%"}),button:Object(y.a)({width:"50%"},N("sm"),{fontSize:"0.6rem"})}}));function ta(e){var a=aa(),t=Object(i.useState)(!1),o=Object(je.a)(t,2),n=o[0],r=o[1],l=Object(i.useState)(Ze[0].colors),c=Object(je.a)(l,2),m=c[0],d=c[1],u=m.length>=e.maxColors;return s.a.createElement("div",{className:a.root},s.a.createElement(Xe,{open:n,handleDrawerOpen:function(){r(!0)},handleSubmit:function(a){a.id=a.paletteName.toLowerCase().replace(/ /g,"-"),a.colors=m,e.savePalette(a),e.history.push("/")},palettes:e.palettes}),s.a.createElement(Se.a,{className:a.drawer,variant:"persistent",anchor:"left",open:n,classes:{paper:a.drawerPaper}},s.a.createElement("div",{className:a.drawerHeader},s.a.createElement(z.a,{onClick:function(){r(!1)}},s.a.createElement(Pe.a,null))),s.a.createElement(ke.a,null),s.a.createElement("div",{className:a.container},s.a.createElement(Ne.a,{variant:"h4",gutterBottom:!0},"Design Your Palette"),s.a.createElement("div",{className:a.buttons},s.a.createElement(H.a,{variant:"contained",className:a.button,color:"secondary",onClick:function(){d([])}},"Clear Palette"),s.a.createElement(H.a,{variant:"contained",color:"primary",className:a.button,onClick:function(){for(var a=e.palettes.map((function(e){return e.colors})).flat(),t=Math.floor(Math.random()*a.length);m.includes(a[t])&&m.length<=20;)t=Math.floor(Math.random()*a.length);d((function(e){return[].concat(Object(p.a)(e),[a[t]])}))},disabled:u},"Random Color")),s.a.createElement($e,{paletteFull:u,addNewColor:function(e){d([].concat(Object(p.a)(m),[e]))},colors:m}))),s.a.createElement("main",{className:Object(w.a)(a.content,Object(y.a)({},a.contentShift,n))},s.a.createElement("div",{className:a.drawerHeader}),s.a.createElement(Le,{colors:m,removeColorBox:function(e){d((function(a){return a.filter((function(a){return a.name!==e}))}))},axis:"xy",onSortEnd:function(e){var a=e.oldIndex,t=e.newIndex;d((function(e){return we()(e,a,t)}))},distance:20})))}ta.defaultProps={maxColors:20};t(421);var oa=function(e){var a=e.children;return s.a.createElement("section",{className:"page direction"},a)},na=[50,100,200,300,400,500,600,700,800,900];function ra(e){var a,t={paletteName:e.paletteName,id:e.id,emoji:e.emoji,colors:{}},o=Object(Ce.a)(na);try{for(o.s();!(a=o.n()).done;){var n=a.value;t.colors[n]=[]}}catch(u){o.e(u)}finally{o.f()}var r,l,c,i=Object(Ce.a)(e.colors);try{for(i.s();!(r=i.n()).done;)for(var s=r.value,m=(l=s.color,c=10,k.a.scale(function(e){return[k()(e).darken(1.4).hex(),e,"#fff"]}(l)).mode("lab").colors(c)).reverse(),d=0;d<m.length;d++)t.colors[na[d]].push({name:"".concat(s.name," ").concat(na[d]),id:s.name.toLowerCase().replace("/ /g","-"),hex:m[d],rgb:k()(m[d]).css(),rgba:k()(m[d]).css().replace("rgb","rgba").replace(")",", 1.0)")})}catch(u){i.e(u)}finally{i.f()}return t}var la=function(e){Object(b.a)(t,e);var a=Object(v.a)(t);function t(e){var o;Object(h.a)(this,t),o=a.call(this,e);var n=JSON.parse(window.localStorage.getItem("palettes"));return o.state={palettes:n||Ze},o.findPalette=o.findPalette.bind(Object(g.a)(o)),o.savePalette=o.savePalette.bind(Object(g.a)(o)),o.deletePalette=o.deletePalette.bind(Object(g.a)(o)),o}return Object(f.a)(t,[{key:"findPalette",value:function(e){return this.state.palettes.find((function(a){return a.id===e}))}},{key:"savePalette",value:function(e){this.setState({palettes:[].concat(Object(p.a)(this.state.palettes),[e])},this.syncLocalStorage)}},{key:"deletePalette",value:function(e){this.setState((function(a){return{palettes:a.palettes.filter((function(a){return a.id!==e}))}}),this.syncLocalStorage)}},{key:"syncLocalStorage",value:function(){window.localStorage.setItem("palettes",JSON.stringify(this.state.palettes))}},{key:"render",value:function(){var e=this;return s.a.createElement(C.a,{render:function(a){var t=a.location;return s.a.createElement(x.a,null,s.a.createElement(E.a,{key:t.pathname,classNames:"page",timeout:500},s.a.createElement(C.c,{location:t},s.a.createElement(C.a,{exact:!0,path:"/",render:function(a){return s.a.createElement(oa,{location:t},s.a.createElement(ve,Object.assign({palettes:e.state.palettes,deletePalette:e.deletePalette},a)))}}),s.a.createElement(C.a,{exact:!0,path:"/palette/new",render:function(a){return s.a.createElement(oa,{location:t},s.a.createElement(ta,Object.assign({},a,{savePalette:e.savePalette,palettes:e.state.palettes})))}}),s.a.createElement(C.a,{exact:!0,path:"/palette/:id",render:function(a){return s.a.createElement(oa,{location:t},s.a.createElement(Y,Object.assign({},a,{palette:ra(e.findPalette(a.match.params.id))})))}}),s.a.createElement(C.a,{exact:!0,path:"/palette/:paletteId/:colorId",render:function(a){return s.a.createElement(oa,{location:t},s.a.createElement(ye,Object.assign({},a,{colorId:a.match.params.colorId,palette:ra(e.findPalette(a.match.params.paletteId))})))}}))))}})}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(422);d.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(u.a,null,s.a.createElement(la,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[222,1,2]]]);
//# sourceMappingURL=main.94ee21fd.chunk.js.map