import React, { Component } from 'react';
import './index.css';
import { Switch, Route } from 'react-router-dom';
import CreateNote from '../CreateNote/CreateNote';
import AllNotes from '../AllNotes/AllNotes';

class SideArea extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='mainArea'>
                <Switch>
                    <Route exact path='/' component={ AllNotes } />
                    <Route path='/create' component={ CreateNote } />
                </Switch>
            </div> );
    }
}
 
export default SideArea;