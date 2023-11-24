import React from "react";

import PagePanel from "../../components/layout/PagePanel/PagePanel"
import ReportContainer from "../../components/layout/ReportContainer/ReportContainer";
import ReportInformationContainer from "../../components/layout/ReportInformationContainer/ReportInformationContainer";
import ApprovalContainer from "../../components/layout/ApprovalContainer/ApprovalContainer";

import "./styles.css"

function ReportExpandablePage() {
  return(
      <PagePanel>
        <div className="adoption-container">
          <ReportInformationContainer />
          <ReportContainer />
          <ApprovalContainer />
        </div>
      </PagePanel>
  );
}

export default ReportExpandablePage;