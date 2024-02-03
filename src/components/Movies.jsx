import React from 'react';
import Movie from './Movie.jsx';
import Carousel from 'react-bootstrap/Carousel';

class Movies extends React.Component {
     changeArray = (array) => {
          let newArr = [];
          for (let i = 0; i < array.length; i += 5) {
               newArr.push(array.slice(i, i + 5));
          }
          return newArr;
     };

     render() {
          if (this.props.movies) {
               let finalArray = this.changeArray(this.props.movies);

               return (
                    <div className={'movie-div'}>
                         <h1 className={'movie-header'}>MOVIES</h1>
                         <br />
                         <Carousel className={'movie-carousel'}>
                              {finalArray.map((element, id) => (
                                   <Carousel.Item key={id} interval={15000}>
                                        <div className="movie-carousel-item">
                                             {element.map((movie, index) => (
                                                  <Movie key={index} movie={movie} />
                                             ))}
                                        </div>
                                   </Carousel.Item>
                              ))}
                         </Carousel>
                         <br />
                    </div>
               );
          }
     }
}

export default Movies;
