import { createContext, useState } from "react";

export const DateContext = createContext();

export const DateProvider = ({ children }) => {
    const [selectedDate, setSelectedDate] = useState("");
    const [eventos, setEventos] = useState([]);

    const agregarEvento = (nuevoEvento) => {
        setEventos((prevEventos) => [...prevEventos, nuevoEvento]);
    };

    return (
        <DateContext.Provider value={{ selectedDate, setSelectedDate, eventos, agregarEvento }}>
            {children}
        </DateContext.Provider>
    );
};