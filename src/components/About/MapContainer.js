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
        // this.onMarkerClick = this.onMarkerClick.bind(this);
        // this.onMapClicked = this.onMapClicked.bind(this);
        this.onScriptLoad = this.onScriptLoad.bind(this)
    }

    onScriptLoad() {
        const map = new window.google.maps.Map(
            document.getElementById(this.props.id),
            this.props.options);
        this.props.onMapLoad(map)
    }

    onMarkerClick(props, marker, e) {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    }

    componentDidMount() {
        if (!window.google) {
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.src = `https://maps.google.com/maps/api/js?key=AIzaSyBizf8It86UPe4lTqO-RoMcPd_VgM3aCr4`;
            var x = document.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(s, x);
            // Below is important.
            //We cannot access google.maps until it's finished loading
            s.addEventListener('load', e => {
                this.onScriptLoad()
            })
        } else {
            this.onScriptLoad()
        }
    }

    render() {

        return (
                <div id={this.props.id} className="google-map">

                </div>
        );
    }
}

export default GoogleApiWrapper({
    // apiKey: ('AIzaSyBizf8It86UPe4lTqO-RoMcPd_VgM3aCr4')
})(MapContainer)

{/*<Map*/}
{/*google={this.props.google}*/}
{/*style={style}*/}
{/*initialCenter={{*/}
{/*lat: 32.901419,*/}
{/*lng: -117.195889*/}
{/*}}*/}
{/*zoom={14}*/}
{/*onClick={this.onMapClicked}*/}
{/*><Marker*/}
{/*onClick={this.onMarkerClick}*/}
{/*title={'Dr. Hien Bui'}*/}
{/*name={'UCare Dental     '}*/}
{/*position={{lat: 32.901419, lng: -117.195889}} />*/}
{/*<InfoWindow*/}
{/*marker={this.state.activeMarker}*/}
{/*visible={this.state.showingInfoWindow}>*/}
{/*<div>*/}
{/*{this.state.selectedPlace.name}*/}
{/*</div>*/}
{/*</InfoWindow></Map>*/}