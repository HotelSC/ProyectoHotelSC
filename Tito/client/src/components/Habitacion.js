import React, { useEffect, useState } from "react";
import "../App.css"
import Axios from 'axios'

export default function Habitacion(){
  const [datos, setDatos] = useState('');
  const [isCargando, setIsCargando] = useState(true);

  useEffect(()=>{
    fetch('http://localhost:3001/api/empleados/',{
      method: "GET",
      headers: {
        "access-control-allow-origin" : "*",
        "Content-type": "application/json; charset=UTF-8"
      }})
    .then((resp)=> resp.json())
    .then((data)=>{
      console.log(data);
      setDatos(data);
      setIsCargando(false)
    })
  },[])
  if(isCargando){
    return(
    
      <div>
        <h1>Cargando...</h1>
      </div>
    )
  }
  return(
    <div >
      <p>LISTO</p>
    </div>
  )
  
};