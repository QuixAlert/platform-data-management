import React, {useState} from "react"

import DropDownItem from "../DropDownItem/DropDownItem";

import userImg from "../../../assets/images/user.jpeg"

import {DownOutlined, FormOutlined, LogoutOutlined, UserOutlined} from "@ant-design/icons";

import "./styles.css"

function DropDown(){
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="user-menu" >
        <img className="user-image" src={userImg}/>
        <div className="user-details">
          <div className="user-name" >Phablo Gabriel</div>
          <div className="user-role" >Administrador</div>
        </div>

        <DownOutlined className="arrow-item" onClick={() => setOpen(!open)} />
      </div>
      <ul className={`dropdown-container ${open? ' active' : ' inactive'}`} >
        <DropDownItem icon={<UserOutlined />} text="Meu perfil"/>
        <DropDownItem icon={<FormOutlined />} text="Atendidos"/>
        <DropDownItem icon={<LogoutOutlined />} text="Sair"/>
      </ul>
    </div>
  )
}

export default DropDown