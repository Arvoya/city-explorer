import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';

const API_KEY = import.meta.env.VITE_LOCATIONIQ_API;

class Explore extends React.Component {

  constructor() {
    super();
    this.state = {
      citySearched: '',
      location: null,
      lat: null,
      lon: null,
    }
  }


  updateCitySearch = (event) => {
    this.setState({
      citySearched: event.target.value,
    })
  }

  handleForm = (event) => {
    event.preventDefault();
    axios.get(`https://us1.locationiq.com/v1/search?key=${API_KEY}&q=${this.state.citySearched}&format=json`)
      .then(response => {
        console.log('SUCCESS: ', response.data);
        this.setState({ 
          location: response.data[0].display_name,
          lat: response.data[0].lat,
          lon: response.data[0].lon,
        })
      })
  }

render() {
  return (
    <>
    <form onSubmit={this.handleForm}>
      <Form.Label htmlFor="search">Search City:</Form.Label>
      <Form.Control
        type="input"
        id="citySearch"
        onChange={this.updateCitySearch}
        
        />
     <button type='submit'>Explore!</button>
     <br />
     <Form.Text id="cityDescription" muted>
        {this.state.location ? 'Location: ' + this.state.location + ' | Lat: ' + this.state.lat + ' | Lon: ' + this.state.lon : 'Search any city in the USA!'}
      </Form.Text>

    </form>
    </>
  )
}


}


export default Explore