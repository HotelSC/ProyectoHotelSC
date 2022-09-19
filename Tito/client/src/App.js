import React from "react";
import UserProfile from './UserProfile';
import './App.css';



class App extends React.Component{ 

    render(){
        return(
            <div className="container">
                <UserProfile/>
            </div>
        )
    }
    
}

export default App;