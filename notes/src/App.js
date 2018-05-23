import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import { Route, Link } from 'react-router-dom';
import { List, Note, NewNote, EditNote, DeleteNote, Test } from './components';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col xs="3" className="sidebar">
              <h1>Lambda Notes</h1>
              <Link to="/">
                <button className="list-button">View Your Notes</button>
              </Link>
              <Link to="/newnote">
                <button className="new-note-button">+ Create New Note</button>
              </Link>
              <Link to="/test">
               <button className="test-button">Test Here</button>
              </Link>
            </Col>
            <Col xs="9" className="content-container">
              <Route exact path="/" component={List} />
              <Route path="/newnote" component={NewNote}/>
              <Route path="/note" component={Note}/>
              <Route path="/edit" component={EditNote}/>
              <Route path="/delete" component={DeleteNote}/>
              <Route path="/test" component={Test}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
