import React, { Component } from 'react'

export default class AboutusItem extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className=" col-4 mb-3 px-1">
                <div className="aboutitem d-flex flex-column align-items-center bg-white b-shadow h-100">
                    <img src={this.props.photo} alt="" className="w-50 py-2"/>
                    <h4 className="px-1">{this.props.text}</h4>
                </div>
            </div>
        )
    }
}
