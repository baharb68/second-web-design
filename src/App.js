import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'bootstrap';
import 'vazir-font/dist/font-face.css';
import Navbar from '../src/component/navbar/Navbar'


function App() {
  return (
    <div className="App">
      <div className="container bg-blue">
        <Navbar logo="نام وب سایت" />
      </div>
    </div>
  );
}

export default App;
