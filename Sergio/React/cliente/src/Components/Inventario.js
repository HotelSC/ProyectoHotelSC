import React from 'react';
//import styled from 'styled-components';

import {Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter} from 'reactstrap';

const data = [
  {idTipoMat: 1, tipoMat: 'Fregonas' ,unidades: 'Unidades', cantidad: 10, catMat: 'Limpieza'},
  {idTipoMat: 2, tipoMat: 'Fregonas' ,unidades: 'Unidades', cantidad: 5, catMat: 'Mantenimiento'},
  {idTipoMat: 3, tipoMat: 'Sábanas' ,unidades: 'Unidades', cantidad: 100, catMat: 'Limpieza'},
  {idTipoMat: 4, tipoMat: 'Tornillos' ,unidades: 'Cajas', cantidad: 10, catMat: 'Mantenimiento'},
  {idTipoMat: 5, tipoMat: 'Cinta de balizar' ,unidades: 'Metros', cantidad: 300, catMat: 'Mantenimiento'},
  {idTipoMat: 6, tipoMat: 'Bombillas' ,unidades: 'Unidades', cantidad: 50, catMat: 'Mantenimiento'},
];

class Inventario extends React.Component{
  state={
      data: data,
      modalActualizar: false,
      modalInsertar: false,
      form: {
        idTipoMat: "",
        tipoMat: "",
        unidades: "",
        cantidad: "",
        catMat: "",
      },
    };
  
    mostrarModalActualizar = (data) => {
      this.setState({
        form: data,
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
  
    editar = (data) => {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (data.idTipoMat == registro.idTipoMat) {
          arreglo[contador].tipoMat = data.tipoMat;
          arreglo[contador].unidades = data.unidades;
          arreglo[contador].cantidad = data.cantidad;
          arreglo[contador].catMat = data.catMat;
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    };
  
    eliminar = (data) => {
      var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+data.id);
      if (opcion == true) {
        var contador = 0;
        var arreglo = this.state.data;
        arreglo.map((registro) => {
          if (data.idTipoMat == registro.idTipoMat) {
            arreglo.splice(contador, 1);
          }
          contador++;
        });
        this.setState({ data: arreglo, modalActualizar: false });
      }
    };
  
    insertar= ()=>{
      var valorNuevo= {...this.state.form};
      valorNuevo.idTipoMat=this.state.data.length+1;
      var lista= this.state.data;
      lista.push(valorNuevo);
      this.setState({ modalInsertar: false, data: lista });
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
            <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Insertar nuevo material</Button>
            <br />
            <br />
            <Table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Tipo de Material</th>
                  <th>Unidades</th>
                  <th>Cantidad</th>
                  <th>Categoria de Material</th>
                  <th>Acciones</th>
                </tr>
              </thead>
  
              <tbody>
                {this.state.data.map((data) => (
                  <tr key={data.idTipoMat}>
                    <td>{data.idTipoMat}</td>
                    <td>{data.tipoMat}</td>
                    <td>{data.unidades}</td>
                    <td>{data.cantidad}</td>
                    <td>{data.catMat}</td>
                    <td>
                      <Button color="primary" onClick={() => this.mostrarModalActualizar(data)}>Editar</Button>
                      {" "}
                      <Button color="danger" onClick={()=> this.eliminar(data)}>Eliminar</Button>
                      {" "}
                      <Button color="secondary">Inspeccionar</Button>
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
                Unidades: 
                </label>
                <input
                  className="form-control"
                  name="unidades"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.form.unidades}
                />
              </FormGroup>

              <FormGroup>
                <label>
                Cantidad: 
                </label>
                <input
                  className="form-control"
                  name="cantidad"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.form.cantidad}
                />
              </FormGroup>

              <FormGroup>
                <label>
                Categoria de Material: 
                </label>
                <input
                  className="form-control"
                  name="catMat"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.form.catMat}
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
                  value={this.state.data.length+1}
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
                  Unidades: 
                </label>
                <input
                  className="form-control"
                  name="unidades"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormGroup>

              <FormGroup>
                <label>
                  Cantidad: 
                </label>
                <input
                  className="form-control"
                  name="cantidad"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormGroup>

              <FormGroup>
                <label>
                  Categoria de Material: 
                </label>
                <input
                  className="form-control"
                  name="catMat"
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
  export default Inventario;