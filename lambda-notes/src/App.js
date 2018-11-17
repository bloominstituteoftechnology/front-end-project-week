import React, { Component } from 'react';
import NotesList from './components/NotesList.js';
import Sidebar from './components/Sidebar.js';
import styled from 'styled-components';
import { Route, withRouter } from 'react-router-dom';
import SingleNote from './components/SingleNote.js';
import NoteEdit from './components/NoteEdit.js';
import NoteCreate from './components/NoteCreate.js'
import { connect } from "react-redux";
import { fetch } from "./actions";

const AppContainer = styled.div`
    display: flex;
    background: whitesmoke;
    height: 100%;
    width: 1000px;
    margin: 0 auto;
`

class App extends Component {
    constructor(props)  {
        super(props);
        this.state = {
            notes: [],
        }
    }

    componentDidMount() {
        this.props.fetch();
    }

    render() {
        return (
            <AppContainer>
                <Route path="/" render={(props)  =>  <Sidebar {...props} />} />
                <Route exact path="/" render={()    =>  <NotesList notes={this.props.notes} getNotes={this.props.fetch}/>} />
                <Route path="/note/:id" render={(props)  =>  <SingleNote notes={this.props.notes} getNotes={this.props.fetch} {...props}/>} />
                <Route path="/edit/:id" render={(props) =>  <NoteEdit relID={this.props.relID} notes={this.props.notes} getNotes={this.props.fetch} {...props}/>} />
                <Route path="/create" render={(props) =>  <NoteCreate relID={this.props.relID} getNotes={this.props.fetch} {...props}/>} />
            </AppContainer>
        );
    }
}

const mapStateToProps   =   state   =>  {
    return {
        notes: state.noteReducer.notes,
        fetching: state.noteReducer.fetching,
        error: state.noteReducer.error,
        relID: state.noteReducer.relID,
    }
}
export default withRouter(connect(
  mapStateToProps,
  { fetch }
)(App));
