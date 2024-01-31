import React from 'react';
import Movie from './Movie.jsx'
import ListGroup from "react-bootstrap/ListGroup";

class Movies extends React.Component {

    render() {
            if (this.props.movies){

                return(
                    <>
                    <h1>MOVIES</h1>
                    <br/>
                    <ListGroup  style={{ justifyContent: 'center', display: 'flex' }}>
                        {this.props.movies.map((element, id) => (
                             <Movie key={id} movie={element}/>
                             ))}
                    </ListGroup>
                    <br/>
                    </>
                )
            }
    }
}

export default Movies;