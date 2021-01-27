import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength100 = maxLengthCreator(100);

const Dialogs = (props) => {
    let dialogsElement = props.dialogsPage.dialogs.map(d => <DialogItem name = {d.name}
                                                                        key = {d.id}
                                                                        id = {d.id} />);
    let messagesElements = props.dialogsPage.messages.map(m => <Message message = {m.message}
                                                                        key = {m.id}
                                                                        id = {m.id} />);

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    return (
        <div className = {classes.dialogs}>
            <div className = {classes.dialogsItems}>
                {dialogsElement}
            </div>
            <div className = {classes.messages}>
                <div>{messagesElements}</div>
                <AddMessageReduxForm onSubmit = {addNewMessage} />
            </div>

        </div>
    )
}

const AddMessageForm = (props) => {
    return <div>
        <form onSubmit = {props.handleSubmit}>
            <div>
                <Field validate = {[required, maxLength100]}
                       component = {Textarea}
                       name = "newMessageBody"
                       placeholder = "Enter your message" />
            </div>
            <div>
                <button>Send message</button>
            </div>
        </form>
    </div>
}

const AddMessageReduxForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;