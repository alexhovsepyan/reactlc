(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a(65)},35:function(e,t,a){},37:function(e,t,a){},48:function(e,t,a){},50:function(e,t,a){},52:function(e,t,a){},59:function(e,t,a){},61:function(e,t,a){},63:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(28),s=a.n(r),l=a(68),o=(a(35),a(5)),i=a(6),m=a(8),u=a(7),p=a(9),f=(a(37),a(15)),E=a(22),b=a(67),h=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleHover=function(){var e=a.animElem.current,t=a.animIcon.current;e.animate([{opacity:0,offset:0},{opacity:1,offset:1}],{duration:300,fill:"forwards"}),t.animate([{opacity:1,offset:0},{opacity:0,offset:1}],{duration:300,fill:"forwards"})},a.handleRemoveAnim=function(){var e=a.animElem.current,t=a.animIcon.current;e.animate([{opacity:1,offset:0},{opacity:0,offset:1}],{duration:300,fill:"forwards"}),t.animate([{opacity:0,offset:0},{opacity:1,offset:1}],{duration:300,fill:"forwards"})},a.animElem=c.a.createRef(),a.animIcon=c.a.createRef(),a.state={hover:!0},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.to,a=e.className,n=e.children,r=e.activeClassName,s=e.name;return c.a.createElement(b.a,{to:t,className:a,exact:!0,activeClassName:r,onMouseEnter:this.handleHover,onMouseLeave:this.handleRemoveAnim},c.a.createElement("li",{style:{marginTop:"10px"}},c.a.createElement("div",{ref:this.animIcon},n&&n),c.a.createElement("span",{ref:this.animElem,className:"navLink-active-span"},s)))}}]),t}(n.Component),d=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("nav",{className:"left-menu_content"},c.a.createElement("ul",null,c.a.createElement(h,{to:"/",className:"left-menu_content__elem",activeClassName:"left-menu_content__elem_active",name:"Home"},c.a.createElement(E.c,null)),c.a.createElement(h,{to:"/about",className:"left-menu_content__elem",activeClassName:"left-menu_content__elem_active",name:"About"},c.a.createElement(E.d,null)),c.a.createElement(h,{to:"/skills",className:"left-menu_content__elem",activeClassName:"left-menu_content__elem_active",name:"Skills"},c.a.createElement(E.a,null)),c.a.createElement(h,{to:"/mywork",className:"left-menu_content__elem",activeClassName:"left-menu_content__elem_active",name:"Works"},c.a.createElement(E.b,null)),c.a.createElement(h,{to:"/contact",className:"left-menu_content__elem",activeClassName:"left-menu_content__elem_active",name:"Contacts"},c.a.createElement(f.b,null))))}}]),t}(n.Component),v=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("ul",{className:"left-menu_footer"},c.a.createElement("li",{style:{marginTop:"10px"}},c.a.createElement("a",{target:"_blank",className:"social-link",rel:"noopener noreferrer",href:"https://www.facebook.com/vahe.shakhpazyan"},c.a.createElement(f.d,null))),c.a.createElement("li",{style:{marginTop:"10px"}},c.a.createElement("a",{target:"_blank",className:"social-link",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/vahe-shakhpazyan-856a67135/"},c.a.createElement(f.f,null))),c.a.createElement("li",{style:{marginTop:"10px"}},c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"social-link",href:"https://github.com/VaheShaxpazyan"},c.a.createElement(f.e,null))))}}]),t}(n.Component),N=a(42),y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleAnimation=function(){a.logo.current.animate([{transform:"scale(1)",offset:0},{transform:"scale(1.3)",offset:.2},{transform:"scale(1.2)",offset:.4},{transform:"scale(1)",offset:1}],{duration:1e3,easing:"ease-in-out",delay:0,direction:"alternate",fill:"forwards"})},a.logo=c.a.createRef(),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(N.a,{to:"/"},c.a.createElement("div",{className:"left-menu_header"},c.a.createElement("h1",{className:"left-menu_logo",ref:this.logo},"V"),c.a.createElement("span",{className:"left-menu_logo__desc"},"Vahe")))}}]),t}(n.Component),j=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"left-menu"},c.a.createElement(y,null),c.a.createElement(d,null),c.a.createElement(v,null))}}]),t}(n.Component),O=a(69),g=a(66),k=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"word-box"},c.a.createElement("span",{className:"word"},c.a.createElement("span",{className:"blast"},"H"),c.a.createElement("span",{className:"blast"},"i,")),c.a.createElement("br",null),c.a.createElement("span",{className:"word",style:{marginRight:20}},c.a.createElement("span",{className:"blast"},"I"),c.a.createElement("span",{className:"blast"},"'"),c.a.createElement("span",{className:"blast"},"m")),c.a.createElement("span",{className:"word"},c.a.createElement("span",{className:"blast"},"V"),c.a.createElement("span",{className:"blast"},"a"),c.a.createElement("span",{className:"blast"},"h"),c.a.createElement("span",{className:"blast"},"e,")),c.a.createElement("br",null),c.a.createElement("span",{className:"word",style:{marginRight:20}},c.a.createElement("span",{className:"blast"}," J"),c.a.createElement("span",{className:"blast"},"a"),c.a.createElement("span",{className:"blast"},"v"),c.a.createElement("span",{className:"blast"},"a"),c.a.createElement("span",{className:"blast"},"s"),c.a.createElement("span",{className:"blast"},"c"),c.a.createElement("span",{className:"blast"},"r"),c.a.createElement("span",{className:"blast"},"i"),c.a.createElement("span",{className:"blast"},"p"),c.a.createElement("span",{className:"blast"},"t")),c.a.createElement("span",{className:"word"},c.a.createElement("span",{className:"blast"},"d"),c.a.createElement("span",{className:"blast"},"e"),c.a.createElement("span",{className:"blast"},"v"),c.a.createElement("span",{className:"blast"},"e"),c.a.createElement("span",{className:"blast"},"l"),c.a.createElement("span",{className:"blast"},"o"),c.a.createElement("span",{className:"blast"},"p"),c.a.createElement("span",{className:"blast"},"e"),c.a.createElement("span",{className:"blast"},"r"),c.a.createElement("span",{className:"blast"},".")),c.a.createElement("br",null),c.a.createElement("span",{className:"homeDescription"},"Front End Developer / React / React Native"))}}]),t}(n.Component);function _(e){var t=e.title,a=void 0===t?"click":t,n=e.action;return c.a.createElement("button",{onClick:n,className:"standardButton"},a)}a(48),a(50);var S=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.history;return c.a.createElement("div",{className:"homeWrapper"},c.a.createElement(k,null),c.a.createElement(_,{title:"CONTACT ME",action:function(){return e.push("/contact")}}))}}]),t}(n.Component),w=(a(52),function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"aboutBox"},c.a.createElement("h1",{className:"aboutTitle"},"About me"),c.a.createElement("div",null,c.a.createElement("h3",{className:"sectionTitle"},"Eduction"),c.a.createElement("p",{className:"aboutText"},c.a.createElement("span",null,"National Polytechnic University of Armenia - bachelor"),c.a.createElement("br",null),c.a.createElement("span",null,"2009 - 2013"),c.a.createElement("br",null),c.a.createElement("span",null,"Faculty of Electrotechnic"))),c.a.createElement("div",null,c.a.createElement("h3",{className:"sectionTitle"},"Experience"),c.a.createElement("p",{className:"aboutText"},"WeDoApps LLC, Gyumri ,Shirak Province"," ",c.a.createElement("span",{className:"aboutTextLight"},"- JavaScript developer"),c.a.createElement("br",null),c.a.createElement("span",null," 01/ 2018 - 08/2018")),c.a.createElement("p",{className:"aboutText"},"gHost Services LLC, Gyumri ,Shirak Province"," ",c.a.createElement("span",{className:"aboutTextLight"},"- JavaScript developer"),c.a.createElement("br",null),c.a.createElement("span",null," 08/ 2018 - PRESENT "))))}}]),t}(n.Component)),x=a(44),C=function(e){return e?/^(\w+)@([a-z]{2,})\.([a-z]{2,5})$/i.test(e)?{type:"success",message:"Valid email"}:{type:"error",message:"Invalid Email Address"}:{type:"error",message:"Email Required"}},T=function(e){return e?e.length<6?{type:"error",message:"Message is too short"}:{type:"success",message:""}:{type:"error",message:"Message Required"}},A=a(18),R=a(19),D=a.n(R),M=a(14),L=function(e){var t="".concat("https://reactlc.herokuapp.com/api/v1/","contact");return fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:e})},B=D.a.mark(V),I=D.a.mark(q),G="contactDucks/SEND_MESSAGE_SAGA",W=function(){return{type:"contactDucks/RESET_STATE"}},P=function(e){return{type:"contactDucks/SEND_MESSAGE_SUCCESS",payload:{success:!0,sending:!1,message:"Message sent successfully"}}},z=function(e){return{type:"contactDucks/SEND_MESSAGE_SLIP",payload:{sending:!1,error:!0,message:e}}},J={sending:!1,error:!1,success:!1,message:""};function V(e){var t,a,n,c,r;return D.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,Object(M.b)(L,e.payload);case 3:return t=s.sent,s.next=6,t.json();case 6:if("error"!==(a=s.sent).type){s.next=16;break}return n=a.email?a.email.message:a.message?a.message.message:"An error has occurred.",s.next=11,Object(M.b)(z,n);case 11:return c=s.sent,s.next=14,Object(M.c)(c);case 14:s.next=22;break;case 16:if("success"!==a.type){s.next=22;break}return s.next=19,Object(M.b)(P);case 19:return r=s.sent,s.next=22,Object(M.c)(r);case 22:s.next=27;break;case 24:s.prev=24,s.t0=s.catch(0),console.log(s.t0);case 27:case"end":return s.stop()}},B,this,[[0,24]])}function q(){return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(M.d)(G,V);case 2:case"end":return e.stop()}},I,this)}var H=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e,t){a.setState(Object(x.a)({},e,t))},a.handleSend=function(e){e.preventDefault();var t=a.state,n=t.email,c=t.massage,r=C(n),s=T(c);"success"===r.type&&"success"===s.type?a.props.sendMessageSage(JSON.stringify(a.state)):"error"===r.type?a.props.messageSlip(r.message):s.type&&a.props.messageSlip(s.message)},a.state={name:"",email:"",massage:""},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("form",{className:"contactForm"},c.a.createElement("input",{placeholder:"Name",type:"text",value:this.state.name,onChange:function(t){return e.handleChange("name",t.target.value)}}),c.a.createElement("input",{placeholder:"Email",type:"email",value:this.state.email,onChange:function(t){return e.handleChange("email",t.target.value)},required:!0}),c.a.createElement("textarea",{placeholder:"Message",type:"text",value:this.state.massage,onChange:function(t){return e.handleChange("massage",t.target.value)},required:!0}),c.a.createElement(_,{title:"send",action:this.handleSend}))}}]),t}(n.Component),F=Object(A.b)(function(e){return{contactReducer:e.contactReducer}},{sendMessageSage:function(e){return{type:G,payload:e}},messageSlip:z})(H),U=(a(59),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).iconSwitcher=function(){switch(a.props.type){case"error":return c.a.createElement(f.c,{className:"alert-error-icon"});case"success":return c.a.createElement(f.a,{className:"alert-success-icon"});default:return c.a.createElement(f.g,{className:"alert-waiting-icon"})}},a.componentDidMount=function(){var e=a.props,t=e.closeAction,n=e.lookingTime;n&&setTimeout(t,n)},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.type,a=e.position,n=e.text,r=e.closeAction;return c.a.createElement("div",{className:" alertBox alert-".concat(t," alert-").concat(a)},c.a.createElement("div",{className:"alert-content"},this.iconSwitcher(),c.a.createElement("span",{className:"alert-text"},n),c.a.createElement(f.h,{className:"alert-close",onClick:r})))}}]),t}(n.Component)),$=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).alertController=function(){var e=a.props.contactReducer,t=e.sending,n=e.error,r=e.success,s=e.message;return t?c.a.createElement(U,{type:"waiting",position:"top",text:"Messages are sent",lookingTime:5e3,closeAction:a.props.resetState}):n?c.a.createElement(U,{type:"error",position:"top",text:s,lookingTime:5e3,closeAction:a.props.resetState}):r?c.a.createElement(U,{type:"success",position:"top",text:s,lookingTime:5e3,closeAction:a.props.resetState}):c.a.createElement("span",null)},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.alertController()}}]),t}(n.Component),K=Object(A.b)(function(e){return{contactReducer:e.contactReducer}},{resetState:W})($),Q=(a(61),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).componentWillUnmount=function(){a.props.resetState()},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"contactBox"},c.a.createElement("h1",{className:"contactBoxTitle"},"Contact me"),c.a.createElement("span",{className:"contactDesc"}," ","if you have any questions, please don't hesitate to contact using form below..."," "),c.a.createElement(F,null),c.a.createElement(K,null))}}]),t}(n.Component)),X=Object(A.b)(function(e){return{contactReducer:e.contactReducer}},{resetState:W})(Q),Y=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"My Work")}}]),t}(n.Component),Z=(a(63),function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"skillsBox"},c.a.createElement("h1",{className:"skillsTitle"},"Skills & Experience"),c.a.createElement("p",{className:"skillsDesc"},"My main area of expertise is front end development and mobile applications."),c.a.createElement("p",{className:"skillsText"},"Building small and medium Web apps using React.",c.a.createElement("br",null),"Building cross platform app for android and ios using React Native.",c.a.createElement("br",null),"Building custom plugins, features, animations and even coding layouts."),c.a.createElement("p",{className:"skillsText"},"From time to I work as a full-stack developes with node js (Express, Mongodb, ...)"),c.a.createElement("p",{className:"skillsText"},"Visit my"," ",c.a.createElement("a",{href:"https://www.linkedin.com/in/vahe-shakhpazyan-856a67135/",target:"_blank",rel:"noopener noreferrer",className:"skillsLink"},"LinkedIn"," ")," ","profile for more details or just ",c.a.createElement(N.a,{to:"/contact"},c.a.createElement("span",{className:"skillsLink"},"contact")," ")," ","me"))}}]),t}(n.Component)),ee=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(O.a,null,c.a.createElement(g.a,{path:"/",exact:!0,component:S}),c.a.createElement(g.a,{path:"/about",exact:!0,component:w}),c.a.createElement(g.a,{path:"/contact",exact:!0,component:X}),c.a.createElement(g.a,{path:"/mywork",exact:!0,component:Y}),c.a.createElement(g.a,{path:"/skills",exact:!0,component:Z})))}}]),t}(n.Component),te=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"wrap"},c.a.createElement(j,null),c.a.createElement("div",null,c.a.createElement(ee,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ae=a(20),ne=a(47),ce=Object(ae.c)({contactReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"contactDucks/SEND_MESSAGE":case"contactDucks/SEND_MESSAGE_SLIP":case"contactDucks/SEND_MESSAGE_SUCCESS":return n;case"contactDucks/RESET_STATE":return J;default:return e}}}),re=D.a.mark(se);function se(){return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(M.a)([q()]);case 2:case"end":return e.stop()}},re,this)}var le=Object(ne.a)(),oe=Object(ae.d)(ce,Object(ae.a)(le));le.run(se),window.store=oe;var ie=oe,me=c.a.createElement(A.a,{store:ie},c.a.createElement(l.a,null,c.a.createElement(te,null)));s.a.render(me,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,2,1]]]);
//# sourceMappingURL=main.80d05016.chunk.js.map