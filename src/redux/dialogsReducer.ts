const SEND_MESSAGE = 'SEND-MESSAGE';

type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}

let initialState = {
    dialogs: [
        {id: 1, name: 'Helen'},
        {id: 2, name: 'Gleb'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'John'},
        {id: 5, name: 'Albert'}
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'What\'s up?'},
        {id: 3, message: 'Love you'},
        {id: 4, message: 'It\'s plesure'},
    ] as Array<MessageType>
}

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any):InitialStateType => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 5, message: body}]
            };
        default:
            return state;
    }
}

type SendMessageCreatorActionType = {
    type: typeof SEND_MESSAGE
    newMessageBody: string
}

export const sendMessageActionCreator = (newMessageBody: string): SendMessageCreatorActionType => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;
