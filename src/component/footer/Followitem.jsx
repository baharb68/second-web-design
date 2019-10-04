import React, { Component } from 'react'

export default class Followitem extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="follow d-flex align-items-center justify-content-center ml-1">
                <img src={this.props.icon} alt=""/>
            </div>
        )
    }
}
