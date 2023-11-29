import React, {useRef } from "react";

import "./styles.css";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import streetMap from "../../../assets/images/street_map.png"
import reportPhoto from "../../../assets/images/street.jpeg";

function ReportContainer(Props: ReportContainer) {
  const mapContainerRef = useRef<HTMLDivElement>(null);

  const mapContainerStyle = {
    width: "100%",
    height: "300px",  // Adjusted height to match your specification
    marginTop: "8px", // Added marginTop
    borderRadius: "20px",
    overflow: "hidden", // Added to handle overflow
  };
  
  const center = {
    lat: 51.508742,
    lng: -0.120850,
  };

  return(
    <div className="info report-container">
      <p>Fotos Anexadas</p>
      <div className="report-information-container">
        <img className="report-images" src={ Props.reportPicturePath } alt="report image"/>
        {/* <img src={ streetMap } className="report-map" alt="report map" /> */}
        <div id="map" ref={mapContainerRef}>
          <LoadScript googleMapsApiKey="AIzaSyBrc1YXq4R0kYfW4pBaFNCElNeGjhoUL7w">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={5}
            >
              {/* Add Marker if needed */}
              {/* <Marker position={{ lat: 51.508742, lng: -0.120850 }} /> */}
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </div>
  );
}

export default ReportContainer;