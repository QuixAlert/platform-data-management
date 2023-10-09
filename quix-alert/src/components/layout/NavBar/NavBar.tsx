import React from "react"

import DropDown from "../DropDown/DropDown";
import NavBarItems from "../NavBarItems/NavBarItems";

import quixalertLogo from "../../../assets/images/quixalert_logo.png"

import { Layout, Input } from "antd"

import "../NavBar/styles.css"

function NavBar() {
  const { Header } = Layout;
  const { Search } = Input

  return (
    <Layout className="navbar">
      <Header className="navbar-header">
        <div className="logo-search-bar">
          <div className="navbar-container">
            <img className="navbar-logo" src={quixalertLogo} alt="QuixAlert Logo"/>
          </div>

          <div className="search-bar-container">
            <Search className="search-bar" placeholder="Pesquisar"/>
          </div>
        </div>

        <div className="navbar-menu">
          <DropDown />
          <NavBarItems />
        </div>
      </Header>
    </Layout>
  );
}

export default NavBar;