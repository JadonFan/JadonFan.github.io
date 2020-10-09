import React, { Component } from 'react';
import Tag  from './tag';
import FunFacts  from './funfacts';


/**
 * Contains information to perspective employers, and really anyone who wants to know me better!
 * @extends Component
 * @author Jadon
 */
class About extends Component {
	libsFrames = ["React", "Ruby on Rails", "Django", "Java Servlet", "Apollo Client", "JDBC", "JPA/Hibernate", 
	"Android SDK", "RxJava", "Dagger", "Retrofit", "JUnit", "Espresso", "JavaFX"];
	tools = ["Git", "Jira", "Jenkins", "JMeter", "Postman"];
	courses = ["Compilers", "Digital Hardware Systems", "Analog Control Systems", "System Programming and Concurrency", "Embedded Systems", 
		"Instrumentation and Prototyping", "Data Structures and Algorithms", "Introduction to Programming", "Digital Circuits and Systems", 
		"Digital Computers", "Numerical Methods"];
	interests = ["Chess", "Cooking", "Table Tennis", "Coding", "Gardening"];

	render() {
		return (
			<div id="aboutbody">
				<form className="form-inline" style={{float: "right", marginRight: 5}}>
					<input className="form-control mr-sm-2" style={{width: 250}} type="search" /> 
					<button className="btn btn-success" type="submit"> Search </button>
				</form>

				<div>
					<h1 style={{marginBottom: 0}}> Programming </h1> 
					<p style={{fontSize: 15}}> <em> Some tags contain more information such as my level of experience. 
						You can see these details by hovering your cursor over a particular tag. </em> </p>
					<br/>
					<h4> Languages </h4>
					<ul className="knowmetag hoverabletag"> 
						<Tag name="Python" />	
						<Tag name="Ruby" />				 
						<Tag name="Java" />
						<Tag name="Kotlin" />
						<Tag name="C" />
						<Tag name="CPP" />
						<Tag name="JavaScript" />
						<Tag name="SQL" />
						<Tag name="HTMLCSS" />
					</ul>
					<br/>
					<h4> Libraries and Frameworks </h4>
					<ul className="knowmetag hoverabletag"> 
						{this.libsFrames.map(name => <li key={name}> <span> </span> {name} </li>)}
					</ul>
					<br/>
					<h4> Tools </h4>
					<ul className="knowmetag"> 
						{this.tools.map(name => <li key={name}> {name} </li>)}
					</ul>
				</div>
				<hr/>
				<div>
					<h1> Education </h1>
						<h4 style={{marginLeft: 30, marginBottom: 3}}> Candidate for Bachelor in Applied Engineering, Honours </h4> 
						<p style={{marginLeft: 30, marginRight: 30, fontSize: 15}}>
							&nbsp; &nbsp; &nbsp; Computer Engineering 
							<br/>
							&nbsp; &nbsp; &nbsp; Class of 2022 
						</p>
						<ul className="knowmetag"> 
							{this.courses.map(course => <li className="expandedtag" key={course}> {course} </li>)}
						</ul>
				</div>
				<hr/>
				<div>
					<h1> Interests </h1>
					<ul className="knowmetag"> 
						{this.interests.map(interest => <li key={interest}> {interest} </li>)}
					</ul>
				</div>
				<hr/>
				<div>
					<h1> Biography </h1>
					<div style={{display: "inline-block"}}>
						<p style={{textAlign: "left", fontSize: 15}}>
							<img src="images/jadon.png" width="250" height="250" alt="Jadon" style={{float: "left", marginRight: 20}} />
							I am Jadon Fan. I study Computer Engineering at the University of Waterloo in Ontario, Canada. I am part of 
							the graduating class of 2022 and currently in my third year of study. I am part of the University's 
							co-op program, which means that I alternate between study terms and work terms every 4 months. I hope 
							you enjoy exploring my website, which I am using to create my dream website and gain experience on web development. 
							I am always open to feedback on how I can improve the website, so please feel free to email me, or 
							go to the home page and fill out the form.
							<br/> <br/>
							I chose Computer Engineering because I wanted to explore both hardware and software. While it may sound
							cliché, I enjoy the flexibility of what can be accomplished through programming. On one day, I
							might be writing code for a software that will advance medical technologies or for a game with gameplay
							mechanics and plots to my liking. On another day, I might be programming an embedded microprocessor, 
							like I did in ECE298, to remotely adjust fan speeds by clapping your hands. On the
							other hand, I am curious about how hardware is used to run software. Since I was first introduced to
							programming back in high school, I have wondered exactly how a series of words on a screen can
							instruct a computing device to do something, and how a computing device is able to store and follow  
							those instructions.
							<br/> <br/>
							I would describe myself as a determined person who loves to employ his problem solving skills. 
							When I face a problem, I will put in as much effort as I can (eating and sleeping are still important!),
							and use whatever relevant tools I have at my disposal, to find a solution to that problem. My mantra is that,
							<i> while it is important to work hard, working smart is more efficient and effective</i>. Meanwhile, my friends 
							would probably describe me as a helpful person whenever it is help with academic work or just life in general. 
							Helping people not only enables me to put my knowledge and skills to good use, but also provides a great learning
							opportunity for myself. For example, if I make a mistake when I help others, I become aware that I might make that
							same mistake in the future and will try to find why I made that mistake and how I can potentially avoid it.
						</p>
					</div>

					<FunFacts /> 
				</div>
			</div>
		);
	}
}

export default About;