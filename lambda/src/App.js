import React, { Component } from 'react';
//importing Router
import { Route, Link } from 'react-router-dom';

//importing Listview and NewNote from LambdaPages
import ListView from './LambdaPages/ListView';
import NewNote from './LambdaPages/NewNote';
//importing NavBar Component
import NavBar from './components/Nav';
//importing form from Components
import Form from './components/Form';
//importing App Css to main app
import './App.css';
// Importing props from reactdtrap
import { Card, CardTitle, CardText, Col, Row, Container,Button, Label } from 'reactstrap';
//importing Edit Component
import EditNote from './LambdaPages/EditNote';
//importing Delet component
import Delete from './components/Delete';
//importing list componet 
import List from './LambdaPages/List'

//state of Notes
class App extends Component {
  state = {
    list: [
      {
        id: 0,
        title: "Note Title",
        note: "Note Content"
      },
      {
        id: 1,
        title: "Note Title",
        note: "Note Content"
      },
      {
        id: 2,
        title: "Note Title",
        note: "Note Content"
      },
      {
        id: 3,
        title: "Note Title",
        note: "Note Content"
      },
    ],
  }

//remder method that will add new Note to the existing notes
renderNoteList = (title, note) => {
  const newNote = {
    id: this.state.list.length,
    title: title,
    note: note
  };
  this.setState({ list: [...this.state.list, newNote] });
 }

//routes for components to render to App
  render(props) {
    return (
      <div className="App">
        <NavBar />       
        <Route exact path="/" render={props => <ListView {...props} notes={this.state.list}/>} />
        <Route exact path="/note" render={props => <NewNote {...props} renderNoteList={this.renderNoteList}/>}  />
        <Route exact path="/note/edit" component={EditNote} />
        <Route path="/note/view/" component={List} />
      </div>
      
    );
  }
}

export default App;
