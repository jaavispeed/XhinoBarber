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
                selectable={true}
                events={eventos}
                select={handleDateSelect}
                timeZone="UTC-3"
                locale="es"
                slotMinTime="10:00:00"
                slotMaxTime="22:00:00"   /* Ajustado para asegurar que la última franja horaria no se estire */
                slotDuration="01:00:00"   /* Duración de las franjas horarias de 30 minutos */
                allDaySlot={false}
                
            />

        </div>
    );
};

export default Calendario;