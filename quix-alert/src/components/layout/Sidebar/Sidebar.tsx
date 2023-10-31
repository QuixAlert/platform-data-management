import React from "react";
import { useNavigate, useLocation  } from 'react-router-dom';

import home from "../../../assets/icons/home.svg";
import alert from "../../../assets/icons/alert.svg";
import gear from "../../../assets/icons/gear.svg";
import dog from "../../../assets/icons/dog.svg";
import question_mark from "../../../assets/icons/question_mark.svg";
import document from "../../../assets/icons/document.svg";
import person from "../../../assets/icons/person.svg";

import "./styles.css"

//Rotas

function Sidebar () {
  const navigate = useNavigate();
  const location = useLocation();

  const isConfigPage = location.pathname === '/config';
  const isHelpPage = location.pathname === '/help';

  
  
  return (
    <>
      <div className="sidebar-container">
        <div className="sidebar-content-container">
          <img src={home} className="sidebar-icon"/>
          <img src={person} className="sidebar-icon"/>
          <img src={document} className="sidebar-icon"/>
          <img src={dog} className="sidebar-icon"/>
          <img src={alert} className="sidebar-icon"/>
          <img src={gear} className={`sidebar-icon ${isConfigPage ? 'active' : ''}`}  onClick={ () => {navigate('/config')}} />
          <img src={question_mark} className={`sidebar-icon ${isHelpPage ? 'active' : ''}`}  onClick={ () => {navigate('/help')}}/>
        </div>
      </div>
      <div className="sidebar-detail">
      </div>
    </>
  );
}

export default Sidebar;