import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'bootstrap';
import 'vazir-font/dist/font-face.css';
import Carousel from '../src/component/carousel/Carousel'
import Footer from '../src/component/footer/Footer'
import Contact from './component/comment/Contact'
import Service from '../src/component/services/Service'
import Top from '../src/component/top-services/Top'
import Product from '../src/component/products/Products'
import Tech from '../src/component/technology/Tech'
import Aboutus from '../src/component/about/Aboutus'



function App() {
  return (
    <div className="App bg-gray">
      <div className="container-fluid px-0">
        <Carousel title="آریپو" content="مجموعه طراحی سایت و برنامه نویسی" btntext="ادامه مطلب"/>
      </div>
      <div className="container-fluid d-flex justify-content-center px-0">
        <Service />
      </div>
      <div className="container-fluid bg-white py-5">
        <Aboutus />
      </div>
      <div className="tops container-fluid d-flex justify-content-center position-relative">
        <Top />
      </div>
      <Product />
      <div className="container-fluid bg-white p-0">
        <Contact />
      </div>
      <div className="container-fluid">
        <Tech />
      </div>
      <div className="container-fluid bg-footer pt-5 px-0">
        <Footer />
      </div>

    </div>
  );
}

export default App;
