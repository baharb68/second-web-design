import React, { Component } from 'react'
import './Aboutus.css'
import './AboutusItem'


export default class Aboutus extends Component {
    render() {
        return (
            <div className="about container d-flex flex-column flex-md-row p-5">
                <div className="col-12 col-md-8 d-flex flex-column p-0 px-md-5 mb-2 mb-md-0 ">
                    {/* <Logo logo={logo1} webname="VizaCart" webdesc="خدمات تبادل ارزهای مجازی"/> */}
                    <p className="text-justify mt-3 mb-0">{this.props.briefing}</p>
                </div>
                {/* <div className="col-12 col-md-4 d-flex flex-column p-0 pr-md-4 justify-content-center">
                    <div className="d-flex">
                        <AboutusItem photo={about3} text="ستاد سازمان دهی پایگاه های اینترنتی" />
                        <AboutusItem photo={about2} text="اتحادیه کشوری کسب و کارهای مجازی" />
                        <AboutusItem photo={about1} text="نماد اعتماد الکترونیکی" />
                    </div>

                    <div class="input-group py-2 px-2 ">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon3">{this.props.btntext}</span>
                        </div>
                        <input type="text" class="form-control text-right" id="basic-url" aria-describedby="basic-addon3" placeholder="لطفا ایمیل خود را وارد کنید"/>
                        <span class="d-flex align-items-center "><h5 className="font-weight-light p-2 m-0">{this.props.formtitle}</h5></span>
                    </div>
                </div> */}
                
            </div>
        )
    }
}
