import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const postsData = [
    {id: 1, message: 'Hi, how are you?', likesCounter: 12},
    {id: 2, message: 'It is my first post', likesCounter: 15},
    {id: 2, message: 'You are awesome', likesCounter: 15},
    {id: 2, message: 'Heh', likesCounter: 15},
];

const dialogs = [
    {id: 1, name: 'Artemii'},
    {id: 2, name: 'Andrei'},
    {id: 3, name: 'Alexander'},
    {id: 4, name: 'Olya'},
];
const message = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you'},
    {id: 3, message: 'I am fine'},
    {id: 4, message: 'Nice'},
];


ReactDOM.render(
    <React.StrictMode>
        <App postsData={postsData} dialogs={dialogs} message={message}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
