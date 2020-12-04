import React from 'react';
import './App.css';
import './Components/null.css';
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className = 'app-wrapper'>
                <Header />
                <Nav />
                <div className = 'app-wrapper-content'>
                    <Route path = '/profile'
                           render = {() => <Profile profilePage = {props.state.profilePage}
                                                    dispatch={props.dispatch}/>} />
                    <Route path = '/dialogs'
                           render = {() => <Dialogs state = {props.state.dialogsPage} dispatch={props.dispatch} />} />
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
