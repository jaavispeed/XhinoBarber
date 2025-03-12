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

    const handleFechaChange = (event) => {
        const newDate = event.target.value;
        setSelectedDate((prevState) => ({
            ...prevState,
            date: newDate,
        }));
    };

    const handleHoraChange = (event) => {
        const newTime = event.target.value;
        setSelectedDate((prevState) => ({
            ...prevState,
            time: newTime,
        }));
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        const formData = {
            name,
            lastName,
            phone,
            email,
            dateCita: `${selectedDate.date}T${selectedDate.time}:00`, // Añadir ":00" para indicar que los minutos son 00

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
                                <div className="d-flex">
                                    <input
                                        type="date"
                                        id="fecha"
                                        className="form-control me-2"
                                        value={selectedDate.date}
                                        onChange={handleFechaChange}
                                        required
                                    />
                                    <select
                                        id="hora"
                                        className="form-control"
                                        value={selectedDate.time || ""}
                                        onChange={handleHoraChange}
                                        required
                                    >
                                        <option value="" disabled>Selecciona la hora</option>
                                        {/* Aquí puedes agregar las horas que desees */}
                                        <option value="09">09:00</option>
                                        <option value="10">10:00</option>
                                        <option value="11">11:00</option>
                                        <option value="12">12:00</option>
                                        <option value="13">13:00</option>
                                        <option value="14">14:00</option>
                                        <option value="15">15:00</option>
                                        <option value="16">16:00</option>
                                        <option value="17">17:00</option>
                                        <option value="18">18:00</option>
                                        <option value="19">19:00</option>
                                        <option value="20">20:00</option>
                                        <option value="21">21:00</option>
                                        <option value="22">22:00</option>
                                        <option value="23">23:00</option>
                                    </select>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Enviar</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};