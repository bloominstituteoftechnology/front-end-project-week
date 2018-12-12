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
    width: 48.3vw;
    min-width: 1024px;
`;

class App extends Component {
    constructor() {
        super();
        this.state = {
            notes: []
        };
    }
    componentDidMount() {
        this.get();
    }

    get() {
        axios
            .get('https://fe-notes.herokuapp.com/note/get/all')
            .then(response => {
                this.setState({ notes: response.data });
            })
            .catch(err => {
                console.log(err);
                this.get();
            });
    }

    post = data => {
        axios
            .post('https://fe-notes.herokuapp.com/note/create', data)
            .then(this.get())
            .catch(err => {
                console.log(err);
            });
    };

    update = (data, id) => {
        axios
            .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, data)
            .then(this.get())
            .catch(err => {
                console.error(err);
            });
    };

    render() {
        return (
            <Router>
                <StyledApp className="App">
                    <SideBar />
                    <Content
                        notes={this.state.notes}
                        post={this.post}
                        update={this.update}
                    />
                </StyledApp>
            </Router>
        );
    }
}

export default App;
