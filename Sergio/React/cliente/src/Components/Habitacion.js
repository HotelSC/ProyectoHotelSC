import React from 'react';

class Habitacion extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      ocupacion: this.props.ocupacion,
      limpieza: this.props.limpieza,
      mantenimiento: this.props.ocupacion,
    };
  }
  render() {
    return (
      <div> 
        <h1>Habitación {this.props.numero}</h1>
        <div>Datos
          <ul>
            <li>{this.state.ocupacion}</li>
            <li>{this.state.limpieza}</li>
            <li>{this.state.mantenimiento}</li>
          </ul>
        </div>
      </div>
    );
  };
}

export default Habitacion;
