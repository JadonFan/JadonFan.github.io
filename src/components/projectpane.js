import React, { Component } from 'react';

/** @deprecated */
class ProjectPane extends Component {
	render() {
        return (
            <div className="projectpane"> 
                <img src={this.props.imgPath} alt="Project" className="image img-fluid" />
                <div className="overlay">
                    <div className="text">
                        <h1> {this.props.projectName} </h1>
                        <p style={{fontSize: 13}}> {this.props.descrip} </p>
                        <button className="btn btn-primary learnmore" onClick={this.handleShowingProjectInfo}> Learn More </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectPane;