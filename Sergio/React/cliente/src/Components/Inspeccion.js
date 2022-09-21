import React from 'react';
//import styled from 'styled-components';

import {Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter} from 'reactstrap';

const data2 = [
  {idTipoMat: 1, tipoMat: 'Fregonas', idMat: 145},
  {idTipoMat: 1, tipoMat: 'Fregonas', idMat: 146},
  {idTipoMat: 1, tipoMat: 'Fregonas', idMat: 147},
  {idTipoMat: 1, tipoMat: 'Fregonas', idMat: 148},
]

class Inspeccion extends React.Component{
  state={
      data2: data2,
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
  
    mostrarModalActualizar = (data2) => {
      this.setState({
        form: data2,
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
      this.setState({ modalInsertar: false});
    };

    editar = (data2) => {
      var contador = 0;
      var arreglo = this.state.data2;
      arreglo.map((registro) => {
        if (data2.idTipoMat == registro.idTipoMat) {
          arreglo[contador].tipoMat = data2.tipoMat;
          arreglo[contador].unidades = data2.unidades;
          arreglo[contador].cantidad = data2.cantidad;
          arreglo[contador].catMat = data2.catMat;
        }
        contador++;
      });
      this.setState({ data2: arreglo, modalActualizar: false });
    };
  
    eliminar = (data2) => {
      var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+ data2.idTipoMat);
      if (opcion == true) {
        var contador = 0;
        var arreglo = this.state.data2;
        arreglo.map((registro) => {
          if (data2.idTipoMat == registro.idTipoMat) {
            arreglo.splice(contador, 1);
          }
          contador++;
        });
        this.setState({ data2: arreglo, modalActualizar: false });
      }
    };
  
    insertar= ()=>{
      var valorNuevo= {...this.state.form};
      valorNuevo.idTipoMat=this.state.data2.length+1;
      var lista= this.state.data2;
      lista.push(valorNuevo);
      this.setState({ modalInsertar: false, data2: lista });
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
            <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Identificar material</Button>
            <br />
            <br />
            <Table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Tipo de Material</th>
                  <th>idMat</th>
                  <th>Acciones</th>
                </tr>
              </thead>
  
              <tbody>
                {this.state.data2.map((data2) => (
                  <tr key={data2.idTipoMat}>
                    <td>{data2.idTipoMat}</td>
                    <td>{data2.tipoMat}</td>
                    <td>{data2.idMat}</td>
                    <td>
                      <Button color="primary" onClick={() => this.mostrarModalActualizar(data2)}>Editar</Button>
                      {"  "}
                      <Button color="danger" onClick={()=> this.eliminar(data2)}>Eliminar</Button>
                      {"  "}
                      <Button color="secondary" onClick={() => this.mostrarModalInspeccionar(data2)}>Asignaciones</Button>
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
                  value={this.state.form.idTipoMat}
                />
              </FormGroup>

              <FormGroup>
                <label>
                Tipo de Material: 
                </label>
                <input
                  className="form-control"
                  name="tipoMat"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.form.tipoMat}
                />
              </FormGroup>
              
              <FormGroup>
                <label>
                 IdMat:
                </label>
              
                <input
                  className="form-control"
                  readOnly
                  type="text"
                  value={this.state.form.idTipoMat}
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
                  value={this.state.data2.length+1}
                />
              </FormGroup>
              
              <FormGroup>
              <label>
                Tipo de Material: 
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
                  ID Material: 
                </label>
                <input
                  className="form-control"
                  name="idMat"
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
  export default Inspeccion;