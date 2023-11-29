import React from "react";

import "./styles.css";

import streetMap from "../../../assets/images/street_map.png"
import reportPhoto from "../../../assets/images/street.jpeg";

function ReportContainer(Props: ReportContainer) {
  return(
    <div className="info report-container">
      <p>Fotos Anexadas</p>
      <div className="report-information-container">
        <img className="report-images" src={ Props.reportPicturePath } alt="report image"/>
        <img src={ streetMap } className="report-map" alt="report map" />
      </div>
    </div>
  );
}

export default ReportContainer;