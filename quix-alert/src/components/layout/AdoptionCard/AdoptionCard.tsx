import React, { useState } from "react";

import { useNavigate } from "react-router";

import AdoptionCard from "../../../interfaces/AdoptionCard";

import requesterPicture from "../../../assets/images/requester.jpeg";
import responsiblePicture from "../../../assets/images/user.jpeg";
import animalPicture from "../../../assets/images/dog2.jpeg";
import dog from "../../../assets/icons/dog.svg"
import male from "../../../assets/icons/male.svg"

import { IoMaleSharp } from "react-icons/io5";
import { IoFemaleSharp } from "react-icons/io5";
import { FaDog } from "react-icons/fa";
import { FaCat } from "react-icons/fa";
import { PiBirdFill } from "react-icons/pi";

import {useMutation, useQuery} from "react-query";
import {getTokens, signIn} from "../../../api/user";
import {useAuth} from "../../../pages/LoginPage/AuthProvider";
import {getAllAnimals, getAnimalById} from "../../../api/animals";
import { getAllAdoption } from "../../../api/adoption";

import "./style.css"
import CardPersonContainer from "../CardPersonContainer/CardPersonContainer";

function AdoptionCard(Props: AdoptionCard) {  
  const { getTokens } = useAuth();
  const navigate = useNavigate();
  

  const { data: animalResponse, isLoading: isLoadingAnimalResponse } = useQuery(
    ["animal", Props.animalId],
    () => getAnimalById(getTokens(), Props.animalId),
  );

  if (isLoadingAnimalResponse) {
    return <div>Carregando...</div>
  }

  const handleNavigate = (adoptionId: string) => {
    navigate(`/adoption/expandable/${adoptionId}`);
  };

  return (
    <div className="adoption-card" title="">
      <div className="card-left">
        <CardPersonContainer
          requesterId={Props.requesterId}
          requesterName={Props.requesterName}
          requesterPicture=""
        />
        <div className="card-adoption-info-grid">
          <div className="card-adoption-info-line">
            <h3>Tipo de solicitação:</h3>
            <span className="card-solicitation-type">Adoção</span>
          </div>
          <div className="card-adoption-info-line">
            <h3>Data da solicitação:</h3>            
            <p>{ Props.solicitationDate || "20/12/2023"}</p>
          </div>
        </div>
        <div className="card-adoption-animal-info">
          <div className="card-animal-photo-container">
            <h3>Animal Solicitado:</h3>
            <img className="card-animal-photo" src={ animalResponse.picturePath } alt="animal image"/>
          </div>
          <div className="card-animal-sub-info">
            <h3>{ animalResponse.name }</h3>
            <div className="card-animal-icons">
              {
                
                
                (() => {
                  if (animalResponse.type == "Cachorro") {
                    return (
                      <FaDog className="card-animal-icon"/>
                    )
                  } else if (animalResponse.type == "Gato") {
                    return (
                      <FaCat className="card-animal-icon"/>
                    )
                  } else if (animalResponse.type == "Pássaro") {
                    return (
                      <PiBirdFill className="card-animal-icon"/>
                    )
                   }
                })()
              }
              {
                animalResponse.gender === "Macho" 
                  ? (<IoMaleSharp className="card-animal-icon"/>)
                  : (<IoFemaleSharp className="card-animal-icon"/>)
              }
            </div>
          </div>
        </div>
      </div>

      <div className="card-right">
        <div className="card-person-container">
          <img className="card-person-photo" src={ responsiblePicture } alt="person-photo" />
          <div className="card-person-role-and-name">
            <p className="card-person-role">Responsável:</p>
            <p className="card-person-name">Phablo Gabriel</p>
          </div>
        </div>
        <div className="card-status-info">
        <div className="card-info-line">
            <h2>Dias em aberto:</h2>
            <p>Está com { Props.openDays || "20" } dias</p>
          </div>
          <div className="card-info-line">
            <h2>Status:</h2>
            <p>{ Props.status || "Aguardando" }</p>
          </div>
          <div className="card-info-line">
            <h2>Conclusão Prevista:</h2>
            <p>{ Props.expectedDate || "25/12/2023" }</p>
          </div>
        </div>
        <div className="card-see-more">
          <button
            className="card-see-more-btn"
            onClick={() => { 
              handleNavigate(Props.adoptionId);
             }}
          >
            Ver mais
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdoptionCard;