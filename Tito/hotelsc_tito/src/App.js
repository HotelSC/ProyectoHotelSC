import React from "react";
import Habitacion from "./components/Habitacion";
import './App.css';
import datos from './datos/datos.json';
import CreateUserForm from './components/CreateUserForm';



class App extends React.Component{ 

    render(){
        const habitaciones = datos.map((habitacion, id) => {
            return (
                <Habitacion numHab={habitacion.numero} key={id} limpieza={habitacion.limpieza} ocupacion={habitacion.limpieza} />
            )
        })
        return(
            <div className="container">

                
                <h1 className="mx-auto pageHeader"> Hotel SC </h1>
                <div className="container-body row">
                <CreateUserForm />
                </div>
            </div>
        )
    }
    
}

export default App;