// importing libraries
import React from 'react'
import { Route } from 'react-router-dom';

// importing components
import NotesView from './views/NotesView';
import FormView from './views/FormView';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={NotesView} />
        <Route path="/add" render={
          props => <FormView {...props}/>
        } />
      </div>
    );
  }
}

export default App;