import React from "react";

import { useNavigate } from "react-router";

import ReportCard from "../../../interfaces/ReportCard";

import requesterPicture from "../../../assets/images/requester2.jpeg";
import responsiblePicture from "../../../assets/images/user.jpeg";
import streetMap from "../../../assets/images/street_map.png"

import "./style.css"
import { useAuth } from "../../../pages/LoginPage/AuthProvider";
import { useQuery } from "react-query";
import { getFirebaseAppUserById } from "../../../api/firebaseUsers";
import CardPersonContainer from "../CardPersonContainer/CardPersonContainer";

function ReportCard(Props: ReportCard) {  
  const { getTokens } = useAuth();
  const navigate = useNavigate();

  const { data: userResponse, isLoading: isLoadingUser } = useQuery(
    ["reports", Props.userId],
    () => getFirebaseAppUserById(getTokens(), Props.userId),
  );

  if(isLoadingUser){
    return <div>Carregando...</div>
  }

  const handleNavigate = (reportId: string) => {
    navigate(`/report/expandable/${reportId}`);
  };

  return (
    <div className="report-card" title="">
      <div className="card-left">
        <CardPersonContainer
          requesterId={Props.userId}
          requesterName={userResponse.name}
          requesterPicture=""
        />

        <div className="card-report-container">
          <div className="card-report-content">
            <h3>Título</h3>
            <p>{Props.title}</p>
          </div>

          <div className="card-report-content">
            <h3>Data da Solicitação:</h3>
            <p>{ Props.solicitationDate || "26/11/2023" }</p>
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
            <p className="card-person-name">{ Props.responsibleName || "Phablo Gabriel" }</p>
          </div>
        </div>
        <div className="card-status-info">
        <div className="card-info-line">
            <h2>Dias em aberto:</h2>
            <p>Está com { Props.openDays || "01" } dias</p>
          </div>
          <div className="card-info-line">
            <h2>Status:</h2>
            <p>{ Props.status || "Enviada" }</p>
          </div>
          <div className="card-info-line">
            <h2>Conclusão Prevista:</h2>
            <p>{ Props.expectedDate || "09/12/2023"}</p>
          </div>
        </div>
        <div className="card-see-more">
          <button
            className="card-see-more-btn"
            onClick={() => { 
              handleNavigate(Props.reportId);
             }}
          >
            Ver mais
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReportCard;