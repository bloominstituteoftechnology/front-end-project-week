// importing libraries
import React from 'react'
import { Route } from 'react-router-dom';

// importing components
import NotesView from './views/NotesView';
import FormView from './views/FormView';
import DetailView from './views/DetailView';
import NavBar from './components/NavBar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route path="/" render={
          props => <NavBar {...props} />
        } />
        <Route exact path="/" render={
          props => <NotesView {...props} />
        } />
        <Route path="/add" render={
          props => <FormView {...props}/>
        } />
        <Route exact path="/notes/:_id" render={
          props => <DetailView {...props} />
        } />
        <Route path="/notes/edit/:_id" render={
          props => <FormView update {...props} />
        } />
      </div>
    );
  }
}

export default App;