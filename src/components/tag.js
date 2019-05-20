import React, { Component } from 'react';

/**
 * Contains the details for a specific tag in the "About" page
 * @extends Component
 * @see about.js 
 * @author Jadon
 */
class Tag extends Component {
	languages = {
		Python: {
			altName: "Python",
			startDate: new Date(2015, 8, 1),
			comfortability: 9,
			projects: ['Third person shooting game with 2D and 3D graphics', 
			'Sudoku on the command line interface', 'Assignment test scripts on the bash shell', 
			'Various university assignments in programming courses']
		},
		Java: {
			altName: "Java",
			startDate: new Date(2018, 1, 1),
			comfortability: 9,
			projects: ['Student planner desktop app', 'Tic-tac-toe and card game app for Android', 
			'Automated RMI and RESTful API tests for an EMR software']
		},
		CPP: {
			altName: "C++",
			startDate: new Date(2017, 8, 7),
			comfortability: 8,
			projects: ['Controllable and movable Arduino pitching machine', 
			'Various university assignments in programming courses']
		},
		Javascript: {
			altName: "Javascript",
			startDate: new Date(2019, 0, 15), 
			comfortability: 7,
			projects: []
		},
		SQL: {
			altName: "SQL",
			startDate: new Date(2019, 0, 10),
			comfortability: 6,
			projects: []
		},
		HTMLCSS: {
			altName: "HTML/CSS",
			startDate: new Date(2019, 0, 24),
			comfortability: 7,
			projects: []
		}
	}
	
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
		this.handleMouseHoverOnTag = this.handleMouseHoverOnTag.bind(this);
		this.state = {
			isHovering: false
		};
	}

	handleMouseHoverOnTag() {
		this.setState(this.toggleHoverState());
	}

	toggleHoverState() {
		return { isHovering: !this.state.isHovering };
	}
	
	/**
	 * Finds the difference between two Javascript Date objects, where d1 should ideally be earlier than d2 relative
	 * to the UNIX base time (Thursday Jan. 1, 1970)
	 * @param {Date} d1 
	 * @param {Date} d2 
	 */
	monthDiff(d1, d2) {
		var months = (d2.getFullYear() - d1.getFullYear()) * 12;
		months -= d1.getMonth() + 1;
		months += d2.getMonth();
		return months <= 0 ? 0 : months;
	}

	/**
	 * Gets the string representation of my length of experience, in terms of years and months, with something
	 * @param {Date} expSince 
	 */
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

	/**
	 * Gets the string representation of the details of my SQL knowledge
	 * @param {string} tagName 
	 * @returns a string containing the list of SQL variations that I know if the tagName contains the 
	 * character sequence "SQL"; None otherwise 
	 */
	getSQLDetails(name) {
		if (name.match(new RegExp(".*SQL.*"))) {
			var SQLDetails = <> <b>Variations</b>: mySQL, Oracle SQL, PostgreSQL <br/> </>;
			return SQLDetails;
		} 

		return;
  	}

	/**
	 * Creates the information to be shown, as the "tag details", when an user hovers a tag 
	 * with the specified tag name
	 * @param {string} tagName 
	 * @returns the JSX fragment with the necessary tag details
	 */
	createTagDetails(tagName) { 
		var obj = this.languages[tagName];
		return (
			<>
				<span className="tagDetails"> 
					<b>Experience</b>: {this.getTimeSinceStart(obj.startDate)} 
					<br/>
					<b>Comfortability</b>: {obj.comfortability} / 10
					<br/>
					{this.getSQLDetails(tagName)} 
					<b>Relevant Projects</b>: 
					<br/>
					{Array.from(obj.projects).map(projectName => <> &nbsp; &nbsp; &#x25CF; {projectName} <br/> </>)}
				</span>
			</>
		);
    }
    
	render() {
		return (
				<>
					<li onMouseEnter={this.handleMouseHoverOnTag} onMouseLeave={this.handleMouseHoverOnTag}> 
						{this.state.isHovering && this.createTagDetails(this.props.name)} 
						{this.languages[this.props.name].altName}
				</li> 	
				</>
		);
	}
}

export default Tag;