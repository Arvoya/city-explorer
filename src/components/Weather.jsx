import React from 'react';
import WeatherDay from "./WeatherDay.jsx";
import ListGroup from 'react-bootstrap/ListGroup';

class Weather extends React.Component  {

    render() {

        if (this.props.forecast) {
            return (
                 <div className='weather-list'>
                 <ListGroup horizontal >
                    {this.props.forecast.map((element, id) => (
                         <WeatherDay dayForecast={element} key={id} className='weather-item'/>
                    ))}
                 </ListGroup>
                 </div>
            );
        }
    }
}

export default Weather;