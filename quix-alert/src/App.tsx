import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./components/layout/NavBar/NavBar";
import Sidebar from "./components/layout/Sidebar/Sidebar";
import AdoptionPage from "./pages/AdoptionPage/AdoptionPage";
import HomePage from "./pages/HomePage/HomePage";
import ConfigScreen from "./components/screens/ConfingScreen/configScreen";
import HelpScreen from "./components/screens/HelpScreen/helpScreen";
import ReportPage from "./pages/ReportPage/ReportPage";
import AnimalRegistrationContainer from "./pages/AnimalRegistrationPage/AnimalRegistrationPage";

import "./styles/GlobalStyles.css";

function App() {
  return (
    <Router>
   <div>
    <NavBar/>
    <Sidebar/>
    <Routes>

    <Route path="/main_window" element={<HomePage/>} />
      <Route path="/home" element={<HomePage/>} />
      <Route path="/adoption" element={<AnimalRegistrationContainer/>} />
      <Route path="/config" element={<ConfigScreen/>} />
      <Route path="/help" element={<HelpScreen/>} />
      <Route path="/report" element={<ReportPage />}/>

    </Routes>
   </div>
   </Router>
  )
}

export default App
