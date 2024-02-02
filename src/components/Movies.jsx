import React from 'react';
import Movie from './Movie.jsx'
import ListGroup from "react-bootstrap/ListGroup";

class Movies extends React.Component {

    render() {
            if (this.props.movies){

                return(
                    <div className={'movie-div'}>
                    <h1>MOVIES</h1>
                    <br/>
                    <ListGroup>
                        {this.props.movies.map((element, id) => (
                             <Movie key={id} movie={element}/>
                             ))}
                    </ListGroup>
                    <br/>
                    </div>
                )
            }
    }
}

export default Movies;