// Styling Components
import './Styles.css';

// testing tools
import testData from './components/TestData';

// REDUX components
import { connect } from 'react-redux';
import { editNote, createNote, deleteNote, fetchNotes } from './actions';

// REACTSTRAP COMPONENTS

// REACT COMPONENTS
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import MENUBAR from './components/MenuBar';
import LISTVIEW from './components/ListView';
import CREATENOTE from './components/CreateNote';
import NOTEVIEW from './components/NoteView';
import EDITNOTE from './components/EditNote';

class App extends Component {
  state = {
    note: [],
  }

  componentDidMount() {
    this.setState = this.props.fetchNotes;
  }

  render() {
    console.log('App state: ' , this.state);
    console.log('App props: ' , this.props);
    return (
      <Router>
        <div className="APP">
            <div className="APP__MENU">
              <MENUBAR />
            </div>
            <div className="APP__BODY">
              <Switch>
                <Route exact path='/' render={( props ) => <LISTVIEW {...props} notes={this.state.notes}/> }
                />
                {/* <Route path={`/note/${id}`} component={NOTEVIEW} /> */}
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
    notes:state.notes,
  }
}

export default connect(mapStateToProps, { editNote, createNote, deleteNote, fetchNotes })(App);
