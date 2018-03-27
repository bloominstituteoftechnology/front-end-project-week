import React, { Component } from 'react';
import './MainPage.css';
import RightSide from './RightSide'; 
import NewNote from './NewNote'
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, NavLink, withRouter} from 'react-router-dom'




export class App extends React.Component {
  
  // handleClick = () => {
  //   console.log('clicked!', this);
  //   <Route exact path='/' component={RightSide} />
  //   <Route path='/NewNote/:id' component={NewNote} />  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className='container'>
          <header className="App-header">
            <NavLink to='/'>
              <div className="App-title">Lambda Notes</div>
            </NavLink>
            <button className='button'>
                View Your Notes
            </button>
            <NavLink to='./NewNote/:id'>
            <button className='button' onClick={this.handleClick}>
              + Create New Note
            </button>
            </NavLink>
          </header>
          </div>
          
            <div>
              <Route exact path='/' component={RightSide} />
              <Route path='/NewNote/:id' component={NewNote} />
            </div>
          </div>
      </Router>      
    );
    document.getElementById('root')
  }
  }

export default App;