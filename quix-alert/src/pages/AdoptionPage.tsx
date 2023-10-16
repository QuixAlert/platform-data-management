import React from "react";

import PagePanel from "../components/layout/PagePanel/PagePanel"
import AnimalContainer from "../components/layout/AnimalDetailContainer/AnimalDetailContainer";
import PersonInformationContainer from "../components/layout/PersonInformationContainer/PersonInformationContainer";
import ApprovalContainer from "../components/layout/ApprovalContainer/ApprovalContainer";

import "./styles.css"

function AdoptionPage() {
  return(
      <PagePanel>
        <div className="adoption-container">
          <PersonInformationContainer />
          <AnimalContainer />
          <ApprovalContainer />
        </div>
      </PagePanel>
  );
}

export default AdoptionPage;