import React from 'react';
import './App.css';
import './Components/null.css';
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";


const App = (props) => {
    debugger
    return (
        <BrowserRouter>
            <div className = 'app-wrapper'>
                <Header />
                <Nav />
                <div className = 'app-wrapper-content'>
                    <Route path = '/profile'
                           render = {() => <Profile/>} />
                    <Route path = '/dialogs'
                           render = {() => <DialogsContainer/>} />
                    <Route path = '/news'
                           render = {() => <News />} />
                    <Route path = '/music'
                           render = {() => <Music />} />
                    <Route path = '/settings'
                           render = {() => <Settings />} />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
