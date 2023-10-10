import "./styles/GlobalStyles.css";
import React from "react"
import NavBar from "./components/layout/NavBar/NavBar";
import Sidebar from "./components/layout/Sidebar/Sidebar";

function App() {
  return (
   <div>
    <NavBar/>
    <Sidebar/>
   </div>
  )
}

export default App