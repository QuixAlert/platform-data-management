/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Component = ({ vector = "/img/vector-13.svg", className }) => {
  return (
    <div className={`component ${className}`}>
      <img className="vector" alt="Vector" src={vector} />
      <img className="img" alt="Vector" src="/img/vector-12.svg" />
      <img className="vector-2" alt="Vector" src="/img/vector-11.svg" />
      <img className="vector-3" alt="Vector" src="/img/vector-10.svg" />
      <img className="vector-4" alt="Vector" src="/img/vector-9.svg" />
      <img className="mask-group" alt="Mask group" src="/img/mask-group-1.png" />
      <img className="vector-5" alt="Vector" src="/img/vector-8.svg" />
    </div>
  );
};

Component.propTypes = {
  vector: PropTypes.string,
};
