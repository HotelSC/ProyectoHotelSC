import React, { useEffect, useState } from "react";
import UserProfile from './UserProfile';
import './App.css';



function App(){ 

    const [patata, setPatata] = useState('');

    useEffect(() => {
      fetch(`http://localhost:3001/api/empleados/${1}`)
        .then(data => data.json())
        .then(res => {setPatata(res);
            })
        .catch(error => {
         console.log(error)
        });
    }, []);
    return(
            <div className="container">
                <UserProfile userData={patata}/>
            </div>
        )
    }
    

export default App;