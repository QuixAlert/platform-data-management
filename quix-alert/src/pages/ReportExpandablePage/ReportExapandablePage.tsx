import React from "react";

import PagePanel from "../../components/layout/PagePanel/PagePanel"
import ReportContainer from "../../components/layout/ReportContainer/ReportContainer";
import ReportInformationContainer from "../../components/layout/ReportInformationContainer/ReportInformationContainer";
import ApprovalContainer from "../../components/layout/ApprovalContainer/ApprovalContainer";

import { useParams } from "react-router";
import { useAuth } from "../LoginPage/AuthProvider";
import { useQuery } from "react-query";

import { getReportById } from "../../api/report";

import "./styles.css"

function ReportExpandablePage() {
  const {getTokens} = useAuth();
  const {reportId} = useParams();

  const { data: reportResponse, isLoading: isLoadingReport } = useQuery(
    ["report", reportId],
    () => getReportById(getTokens(), reportId)
  )

  if (isLoadingReport) {
    return <div>Carregando...</div>
  }
  
  return(
      <PagePanel>
        <div className="adoption-container">
          <ReportInformationContainer
            description={reportResponse.description}
            incidentData={reportResponse.incidentData}
            incidentTime={reportResponse.incidentTime}
            incidentLocation={reportResponse.incidentLocation}
            title={reportResponse.title}
            possibleSolution={reportResponse.possibleSolution}
            userId={reportResponse.userId}
            extras=""
          />
          <ReportContainer
            reportPicturePath={reportResponse.picturePath}
          />
          <ApprovalContainer
            solicitationDate={reportResponse.incidentData}
            solicitationHour={reportResponse.incidentTime}
          />
        </div>
      </PagePanel>
  );
}

export default ReportExpandablePage;