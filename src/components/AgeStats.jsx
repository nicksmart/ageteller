import React, { Component } from 'react';

class AgeStats extends Component {
    calculateTimeSinceAnniversary(date) {
        let today = new Date().getTime();
        let ann = new Date(date).getTime();
        let diff = today - ann;
        if (diff < 0) {
            return '0 years, 0 months, and 0 days';
        }

        let days = Math.floor(diff / (1000 * 3600 *24));
        let years = Math.floor(days / 365);
        days -= years * 365;
        let months = Math.floor(days / 31);
        days -= months * 31;

        return `${years} years, ${months} months, and ${days} days together`;
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