import { useEffect, useState } from 'react'
import prof from './img/employeeIcon.png'
import logo from './img/logo.png'

export default function UserProfile(props) {
    while(props.userData.data == undefined){
        return(
            <div><p>CARGANDOOOOOOOOOOOOOO</p></div>
        )
    }return (
        <div className="container-profile container">
                <img className="logo" src={logo}/>
                <img className="pic" src={prof}/>
                <h1>LOREM IPSUM</h1>
            <div className="userInfo">
                <div className="row">
                    <div className="col">
                        <span >Nombre/s</span>
                        <p>{props.userData.data.nombre}</p>
                    </div>
                    <div className="col">
                        <span >Apellido/s</span>
                        <p>LOREM IPSUM</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <span >Telefono</span>
                        <p>LOREM IPSUM</p>
                    </div>
                    <div className="col">
                        <span >Correo</span>
                        <p>LOREM IPSUM</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <span >Telefono</span>
                        <p>LOREM IPSUM</p>
                    </div>
                    <div className="col">
                        <span >Fecha de Nacimiento</span>
                        <p>Lorem Ipsum</p>
                    </div>
                </div>

            </div>
        </div>
    )
}