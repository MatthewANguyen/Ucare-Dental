import React from "react";
import MapContainer from './MapContainer.js';
import front from "../../data/images/front.jpg";

class About extends React.Component {
    render() {
        return(
            <div className="about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 hours">
                            <div className="row">
                                <h1>Office</h1>
                            </div>
                            <div className="row">
                                <div className="col-md-12 col-sm-12">
                                    <img src={front} alt="front" className="front-office"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="row">
                                <h1>Map</h1>
                            </div>
                            <div className="row">
                                <div className='col-xs-12 map'>
                                    <MapContainer/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;