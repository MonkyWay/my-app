const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Helen'},
        {id: 2, name: 'Gleb'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'John'},
        {id: 5, name: 'Albert'}
    ],
    messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'What\'s up?'},
        {id: 3, message: 'Love you'},
        {id: 4, message: 'It\'s plesure'},
    ],
}

const dialogsReducer = (state = initialState, action) => {
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

export const sendMessageActionCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;