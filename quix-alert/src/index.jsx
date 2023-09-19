import React from "react";
import ReactDOMClient from "react-dom/client";
import { SideBar } from "./screens/ComponentScreen/SideBar";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<SideBar />);
