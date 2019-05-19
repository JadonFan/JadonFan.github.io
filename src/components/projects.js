import React, { Component } from 'react';

class Projects extends Component {
	render() {
		return (
			<div id="projectsbody">
				<div className="container-width">
				  	<div className="row">
				  		<div className="col-md-2">
							<div className="projectpane" > 
								<img src="./images/plannericon.png" alt="Planner" class="image img-fluid" />
							  	<div class="overlay">
							    	<div class="text">
							    		<h1> Planner </h1>
							    		<p style={{fontSize: 13}}> A Java desktop app to help students organize their life </p>
							    		<button class="btn btn-primary learnmore" onclick="createProjectInfoBox(this, 'Planner')"> Learn More </button>
							    	</div>
							 	 </div>
							</div>
						</div>

						<div className="col-md-2">
							<div className="projectpane">
								<img src="./images/MyAppLogo.png" alt="Classics" class="image img-fluid" />
							  	<div class="overlay">
							    	<div class="text">
							    		<h1> Classics </h1>
							    		<p style={{fontSize: 13}}> An Android app to play some classic games against a friend or computer </p>
							    		<button class="btn btn-primary learnmore" onclick="createProjectInfoBox(this, 'Classics')"> Learn More </button>
							    	</div>
							 	 </div>
							</div>
						</div>


						<div className="col-md-2">
							<div className="projectpane">
								<img src="./images/madmanicon.png" alt="Classics" class="image img-fluid" />
							  	<div class="overlay">
							    	<div class="text">
							    		<h1> Madman </h1>
							    		<p style={{fontSize: 13}}> An unique desktop TPS game written in Python </p>
							    		<button class="btn btn-primary learnmore" onclick="createProjectInfoBox(this, 'Madman')"> Learn More </button>
							    	</div>
							 	 </div>
							</div>
						</div>
					</div>

					<div id="projectinfobox"> 
						<span id="projectbuttonsdiv"> </span>
					</div>
				</div>
			</div>
		);
	}
}

export default Projects;