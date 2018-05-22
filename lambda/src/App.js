import React, { Component } from 'react';
//importing Router
import { Route } from 'react-router-dom';

//importing Listview and NewNote from LambdaPages
import ListView from './LambdaPages/ListView';
import NewNote from './LambdaPages/NewNote';
//importing NavBar component
import NavBar from './components/Nav';
import Form from './components/Form';
import './App.css';


//routes for components to render to App
class App extends Component {
  state = {
    list: [],
  }

renderNoteList = (title, note) => {
  const newNote = [{
    id: this.state.list.length,
    title: title,
    note: note
  }];

  this.setState({ list: [...newNote] });
}

  render(props) {
    return (
      <div className="App">
       <Route exact path="/" render={props => <ListView {...props} notes={this.state}/>} />
       <Route path="/note" component={NewNote}/>
      </div>
    );
  }
}

export default App;
