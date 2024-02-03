import React from 'react';
import { Figure, FigureCaption, Image } from 'react-bootstrap';

class Restaurant extends React.Component {
	render(){
		return (
				<Figure className={'restaurant-figure'} >
					<Image className={'restaurant-image'} src={this.props.restaurant.img}/>
					<FigureCaption className={'restaurant-title'}>
						{this.props.restaurant.name}
					</FigureCaption>
				</Figure>
		)
	}
}

export default Restaurant;