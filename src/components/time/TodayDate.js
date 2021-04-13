import React, { Component } from 'react';

class TodayDate extends Component {
    
    state = {
        date: new Date()
    }

    render() {
        const { date } = this.state;

        return (
            <div>
                {date.toLocaleDateString()}
            </div>
        )
    }
}

export default TodayDate;