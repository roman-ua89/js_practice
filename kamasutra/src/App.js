import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

import {Route, Router} from 'react-router-dom';
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import img from "./media/ava.png";

function App(props) {

    return (
        <div className="app-wrapper">
            <Header/>
            <div className={'column-outer clearfix'}>
                <div className={'column-left'}>
                    <Navbar/>
                </div>
                <div className={'column-right'}>
                    <Route path={'/dialogs'}
                           render={() => <Dialogs
                                dispatch={props.dispatch}
                               state={props.state.dialogsPage} />}
                    />

                    <Route path={'/profile'}
                           render={() => <Profile
                               profilePage={props.state.profilePage}
                               dispatch={props.dispatch}
                           />} />

                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                </div>
            </div>
        </div>
    );
}

export default App;
