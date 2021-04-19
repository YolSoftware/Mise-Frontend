import React, { Component } from 'react';

class dayAfterTomorrow extends Component {
    state = {
        date: new Date(new Date().setDate(new Date().getDate() + 2)),
        pm25Value : 1
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

export default dayAfterTomorrow;