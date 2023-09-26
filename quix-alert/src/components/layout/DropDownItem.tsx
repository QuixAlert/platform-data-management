import React from "react"
import Icon, {ArrowDownOutlined} from "@ant-design/icons";
import {Card} from "antd";
import DropDownItemModel from '../../models/DropDownItemModel'

function DropDownItem(props: DropDownItemModel){
  return (
  <li className="dropDownItem">
    <img src={props.img}/>
    <a>{props.text}</a>
  </li>
  )
}


export default DropDownItem