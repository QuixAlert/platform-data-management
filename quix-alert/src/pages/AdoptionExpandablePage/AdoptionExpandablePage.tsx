import React from "react";

import PagePanel from "../../components/layout/PagePanel/PagePanel"
import AnimalContainer from "../../components/layout/AnimalDetailContainer/AnimalDetailContainer";
import PersonInformationContainer from "../../components/layout/PersonInformationContainer/PersonInformationContainer";
import ApprovalAdoptionContainer from "../../components/layout/ApprovalAdoptionContainer/ApprovalAdoptionContainer";

import "./styles.css"
import { useParams } from "react-router-dom";
import { useAuth } from "../LoginPage/AuthProvider";
import { useQuery } from "react-query";
import { getAdoptionById } from "../../api/adoption";
import { getFirebaseAppUserById } from "../../api/firebaseUsers";

function AdoptionExpandablePage() {
  const { adoptionId } = useParams();
  const { getTokens } = useAuth();
  
  const { data: adoptionResponse, isLoading: isLoadingAdoption } = useQuery(
    ["adoptions", adoptionId],
    () => getAdoptionById(getTokens(), adoptionId),
  );
  
  if (isLoadingAdoption) {
    return <div>Carregando...</div>
  }
  

  return(
      <PagePanel>
        <div className="adoption-expandable-container">
          <PersonInformationContainer
            key={adoptionResponse.id}
            userId={adoptionResponse.userId}
            addressResponsible={adoptionResponse.addressResponsible}
            documentResponsible=""
            houseDescription={adoptionResponse.houseDescription}
            personResponsible={adoptionResponse.personResponsible}
            solicitationDate=""
            requestedHour=""
            adoptionMotivation=""
            monthlyIncome=""
            otherAnimals=""
            visitDate=""
            visitHour=""
          />
          <AnimalContainer
            key={adoptionResponse.animalId}
            id={adoptionResponse.animalId}
            description={adoptionResponse.animalDescription}
            gender=""
            name=""
            picturePath=""
            race=""
            size=""
            type=""
            userId=""
          />
          <ApprovalAdoptionContainer
            key={adoptionResponse.personResponsible}
            id={adoptionId}
            solicitationDate=""
            solicitationHour=""
          />
        </div>
      </PagePanel>
  );
}

export default AdoptionExpandablePage;