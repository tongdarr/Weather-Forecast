// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// import LoginForm from './components/LoginForm';

const API_KEY = "4288be0591d26e26eb8ccb478188b864";
const API_CALL = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}";


// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));