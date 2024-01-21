import React from 'react';
import {ListGroupItem} from "react-bootstrap";
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
                            <ListGroupItem key={id} variant="Primary">
                                <h3>{element.title}</h3>
                                <h4>{element.overview}</h4>
                                <img src={`https://image.tmdb.org/t/p/w1280${element.image_url}`} width={45} alt={`${element.title} poster`}/>
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                    </>
                )
            }
    }
}

export default Movies;