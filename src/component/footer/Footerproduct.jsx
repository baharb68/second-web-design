import React, { Component } from 'react'

export default class Footerproduct extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="footerp d-flex py-2">
                <div>
                    <img src={this.props.photo} alt="" className="w-100 h-100"/>
                </div>
                <div className="d-flex flex-column justify-content-center px-3">
                    <h4 className="font-weight-bold">{this.props.title}</h4>
                    <h5 className="m-0">{this.props.date}</h5>
                </div>
            </div>
        )
    }
}
