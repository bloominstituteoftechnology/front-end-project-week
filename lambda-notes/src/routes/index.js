import React from 'react';
import { Route, Switch } from 'react-router';
import Navigation from '../components/Navigation';
import ListView from '../components/ListView';

const routes = (
    <div className="App-container">
        <div className="App">
        <Navigation />
        <Switch>
            <Route exact path="/" component={ListView} />
        </Switch>
        </div>
    </div>
);

export default routes;
