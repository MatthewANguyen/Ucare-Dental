import React from 'react';
import arrow from '../../data/images/slider-left-arrow.svg';

const LeftArrow = (props) => {
    return (
        <div onClick={props.previousSlide} className="previous-arrow">
            <img src={arrow} alt="office"/>
        </div>
    );
}

export default LeftArrow;