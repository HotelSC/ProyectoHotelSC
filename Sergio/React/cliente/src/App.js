import React, {useEffect, useState} from 'react';
import Habitacion from './Components/Habitacion';
import Sidebar from './Components/Sidebar';
// import ModalP from './Components/Modal';
// import Inventario from './Components/Inventario';
// import Inspeccion from './Components/Inspeccion';
// import Asignaciones from './Components/Asignaciones';
import styled from 'styled-components';
import './App.css';

const App = () => {
  const [datosHab, setDatosHab] = useState(''); 
  const [isCargando, setIsCargando] = useState('');
    useEffect(()=>{
      fetch('http://localhost:3001/api/habitaciones',{
        method: "GET",
        headers: {
          "access-control-allow-origin": "*",
          "Content-type": "application/json; charset=UTF-8"
        }})
      .then((resp)=>resp.json())
      .then((data)=>{
        console.log(data);
        setDatosHab(data);
        setIsCargando(true)
      })
    },[])
    if(isCargando==false){
      return(<div><p>Cargando</p></div>)
    }
  
    return (
        <>
          <Sidebar/>
          <Habitacion objetoHabitacion = {datosHab}/>
        
        {/* <Sidebar objetoSidebar = {}/>
        <ContenedorBotones>
          <Boton onClick={() => cambiarEstadoModal1(!estadoModal1)}>Modal 1</Boton>
        </ContenedorBotones>
        <ModalP
          estado={estadoModal1}
          cambiarEstado={cambiarEstadoModal1}
          titulo={"¡Hola!"}
          mostrarHeader={true}
          mostrarOverlay={true}
          posicionModal={'center'}
          padding={'20px'}
        >
          <Contenido>
            <h1>Ventana Modal</h1>
              <p>Reutilizable y con opciones de personalización</p>
            <Boton onClick={() => cambiarEstadoModal1(!estadoModal1)}>Aceptar</Boton>
          </Contenido>
        </ModalP>
        <Inventario></Inventario>
        <Inspeccion></Inspeccion>
        <Asignaciones></Asignaciones> */}
      </>
    );
  };


export default App;


const ContenedorBotones = styled.div`
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Boton = styled.button`
  display: block;
  padding: 10px 30px;
  border-radius: 100px;
  color: #fff;
  border: none;
  background: #1766DC;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-weigth: 500;
  translation: .3s ease all;

  &:hover {
    background: #0066FF
  }
`;

const Contenido = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1{
    font-size: 42px;
    font-weigth: 700;
    margin-bottom: 10px;
  }

  p{
    font-size: 18px;
    margin-bottom: 20px;
  }

  img{
    width: 100%;
    vertical-align: top;
    border-radius: 3px;
  }
`;