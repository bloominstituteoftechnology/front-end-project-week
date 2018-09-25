import React, { Component } from 'react';
import axios from 'axios';
import NoteList from './components/NoteList';
import SideBar from './components/SideBar';
import CreateNote from './components/CreateNote'
import LinkedNote from './components/LinkedNote';
import Authenticate from './components/Authenticate';

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
      inputText: '',
      boolVal: false,
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

  searchNotes = e => {
    e.preventDefault();
    let newState = {...this.state};
    // console.log(newState)

    const filter = newState.notesData.filter((note) => note.author === newState.inputText);

    for (let i = 0; i < newState.notesData.length; i++){
      if (newState.inputText === newState.notesData[i].author){
        newState.boolVal = true;
      }
    }

    if (newState.boolVal === false){
      axios.get("http://localhost:5000/notes").then(response => {this.setState({notesData: response.data, });})
    }

    if (newState.boolVal === true){
      this.setState({
        notesData: filter,
        inputText: '',
      })
    }
  }

  handleInput = event => {
    this.setState({
      inputText: event.target.value,
    });
  };



  handleData = data => this.setState({ notesData: data });

  render() {

    return (

      <BGColor>

          <Route
            exact
            path="/notes"
            render={props => (
            <div>
              <NoteList
                {...props}
                notes={this.state.notesData}
                handleInput={this.handleInput}
                searchNotes={this.searchNotes}
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
        <Route path="/" component={SideBar} />
      </BGColor>
    );
  }
}

export default Authenticate(App);
