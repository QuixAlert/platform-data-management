import React, { useEffect, useState } from "react";
import { useNavigate, useLocation  } from 'react-router-dom';

import AdoptionCard from "../../components/layout/AdoptionCard/AdoptionCard";

import "./style.css"
import {useQuery} from "react-query";
import {useAuth} from "../LoginPage/AuthProvider";
import { getAllAdoption } from "../../api/adoption";

function AdoptionPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const isCadastrionPage = location.pathname === "/animal_registration";
  
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
              Object.keys(adoption).length > 0 &&  (
                <AdoptionCard
                  key={adoption.id}
                  adoptionId={adoption.id}
                  animalId={adoption.animalId}
                  requesterId={adoption.userId}
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
            )
          }
        </div>
        <div className="adoption-page-plus-button-container">
          <button className="adoption-page-plus-button" onClick={() => {navigate("/animal_registration")}}>
            Adicionar Animal
          </button>
        </div>
      </div>
  );
}

export default AdoptionPage;