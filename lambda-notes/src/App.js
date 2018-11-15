import React, { Component } from 'react';
import axios from 'axios';
import NotesList from './components/NotesList.js';
import Sidebar from './components/Sidebar.js';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import SingleNote from './components/SingleNote.js';

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
                <Route exact path="/" render={()    =>  <NotesList notes={this.state.notes} />} />
                <Route path="/note/:id" render={(props)  =>  <SingleNote notes={this.state.notes} {...props}/>} />
            </AppContainer>
        );
    }
}

export default App;
