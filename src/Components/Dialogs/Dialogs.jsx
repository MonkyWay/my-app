import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsElement = props.state.dialogs.map(d => <DialogItem name = {d.name}
                                                                  id = {d.id} />);
    let messagesElements = props.state.messages.map(m => <Message message = {m.message}
                                                                  id = {m.id} />);

    let textNewMessage = React.createRef();
    let addMessage = () => {
        let text = textNewMessage.current.value;
        alert(text);
    }

    return (
        <div className = {classes.dialogs}>
            <div className = {classes.dialogsItems}>
                {dialogsElement}
            </div>
            <div className = {classes.messages}>
                {messagesElements}
                <div>
                    <div>
                    <textarea ref = {textNewMessage}
                              placeholder = 'Введите сообщение'>
                    </textarea>
                    </div>
                    <button onClick = {addMessage}>Отправить</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;