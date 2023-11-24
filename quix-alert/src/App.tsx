// App.js
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/layout/NavBar/NavBar';
import Sidebar from './components/layout/Sidebar/Sidebar';
import AdoptionPage from './pages/AdoptionPage/AdoptionPage'
import AdoptionExpandablePage from "./pages/AdoptionExpandablePage/AdoptionExpandablePage";
import HomePage from './pages/HomePage/HomePage';
import ConfigScreen from './components/screens/ConfingScreen/configScreen';
import HelpScreen from './components/screens/HelpScreen/helpScreen';
import ReportPage from './pages/ReportPage/ReportPage';
import './styles/GlobalStyles.css';
import {AuthProvider, useAuth} from "./pages/LoginPage/AuthProvider";

function AuthenticatedApp() {
  return (
      <div>
        <NavBar />
          <Sidebar />
            <div>
              <Routes>
                <Route path="/main_window" element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/adoption" element={<AdoptionPage />} />
                <Route path="/adoption/expandable" element={<AdoptionExpandablePage/>} />
                <Route path="/config" element={<ConfigScreen />} />
                <Route path="/help" element={<HelpScreen />} />
                <Route path="/report" element={<ReportPage />} />
              </Routes>
            </div>
          <NavBar/>
        <Sidebar/>
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
