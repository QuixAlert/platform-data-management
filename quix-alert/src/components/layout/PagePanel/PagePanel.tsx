import React, { ReactNode } from "react";

import "./styles.css"

interface props {
  children: ReactNode;
}

function PagePanel({children}: props) {
  return(
    <div className="container">
      <div className="painel">
        {children}
      </div>
    </div>
  );
}

export default PagePanel;