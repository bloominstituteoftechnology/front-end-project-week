import React, { Component } from 'react';
import axios from 'axios';

import NoteList from './components/NoteInfo/NoteList';
import SideBar from './components/SideBar/SideBar';
import CreateNote from './components/NoteInfo/CreateNote'
import LinkedNote from './components/NoteInfo/LinkedNote';
import Authenticate from './components/Authentication/Authenticate';
import Weather from './components/Weather/Weather'

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

const City = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 4rem;
  margin-left: 15%;
`;

class App extends Component {

  constructor() {
    super();
    this.state = {
      notesData: [],
      inputText: '',
      boolVal: false,
      topNews: [],
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

    axios
      .get("https://newsapi.org/v2/top-headlines?country=us&apiKey=fe1ec32653734ee8895f2371139ed9da")
      .then(response => {

        let topTen = [];

        for (let i = 0; i < 3; i++){
          topTen.push(response.data.articles[i])
        }

        console.log(topTen)

        this.setState({topNews: topTen})
      })
      .catch(err => {
        console.log(err)
      })
  }

  searchNotes = e => {
    e.preventDefault();
    let newState = {...this.state};

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

  swapNotes = (fromNote, toNote) => {
    let notes = this.state.notesData.slice();
    let fromIndex = -1;
    let toIndex = -1;

    for (let i = 0; i < notes.length; i++) {
      if (notes[i].id === fromNote.id){
        fromIndex = i;
      }
      if (notes[i].id === toNote.id) {
        toIndex = i;
      }
    }

    if (fromIndex != -1 && toIndex != -1) {
      let {fromId, ...fromRest } = notes[fromIndex]
      let { toId, ...toRest } = notes[toIndex];
      notes[fromIndex] = { id: fromNote.id, ...toRest };
      notes[toIndex] = {id: toNote.id, ...fromRest };
    }

    this.setState({notesData: notes})
  }

  handleDragStart = data => event => {
    let fromNote = JSON.stringify({ id: data.id})
    event.dataTransfer.setData("dragContent", fromNote);
  }

  handleDragOver = data => event => {
    event.preventDefault();
    return false;
  }

  handleDrop = data => event => {
    event.preventDefault();

    let fromNote = JSON.parse(event.dataTransfer.getData("dragContent"));
    let toNote = { id: data.id };

    this.swapNotes(fromNote, toNote);
    return false;
  };


  render() {

    return (

      <BGColor>

          <Route
            exact
            path="/notes"
            render={props => (
            <div>
              <City>{this.state.city}</City>
              <Weather
                {...props}
              />
            </div>
            )}
          />

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
                handleDragStart={this.handleDragStart}
                handleDragOver={this.handleDragOver}
                handleDrop={this.handleDrop}
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

        <Route
          path="/"
          render={props => (
          <div>
            <SideBar
              {...props}
              news={this.state.topNews}
            />
          </div>
          )}
        />




      </BGColor>
    );
  }
}

export default Authenticate(App);















