import React, { Component } from 'react';
import './App.css';
import {Route} from "react-router-dom";
import SideBar from "./components/SideBar"
import  Notes from "./components/Notes";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes:[
      {
        id: 1,
        title: "note2",
        body: "Test Test Test Test"
      },
      {
        id: 2,
        title: "note1",
        body: "Test Test Test Test"
      },
      {
        id: 3,
        title: "note3",
        body: "Test Test Test Test"
      },
      {
        id: 4,
        title: "note4",
        body: "Test Test Test Test"
      }
    ]
    }
  }
  render() {
    return (
      <div className="App">
        <SideBar/>
        <Notes notes={this.state.notes}/>
      {/* <Route exact path ="/" component = {Notes}/>
      <Route path = "/:id" render ={(props) =>{
        return(<Note {...props}/>) */}
      </div>
    );
  }
}

export default App;
