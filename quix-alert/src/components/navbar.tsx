import React from "react";

import { Layout, Menu, Input  } from "antd";
import {BellOutlined, FieldTimeOutlined, WechatOutlined} from "@ant-design/icons";
import styled from "styled-components";

function Navbar(){
  const { Header } = Layout;
  const { Search } = Input;

  const LogoAndSearchBar = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 10px;
  `;
  const SearchStyle = styled.div`
    display: flex;
  `;

  return (
    <Layout className="layout">
      <Header style={{ display: "flex", justifyContent: "space-between" }}>
        <LogoAndSearchBar>
          <div className="logo" style={{ color: "white" }}>
            <img src="../assets/images/QuixAlert-logo-white.png"/>
          </div>

          <SearchStyle>
            <Search placeholder="Pesquisar" enterButton style={{ width: "500px" }}/>
            {/*deixar relativo*/}
          </SearchStyle>
        </LogoAndSearchBar>

        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon= {<BellOutlined/> }/>
          <Menu.Item key="2" icon={<WechatOutlined />}/>
          <Menu.Item key="3" icon={<FieldTimeOutlined />}/>
        </Menu>
      </Header>
    </Layout>
  );
}

export default Navbar;

