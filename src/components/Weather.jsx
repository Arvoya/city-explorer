import React from 'react';
import WeatherDay from "./WeatherDay.jsx";
import ListGroup from 'react-bootstrap/ListGroup';

class Weather extends React.Component  {

    render() {

        if (this.props.forecast) {
            return (
                 <>
                 <ListGroup horizontal style={{ justifyContent: 'center', display: 'flex' }}>
                    {this.props.forecast.map((element, id) => (
                         <WeatherDay dayForecast={element} key={id}/>
                    ))}
                 </ListGroup>
                 </>
            );
        }
    }
}

export default Weather;