import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import NoteCard from "./components/notes/NoteCard";
import Dashboard from "./components/dashboard/Dashboard";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import CreateNote from "./components/notes/CreateNote";
import DeleteModal from "./components/notes/DeleteModal";
import EditNote from "./components/notes/EditNote";
import NoteList from "./components/notes/NoteList";
import Note from "./components/notes/Note";
import styled from 'styled-components';

const DashBoard = styled.div`
display: flex; 
flex-direction: row;
max-width:  1040px;
height: 100%;
`;

const Create = styled.div`
justify-content: flex-start
`;


class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
      <DashBoard>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/notes/" component={NoteList} />
          <Route
            path="/note/:id"
            render={props => {
              return <Note {...props} />;
            }}
          />
          <Route
            path="/edit/:id"
            render={props => {
              return <EditNote {...props} />;
            }}
          />
          <Route path="/login" component={Signin} />
          <Route path="/signup" component={Signup} />
         <Create ><Route path="/create" component={CreateNote} /></Create>
          <Route
            path="/delete/:id/"
            render={props => {
              return <DeleteModal {...props} />;
            }}
          />
        </Switch>
        </DashBoard>
      </div>
    );
  }
}

export default App;
