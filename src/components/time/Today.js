import React, { Component } from 'react';

class Today extends Component {

    state = {
        date: new Date(),
        pm25Value: 1,
        pm100Value : 2,
        o3Value : 3,
        no2Value : 4,
        coValue : 5,
        so2Value : 6
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

export default Today;

// const Today = () => {
    
//     const options = {
//         month: 'long',
//         day: 'numeric'
//     };

//     let day = new Date().toLocaleDateString('ko-KR', options);      
    
//     const [curday, setCurday] = useState(day);

//     const updateDay = () => {
//         day = new Date().toLocaleDateString('ko-KR', options);     
//         setCurday(day);
//     }

//     setInterval(updateDay, 1000);

//     return(
//         <div>
//             {curday}
//         </div>
//     );
// }

// export default Today;