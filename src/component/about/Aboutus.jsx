import React, { Component } from 'react'
import './About.css'
import card from '../img/card.png'
import about from '../img/about3.jpg'


export default class Aboutus extends Component {
    render() {
        return (
            <div className="about container d-flex ">
                <div className="col-12 col-md-8 d-flex align-items-center justify-content-center p-0">
                    <div className="w-75 d-flex flex-column align-items-start">
                        <h2 className="font-weight-bold ">درباره ما</h2>
                        <span className="d-flex mb-0 pb-2">لورم ایپسوم متن ساختگی </span>
                        <p className="mt-3 mb-0 text-right">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. </p>
                        <p className=" mb-3 text-right">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. </p>
                        <button className="btn mt-3">ادامه مطلب</button>
                    </div>
                </div>
                <div className="d-none d-md-block col-md-4">
                    <div className="photo">
                        <img src={about} alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}
