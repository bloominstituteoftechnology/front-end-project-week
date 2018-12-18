import React, { Component } from 'react';
import axios from "axios";
import { Route } from "react-router-dom";
import LeftSideBarNav from "./components/LeftSideBarNav";
import NoteList from "./components/NoteList";
import AddNote from "./components/AddNote";
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],      
    };
  }

  componentDidMount() {
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        console.log(response.data);
        this.setState({
          notes: response.data
        });
      })
      .catch(err => console.log(err));
  }

  updateNotes = notes => {
    this.setState({ notes })
  }  
  

  render() {
    const { notes } = this.state;
    return (
      <div className="App">
        <LeftSideBarNav />
        <div className='app-content'>
        <Route exact path='/' render={() => <NoteList notes={notes} /> } />
        <Route
          path='/create'
          render={(props) => (
              <AddNote {...props} notes={notes} updateNotes={this.updateNotes}/>  
          )}
          />   
        </div>        
      </div>
    );
  }
}

export default App;

// updateNotes = () => {
//   axios
//     .get('https://fe-notes.herokuapp.com/note/get/all')
//     .then(response => this.setState({ notes: response.data }))
//     .catch(err => console.log(err));
// };

// handleSubmit = note => {
//   axios
//     .post('https://fe-notes.herokuapp.com/note/create', note)
//     .then(() => this.updateNotes())
//     .catch(err => console.log(err));
// }
