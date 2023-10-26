import React from "react";

import responsible from "../../../assets/images/responsible.jpeg";
import calendar from "../../../assets/icons/calendar.svg";
import clock from "../../../assets/icons/clock.svg";
import x from "../../../assets/icons/x.svg"
import v from "../../../assets/icons/v.svg"

import "./styles.css";

function ApprovalContainer() {
  return(
    <div className="info approval-container">
      <div className="responsible-container">
        <img className="responsible-photo" src={ responsible } alt="requester-photo" />
        <div className="responsible-role-and-name">
          <p className="responsible-role">Responsável:</p>
          <p className="responsible-name">Samuel Honorato</p>
        </div>
      </div>

      <div className="responsible-header-info">
        <div className="responsible-date-container">
          <p className="responsible-date-title">Data da Solicitação</p>
          <div className="responsible-date">
            <img className="responsible-icon" src={ calendar } alt="" />
            <p>23/06/2023</p>
          </div>
          <div className="responsible-hour">
            <img className="responsible-icon" src={ clock } alt="" />
            <p>19h25</p>
          </div>
        </div>
      </div>

      <h2 className="request-infos-head">
        Informações da Solicitação
      </h2>
      <div className="request-infos-grid">
        <div className="request-infos">
          <h3>Número de registro:</h3>
          <p>343212-78</p>
        </div>
        <div className="request-infos">
          <h3>Status:</h3>            
          <p>Em Análise</p>
        </div>
        <div className="request-infos">
          <h3>Dias em aberto:</h3>            
          <p>Está com 20 dias</p>
        </div>
        <div className="request-infos">
          <h3>Previsão:</h3>            
          <p>Em 05/09/2023</p>
        </div>
      </div>

      <div className="request-return-head">
        Devolutiva
      </div>
      <form className="request-return-form" onSubmit={ (event) => { event.preventDefault() } }>
        <textarea
          placeholder="Ex.: Infezlimente, você não se adequou aos requisitos exigidos para adotar tal animal. "
          className="request-return"
          name="request-return"
          id="request-return"
          cols={10}
          rows={10}
        >
        </textarea>
        <button className="request-return-button refuse-btn">
          <img src={ x } alt="refuse button icon" />
        </button>
        <button className="request-return-button accept-btn">
        <img src={ v } alt="accept button icon" />
        </button>
      </form>

    </div>
  );
}

export default ApprovalContainer;