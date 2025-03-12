import React, { useState, useEffect, useContext } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import axios from "axios";
import { DateContext } from "../context/DateContext";
import "../css/Calendario.css";

export const Calendario = () => {
    const { setSelectedDate } = useContext(DateContext);
    const [eventos, setEventos] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/api/agendamiento")
            .then(response => {
                const eventos = response.data;

                const eventosFormateados = eventos.map(evento => ({
                    title: evento.title,
                    start: evento.start,
                    stateCita: evento.stateCita,
                    className: evento.stateCita === "Confirmado" 
                        ? "evento-confirmado" 
                        : evento.stateCita === "Pendiente"
                        ? "evento-pendiente" 
                        : "",

                }));

                console.log("Eventos formateados para FullCalendar:", eventosFormateados); 
                setEventos(eventosFormateados);
            })
            .catch(error => {
                console.error("Error al cargar eventos", error);
            });
    }, []);

    const handleDateSelect = async (selectInfo) => {
        const selectedDate = selectInfo.startStr; 
        setSelectedDate(selectedDate);
    };

    return (
        <div className="Calendario-container">
            <FullCalendar className="Calendario"
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="timeGridWeek"
                selectable={false}
                events={eventos}
                select={handleDateSelect}
                timeZone="UTC-3"
                locale="es"
                slotMinTime="09:00:00"
                slotMaxTime="24:00:00"   
                slotDuration="00:30:00" 
                allDaySlot={false}
                dayHeaderFormat={{
                    weekday: 'long', 
                    day: 'numeric',  
                }}
                titleFormat={{ month: 'long', year: 'numeric' }} 
                headerToolbar={{
                    left: "", 
                    center: "title", // Mantiene solo el título del calendario
                    right: "",
                }}
                eventTimeFormat={{
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true,
                }}
                aspectRatio={1.5} // Esto ajusta la proporción del calendario, ideal para hacer que sea más responsivo
                slotLabelFormat={{
                    hour: 'numeric',
                    minute: '2-digit',
                    hour12: true,
                }}

            />

        </div>
    );
};

export default Calendario;