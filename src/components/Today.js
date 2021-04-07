import React, { useState } from 'react';

const Today = () => {
    
    const options = { month: 'long', day: 'numeric' };

    let day = new Date().toLocaleDateString(undefined, options);      
    
    const [Curday, setCurday] = useState(day);
    

    const updateDay = () => {
        day = new Date().toLocaleDateString(undefined, options);     
          
        setCurday(day);
    }

    setInterval(updateDay, 1000);

    return(
        <div>
            오늘 {day}
        </div>
    );
}

export default Today;