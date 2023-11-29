import React from "react";

import { MessageFilled, BellFilled, ClockCircleFilled } from "@ant-design/icons";

import "./styles.css"

function NavBarItems() {
    return (
        <div className="navbar-items-container">
        <a className="navbar-item bell-item">
          <BellFilled />
        </a>
        <a className="navbar-item message-item">
          <MessageFilled />
        </a>
        <a className="navbar-item clock-item">
          <ClockCircleFilled />
        </a>
      </div>
    );
}

export default NavBarItems;