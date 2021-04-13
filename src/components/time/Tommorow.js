import React, { Component } from 'react';

class Tommorow extends Component {
    state = {
        date: new Date()
    }

    render() {
        const { date } = this.state;

        return (
            <div>
                내일 &nbsp; 
                {date.getMonth() + 1}월 &nbsp; 
                {date.getDate() + 1}일
            </div>
        )
    }
}

export default Tommorow;