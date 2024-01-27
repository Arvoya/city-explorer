import React from 'react';
import Movie from './Movie.jsx'
import ListGroup from "react-bootstrap/ListGroup";


// ! https://image.tmdb.org/t/p/w1280/ (LINK TO IMAGES) (USE poster_path)
class Movies extends React.Component {

    render() {
            if (this.props.movies){

                return(
                    <>
                    <h1>MOVIES</h1>
                    <ListGroup  style={{ justifyContent: 'center', display: 'flex' }}>
                        {this.props.movies.map((element, id) => (
                             <Movie key={id} movie={element}/>
                             ))}
                    </ListGroup>
                    </>
                )
            }
    }
}

export default Movies;