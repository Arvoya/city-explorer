import React from 'react';
import axios from 'axios';
import Map from './Map';
import Errors from './Errors'
import Weather from './Weather';
import Movies from './Movies';
import Yelp from './Yelp.jsx';
import CitySearchForm from "./Form";

/*
TODO Add Trails/Hiking/Camping to website
TODO use https://www.nps.gov/subjects/developer/api-documentation.htm in API
 */
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
      movies: null,
      restaurants: null,
    }
  }

  handleForm = (event) => {
      event.preventDefault();
      const searchQ = this.state.citySearched

      if(searchQ !== null && searchQ !== '') {
          axios.get(`https://us1.locationiq.com/v1/search?key=${API_KEY}&q=${this.state.citySearched}&format=json`)
              // LOCATION RESPONSE
              .then(response => {
                  const {lat, lon, display_name} = response.data[0]
                  this.setState({
                      lat: lat,
                      lon: lon,
                      location: display_name
                  })
                  return axios.get(`https://city-explorer-api-0g77.onrender.com/weather?city=${searchQ}&lat=${lat}&lon=${lon}`);
                   // return axios.get(`http://localhost:3001/weather?city=${searchQ}&lat=${lat}&lon=${lon}`);
              })
              // * WEATHER RESPONSE
              .then(response => {
                  this.setState( {
                      forecast: response.data
                  })
                  return axios.get(`https://city-explorer-api-0g77.onrender.com/movies?city=${searchQ}`)
                   // return axios.get(`http://localhost:3001/movies?city=${searchQ}`)
              })
              // * MOVIE RESPONSE
              .then(response => {
                   this.setState( {
                        movies: response.data.filter((element, id) => id < 15 )
                  })
                   return axios.get(`https://city-explorer-api-0g77.onrender.com/yelp?city=${searchQ}`)
                  // return axios.get(`http://localhost:3001/yelp?city=${searchQ}`)
              })
               // * YELP RESPONSE
              .then(response => {
                   console.log(response)
                   this.setState({
                      restaurants: response.data
                   })
              })
              .catch(error => {
                  this.setState({
                      error: error.message,
                      forecast: null,
                      location: null
                  })
                  this.toggleModal();
              })
      }
  }


  // * HELPER FUNCTIONS
  updateCitySearch = (event) => {
    this.setState({
      citySearched: event.target.value.toLowerCase(),
    })
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    })
  }

  render() {
    return (
      <>
             <CitySearchForm
                 citySearched={this.state.citySearched}
                 handleForm={this.handleForm}
                 updateCitySearch={this.updateCitySearch}/>
           {this.state.location ? (
                <div className={'content-container'}>
                     <div className={'location-container'}>
                          <Map
                               location={this.state.location}
                               lat={this.state.lat}
                               lon={this.state.lon}
                               error={this.state.error}/>
                          <Weather
                               forecast={this.state.forecast}/>
                     </div>
                     <div className={'list-content'}>
                          <Movies movies={this.state.movies}/>
                          <Yelp restaurants={this.state.restaurants}/>
                     </div>
                </div>
           ) : null}
       <Errors
            showModal={this.state.showModal}
            toggleModal={this.toggleModal}
                 errorMessage={this.state.error}/>
      </>
    )
  }
}


export default Explore