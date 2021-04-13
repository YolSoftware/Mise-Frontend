import React, { useState } from 'react';

const Today = () => {
    
    const options = { month: 'long', day: 'numeric' };

    let day = new Date().toLocaleDateString(undefined, options);      
    
    const [curday, setCurday] = useState(day);    

    const updateDay = () => {
        day = new Date().toLocaleDateString(undefined, options);     
          
        setCurday(day);
    }

    setInterval(updateDay, 1000);

    return(
        <div>
            오늘 {curday}
        </div>
    );
}

export default Today;