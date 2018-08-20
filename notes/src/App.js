import React, { Component } from 'react';
import Menu from './components/menu';
import Notes from './components/notes';
import NewNote from './components/newnote';
import {Route} from 'react-router-dom';
import dummydata from './dummydata';
import './CSS/listview.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: dummydata,
      newtitle: "",
      newbody: "",
      id: null,
    }
  }

  noteInput = (event) => {
    this.setState({[event.target.name]: event.target.value})
    }
  
   noteSubmit = () => {
    let newID = this.state.notes[(this.state.notes.length-1)].id;
    this.setState({id: newID}, function () {
      let notes = this.state.notes.slice();
      let id = this.state.id;
      if(this.state.newtitle !== "" || this.state.newbody !== ""){
        id++
      notes.push({
        id: id,
        title: this.state.newtitle,
        text: this.state.newbody
        })
      this.setState({notes, newtitle: "", newbody: "", id})}
      });
   }
  
  render() {
    return (
      <div className="page">
        <Menu />
        <Route exact path="/" render={(props) => <Notes {...props} notes={this.state.notes}/>}/>
        <Route exact path="/new" render={(props) => <NewNote {...props} noteInput={this.noteInput} noteSubmit={this.noteSubmit} />}/>
      </div>
    );
  }
}

export default App;
