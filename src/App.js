import React from 'react';
import './App.css';
import './Components/null.css';
import Nav from "./Components/Nav/Nav";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {Route, withRouter} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./Components/common/Preloader/Preloader";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if(!this.props.initialized){
            return <Preloader />
        }

        return (
            <div className = 'app-wrapper'>
                <HeaderContainer />
                <Nav />
                <div className = 'app-wrapper-content'>
                    <Route path = '/profile/:userId?'
                           render = {() => <ProfileContainer />} />
                    <Route path = '/dialogs'
                           render = {() => <DialogsContainer />} />
                    <Route path = '/news'
                           render = {() => <News />} />
                    <Route path = '/music'
                           render = {() => <Music />} />
                    <Route path = '/users'
                           render = {() => <UsersContainer />} />
                    <Route path = '/settings'
                           render = {() => <Settings />} />
                    <Route path = '/login'
                           render = {() => <Login />} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized : state.app.initialized,
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
