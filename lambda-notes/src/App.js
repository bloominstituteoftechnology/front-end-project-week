import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import List from './Components/Views/List'
import CreateNew from './Components/Views/CreateNew'
import Note from './Components/Views/Note'
import Delete from './Components/Views/Delete'
import Edit from './Components/Views/Edit'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={List} />
        <Route exact path='/list' component={List} />
        <Route path='/createNew' component={CreateNew}/>
        <Route path='/note' component={Note}/>
        <Route path='/delete' component={Delete}/>
        <Route path='/edit' component={Edit}/>
      </div>
    );
  }
}

export default App;
