import React, { Component } from 'react';

/** @deprecated */
class ProjectInfo extends Component {
    constructor(props) {
		super(props);
		this.handleReqHiding = this.handleReqHiding.bind(this);
		this.state = {
			isReqHiding: false,
		}
	}

	handleReqHiding() {
		this.setState({isReqHiding: true});
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
            <>
            { this.props.isShowing && !this.state.isReqHiding && 
                <>
                    <button style={{margin: 10, width: 150, height: 30}}> 
                        <a href={this.getProjectInfo(this.props.projectName).path} style={{textDecoration: "none"}} download> 
                            Download Project 
                        </a> 
                    </button>
                    <button style={{margin: 10, width: 150, height:30}} onClick={this.handleReqHiding}> 
                        Show Less 
                    </button>
                    <strong> {this.getProjectInfo(this.props.projectName).req} </strong>
                </>
            }
            </>
        );
    }

}

export default ProjectInfo;