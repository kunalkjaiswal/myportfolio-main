(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{104:function(e,t,a){},336:function(e,t,a){},342:function(e,t,a){},343:function(e,t,a){},348:function(e,t,a){},353:function(e,t,a){},355:function(e,t,a){"use strict";a.r(t);var s=a(3),c=a(2),i=a.n(c),n=a(32),r=a.n(n),l=(a(104),a(22)),o=a.n(l),d=a(95),j=a(17),h=a(18),b=a(20),u=a(19),m=a(96),p=a.n(m),x=a(97),O=a.n(x),f=a(47),v=a(29),N=(a(336),function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(j.a)(this,a),(e=t.call(this)).state={pcMode:window.innerWidth>=760,particleValue:window.innerWidth>=760?100:40,particleDensity:window.innerWidth>=760?120:50},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resize.bind(this)),this.resize()}},{key:"resize",value:function(){window.innerWidth>=760!==this.state.pcMode&&this.setState({particleValue:window.innerWidth>=760?100:40,particleDensity:window.innerWidth>=760?120:50})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resize.bind(this))}},{key:"render",value:function(){var e=this.state,t=e.particleDensity,a=e.particleValue;if(this.props.data)var c=this.props.data.name,i=this.props.data.jobTitle;return Object(s.jsxs)("header",{className:"home container",id:"home",children:[Object(s.jsxs)(f.a,{expand:"lg",children:[Object(s.jsx)(f.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(s.jsx)(f.a.Collapse,{id:"basic-navbar-nav",children:Object(s.jsxs)(v.a,{className:"mr-auto",children:[Object(s.jsx)(v.a.Link,{href:"#home",children:"Home"}),Object(s.jsx)(v.a.Link,{href:"#about",children:"About"}),Object(s.jsx)(v.a.Link,{href:"#skills",children:"Skills"}),Object(s.jsx)(v.a.Link,{href:"#experience",children:"Experience"}),Object(s.jsx)(v.a.Link,{href:"#contact",children:"Contact"})]})})]}),Object(s.jsx)(p.a,{canvasClassName:"particles",params:{particles:{number:{value:a,density:t},size:{value:3},color:{value:"#eb83f8"},line_linked:{enable:!0,color:{value:"#eb83f8"}},type:"polygon",polygon:{nb_sides:6}},interactivity:{events:{onhover:{enable:!0,mode:"repulse"}},modes:{repulse:{distance:150}}}}}),Object(s.jsx)("div",{className:"row home container",children:Object(s.jsxs)("div",{className:"content-text",children:[Object(s.jsx)("div",{className:"line-text",children:Object(s.jsx)("h4",{children:"Hello, I'm"})}),Object(s.jsx)("div",{className:"glitch","data-text":c,children:c}),Object(s.jsx)(O.a,{options:{strings:i,autoStart:!0,loop:!1}}),Object(s.jsx)("div",{className:"columns download",children:Object(s.jsx)("p",{children:Object(s.jsxs)("a",{href:"/Resume.pdf",target:"_blank",className:"button",children:[Object(s.jsx)("i",{name:"resume",className:"fa fa-download"}),"Download Resume"]})})})]})})]})}}]),a}(c.Component)),g=(a(342),function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(j.a)(this,a),(s=t.call(this,e)).state={social:[]},s}return Object(h.a)(a,[{key:"componentDidUpdate",value:function(){void 0!==this.props.data.social&&this.props.data.social!==this.state.social&&this.setState({social:this.props.data.social})}},{key:"render",value:function(){if(this.props.data)var e=this.props.data.title,t=this.props.data.description,a=this.props.data.hobbies,c=this.props.data.pic;return Object(s.jsxs)("div",{className:"row about container",id:"about",children:[Object(s.jsxs)("div",{className:"col-sm-5",children:[Object(s.jsx)("div",{className:"profile-img",children:Object(s.jsx)("img",{src:c})}),Object(s.jsx)("div",{className:"social",children:this.state.social.map((function(e,t){return Object(s.jsx)("span",{className:"social-acc",children:Object(s.jsx)("a",{href:e.url,target:"_blank",children:Object(s.jsx)("i",{className:e.class})})},t)}))})]}),Object(s.jsxs)("div",{className:"col-sm-7 content",children:[Object(s.jsx)("div",{className:"line-text",children:Object(s.jsx)("h4",{children:"About Me"})}),Object(s.jsx)("h3",{children:e}),Object(s.jsx)("div",{className:"separator"}),Object(s.jsx)("p",{children:t}),Object(s.jsx)("p",{children:a})]})]})}}]),a}(c.Component)),k=function(e){var t=e.bgcolor,a=e.completed,c={height:"100%",width:"".concat(a,"%"),backgroundColor:t,borderRadius:"inherit",textAlign:"right",transition:"width 5s ease-in",display:"block"},i={padding:0,color:t,position:"absolute",top:0,fontSize:12,fontFamily:"Poppins",left:"".concat(a/2+(a/3+a%3),"%"),fontWeight:500};return Object(s.jsx)("div",{style:{height:8,width:"80%",backgroundColor:"#bfbfbf",borderRadius:50,marginTop:10,marginLeft:10},children:Object(s.jsx)("div",{style:c,className:"progress-bar",children:Object(s.jsx)("span",{style:i,children:"".concat(a,"%")})})})},y=(a(343),function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(j.a)(this,a),(s=t.call(this,e)).state={icons:[]},s}return Object(h.a)(a,[{key:"componentDidUpdate",value:function(){void 0!==this.props.data.icons&&this.props.data.icons!==this.state.icons&&this.setState({icons:this.props.data.icons})}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"row skills container",id:"skills",children:[Object(s.jsx)("div",{className:"line-text",children:Object(s.jsx)("h4",{children:"Skills"})}),Object(s.jsx)("div",{className:"row skill-tech",children:this.state.icons.map((function(e,t){return Object(s.jsxs)("div",{className:"col-sm-4 tech",children:[Object(s.jsx)("span",{className:"tech-icon",children:Object(s.jsx)("i",{className:e.class})}),Object(s.jsx)(k,{bgcolor:e.color,completed:e.level})]},t)}))})]})}}]),a}(c.Component)),w=a(46),S=(a(347),a(348),function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=[{work:[],tech:[]}];return this.props.data&&(e=this.props.data),Object(s.jsxs)("div",{className:"row experience container",id:"experience",children:[Object(s.jsx)("div",{className:"line-text",children:Object(s.jsx)("h4",{children:"Experience"})}),Object(s.jsx)("div",{className:"eperience-timeline",children:Object(s.jsxs)(w.VerticalTimeline,{children:[e.map((function(e,t){return Object(s.jsxs)(w.VerticalTimelineElement,{className:"vertical-timeline-element--work",contentStyle:{background:"#fff",color:"#000"},contentArrowStyle:{borderRight:"7px solid  #fff"},date:e.date,icon:Object(s.jsx)("img",{src:e.image,className:e.imgClass}),children:[Object(s.jsx)("h3",{className:"vertical-timeline-element-title",children:e.title}),Object(s.jsx)("h4",{className:"vertical-timeline-element-subtitle",children:e.company}),Object(s.jsx)("ul",{className:"work-list",children:e.work.map((function(e,t){return Object(s.jsxs)("li",{children:[Object(s.jsx)("i",{className:"fa fa-chevron-right","aria-hidden":"true"}),Object(s.jsx)("span",{className:"list-item",children:e})]},t)}))}),Object(s.jsx)("div",{className:"technologies row",children:e.tech.map((function(e,t){return Object(s.jsx)("div",{className:"tech-item",children:Object(s.jsx)("span",{children:e})},t)}))})]},t)})),Object(s.jsx)(w.VerticalTimelineElement,{className:"vertical-timeline-element--work work-last-node",contentStyle:{background:"#fff",color:"#000"},contentArrowStyle:{borderRight:"7px solid  #fff"},icon:Object(s.jsx)("i",{className:"fa fa-briefcase","aria-hidden":"true"})})]})})]})}}]),a}(c.Component)),C=a(98),E=a.n(C),M=a(60),I=a.n(M),B=(a(353),function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(j.a)(this,a),(e=t.call(this)).validateInput=function(){try{e.setState({errorMsg:"",disableButton:!0});var t=e.state;if(""===t.userName||""===t.userEmail||""===t.subject||""===t.message)return void e.setState({errorMsg:"All fields are mandatory!",disableButton:!1});if(!/\S+@\S+\.\S+/.test(t.userEmail))return void e.setState({errorMsg:"Please enter valid email.",disableButton:!1});e.sendEmail()}catch(a){console.log(a.message)}},e.sendEmail=function(){try{var t=e.state,a={from_name:t.userName,from_email:t.userEmail,subject:t.subject,message:t.message};E.a.send("service_1u2zdmg","template_hncri6r",a,"user_uiSc4o7rSSEQRO9FGdNlb").then((function(t){e.setState({userName:"",userEmail:"",subject:"",message:"",disableButton:!1}),I()("Email Sent","Thank you for the mail, will get back soon!!","success")}),(function(e){I()("Error","Something went wrong!!","error")}))}catch(s){console.log(s.message)}},e.state={userName:"",userEmail:"",subject:"",message:"",errorMsg:"",disableButton:!1},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.userName,c=t.userEmail,i=t.subject,n=t.message,r=t.errorMsg,l=t.disableButton;if(this.props.data)var o=this.props.data;return Object(s.jsxs)("div",{className:"row contact container",id:"contact",children:[Object(s.jsx)("div",{className:"line-text",children:Object(s.jsx)("h4",{children:"Contact"})}),Object(s.jsxs)("div",{className:"contact-body row",children:[Object(s.jsxs)("div",{className:"col-sm-5 reach-me",children:[Object(s.jsx)("h3",{className:"contact-tile",children:"Reach me @"}),Object(s.jsxs)("div",{className:"contact-data",children:[Object(s.jsxs)("p",{children:[Object(s.jsx)("i",{className:"fa fa-phone","aria-hidden":"true"}),Object(s.jsx)("span",{className:"contact-item",children:o.phone})]}),Object(s.jsx)("p",{children:Object(s.jsxs)("a",{href:"mailto:"+o.email,children:[Object(s.jsx)("i",{className:"fa fa-envelope-o","aria-hidden":"true"}),Object(s.jsx)("span",{className:"contact-item",children:o.email})]})}),Object(s.jsxs)("p",{children:[Object(s.jsx)("i",{className:"fa fa-map-marker","aria-hidden":"true"}),Object(s.jsx)("span",{className:"add1 contact-item",children:o.address1}),Object(s.jsx)("br",{}),Object(s.jsx)("span",{className:"add2 contact-item",children:o.address2})]})]})]}),Object(s.jsxs)("div",{className:"col-sm-7 say-hello",children:[Object(s.jsx)("h3",{className:"contact-tile",children:"Say Hello!!"}),Object(s.jsxs)("div",{className:"form-body",children:[Object(s.jsxs)("div",{className:"info-input",children:[Object(s.jsx)("input",{type:"text","aria-label":"Name*",placeholder:"Name*",value:a,onChange:function(t){e.setState({userName:t.target.value})}}),Object(s.jsx)("div",{className:"field-icon",children:Object(s.jsx)("i",{className:"fa fa-user","aria-hidden":"true"})})]}),Object(s.jsxs)("div",{className:"info-input",children:[Object(s.jsx)("input",{type:"text","aria-label":"Email*",placeholder:"Email*",value:c,onChange:function(t){e.setState({userEmail:t.target.value})}}),Object(s.jsx)("div",{className:"field-icon",children:Object(s.jsx)("i",{className:"fa fa-envelope","aria-hidden":"true"})})]}),Object(s.jsxs)("div",{className:"subject",children:[Object(s.jsx)("input",{type:"text","aria-label":"Subject*",placeholder:"Subject*",value:i,onChange:function(t){e.setState({subject:t.target.value})}}),Object(s.jsx)("div",{className:"field-icon",children:Object(s.jsx)("i",{className:"fa fa-file-text","aria-hidden":"true"})})]}),Object(s.jsx)("div",{className:"message",children:Object(s.jsx)("textarea",{type:"text","aria-label":"Message*",rows:"10",cols:"140",placeholder:"Message*",value:n,onChange:function(t){e.setState({message:t.target.value})}})}),r.length>0?Object(s.jsx)("p",{className:"errMsg",children:r}):null,Object(s.jsx)("div",{className:"form-btn",children:Object(s.jsx)("button",{disabled:l,onClick:this.validateInput,children:"Send"})})]})]})]})]})}}]),a}(c.Component)),D=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(j.a)(this,a),(s=t.call(this,e)).state={basicInfo:[],about:[],skills:[],experience:[],contact:[]},s}return Object(h.a)(a,[{key:"componentDidMount",value:function(){try{this.fetchBasicInfo()}catch(e){console.log(e.message)}}},{key:"fetchBasicInfo",value:function(){var e=Object(d.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("portfolioData.json");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,this.setState({basicInfo:a.basicInfo,about:a.about,skills:a.skills,experience:a.experience,contact:a.contact}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.message);case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.basicInfo,a=e.about,c=e.skills,i=e.experience,n=e.contact;return Object(s.jsxs)("div",{children:[Object(s.jsx)(N,{data:t}),Object(s.jsx)(g,{data:a}),Object(s.jsx)(y,{data:c}),Object(s.jsx)(S,{data:i}),Object(s.jsx)(B,{data:n})]})}}]),a}(c.Component),L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,357)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,i=t.getLCP,n=t.getTTFB;a(e),s(e),c(e),i(e),n(e)}))};a(354);r.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(D,{})}),document.getElementById("root")),L()}},[[355,1,2]]]);
//# sourceMappingURL=main.e2de0e75.chunk.js.map