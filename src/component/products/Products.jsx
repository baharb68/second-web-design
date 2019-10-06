import React, { Component } from 'react'
import './Products.css'
import Parttitle from '../parttitle/Parttitle'
import Productitem from './Productitem'
import seperator from '../img/seperator.png'
import p1 from '../img/p1.jpg'
import p2 from '../img/p2.jpg'
import p3 from '../img/p3.jpg'
import p4 from '../img/p4.jpg'
import p5 from '../img/p5.jpg'
import p6 from '../img/p6.jpg'

export default class Products extends Component {
    render() {
        return (
            <div className="container w-75 d-flex flex-column align-items-center my-5">
                <Parttitle title="محصولات" seperator={seperator}/>
                <div className="d-flex flex-column flex-md-row flex-wrap mt-4">
                    <Productitem photo={p1} title="محصول یکم" content="لورم ایپسوم متن ساختگی با تولید سادگی " />
                    <Productitem photo={p2} title="محصول دوم"  content="لورم ایپسوم متن ساختگی با تولید سادگی" />
                    <Productitem photo={p3} title="محصول سوم" content="لورم ایپسوم متن ساختگی با تولید سادگی " />
                    <Productitem photo={p4} title="محصول چهارم" content="لورم ایپسوم متن ساختگی با تولید سادگی" />
                    <Productitem photo={p5} title="محصول پنجم" content="لورم ایپسوم متن ساختگی با تولید سادگی " />
                    <Productitem photo={p6} title="محصول ششم" content="لورم ایپسوم متن ساختگی با تولید سادگی " />
                    <Productitem photo={p2} title="محصول هفتم"  content="لورم ایپسوم متن ساختگی با تولید سادگی" />
                    <Productitem photo={p3} title="محصول هشتم" content="لورم ایپسوم متن ساختگی با تولید سادگی " />


                </div>
                
            </div>
        )
    }
}
