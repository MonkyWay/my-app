import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: 'Hi! How are you?', likesCount: 120},
    {id: 2, message: 'It\'s my first post.', likesCount: 100500},
]

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

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

