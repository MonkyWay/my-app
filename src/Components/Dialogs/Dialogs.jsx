import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {
    let dialogsElement = props.dialogsPage.dialogs.map(d => <DialogItem name = {d.name}
                                                                        key = {d.id}
                                                                        id = {d.id} />);
    let messagesElements = props.dialogsPage.messages.map(m => <Message message = {m.message}
                                                                        key = {m.id}
                                                                        id = {m.id} />);
    let newMessageBody = props.dialogsPage.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onMessageTextChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }


    return (
        <div className = {classes.dialogs}>
            <div className = {classes.dialogsItems}>
                {dialogsElement}
            </div>
            <div className = {classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                    <textarea onChange = {onMessageTextChange}
                              value = {newMessageBody}
                              placeholder = 'Enter your message' />
                    </div>
                    <div>
                        <button onClick = {onSendMessageClick}>Send message</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;