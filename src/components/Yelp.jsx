import React from 'react';
import Restaurant from './Restaurant.jsx'
import ListGroup from "react-bootstrap/ListGroup";


class Yelp extends React.Component {

	render() {
		if (this.props.restaurants){

			return(
				<>
					<br/>
					<h1>Restaurants</h1>
					<br/>
					<ListGroup  style={{ justifyContent: 'center', display: 'flex' }}>
						{this.props.restaurants.map((element, id) => (
							<Restaurant key={id} restaurant={element}/>
						))}
					</ListGroup>
				</>
			)
		}
	}
}

export default Yelp;