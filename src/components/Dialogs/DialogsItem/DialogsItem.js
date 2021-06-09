import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

function DialogItem(props) {
    const url = `/dialogs/${props.id}`
    return (
        <div className={s.dialog + '' + s.active}>
            <NavLink to={url}>{props.name}</NavLink>
        </div>
    )
}


export default DialogItem;