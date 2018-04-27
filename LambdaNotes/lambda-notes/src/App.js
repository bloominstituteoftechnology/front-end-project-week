// STYLING COMPONENTS
import './Styles.css';

// REDUX COMPONENTS
import { connect } from 'react-redux';
import { editNote, createNote, deleteNote } from './actions';

// REACT COMPONENTS
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MENUBAR from './components/MenuBar';
import LISTVIEW from './components/ListView';
import CREATENOTE from './components/CreateNote';
import NOTEVIEW from './components/NoteView';
import EDITNOTE from './components/EditNote';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      note: [],
    }
  }

  render() {
    return (
      <Router>
        <div className="APP">
            <div className="APP__MENU">
              <Route path='/' render={( props) => <MENUBAR {...props} notes={this.props.notes} /> }
              />
            </div>
            <div className="APP__BODY">
              <Switch>
                <Route exact path='/' render={( props ) => <LISTVIEW {...props} notes={this.props.notes}/> }
                />
                <Route path='/note/:id' render={(props) => <NOTEVIEW {...props} notes={this.props.notes}/> }
                />
                <Route path='/edit/:id' render={( props ) => <EDITNOTE {...props} notes={this.props.notes}/> }
                />
                <Route path='/create' component={CREATENOTE} />
              </Switch>
            </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
  }
}

export default connect(mapStateToProps, { editNote, createNote, deleteNote })(App);