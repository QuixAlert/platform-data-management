import React from "react"
import { DivCompTest } from "./styles";
import NavBar from "./components/layout/NavBar";
import DropDownItem from "./components/layout/DropDownItem";
import {Card} from "antd";
import {ArrowDownOutlined} from "@ant-design/icons";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
   <div>
    <GlobalStyles />
    <NavBar/>
   </div>
  )
}

export default App