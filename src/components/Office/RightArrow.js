import React from 'react';
import arrow from '../../data/images/slider-right-arrow.svg';

const RightArrow = (props) => {
    return (
        <div onClick={props.nextSlide} className="next-arrow">
            <img src={arrow} alt="office"/>
        </div>
    );
}

export default RightArrow;