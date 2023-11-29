import React from "react";

import requester from "../../../assets/images/requester.jpeg";

import calendar from "../../../assets/icons/calendar.svg" 
import clock from "../../../assets/icons/clock.svg" 

import { useAuth } from "../../../pages/LoginPage/AuthProvider";
import { useQuery } from "react-query";
import { getFirebaseAppUserById } from "../../../api/firebaseUsers";

import "./styles.css";

function ReportInformationContainer(Props: ReportInformationContainer) {
  const {getTokens} = useAuth();

  const { data: userResponse, isLoading: isLoadingUser } = useQuery(
    ["user", Props.userId],
    () => getFirebaseAppUserById(getTokens(), Props.userId)
  )

  if (isLoadingUser) {
    return <div>Carregando...</div>
  }

  return(
    <div className="info person-information-container">
      <div className="requester-container">
        <img className="requester-photo" src={ userResponse.picturePath } alt="requester-photo" />
        <div className="requester-role-and-name">
          <p className="requester-role">Solicitante:</p>
          <p className="requester-name">{userResponse.name}</p>
        </div>
      </div>

      <div className="report-header-info">
        <h1 className="report-type">{Props.title}</h1>
        <div className="report-date-container">
          <p className="report-date-title">Data da Solicitação</p>
          <div className="report-date">
            <img className="report-icon" src={ calendar } alt="" />
            <p>{Props.incidentData}</p>
          </div>
          <div className="report-hour">
            <img  className="report-icon" src={ clock } alt="" />
            <p>{Props.incidentTime}</p>
          </div>
        </div>

        <div className="report-adress">
          <p><span>Endereço</span>{Props.incidentLocation}</p>
        </div>
      </div>

      <div className="report-body-container">
        <div className="report-description">
          <h3>Descrição:</h3>
          <div className="report-input-box">
            <p className="report-input">{Props.description}</p>
          </div>
        </div>

        <div className="report-possible-solution">
          <h3>Possível Solução</h3>
          <div className="report-input-box">
            <p className="report-input">{Props.possibleSolution}</p>
          </div>
        </div>

        <div className="report-extras-details"> 
          <h3>Detalhes Extras</h3>
          <div className="report-input-box">
            <p className="report-input">{Props.extras || "Mais alguns detalhes extras do ocorrido"}</p>
          </div>

        </div>

      </div>


    </div>
  );
}

export default ReportInformationContainer;