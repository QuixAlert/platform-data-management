import React from "react"
import { HashRouter as Router, Route, Routes } from "react-router-dom";
  
import NavBar from "./components/layout/NavBar/NavBar";
import Sidebar from "./components/layout/Sidebar/Sidebar";
import AdoptionPage from "./pages/AdoptionPage/AdoptionPage";
import AdoptionExpandablePage from "./pages/AdoptionExpandablePage/AdoptionExpandablePage";
import HomePage from "./pages/HomePage/HomePage";
import ConfigScreen from "./components/screens/ConfingScreen/configScreen";
import HelpScreen from "./components/screens/HelpScreen/helpScreen";
import ReportPage from "./pages/ReportPage/ReportPage"
import ReportExpandablePage from "./pages/ReportExpandablePage/ReportExapandablePage";

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
          <Route path="/adoption" element={<AdoptionPage/>} />
          <Route path="/adoption/expandable" element={<AdoptionExpandablePage/>} />
          <Route path="/config" element={<ConfigScreen/>} />
          <Route path="/help" element={<HelpScreen/>} />
          <Route path="/report" element={<ReportPage />}/>
          <Route path="/report/expandable" element={<ReportExpandablePage />}/>
        </Routes>
      </div>
   </Router>
  )
}

export default App
