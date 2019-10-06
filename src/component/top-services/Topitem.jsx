import React, { Component } from 'react'

export default class Topitem extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="topitem col-12 col-md-3 px-4">
                <div className="d-flex flex-column align-items-center p-4 b-shadow">
                    <img src={this.props.icon} alt="" className="mb-4"/>
                    <h2>{this.props.title}</h2>
                    <p className="mt-2">{this.props.content}</p>
                </div>
            </div>
        )
    }
}
