import React, { Component } from 'react'
import './Contact.css'
import comment from '../img/comment.jpg'
import user from '../img/user.png'
import Commentitem from './Commentitem'
import logo1 from '../img/logo.png'

export default class Contact extends Component {
    render() {
        return (
            <div className="about d-flex position-relative align-items-center">
                <div className="d-none d-md-block col-md-3 p-0 h-100">
                    <img src={comment} alt="" className="w-100"/>
                </div>
                <div className="col-12 col-md-9 d-flex align-items-center justify-content-center bg-contact py-3 px-5 h-100 m-0">
                    <Commentitem name="نام و نام خانوادگی" skill="شغل و مهارت" comment=" لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگر ها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای" profileimg={user} />
                </div>
                {/* <div className="flex-column align-items-center pt-5 px-0 position-absolute">
                </div> */}
            </div>
        )
    }
}
