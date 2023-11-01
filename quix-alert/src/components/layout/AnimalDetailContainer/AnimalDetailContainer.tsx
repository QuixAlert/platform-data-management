import React from "react";

import "./styles.css";

import animal from "../../../assets/images/dog.jpeg";
import dog from "../../../assets/icons/dog-black.svg";

function AnimalContainer() {
  return(
    <div className="info animal-container">
      <p>Animal Solicitado:</p>
      <div className="animal-information-container">
        <img className="animal-images" src={ animal } alt="animal image"/>

        <div className="animal-detail-container">
          <div className="animal-title">
            <img src={ dog } alt="animal icon" />
            <h2>Sheldon - o perspicaz</h2>
          </div>

          <div className="animal-info-container">
            <div className="animal-info breed">
              <h3>Raça</h3>
              <p>Sem Raça Definida</p>
            </div>

            <div className="animal-other-infos">
              <div className="animal-info size">
                <h3>Porte</h3>
                <p>Médio</p>
              </div>

              <div className="animal-info gender">
                <h3>Sexo</h3>
                <p>Macho</p>
              </div>
            </div>
          </div>

          <div className="animal-description">
            <h2>Sobre o pet:</h2>
            <p>Sou um cãozinho dócil, adoro brincar. Infelizmente fui abandonado quando ainda era filhote, por isso tenho um pouco de dificuldade de socialização, mas eu não mordo nunca. </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimalContainer;