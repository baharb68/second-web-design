import React, { Component } from 'react'
import './Tech.css'
import wp from '../img/wp.png'
import python from '../img/python.png'
import sql from '../img/mysql.png'
import bbpress from '../img/bbpress.webp'
import jq from '../img/jq.png'
import woo from '../img/woo.png'
export default class Tech extends Component {
    render() {
        return (
            <div className="tech container d-flex flex-wrap justify-content-center py-3 py-md-5">
                <div className="bg-white d-flex justify-content-center align-items-center px-2 py-1 mx-2 mt-2 mt-md-0">
                    <img src={wp} alt="" className="w-75"/>
                </div>
                <div className="bg-white d-flex justify-content-center align-items-center px-2 py-1 mx-2 mt-2 mt-md-0">
                    <img src={sql} alt="" className="w-75"/>
                </div>
                <div className="bg-white d-flex justify-content-center align-items-center px-2 py-1 mx-2 mt-2 mt-md-0">
                    <img src={jq} alt="" className="w-75"/>
                </div>
                <div className="bg-white d-flex justify-content-center align-items-center px-2 py-1 mx-2 mt-2 mt-md-0">
                    <img src={bbpress} alt="" className="w-75"/>
                </div>
                <div className="bg-white d-flex justify-content-center align-items-center px-2 py-1 mx-2 mt-2 mt-md-0">
                    <img src={python} alt="" className="w-75"/>
                </div>
                <div className="bg-white d-flex justify-content-center align-items-center px-2 py-1 mx-2 mt-2 mt-md-0">
                    <img src={woo} alt="" className="w-75"/>
                </div>
            </div>
        )
    }
}
