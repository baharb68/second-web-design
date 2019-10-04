import React, { Component } from 'react'
import './Navbar.css'
import Li from './Li'
import logo1 from '../img/logo.png'

export default class Navbar extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <nav class="container navbar navbar-expand-lg navbar-light py-0 my-0">
                    <div className="logo d-flex align-items-center">
                        <div>
                            <img src={logo1} alt="" className="w-100"/>
                        </div>
                        <a class="navbar-brand font-weight-bold" href="#">{this.props.logo}</a>
                    </div>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav mr-auto ">
                            <Li link="صفحه اصلی" />
                            <Li link="بلاگ" />
                            <Li link="خدمات" />
                            <Li link="پروژه ها" />
                            <Li link="فروشگاه" />
                            <Li link="تماس با ما" />
                            <Li link="درباره ما" />
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
