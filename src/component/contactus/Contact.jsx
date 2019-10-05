import React, { Component } from 'react'
import './Contact.css'
import comment from '../img/comment.jpg'
import user from '../img/user.png'
import Commentitem from '../comment/Commentitem'
import logo1 from '../img/logo.png'

export default class Contact extends Component {
    render() {
        return (
            <div className="about d-flex position-relative align-items-center">
                <div className="d-none d-md-block col-md-3 p-0">
                    <img src={comment} alt="" className="w-100"/>
                </div>
                <div className="col-12 col-md-9 d-flex bg-contact p-0 h-100 m-0">
                    <div className="w-75 d-flex flex-column align-items-start justify-content-center py-5  mr-auto px-5 h-100">
                        <div className="logo d-flex align-items-center">
                            <div>
                                <img src={logo1} alt="" className="w-100"/>
                            </div>
                            <a class="navbar-brand font-weight-bold" href="#">نام وب سایت</a>
                        </div>
                        <p className="text-right mt-3 mb-0 pl-4">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. </p>
                        <p className="text-right mb-3 pl-4">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. </p>
                        <button className="btn mt-3 text-white">تماس با ما</button>
                    </div>
                </div>
                <div className="flex-column align-items-center pt-5 px-0 position-absolute">
                    <Commentitem name="نام و نام خانوادگی" skill="شغل و مهارت" comment=" لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگر ها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای" profileimg={user} />
                </div>
                
            </div>
        )
    }
}
