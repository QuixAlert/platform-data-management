import React from "react"

import {Layout, Input, Menu} from "antd"
import {styled} from "styled-components";
import DropDown from "../DropDown/DropDown";

import quixalertLogo from "../../../assets/images/quixalert_logo.png"
import { MessageFilled, BellFilled, ClockCircleFilled } from "@ant-design/icons";
import Icon from "@ant-design/icons/lib/components/Icon";

function NavBar(){
  const { Header } = Layout;
  const { Search } = Input

  const LogoAndSearchBar = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 10px;
  `
  const SearchStyle = styled.div`
    display: flex;
  `

  return (
    <Layout className="navBar">
      <Header style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: "#25252D", padding: 0}}>
        <LogoAndSearchBar>
          <div className="logo" style={{ color: 'white' }}>
            <img src={quixalertLogo} style={{width: "38px", height: "34px", marginTop: "25px", marginLeft: "20px"}} alt="QuixAlert Logo"/>
          </div>

          <SearchStyle>
            <Search placeholder="Pesquisar" style={{marginLeft: "30px", width: '473px' }} />
          </SearchStyle>
        </LogoAndSearchBar>

        <div style={{display: "flex", justifyContent: "center", alignItems:"center"}}>
          <DropDown/>

          <div style={{display: "flex", height: "64px"}}>
            <div style={{width: "65px", display: "flex", justifyContent: "center", borderLeft: "1px solid #1D1E23", borderRight: "1px solid #1D1E23"}}>
              <BellFilled style={{fontSize: "17px", color: "white"}}/>
            </div>
            <div style={{width: "65px", display: "flex", justifyContent: "center", borderRight: "1px solid #1D1E23"}}>
              <MessageFilled style={{fontSize: "17px", color: "white"}}/>
            </div>
            <div style={{width: "65px", display: "flex", justifyContent: "center"}}>
              <ClockCircleFilled style={{fontSize: "17px", color: "white"}}/>
            </div>
          </div>
        </div>
      </Header>
    </Layout>
  )
}

export default NavBar