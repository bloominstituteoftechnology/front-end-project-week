import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import { Route, Link } from 'react-router-dom';
import { List, Note, NewNote, EditNote, DeleteNote } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col xs="3" className="sidebar">
              <h1>Lambda Notes</h1>
              <Link to="/">
                <button>View Your Notes</button>
              </Link>
              <Link to="/newnote">
                <button>+ Create New Note</button>
              </Link>
            </Col>
            <Col xs="9" className="content-container">
              <Route exact path="/" component={List} />
              <Route path="/newnote" component={NewNote}/>
              <Route path="/note" component={Note}/>
              <Route path="/edit" component={EditNote}/>
              <Route path="/delete" component={DeleteNote}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
