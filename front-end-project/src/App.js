import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import { Container, Row, Col, Button } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Note from './components/note'
import NotesList from './components/notesList'

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <Button>View Notes</Button>,
  },
  {
    path: "/createNote",
    sidebar: () => <Button>+ Create Note</Button>,
    main: () =><div>Rendered</div> //<NoteForm />
  },
  {
    path: "/viewNotes/:id",
    main: Note
  }
];

class App extends Component {
  render() {
    return (
      <Router>
        <Container fluid={true} className="App">
          <Row>
            <Col sm={3} className="leftSide">
              <h1>Lambda Notes</h1>
              <Link to ="/"><Button size="lg" className="my-2">View Your Notes</Button></Link>
              <Link to ="/createNote"><Button size="lg" className="my-2">+ Create New Note</Button></Link>
            </Col>
            <Col sm={9} className="rightSide">
              <NotesList/>
            </Col>
          </Row>
          <div style={{ flex: 1, padding: "10px" }}>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
           </div>
        </Container>
      </Router>
    );
  }
}

Container.propTypes = {
  fluid: PropTypes.bool
};

export default App;
