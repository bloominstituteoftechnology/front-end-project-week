import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import NoteList from './components/NoteList';
import CreateForm from './components/CreateForm';
import NoteCard from './components/Note'


class App extends Component {

  nextId = 333;
    state = {
    notes: [
      {
        id: 1,
        title: 'Note Title Filler',
        content: 'content content content content content content content content'
      },
      {
        id: 2,
        title: 'Note Title Filler',
        content: 'content content content content content content content content'
      },
      {
        id: 3,
        title: 'Note Title Filler',
        content: 'content content content content content content content content'
      },
      {
        id: 4,
        title: 'Note Title Filler',
        content: 'content content content content content content content content'
      },{
        id: 5,
        title: 'Note Title Filler',
        content: 'content content content content content content content content'
      }
    ]
  }
  render() {


    return (
      <Router>
        <div className="containter">
          <div className="left-column">
            <h1 className="App-title">Note App</h1>
              <div>
                <NavLink to="/" activeClassName="navlink--active" exact>
                  View Notes
                </NavLink> 
              </div>
              <div>
                <NavLink to="/create_note" activeClassName="navlink--active" exact>
                  Create New Note
                </NavLink>
              </div>
          </div>
          <div className="main-content">

          <Route path='/' component={() => <NoteList notes={this.state.notes} />} exact />
          <Route path='/create_note' component={CreateForm} />
          <Route path='/details/:id' component={x => <CardId notes={this.state.notes} id={x.match.params.id} />} />
          {/* <Route path='/edit/:id' component={Details} /> */}

          </div>


          
          
          
          

          
        </div>
      </Router>
    );
  }
}

const CardId = props => {
  console.log(props);
  const id = parseInt(props.id);
  const IdNote = props.notes.filter(y => y.id === id)
  console.log(IdNote);
  console.log(props.notes);
  console.log(id);
  return <NoteCard note={IdNote[0]} />
}

export default App;
