import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./components/layout/NavBar/NavBar";
import Sidebar from "./components/layout/Sidebar/Sidebar";
import AdoptionPage from "./pages/AdoptionPage/AdoptionPage";
import HomePage from "./pages/HomePage/HomePage";

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

    </Routes>
   </div>
   </Router>
  )
}

export default App