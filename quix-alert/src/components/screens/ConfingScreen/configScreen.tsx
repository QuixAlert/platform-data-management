import React from "react";

import "./configScreen.css";

function ConfigScreen() {
    return (
        <div className="conteiner-config">
            <h1 className="screen-title">Configurações</h1>
            <div className="menu">
            <p className="menu-item">Configurações do Sistema</p>
            <p className="menu-item">Mudar padrões do sistema</p>
            <p className="menu-item">Alterar temas principais presente no sistema</p>
            <p className="menu-item">Configurações do dash board</p>
            <p className="menu-item">Configurações de acesso</p>
        </div>
        </div>
    );
}

export default ConfigScreen;