import React, {useState} from "react"
import DropDownItem from "../DropDownItem/DropDownItem";
import {DropDownMenuItems} from "../../../styles";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import userImg from "../../../assets/images/user.jpeg"
import {DownOutlined, FormOutlined, LogoutOutlined, UserOutlined} from "@ant-design/icons";



function DropDown(){
  const [open, setOpen] = useState(false)

  return (
    <div>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", gap: "15px"}}>
        <img style={{width:'50px', borderRadius:'50%', border: "1px solid white"}} src={userImg}/>
        <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
          <div style={{color: "white", fontWeight: "bold", marginBottom: "5px", lineHeight: 1}}>João Victor</div>
          <div style={{color: "white", fontSize: 10, lineHeight: 1}}>Administrador</div>
        </div>
          <DownOutlined onClick={() => setOpen(!open)} style={{color: "white", marginRight: "5px" }}/>
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