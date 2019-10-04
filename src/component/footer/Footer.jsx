import React, { Component } from 'react'
import './Footer.css'
import Footerproduct from './Footerproduct'
import Contactitem from './Contactitem'
import Followitem from './Followitem'
import p1 from '../img/p1.jpg'
import p2 from '../img/p2.jpg'
import p3 from '../img/p3.jpg'
import telegram from '../img/telegram.png'
import instagram from '../img/instagram.png'
import whatsapp from '../img/whatsapp.png'
import twitter from '../img/twitter.png'
import google from '../img/google.png'


export default class Footer extends Component {
    render() {
        return (
            <div className="d-flex flex-column">
                <div className="footer container d-flex flex-column flex-md-row">
                    <div className="col-12 col-md-3">
                        <div className="d-flex flex-column align-items-start text-white">
                            <h2>درباره ما</h2>
                            <p className="text-right mt-3">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. </p>
                        </div>
                    </div>

                    <div className="col-12 col-md-3">
                        <div className="d-flex flex-column align-items-start">
                            <h3 className="text-white pb-3">آخرین محصولات</h3>
                            <Footerproduct photo={p1} title="محصول اول" date="9 مهر 1398" />
                            <Footerproduct photo={p2} title="محصول دوم " date="9 مهر 1398" />
                            <Footerproduct photo={p3} title="محصول سوم" date="9 مهر 1398" />
                        </div>
                    </div>
                    
                    <div className="col-12 col-md-3 d-flex flex-column">
                        <div className="d-flex flex-column align-items-start">
                            <h3 className="text-white pb-3">تماس با ما</h3>
                            <Contactitem title="تلفن:" content="(555) 555-55555" />
                            <Contactitem title="ایمیل:" content="email@yahoo.com" />
                            <Contactitem title="twitter:" content="@twitter" />
                        </div>
                        <div className="d-flex justify-content-start pt-5">
                            <Followitem icon={telegram} />
                            <Followitem icon={whatsapp} />
                            <Followitem icon={instagram} />
                            <Followitem icon={twitter} />
                            <Followitem icon={google} />
                        </div>
                    </div>

                    <div className="col-12 col-md-3">
                        <form>
                            <div class="form-group d-flex flex-column align-items-start ">
                                <label for="inputEmail4">نام و نام خانوادگی:</label>
                                <input type="email" class="form-control form-control-sm" id="inputEmail4" placeholder=""/>
                            </div>
                            <div class="form-group d-flex flex-column align-items-start">
                                <label for="inputAddress">ایمیل: </label>
                                <input type="text" class="form-control form-control-sm" id="inputAddress" placeholder=""/>
                            </div>
                            <div class="form-group d-flex flex-column align-items-start">
                                <label for="exampleFormControlTextarea1">پیام شما:</label>
                                <textarea class="form-control form-control-sm" id="exampleFormControlTextarea1" rows="2"></textarea>
                            </div>
                            <button type="submit" class="btn text-white">ارسال</button>
                        </form>
                    </div>

                </div>
                <div className="bg-green d-flex align-items- justify-content-center mt-5 p-2 w-100">
                    <h6 className="text-white m-0 font-weight-bold ">حقوق این سایت متعلق است به ...</h6>
                </div>
            </div>
        )
    }
}
