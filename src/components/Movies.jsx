import React from 'react';
import {ListGroupItem} from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";


// ! https://image.tmdb.org/t/p/w1280/ (LINK TO IMAGES) (USE poster_path)
class Movies extends React.Component {

    render() {
            if (this.props.movies){

                return(
                    <ListGroup horizontal >

                        {this.props.movies.map((element, id) => (
                            <ListGroupItem key={id} variant="Primary">
                                <p>{element.title}</p>
                                <p>{element.overview}</p>
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                )
            }
    }
}

export default Movies;