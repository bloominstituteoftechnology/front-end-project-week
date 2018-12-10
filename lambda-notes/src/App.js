import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';
import Notes from './components/Notes';
import './App.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
  }

  componentDidMount(){
    axios.get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        console.log(response); 
        this.setState({notes: response.data}) 
      })
      .catch(err => console.log(err));
      
  }


  render() {
    return (
      <div className="App">
        <div className="main-container">
          <nav className="main-nav">
            <h1 className="nav-header">Lambda<br/> Notes</h1>
            <NavLink className="nav-link" to="/">View your notes</NavLink>
            <NavLink className="nav-link" to="/create">+ Create New Note</NavLink>
          </nav>
          <Route 
              exact 
              path="/"
              render={props => {
              return (
              <div>
                <Notes {...props} notes={this.state.notes} />
              </div>
              );
            
            }} />

            {this.state.notes.length &&
            <Route 
            path="/get/:_id" 
            render={props => <div {...props} notes={this.state.notes} /> } /> }
          </div>
      </div>
    );
  }
}

export default App;
