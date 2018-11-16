import React, { Component } from 'react';
import axios from 'axios';
import NotesList from './components/NotesList.js';
import Sidebar from './components/Sidebar.js';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import SingleNote from './components/SingleNote.js';
import NoteEdit from './components/NoteEdit.js';
import NoteCreate from './components/NoteCreate.js'

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
        this.getNotes();
    }

    getNotes = ()   =>  {
        axios.get("https://fe-notes.herokuapp.com/note/get/all")
        .then(res    =>  {
            this.setState((state)   =>  ({
                notes: res.data,
            }))
        })
    }

    render() {
        return (
            <AppContainer>
                <Sidebar />
                <Route exact path="/" render={()    =>  <NotesList notes={this.state.notes} getNotes={this.getNotes}/>} />
                <Route path="/note/:id" render={(props)  =>  <SingleNote notes={this.state.notes} getNotes={this.getNotes} {...props}/>} />
                <Route path="/edit/:id" render={(props) =>  <NoteEdit notes={this.state.notes} getNotes={this.getNotes} {...props}/>} />
                <Route path="/create" render={(props) =>  <NoteCreate getNotes={this.getNotes} {...props}/>} />
            </AppContainer>
        );
    }
}

export default App;
