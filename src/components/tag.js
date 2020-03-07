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
			projects: ['Third person shooting game with 2D and 3D graphics', 
			'Hangman and sudoku on the command line interface', 'Assignment test scripts', 
			'University assignments in programming courses']
		},
		Java: {
			altName: "Java",
			startDate: new Date(2018, 1, 1),
			projects: ['Student planner desktop app', 'Tic-tac-toe and card game app for Android', 'Compiler labs']
		},
		Kotlin: {
			altName: "Kotlin",
			startDate: new Date(2019, 9, 1),
			projects: ['Budgeting app']
		},
		C: {
			altName: "C", 
			startDate: new Date(2018, 1, 15),
			projects: ['Multithreaded web crawler', 'Clap-on clap-off embedded system on TI MSP-430 board', 
			'University assignments for discrete mathematics course']
		},
		CPP: {
			altName: "C++",
			startDate: new Date(2017, 8, 7),
			projects: ['Controllable and movable Arduino pitching machine', 
			'University assignments in programming courses']
		},
		JavaScript: {
			altName: "JavaScript",
			startDate: new Date(2019, 0, 15), 
			projects: ['This website!']
		},
		SQL: {
			altName: "SQL",
			startDate: new Date(2019, 0, 10),
			projects: []
		},
		HTMLCSS: {
			altName: "HTML/CSS",
			startDate: new Date(2019, 0, 24),
			projects: ['This website!']
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
			const monthsCount = monthsDiff % 12;
			const yearsCount = Math.floor(monthsDiff / 12);
			
			if (monthsDiff < 12) {
				expTimeFormat = `${monthsDiff} months`;
			} else if (monthsDiff === 12) {
				expTimeFormat = `1 year`; 
			} else if (monthsDiff % 12 === 0) {
				expTimeFormat = `${yearsCount} years`; 
			} else {
				if (yearsCount === 1) {
					expTimeFormat = `${yearsCount} year and ${monthsCount} months`; 
				} else {
					expTimeFormat = `${yearsCount} years and ${monthsCount} months`; 
				}
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
	getSQLDetails(tagName) {
		if (tagName.match(new RegExp(".*SQL.*"))) {
			var SQLDetails = <> <b>Variations</b>: mySQL, Oracle SQL, PostgreSQL <br/> </>;
			return SQLDetails;
		} 

		return;
  	}

	/**
	 * Creates the information to be shown, as the "tag details", when an user hovers a tag 
	 * with the specified tag name
	 * @param {string} tagName 
	 * @returns the JSX element with the necessary tag details
	 */
	createTagDetails(tagName) { 
		var obj = this.languages[tagName];
		return (
			<>
				<span className="tagDetails"> 
					<b>Experience</b>: {this.getTimeSinceStart(obj.startDate)} 
					<br/>
					{this.getSQLDetails(tagName)} 
					<b>Relevant Works</b>: 
					<br/>
					<ul className="tagworks"> 
						{Array.from(obj.projects).map(projectDescrip => <li> {projectDescrip} </li>)}
					</ul>
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