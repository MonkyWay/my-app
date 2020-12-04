import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogsReducer";

const Dialogs = (props) => {
    let dialogsElement = props.state.dialogs.map(d => <DialogItem name = {d.name}
                                                                  id = {d.id} />);
    let messagesElements = props.state.messages.map(m => <Message message = {m.message}
                                                                  id = {m.id} />);
    let newMessageBody = props.state.newMessageBody;

    let addMessageClick = () => {
        props.dispatch(sendMessageActionCreator());
    }

    let onMessageTextChange = (e) => {
        let body = e.target.value;
        let action = updateNewMessageBodyActionCreator(body);
        props.dispatch(action);
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
                        <button onClick = {addMessageClick}>Send message</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;