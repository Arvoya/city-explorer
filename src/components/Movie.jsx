import React from 'react';
import {ListGroupItem} from 'react-bootstrap';

class Movie extends React.Component {
	render(){
		return (
			<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
				<ListGroupItem variant='Primary' style={{maxWidth: '600px', textAlign: 'center'}}>
					<h2>{this.props.movie.title}</h2>
					<h4>{this.props.movie.overview}</h4>
					<img src={`https://image.tmdb.org/t/p/w1280${this.props.movie.image_url}`} width="100%" alt={`${this.props.movie.title} poster`}/>
				</ListGroupItem>
			</div>
		)
	}
}

export default Movie;