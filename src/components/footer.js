import React, { Component } from 'react';
import { IconButton } from '@material-ui/core';
import { Email } from '@material-ui/icons';

/**
 * Renders the footer for every page on my website
 * @extends Component
 * @author Jadon
 */
class Footer extends Component {
	render() {
		return (
			<footer>
				<div id="mainfootertext">
					<br/> 
					<a href="mailto:jdsare@gmail.com?Subject=Regarding%20Your%20Website" target="_top"> 
						<IconButton aria-label="delete" style={{color: "white"}}>
							<Email style={{fontSize: 50}}/>
						</IconButton>
					</a> 
					<br/> 
				</div>

				<br/> <br/> <br/>
				<p style={{fontSize:13}}> 
					Jadon Fan, 2019 - 2020
				</p>
			</footer> 
		);
	}
}

export default Footer;