import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/NavBar';
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Profile} from "./pages/Profile";
import {Alert} from "./components/Alert";
import {AlertState} from "./context/alert/AlertState";
import {GithubState} from "./context/github/GithubState";

function App() {
    return (
        <GithubState>
            <AlertState>
                <BrowserRouter>
                    <React.Fragment>
                        <Navbar/>
                        <div className="container pt-4">
                            <Alert alert={{text: 'test alert'}}/>
                            <Switch>
                                <Route path='/' exact component={Home}/>
                                <Route path='/about' component={About}/>
                                <Route path='/profile' component={Profile}/>
                            </Switch>
                        </div>
                    </React.Fragment>
                </BrowserRouter>
            </AlertState>
        </GithubState>

    );
}

export default App;
