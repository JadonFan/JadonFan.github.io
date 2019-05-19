import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return (
			<footer>
				<div id="mainfootertext">
					<br/> <a href="mailto:j53fan@edu.uwaterloo.ca?Subject=Regarding%20Your%20Website" target="_top"> <img src="./images/emaillogo.png" alt="email" height="30" 
					width="30" /> Email </a> <br/> 
				</div>

				<br/> <br/> <br/> <br/> 
				<p style={{fontSize:13}}> 
					Jadon Fan &#169; 2019. Used under the permission of the author with acknowledgement to those who helped the author with the site. 
				</p>
			</footer> 
		);
	}
}

export default Footer;