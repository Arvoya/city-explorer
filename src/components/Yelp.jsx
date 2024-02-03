import React from 'react';
import Restaurant from './Restaurant.jsx';
import Carousel from 'react-bootstrap/Carousel';

class Yelp extends React.Component {
	changeArray = (array) => {
		let newArr = [];
		for (let i = 0; i < array.length; i += 5) {
			newArr.push(array.slice(i, i + 5));
		}
		return newArr;
	};

	render() {
		if (this.props.restaurants) {
			let finalArray = this.changeArray(this.props.restaurants);
			return (
				<div>
					<h1 className={'restaurant-header'}>RESTAURANTS</h1>
					<Carousel className={'restaurant-carousel'}>
						{finalArray.map((element, id) => (
							<Carousel.Item
								key={id}
								interval={15000}
							>
								<div className={'restaurant-carousel-item'}>
									{element.map((element, id) => (
										<Restaurant key={id} restaurant={element} />
									))}
								</div>
							</Carousel.Item>
						))}
					</Carousel>
				</div>
			);
		}
	}
}

export default Yelp;
