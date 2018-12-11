import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";
import { NavLink, Route } from "react-router-dom";
import MyNotes from "./components/myNotes";
import NoteForm from "./components/noteForm";
import ViewNote from "./components/view";
class App extends Component {
  render() {
    return (
      <AppContainer>
        <nav className="main-nav">
          <h1>Lambda Notes</h1>
          <NavLink exact to="/myNotes">
            View Notes
          </NavLink>
          <NavLink to="/createNote">Create New Note</NavLink>
        </nav>
        <div className="main-page">
          <Route exact path="/myNotes" component={MyNotes} />
          <Route path="/createNote" component={NoteForm} />
          <Route path="/myNotes/:id" component={ViewNote} />
        </div>
      </AppContainer>
    );
  }
}
const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  nav {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: lightgray;
    padding: 20px;
    box-sizing: border-box;
    font-size: 25px;
    line-height: 30px;
    border-right: 2px solid black;
    h1 {
      margin: 0 0 20px;
    }
    a {
      text-decoration: underline;
      font-size: 16px;
      font-weight: bold;
      display: flex;
      justify-content: center;
      padding: 7px;
      background: yellow;
      color: black;
      margin: 10px 0;
      width: 90%;
      border: 1px solid black;
      &:visited {
        color: black;
      }
      &:hover {
        background: white;
        color: black;
      }
      &.active {
        border: 2px solid white;
      }
    }
  }
  .main-page {
    padding: 20px;
  }
`;
export default App;
