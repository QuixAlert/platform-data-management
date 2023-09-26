import React, {useState} from "react"
import DropDownItem from "./DropDownItem";
import styled from "styled-components";
import {DropDownMenuItems} from "../../styles";
// @ts-ignore
import userImg from '../../assets/images/user.jpeg'
import {ArrowDownOutlined, FormOutlined, LogoutOutlined, UserOutlined} from "@ant-design/icons";

function DropDown(){
  const [open, setOpen] = useState(false)


  return (
    <div>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <img style={{width:'40px', borderRadius:'50%'}} src={userImg}/>
        <div>
          <a style={{color:"white", fontWeight:"bold"}}>João Victor</a>
          {/*<br/>*/}
          <a style={{color:"white", fontSize:10}}>Administrador</a>
        </div>
        <ArrowDownOutlined onClick={() => setOpen(!open)} style={{color: "white"}}/>
      </div>
      <DropDownMenuItems className={`${open? 'active' : 'inactive'}`}>
        <ul style={{listStyleType:"none", padding:20}}>
          <DropDownItem icon={<UserOutlined />} text="Meu perfil"/>
          <DropDownItem icon={<FormOutlined />} text="Atendidos"/>
          <DropDownItem icon={<LogoutOutlined />} text="Sair"/>
        </ul>
      </DropDownMenuItems>
    </div>
  )
}

export default DropDown