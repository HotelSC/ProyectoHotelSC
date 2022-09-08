import { useState } from "react"
 

export default function FormEmpleado(){
   const [nombre, setNombre] = useState('');
   const [apellidos, setApellidos] = useState('');
   const [edad, setEdad] = useState('');

   return(
    <form onSubmit={e => {e.preventDefault(); console.log('prueba')}}>
        <label>Nombre </label>
        <input 
        className="form-control"
        type='text' 
        name='Nombre' 
        value={nombre} 
        onChange={
            e =>setNombre(e.target.value)
            }/>
        <label>
            Apellidos
        </label>
        <input
        className="form-control"
        type='text'
        value={apellidos}
        name="Apellidos"
        onChange={
            e =>{setApellidos(e.target.value)
            }}/>
             <label>
            Edad
        </label>
        <input
        className="form-control"
        type='number'
        name="edad"
        value={edad}
        onChange={
            e =>setEdad(e.target.value)
            }/>


        <button 
        type="submit">
            Enviar</button>

    </form>
   )
}