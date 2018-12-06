// importing libraries
import React from 'react'
import { Route } from 'react-router-dom';

// importing components
import NotesView from './views/NotesView';
import FormView from './views/FormView';
import NavBar from './components/NavBar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route path="/" render={
          props => <NavBar {...props} />
        } />
        <Route exact path="/" component={NotesView} />
        <Route path="/add" render={
          props => <FormView {...props}/>
        } />
      </div>
    );
  }
}

export default App;