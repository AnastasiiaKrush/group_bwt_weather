import React from 'react';
import {hot} from 'react-hot-loader';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

import FeedbackCreate from '../../pages/FeedbackCreate';
import Register from '../../pages/Register';
import Weather from '../../pages/Weather';
import ListOfFeedback from '../../pages/ListOfFeedback';

import './app.css';

function App() {
    return (
        <BrowserRouter>
            <div className="ui container">
                <Menu stackable>
                    <Menu.Item as={Link} to="/register">
                        <i className="thumbs up outline icon"></i>Registration
                    </Menu.Item>

                    <Menu.Item as={Link} to="/weather">
                        <i className="thumbs up outline icon"></i>Weather
                    </Menu.Item>

                    <Menu.Item as={Link} to="/feedback/create">
                        <i className="thumbs up outline icon"></i>Give feedback
                    </Menu.Item>

                    <Menu.Item as={Link} to="/feedback">
                        <i className="thumbs up outline icon"></i>List of feedback
                    </Menu.Item>
                </Menu>
                <Switch>
                    <Route exact path="/register" component={ Register } />
                    <Route exact path="/weather" component={ Weather } />
                    <Route exact path="/feedback/create" component={ FeedbackCreate } />
                    <Route exact path="/feedback" component={ ListOfFeedback } />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default hot(module)(App);
