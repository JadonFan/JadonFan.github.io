import React, { Component } from 'react';

class Home extends Component {
	feedbackFormStyle = {
		margin: "385px 0 0 20px", 
		position: "relative",
		top: 30,
		width: "89%"
	};

	render() {
		return (
			<div id="homebody">
				<div className="layoutAC1" style={{backgroundColor: "#00303F"}}>			
					<a href="https://github.com/JadonFan">
						<button type="button" className="btn stdbutton" style={{backgroundColor: 'white'}}>
							<img style={{width:60}} src="./images/GitLogo.png" alt="Git" />
							<br/> <p> Repository  </p>
						</button>
					</a>

					<a href="https://play.google.com/store/apps/details?id=c.jadon.tictactoe">
						<button type="button" className="btn stdbutton" style={{backgroundColor: 'white'}}>
							<img style={{width:60}} src="./images/emaillogo.png" alt="MyAndroidApp" />
							<br/> <p> My Android App </p>
						</button>
					</a>

					<a href="https://www.linkedin.com/in/jiajun-fan-414993141/">
						<button type="button" className="btn stdbutton" style={{backgroundColor: 'white'}}>
							<img style={{width:60}} src="./images/LinkedInLogo.png" alt="LinkedIn" />
							<br/> <p> LinkedIn </p>
						</button>
					</a>

					<a href="https://waterlooworks.uwaterloo.ca/home.htm">
						<button type="button" className="btn stdbutton" style={{backgroundColor: 'white'}}>
							<img style={{width:60}} src="./images/UWLogo.png" alt="WaterlooWorks" />
							<br/> <p> WaterlooWorks </p>
						</button>
					</a>

					<br/>

					<form className="medform" style={this.feedbackFormStyle}>
						<h5 style={{color: "white", position: "relative"}}> Feedback </h5>
						<textarea className="filltextbox" name="feedback" rols="30" cols="27" /> 
						<br/>
						<input type="submit" name="submit" value="Send"  style={{backgroundColor: "green", width: "44%"}} onClick="getFormData();" /> 
						<input type="reset" name="delete"  style={{backgroundColor: "red", width: "44%"}} />
					</form>
				</div>

				<div className="layoutAC2">
					<iframe src="https://calendar.google.com/calendar/embed?src=jdsare%40gmail.com&ctz=America%2FToronto" style={{border:0}}
					width="800" height="600" frameBorder="0" scrolling="no"></iframe>
				</div>
			</div>

		);
	}
}

export default Home;