import React, { Component } from 'react'

export default class Contactitem extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="contact d-flex">
                <h4 className="font-weight-bold pl-2">{this.props.title}</h4>
                <h5>{this.props.content}</h5>
            </div>
        )
    }
}
