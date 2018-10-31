import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import CreateNoteView from './views/CreateNoteView';
import EditNoteView from './views/EditNoteView';
import NoteView from './views/NoteView';
import NotesListView from './views/NotesListView';
import Sidenav from './components/Sidenav';
// import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      
    }
  }
  // componentDidMount = () => {
  //   axios
  //   .get(`https://fe-notes.herokuapp.com/note/get/all`)
  //   .then(response => {
  //     this.setState({notes: [...response.data] });
  //   })
  //   .catch(error => console.log(error));
  // }
  render() {
    return (
      <div className="App">
      <Sidenav/>
      <Switch>
      <Route exact path='/' 
            render = {props =>
               <NotesListView {...props}
              //  componentDidMount={this.componentDidMount}
                />} />
      <Route path='/create-note' component={CreateNoteView} />
      <Route path='/note/get/:id' render={props => <NoteView {...props} />} />
      <Route path='/edit-note/id' component={EditNoteView} />
      </Switch>




      </div>
    );
  }
}

export default App;
