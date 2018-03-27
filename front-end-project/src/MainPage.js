import React, { Component } from 'react';
import './MainPage.css';
import RightSide from './RightSide'; 
import NewNote from './NewNote'
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'




export class MainPage extends React.Component {
  
  // handleClick = () => {
  //   console.log('clicked!', this);
  //   <Route exact path='/' component={RightSide} />
  //   <Route path='/NewNote/:id' component={NewNote} />  }

  componentDidMount() {
        
    const id = this.props.match.params.id;
    console.log(this);
    
  }

  render() {
    return (
      <Router>
        <NavLink to={`/Mainpage/${MainPage.id}`}>
        <div className="App">
          <div className='container'>
          <header className="App-header">
            <NavLink>
              <div className="App-title">Lambda Notes</div>
            </NavLink>
            <NavLink to='./RightSide/:rs'>
              <button className='button' onClick={this.handleClick}>
                  View Your Notes
              </button>
            </NavLink>
            <NavLink to='./NewNote/:id'>
              <button className='button' onClick={this.handleClick}>
                + Create New Note
              </button>
            </NavLink>
          </header>
          </div>
          
            <div>
              <Route path='/RightSide/:rs' component={RightSide} />
              <Route path='/NewNote/:id' component={NewNote} />
            </div>
          </div>
          </NavLink>
      </Router>      
    );
    document.getElementById('root')
  }
  }

export default MainPage;