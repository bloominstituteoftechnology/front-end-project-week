import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import ListView from './components/ListView';
import NavBar from './components/NavBar';
import CreateNote from './components/CreateNote';
import ViewNote from './components/ViewNote';
import EditNote from './components/EditNote';
import note from './components/dummyData';


class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    }
  }

  componentDidMount() {
    this.setState({ notes: note })
  }

  render() {
    return (
        <div className='App'>
            <div className='nav-bar'>
                <Route path='/' component={ NavBar } />    
            </div>
            <div className='note-container'>
                <Route exact path='/' render={ (props) => {
                    return (<ListView { ...props } notes={this.state.notes} />)}} />
                <Route path='/create' component={CreateNote} />
                <Route exact path='/:id' render={ (props) => {
                    return (<ListView {...props} notes={this.state.notes} />)}} />
                <Route path='/note/edit' component={EditNote} />
            </div>
        </div>
    );
}
}

export default App;
