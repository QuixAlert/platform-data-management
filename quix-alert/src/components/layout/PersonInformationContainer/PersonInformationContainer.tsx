import React from "react";

import requester from "../../../assets/images/requester.jpeg";

import calendar from "../../../assets/icons/calendar.svg" 
import clock from "../../../assets/icons/clock.svg" 

import { getFirebaseAppUserById } from "../../../api/firebaseUsers";

import { useQuery } from "react-query";

import RequesterContainer from "../RequesterContainer/RequesterContainer";

import {useAuth} from "../../../pages/LoginPage/AuthProvider";

import "./styles.css";

function PersonInformationContainer(Props: PersonalInformationContainer) {
  const { getTokens } = useAuth();

  return(
    <div className="info person-information-container">
      <RequesterContainer 
        requesterName={Props.personResponsible}
        requesterPicturePath=""
        userId={Props.userId}
      />
      {/* <div className="requester-container">
        <img className="requester-photo" src={ requester } alt="requester-photo" />
        <div className="requester-role-and-name">
          <p className="requester-role">Solicitante:</p>
          <p className="requester-name">{Props.personResponsible}</p>
        </div>
      </div> */}

      <div className="request-header-info">
        <h1 className="request-type">Solicitação de Adoção</h1>
        <div className="request-date-container">
          <p className="request-date-title">Data da Solicitação</p>
          <div className="request-date">
            <img className="request-icon" src={ calendar } alt="" />
            <p>{Props.solicitationDate || "29/11/2023"}</p>
          </div>
          <div className="request-hour">
            <img  className="request-icon" src={ clock } alt="" />
            <p>{Props.requestedHour || "09h25"}</p>
          </div>
        </div>

        <div className="request-adress">
          <p><span>Endereço</span> {Props.addressResponsible} </p>
        </div>
      </div>

      <div className="request-body-container">
        <div className="request-where-lives">
          <h3>Onde mora:</h3>
          <div className="request-input-box">
            <p className="request-input">{Props.houseDescription}</p>
          </div>
        </div>

        <div className="request-other-animals">
          <h3>Possui outros animais?</h3>
          <div className="request-input-box">
            <p className="request-input">{Props.otherAnimals || "Não possui"}</p>
          </div>
        </div>

        <div className="request-motivation"> 
          <h3>Motivação para adoção:</h3>
          <div className="request-input-box">
            <p className="request-input">{Props.adoptionMotivation || "Gosto muito de animais, sou apaixonado por cuidar de pets!"}</p>
          </div>

        </div>
        <div className="request-details">
          <div className="montlhy-income">
            <h3>Renda Mensal</h3>
            <div className="request-input-box">
              <p>R$ {Props.monthlyIncome || "3500"}</p>
            </div>
          </div>
          <div className="personal-visit">
            <h3>Agenda Visita</h3>
            <div>
              <div className="visit-date">
                <div className="request-input-box">
                  <img className="request-icon" src={ calendar } alt="" />
                  <p>{Props.visitDate || "22/07/2023"}</p>
                </div>
              </div>
              <div className="visit-hour">
                <div className="request-input-box">
                  <img className="request-icon" src={ clock } alt="" />
                  <p>{Props.visitHour || "14h10"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>


    </div>
  );
}

export default PersonInformationContainer;