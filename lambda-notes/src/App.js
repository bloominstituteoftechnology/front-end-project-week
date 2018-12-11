import React, { Component } from 'react';
import SideBar from './components/SideBar';
import Content from './components/Content';
import styled from 'styled-components';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';

const StyledApp = styled.div`
    border: 2px grey solid;
    display: flex;
    flex-direction: row;
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
        console.log(this.state.notes);
        return (
            <Router>
                <StyledApp className="App">
                    <SideBar />
                    <Content notes={this.state.notes} />
                </StyledApp>
            </Router>
        );
    }
}

export default App;
