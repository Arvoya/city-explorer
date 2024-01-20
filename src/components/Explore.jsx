import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Map from './Map';
import Errors from './Errors'
import Weather from './Weather.jsx';

const API_KEY = import.meta.env.VITE_LOCATIONIQ_API;

class Explore extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      citySearched: '',
      location: null,
      lat: null,
      lon: null,
      error: null,
      showModal: false,
      forecast: null,
    }
  }


  updateCitySearch = (event) => {
    this.setState({
      citySearched: event.target.value.toLowerCase(),
    })
  }

  handleForm = (event) => {
    event.preventDefault();
    let searchQ = this.state.citySearched;
    console.log('I am searchQ', searchQ)
    if(searchQ !== undefined && searchQ !== ''){

    axios.get(`https://us1.locationiq.com/v1/search?key=${API_KEY}&q=${this.state.citySearched}&format=json`)
        .then(response => {
          this.setState({
            location: response.data[0].display_name,
            lat: response.data[0].lat,
            lon: response.data[0].lon,
          }, () => {
            axios.get(`http://localhost:3001/weather?city=${this.state.citySearched}&lat=${this.state.lat}&lon=${this.state.lon}`)
                .then(response => {
                  console.log('I am the server response: ', response.data)
                  this.setState({
                    forecast: response.data
                  })
                })
                .catch(error => {
                  console.log(error)
                  this.toggleModal();
                  if(error.response){

                    this.setState({
                      error: `${error.message}, ${error.response.data.response}`,
                      forecast: null
                    });
                    } else {
                      this.setState({
                        error: `${error.message}`,
                        forecast: null
                      });
                    }
                });
          });
        })
        .catch(error => {
          // Handle errors from the first API call
          this.toggleModal();
          console.log(error.message)
          this.setState({
            error: error.message,
            lat: null,
            location: null,
            lot: null
          });
        });
    }
  }


  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    })
  }

  render() {
    return (
      <>
      <div className="search-container">
        <form onSubmit={this.handleForm}>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="City Name"
              aria-label="City Name"
              aria-describedby="basic-addon2"
              onChange={this.updateCitySearch}
            />
            <Button size='lg' variant="primary" type="submit">
              Explore!
            </Button>
          </InputGroup>
          <Form.Text id="cityDescription" muted>
            {this.state.location ? 'Location: ' + this.state.location + ' | Lat: ' + this.state.lat + ' | Lon: ' + this.state.lon : 'Search any city in the USA!'}
          </Form.Text>
        </form>
      </div>
      <Weather forecast={this.state.forecast} />
      <Map
      location={this.state.location} 
      lat={this.state.lat} 
      lon={this.state.lon}
      error={this.state.error}
      />

      <Errors 
      showModal={this.state.showModal}
      toggleModal={this.toggleModal}
      errorMessage={this.state.error}/>

      </>
    )
  }
}


export default Explore