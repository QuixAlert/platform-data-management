import React from "react"
import Icon from "@ant-design/icons";

function UserDropDown(){


  return (
  // <div style={{ display: 'flex', alignItems: "center"}}>
  //
  // </div>
    <div className= 'flex flex-col'>
      <ul className='flex flex-col gap-4'>
        <li>Meu perfil</li>
        <li>Atendidos</li>
        <li>Sair</li>
      </ul>
    </div>
  )
}


export default UserDropDown