import React, { Component } from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
    CreateNote,
    EditNote,
    ListView,
    SideBar,
    ViewNote
} from '../../components';


class MainContainer extends Component {
    render() {
        console.log( "STATE",this.props )
        return (
            <Router>
                <div className = 'app-Container'>
                        <SideBar />
                        <Switch>
                            <Route exact path='/' component={ ListView } />
                            <Route path='/create' component={CreateNote} />
                            <Route path='/edit/:id'  component={EditNote} />
                            <Route path='/note/:id'  component={ViewNote} />
                        </Switch>
                </div>
            </Router>
        );
    }
}

export default MainContainer;












