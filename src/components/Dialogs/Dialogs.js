import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";




function Dialogs({dialogs, message}) {


    let dialogsElement = dialogs.map(d =>
        <DialogItem name={d.name} id={d.id}/>
    )



    let messagesElement = message.map(m =>
        <Message message={m.message}/>
    )
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElement }
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    )
}

export default Dialogs;