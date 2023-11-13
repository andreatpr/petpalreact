/* global flatpickr */
import React from 'react';
import { useRef, useEffect } from 'react';
import '../styles/anunciate.css';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/themes/airbnb.css';
import '../styles/anunciate.css';
import DefaultLayout from '../dlayout';

const Anunciate = () => {
    const dateInputRef = useRef(null);
  
    useEffect(() => {
      const dateInput = dateInputRef.current;
      flatpickr(dateInput, {
        enableTime: true,
        dateFormat: 'Y-m-d H:i',
        minDate: 'today',
        theme: 'airbnb',
      });
    }, []);

const handleEnviarSolicitudClick = () => {
    // Coloca aquí cualquier lógica adicional que necesites antes de mostrar la alerta
    alert('Su solicitud fue enviada');
    };
    
  return (
    <DefaultLayout>{
        <div className="Anunciate">
      <div className="anunciate-content">
        <div className="solicitar-info">
          <h2>Solicitar información</h2>
          <p>Para conocer nuestros servicios publicitarios, llena los siguientes campos y nos contactaremos inmediatamente contigo.</p>
          <div className="linea">
            <div className="input-container">
              <input type="text" placeholder="Nombre" />
            </div>
            <div className="input-container">
              <input type="number" placeholder="Teléfono" />
            </div>
          </div>
          <div className="linea">
            <div className="input-container">
              <input type="text" placeholder="Empresa" />
            </div>
            <div className="input-container">
              <input type="email" placeholder="Correo" />
            </div>
          </div>
          <div className="linea">
            <div className="input-container">
              <input list="pais" placeholder="Selecciona un país" />
              <datalist id="pais">
                <option value="Estados Unidos"></option>
                <option value="Perú"></option>
                <option value="México"></option>
                <option value="Argentina"></option>
              </datalist>
            </div>
            <div className="despuesd"><p>Después de:</p></div>
          </div>
          <div className="linea">
            <div className="input-container">
              <input list="Estados" placeholder="Selecciona un estado" />
              <datalist id="Estados">
                <option value="Lima"></option>
                <option value="Washington"></option>
                <option value="Ciudad de México"></option>
                <option value="Buenos Aires"></option>
              </datalist>
            </div>
            <div className="input-container">
               <input
                type="text"
                ref={dateInputRef}
                placeholder="Fecha y hora"
                className="flatpickr-input"
                />
            </div>
          </div>
          <p>Favor de contactarme por:</p>
        </div>
        <button className="enviar-solicitud" onClick={handleEnviarSolicitudClick}>Enviar Solicitud</button>
    </div></div>}
    </DefaultLayout>
  );
  
};

export default Anunciate;
