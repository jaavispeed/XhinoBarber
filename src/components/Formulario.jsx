import { useState, useEffect } from "react";
import axios from "axios";
import "../css/Formulario.css";

export const Formulario = () => {

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [dateCita, setDateCita] = useState("");

  const handleNombreChange = (event) => setName(event.target.value);
  const handleApellidoChange = (event) => setLastName(event.target.value);
  const handleTelefonoChange = (event) => setPhone(event.target.value);
  const handleCorreoChange = (event) => setEmail(event.target.value);
  const handleFechaHoraChange = (event) => setDateCita(event.target.value);


const handleSubmit = async (event) => {
  event.preventDefault();

  const formData = {
    name,
    lastName,
    phone, // Convertir a número
    email,
    dateCita,
  };

  try {
    const response = await axios.post("http://localhost:3000/api/agendamiento", formData);
    console.log("Formulario enviado con éxito:", response.data);

    setName("");
    setLastName("");
    setPhone("");
    setEmail("");
    setDateCita("");
  } catch (error) {
    console.error("Error al enviar el formulario:", error);
  }
};

  return (
    <>
      <div className="centered">
        
        <h1>Formulario</h1>
        <div className="form-container">
          <form className="form" onSubmit={handleSubmit}>

          <div className="form-row">
            <div>
              <h4>Nombre:</h4>
              <input type="text" value={name} onChange={handleNombreChange}/>
            </div>
            <div>
              <h4>Apellido:</h4>
              <input type="text" value={lastName} onChange={handleApellidoChange}/>
            </div>

          </div>
            <h4>Telefono: </h4>
            <input type="number" value={phone} onChange={handleTelefonoChange}/>

            <h4>Correo: </h4>
            <input type="email" value={email} onChange={handleCorreoChange}/>



            <div className="datetime-container">
              <h4>Fecha y Hora:</h4>
              <input
                type="datetime-local"
                value={dateCita}
                onChange={handleFechaHoraChange}
                className="datetime-input"
                step="3600" // Esto limita la selección a horas exactas (cada 3600 segundos = 1 hora)
              />
            </div>
            <button className="button-form" type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </>

  );
};
