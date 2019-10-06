import React, { Component } from 'react'
import './Parttitle.css'

export default class Parttitle extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="d-flex flex-column parttitle align-items-center mt-4 mb-3">
                <h2 className="mb-3">{this.props.title}</h2>
                <img src={this.props.seperator} alt=""/>
            </div>
        )
    }
}
