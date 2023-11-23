import React, { useState } from "react";

import AdoptionCard from "../../components/layout/AdoptionCard/AdoptionCard";

import "./style.css"

function AdoptionPage() {
  const [activateButton, setActivateButton] = useState('todos');

  return(
      <div className="adoption-page-container">
        <div className="adoption-page-header">
          <h1>Solicitações de Documentos</h1>
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
          <AdoptionCard />
          <AdoptionCard />
          <AdoptionCard />
          <AdoptionCard />
          <AdoptionCard />
          <AdoptionCard />
          <AdoptionCard />
          <AdoptionCard />
          <AdoptionCard />
          <AdoptionCard />
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