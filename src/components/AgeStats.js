import React, { Component } from 'react';

class AgeStats extends Component {
    render() {
        return(
            <div>
                <h3>{this.props.birthday}</h3>
            </div>
        );
    }
}

export default AgeStats;