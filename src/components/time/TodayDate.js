import React, { Component } from 'react';

class TodayDate extends Component {

    state = {
        date: new Date()
    }

    render() {
        const { date } = this.state;

        let options = {
            month: 'long',
            day: 'numeric'
        };
       
        return (
            <div>
                {date.toLocaleDateString('ko-KR', options)}
            </div>
        )
    }
}

export default TodayDate;