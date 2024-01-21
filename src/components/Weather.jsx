import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import {ListGroupItem} from "react-bootstrap";


class Weather extends React.Component  {



    render() {

        if (this.props.forecast) {

            return (
                <ListGroup horizontal style={{ justifyContent: 'center', display: 'flex' }}>

                    {this.props.forecast.map((element, id) => (
                        <ListGroupItem key={id} variant="info">
                            <p>{element.date}</p>
                            <p>{element.description}</p>
                        </ListGroupItem>
                    ))}
                </ListGroup>
            );
        }


    }


}

export default Weather;