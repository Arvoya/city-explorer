import React from 'react';
import {ListGroupItem} from 'react-bootstrap';

class Restaurant extends React.Component {
	render(){
		return (
			<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
				<ListGroupItem variant='Primary' style={{maxWidth: '600px', textAlign: 'center'}}>
					<h2>{this.props.restaurant.name}</h2>
					<img src={this.props.restaurant.img} width="100%" alt={`${this.props.restaurant.name} poster`}/>
				</ListGroupItem>
			</div>
		)
	}
}

export default Restaurant;