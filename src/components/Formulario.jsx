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
    const [errors, setErrors] = useState({});

    const handleBlur = (field) => {
        validateField(field);
    };

    const validateField = (field) => {
        let newErrors = { ...errors };

        switch (field) {
            case 'name':
                if (!/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/.test(name)) {
                    newErrors.name = "El nombre es obligatorio.";
                } else {
                    delete newErrors.name;
                }
                break;
            case 'lastName':
                if (!/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/.test(lastName)) {
                    newErrors.lastName = "El apellido es obligatorio.";
                } else {
                    delete newErrors.lastName;
                }
                break;
            case 'phone':
                if (!/^\d{9}$/.test(phone)) {
                    newErrors.phone = "El teléfono debe contener 9 dígitos.";
                } else {
                    delete newErrors.phone;
                }
                break;
            case 'email':
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                    newErrors.email = "El correo electrónico no es válido.";
                } else {
                    delete newErrors.email;
                }
                break;
            case 'date':
                if (selectedDate.date) {
                    const today = new Date().toISOString().split("T")[0];
                    if (selectedDate.date < today) {
                        newErrors.date = "La fecha no puede ser anterior a hoy.";
                    } else {
                        delete newErrors.date;
                    }
                } else {
                    newErrors.date = "Selecciona una fecha.";
                }
                break;
            case 'time':
                if (!selectedDate.time) {
                    newErrors.time = "Selecciona una hora.";
                } else {
                    delete newErrors.time;
                }
                break;
            default:
                break;
        }

        setErrors(newErrors);
    };

    const validate = () => {
        let newErrors = {};

        // Validar nombre
        if (!/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/.test(name)) {
            newErrors.name = "El nombre solo puede contener letras y espacios.";
        }

        // Validar apellido
        if (!/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/.test(lastName)) {
            newErrors.lastName = "El apellido solo puede contener letras y espacios.";
        }

        // Validar teléfono
        if (!/^\d{9}$/.test(phone)) {
            newErrors.phone = "El teléfono debe contener 9 dígitos.";
        }

        // Validar correo electrónico
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = "El correo electrónico no es válido.";
        }

        // Validar fecha
        if (selectedDate.date) {
            const today = new Date();
            today.setHours(0, 0, 0, 0); // Resetear la hora de hoy a medianoche para comparación de fechas

            const [year, month, day] = selectedDate.date.split("-").map(Number);
            const selectedDateObj = new Date(year, month - 1, day); // Crear la fecha seleccionada correctamente

            if (selectedDateObj.getTime() < today.getTime()) {
                newErrors.date = "La fecha no puede ser anterior a hoy.";
            }

            // Validar la hora solo si la fecha es hoy
            if (selectedDateObj.getTime() === today.getTime()) {
                if (!selectedDate.time) {
                    newErrors.time = "Selecciona una hora.";
                } else {
                    const now = new Date();
                    const selectedHour = parseInt(selectedDate.time, 10);
                    const selectedTime = new Date();
                    selectedTime.setHours(selectedHour, 0, 0, 0); // Establecer la hora seleccionada

                    if (selectedTime.getTime() < now.getTime()) {
                        newErrors.time = "La hora seleccionada no puede ser en el pasado.";
                    }
                }
            }
        } else {
            newErrors.date = "Selecciona una fecha.";
        }

        if (!selectedDate.time) {
            newErrors.time = "Selecciona una hora.";
        }


        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!validate()) return;

        setIsLoading(true);

        const formData = {
            name,
            lastName,
            phone,
            email,
            dateCita: `${selectedDate.date}T${selectedDate.time}:00`,
        };

        try {
            const response = await axios.post("https://backend-xhino-barber.vercel.app/api/agendamiento", formData);
            console.log("Formulario enviado con éxito:", response.data);
            alert("Gracias por agendar tu cita, por favor revisa tu correo para confirmar tu asistencia.");


            setName("");
            setLastName("");
            setPhone("");
            setEmail("");
            setSelectedDate({ date: "", time: "" });

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
                    <h2 className="text-center" style={{ color: "#00BFFF" }}>Agenda tu hora aquí</h2>
                    <div className="form-container">
                        <form className="form" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="nombre" className="form-label">Nombre</label>
                                    <input
                                        type="text"
                                        id="nombre"
                                        className="form-control"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        onBlur={() => handleBlur('name')}
                                        required
                                    />
                                    {errors.name && <p className="text-danger">{errors.name}</p>}
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label htmlFor="apellido" className="form-label">Apellido</label>
                                    <input
                                        type="text"
                                        id="apellido"
                                        className="form-control"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        onBlur={() => handleBlur('lastName')}
                                        required
                                    />
                                    {errors.lastName && <p className="text-danger">{errors.lastName}</p>}
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="telefono" className="form-label">Teléfono</label>
                                <input
                                    type="tel"
                                    id="telefono"
                                    className="form-control"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    onBlur={() => handleBlur('phone')}
                                    required
                                />
                                {errors.phone && <p className="text-danger">{errors.phone}</p>}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="correo" className="form-label">Correo</label>
                                <input
                                    type="email"
                                    id="correo"
                                    className="form-control"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    onBlur={() => handleBlur('email')}
                                    required
                                />
                                {errors.email && <p className="text-danger">{errors.email}</p>}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="fechaHora" className="form-label">Fecha y Hora</label>
                                <div className="d-flex">
                                    <div className="me-2 w-50">
                                        <input
                                            type="date"
                                            id="fecha"
                                            className="form-control"
                                            value={selectedDate.date}
                                            onChange={(e) => setSelectedDate({ ...selectedDate, date: e.target.value })}
                                            onBlur={() => handleBlur('date')}
                                            required
                                        />
                                        {errors.date && <p className="text-danger mt-1">{errors.date}</p>}
                                    </div>

                                    <div className="w-50">
                                        <select
                                            id="hora"
                                            className="form-control"
                                            value={selectedDate.time || ""}
                                            onChange={(e) => setSelectedDate({ ...selectedDate, time: e.target.value })}
                                            onBlur={() => handleBlur('time')}
                                            required
                                        >
                                            <option value="" disabled>Selecciona la hora</option>
                                            {Array.from({ length: 15 }, (_, i) => i + 9).map(hour => (
                                                <option key={hour} value={hour}>{hour}:00</option>
                                            ))}
                                        </select>
                                        {errors.time && <p className="text-danger mt-1">{errors.time}</p>}
                                    </div>
                                </div>
                            </div>


                            <button
                                type="submit"
                                className="btn btn-primary w-100"
                                disabled={Object.keys(errors).length > 0 || isLoading}
                            >
                                Enviar
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};