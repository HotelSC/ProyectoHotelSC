import React, { useEffect, useState } from "react";

export default function Habitacion(){
  const [datos, setDatos] = useState('');
  const [isCargando, setIsCargando] = useState(true);

  useEffect(()=>{
    fetch('http://localhost:3001/api/empleados/')
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
      <h1>USUARIOS</h1>
        <table>
            
        </table>
    </div>
  )
  
};