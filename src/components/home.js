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
		this.handleShowBar = this.handleShowBar.bind(this);
		this.handleLeaveBar = this.handleLeaveBar.bind(this);
		this.state = {
			isShowing: false
		};
	}

	handleShowBar() {
		setTimeout(() => this.setState({isShowing: true}), 450);
		clearInterval();
	}

	handleLeaveBar() {
		this.setState({isShowing: false});
	}

	render() {
		// TODO separate into different React components 
		return (
			<div>
				<div className="layoutAC1" onMouseEnter={this.handleShowBar} onMouseLeave={this.handleLeaveBar} style={{backgroundColor: "#00303F"}}>
					<a className="extlinkref" href="https://github.com/JadonFan" style={{textDecorationLine: "none"}}>
						<div className="extbar">
							<img src="images/GitLogo.png" alt="Git" />
							{this.state.isShowing && <text> Repository </text>}
						</div>
					</a>

					<a className="extlinkref" href="https://play.google.com/store/apps/details?id=c.jadon.tictactoe" style={{textDecorationLine: "none"}}>
						<div className="extbar">
							<img src="images/MyAppLogo.png" alt="MyAndroidApp" />
							{this.state.isShowing && <text> Tic-Tac-Toe App </text>}
						</div>
					</a>

					<a className="extlinkref" href="https://www.linkedin.com/in/jiajun-fan-414993141/" style={{textDecorationLine: "none"}}>
						<div className="extbar">
							<img src="images/LinkedInLogo.png" alt="LinkedIn" />
							{this.state.isShowing && <text> LinkedIn </text>}
						</div>
					</a>

					<br/>

					{this.state.isShowing &&
						<form className="medform" style={this.feedbackFormStyle}>
							<h5 style={{color: "white", position: "relative"}}> Feedback </h5>
							<textarea className="filltextbox" name="feedback" rols="30" cols="27" /> 
							<br/>
							<input type="submit" name="submit" value="Send"  style={{backgroundColor: "green", width: "44%"}} /> 
							<input type="reset" name="delete"  style={{backgroundColor: "red", width: "44%"}} />
						</form>
					}
				</div>

				<div className="layoutAC2">
					<iframe src="https://calendar.google.com/calendar/embed?src=jdsare%40gmail.com&ctz=America%2FToronto" style={{border:0}}
					width="800" height="600" frameBorder="0" scrolling="no" title="Calendar"></iframe>
				</div>
			</div>
		);
	}
}

export default Home;