import React, { Component } from 'react'

export default class Productitem extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="col-12 col-md-3 mb-5 ">
                <div className="productitem d-flex flex-column align-items-center position-relative ">
                    <div>
                        <img src={this.props.photo} alt="" className="w-100"/>
                    </div>
                    <div className="d-flex flex-column position-absolute align-items-center bg-white">
                        <h3 className="font-weight-bold px-3 pt-2 w-100  ">{this.props.title}</h3>
                        <p className="font-weight-bold text-right m-0 px-3 pb-2">{this.props.content}</p>
                    </div>
                </div>
            </div>
        )
    }
}
