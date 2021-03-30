import React from 'react';
import './App.css';
import './Components/null.css';
import Nav from "./Components/Nav/Nav";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import Login from "./Components/Login/Login";
import UsersContainer from "./Components/Users/UsersContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Preloader from "./Components/common/Preloader/Preloader";
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import("./Components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import ("./Components/Profile/ProfileContainer"));

class App extends React.Component {
    catchAllUnhandledErrors = (reason, promise) => {
        alert("Some error occurred");
        //console.log(promiseRejectionEvent);
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }

        return (
            <div className = 'app-wrapper'>
                <HeaderContainer />
                <Nav />
                <div className = 'app-wrapper-content'>
                    <Switch>
                        <Route exact
                               path = '/'
                               render = {() => <Redirect to = {"/profile"} />} />
                        <Route path = '/profile/:userId?'
                               render = {withSuspense(ProfileContainer)} />
                        <Route path = '/dialogs'
                               render = {withSuspense(DialogsContainer)} />
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
                    </Switch>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const SocialJSApp = (props) => {
    return <BrowserRouter>
        <Provider store = {store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>
}

export default SocialJSApp;
