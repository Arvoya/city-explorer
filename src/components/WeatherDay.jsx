import React from 'react';
import {ListGroupItem} from "react-bootstrap";
class WeatherDay extends React.Component {

	render(){
		return(
			<>
				<ListGroupItem  variant='info'>
					<p>{this.props.dayForecast.date}</p>
					<p>{this.props.dayForecast.description}</p>
				</ListGroupItem>
			</>
		)
	}
}

export default WeatherDay;