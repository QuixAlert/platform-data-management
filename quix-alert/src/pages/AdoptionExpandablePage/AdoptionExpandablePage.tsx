import React from "react";

import PagePanel from "../../components/layout/PagePanel/PagePanel"
import AnimalContainer from "../../components/layout/AnimalDetailContainer/AnimalDetailContainer";
import PersonInformationContainer from "../../components/layout/PersonInformationContainer/PersonInformationContainer";
import ApprovalContainer from "../../components/layout/ApprovalContainer/ApprovalContainer";

import "./styles.css"

function AdoptionExpandablePage() {
  return(
      <PagePanel>
        <div className="adoption-expandable-container">
          <PersonInformationContainer />
          <AnimalContainer />
          <ApprovalContainer />
        </div>
      </PagePanel>
  );
}

export default AdoptionExpandablePage;