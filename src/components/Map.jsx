import React from 'react';

const API_KEY = import.meta.env.VITE_LOCATIONIQ_API;

class Map extends React.Component {

  constructor() {
    super();
    this.state = {
      imgUrl: null
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.lat !== prevProps.lat || this.props.lon !== prevProps.lon) {
      this.display();
    }
  }
  
  display = () => {
    const url = `https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${this.props.lat},${this.props.lon}&zoom=13&size=600x400&format=png&maptype=streets`;
    this.setState({
      imgUrl: url
    });
  }
  
  render() {
    return (
      <div className="map-container">
        {this.state.imgUrl && <img src={this.state.imgUrl} alt="Static Map" />}
      </div>
    )
  }


}

export default Map