import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi! How are you?', likesCount: 120},
                {id: 2, message: 'It\'s my first post.', likesCount: 100500},
            ],
            newPostText: '',
        },
        dialogsPage: {
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
            newMessageBody: '',
        }
    },
    _callSubscriber() {

    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;
