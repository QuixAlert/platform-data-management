import React, { useState } from "react";

import ReportCard from "../../components/layout/ReportCard/ReportCard";

import "./style.css"
import {useMutation, useQuery} from "react-query";
import {getTokens, signIn} from "../../api/user";
import {useAuth} from "../LoginPage/AuthProvider";
import {getAllAnimals} from "../../api/animals";

const cardTest  = {
  requesterName: "Micaeli Girão",
  requesterPicturePath: "",
  responsibleName: "Hefraim Balbino",
  responsiblePicturePath: "",    
  registerNumber: "342121-78",
  solicitationDate: "31/08/2023",
  reportPicturePath: "",
  reportAdress: "Av. José Caetano - 268",
  openDays: "20",
  status: "Enviada",
  expectedDate: "06/12/2023",
}

function ReportPage() {
  const [activateButton, setActivateButton] = useState('todos');

  // ---------------- EXAMPLE START ----------------
  // Getting tokens from login to use on the other requests
  const { getTokens } = useAuth()

  // Using the react-query to control the state of the request result
  const { data: allAnimals, isLoading: isLoadingAllAnimals } = useQuery(
    "animals",
    () => getAllAnimals(getTokens()),
  );

  // Controlling the response
  if(!isLoadingAllAnimals){
    console.log(allAnimals)
  }
  // ---------------- EXAMPLE END ----------------

  const htmlCards = [];
  const reportCardsArray = [cardTest, cardTest, cardTest, cardTest, cardTest];
  
  for (let index = 0; index < reportCardsArray.length; index++) {
    htmlCards.push(<ReportCard key={index} { ...reportCardsArray[index] } />)
  }

  return(
      <div className="report-page-container">
        <div className="report-page-header">
          <h1>Denúncias</h1>
          <div className="report-page-filters-container">
            <h5>Tipos</h5>
            <div className="report-page-filters">
              <button
                className={`report-page-filters-button ${activateButton === 'todos' ? 'button-filter-selected': ''}`}
                onClick={() => {setActivateButton("todos")}}
              >
                TODOS
              </button>
              <button
                className={`report-page-filters-button ${activateButton === 'minhas' ? 'button-filter-selected': ''}`}
                onClick={() => {setActivateButton("minhas")}}
              >
                MINHAS
              </button>
              <button
                className={`report-page-filters-button ${activateButton === 'novas' ? 'button-filter-selected': ''}`}
                onClick={() => {setActivateButton("novas")}}
              >
                NOVAS
              </button>
              <button
                className={`report-page-filters-button ${activateButton === 'outros' ? 'button-filter-selected': ''}`}
                onClick={() => {setActivateButton("outros")}}
              >
                OUTROS
              </button>
            </div>
          </div>
        </div>
        <div className="report-page-cards-container">
          { htmlCards }
        </div>
        <div className="report-page-plus-button-container">
          <button className="report-page-plus-button">
            +
          </button>
        </div>
      </div>
  );
}

export default ReportPage;