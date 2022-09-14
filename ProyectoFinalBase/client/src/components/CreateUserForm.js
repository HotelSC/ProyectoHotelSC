import { useState } from "react"
import '../styles/formStyles.css';
import React from 'react'
import 'react-phone-input-2/lib/style.css'

/*CODE BY TITO :D*/


export default function FormEmpleado(){
   const [nombre, setNombre] = useState('');
   const [apellidos, setApellidos] = useState('');
   const [fNacimiento, setFNacimiento] = useState('');
   const [dni, setDni] = useState('');
   const [email, setEmail] = useState('');
   const [phone, setPhone] = useState('');
   const [direccion, setDireccion] = useState('');
   const [password, setPassword] = useState('');
   const [categoria, setCategoria] = useState('');

   const inputState = {
    error : Boolean,
    nombre: {
        validado: Boolean,
        RegExp: /([A-Z]{1}[a-z]+[ ]?){1,2}$/
    },
    apellidos: {
        validado: Boolean,
        RegExp: /([A-Z]{1}[a-z]+[ ]?){1,2}$/
    },
    telefono: {
        validado: Boolean,
        RegExp: /^\+?(6\d{2}|7[1-9]\d{1})\d{6}$/
    }
   }
    function validation(e){
        var inputName = e.target.name;
        switch(inputName){
            case 'Nombre':{
                inputState.nombre.validado = inputState.nombre.RegExp.test(nombre);

                break;
            }
            case 'Apellidos': {
                inputState.apellidos.validado = inputState.apellidos.RegExp.test(apellidos);
                
                break;
            }
            case 'Edad' : {

                var fA = new Date();
                var FL = new Date((fA.getFullYear() - 16) + '-' + (fA.getMonth() + 1) + '-' + fA.getDate());
                var f2 = new Date(fNacimiento);
                
                if(FL => f2){
                    console.log('MAYOR de edad')
                }else
                console.log('MENOR de edad')
                
            }
            
        }
    };


   return(
    <>    
    <h1>Crear Usuario</h1>
    <form className="FormUser col" onSubmit={e => {e.preventDefault(); console.log('prueba')}}>
       
     <div className="form-row">
            <div className="form-group col">
                <label>Nombre</label>
                <input className="form-control" type='text' placeholder="Ej: Tito Aaron" name='Nombre' value={nombre} onChange={e => setNombre(e.target.value)} onBlur={e => validation(e)}/>
            </div>
            <div className="form-group col">
                <label>Apellidos</label>
                <input className="form-control" type='text' placeholder="Ej: Hidalgo Salazar" value={apellidos} name="Apellidos" onChange={e =>{setApellidos(e.target.value)}} onBlur={e => validation(e)}/>
            </div>
        </div>
        <div className="form-row">
            <div className="form-group col-md-4">
                <label>Fecha de Nacimiento</label>
                <input className="form-control" type='date' placeholder="Edad" name="Edad" value={fNacimiento} onChange={e => setFNacimiento(e.target.value)} onBlur={e => validation(e)}/>
            </div>
            <div className="form-group col">
                <label>DNI</label>
                <input className="form-control"  type='text' placeholder="XXXXXXXXX - X" name="Dni" value={dni} onChange={e =>setDni(e.target.value)} onBlur={e => validation(e)}/>
            </div>
            <div className="form-group col">
                <label>Email</label>
                <input className="form-control"  type='text' placeholder="micorreo@ejemplo.xxx" name="Email" value={email} onChange={e =>setEmail(e.target.value)} onBlur={e => validation(e)}/>
            </div>
        </div>
        <div className="form-row">
            <div className="form-group col">
                <label> Telefono </label>
                <input className="form-control" pattern="/^\+?(6\d{2}|7[1-9]\d{1})\d{6}$/"  type='text' placeholder="+34" name="Phone" value={phone} onChange={e =>setPhone(e.target.value)} onBlur={e => validation(e)}/>
            </div>
            <div className="form-group col">
                <label> Dirección </label>
                <input className="form-control" placeholder="C/" type='text' name="Direccion" value={direccion} onChange={e =>{setDireccion(e.target.value)}} onBlur={e => validation(e)}/>
            </div>
        </div>
        <div className="form-row">
            <div className="form-group col">
                <label> Contraseña </label>
                <input className="form-control" type='password' placeholder="Password" name="Password" value={password} onChange={e => {setPassword(e.target.value)}} onBlur={e => validation(e)}></input>
            </div>
            <div className="form-group col">
                <label> Categoria </label>
                <select className="form-control" type='select' name="Categoria" value={categoria} onChange={e => {setCategoria(e.target.value)}}>
                    <option value={'Limpieza'}>Limpieza</option>
                    <option value={'Gestor'}>Gestor</option>
                    <option value={'Mantenimiento'}>Mantenimiento</option>
                </select>
            </div>
        </div>
    
        <button className="raise"
        type="submit">
            Enviar</button>

    </form>
    </>
   )
}