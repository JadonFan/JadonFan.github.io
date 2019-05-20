import React, { Component } from 'react';
import ProjectPane from './projectpane'
import ProjectInfo from './projectinfo'

/**
 * Contains detailed information of my major side projects (that is, any non-academic projects)
 * @extends Component
 * @author Jadon
 */
class Projects extends Component {
	constructor(props) {
		super(props);
		this.handleShowingProjectInfo = this.handleShowingProjectInfo.bind(this);
		this.handleHidingProjectInfo = this.handleHidingProjectInfo.bind(this);
		this.state = {
			isShowing: false,  // we could have used the showingProjectName key instead to indicate isShowing since '' is falsy
												 // but this is more readable in my opinion...
			showingProjectName: undefined  
		}
	}

	handleShowingProjectInfo(projectName) {
		if (!this.state.isShowing) {
			this.setState({
				isShowing: true,
				showingProjectName: projectName
			});
		}
	}

	handleHidingProjectInfo() {
		if (this.state.isShowing) {
			this.setState({isShowing: false});
		}
	}

	getProjectInfo(projectName) {
		var projectFilePath = null;
		var downloadRequirements = null;
		switch (projectName) {
			case 'Planner':
				projectFilePath = "files/Planner-all.jar";
				downloadRequirements = "Requires at least Java 8";
				break;
			default:
				// does nothing
		}

		return {
			path: projectFilePath,
			req: downloadRequirements
		};
    }
	
	render() {
		return (
			<div id="projectsbody">
				<div className="container-width">
					<div className="row">
						<div className="col-md-2">
							<div className="projectpane"> 
								<img src="images/plannericon.png" alt="Project" className="image img-fluid" />
								<div className="overlay">
									<div className="text">
										<h1> Planner </h1>
										<p style={{fontSize: 13}}> 
											A Java desktop app to help students organize their life 
										</p>
										<button className="btn btn-primary learnmore" 
										onClick={() => this.handleShowingProjectInfo("Planner")}> 
											Learn More 
										</button>
									</div>
								</div>
							</div>
						</div>

						<div className="col-md-2">
							<div className="projectpane"> 
								<img src="images/MyAppLogo.png" alt="Classics" className="image img-fluid" />
								<div className="overlay">
									<div className="text">
										<h1> Classics </h1>
										<p style={{fontSize: 13}}> 
											An Android app to play some classic games against a friend or computer
										</p>
										<button className="btn btn-primary learnmore" 
										onClick={() => this.handleShowingProjectInfo("Classics")}> 
											Learn More 
										</button>
									</div>
								</div>
							</div>
						</div>

						<div className="col-md-2">
							<div className="projectpane"> 
								<img src="images/madmanicon.png" alt="Project" className="image img-fluid" />
								<div className="overlay">
									<div className="text">
										<h1> Madman </h1>
										<p style={{fontSize: 13}}> 
											An unique desktop TPS game written in Python
										</p>
										<button className="btn btn-primary learnmore" 
										onClick={() => this.handleShowingProjectInfo("Madman")}> 
											Learn More 
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="row">
						{ this.state.isShowing && 
							<div className="projectinfo">
								<button style={{margin: 10, width: 150, height: 30}}> 
									<a href={this.getProjectInfo(this.props.projectName).path} style={{textDecoration: "none"}} download> 
										Download Project 
									</a> 
								</button>
								<button style={{margin: 10, width: 150, height:30}} onClick={this.handleHidingProjectInfo}> 
									Show Less 
								</button>
								<strong> {this.getProjectInfo(this.state.showingProjectName).req} </strong>
							</div>
						}
					</div>
				</div>				
			</div>
		);
	}
}

export default Projects;