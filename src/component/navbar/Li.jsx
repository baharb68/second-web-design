import React, { Component } from 'react'
import './Navbar.css'

export default class Li extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <li class="nav-item px-3 py-3">
                <a class="nav-link " href="#">{this.props.link}</a>
            </li>
        )
    }
}
