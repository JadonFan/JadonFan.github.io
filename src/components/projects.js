import React, { Component } from 'react';
import { CloudDownload, GitHub } from '@material-ui/icons';
// import { TransitionGroup } from 'react-transition-group';

/**
 * Contains detailed information of my major side projects (that is, any non-academic projects)
 * @extends Component
 * @author Jadon
 */
class Projects extends Component {
	projects = {
		Finance: {
			description: "An Android spending tracker app to help you make better financial decisions",
			projectRepoUrl: "https://github.com/JadonFan/Budgeting",
			projectFilePath: "",
			iconPath: "images/finance_app_icon.jpg",
			downloadRequirements: "Requires Android Marshmallow or Later",
			features: [],
			techsUsed: ["Dagger", "Kotlin Corountines", "LiveData", "Cloud Firestore", "Room"]
		}, 
		Planner: {
			description: "A Java desktop app to help students organize their life",
			projectRepoUrl: "https://github.com/JadonFan/Planner",
			projectFilePath: "files/Planner-all.jar",
			iconPath: "images/plannericon.png",
			downloadRequirements: "Requires at least Java 8",
			features: ["Organize ongoing assessments for each course and events for each day", 
			"Send an email to either yourself or someone else to remind the recipient about upcoming events through the Gmail APIs", 
			"Connect to the MySQL database hosted on AWS to save user-specific changes, and user details such as username and hashed + salted password", 
			"Call some APIs, implemented in Spring Boot, to retrieve, add and update user data remotely"],
			techsUsed: ["JavaFX", "JDBC", "JPA/Hibernate", "Spring Boot", "MySQL", "AWS RDS", "Gmail API (OAuth2)"]
		},
		Classics: {
			description: "An Android app to play some classic games against a friend or computer",
			projectRepoUrl: "https://github.com/JadonFan/Casual-Games",
			projectFilePath: "",
			iconPath: "images/MyAppLogo.png",
			downloadRequirements: "Requires Android Marshmallow or later",
			features: ["Play a standard game of tic tac toe on a 3 x 3 grid against either another human or against the" +
			" computer", "Currently developing some classic card games, such as goldfish, with animations to be bundled with" + 
			" tic tac toe"],
			techsUsed: ["Android SDK", "XML", "Java"]
		},
		Madman: {
			description: "An unique desktop TPS game written in Python",
			projectRepoUrl: "https://github.com/JadonFan/MazeShooter",
			projectFilePath: "",
			iconPath: "images/madmanicon.png",
			downloadRequirements: "Requires Python 3 (soon to be 3.6+ for f strings)",
			features: [],
			techsUsed: ["Pygame", "PyOpenGL", "Numpy", "MatPlotLib"]
		},
		Pitcher: {
			description: "An Arduino-powered pitching machine on movable wheels written in C++",
			projectRepoUrl: "",
			projectFilePath: "",
			iconPath: "images/arduino.png",
			downloadRequirements: "",
			features: [],
			techsUsed: ["Arduino UNO", "C++"]
		}
	};

	constructor(props) {
		super(props);
		this.handleShowingProjectInfo = this.handleShowingProjectInfo.bind(this);
		this.handleHidingProjectInfo = this.handleHidingProjectInfo.bind(this);
		this.state = {
			isShowing: false,  // we could have used the shownProjectName key instead to indicate isShowing since 
							   // '' is falsy but this is more readable in my opinion...
			shownProjectName: "Finance"
		};
	}

	handleShowingProjectInfo(projectName) {
		if (!this.state.isShowing || projectName !== this.state.shownProjectName) {
			this.setState({
				isShowing: true,
				shownProjectName: projectName
			});
		}
	}

	handleHidingProjectInfo() {
		if (this.state.isShowing) {
			this.setState({isShowing: false});
		}
	}

	createProjectPanes(projectName) {
		const project = this.projects[projectName];

		// The ternary operator on the root div is a temporary patch...
		return (
			<div className="projectpane" key={projectName} style={projectName === "Pitcher" ? {bottom: 20} : {}}>
				<img src={project.iconPath} alt={projectName} className="image img-fluid" />
				<div className="overlay">
					<div className="text">
						<h1> {projectName} </h1>
						<p style={{fontSize: 12}}> 
							{project.description}
						</p>
						<button className="btn btn-primary learnmore" 
						onClick={() => this.handleShowingProjectInfo(projectName)}> 
							Learn More 
						</button>
					</div>
				</div>
			</div>
		);
	}

	render() {
		const project = this.projects[this.state.shownProjectName];

		return (
			<div id="projectsbody">
				<div className="container-width">
					<div style={{marginBottom: 20}}>
						{Object.keys(this.projects).map(projectName => this.createProjectPanes(projectName))}
					</div>

					<div className="row">
						{	<div className="projectinfo">
								<div className="projectinfotitlebox">
									<text style={{fontSize: 35, color: "white"}}> 
										<b> {this.state.shownProjectName} </b>
									</text>
									<a href={project.projectFilePath} style={{textDecoration: "none"}} download> 
										<button className="btn btn-secondary" style={{marginRight: 10}}> 
											<CloudDownload fontSize="large"/>
											&nbsp;&nbsp; Download
										</button>
									</a> 
									<a href={project.projectRepoUrl} target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}> 
										<button className="btn btn-secondary" style={{marginRight: 10}}> 
											<GitHub fontSize="large"/>
											&nbsp;&nbsp; GitHub
										</button>
									</a> 
								</div>
		
								<div style={{position: "relative", color: "white"}}>
									<p> <strong> {project.downloadRequirements} </strong> </p>
									<h4> Features </h4>
									<ul>
										{ project.features.map(feature => <li key={feature}> { feature } </li>) }
									</ul>

									<h4> Technologies Used </h4>
									<ul>
										{ project.techsUsed.map(tech => <li key={tech}> { tech } </li>) }
									</ul>

									<div className="btn-group btn-group-lg ratingbar" role="group" aria-label="Rating">
										<button type="button" className="btn btn-secondary disabled"> 
											Rate My Project 
										</button>
										{ Array.from({length: 10}, (v, k) => 
											<button type="button" className="btn btn-secondary ratingscorebtn"> 
												<b style={{fontSize: 15}}> { k + 1 } </b>
											</button>
											)
										} 
									</div>

									<div style={{position: "absolute", bottom: 0, textAlign: "center", height: "auto", width: "100%", fontSize: 18}}>
										<span class="to-top" onClick={() => window.scroll({top: 0, left: 0, behavior: 'smooth'})}> Back to Top </span>
									</div>
								</div>
							</div>
						}
					</div>
				</div>				
			</div>
		);
	}
}

export default Projects;