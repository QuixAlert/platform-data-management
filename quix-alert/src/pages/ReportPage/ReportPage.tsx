import React, { useState } from "react";

import ReportCard from "../../components/layout/ReportCard/ReportCard";

import "./style.css"
import {useMutation, useQuery} from "react-query";
import {getTokens, signIn} from "../../api/user";
import {useAuth} from "../LoginPage/AuthProvider";
import {getAllAnimals} from "../../api/animals";
import { getAllReport } from "../../api/report";
import { ReportF } from "../../api/model/ReportF";

function ReportPage() {
  const { getTokens } = useAuth();
  const [activateButton, setActivateButton] = useState('todos');

  const { data: allReportsResponse, isLoading: isLoadingAllReports } = useQuery(
    "reports",
    () => getAllReport(getTokens()),
  );

  if(isLoadingAllReports){
    return <div>Carregando...</div>
  }  

  return(
    <div className="report-page-container">
      <div className="report-page-header">
        <h1>Denúncias</h1>
        <div className="report-page-filters-container">
          <h5>Tipos</h5>
          <div className="report-page-filters">
            <button
              className={`report-page-filters-button ${activateButton === 'todos' ? 'button-filter-selected': ''}`}
              onClick={() => {setActivateButton("todos")}}
            >
              TODOS
            </button>
            <button
              className={`report-page-filters-button ${activateButton === 'minhas' ? 'button-filter-selected': ''}`}
              onClick={() => {setActivateButton("minhas")}}
            >
              MINHAS
            </button>
            <button
              className={`report-page-filters-button ${activateButton === 'novas' ? 'button-filter-selected': ''}`}
              onClick={() => {setActivateButton("novas")}}
            >
              NOVAS
            </button>
            <button
              className={`report-page-filters-button ${activateButton === 'outros' ? 'button-filter-selected': ''}`}
              onClick={() => {setActivateButton("outros")}}
            >
              OUTROS
            </button>
          </div>
        </div>
      </div>
      <div className="report-page-cards-container">
        {
          allReportsResponse.map((report: ReportF) => (
            Object.keys(report).length > 0 && report.attended == false && (
              <ReportCard
                key={report.id}
                reportId={report.id}
                userId={report.userId}
                expectedDate=""
                openDays=""
                registerNumber=""
                reportAdress={report.incidentLocation}
                reportPicturePath={report.picturePath}
                requesterName=""
                requesterPicturePath=""
                responsibleName=""
                responsiblePicturePath=""
                solicitationDate={report.incidentData}
                status=""
                title={report.title}
              />
            ))
          )
        }
      </div>
    </div>
  );
}

export default ReportPage;