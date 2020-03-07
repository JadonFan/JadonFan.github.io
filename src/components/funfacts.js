import React, { Component } from 'react';

/**
 * @extends Component
 * @author Jadon
 */
class FunFacts extends Component {
    funFacts = [
		`
		Surprisingly, I was good at drawing when I was a child. I won a few drawing contests, and 
		most of work were based on still life. Some contests were serious; others
		were just for fun. The most notable contest that I entered was a Club Penguin (RIP that game)
		event, which won me an exclusive Club Penguin plushie. 
        `,
        `
        Coming soon...
        `,
        `
        Coming soon...
        `,
        `
        Coming soon...
        `,
        `
        Coming soon...
        `
	];
    factSwitchIntervalTime = 5000;

	constructor(props) {
        super(props);
        this.handlePreviousFunFact = this.handlePreviousFunFact.bind(this);
        this.handleNextFunFact = this.handleNextFunFact.bind(this);
        this.handleAutoToNextFact = this.handleAutoToNextFact.bind(this);
        this.intervalId = undefined;
		this.state = {
            funFactNum: 0,
            autoNextFact: false
		};
	}


	handlePreviousFunFact() {
		var prevNum = this.state.funFactNum - 1;
		if (prevNum < 0) {
			prevNum = this.funFacts.length - 1;
		}
		this.setState({funFactNum: prevNum});
    }


    handleNextFunFact() {
		var nextNum = this.state.funFactNum + 1;
		if (nextNum >= this.funFacts.length) {
			nextNum = 0;
		}
		this.setState({funFactNum: nextNum});
	}
    

    /**
     * 
     * @param {BigInt} k the index corresponding to the funFacts array
     */
    createFactTrackDot(k) {
        var colorNotifyCurrent = (this.state.funFactNum === k) ? {backgroundColor: "black"} : {backgroundColor: "#A9A9A9"};
        return <div key={k} className="dot" style={colorNotifyCurrent}/>;
    }


    handleAutoToNextFact() {
        this.setState({autoNextFact: !this.state.autoNextFact});
        if (this.state.autoNextFact) {
            clearInterval(this.intervalId);
        } else {
            this.intervalId = setInterval(() => this.handleNextFunFact(), this.factSwitchIntervalTime);
        }
    }

    
    setAutoColour() {
        return this.state.autoNextFact ? "green" : "red";
    }


    render() {
        return (
            <div className="card" style={{paddingTop: 0, paddingBottom: 0, width: "50%", left: "25%", 
            right: "25%", marginTop: 30}}>
                <div className="card-header" style={{padding: 0}}>
                    <h1 className="card-header"> 
                        Fun Facts 
                        <input type="image" src="images/repeatcycle.png" alt="repeat" onClick={this.handleAutoToNextFact} 
                        style={{float: "right", height: "100%", width: "30px"}}/>
                    </h1>
                </div>
                <div className="card-body" style={{fontSize: 13, height: 250, padding: 0}}>
                    <span className="card-text" style={{margin: 0}}>
                        <p> 
                            { this.funFacts[this.state.funFactNum] }
                        </p>
                    </span>
                </div>
                {
                    this.state.autoNextFact && 
                    <div style={{fontSize: 12, backgroundColor: "yellow", paddingLeft: 10}}> 
                        <b>
                        This card automatically switches to the next slide every 
                        {" " + this.factSwitchIntervalTime/1000} seconds
                        </b>
                    </div> 
                }
                <div className="card-footer text-muted" style={{padding: 0}}>
                    <span style={{float: "left", height: "100%", marginLeft: 0}}> 
                        <button onClick={this.handlePreviousFunFact}>
                            &laquo; 
                        </button> 
                    </span>
                    <span id="facttrackerbar" style={{float: "center", height: "100%", width: "auto"}}> 
                        { Array.from({length: this.funFacts.length}, (v, k) => this.createFactTrackDot(k))}
                    </span>
                    <span style={{float: "right", height: "100%", marginRight: 0}}> 
                        <button onClick={this.handleNextFunFact}> 
                            &raquo; 
                        </button> 
                    </span>
                </div>
            </div>
        );
    }
}

export default FunFacts;