import React from 'react';

class WeatherForm extends React.Component {      

    render(){
        return (
            <div id="weather-form">
                <div id="weather-form-inner-container">
                        <div id="city-name">{this.props.city}</div>
                        {this.props.information.map((info) => {
                            const url = `http://openweathermap.org/img/w/${info.weather_icons}.png`;
                            const date = info.date.getDate()+"/"+ (info.date.getMonth()+1) + "/" + info.date.getFullYear();
                            return( 
                                <div className="weather-form-infoline">
                                    <div className="segment no-border-left border-right">
                                        <h3>Date</h3>
                                        <div>{date}</div>
                                    </div>
                                    <div className="segment no-border-left">
                                        <img src={url} alt=""/>
                                        <div>{info.date.toLocaleTimeString()}</div>
                                    </div>
                                    <div className="segment">
                                        <h3>Description</h3>
                                        <div>{info.weather_condition_text}</div>
                                    </div>
                                    <div className="segment">
                                        <h3>Degrees(°C)</h3>
                                        <div>{info.temp_c}</div>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        )
    }
}

export default WeatherForm;