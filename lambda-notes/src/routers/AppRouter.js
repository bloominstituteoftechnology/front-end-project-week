import React from 'react';
import { BrowserRouter, Route, Switch, Link, Navlink } from 'react-router-dom';
import App from '../App.js'


const AppRouter = () => {
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={App} />
            </Switch>
        </div>
    </BrowserRouter>
};

export default AppRouter;