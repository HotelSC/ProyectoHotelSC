import React from 'react';
import styled from 'styled-components';

const ModalP = ({children, estado, cambiarEstado, titulo = 'Alerta', mostrarHeader, mostrarOverlay, posicionModal, padding}) => {
    return (
      <>
        {estado &&
          <Overlay mostrarOverlay={mostrarOverlay} posicionModal={posicionModal}>
            <ContenedorModal padding={padding}>
              {mostrarHeader &&
                <EncabezadoModal>
                  <h3>{titulo}</h3>
                </EncabezadoModal>
              }
              
              <BotonCerrar onClick={() => cambiarEstado(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>
                </BotonCerrar>
            </ContenedorModal>
          </Overlay>
        } 
      </>
    );
  }

export default ModalP;

const Overlay = styled.div`
  width: 100%;
  heigth: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: ${props => props.mostrarOverlay ? 'rgba(0,0,0,.5)' : 'rgba(0,0,0,0'};
  padding: 40px;
  display: flex;
  align-items: ${props => props.posicionModal ? props.posicionModal : 'center'};
  justify-content: center;
`;

const ContenedorModal = styled.div`
  width: 500px;
  min-height: 100px;
  background: #fff;
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100,100,111,0.2) 8px 7px 29px 0px;
  padding: ${props => props.padding ? props.padding : '20px'};
`;

const EncabezadoModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #E8E8E8;

  h3 {
    font-weigth:500;
    font-size: 16px;
    color: #1766DC;
  }
`;

const BotonCerrar = styled.button`
  position: absolute;
  float: rigth;
  top: 15px;
  right: 20px;
  width: 30px;
  heigth: 30px;
  border: none;
  background: none;
  cursor: pointer;
  transition: .3s ease all;
  border-radius: 5px;
  color: #1766DC;

  &:hover {
    background: #f2f2f2;
  }

  svg {
    width: 100%;
    heigth: 100%;
  }
`;