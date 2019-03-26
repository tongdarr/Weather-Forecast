import React from 'react';
import axios from 'axios';
import './App.css';
import Map from './Map';
import WeatherForm from './WeatherForm';

const openweather_API_KEY = "4288be0591d26e26eb8ccb478188b864";

// Create a react component
class App extends React.Component {
	state = {
		weather: [],
		city: ''
	}

	/**
	 * Takes the latitude and longitude of the clicked marker that was set
	 * on the map and sends it through the weather api. Use axios to get a response
	 * from the API and use response data to set the state. 
	 */
	weatherSearch = async (event) =>{
		
		const latlng = event.latlng;
		const lat = latlng.lat;
		const lng = latlng.lng;
		const weatherQuery = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${openweather_API_KEY}&cnt=8&units=metric`;
		
		const response = await axios.get(weatherQuery);
		const forecast = response.data.list;

		let weatherObj = [];
		for(var i = 0; i < 8; i++){
			weatherObj.push({
				weather_icons : forecast[i].weather[0].icon,
				weather_condition_text : forecast[i].weather[0].description,
				temp_c : forecast[i].main.temp,
				date :  new Date(forecast[i].dt * 1000),
				key: i
			});
		}

		this.setState({
			weather : weatherObj,
			city : response.data.city.name
		})
	}



	render(){
		return (
			<div>
				<WeatherForm information={this.state.weather} city={this.state.city}></WeatherForm>
				<Map onClick={(e) => this.weatherSearch}></Map>
			</div>
		);
	}
}

export default App;