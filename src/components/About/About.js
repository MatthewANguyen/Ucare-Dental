import React from "react";
import MapContainer from './MapContainer.js';
import front from "../../data/images/front.jpg";

class About extends React.Component {

    createInfoWindow(e, map) {
        let location = "https://www.google.com/maps/place/Ucare+Dental/@32.9013666,-117.1982637,17z/data=" +
            "!3m1!4b1!4m5!3m4!1s0x80dc076cc50c9711:0xecbd46899bac3bba!8m2!3d32.9013621!4d-117.196075";
        window.open(location,'_blank');
    }

    render() {
        return(
            <div className="about">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="row">
                                <div className="col-sm-12">
                                    <h1>Map</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className='col-sm-12 map'>
                                    <MapContainer
                                        id="myMap"
                                        options={{
                                            center: { lat: 32.9013621, lng: -117.196075 },
                                            zoom: 14
                                        }}
                                        onMapLoad={map => {
                                            let marker = new window.google.maps.Marker({
                                                position: { lat: 32.9013621, lng: -117.196075 },
                                                map: map,
                                                title: 'Ucare Dental\n' +
                                                    '6255 Lusk Blvd #250\n' +
                                                    'San Diego, CA 92121'
                                            });
                                            marker.addListener('click', e => {
                                                this.createInfoWindow(e, map)
                                            })
                                        }}

                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default About;