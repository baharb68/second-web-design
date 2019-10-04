import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'bootstrap';
import 'vazir-font/dist/font-face.css';
import Carousel from '../src/component/carousel/Carousel'
import Footer from '../src/component/footer/Footer'


function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Carousel title="نام وب سایت" content="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون " btntext="ادامه مطلب"/>
      </div>
      <div className="container-fluid">
        <Footer />
      </div>
    </div>
  );
}

export default App;
