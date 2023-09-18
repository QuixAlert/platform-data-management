import React from "react";
import { Component } from "../Component";
import "./style.css";

export const ComponentWrapper = ({ className }) => {
  return (
    <div className={`component-wrapper ${className}`}>
      <Component className="component-1" vector="/img/vector-19.svg" />
    </div>
  );
};
