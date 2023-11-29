import React from "react";

import "./styles.css";

import reportPhoto from "../../../assets/images/street.jpeg";

function ReportContainer(Props: ReportContainer) {
  return(
    <div className="info report-container">
      <p>Fotos Anexadas</p>
      <div className="report-information-container">
        <img className="report-images" src={ Props.reportPicturePath } alt="report image"/>

        <div className="report-map">
        </div>
      </div>
    </div>
  );
}

export default ReportContainer;