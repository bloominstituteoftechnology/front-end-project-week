import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import SideBar from './components/SideBar';
import ListView from './components/ListView';
import CreateNote from './components/CreateNote';
import NoteView from './components/NoteView';
import EditNoteView from './components/EditNoteView';
import NotFound from './components/NotFound';
import SearchedListView from './components/SearchedListView';
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';

import RequireAuth from './HOC/RequireAuth';

class App extends Component {
    state = {
        test: 'the props is begin passed',
    };

    render() {
        return (
            <Router>
                <div className="App">
                    <Route path="/" component={SideBar} />
                    <Switch>
                        <Route path="/" component={RequireAuth(ListView)} exact />
                        {/* <Route path="/register" component={Register} exact /> */}
                        <Route path="/login" component={Login} exact />
                        <Route path="/logout" component={Logout} exact />
                        <Route path="/register" component={Register} exact />
                        <Route path="/new" component={RequireAuth(CreateNote)} exact />
                        <Route path="/view/:id" component={RequireAuth(NoteView)} exact />
                        <Route
                            path="/edit/:id"
                            component={RequireAuth(EditNoteView)}
                            exact
                        />
                        <Route path="/delete/:id" component={RequireAuth(ListView)} exact />
                        <Route
                            path="/search/:terms"
                            component={RequireAuth(SearchedListView)}
                            exact
                        />
                        <Route path="/404" component={NotFound} exact />
                        <Redirect to="/404" />
                    </Switch>
                </div>
            </Router>
        );
    }
}

const mapStateToProps = state => {
    return {
        deleting: state.deleting,
    };
};

export default connect(mapStateToProps)(App);
