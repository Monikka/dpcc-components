(this["webpackJsonpdpcc-components"]=this["webpackJsonpdpcc-components"]||[]).push([[0],{36:function(e,a,t){e.exports=t.p+"static/media/ceirs-logo.406add80.png"},49:function(e,a,t){e.exports=t(67)},54:function(e,a,t){},56:function(e,a,t){},57:function(e,a,t){},66:function(e,a,t){},67:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(12),o=t.n(s),l=(t(54),t(55),t(56),t(28)),c=t(34),m=t(35),i=t(46),d=t(44),u=t(72),p=t(42),f=t(74),h=t(73);function E(){var e="https://dpcc.niaidceirs";switch(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).DEPLOY_ENV){case"PROD":return e+".org";case"STAG":return e+"-staging.net";case"DEV":default:return e+"-dev.net"}}var g=E()+"/portal/intranet/profile/",I=E()+"/ometa/accountInformation.action",M=E()+"/ometa/logout.action",N=t(36),b=t.n(N),x=(t(57),function(e){Object(i.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).handleOpen=function(e){n.setState({isOpen:!0,hoveredMenu:e.currentTarget.id})},n.handleClose=function(){n.setState({isOpen:!1,hoveredMenu:""})},n.state={isOpen:!1,hoveredMenu:""},n}return Object(m.a)(t,[{key:"render",value:function(){var e;return console.log(this.props.isAdmin),r.a.createElement("div",{style:{width:"100%",backgroundColor:"#012641"}},r.a.createElement("div",{style:{height:"30px"}},r.a.createElement("div",{className:"dropdown",style:{float:"right",margin:"0 61.67px"}},r.a.createElement(u.a,{as:p.a},r.a.createElement(u.a.Toggle,{className:"userDropdownButton",style:{backgroundColor:"#eeeeee",color:"black",border:"0px solid #efefef"},variant:"success",id:"dropdown-basic"},this.props.userName),r.a.createElement(u.a.Menu,{className:"userDropdownMenu"},r.a.createElement(u.a.Item,{className:"userDropdownMenuItem",href:g+this.props.userId},"My Profile"),r.a.createElement(u.a.Item,{className:"userDropdownMenuItem",href:I},"Account Information"),r.a.createElement(u.a.Item,{className:"userDropdownMenuItem",href:M},"Logout"))))),r.a.createElement("div",{style:{height:"80px"}},r.a.createElement("div",{style:{float:"left",width:"240px",marginLeft:"61.67px"}},r.a.createElement("a",{href:"http://www.niaidceirs.org/"},r.a.createElement("img",{src:b.a,style:{width:"240px",zIndex:"2"},alt:"CEIRS Logo"}))),r.a.createElement("div",{style:{float:"right",marginRight:"61.67px"}},r.a.createElement(f.a,{expand:"lg"},r.a.createElement(f.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(f.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(h.a,{variant:"pills"},r.a.createElement(h.a.Item,{className:"navItem"},r.a.createElement(u.a,{id:"reports",onMouseEnter:this.handleOpen,onMouseLeave:this.handleClose,show:"reports"===this.state.hoveredMenu,style:{textTransform:"uppercase"}},r.a.createElement(u.a.Toggle,{className:"headerMenuDropdownButton",style:{color:"#b6cad9",border:"0px solid #efefef"}},"Reports & Analytics"),r.a.createElement(u.a.Menu,{className:"headerMenuDropdown"},r.a.createElement(u.a.Item,{href:"/ometa/centerreport.action",className:"headerMenuDropdownItem"},"CEIRS Center Reports"),r.a.createElement(u.a.Item,{href:"/ometa/centerreport.action",className:"headerMenuDropdownItem"},"Web Analytics"),r.a.createElement(u.a.Item,{href:"/ometa/centerreport.action",className:"headerMenuDropdownItem"},"Advanced Analytics")))),r.a.createElement(h.a.Item,{className:"navItem"},r.a.createElement(u.a,{id:"data-submission",onMouseEnter:this.handleOpen,onMouseLeave:this.handleClose,show:"data-submission"===this.state.hoveredMenu,style:{textTransform:"uppercase"}},r.a.createElement(u.a.Toggle,{className:"headerMenuDropdownButton",style:{color:"#b6cad9",border:"0px solid #efefef"}},"DATA SUBMISSION"),r.a.createElement(u.a.Menu,{className:"headerMenuDropdown"},r.a.createElement(u.a.Item,{href:"/ometa/centerreport.action",className:"headerMenuDropdownItem"},"Submit Data"),r.a.createElement(u.a.Item,{href:"/ometa/centerreport.action",className:"headerMenuDropdownItem"},"Search & Edit Data"),r.a.createElement(u.a.Item,{href:"/ometa/centerreport.action",className:"headerMenuDropdownItem"},"Event History")))),r.a.createElement(h.a.Item,{className:"navItem"},r.a.createElement(h.a.Link,{style:{color:"#b6cad9",border:"0px solid #efefef",borderRadius:"1px"},href:"#",className:"headerMenuDropdownButton"},"Collaboration")),r.a.createElement(h.a.Item,{className:"navItem"},r.a.createElement(u.a,{id:"resources",onMouseEnter:this.handleOpen,onMouseLeave:this.handleClose,show:"resources"===this.state.hoveredMenu,style:{textTransform:"uppercase"}},r.a.createElement(u.a.Toggle,{className:"headerMenuDropdownButton",style:{color:"#b6cad9",border:"0px solid #efefef"}},"Resources"),r.a.createElement(u.a.Menu,{className:"headerMenuDropdown"},r.a.createElement(u.a.Item,{href:"/ometa/centerreport.action",className:"headerMenuDropdownItem"},"Center Projects"),r.a.createElement(u.a.Item,{href:"/ometa/centerreport.action",className:"headerMenuDropdownItem"},"Sequencing Request"),r.a.createElement(u.a.Item,{href:"/ometa/centerreport.action",className:"headerMenuDropdownItem"},"Reagents")))),r.a.createElement(h.a.Item,{className:"navItem"},r.a.createElement(u.a,{id:"help",onMouseEnter:this.handleOpen,onMouseLeave:this.handleClose,show:"help"===this.state.hoveredMenu,style:{textTransform:"uppercase"}},r.a.createElement(u.a.Toggle,{className:"headerMenuDropdownButton",style:{color:"#b6cad9",border:"0px solid #efefef"}},"Help"),r.a.createElement(u.a.Menu,{className:"headerMenuDropdown"},r.a.createElement(u.a.Item,{href:"/ometa/centerreport.action",className:"headerMenuDropdownItem"},"Help Desk"),r.a.createElement(u.a.Item,{href:"/ometa/centerreport.action",className:"headerMenuDropdownItem"},"Data Standards"),r.a.createElement(u.a.Item,{href:"/ometa/centerreport.action",className:"headerMenuDropdownItem"},"FAQ"),r.a.createElement(u.a.Item,{href:"/ometa/centerreport.action",className:"headerMenuDropdownItem"},"Training Materials"),r.a.createElement(u.a.Item,{href:"/ometa/centerreport.action",className:"headerMenuDropdownItem"},"Contact Us")))),(this.props.isAdmin,""))))),r.a.createElement("div",{className:"d-flex justify-content-start",style:{width:"100%",background:"rgba(95, 147, 197, 0.8)",height:"22px",position:"absolute",paddingLeft:"61.67px",top:"85px"}},r.a.createElement("a",{href:"",style:(e={fontSize:"13px",color:"white",fontStyle:"italic",lineHeight:"22px",textShadow:"1px 1px #012641",width:"320px"},Object(l.a)(e,"color","white"),Object(l.a)(e,"textDecoration","none"),Object(l.a)(e,"textAlign","left"),e)},"Data Processing and Coordinating Center"))))}}]),t}(r.a.Component));var y=function(){return r.a.createElement("div",{style:{marginTop:"52px",paddingTop:"15px",paddingBottom:"15px",paddingLeft:"61.67px",paddingRight:"61.67px",backgroundColor:"#012641",color:"#fff",textAlign:"right"}},r.a.createElement("p",{style:{width:"100%",fontSize:"13px",margin:0,paddingTop:0,paddingBottom:"9px"}},"\xa9 2020 Centers of Excellence for Influenza Research and Surveillance."))},v=t(75),w=t(76),S=t(17),D=t(18);t(66);function k(e){return r.a.createElement(h.a,{role:"navigation",className:"flex-column"},r.a.createElement(v.a,{style:{backgroundColor:"#F7F7F7",paddingTop:"5px"}},r.a.createElement(w.a,{style:{borderWidth:"0"}},r.a.createElement(v.a.Toggle,{as:w.a.Header,className:"asideMenuItem",eventKey:"0"},"Reports & Analytics",r.a.createElement(S.a,{className:"justify-self-end",icon:D.a,size:"xs"})),r.a.createElement(v.a.Collapse,{eventKey:"0"},r.a.createElement(w.a.Body,{className:"d-flex flex-column",style:{backgroundColor:"#f7f7f7",padding:"10px",paddingBottom:"0",textAlign:"left"}},r.a.createElement(w.a.Link,{className:"asideMenuSubItem",href:"#"},"Ceirs Center Reports"),r.a.createElement(w.a.Link,{className:"asideMenuSubItem",href:"#"},"Web Analytics"),r.a.createElement(w.a.Link,{className:"asideMenuSubItem",href:"#"},"Advanced Analytics")))),r.a.createElement(w.a,{style:{borderWidth:"0"}},r.a.createElement(v.a.Toggle,{as:w.a.Header,className:"asideMenuItem",eventKey:"1"},"Data Submission",r.a.createElement(S.a,{className:"justify-self-end",icon:D.a,size:"xs"})),r.a.createElement(v.a.Collapse,{eventKey:"1"},r.a.createElement(w.a.Body,{className:"d-flex flex-column asideMenuBody",style:{backgroundColor:"#f7f7f7",padding:"10px",paddingBottom:"0",textAlign:"left"}},r.a.createElement(w.a.Link,{className:"asideMenuSubItem",href:"#"},"Submit Data"),r.a.createElement(w.a.Link,{className:"asideMenuSubItem",href:"#"},"Search & Edit"),r.a.createElement(w.a.Link,{className:"asideMenuSubItem",href:"#"},"Event History")))),r.a.createElement(w.a,{style:{borderWidth:"0"}},r.a.createElement(v.a.Toggle,{as:w.a.Header,className:"asideMenuItem",eventKey:"2"},r.a.createElement(w.a.Link,{href:"",style:{color:"#666"}},"Collaboration"))),r.a.createElement(w.a,{style:{borderWidth:"0"}},r.a.createElement(v.a.Toggle,{as:w.a.Header,className:"asideMenuItem",eventKey:"3"},"Resources",r.a.createElement(S.a,{className:"justify-self-end",icon:D.a,size:"xs"})),r.a.createElement(v.a.Collapse,{eventKey:"3"},r.a.createElement(w.a.Body,{className:"d-flex flex-column",style:{backgroundColor:"#f7f7f7",padding:"10px",paddingBottom:"0",textAlign:"left"}},r.a.createElement(w.a.Link,{className:"asideMenuSubItem",href:"#"},"Center Projects"),r.a.createElement(w.a.Link,{className:"asideMenuSubItem",href:"#"},"Sequencing Request"),r.a.createElement(w.a.Link,{className:"asideMenuSubItem",href:"#"},"Reagents")))),r.a.createElement(w.a,{style:{borderWidth:"0"}},r.a.createElement(v.a.Toggle,{as:w.a.Header,className:"asideMenuItem",eventKey:"4"},"Help",r.a.createElement(S.a,{className:"justify-self-end",icon:D.a,size:"xs"})),r.a.createElement(v.a.Collapse,{eventKey:"4"},r.a.createElement(w.a.Body,{className:"d-flex flex-column",style:{backgroundColor:"#f7f7f7",padding:"10px",paddingBottom:"0",textAlign:"left"}},r.a.createElement(w.a.Link,{className:"asideMenuSubItem",href:"#"},"Help Desk"),r.a.createElement(w.a.Link,{className:"asideMenuSubItem",href:"#"},"Data Standards"),r.a.createElement(w.a.Link,{className:"asideMenuSubItem",href:"#"},"FAQ"),r.a.createElement(w.a.Link,{className:"asideMenuSubItem",href:"#"},"Training Materials"),r.a.createElement(w.a.Link,{className:"asideMenuSubItem",href:"#"},"Contact Us")))),e.isAdmin?r.a.createElement(w.a,{style:{borderWidth:"0"}},r.a.createElement(v.a.Toggle,{as:w.a.Header,className:"asideMenuItem",eventKey:"5"},"Admin",r.a.createElement(S.a,{className:"justify-self-end",icon:D.a,size:"xs"})),r.a.createElement(v.a.Collapse,{eventKey:"5"},r.a.createElement(w.a.Body,{className:"d-flex flex-column",style:{backgroundColor:"#f7f7f7",padding:"10px",paddingBottom:"0",textAlign:"left"}},r.a.createElement(w.a.Link,{className:"asideMenuSubItem",href:"#"},"Project Registration"),r.a.createElement(w.a.Link,{className:"asideMenuSubItem",href:"#"},"Project Setup"),r.a.createElement(w.a.Link,{className:"asideMenuSubItem",href:"#"},"Metadata Setup"),r.a.createElement(w.a.Link,{className:"asideMenuSubItem",href:"#"},"Add New Actor"),r.a.createElement(w.a.Link,{className:"asideMenuSubItem",href:"#"},"Actor Role Management")))):""))}var C=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(x,{userId:"monikkar",userName:"Monikka",isAdmin:"false"}),r.a.createElement(k,{isAdmin:"false"}),r.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[49,1,2]]]);
//# sourceMappingURL=main.637a96eb.chunk.js.map