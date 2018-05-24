import React, {Component} from 'react';
import { Route, Switch} from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import List from './Components/List/List';
import NoteView from './Components/NoteView/NoteView';
import EditNote from './Components/EditNote/EditNote';
import CreateNote from './Components/CreateNote/CreateNote';
import { dummydata } from './dummydata/dummydata';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        notes : {dummydata},
      };
      this.
}


  render() {
    const {notes} = this.state;
    return (
      <div>
        <Router>
        <Switch>
            <Route exact path='/list' render= {(props)=> <List {...props} notes = {notes.dummydata} /> }/>
            <Route path='/list/:id' render= {(props)=> <NoteView {...props} notes = {notes.dummydata} /> }/>
            <Route path='/list/edit/:id' render= {(props)=> <EditNote {...props} notes = {notes.dummydata} /> }/>
            <Route exact path='/list' render= {(props)=> <CreateNote {...props} notes = {notes.dummydata} /> }/>
        </Switch>
      </Router>
        </div>
    );
  }
}

export default App;
