import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const Dialog = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={classes.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

const Dialogs = () => {
    let dialogs = [
        {id: 1, name: 'Helen'},
        {id: 2, name: 'Gleb'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'John'},
        {id: 5, name: 'Albert'}
    ]

    let messages = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'What\'s up?'},
        {id: 3, message: 'Love you'},
        {id: 4, message: 'It\'s plesure'},
    ]

    let dialogsElement = dialogs.map(d => <Dialog name={d.name} id={d.id}/>);
    let messagesElements = messages.map(m => <Message message={m.message} id={m.id}/>);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )

}

export default Dialogs;