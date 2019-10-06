import React, { Component } from 'react'
import carousel from '../img/carousel.jpg'
import './Carousel.css'
import Navbar from '../navbar/Navbar'


export default class Carousel extends Component {
  constructor(props){
    super(props);
  }
    render() {
        return (
            <div id="carouselExampleIndicators" class="carousel slide d-flex justify-content-center position-relative" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                {/* <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li> */}
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active d-flex justify-content-center position-relative">
                  <img src={carousel} class="d-block w-100" alt="..." />
                  <div className=" d-none d-md-flex flex-md-column d-md-block align-items-center position-absolute py-3">
                      <h2 className="font-weight-bold ">{this.props.title}</h2>
                      <p className="text-center my-3">{this.props.content}</p>
                      <button className="btn  py-2 px-4 text-center">{this.props.btntext}</button>
                  </div>
                </div>
                {/* <div class="carousel-item">
                  <img src="..." class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src="..." class="d-block w-100" alt="..." />
                </div> */}
              </div>
              <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            <div className="container-fluid bg-blue position-absolute p-0">
                <div className="bg-blue2 "></div>
                <div className="bg-blue3 "></div>
                <Navbar logo="آریپو" />
            </div>
          </div>
        )
    }
}
