import React from "react";
import YouTube from "react-youtube";
import "./helpScreen.css";

function HelpScreen() {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="conteiner-help">
      <h1 className="screen-title">Opções de Ajuda</h1>
      <div className="card-container">
        {/* Card 1 */}
        {/* Card com vídeo do YouTube incorporado diretamente */}
        <div className="card">
            <YouTube videoId="2g811Eo7K8U" opts={opts} />
            <h2>Título do Vídeo 1</h2>
            <p>Descrição do Vídeo 1.</p>        
        </div>

        {/* Card 2 */}
        <div className="card">
          <h2 className="titulo-ajuda">Como Cadastrar Animais</h2>
          <p className="texto-ajuda">Para cadastrar animais basta clicar no icone de animal na barra de navegação...</p>
        </div>

        {/* Adicione mais cards conforme necessário */}
      </div>
    </div>
  );
}

export default HelpScreen;
