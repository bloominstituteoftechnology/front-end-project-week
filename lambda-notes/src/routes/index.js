import React from 'react';
import { Route, Switch } from 'react-router';
import Navigation from '../components/Navigation';
import ListView from '../components/ListView';
import Note from '../components/Note';
import CreateView from '../components/CreateView';
import EditView from '../components/EditView';
import DeleteModal from '../components/DeleteModal';

const Routes = (
    <div className="App-container">
        <div className="App">
        <Navigation />
        <Switch>
            <Route exact path="/" component={ListView} />
            <Route path="/create" component={CreateView} />
            <Route path="/note/:id" component={Note} />
            <Route path="/edit/:id" component={EditView} />
            <Route path="/delete/:id" component={DeleteModal} />
        </Switch>
        </div>
    </div>
);

export default Routes;
