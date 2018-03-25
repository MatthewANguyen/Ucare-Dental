import {Map, Marker, GoogleApiWrapper, InfoWindow} from 'google-maps-react';
import React from "react";


export class MapContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showingInfoWindow: true,
            activeMarker: {},
            selectedPlace: {},
        };

        // binding this to event-handler functions
        this.onMarkerClick = this.onMarkerClick.bind(this);
        // this.onMapClicked = this.onMapClicked.bind(this);
    }

    onMarkerClick(props, marker, e) {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    }

    render() {

        let style = {height: '100%', width: '100%'};

        return (
            <Map
                google={this.props.google}
                style={style}
                initialCenter={{
                    lat: 32.901419,
                    lng: -117.195889
                }}
                zoom={14}
                onClick={this.onMapClicked}
            ><Marker
                onClick={this.onMarkerClick}
                title={'Dr. Hien Bui'}
                name={'UCare Dental     '}
                position={{lat: 32.901419, lng: -117.195889}} />
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}>
                    <div>
                        {this.state.selectedPlace.name}
                    </div>
                </InfoWindow></Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyBizf8It86UPe4lTqO-RoMcPd_VgM3aCr4')
})(MapContainer)