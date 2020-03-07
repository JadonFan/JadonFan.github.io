import React, { Component } from 'react';
import { Route, NavLink, BrowserRouter } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Projects from "./projects";
import Academics from "./academics";

/**
 * Renders the navigation bar 
 * Click on the "more" button for a surprise!!!
 * @extends Component
 * @author Jadon
 */
class Navigation extends Component {
	navBoxStyle = {
		textDecoration: "none",
		color: "black"
	};

	/**
	 * Enjoy the surprise gif when you click on the "More" button on the navigation bar!
	 * @param {*} e 
	 */
 	handleSurprise(e) {
 		e.preventDefault();

		var popUpSurprise = function() {
			// Keep the vanilla JS...
			var popUpImg = document.createElement("IMG");
			popUpImg.setAttribute("id", "popUp");
			popUpImg.setAttribute("src", "images/thumbsup.gif");
			popUpImg.setAttribute("alt", "Thumbs Up Surprise");
			popUpImg.style.position = "absolute";
			popUpImg.style.left = "25%";
			popUpImg.style.top = "20%";
			popUpImg.style.zIndex = "101"; // TODO: create a file with list of z-index 
			document.body.insertBefore(popUpImg, document.body.firstChild);
		};
		popUpSurprise();

		setTimeout(function() {
			var popUpImg = document.getElementById("popUp");
			document.body.removeChild(popUpImg);
			alert("Coming soon!");
		}, 2500);
	}

	/**
	 * @returns string representation of the current date for the default locale in the format Month Day, Year
	 */
	getTodayDate() {
		var fullDate = new Date();
		let year = fullDate.getFullYear();
		const month = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
		let monthIndex = fullDate.getMonth();
		let monthString = month[monthIndex];
		let date = fullDate.getDate();
	
		var dateMessage;
		if (monthIndex === 3 && date === 9) {
			dateMessage = `Happy Birthday to Myself!`;
		} else {
			dateMessage = `${monthString} ${date}, ${year}`;
		}
	
		return dateMessage;
	}

	render() {
		return (      
			<BrowserRouter>
				<div id="mainheader">
	        		<h1 id="pagetitle"> Jadon Fan </h1>
	        		<h1 id="minpagetitle"> Jadon </h1>

	        		<span id="todaydate"> 
						<b> {this.getTodayDate()} </b>
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