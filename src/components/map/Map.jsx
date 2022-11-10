import React, {Component} from "react";
import {MapContainer, TileLayer, useMapEvents} from "react-leaflet";
import L from "leaflet";
import icon from "./markers";
import "leaflet/dist/leaflet.css";

function MyComponent({saveMarkers}) {
    const map = useMapEvents({
        click: (e) => {
            const {lat, lng} = e.latlng;
            L.marker([lat, lng], {icon}).addTo(map);
            saveMarkers([lat, lng]);
        }
    });
    return null;
}

export default class MyMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            markers: [[40.7, -74]],
            data: []
        };
    }

    saveMarkers = (newMarkerCoords) => {
        const data = [...this.state.data, newMarkerCoords];
        this.setState((prevState) => ({...prevState, data}));
    };

    render() {
        return (
                <MapContainer
                    className="Map"
                    center={[47.203, -1.537]}
                    zoom={13}
                    scrollWheelZoom={false}
                    style={{height: "100vh", width: "100%"}}
                >
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                    <MyComponent saveMarkers={this.saveMarkers}/>
                </MapContainer>
        );
    }
}