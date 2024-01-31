import React from 'react';
import {ListGroupItem} from "react-bootstrap";
class WeatherDay extends React.Component {

	convertToFahrenheit(temp) {
		const fahrenheit = Math.round((temp * 9 / 5) + 32);
		return `${fahrenheit}°F`;
	}
	render(){
		
		return(
			<>
				<ListGroupItem  variant='info'>
					<p>{this.props.dayForecast.date}</p>
					<img src={this.props.dayForecast.img} alt='Image of current weather'/>
					<p>{this.convertToFahrenheit(this.props.dayForecast.temp)}</p>
					<p>{this.props.dayForecast.description}</p>
				</ListGroupItem>
			</>
		)
	}
}

export default WeatherDay;