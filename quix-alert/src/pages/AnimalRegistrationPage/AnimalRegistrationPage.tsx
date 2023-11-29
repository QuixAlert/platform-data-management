import React, { useState } from "react";

import "./styles.css";
import animal from "../../../assets/images/dog.jpeg";
import dog from "../../../assets/icons/dog-black.svg";
import PagePanel from "../../components/layout/PagePanel/PagePanel";

function AnimalRegistrationContainer() {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setIsButtonClicked(!isButtonClicked);
  };

  return (
    <PagePanel>
      <div className= "div-padding">
        <div className="flex-right">
          <div className="animal-registration">
            <div className="animal-registration-content-left-top-image">
              {/* Adicionar lógica para exibir a imagem aqui */}
            </div>
            <div className="animal-registration-content-left-top-buttons">
              <p className="name-foto">Foto do animal</p>
              <div className="caixa-add-foto"></div>
              <button className="animal-registration-content-left-top-button vector-plus">Adicionar Imagem</button>
            </div>
            <div className="animal-registration-header">
              <button className="animal-registration-button">Cadastrar Animal</button>
            </div>
          </div>
        </div>

          <div className="flex-left">
            {/* Linha dos nome e do tipo */}
            <div className="dados-gerais-animal">
              <div className="component-flex nome-animal">
                <label htmlFor="name" className="select-info">Nome do Animal</label>
                <input type="text" id="name" name="name" placeholder="Nome do Animal" className="input-curto"/>
              </div>
              <div className="component-flex tipo-animal">
                <label htmlFor="specie" className="select-info">Espécie do Animal</label>
                <select id="specie" name="specie" className="select">
                  <option value="gato">Gato</option>
                  <option value="cachorro">Cachorro</option>
                  <option value="passaro">Pássaro</option>
                </select>
              </div>
            </div>
              
          {/* Linha dos genero, da idade e da raça */}
          <div className="dados-animal"> 
            <div className="component-dados-animal idade-animal">
              <label htmlFor="age" className="select-info">Idade do Animal</label>
              <input type="text" id="age" name="age" placeholder="Idade do Animal" className="input-curto" />
            </div>
            <div className="component-dados-animal raça-animal">
              <label htmlFor="breed" className="select-info">Raça do Animal</label>
              <input type="text" id="breed" name="breed" placeholder="Raça do Animal" className="input-curto" />
            </div>
            <div className="component-dados-animal genero-animal">
                <label htmlFor="breed" className="select-info">Gênero do Animal</label>
                <select id="genero" name="specie" className="select">
                  <option value="gato">Macho</option>
                  <option value="cachorro">Fêmea</option>
                </select>
              </div>
          </div> 

          <div className="animal-registration-content-left-bottom-textarea">
            <label htmlFor="description" className="label-info">Descrição</label>
            <textarea id="description" name="description" placeholder="Descrição do Animal" className="animal-registration-content-left-bottom-input" />
          </div>
          <label htmlFor="medicalfic" className="label-info">Ficha Médica do Animal</label>
          <textarea id="medicalfic" name="medicalfic" placeholder="Ficha Médica do Animal" className="animal-registration-content-left-bottom-input" />
        </div>
      </div>
    </PagePanel>
  );
}

export default AnimalRegistrationContainer;
