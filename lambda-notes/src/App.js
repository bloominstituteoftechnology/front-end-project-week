import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DisplayNotes from './components/DisplayNotes';
import CreateNote from './components/CreateNote';
import EditNote from './components/EditNote';
import ViewNote from './components/ViewNote';
import DeleteModal from './components/DeleteModal';

class App extends Component {
  render() {
    console.log('log 1', this.props);
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={DisplayNotes} />
            <Route path="/create" component={CreateNote} />
            <Route path="/note/:id" component={ViewNote} />
            <Route path="/edit/:id" component={EditNote} />
            <Route path="/delete/:id" component={DeleteModal} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
