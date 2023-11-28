import React from "react";

import PagePanel from "../../components/layout/PagePanel/PagePanel"
import ReportContainer from "../../components/layout/ReportContainer/ReportContainer";
import ReportInformationContainer from "../../components/layout/ReportInformationContainer/ReportInformationContainer";
import ApprovalContainer from "../../components/layout/ApprovalContainer/ApprovalContainer";

import { useParams } from "react-router";

import "./styles.css"

function ReportExpandablePage() {
  const {reportId} = useParams();
  console.log(reportId);
  
  return(
      <PagePanel>
        <div className="adoption-container">
          <ReportInformationContainer />
          <ReportContainer />
          <ApprovalContainer
            solicitationDate=""
            solicitationHour=""
          />
        </div>
      </PagePanel>
  );
}

export default ReportExpandablePage;