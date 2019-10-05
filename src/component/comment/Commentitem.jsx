import React, { Component } from 'react'

export default class Commentitem extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="comment position-relative d-flex flex-column justify-content-center align-items-center text-center bg-white my-5  w-75 p-4">
                <h2 className="font-weight-bold">{this.props.name}</h2>
                <h3>{this.props.skill}</h3>
                <p className="text-justify m-0">{this.props.comment}</p>
                <img src={this.props.profileimg} alt="" className="position-absolute"/>
            </div>
        )
    }
}
