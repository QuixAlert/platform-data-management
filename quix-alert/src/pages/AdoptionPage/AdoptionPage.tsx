import React, { useEffect, useState } from "react";

import AdoptionCard from "../../components/layout/AdoptionCard/AdoptionCard";

import "./style.css"
import {useMutation, useQuery} from "react-query";
import {getTokens, signIn} from "../../api/user";
import {useAuth} from "../LoginPage/AuthProvider";
import {getAllAnimals} from "../../api/animals";
import { getAllAdoption } from "../../api/adoption";

const cardTest  = {
  requesterName: "Thiago Maia",
  requesterPicturePath: "../../../assets/images/requester.jpeg",
  responsibleName: "Samuel Honorato",
  responsiblePicturePath: "../../../assets/images/responsible.jpeg",    
  solicitationType: "Adoção",
  registerNumber: "3432121-78",
  solicitationDate: "31/08/2023",
  animalPicturePath: "../../../assets/images/dog2.jpeg",
  animalName: "Sheldon",
  animalGender: "MALE",
  animalType: "DOG",
  openDays: "20",
  status: "Aguardando Assinatura",
  expectedDate: "05/09/2023",
}

function AdoptionPage() {
  const { getTokens } = useAuth();
  const [activateButton, setActivateButton] = useState('todos');
  
  const { data: allAdoptionsResponse, isLoading: isLoadingAllAdoptions } = useQuery(
    "adoptions",
    () => getAllAdoption(getTokens()),
  );

  if (isLoadingAllAdoptions) {
    return <div>Carregando...</div>
  }

  return(
      <div className="adoption-page-container">
        <div className="adoption-page-header">
          <h1>Adoções</h1>
          <div className="adoption-page-filters-container">
            <h5>Tipos</h5>
            <div className="adoption-page-filters">
              <button
                className={`adoption-page-filters-button ${activateButton === 'todos' ? 'button-filter-selected': ''}`}
                onClick={() => {setActivateButton("todos")}}
              >
                TODOS
              </button>
              <button
                className={`adoption-page-filters-button ${activateButton === 'minhas' ? 'button-filter-selected': ''}`}
                onClick={() => {setActivateButton("minhas")}}
              >
                MINHAS
              </button>
              <button
                className={`adoption-page-filters-button ${activateButton === 'novas' ? 'button-filter-selected': ''}`}
                onClick={() => {setActivateButton("novas")}}
              >
                NOVAS
              </button>
              <button
                className={`adoption-page-filters-button ${activateButton === 'outros' ? 'button-filter-selected': ''}`}
                onClick={() => {setActivateButton("outros")}}
              >
                OUTROS
              </button>
            </div>
          </div>
        </div>
        <div className="adoption-page-cards-container">
          {
            allAdoptionsResponse.map((adoption: Adoption) => (
              <AdoptionCard
                key={adoption.id}
                adoptionId={adoption.id}
                animalId={adoption.animalId}
                requesterName={adoption.personResponsible}
                requesterPicturePath=""
                responsibleName=""
                responsiblePicturePath=""
                solicitationType=""
                registerNumber=""
                solicitationDate=""
                animalPicturePath=""
                animalName=""
                animalType={adoption.animalType}
                animalGender=""
                openDays=""
                status=""
                expectedDate=""
              />
            ))
          }
        </div>
        <div className="adoption-page-plus-button-container">
          <button className="adoption-page-plus-button">
            +
          </button>
        </div>
      </div>
  );
}

export default AdoptionPage;