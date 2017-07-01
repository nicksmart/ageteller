import React, { Component } from 'react';

class AgeStats extends Component {
    calculateTimeSinceAnniversary(date) {
        let today = new Date().getTime();
        let ann = new Date(date).getTime();
        let diff = Math.abs(today - ann);

        let days = Math.floor(diff / (1000 * 3600 *24));
        let years = Math.floor(days / 365);
        days -= years * 365;

        return `${years} years and ${days} days`;
    }
    
    render() {
        return(
            <div>
                <h3>{this.props.anniversary}</h3>
                <h4>Congrats on {this.calculateTimeSinceAnniversary(this.props.anniversary)}!</h4>
            </div>
        );
    }
}

export default AgeStats;