import React from 'react';
import Figure from 'react-bootstrap/Figure';
import Image from 'react-bootstrap/Image';

const API_KEY = import.meta.env.VITE_LOCATIONIQ_API;

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrl: null,
    };
  }

  componentDidMount() {
    this.display();
  }

  componentDidUpdate(prevProps) {
    if (this.props.lat !== prevProps.lat || this.props.lon !== prevProps.lon) {
      this.display();
    }
  }

  display = () => {
    const url = `https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${this.props.lat},${this.props.lon}&zoom=13&size=600x400&format=png&maptype=streets`;
    this.setState({
      imgUrl: url,
    });
  };

  render() {
    console.log("Rendering Map component");
    console.log("this.state.imgUrl:", this.state.imgUrl);

    if (this.state.imgUrl !== null) {
      return (
           <div className="map-container">
             <Figure className={'map-figure'}>
               {this.state.imgUrl && (
                    <Image src={this.state.imgUrl} className={'map-image'} rounded />
               )}
               <Figure.Caption className={'map-caption'}>
                 {this.props.location}
               </Figure.Caption>
             </Figure>
           </div>
      );
    } else {
      console.log("Returning null, imgUrl is null");
      return null;
    }
  }
}

export default Map;
