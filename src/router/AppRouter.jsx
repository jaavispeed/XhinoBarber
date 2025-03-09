import { Navigate, Route, Routes } from "react-router-dom";
import { LandingPage } from "../components/Home";
import { Navbar } from "../components/Navbar";

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
