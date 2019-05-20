import React, { Component } from 'react';
import Tag  from './tag';

/**
 * Contains information to perspective employers, and really anyone who wants to know me better!
 * @extends Component
 * @author Jadon
 */
class About extends Component {
	libsFrames = ["JDBC", "JPA/Hibernate", "Spring", "JavaFX", "Bootstrap", "React", "Django", "Numpy", "Pygame"];
	tools = ["Git", "Jira", "Jenkins", "JMeter", "Android SDK", "Postman"];
	courses = ["Data Structures and Algorithms", "Introduction to Programming", "Digital Circuits and Systems", 
		"Digital Computers", "Advanced Calculus I", "Numerical Methods"];
	interests = ["Chess", "Cooking", "Table Tennis", "Coding", "Gardening"];

	render() {
		return (
			<div id="aboutbody">
				<form className="form-inline" style={{float: "right", marginRight: 5}}>
					<input className="form-control mr-sm-2" style={{width: 250}} type="search" /> 
					<button className="btn btn-success" type="submit"> Search </button>
				</form>

				<div style={{margin: 10}}>
					<h1 style={{marginBottom: 0}}> Programming </h1> 
					<p style={{fontSize: 15}}> <em> Some tags contain more information such as my level of experience. You can see these details by hovering your cursor over a particular tag like a tool tip. </em> </p>
					<br/>
					<h4> Languages </h4>
					<ul className="knowmetag hoverabletag"> 
						<Tag name="Python" />					 
						<Tag name="Java" />
						<Tag name="CPP" />
						<Tag name="Javascript" />
						<Tag name="SQL" />
						<Tag name="HTMLCSS" />
					</ul>
				</div>
				<br/>
				<div style={{margin: 10}}>
					<h4> Libraries and Frameworks </h4>
					<ul className="knowmetag hoverabletag"> 
						{
							this.libsFrames.map(name => <li key={name}> 
							<span> </span> 
							{name} 
							</li>)
						}
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
						<ul className="knowmetag"> 
							{this.courses.map(course => <li className="expandedtag" key={course}> {course} </li>)}
						</ul>
				</div>
				<hr/>
				<div style={{margin: 10}}>
					<h1> Interests </h1>
					<ul className="knowmetag"> 
						{this.interests.map(interest => <li key={interest}> {interest} </li>)}
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