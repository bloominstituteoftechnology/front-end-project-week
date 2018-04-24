import React, { Component } from 'react';
import './Styles.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import testData from './components/TestData';

// REACTSTRAP COMPONENTS
import { Container, Row, Col } from 'reactstrap';

// COMPONENTS
import MENUBAR from './components/MenuBar';
import LISTVIEW from './components/ListView';
import CREATENOTE from './components/CreateNote';
import NOTEVIEW from './components/NoteView';
import EDITNOTE from './components/EditNote';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: testData,
      // date: new Date();
      visibleTodos: [],
      sortedByDate: [],
      sortedByCompleted: [],
    }
  };

  // componentDidRender() {
  //   this.setState = 
  // }



  render() {
    const notes = this.state.notes;
    console.log('App notes is ' + notes);
    return (
      <Router>
        <Container className="APP">
          <Row>
            <Col xs="12" sm="12" md="3" className="APP__MENU">
              <MENUBAR />
            </Col>
            <Col xs="12" sm="12" md="9" className="APP__BODY">
              <Switch>
                <Route exact path='/' render={( props ) => <LISTVIEW {...props} notes={this.state.notes}/> }
                />
                {/* <Route path={`/note/${id}`} component={NOTEVIEW} /> */}
                <Route path='/create' component={CREATENOTE} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </Router>
    );
  }
}

export default App;
