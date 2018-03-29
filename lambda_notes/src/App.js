import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/SideBar'
//import View from './components/View';
import CreateNote from './components/CreateNote';
import List from './components/List';
import { getNotes } from './components/exampleNotes';
import { BrowserRouter as Router, Route } from 'react-router-dom';
class App extends Component {

  state = {
    notes: getNotes()
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={Sidebar} />
          <Route path="/list" render={state => <List notes={this.state.notes} exact />} />
          <Route path="/createnote" component={state => <CreateNote notes={this.state.notes} exact />} />
          <Route path='/delete/:id' component={List} exact />
          <Route path="/exampleNotes/:id" component={getNotes} toggleDeleteModal={this.toggleDeleteModal}
              processDelete={this.processDelete} />
          {/* <Route path='/view/:id' render={() =>
          this.state.notes[this.props.location.pathname.split('/')[2]] ? (
            <View
              index={this.props.location.pathname.split('/')[2]}
              title={
                this.state.notes[this.props.location.pathname.split('/')[2]]
                  .title
              }
              text={
                this.state.notes[this.props.location.pathname.split('/')[2]]
                  .text
              }
              edit={this.edit}
              delete={this.delete}
              />
            ):null
          }
          /> */}

        </div>
      </Router>
    );
  }
}

export default App;
