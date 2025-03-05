import { Navigate, Route, Routes } from "react-router-dom";
import { LandingPage } from "../barber/pages/Home";

export const AppRouter = () => {
  return (
    <>

    <Routes>
        <Route path="/home" element={<LandingPage />} />
        <Route path="/" element={<Navigate to="home" />} />
    </Routes>


    
    </>
  )
}
