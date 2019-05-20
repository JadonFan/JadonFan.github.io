import React, { Component } from 'react';

/**
 * Contains the home page, which includes hyperlinks to relevant external sites, my Google calendar, and what not
 * @extends Component
 * @author Jadon
 */
class Home extends Component {
	feedbackFormStyle = {
		margin: "200px 0 0 20px", 
		position: "relative",
		top: 30,
		width: "89%"
	};

	constructor(props) {
		super(props);
		this.handleShowLeftBar = this.handleShowLeftBar.bind(this);
		this.state = {
			isShowingLeftBar: true
		};
	}

	handleShowLeftBar() {
		this.setState({isShowingLeftBar: !this.state.isShowingLeftBar});
	}

	render() {
		// TODO separate into different React components 
		return (
			<div id="homebody">
				{ !this.state.isShowingLeftBar && 
					<> </>
				}
				{ this.state.isShowingLeftBar && 
					<div className="layoutAC1" style={{backgroundColor: "#00303F"}}>
						<a className="extlinkref" href="https://github.com/JadonFan">
							<div className="extbar">
								<img style={{width: 60, padding: 10}} src="images/GitLogo.png" alt="Git" />
								<span> Repository </span>
							</div>
						</a>

						<a className="extlinkref" href="https://play.google.com/store/apps/details?id=c.jadon.tictactoe">
							<div className="extbar">
								<img style={{width: 60, padding: 10}} src="images/MyAppLogo.png" alt="MyAndroidApp" />
								<span> Android App </span>
							</div>
						</a>

						<a className="extlinkref" href="https://www.linkedin.com/in/jiajun-fan-414993141/">
							<div className="extbar">
								<img style={{width: 60, padding: 10}} src="images/LinkedInLogo.png" alt="LinkedIn" />
								<span> LinkedIn </span>
							</div>
						</a>

						<a className="extlinkref" href="https://waterlooworks.uwaterloo.ca/home.htm">
							<div className="extbar">
								<img style={{width: 60, padding: 10}} src="images/UWLogo.png" alt="WaterlooWorks" />
								<span> WaterlooWorks </span>
							</div>
						</a>

						<br/>

						<form className="medform" style={this.feedbackFormStyle}>
							<h5 style={{color: "white", position: "relative"}}> Feedback </h5>
							<textarea className="filltextbox" name="feedback" rols="30" cols="27" /> 
							<br/>
							<input type="submit" name="submit" value="Send"  style={{backgroundColor: "green", width: "44%"}} /> 
							<input type="reset" name="delete"  style={{backgroundColor: "red", width: "44%"}} />
						</form>
					</div>
				}

				<div className="layoutAC2">
					<iframe src="https://calendar.google.com/calendar/embed?src=jdsare%40gmail.com&ctz=America%2FToronto" style={{border:0}}
					width="800" height="600" frameBorder="0" scrolling="no" title="Calendar"></iframe>
				</div>
			</div>

		);
	}
}

export default Home;