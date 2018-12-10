import React, { Component } from 'react';
import './App.css';
import SideBar from './components/SideBar';
import Content from './components/Content';
import styled from 'styled-components';
import axios from 'axios';

const StyledApp = styled.div`
    border: 2px grey solid;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 48.2%;
`;

class App extends Component {
    constructor() {
        super();
        this.state = {
            notes: []
        };
    }
    componentDidMount() {
        axios
            .get('https://fe-notes.herokuapp.com/note/get/all')
            .then(response => {
                console.log('response: ', response);
                this.setState({ notes: response.data });
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <StyledApp className="App">
                <SideBar />
                <Content notes={this.state.notes} />
            </StyledApp>
        );
    }
}

export default App;
