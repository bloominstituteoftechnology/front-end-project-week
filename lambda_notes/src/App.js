import React, { Component } from 'react';
import '../src/App.css';
import {Route, NavLink} from 'react-router-dom';
import ListView from './components/Display_Components/ListView';
import CreateNewNote from './components/Display_Components/CreateNewNote';
import NoteView from './components/Display_Components/NoteView';
import axios from 'axios';


class App extends Component {


    componentDidMount() {

      axios.get(`https://fe-notes.herokuapp.com/note/get/all`)
      .then( res => {
        this.setState({
          notes: res.data,
        })
      })
    }

  render() {

    return (
      <div className="App">
         <div >
            <div >
              <h1>Lambda</h1>
              <h1> Notes</h1>
            </div>
              <NavLink exact to='/'>
                <button>View Your Notes</button>
              </NavLink>
              <NavLink to='/create'>
              <button >+ Create New Note</button>
            </NavLink>
          </div>
        <Route path='/' exact 
          render={ props => <ListView/>}
        />
        <Route path='/create' exact
         render={props => <CreateNewNote />}
        />

        <Route path='/note/:id' exact
          render={(props) => <NoteView someNotes={this.state} {...props}   />}
        />
      </div>
    );
  }
}

export default App;
