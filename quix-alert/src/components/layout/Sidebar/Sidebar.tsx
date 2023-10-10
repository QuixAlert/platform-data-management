import React from "react";

import home from "../../../assets/icons/home.svg";
import alert from "../../../assets/icons/alert.svg";
import gear from "../../../assets/icons/gear.svg";
import dog from "../../../assets/icons/dog.svg";
import question_mark from "../../../assets/icons/question_mark.svg";
import document from "../../../assets/icons/document.svg";
import person from "../../../assets/icons/person.svg";

import "./styles.css"

function Sidebar () {
  return (
    <>
      <div className="sidebar-container">
        <div className="sidebar-content-container">
          <img src={home} className="sidebar-icon"/>
          <img src={person} className="sidebar-icon"/>
          <img src={document} className="sidebar-icon"/>
          <img src={dog} className="sidebar-icon"/>
          <img src={alert} className="sidebar-icon"/>
          <img src={gear} className="sidebar-icon"/>
          <img src={question_mark} className="sidebar-icon"/>
        </div>
      </div>
      <div className="sidebar-detail">
      </div>
    </>
  );
}

export default Sidebar;