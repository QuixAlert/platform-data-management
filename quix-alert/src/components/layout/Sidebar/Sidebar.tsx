import React from "react";

import { useNavigate, useLocation  } from 'react-router-dom';

import { IoHome, IoPersonSharp } from "react-icons/io5";
import { MdOutlinePets } from "react-icons/md";
import { FaFileAlt } from "react-icons/fa";
import { GoAlertFill } from "react-icons/go";
import { FaGear } from "react-icons/fa6";
import { BsFillQuestionCircleFill } from "react-icons/bs";

import "./styles.css"

function Sidebar () {
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === "/home";
  const isAdoptionPage = location.pathname === "/adoption";
  const isUsersPage = location.pathname === "/user";
  const isConfigPage = location.pathname === '/config';
  const isHelpPage = location.pathname === '/help';
  const isReportPage = location.pathname === '/report';
  
  return (
    <>
      <div className="sidebar-container">
        <div className="sidebar-content-container">

          <a onClick={() => {navigate("/home")}}>
            <IoHome className={`sidebar-icon ${ isHomePage ? 'active' : '' }`} />
          </a>

          <a onClick={() => {navigate("/home")}}>
            <IoPersonSharp className={`sidebar-icon ${ isUsersPage ? 'active' : '' }`}/>
          </a>

          <a onClick={() => {navigate("/home")}}>
            <FaFileAlt className={`sidebar-icon`}/>
          </a>

          <a onClick={() => {navigate("/adoption")}}>
            <MdOutlinePets className={`sidebar-icon ${ isAdoptionPage ? 'active' : '' }`}/>
          </a>
          
          <a onClick={() => {navigate("/report")}}>
            <GoAlertFill className={`sidebar-icon ${ isReportPage ? 'active' : '' }`}/>
          </a>

          <a onClick={() => {navigate("/config")}}>
            <FaGear className={`sidebar-icon ${ isConfigPage ? 'active' : '' }`}/>
          </a>

          <a onClick={() => {navigate("/help")}}>
            <BsFillQuestionCircleFill className={`sidebar-icon ${ isHelpPage ? 'active' : '' }`}/>
          </a>
          
        </div>
      </div>
      <div className="sidebar-detail">
      </div>
    </>
  );
}

export default Sidebar;