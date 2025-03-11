import React, { useState, useContext } from "react";
import axios from "axios";
import "../css/Formulario.css";
import { Spinner } from "../components/Spinner";
import { DateContext } from "../context/DateContext";

export const Formulario = () => {
    const { selectedDate, setSelectedDate } = useContext(DateContext);
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleNombreChange = (event) => setName(event.target.value);
    const handleApellidoChange = (event) => setLastName(event.target.value);
    const handleTelefonoChange = (event) => setPhone(event.target.value);
    const handleCorreoChange = (event) => setEmail(event.target.value);
    const handleFechaHoraChange = (event) => setSelectedDate(event.target.value);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        const formData = {
            name,
            lastName,
            phone,
            email,
            dateCita: selectedDate, 
        };

        try {
            const response = await axios.post("http://localhost:3000/api/agendamiento", formData);
            console.log("Formulario enviado con éxito:", response.data);

            setName("");
            setLastName("");
            setPhone("");
            setEmail("");
            setSelectedDate("");

            window.location.reload(); 
        } catch (error) {
            console.error("Error al enviar el formulario:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {isLoading && <Spinner />}

            {!isLoading && (
                <div className="container">
                    <h2 className="text-center">Formulario de Contacto</h2>
                    <div className="form-container">
                        <form className="form" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="nombre" className="form-label">Nombre</label>
                                    <input type="text" id="nombre" className="form-control" value={name} onChange={handleNombreChange} required />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label htmlFor="apellido" className="form-label">Apellido</label>
                                    <input type="text" id="apellido" className="form-control" value={lastName} onChange={handleApellidoChange} required />
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="telefono" className="form-label">Teléfono</label>
                                <input type="tel" id="telefono" className="form-control" value={phone} onChange={handleTelefonoChange} required />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="correo" className="form-label">Correo</label>
                                <input type="email" id="correo" className="form-control" value={email} onChange={handleCorreoChange} required />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="fechaHora" className="form-label">Fecha y Hora</label>
                                <input
                                    type="datetime-local"
                                    id="fechaHora"
                                    className="form-control"
                                    value={selectedDate}
                                    onChange={handleFechaHoraChange}
                                    required
                                />
                            </div>

                            <button type="submit" className="btn btn-primary w-100">Enviar</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};