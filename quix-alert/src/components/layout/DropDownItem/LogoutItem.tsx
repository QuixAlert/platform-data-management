import React from "react";
import DropDownItemModel from "../../../models/DropDownItemModel";
import {useAuth} from "../../../pages/LoginPage/AuthProvider";

function LogoutItem(props: DropDownItemModel){
    let {logout} = useAuth()

    return (
        <li className="dropdown-item">
            {props.icon}
            <a>{props.text}</a>
        </li>
    );
}


export default LogoutItem