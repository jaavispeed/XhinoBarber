import { useState } from "react";
import "../css/Formulario.css";

export const Formulario = () => {

  const [fechaHora, setFechaHora] = useState("");

  const handleFechaHoraChange = (event) => {
    setFechaHora(event.target.value);
  };

  return (
    <>
      <div className="centered">
        
        <h1>Formulario</h1>
        <div className="form-container">
          <form className="form">

          <div className="form-row">
            <div>
              <h4>Nombre:</h4>
              <input type="text"/>
            </div>
            <div>
              <h4>Apellido:</h4>
              <input type="text"/>
            </div>

          </div>
            <h4>Telefono: </h4>
            <input type="text"/>

            <h4>Correo: </h4>
            <input type="text"/>



            <div className="datetime-container">
              <h4>Fecha y Hora:</h4>
              <input
                type="datetime-local"
                value={fechaHora}
                onChange={handleFechaHoraChange}
                className="datetime-input"
                step="3600" // Esto limita la selección a horas exactas (cada 3600 segundos = 1 hora)
              />
            </div>

          </form>
        </div>
      </div>
    </>

  );
};
