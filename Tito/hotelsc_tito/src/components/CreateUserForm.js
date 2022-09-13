import { useState } from "react"
import '../styles/formStyles.css';
import React from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'



export default function FormEmpleado(){
   const [nombre, setNombre] = useState('');
   const [apellidos, setApellidos] = useState('');
   const [edad, setEdad] = useState('');
   const [dni, setDni] = useState('');
   const [email, setEmail] = useState('');
   const [phone, setPhone] = useState('');
   const [direccion, setDireccion] = useState('');

   return(
    
    <form className="FormUser col" onSubmit={e => {e.preventDefault(); console.log('prueba')}}>
        
     <div className="form-row">
            <div className="form-group col">
                <label>Nombre</label>
                <input className="form-control" type='text' placeholder="Nombre" name='Nombre' value={nombre} onChange={e =>setNombre(e.target.value)}/>
            </div>
            <div className="form-group col">
                <label>Apellidos</label>
                <input className="form-control" type='text' placeholder="Apellidos" value={apellidos} name="Apellidos" onChange={e =>{setApellidos(e.target.value)}}/>
            </div>
        </div>
        <div className="form-row">
            <div className="form-group col-md-2">
                <label>Edad</label>
                <input className="form-control" type='number' placeholder="Edad" name="edad" value={edad} onChange={e =>setEdad(e.target.value)}/>
            </div>
            <div className="form-group col">
                <label>DNI</label>
                <input className="form-control"  type='text' placeholder="XXXXXXXXX - X" name="dni" value={dni} onChange={e =>setDni(e.target.value)}/>
            </div>
            <div className="form-group col">
                <label>Email</label>
                <input className="form-control"  type='text' placeholder="micorreo@ejemplo.xxx" name="email" value={email} onChange={e =>setEmail(e.target.value)}/>
            </div>
        </div>
        <div className="form-row">
            <div className="form-group col">
                <label> Telefono </label>
                <input className="form-control"  type='text' placeholder="+34" name="phone" value={phone} onChange={e =>setPhone(e.target.value)}/>
            </div>
            <div className="form-group col">
                <label> Dirección </label>
                <input className="form-control" placeholder="C/" type='text' name="direccion" value={direccion} onChange={e =>{console.log(direccion);setDireccion(e.target.value)}}/>
            </div>
        </div>
    
        <button className="raise"
        type="submit">
            Enviar</button>

    </form>
    
   )
}