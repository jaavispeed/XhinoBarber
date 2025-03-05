import { Navigate, Route, Routes } from "react-router-dom";
import { LandingPage } from "../barber/pages/Home";
import { Navbar } from "../shared/components/Navbar";

export const AppRouter = () => {
  return (
    <>
    <Navbar />
    
    <Routes>
        <Route path="/home" element={<LandingPage />} />
        <Route path="/" element={<Navigate to="home" />} />
    </Routes>
    </>
  )
}
