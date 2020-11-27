import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi! How are you?', likesCount: 120},
            {id: 2, message: 'It\'s my first post.', likesCount: 100500},
        ],
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
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {id: 5, message: postMessage, likesCount: 0};
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
};

export default state;