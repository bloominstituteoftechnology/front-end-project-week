import React, { Component } from 'react';
import axios from 'axios';
import NotesList from './components/NotesList.js';
import Sidebar from './components/Sidebar.js';
import styled from 'styled-components';

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
                <NotesList notes={this.state.notes}/>
            </AppContainer>
        );
    }
}

export default App;
