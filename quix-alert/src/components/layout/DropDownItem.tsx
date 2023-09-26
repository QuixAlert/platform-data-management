import React from "react"
import Icon, {ArrowDownOutlined} from "@ant-design/icons";
import {Card} from "antd";
import DropDownItemModel from '../../models/DropDownItemModel'

function DropDownItem(props: DropDownItemModel){
  return (
  <li className="dropDownItem" style={{padding:'0px'}}>
    <div style={{display:"flex", justifyContent:"start"}}>
      {props.icon}
      <a style={{marginLeft:10}}>{props.text}</a>
    </div>
  </li>
  )
}


export default DropDownItem