(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},24:function(e,t,a){e.exports=a(40)},29:function(e,t,a){},30:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),l=a.n(o);a(29),a(21),a(30);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(31);var i=a(2),s=a(3),c=a(5),m=a(4),u=a(6),h=a(13),d=a(11),g=a(7),p=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).feedbackFormStyle={margin:"200px 0 0 20px",position:"relative",top:30,width:"89%"},a.handleShowBar=a.handleShowBar.bind(Object(g.a)(a)),a.handleLeaveBar=a.handleLeaveBar.bind(Object(g.a)(a)),a.state={isShowing:!1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleShowBar",value:function(){var e=this;setTimeout(function(){return e.setState({isShowing:!0})},450),clearInterval()}},{key:"handleLeaveBar",value:function(){this.setState({isShowing:!1})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"layoutAC1",onMouseEnter:this.handleShowBar,onMouseLeave:this.handleLeaveBar,style:{backgroundColor:"#00303F"}},r.a.createElement("a",{className:"extlinkref",href:"https://github.com/JadonFan",style:{textDecorationLine:"none"}},r.a.createElement("div",{className:"extbar"},r.a.createElement("img",{src:"images/GitLogo.png",alt:"Git"}),this.state.isShowing&&r.a.createElement("text",null," Repository "))),r.a.createElement("a",{className:"extlinkref",href:"https://play.google.com/store/apps/details?id=c.jadon.tictactoe",style:{textDecorationLine:"none"}},r.a.createElement("div",{className:"extbar"},r.a.createElement("img",{src:"images/MyAppLogo.png",alt:"MyAndroidApp"}),this.state.isShowing&&r.a.createElement("text",null," Android App "))),r.a.createElement("a",{className:"extlinkref",href:"https://www.linkedin.com/in/jiajun-fan-414993141/",style:{textDecorationLine:"none"}},r.a.createElement("div",{className:"extbar"},r.a.createElement("img",{src:"images/LinkedInLogo.png",alt:"LinkedIn"}),this.state.isShowing&&r.a.createElement("text",null," LinkedIn "))),r.a.createElement("a",{className:"extlinkref",href:"https://waterlooworks.uwaterloo.ca/home.htm",style:{textDecorationLine:"none"}},r.a.createElement("div",{className:"extbar"},r.a.createElement("img",{src:"images/UWLogo.png",alt:"WaterlooWorks"}),this.state.isShowing&&r.a.createElement("text",null," WaterlooWorks "))),r.a.createElement("br",null),this.state.isShowing&&r.a.createElement("form",{className:"medform",style:this.feedbackFormStyle},r.a.createElement("h5",{style:{color:"white",position:"relative"}}," Feedback "),r.a.createElement("textarea",{className:"filltextbox",name:"feedback",rols:"30",cols:"27"}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",name:"submit",value:"Send",style:{backgroundColor:"green",width:"44%"}}),r.a.createElement("input",{type:"reset",name:"delete",style:{backgroundColor:"red",width:"44%"}}))),r.a.createElement("div",{className:"layoutAC2"},r.a.createElement("iframe",{src:"https://calendar.google.com/calendar/embed?src=jdsare%40gmail.com&ctz=America%2FToronto",style:{border:0},width:"800",height:"600",frameBorder:"0",scrolling:"no",title:"Calendar"})))}}]),t}(n.Component),f=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).languages={Python:{altName:"Python",startDate:new Date(2015,8,1),comfortability:9,projects:["Third person shooting game with 2D and 3D graphics","Sudoku on the command line interface","Assignment test scripts on the bash shell","Various university assignments in programming courses"]},Java:{altName:"Java",startDate:new Date(2018,1,1),comfortability:9,projects:["Student planner desktop app","Tic-tac-toe and card game app for Android","Automated RMI and RESTful API tests for an EMR software"]},C:{altName:"C",startDate:new Date(2018,1,15),comfortability:8,projects:["Various university assignments for discrete mathematics course","Currently using the C language in three courses this term"]},CPP:{altName:"C++",startDate:new Date(2017,8,7),comfortability:8,projects:["Controllable and movable Arduino pitching machine","Various university assignments in programming courses"]},JavaScript:{altName:"JavaScript",startDate:new Date(2019,0,15),comfortability:7,projects:[]},SQL:{altName:"SQL",startDate:new Date(2019,0,10),comfortability:6,projects:[]},HTMLCSS:{altName:"HTML/CSS",startDate:new Date(2019,0,24),comfortability:7,projects:[]}},a.myRef=r.a.createRef(),a.handleMouseHoverOnTag=a.handleMouseHoverOnTag.bind(Object(g.a)(a)),a.state={isHovering:!1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleMouseHoverOnTag",value:function(){this.setState(this.toggleHoverState())}},{key:"toggleHoverState",value:function(){return{isHovering:!this.state.isHovering}}},{key:"monthDiff",value:function(e,t){var a=12*(t.getFullYear()-e.getFullYear());return a-=e.getMonth()+1,(a+=t.getMonth())<=0?0:a}},{key:"getTimeSinceStart",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"unknown",t=e;if(e instanceof Date){var a=new Date,n=this.monthDiff(e,a);t=n<12?"".concat(n," months"):n%12===0?"".concat(Math.floor(n/12)," years"):"".concat(Math.floor(n/12)," years and ").concat(n%12," months")}return t}},{key:"getSQLDetails",value:function(e){if(e.match(new RegExp(".*SQL.*")))return r.a.createElement(r.a.Fragment,null," ",r.a.createElement("b",null,"Variations"),": mySQL, Oracle SQL, PostgreSQL ",r.a.createElement("br",null)," ")}},{key:"createTagDetails",value:function(e){var t=this.languages[e];return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"tagDetails"},r.a.createElement("b",null,"Experience"),": ",this.getTimeSinceStart(t.startDate),r.a.createElement("br",null),r.a.createElement("b",null,"Comfortability"),": ",t.comfortability," / 10",r.a.createElement("br",null),this.getSQLDetails(e),r.a.createElement("b",null,"Relevant Works"),":",r.a.createElement("br",null),r.a.createElement("ul",{className:"tagworks"},Array.from(t.projects).map(function(e){return r.a.createElement("li",null," ",e," ")}))))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{onMouseEnter:this.handleMouseHoverOnTag,onMouseLeave:this.handleMouseHoverOnTag},this.state.isHovering&&this.createTagDetails(this.props.name),this.languages[this.props.name].altName))}}]),t}(n.Component),b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).funFacts=["\n\t\tSurprisingly, I was good at drawing when I was a children. I won a few drawing contests, and \n\t\tmost of work were based on still life. Some contests were serious; others\n\t\twere just for fun. The most notable contest that I entered was a Club Penguin (RIP that game)\n\t\tevent, which won me an exclusive Club Penguin plushie. \n        ","\n        Coming soon...\n        ","\n        Coming soon...\n        ","\n        Coming soon...\n        ","\n        Coming soon...\n        "],a.handlePreviousFunFact=a.handlePreviousFunFact.bind(Object(g.a)(a)),a.handleNextFunFact=a.handleNextFunFact.bind(Object(g.a)(a)),a.state={funFactNum:0},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handlePreviousFunFact",value:function(){var e=this.state.funFactNum-1;e<0&&(e=this.funFacts.length-1),this.setState({funFactNum:e})}},{key:"handleNextFunFact",value:function(){var e=this.state.funFactNum+1;e>=this.funFacts.length&&(e=0),this.setState({funFactNum:e})}},{key:"createFactTrackDot",value:function(e){var t=this.state.funFactNum===e?{backgroundColor:"black"}:{backgroundColor:"#A9A9A9"};return r.a.createElement("div",{key:e,className:"dot",style:t})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"card",style:{paddingTop:0,paddingBottom:0,width:"50%",left:"25%",right:"25%",marginTop:30}},r.a.createElement("div",{className:"card-header",style:{padding:0}},r.a.createElement("h1",{className:"card-header"}," Fun Facts ")),r.a.createElement("div",{className:"card-body",style:{fontSize:13,height:200,padding:0}},r.a.createElement("span",{className:"card-text",style:{margin:0}},!1,r.a.createElement("p",null,this.funFacts[this.state.funFactNum]),!1)),r.a.createElement("div",{className:"card-footer text-muted",style:{padding:0}},r.a.createElement("span",{style:{float:"left",height:"100%",marginLeft:0}},r.a.createElement("button",{onClick:this.handlePreviousFunFact},"\xab")),r.a.createElement("span",{id:"#facttrackerbar",style:{float:"center",height:"100%",width:"auto"}},Array.from({length:this.funFacts.length},function(t,a){return e.createFactTrackDot(a)})),r.a.createElement("span",{style:{float:"right",height:"100%",marginRight:0}},r.a.createElement("button",{onClick:this.handleNextFunFact},"\xbb"))))}}]),t}(n.Component),y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).libsFrames=["Spring Boot","JDBC","JPA/Hibernate","JavaFX","Bootstrap","React","Numpy","Pygame"],a.tools=["Git","Jira","Jenkins","JMeter","Android SDK","Postman"],a.courses=["Data Structures and Algorithms","Introduction to Programming","Digital Circuits and Systems","Digital Computers","Advanced Calculus I","Numerical Methods"],a.interests=["Chess","Cooking","Table Tennis","Coding","Gardening"],a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"aboutbody"},r.a.createElement("form",{className:"form-inline",style:{float:"right",marginRight:5}},r.a.createElement("input",{className:"form-control mr-sm-2",style:{width:250},type:"search"}),r.a.createElement("button",{className:"btn btn-success",type:"submit"}," Search ")),r.a.createElement("div",null,r.a.createElement("h1",{style:{marginBottom:0}}," Programming "),r.a.createElement("p",{style:{fontSize:15}}," ",r.a.createElement("em",null," Some tags contain more information such as my level of experience. You can see these details by hovering your cursor over a particular tag. ")," "),r.a.createElement("br",null),r.a.createElement("h4",null," Languages "),r.a.createElement("ul",{className:"knowmetag hoverabletag"},r.a.createElement(f,{name:"Python"}),r.a.createElement(f,{name:"Java"}),r.a.createElement(f,{name:"C"}),r.a.createElement(f,{name:"CPP"}),r.a.createElement(f,{name:"JavaScript"}),r.a.createElement(f,{name:"SQL"}),r.a.createElement(f,{name:"HTMLCSS"})),r.a.createElement("br",null),r.a.createElement("h4",null," Libraries and Frameworks "),r.a.createElement("ul",{className:"knowmetag hoverabletag"},this.libsFrames.map(function(e){return r.a.createElement("li",{key:e}," ",r.a.createElement("span",null," ")," ",e," ")})),r.a.createElement("br",null),r.a.createElement("h4",null," Tools "),r.a.createElement("ul",{className:"knowmetag"},this.tools.map(function(e){return r.a.createElement("li",{key:e}," ",e," ")}))),r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement("h1",null," Education "),r.a.createElement("h4",{style:{marginLeft:30,marginBottom:3}}," Candidate for Bachelor in Applied Engineering, Honours "),r.a.createElement("p",{style:{marginLeft:30,marginRight:30,fontSize:15}},"\xa0 \xa0 \xa0 Computer Engineering",r.a.createElement("br",null),"\xa0 \xa0 \xa0 Class of 2022"),r.a.createElement("ul",{className:"knowmetag"},this.courses.map(function(e){return r.a.createElement("li",{className:"expandedtag",key:e}," ",e," ")}))),r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement("h1",null," Interests "),r.a.createElement("ul",{className:"knowmetag"},this.interests.map(function(e){return r.a.createElement("li",{key:e}," ",e," ")}))),r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement("h1",null," Biography "),r.a.createElement("div",{style:{display:"inline-block"}},r.a.createElement("p",{style:{textAlign:"left",fontSize:15}},r.a.createElement("img",{src:"images/jadon.png",width:"250",height:"250",alt:"Jadon",style:{float:"left",marginRight:20}}),"I am Jadon Fan. I study Computer Engineering at the University of Waterloo in Ontario, Canada. I am part of the graduating class of 2022 and currently in my second year of study. I am part of the University's co-op program, which means that I alternate between study terms and work terms every 4 months. I hope you enjoy exploring my website, which I am using to create my dream website and gain experience on web development. I am always open to feedback on how I can improve the website, so please feel free to email me, or go to the home page and fill out the form.",r.a.createElement("br",null)," ",r.a.createElement("br",null),"I chose Computer Engineering because I wanted to explore both hardware and software. While it may sound clich\xe9, I enjoy the flexibility of what can be accomplished through programming. On one day, I might be writing code for a software that will advance medical technologies or for a game with gameplay mechanics and plots to my liking. On another day, I might be programming an embedded microprocessor, like I am currently doing in ECE298, to remotely adjust fan speeds by clapping your hands. On the other hand, I am curious about how hardware is used to run software. Since I was first introduced to programming back in high school, I have wondered exactly how a series of words on a screen can instruct a computing device to do something, and how a computing device is able to store and follow those instructions.",r.a.createElement("br",null)," ",r.a.createElement("br",null),"I would describe myself as a determined person who loves to employ his problem solving skills. When I face a problem, I will put in as much effort as I can (eating and sleeping are still important!), and use whatever relevant tools I have at my disposal, to find a solution to that problem. My mantra is that,",r.a.createElement("i",null," while it is important to work hard, working smart is more efficient and effective"),". Meanwhile, my friends would probably describe me as a helpful person whenever it is help with academic work or just life in general. Helping people not only enables me to put my knowledge and skills to good use, but also provides a great learning opportunity for myself. For example, if I make a mistake when I help others, I become aware that I might make that same mistake in the future and will try to find why I made that mistake and how I can potentially avoid it.")),r.a.createElement(b,null)))}}]),t}(n.Component),E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).projects={Planner:{description:"A Java desktop app to help students organize their life",projectFilePath:"files/Planner-all.jar",iconPath:"images/plannericon.png",downloadRequirements:"Requires at least Java 8",features:["Organize ongoing assessments for each course and events for each day","Send an email to either yourself or someone else to remind the recipient about upcoming events through the Gmail APIs","Connect to the MySQL database hosted on AWS to save user-specific changes, and user details such as username and hashed + salted password","Call some APIs, implemented in Spring Boot, to retrieve, add and update user data remotely"],techsUsed:["JavaFX","JDBC","JPA/Hibernate","Spring Boot","MySQL","AWS RDS","Gmail API (OAuth2)"]},Classics:{description:"An Android app to play some classic games against a friend or computer",projectFilePath:"",iconPath:"images/MyAppLogo.png",downloadRequirements:"Requires Android Marshmallow or later",features:["Play a standard game of tic tac toe on a 3 x 3 grid against either another human or against the computer","Currently developing some classic card games, such as goldfish, with animations to be bundled with tic tac toe"],techsUsed:["Android SDK","XML","Java"]},Madman:{description:"An unique desktop TPS game written in Python",projectFilePath:"",iconPath:"images/madmanicon.png",downloadRequirements:"Requires Python 3 (soon to be 3.6+ for f strings)",features:[],techsUsed:["Pygame","PyOpenGL","Numpy","MatPlotLib"]},Pitcher:{description:"An Arduino-powered pitching machine on movable wheels written in C++",projectFilePath:"",iconPath:"images/arduino.png",downloadRequirements:"",features:[],techsUsed:["Arduino UNO","C++"]}},a.handleShowingProjectInfo=a.handleShowingProjectInfo.bind(Object(g.a)(a)),a.handleHidingProjectInfo=a.handleHidingProjectInfo.bind(Object(g.a)(a)),a.state={isShowing:!1,shownProjectName:void 0},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleShowingProjectInfo",value:function(e){this.state.isShowing&&e===this.state.shownProjectName||this.setState({isShowing:!0,shownProjectName:e})}},{key:"handleHidingProjectInfo",value:function(){this.state.isShowing&&this.setState({isShowing:!1})}},{key:"createProjectPanes",value:function(e){var t=this,a=this.projects[e];return r.a.createElement("div",{className:"projectpane",key:e,style:"Pitcher"===e?{bottom:20}:{}},r.a.createElement("img",{src:a.iconPath,alt:e,className:"image img-fluid"}),r.a.createElement("div",{className:"overlay"},r.a.createElement("div",{className:"text"},r.a.createElement("h1",null," ",e," "),r.a.createElement("p",{style:{fontSize:12}},a.description),r.a.createElement("button",{className:"btn btn-primary learnmore",onClick:function(){return t.handleShowingProjectInfo(e)}},"Learn More"))))}},{key:"render",value:function(){var e=this,t=this.projects[this.state.shownProjectName];return r.a.createElement("div",{id:"projectsbody"},r.a.createElement("div",{className:"container-width"},r.a.createElement("div",{style:{marginBottom:20}},Object.keys(this.projects).map(function(t){return e.createProjectPanes(t)})),r.a.createElement("div",{className:"row"},this.state.isShowing&&r.a.createElement("div",{className:"projectinfo"},r.a.createElement("div",{className:"projectinfotitlebox"},r.a.createElement("text",{style:{fontSize:35,color:"white"}},r.a.createElement("b",null," ",this.state.shownProjectName," ")),r.a.createElement("button",{className:"btn btn-secondary",onClick:this.handleHidingProjectInfo},"Show Less"),r.a.createElement("button",{className:"btn btn-secondary",style:{marginRight:10}},r.a.createElement("a",{href:t.projectFilePath,style:{textDecoration:"none"},download:!0},"Download Project"))),r.a.createElement("div",{style:{color:"white"}},r.a.createElement("p",null," ",r.a.createElement("strong",null," ",t.downloadRequirements," ")," "),r.a.createElement("h4",null," Features "),r.a.createElement("ul",null,t.features.map(function(e){return r.a.createElement("li",{key:e}," ",e," ")})),r.a.createElement("h4",null," Technologies Used "),r.a.createElement("ul",null,t.techsUsed.map(function(e){return r.a.createElement("li",{key:e}," ",e," ")})),r.a.createElement("h4",null," Rating "),r.a.createElement("div",{className:"btn-group",role:"group","aria-label":"Project Rating"},Array.from({length:10},function(e,t){return r.a.createElement("button",{type:"button",className:"btn btn-secondary",style:{width:60,marginTop:0,paddingTop:0,backgroundColor:"#D3D3D3"}},t+1)})))))))}}]),t}(n.Component),v=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("h1",null," Hello World ")}}]),t}(n.Component),w=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).navBoxStyle={textDecoration:"none",color:"black"},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleSurprise",value:function(e){e.preventDefault();!function(){var e=document.createElement("IMG");e.setAttribute("id","popUp"),e.setAttribute("src","images/thumbsup.gif"),e.setAttribute("alt","Thumbs Up Surprise"),e.style.position="absolute",e.style.left="25%",e.style.top="20%",e.style.zIndex="101",document.body.insertBefore(e,document.body.firstChild)}(),setTimeout(function(){var e=document.getElementById("popUp");document.body.removeChild(e),alert("Coming soon!")},2500)}},{key:"getTodayDate",value:function(){var e=new Date,t=e.getFullYear(),a=e.getMonth(),n=["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"][a],r=e.getDate();return 3===a&&9===r?"Happy Birthday to Myself!":"".concat(n," ").concat(r,", ").concat(t)}},{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement("div",{id:"mainheader"},r.a.createElement("h1",{id:"pagetitle"}," Jadon Fan "),r.a.createElement("h1",{id:"minpagetitle"}," Jadon "),r.a.createElement("span",{id:"todaydate"},r.a.createElement("b",null," ",this.getTodayDate()," ")),r.a.createElement("nav",{id:"customnavbar"},r.a.createElement("ul",null,r.a.createElement("li",null," ",r.a.createElement(h.b,{to:"/",style:this.navBoxStyle},"          Home      ")," "),r.a.createElement("li",null," ",r.a.createElement(h.b,{to:"/about",style:this.navBoxStyle},"     About     ")," "),r.a.createElement("li",null," ",r.a.createElement(h.b,{to:"/projects",style:this.navBoxStyle},"  Projects  ")," "),r.a.createElement("li",null," ",r.a.createElement(h.b,{to:"/academics",style:this.navBoxStyle}," Academics ")," "),r.a.createElement("li",{onClick:this.handleSurprise}," ",r.a.createElement("a",{id:"surprise",style:this.navBoxStyle}," More ")," ")))),r.a.createElement("div",null,r.a.createElement(d.a,{exact:!0,path:"/",component:p}),r.a.createElement(d.a,{path:"/about",component:y}),r.a.createElement(d.a,{path:"/projects",component:E}),r.a.createElement(d.a,{path:"/academics",component:v})))}}]),t}(n.Component),j=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",null,r.a.createElement("div",{id:"mainfootertext"},r.a.createElement("br",null),r.a.createElement("a",{href:"mailto:j53fan@edu.uwaterloo.ca?Subject=Regarding%20Your%20Website",target:"_top"},r.a.createElement("img",{src:"images/emaillogo.png",alt:"email",height:"30",width:"30"})," Email"),r.a.createElement("br",null)),r.a.createElement("br",null)," ",r.a.createElement("br",null)," ",r.a.createElement("br",null)," ",r.a.createElement("br",null),r.a.createElement("p",{style:{fontSize:13}},"Jadon Fan \xa9 2019. Used under the permission of the author with acknowledgement to those who helped the author with the site."))}}]),t}(n.Component);l.a.render(r.a.createElement(w,null),document.getElementById("root")),l.a.render(r.a.createElement(j,null),document.getElementById("footer")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.cf645802.chunk.js.map