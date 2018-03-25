import React from 'react';
import image from '../../data/images/office1.jpg';

const SlideOne = (props) => {

    return <div className="slide-one">
        <img className="office-image" src={image} alt="office"/>
    </div>
};

export default SlideOne;