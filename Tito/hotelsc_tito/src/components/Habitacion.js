import React from "react";
import "../App.css"

class Habitacion extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      limpieza : null,
      ocupado: null,
    }
  }
  render(){
    return(
      <div className="card">
        <img className="card-img-top " src={"https://picsum.photos/100"} />
        <div className="card-body">
          <h4 className="card-title">Habitacion {this.props.numHab}</h4>
        </div>
      </div>
    )
  }
  
}
export default Habitacion;