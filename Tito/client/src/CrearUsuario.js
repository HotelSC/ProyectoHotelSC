import React from "react";
import './App.css';
import CreateUserForm from './components/CreateUserForm';




class CrearUsuario extends React.Component{ 

    render(){
        
        return(
            <div className="container">
              <CreateUserForm/>      
            </div>
        )
    }
    
}

export default CrearUsuario;