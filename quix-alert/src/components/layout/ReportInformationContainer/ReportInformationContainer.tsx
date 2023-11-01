import React from "react";

import requester from "../../../assets/images/requester.jpeg";

import calendar from "../../../assets/icons/calendar.svg" 
import clock from "../../../assets/icons/clock.svg" 
 
import "./styles.css";

function ReportInformationContainer() {
  return(
    <div className="info person-information-container">
      <div className="requester-container">
        <img className="requester-photo" src={ requester } alt="requester-photo" />
        <div className="requester-role-and-name">
          <p className="requester-role">Solicitante:</p>
          <p className="requester-name">Thiago Maia</p>
        </div>
      </div>

      <div className="report-header-info">
        <h1 className="report-type">Lixo Descartado Incorretamente</h1>
        <div className="report-date-container">
          <p className="report-date-title">Data da Solicitação</p>
          <div className="report-date">
            <img className="report-icon" src={ calendar } alt="" />
            <p>23/06/2023</p>
          </div>
          <div className="report-hour">
            <img  className="report-icon" src={ clock } alt="" />
            <p>19h25</p>
          </div>
        </div>

        <div className="report-adress">
          <p><span>Endereço</span> Rua José Viana de Sousa - 333</p>
        </div>
      </div>

      <div className="report-body-container">
        <div className="report-description">
          <h3>Descrição:</h3>
          <div className="report-input-box">
            <p className="report-input">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui id eveniet voluptate perferendis in cumque accusamus exercitationem necessitatibus! Tempora consectetur optio, ex voluptatibus rerum beatae qui exercitationem reiciendis iure rem!</p>
          </div>
        </div>

        <div className="report-possible-solution">
          <h3>Possível Solução</h3>
          <div className="report-input-box">
            <p className="report-input">Lorem Ipsum is simply esetting industry. Lorem Ipsum has been. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste animi, ad blanditiis voluptas commodi pariatur provident nihil minus expedita libero unde mollitia, nisi nesciunt totam molestias cumque delectus ipsam ea!
            Voluptas vitae totam consequatur excepturi.</p>
          </div>
        </div>

        <div className="report-extras-details"> 
          <h3>Detalhes Extras</h3>
          <div className="report-input-box">
            <p className="report-input">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been. t of the printing and typesetting industry. Lorem Ipsum has been</p>
          </div>

        </div>

      </div>


    </div>
  );
}

export default ReportInformationContainer;