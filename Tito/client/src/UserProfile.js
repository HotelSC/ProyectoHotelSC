import { useEffect, useState } from 'react'
import prof from './img/employeeIcon.png'
import logo from './img/logo.png'
import snail  from './img/snail.gif'

export default function UserProfile(props) {
    const data = props.userData.data;
    while(props.userData.data == undefined){
        return(
            <div><img className='snail' src={snail}/></div>
        )
    }
    return (
        
        <div className="container-profile container">
            
                <img className="logo" src={logo}/>
                <img className="pic" src={prof}/>
                <h1>{data.usuario} - {data.categoria}</h1> 
            
                <div className="userInfo">
                <div className="row">
                    <div className="col">
                        <span >Nombre/s</span>
                        <p>{data.nombre}</p>
                    </div>
                    <div className="col">
                        <span >Apellido/s</span>
                        <p>{data.apellidos}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <span >DNI</span>
                        <p>{data.dni}</p>
                    </div>
                    <div className="col">
                        <span >Fecha de nacimiento</span>
                        <p> {data.fechaNacimiento}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <span >direccion</span>
                        <p>{data.direccion}</p>
                    </div>
                    <div className="col">
                        <span >Localidad</span>
                        <p>{data.localidad}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <span >Email</span>
                        <p>{data.email}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}