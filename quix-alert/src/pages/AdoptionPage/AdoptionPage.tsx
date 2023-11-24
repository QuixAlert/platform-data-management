import React from "react";

import PagePanel from "../../components/layout/PagePanel/PagePanel"
import AdoptionCard from "../../components/layout/AdoptionCard/AdoptionCard";

import "./style.css"
import {useAuth} from "../LoginPage/AuthProvider";

function AdoptionPage() {
      return(
          <div className="adoption-page-container">
            <div className="adoption-page-header">
              <h1>Solicitações de Documentos</h1>
            </div>
            <div className="adoption-container">
              <AdoptionCard />
              <AdoptionCard />
            </div>
          </div>
      );
}

export default AdoptionPage;