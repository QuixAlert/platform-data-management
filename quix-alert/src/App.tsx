import "./styles/GlobalStyles.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/layout/NavBar/NavBar";
import Sidebar from "./components/layout/Sidebar/Sidebar";
import ConfigScreen from "./components/screens/ConfingScreen/configScreen";
import HelpScreen from "./components/screens/HelpScreen/helpScreen";

function App() {
  return (
    <Router>
   <div>
    <NavBar/>
    <Sidebar/>
    <Routes>
      <Route path="/config" element={<ConfigScreen/>} />
      <Route path="/help" element={<HelpScreen/>} />

    </Routes>
   </div>
   </Router>
  )
}

export default App
