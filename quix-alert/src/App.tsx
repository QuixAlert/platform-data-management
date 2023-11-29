// App.js
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import AdoptionExpandablePage from "./pages/AdoptionExpandablePage/AdoptionExpandablePage";

import NavBar from "./components/layout/NavBar/NavBar";
import Sidebar from "./components/layout/Sidebar/Sidebar";
import AdoptionPage from "./pages/AdoptionPage/AdoptionPage";
import AnimalRegistrationContainer from "./pages/AnimalRegistrationPage/AnimalRegistrationPage";

import HomePage from './pages/HomePage/HomePage';
import ConfigScreen from './components/screens/ConfingScreen/configScreen';
import HelpScreen from './components/screens/HelpScreen/helpScreen';
import ReportPage from './pages/ReportPage/ReportPage';
import ReportExpandablePage from "./pages/ReportExpandablePage/ReportExapandablePage";
import { useAuth} from "./pages/LoginPage/AuthProvider";
import LoginPage from "./pages/LoginPage/LoginPage";

import './styles/GlobalStyles.css';


function AuthenticatedApp() {
  return (
    <div>
      <NavBar />
      <Sidebar />
      <div>
        <Routes>
          <Route path="/main_window" element={<HomePage/>} />
          <Route path="/home" element={<HomePage/>} />
          <Route path="/adoption" element={<AdoptionPage/>} />
          <Route path="/adoption/expandable/:adoptionId" element={<AdoptionExpandablePage/>} />
          <Route path="/config" element={<ConfigScreen/>} />
          <Route path="/help" element={<HelpScreen/>} />
          <Route path="/report" element={<ReportPage />}/>
          <Route path="/report/expandable/:reportId" element={<ReportExpandablePage />}/>
          <Route path="/animal_registration" element={<AnimalRegistrationContainer />}/>
        </Routes>
      </div>
    </div>
  );
}
function App() {
  const { userLogged } = useAuth();

  return (
      <Router>
        {userLogged ? <AuthenticatedApp /> : <LoginPage />}
      </Router>
  );
}

export default App;