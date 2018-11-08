import React, { Component } from 'react';
// import SideBar from './SideBar';
import ListView from './ListView';
import NoteView from './NoteView';
import CreateNote from  './CreateNote';
import EditNote from './EditNote';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        notesArray: state
    }
}

class MainContent extends Component {
    render () {
        return (
            <div className= 'main-container'>
               {/* <ListView notesArray = {this.props.notesArray} /> */}
                <Switch>
                    <Route exact path='/' exact component={ListView} />
                    <Route exact path='/note/get/:id' exact component={NoteView} />
                    <Route exact path='/note/create' exact component={CreateNote} />
                    <Route exact path='/edit/:id' exact component={EditNote} />
                </Switch>
            </div>
        )
    }
}

export default connect(mapStateToProps)(MainContent);