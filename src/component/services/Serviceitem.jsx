import React, { Component } from 'react'

export default class Serviceitem extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="serviceitem d-flex flex-column align-items-center">
                <div className="rounded-circle d-flex flex-column align-items-center justify-content-center mb-3 mx-2">
                    <img src={this.props.icon} alt="" />
                    <h2 className="pt-2">{this.props.title}</h2>
                </div>
               
            </div>
        )
    }
}
