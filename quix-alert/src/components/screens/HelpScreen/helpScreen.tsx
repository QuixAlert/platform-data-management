import React from "react";

import "./helpScreen.css";

function helpScreen() {
    return (
        <div className="conteiner-help">
            <h1 className="screen-title">Opções de Ajuda</h1>
            <div className="card-container">
                {/* Card 1 */}
                {/* Card com vídeo do YouTube incorporado */}
                <div className="card">
                <iframe
                    width="300"
                    height="200"
                    src="https://www.youtube.com/watch?v=JLHsM4bpfxY"
                    title="Vídeo do YouTube"
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
                <h2>Título do Vídeo 1</h2>
                <p>Descrição do Vídeo 1.</p>
                </div>

                {/* Card 2 */}
                <div className="card">
                <img src="url_do_video_2_thumbnail" alt="Miniatura do Vídeo 2" />
                <h2>Título do Vídeo 2</h2>
                <p>Descrição do Vídeo 2.</p>
                </div>

                {/* Adicione mais cards conforme necessário */}
            </div>
           
        </div>
    );
}

export default helpScreen;