import React, { Component } from 'react';
//importing  Router
import { Route } from 'react-router-dom';

//importing Listview and NewNote from LambdaPages
import ListView from './LambdaPages/ListView';
import NewNote from './LambdaPages/NewNote';
//importing NavBar component
import NavBar from './components/Nav';
import Form from './components/Form';
import './App.css';


//routes for componest to render to App
class App extends Component {
  render() {
    return (
      <div className="App">
       <Route exact path="/" component={ListView} />
       <Route exact path="/note" component={NewNote}/>
      </div>
    );
  }
}

export default App;
