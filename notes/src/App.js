import React, { Component } from 'react';
import axios from 'axios';
import NoteList from './components/NoteList';
import SideBar from './components/SideBar';
import CreateNote from './components/CreateNote'
import LinkedNote from './components/LinkedNote';

import styled from 'styled-components';
import { Route } from "react-router-dom";

const BGColor = styled.div`
  background-color: #ebebeb;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1;
  overflow: auto;
`;

class App extends Component {

  constructor() {
    super();
    this.state = {
      notesData: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/notes")
      .then(response => {
        this.setState({notesData: response.data });
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleData = data => this.setState({ notesData: data });

  render() {
    console.log(this.state)
    return (
      <BGColor>
          <Route
            exact
            path="/"
            render={props => (
            <div>
              <NoteList
                {...props}
                notes={this.state.notesData}
              />
            </div>
            )}
          />

        <Route
          exact
          path="/create"
          render={props => (
          <div>
            <CreateNote
              {...props}
              handleData={this.handleData}
            />
          </div>
          )}
        />


        <Route
          exact
          path="/notes/:id"
          render={props => (
          <div>
            <LinkedNote
              {...props}
              handleData={this.handleData}
            />
          </div>
          )}
        />

        <SideBar />
      </BGColor>
    );
  }
}

export default App;
