import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import image1 from '../../data/images/office1.jpg';
import image2 from '../../data/images/office2.jpg';
import image3 from '../../data/images/office3.jpg';

export default class Slideshow extends React.Component {
    render() {
        return (
            <Carousel showStatus={false} infiniteLoop={true} emulateTouch={true}>
                <div>
                    <img src={image1} />
                    {/*<p className="legend">Lobby</p>*/}
                </div>
                <div>
                    <img src={image2} />
                    {/*<p className="legend">Front Desk</p>*/}
                </div>
                <div>
                    <img src={image3} />
                    {/*<p className="legend">Operatory</p>*/}
                </div>
            </Carousel>
        );
    }
};

// Don't forget to include the css in your page

// Using webpack
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
//<link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>