import React from 'react';
import L from 'leaflet';

const mapbox_API_KEY = "pk.eyJ1IjoidG9uZ2RhcnIiLCJhIjoiY2p0NzJnemNsMGF2ZzQzbm5vc3dhYmJ2aiJ9.BGBenWsEy5gSye8ENhXgNQ";

const bounds = [
    [-47.5, 165], // Southwest coordinates
    [-34, 179]    // Northeast coordinates
];

const cities_latlng = [
    [-36.86667, 174.76667], // Auckland 
    [-41.28664, 174.77557], // Wellington
    [-43.53333, 172.63333], // Christchurch
    [-41.27078, 173.28404], // Nelson
    [-46.4, 168.35],        // Invercargill
    [-43.89834, 171.73011], // Ashburton
    [-40.95972, 175.6575],  // Masterton
    [-39.06667, 174.08333], // New Plymouth
    [-39.6381, 176.84918],  // Hastings
    [-45.87416, 170.50361], // Dunedin
    [-37.78333, 175.28333], // Hamilton
    [-35.73167, 174.32391], // Whangarei
    [-39.93333, 175.05],    // Wanganui
    [-45.03023, 168.66271], // Queenstown
    [-38.65333, 178.00417], // Gisborne
    [-41.51603, 173.9528],  // Blenheim
    [-37.68611, 176.16667], // Tauranga
    [-38.13874,176.24516]   // Rotorua
];

class Map extends React.Component{
    componentDidMount() {

        var map = L.map('map').setView([-41.28664,174.77557], 6);
        map.setMinZoom(6);
        map.setMaxBounds(bounds);

        L.tileLayer(`https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=${mapbox_API_KEY}`, {
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
                '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                'Imagery © <a href="http://mapbox.com">Mapbox</a>',
            id: 'mapbox.streets'
        }).addTo(map);

        for(var i = 0; i < cities_latlng.length; i++){
            const marker = new L.Marker([cities_latlng[i][0], cities_latlng[i][1]]);
            marker.on("click", this.props.onClick(marker.getLatLng().lat, marker.getLatLng().lng));
            marker.addTo(map);
        }

    }
        
    render(){
        return (
            <div id="map" style={{position: 'absolute', top: 0, bottom: 0, left: '40vw', width: '60%', height: '100%'}}/>
        );
    }
}

export default Map;
