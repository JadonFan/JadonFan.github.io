import React, { Component } from 'react';

class About extends Component {
	libsFrames = ["JDBC", "JPA/Hibernate", "Spring", "JavaFX", "Bootstrap", "React", "Django", "Numpy", "Pygame"];
	tools = ["Git", "Jira", "Jenkins", "JMeter", "Android SDK", "Postman"];

	constructor(props) {
		super(props);
		this.myRef = React.createRef();
		this.handleMouseHoverOnTag = this.handleMouseHoverOnTag.bind(this);
		this.state = {
			isHovering: false
		};
	}

	handleMouseHoverOnTag() {
		this.setState(this.toggleHoverState);
	}

	toggleHoverState(state) {
	    return { isHovering: !state.isHovering };
	}

	monthDiff(d1, d2) {
		var months = (d2.getFullYear() - d1.getFullYear()) * 12;
		months -= d1.getMonth() + 1;
		months += d2.getMonth();
		return months <= 0 ? 0 : months;
	}

	getTimeSinceStart(expSince="unknown") {
		var expTimeFormat = expSince;
		if (expSince instanceof Date) { 	// convert the text detailing the experience time to a suitable format when displayed
			var today = new Date();
			var monthsDiff = this.monthDiff(expSince, today);
			if (monthsDiff < 12) {
				expTimeFormat = `${monthsDiff} months`;
			} else if (monthsDiff % 12 === 0) {
				expTimeFormat = `${Math.floor(monthsDiff / 12)} years`; 
			} else {
				expTimeFormat = `${Math.floor(monthsDiff / 12)} years and ${monthsDiff % 12} months`; 
			}
		} 

		return expTimeFormat;
	}

	getSQLDetails(name) {
		if (name.match(new RegExp(".*SQL.*"))) {
			var SQLDetails = <> <b>Variations</b>: mySQL, Oracle SQL, PostgreSQL <br/> </>;
			return SQLDetails;
		} 

		return;
	}

	createTagDetails(name, expSince="unknown", profLevel="unknown", ...projects) { 
		return (
			<>
				<b>Experience</b>: {this.getTimeSinceStart(expSince)} 
				<br/>
				<b>Comfortability</b>: {profLevel}
				<br/>
				{this.getSQLDetails(name)} 
				<b>Relevant Projects</b>: 
				<br/>
				{Array.from(projects).map(projectName => <> &nbsp; &nbsp; &#x25CF; {projectName} <br/> </>)}
			</>
		);
	}

	// TODO move the language tag details into an object of objects
	render() {
		return (
			<div id="aboutbody">
				<form className="form-inline" style={{float: "right",marginRight: 5}}>
					<input className="form-control mr-sm-2" style={{width: 250}} type="search" /> 
					<button className="btn btn-success" type="submit"> Search </button>
				</form>

				<div style={{margin: 10}}>
					<h1 style={{marginBottom: 0}}> Programming </h1> 
					<p style={{fontSize: 15}}> <em> Some tags contain more information such as my level of experience. You can see these details by hovering your cursor over a particular tag like a tool tip. </em> </p>
					<br/>
					<h4> Languages </h4>
					<ul className="knowmetag hoverabletag"> 
						<li onMouseEnter={this.handleMouseHoverOnTag} onMouseLeave={this.handleMouseHoverOnTag}> 
							{this.state.isHovering && <span className="tagDetails"> {this.createTagDetails("Python", new Date(2015, 8, 1), 9, 'Third person shooting game with 2D and 3D graphics', 'Sudoku on the command line interface', 'Assignment test scripts on the bash shell', 'Various university assignments in programming courses')} </span>} Python 
						</li> 					 
						<li onmouseover="showTagDetails(this, new Date(2018, 1, 1), 9, 'Student planner desktop app', 'Tic-tac-toe and card game app for Android', 'Automated RMI and RESTful API tests for an EMR software')" onmouseout="hideTagDetails(this)"> <span> </span> Java </li>
						<li onmouseover="showTagDetails(this, new Date(2017, 8, 7), 8, 'Controllable and movable Arduino pitching machine', 'Various university assignments in programming courses')" onmouseout="hideTagDetails(this)"> <span> </span> C++ </li>
						<li onmouseover="showTagDetails(this, new Date(2019, 0, 15), 7)" onmouseout="hideTagDetails(this)"> <span> </span> Javascript </li>
						<li onmouseover="showTagDetails(this, new Date(2019, 0, 10), 6)" onmouseout="hideTagDetails(this)"> <span> </span> SQL </li>
						<li onmouseover="showTagDetails(this, new Date(2019, 0, 24), 7)" onmouseout="hideTagDetails(this)"> <span> </span> HTML/CSS </li>
					</ul>
				</div>
				<br/>
				<div style={{margin: 10}}>
					<h4> Libraries and Frameworks </h4>
					<ul className="knowmetag hoverabletag"> 
						{this.libsFrames.map(name => <li onmouseover="showTagDetailsLess(this)" onmouseout="hideTagDetails(this)" key={name}> <span> </span> {name} </li>)}
					</ul>
				</div>
				<br/>
				<div style={{margin: 10}}>
					<h4> Tools </h4>
					<ul className="knowmetag"> 
						{this.tools.map(name => <li key={name}> {name} </li>)}
					</ul>
				</div>
				<hr/>
				<div style={{margin: 10}}>
					<h1> Education </h1>
						<h4 style={{marginLeft: 30, marginBottom: 3}}> Candidate for Bachelor in Applied Engineering, Honours </h4> 
						<p style={{marginLeft:30, marginRight: 30, fontSize: 15}}>
							&nbsp; &nbsp; &nbsp; Computer Engineering 
							<br/>
							&nbsp; &nbsp; &nbsp; Class of 2022 
						</p>
						<ul className="knowmetag hoverabletag"> 
							<li className="expandedtag"> Data Structures and Algorithms </li>  
							<li className="expandedtag"> Introduction to Programming </li>
							<li className="expandedtag"> Digital Circuits and Systems </li>
							<li className="expandedtag"> Digital Computers </li>
							<li className="expandedtag"> Advanced Calculus I </li>
							<li className="expandedtag"> Numerical Methods </li>
						</ul>
				</div>
				<hr/>
				<div style={{margin: 10}}>
					<h1> Interests </h1>
					<ul className="knowmetag"> 
						<li> Chess </li>  
						<li> Cooking </li>
						<li> Table Tennis </li>
						<li> Programming </li>
						<li> Gardening </li>
					</ul>
				</div>
				<hr/>
				<div style={{margin: 10}}>
					<h1> Biography </h1>
					<p style={{textAlign: "left", margin: "0 30px 450px 30px", fontSize:15}}>
						I am Jadon Fan. I study Computer Engineering at the University of Waterloo in Ontario, Canada. I am part of the graduating class of 2022 and currently in my second
						year of study. I am part of the University's co-op program, which means that I alternate between study terms and work terms every 4 months. I hope you enjoy exploring my website, which I am using to create my dream website and gain experience on web development. I am always open to feedback on how I can improve the website (or the code!), so please feel free to email me, or go to the home page and fill out the form. 
						<br/> <br/>
						I may or may not post a picture of myself on my website in the future depending on whether or not I can find a "decent" up-to-date picture of myself.
						Otherwise, my biography will just be all text.
					</p>
				</div>
			</div>
		);
	}
}

export default About;