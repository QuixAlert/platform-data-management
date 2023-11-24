import React, { useState } from "react";

import AdoptionCard from "../../components/layout/AdoptionCard/AdoptionCard";

import "./style.css"

const cardTest:AdoptionCard = {
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
  const [activateButton, setActivateButton] = useState('todos');

  const htmlCards = [];
  const adoptionCardsArray = [cardTest, cardTest, cardTest, cardTest, cardTest];
  
  for (let index = 0; index < adoptionCardsArray.length; index++) {
    htmlCards.push(<AdoptionCard key={index} { ...adoptionCardsArray[index] } />)
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
          { htmlCards }
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