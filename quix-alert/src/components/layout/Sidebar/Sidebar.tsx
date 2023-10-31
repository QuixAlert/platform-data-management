import React from "react";
import { useNavigate, useLocation, Link  } from 'react-router-dom';

import home from "../../../assets/icons/home.svg";
import alert from "../../../assets/icons/alert.svg";
import gear from "../../../assets/icons/gear.svg";
import dog from "../../../assets/icons/dog.svg";
import question_mark from "../../../assets/icons/question_mark.svg";
import document from "../../../assets/icons/document.svg";
import person from "../../../assets/icons/person.svg";

import "./styles.css"

function Sidebar () {
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === "/home";
  const isAdoptionPage = location.pathname === "/adoption";
  const isUsersPage = location.pathname === "/user";

  return (
    <>
      <div className="sidebar-container">
        <div className="sidebar-content-container">
          <a onClick={() => {navigate("/home")}}>
            <img src={home} className={`sidebar-icon${isHomePage ? '-active' : ''}`}/>
          </a>

          <a onClick={() => {navigate("/home")}}>
            <img src={person} className="sidebar-icon"/>
          </a>

          <a onClick={() => {navigate("/home")}}>
            <img src={document} className="sidebar-icon"/>
          </a>

          <a onClick={() => {navigate("/adoption")}}>
            <img src={dog} className={`sidebar-icon${isAdoptionPage ? '-active' : ''}`}/>
          </a>
          
          <a onClick={() => {navigate("/home")}}>
            <img src={alert} className="sidebar-icon"/>
          </a>

          <a onClick={() => {navigate("/home")}}>
            <img src={gear} className="sidebar-icon"/>
          </a>

          <a onClick={() => {navigate("/home")}}>
            <img src={question_mark} className="sidebar-icon"/>
          </a>
        </div>
      </div>
      <div className="sidebar-detail">
      </div>
    </>
  );
}

export default Sidebar;