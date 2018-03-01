import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import NoteList from './components/NoteList';
import CreateForm from './components/CreateForm';
import NoteCard from './components/Note'
// import DummyData from "./DummyData";


class App extends Component {

  nextId = 333;
    state = {
    notes: [
      {
        id: 1,
        title: 'Note 1',
        content: 'Note 1 content Note 1 content Note 1 content Note 1 content Note 1 content Note 1 content Note 1 content Note 1 content'
      },
      {
        id: 2,
        title: 'Note 2',
        content: 'Note 2 content Note 2 content Note 2 content Note 2 content Note 2 content Note 2 content Note 2 content Note 2 content'
      },
      {
        id: 3,
        title: 'Note 3',
        content: 'Note 3 content Note 3 content Note 3 content Note 3 content Note 3 content Note 3 content Note 3 content Note 3 content'
      },
      {
        id: 4,
        title: 'Note 4',
        content: 'Note 4 content Note 4 content Note 4 content Note 4 content Note 4 content Note 4 content Note 4 content Note 4 content'
      },{
        id: 5,
        title: 'Note 5',
        content: 'Note 5 content Note 5 content Note 5 content Note 5 content Note 5 content Note 5 content Note 5 content Note 5 content'
      }
    ]
  };

  // create = false;

  render() {


    return (
      <Router>
        <div className="container">
          <div className="container left-column">
            <h1 className="App-title">Note App</h1>
            <div>
                <NavLink to="/" activeClassName="navlink--active" exact>
                  <button className="mainButton">
                    View Notes
                  </button> 
                </NavLink> 
            </div>
            <div>
              <NavLink to="/create_note" activeClassName="navlink--active" exact>
                <button className="createButton"
                //  onClick={() => this.Create()}
                >
                  + Create Note
                </button>
                </NavLink>
            </div>
          </div>
          <div className="container main-content">

          <Route path='/' component={() => <NoteList notes={this.state.notes} />} exact />
          <Route path='/create_note' component={CreateForm} />
          <Route path='/details/:id' component={x => <CardId notes={this.state.notes} id={x.match.params.id} />} />
          {/* <Route path='/edit/:id' component={Details} /> */}

          </div>


          
          
          
          

          
        </div>
      </Router>
    );
  }

  Create() {
    this.create=true;
    console.log(this.create);
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
