import React, { Component } from 'react';
import './index.css';
import { Switch, Route } from 'react-router-dom';
import CreateNote from '../CreateNote/CreateNote';
import AllNotes from '../AllNotes/AllNotes';
import SingleNoteView from '../SingleNoteView/SingleNoteView';
import EditNote from '../EditNote/EditNote'

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
                    <Route exact path='/note/get/:id' component={ SingleNoteView } />
                    <Route path='/note/edit/:id' component={ EditNote } />
                </Switch>
            </div> );
    }
}
 
export default SideArea;