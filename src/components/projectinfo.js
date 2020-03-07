import React, { Component } from 'react';
import { TransitionGroup } from 'react-transition-group';

/** @deprecated */
class ProjectInfo extends Component {
    render() {
        const projectInfo = this.props.projects[this.props.projectName];

        return (
            <>
                <TransitionGroup transition="infofade" style={{width: "100%"}}>
                    <div className="projectinfo">
                        <div className="projectinfotitlebox">
                            <text style={{fontSize: 35, color: "white"}}> 
                                <b> {this.props.projectName} </b>
                            </text>
                            <button className="btn btn-secondary" onClick={this.handleHidingProjectInfo}> 
                                Show Less 
                            </button>
                            <button className="btn btn-secondary" style={{marginRight: 10}}> 
                                <a href={projectInfo.projectFilePath} 
                                style={{textDecoration: "none"}} download> 
                                    Download Project 
                                </a> 
                            </button>
                        </div>

                        <p style={{color: "white"}}>
                            <strong> {projectInfo.downloadRequirements} </strong>
                        </p>
                    </div>
			    </TransitionGroup>
            </>
        );
    }

}

export default ProjectInfo;