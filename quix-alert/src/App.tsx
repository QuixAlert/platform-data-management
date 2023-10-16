import "./styles/GlobalStyles.css";
import React from "react"
import NavBar from "./components/layout/NavBar/NavBar";
import Sidebar from "./components/layout/Sidebar/Sidebar";

import AdoptionPage from "./pages/AdoptionPage";

function App() {
  return (
    <>
      <NavBar/>
      <Sidebar/>
      <AdoptionPage/>
    </>
  )
}

export default App