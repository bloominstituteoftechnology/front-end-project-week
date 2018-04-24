import React, { Component, Fragment } from 'react';
import './App.css';
import {notes} from './Notes/notes';
import {Route} from 'react-router-dom';
import Notes from "./Components/ListView"
import Home from "./Components/home"
class App extends Component {
  constructor(){
    super();
    this.state={
      notes:[]
    };
  }
  componentDidMount(){
    this.setState({ notes: notes});
    console.log(this.state)
   }

  render() {
    console.log(this.state)
    return (

      <div className="App">
      <Route path="/" component={Home}/>
      <div className="container-styles">    
         { <Route exact path="/"
          render= {props =><Notes  notes={this.state.notes}/>}
      />}
      </div>
      </div>
    );
  }
}

export default App;
