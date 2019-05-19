import React, { Component } from 'react';
import { Route, NavLink, BrowserRouter } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Projects from "./projects";
import Academics from "./academics";

class Navigation extends Component {
	navBoxStyle = {
		textDecoration: "none",
		color: "black"
	};

 	handleSurprise(e) {
 		e.preventDefault();

		var popUpSurprise = function() {
			// Keep the vanilla JS...
			var popUpImg = document.createElement("IMG");
			popUpImg.setAttribute("id", "popUp");
			popUpImg.setAttribute("src", "./images/thumbsup.gif");
			popUpImg.setAttribute("alt", "Thumbs Up Surprise");
			popUpImg.style.position = "absolute";
			popUpImg.style.top = "-300px";
			popUpImg.style.left = "25%";
			popUpImg.style.zIndex = "99"; // TODO: create a file with list of z-index 
			document.body.insertBefore(popUpImg, document.body.firstChild);
		};
		popUpSurprise();

		setTimeout(function() {
			var popUpImg = document.getElementById("popUp");
			document.body.removeChild(popUpImg);
			alert("Coming soon!");
		}, 3000);
	}

	render() {
		return (      
			<BrowserRouter>
				<div id="mainheader">
	        		<h1 id="pagetitle"> Jadon Fan </h1>
	        		<h1 id="minpagetitle"> Jadon </h1>

	        		<span id="todaydate"> 
	          			<script type="text/javascript"> getTodayDate() </script>
	        		</span>

	        		<nav id="customnavbar">
	      				<ul>
							<li> <NavLink to="/" style={this.navBoxStyle}>          Home      </NavLink> </li>
							<li> <NavLink to="/about" style={this.navBoxStyle}>     About     </NavLink> </li>
							<li> <NavLink to="/projects" style={this.navBoxStyle}>  Projects  </NavLink> </li>
							<li> <NavLink to="/academics" style={this.navBoxStyle}> Academics </NavLink> </li>
							<li onClick={this.handleSurprise}> <a id="surprise" style={this.navBoxStyle}> More </a> </li>
						</ul>
	        		</nav>
	     		</div> 
	     		<div>
        			<Route exact path="/" component={Home} />
        			<Route path="/about" component={About} />
        			<Route path="/projects" component={Projects} />
        			<Route path="/academics" component={Academics} />
	        	</div>
	     	</BrowserRouter>
     	);
	}
} 

export default Navigation;