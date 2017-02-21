import React from 'react';
import {render} from 'react-dom';


export default class Carousel extends React.Component {
  render () {
    return <div id="carouselLeasideIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselLeasideIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselLeasideIndicators" data-slide-to="1"></li>
    <li data-target="#carouselLeasideIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner" role="listbox">
    <div className="carousel-item active">
      <img className="d-block img-fluid" src="./app/assets/examining.jpg" alt="First slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block img-fluid" src="./app/assets/family2.jpg" alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block img-fluid" src="./app/assets/preventive-2.jpg" alt="Third slide" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselLeasideIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselLeasideIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
  }
}

