import React, { Component } from 'react'
import './Service.css'
import Serviceitem from '../services/Serviceitem'
import service from '../img/service.png'
import user from '../img/avatar.png'
import send from '../img/mail-send.png'
import sale from '../img/money.png'
import teach from '../img/presentation.png'
import design from '../img/computer.png'

export default class Service extends Component {
    render() {
        return (
            <div className="w-75 container d-flex flex-wrap justify-content-center px-0 my-4">
                <Serviceitem icon={service} title="پشتیبانی" />
                <Serviceitem icon={user} title="کاربران" />
                <Serviceitem icon={teach} title="آموزش" />
                <Serviceitem icon={design} title="طراحی" />
                <Serviceitem icon={sale} title="فروش" />
                <Serviceitem icon={send} title="ارسال فوری" />
                <Serviceitem icon={design} title="طراحی" />
                <Serviceitem icon={sale} title="فروش" />
                <Serviceitem icon={send} title="ارسال فوری" />
            </div>
        )
    }
}
