import React from 'react';
//import styled from 'styled-components';

import {Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter} from 'reactstrap';

const data3 = [
    {idMat: 145, tipoMat: 'Fregonas', nombreTrab: 'Anabel', fechaAsig: '2022/02/01', fechaRetorno: '2022/02/01', idTra: 14},
    {idMat: 146, tipoMat: 'Fregonas',nombreTrab: 'Juan Carlos', fechaAsig: '2022/02/01', fechaRetorno: '2022/02/06',idTra: 18},
    {idMat: 147, tipoMat: 'Taladro',nombreTrab: 'Manolo', fechaAsig: '2022/02/01', fechaRetorno: '2022/03/04',idTra: 15},
    {idMat: 148, tipoMat: 'Destornillador',nombreTrab: 'Maria', fechaAsig: '2022/02/01', fechaRetorno: '2022/05/08',idTra: 17},
  ]

class Asignacion extends React.Component{
  state={
      data3: data3,
      modalActualizar: false,
      modalInsertar: false,
      modalInspeccionar: false,
      modalAsignar: false,
      form: {
        idTipoMat: "",
        tipoMat: "",
        unidades: "",
        cantidad: "",
        catMat: "",
      },
    };
  
    mostrarModalActualizar = (data3) => {
      this.setState({
        form: data3,
        modalActualizar: true,
      });
    };
  
    cerrarModalActualizar = () => {
      this.setState({ modalActualizar: false });
    };
  
    mostrarModalInsertar = () => {
      this.setState({
        modalInsertar: true,
      });
    };
  
    cerrarModalInsertar = () => {
      this.setState({ modalInsertar: false });
    };

    editar = (data3) => {
      var contador = 0;
      var arreglo = this.state.data3;
      arreglo.map((registro) => {
        if (data3.idMat == registro.idMat) {
          arreglo[contador].tipoMat = data3.tipoMat;
          arreglo[contador].nombreTrab = data3.nombreTrab;
          arreglo[contador].fechaAsig = data3.fechaAsig;
          arreglo[contador].fechaRetorno = data3.fechaRetorno;
        }
        contador++;
      });
      this.setState({ data3: arreglo, modalActualizar: false });
    };
  
    eliminar = (data3) => {
      var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+ data3.idTipoMat);
      if (opcion == true) {
        var contador = 0;
        var arreglo = this.state.data3;
        arreglo.map((registro) => {
          if (data3.idTipoMat == registro.idTipoMat) {
            arreglo.splice(contador, 1);
          }
          contador++;
        });
        this.setState({ data3: arreglo, modalActualizar: false });
      }
    };
  
    insertar= ()=>{
      var valorNuevo= {...this.state.form};
      valorNuevo.idTipoMat=this.state.data3.length+1;
      var lista= this.state.data3;
      lista.push(valorNuevo);
      this.setState({ modalInsertar: false, data3: lista });
    }
  
    handleChange = (e) => {
      this.setState({
        form: {
          ...this.state.form,
          [e.target.name]: e.target.value,
        },
      });
    };
  
    render() {
      
      return (
        <>
          <Container>
          <br />
            <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Nueva Asignación</Button>
            <br />
            <br />
            <Table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Tipo de Material</th>
                  <th>Empleado</th>
                  <th>Fecha de Asignación</th>
                  <th>Fecha de Retorno</th>
                  <th>Acciones</th>
                </tr>
              </thead>
  
              <tbody>
                {this.state.data3.map((data3) => (
                  <tr key={data3.idTipoMat}>
                    <td>{data3.idMat}</td>
                    <td>{data3.tipoMat}</td>
                    <td>{data3.nombreTrab}</td>
                    <td>{data3.fechaAsig}</td>
                    <td>{data3.fechaRetorno}</td>
                    <td>
                      <Button color="primary" onClick={() => this.mostrarModalActualizar(data3)}>Editar</Button>
                      {"  "}
                      <Button color="danger" onClick={()=> this.eliminar(data3)}>Eliminar</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Container>
  
          <Modal isOpen={this.state.modalActualizar}>
            <ModalHeader>
             <div><h3>Editar Registro</h3></div>
            </ModalHeader>
  
            <ModalBody>
            <FormGroup>
                <label>
                  Id: 
                </label>
                
                <input
                  className="form-control"
                  readOnly
                  type="text"
                  value={this.state.data3.length+1}
                />
              </FormGroup>

              <FormGroup>
                <label>
                  Tipo de Material: 
                </label>
                <input
                  className="form-control"
                  name="catMat"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormGroup>
              
              <FormGroup>
              <label>
                Empleado: 
                </label>
                <input
                  className="form-control"
                  name="tipoMat"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormGroup>
              
              <FormGroup>
                <label>
                  Fecha de Asignación: 
                </label>
                <input
                  className="form-control"
                  name="fechaAsig"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormGroup>

              <FormGroup>
                <label>
                  Fecha de Retorno: 
                </label>
                <input
                  className="form-control"
                  name="fechaRetorno"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormGroup>
            </ModalBody>
  
            <ModalFooter>
              <Button
                color="primary"
                onClick={() => this.editar(this.state.form)}
              >
                Editar
              </Button>
              <Button
                color="danger"
                onClick={() => this.cerrarModalActualizar()}
              >
                Cancelar
              </Button>
            </ModalFooter>
          </Modal>
  
          <Modal isOpen={this.state.modalInsertar}>
            <ModalHeader>
              <div><h3>Insertar Material</h3></div>
            </ModalHeader>
  
            <ModalBody>
              <FormGroup>
                <label>
                  Id: 
                </label>
                
                <input
                  className="form-control"
                  readOnly
                  type="text"
                  value={this.state.data3.length+1}
                />
              </FormGroup>

              <FormGroup>
                <label>
                  Tipo de Material: 
                </label>
                <input
                  className="form-control"
                  name="catMat"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormGroup>
              
              <FormGroup>
              <label>
                Empleado: 
                </label>
                <input
                  className="form-control"
                  name="tipoMat"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormGroup>
              
              <FormGroup>
                <label>
                  Fecha de Asignación: 
                </label>
                <input
                  className="form-control"
                  name="fechaAsig"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormGroup>

              <FormGroup>
                <label>
                  Fecha de Retorno: 
                </label>
                <input
                  className="form-control"
                  name="fechaRetorno"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormGroup>
            </ModalBody>
  
            <ModalFooter>
              <Button
                color="primary"
                onClick={() => this.insertar()}
              >
                Insertar
              </Button>
              <Button
                className="btn btn-danger"
                onClick={() => this.cerrarModalInsertar()}
              >
                Cancelar
              </Button>
            </ModalFooter>
          </Modal>
        </>
      );
    };
  }
  export default Asignacion;