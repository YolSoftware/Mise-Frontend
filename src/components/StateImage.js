import React from 'react';
import good from '../stateImage/good.png';
import '../stylesheets/StateImage.css';

const StateImage = () => {
    return (
        <div className="image-wrapper">
            <img src={good} className="image"/>
        </div>
    )
}

export default StateImage;
