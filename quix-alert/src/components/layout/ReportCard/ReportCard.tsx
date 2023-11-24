import React from "react";

import { useNavigate } from "react-router";

import ReportCard from "../../../interfaces/ReportCard";

import requesterPicture from "../../../assets/images/requester2.jpeg";
import responsiblePicture from "../../../assets/images/responsible2.jpeg";
import streetMap from "../../../assets/images/street_map.png"

import "./style.css"

function ReportCard(Props: ReportCard) {  
  const navigate = useNavigate();

  return (
    <div className="report-card" title="">
      <div className="card-left">
        <div className="card-person-container">
          <img className="card-person-photo" src={ requesterPicture } alt="person-photo" />
          <div className="card-person-role-and-name">
            <p className="card-person-role">Solicitante:</p>
            <p className="card-person-name">{ Props.requesterName }</p>
          </div>
        </div>


        <div className="card-report-container">
          
          <div className="card-report-content">
            <h3>Registro:</h3>
            <p>{ Props.registerNumber }</p>
          </div>

          <div className="card-report-content">
            <h3>Data da Solicitação:</h3>
            <p>{ Props.solicitationDate }</p>
          </div>


          <div className="card-report-content">
            <h3>Endereço da denúncia:</h3>
            <h5>{ Props.reportAdress }</h5>
          </div>

        </div>
        
        <img src={ streetMap } className="card-report-map" alt="street map" />

      </div>

      <div className="card-right">
        <div className="card-person-container">
          <img className="card-person-photo" src={ responsiblePicture } alt="person-photo" />
          <div className="card-person-role-and-name">
            <p className="card-person-role">Responsável:</p>
            <p className="card-person-name">{ Props.responsibleName }</p>
          </div>
        </div>
        <div className="card-status-info">
        <div className="card-info-line">
            <h2>Dias em aberto:</h2>
            <p>Está com { Props.openDays } dias</p>
          </div>
          <div className="card-info-line">
            <h2>Status:</h2>
            <p>{ Props.status }</p>
          </div>
          <div className="card-info-line">
            <h2>Conclusão Prevista:</h2>
            <p>{ Props.expectedDate }</p>
          </div>
        </div>
        <div className="card-see-more">
          <button
            className="card-see-more-btn"
            onClick={() => { navigate("/report/expandable") }}
          >
            Ver mais
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReportCard;