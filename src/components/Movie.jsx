import React from 'react';
import { Figure, FigureCaption, Image } from 'react-bootstrap';

class Movie extends React.Component {
	render() {
		return (
			<Figure className="movie-figure">
				<Image className="movie-image" src={`https://image.tmdb.org/t/p/w1280${this.props.movie.image_url}`} rounded />
				<FigureCaption className="movie-title">
					{this.props.movie.title}
				</FigureCaption>
			</Figure>
		);
	}
}

export default Movie;
