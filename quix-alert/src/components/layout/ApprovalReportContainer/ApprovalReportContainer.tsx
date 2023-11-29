import React, { useState } from "react";

import responsible from "../../../assets/images/user.jpeg";
import calendar from "../../../assets/icons/calendar.svg";
import clock from "../../../assets/icons/clock.svg";
import x from "../../../assets/icons/x.svg"
import v from "../../../assets/icons/v.svg"

import { useMutation } from "react-query";
import "./styles.css";
import { registerReportFeedback } from "../../../api/reportFeedback";
import {changeStatusReport} from "../../../api/report"
import { useAuth } from "../../../pages/LoginPage/AuthProvider";

import { Button, message as antdMessage, Space } from 'antd';

function ApprovalReportContainer(Props: ApprovalContainer) {
  const { getTokens } = useAuth();
  const [feedBack, setFeedBack] = useState("");
  
  const handleChange = (event) => {
    setFeedBack(event.target.value);
  };

  const changeStatusMutation = useMutation({
    mutationFn: changeStatusReport,
  })

  const feedBackMutation = useMutation({
    mutationFn: registerReportFeedback,
    onSuccess: (data) => {
      console.log(data)
      if (data === true) {
        antdMessage.success('Operação bem-sucedida!');
        changeStatusMutation.mutate({token: getTokens(), reportId: Props.id})
      }
    },
  });


  return(
    <div className="info approval-container">
      <div className="responsible-container">
        <img className="responsible-photo" src={ responsible } alt="responsible-photo" />
        <div className="responsible-role-and-name">
          <p className="responsible-role">Responsável:</p>
          <p className="responsible-name">Phablo Gabriel</p>
        </div>
      </div>

      <div className="responsible-header-info">
        <div className="responsible-date-container">
          <p className="responsible-date-title">Data da Solicitação</p>
          <div className="responsible-date">
            <img className="responsible-icon" src={ calendar } alt="" />
            <p>{Props.solicitationDate || "23/06/2023"}</p>
          </div>
          <div className="responsible-hour">
            <img className="responsible-icon" src={ clock } alt="" />
            <p>{Props.solicitationHour || "19h25"}</p>
          </div>
        </div>
      </div>

      <h2 className="request-infos-head">
        Informações da Solicitação
      </h2>
      <div className="request-infos-grid">
        <div className="request-infos">
          <h3>Status:</h3>            
          <p>Em Análise</p>
        </div>
        <div className="request-infos">
          <h3>Dias em aberto:</h3>            
          <p>Está com {"01"} dias</p>
        </div>
        <div className="request-infos">
          <h3>Previsão:</h3>            
          <p>Em {"09/12/2023"}</p>
        </div>
      </div>

      <div className="request-return-head">
        Devolutiva
      </div>
      <form className="request-return-form" onSubmit={ (event) => { event.preventDefault() } }>
        <textarea
          placeholder="Digite aqui a devolutiva da denúncia"
          className="request-return"
          name="request-return"
          id="request-return"
          cols={10}
          rows={10}
          value={feedBack}
          onChange={handleChange}
        >
        </textarea>
        <button
          className="request-return-button refuse-btn"
          onClick={() =>
            feedBackMutation.mutate(
              {
                token: getTokens(),
                feedback: {
                  referenceId: Props.id,
                  description: feedBack,
                  launchDate: Date.now(),
                  accepted: false,
                }
            }
            )
          }
        >
          <img src={ x } alt="refuse button icon" />
        </button>
        <button
          className="request-return-button accept-btn"
          onClick={() =>
            feedBackMutation.mutate(
              {
                token: getTokens(),
                feedback: {
                  referenceId: Props.id,
                  description: feedBack,
                  launchDate: Date.now(),
                  accepted: true,
                }
            }
            )
          }
        >
          <img src={ v } alt="accept button icon" />
        </button>
      </form>

    </div>
  );
}

export default ApprovalReportContainer;