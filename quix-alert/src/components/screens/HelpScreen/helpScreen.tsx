import React from "react";
import YouTube from "react-youtube";
import "./helpScreen.css";
import imagem_video_cadastro from "../../../assets/images/imagem_video_cadastro.png";
import imagem_video_denuncia from "../../../assets/images/imagem_video_denuncia.png";
import imagem_video_documento from "../../../assets/images/imagem_video_documento.png";
import imagem_video_adocao from "../../../assets/images/imagem_video_adocao.png";
import imagem_video_sair from "../../../assets/images/imagem_video_sair.png";
import imagem_video_feedback from "../../../assets/images/imagem_video_feedback.png";

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
      <div className="header">
        <h1 className="screen-title">Ajuda</h1>
        <input type="search" name="pesquisa" id="input-pesquisa" placeholder="Pesquisar"/>
        <button className="btn-pesquisa">
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8804 10.9265C14.0018 9.56531 14.5303 7.85301 14.3584 6.13795C14.1865 4.4229 13.3271 2.83392 11.955 1.69428C10.583 0.554649 8.8014 -0.0500372 6.97266 0.00324421C5.14392 0.0565256 3.40542 0.763772 2.11085 1.9811C0.815153 3.19927 0.0615474 4.83679 0.00360618 6.55995C-0.054335 8.28311 0.587749 9.96223 1.79901 11.2551C3.01028 12.548 4.69956 13.3574 6.52261 13.5183C8.34566 13.6793 10.1653 13.1796 11.6107 12.1212L11.6493 12.1593L15.464 15.7519C15.5476 15.8305 15.6467 15.8929 15.7559 15.9355C15.8651 15.9781 15.9821 16 16.1002 16C16.2184 16 16.3354 15.9781 16.4446 15.9355C16.5537 15.8929 16.6529 15.8305 16.7365 15.7519C16.82 15.6732 16.8863 15.5798 16.9315 15.477C16.9767 15.3742 17 15.2641 17 15.1528C17 15.0416 16.9767 14.9314 16.9315 14.8286C16.8863 14.7258 16.82 14.6325 16.7365 14.5538L12.9209 10.9621C12.9078 10.9499 12.8943 10.938 12.8804 10.9265ZM11.0136 3.17918C11.5213 3.64951 11.9251 4.20983 12.2017 4.82783C12.4782 5.44583 12.6221 6.10927 12.625 6.77989C12.6279 7.45051 12.4898 8.11503 12.2186 8.73513C11.9473 9.35523 11.5484 9.91862 11.0448 10.3928C10.5411 10.867 9.94274 11.2427 9.28415 11.498C8.62556 11.7534 7.91978 11.8835 7.20753 11.8807C6.49528 11.878 5.79066 11.7425 5.1343 11.4821C4.47793 11.2217 3.88283 10.8415 3.38331 10.3635C2.38505 9.40811 1.82817 8.12007 1.83397 6.77989C1.83976 5.43971 2.40777 4.15598 3.41425 3.20832C4.42074 2.26066 5.78416 1.72586 7.20753 1.7204C8.6309 1.71494 9.99891 2.23928 11.0136 3.17918Z" fill="#269996"/>
        </svg>
        </button>
      </div>

      <div className="card-container">
        {/* Card 1 - 1 fila */}
        {/* Card com vídeo do YouTube incorporado diretamente */}
        <div className="card">
          <div className="card-single">
            <p className="card-title">Como cadastrar um animal</p>
            <span>Para cadastrar um animal você precisará acessar a página de animais e clicar no botão "Cadastrar Animal", após isso basta preencher as informações do animal e ele aparecerá para todos como um animal disponível para adoção </span>
            <div className="section-bottom">
              <div className="photo-video">
                <img src={imagem_video_cadastro} alt="video" /> 
              </div>
              <div className="see-more">
                <button onClick={() => window.open('https://www.youtube.com/watch?v=ab6eDdwS3rA&t=13s', '_blank')}>
                  Ver mais
                </button>
              </div>
            </div>
          </div>
            {/* <YouTube videoId="2g811Eo7K8U" opts={opts} />
            <h2>Título do Vídeo 1</h2>
            <p>Descrição do Vídeo 1.</p>         */}
        </div>

        {/* Card 2 - 1 fila*/}
        <div className="card">
          <div className="card-single">
            <p className="card-title">Como atender uma denúncia</p>
            <span>Para iniciar o antendimento de uma denúncia, basta ir até a opção de denúncias e clicar no card que respresenta a denúncia que terá o atendimento iniciado. Após clicar no card, haverá uma expansão do card para que seja realizado as ações necessárias. </span>
            <div className="section-bottom">
              <div className="photo-video">
              <img src={imagem_video_denuncia} alt="video" />
              </div>
              <div className="see-more">
                <button onClick={() => window.open('https://www.youtube.com/watch?v=ab6eDdwS3rA&t=13s', '_blank')}>
                  Ver mais
                </button>
              </div>
            </div>
          </div>
            {/* <YouTube videoId="2g811Eo7K8U" opts={opts} />
            <h2>Título do Vídeo 1</h2>
            <p>Descrição do Vídeo 1.</p>         */}
        </div>
        {/* <div className="card">
          <h2 className="titulo-ajuda">Como Cadastrar Animais</h2>
          <p className="texto-ajuda">Para cadastrar animais basta clicar no icone de animal na barra de navegação...</p>
        </div> */}

        {/* Card 3 - 1 fila*/}
        <div className="card">
          <div className="card-single">
            <p className="card-title">Como averiguar uma documentação</p>
            <span>Para iniciar a análise de documentos, será necessário ir até a opções de Documentos e clicar no card que representa o documento desejado. Ao clicar no card, irá aparecer uma nova tela com todas as informações do documento e do solicitante, lá terá as opções de negar ou aceitar. </span>
            <div className="section-bottom">
              <div className="photo-video">
                <img src={imagem_video_documento} alt="video" />
              </div>
              <div className="see-more">
                <button onClick={() => window.open('https://www.youtube.com/watch?v=ab6eDdwS3rA&t=13s', '_blank')}>
                  Ver mais
                </button>
              </div>
            </div>
          </div>
            {/* <YouTube videoId="2g811Eo7K8U" opts={opts} />
            <h2>Título do Vídeo 1</h2>
            <p>Descrição do Vídeo 1.</p>         */}
        </div>

        {/* Adicione mais cards conforme necessário */}
      </div>

      <div className="card-container">
        {/* Card 1 - 2 fila */}
        {/* Card com vídeo do YouTube incorporado diretamente */}
        <div className="card">
          <div className="card-single">
            <p className="card-title">Como analisar solicitações de adoção</p>
            <span>Para iniciar a análise de documentos para adoção, é necessário ir até a tela de solicitações de adoção e clicar no card que representa a adoção desejada para o atendimento. Após clicar a irá aparecer uma tela com as informações da solicitação e com as opções de aceitar ou negar e dar feedback.</span>
            <div className="section-bottom">
              <div className="photo-video">
                <img src={imagem_video_adocao} alt="video" />
              </div>
              <div className="see-more">
                <button onClick={() => window.open('https://www.youtube.com/watch?v=ab6eDdwS3rA&t=13s', '_blank')}>
                  Ver mais
                </button>
              </div>
            </div>
          </div>
            {/* <YouTube videoId="2g811Eo7K8U" opts={opts} />
            <h2>Título do Vídeo 1</h2>
            <p>Descrição do Vídeo 1.</p>         */}
        </div>

        {/* Card 2 - 2 fila*/}
        <div className="card">
          <div className="card-single">
            <p className="card-title">Como sair do sistema</p>
            <span>No menu superior, aparecerá sua foto. Basta clicar nela que aparecerá a opção de sair do programa. Ao clicar nestá opção, o usuário será imediatamente desconectado do sistema</span>
            <div className="section-bottom">
              <div className="photo-video">
                <img src={imagem_video_sair} alt="video" />
              </div>
              <div className="see-more">
                <button onClick={() => window.open('https://www.youtube.com/watch?v=ab6eDdwS3rA&t=13s', '_blank')}>
                  Ver mais
                </button>
              </div>
            </div>
          </div>
            {/* <YouTube videoId="2g811Eo7K8U" opts={opts} />
            <h2>Título do Vídeo 1</h2>
            <p>Descrição do Vídeo 1.</p>         */}
        </div>
        {/* <div className="card">
          <h2 className="titulo-ajuda">Como Cadastrar Animais</h2>
          <p className="texto-ajuda">Para cadastrar animais basta clicar no icone de animal na barra de navegação...</p>
        </div> */}

        {/* Card 3 - 2 fila */}
        <div className="card">
          <div className="card-single">
            <p className="card-title">Como dar feedback em uma solicitação</p>
            <span>Para dar feedback em uma solicitação basta clicar na caixa de texto dentro da solicitação na área do atendente</span>
            <div className="section-bottom">
              <div className="photo-video">
                <img src={imagem_video_feedback} alt="video" />
              </div>
              <div className="see-more">
                <button onClick={() => window.open('https://www.youtube.com/watch?v=ab6eDdwS3rA&t=13s', '_blank')}>
                  Ver mais
                </button>
              </div>
            </div>
          </div>
            {/* <YouTube videoId="2g811Eo7K8U" opts={opts} />
            <h2>Título do Vídeo 1</h2>
            <p>Descrição do Vídeo 1.</p>         */}
        </div>

        {/* Adicione mais cards conforme necessário */}
      </div>

    </div>
  );
}

export default HelpScreen;
