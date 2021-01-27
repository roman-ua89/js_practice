import React from 'react';
import classes from './Dialogs.module.css';
import img from './../../media/ava.png'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {updateNewMessageBodyCreator, sendMessageCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
// debugger
    let dialogElements = props.state.dialogsData.map(dialog => <DialogItem key={dialog.name} name={dialog.name} id={dialog.id}/>)
    let messageElements = props.state.messageData.map(msg => <Message key={msg.id} avatar={msg.avatar} userName={msg.userName} userText={msg.message} />)

    let newMessageBody = props.state.newMessageBody;

    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <div className={classes.dialogContainer + ' clearfix'}>
            <div className={classes.dialogContainerLeft}>
                <ul className={classes.dialogsUsersList}>
                    {dialogElements}
                </ul>
            </div>
            <div className={classes.dialogContainerRight}>
                <div>{messageElements}</div>
                <div>
                    <div>
                        <div>
                            <textarea
                            onChange={ onNewMessageChange }
                            value={newMessageBody}
                            placeholder={'Enter your message'}></textarea>
                        </div>
                        <div><button onClick={ onSendMessageClick }>Send</button></div>
                    </div>
                    <div></div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;