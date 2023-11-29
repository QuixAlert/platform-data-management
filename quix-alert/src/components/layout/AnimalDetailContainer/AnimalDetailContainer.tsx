import React from "react";


import animal from "../../../assets/images/dog.jpeg";
import dog from "../../../assets/icons/dog-black.svg";
import { FaCat, FaDog } from "react-icons/fa";
import { PiBirdFill } from "react-icons/pi";

import { Animal } from "../../../api/model/Animal";
import { getTokens } from "../../../api/user";
import { getAnimalById } from "../../../api/animals";

import { useAuth } from "../../../pages/LoginPage/AuthProvider";
import { useQuery } from "react-query";

import "./styles.css";

function AnimalContainer(Props: AnimalDetailContainer) {
  const { getTokens } = useAuth();

  const { data: animalResponse, isLoading: isLoadingAnimalResponse } = useQuery(
    ["animal", Props.id],
    () => getAnimalById(getTokens(), Props.id),
  );

  if (isLoadingAnimalResponse) {
    return <div>Carregando...</div>
  }

  return(
    <div className="info animal-container">
      <p>Animal Solicitado:</p>
      <div className="animal-information-container">
        <img className="animal-images" src={ animalResponse.picturePath } alt="animal image"/>

        <div className="animal-detail-container">
          <div className="animal-title">
            {  
              (() => {
                if (animalResponse.type == "Cachorro") {
                  return (
                    <FaDog className="animal icon"/>
                  )
                } else if (animalResponse.type == "Gato") {
                  return (
                    <FaCat className="animal icon"/>
                  )
                } else if (animalResponse.type == "Pássaro") {
                  return (
                    <PiBirdFill className="animal icon"/>
                  )
                  }
              })()
            }
            <h2>{animalResponse.name}</h2>
          </div>

          <div className="animal-info-container">
            <div className="animal-info breed">
              <h3>Raça</h3>
              <p>{animalResponse.race || "Sem Raça Definida"}</p>
            </div>

            <div className="animal-other-infos">
              <div className="animal-info size">
                <h3>Porte</h3>
                <p>{Props.size || "Sem Por Definido"}</p>
              </div>

              <div className="animal-info gender">
                <h3>Sexo</h3>
                <p>{animalResponse.gender}</p>
              </div>
            </div>
          </div>

          <div className="animal-description">
            <h2>Sobre o pet:</h2>
            <p>{Props.description || "Sou um pet dócil e adorável, amo brincar!"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimalContainer;