import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import { Container, Row, Col, Button } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NoteForm from './components/noteForm';
import Note from './components/note';
import DisplayNotesList from './components/displayNotesList';

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <Button>View Notes</Button>,
    main: () => <DisplayNotesList/>
  },
  {
    path: "/createNote",
    sidebar: () => <Button>+ Create New Note</Button>,
    main: () =><Container><NoteForm /></Container>
  },
  {
    path: "/viewNotes/:id",
    main: Note
  }
];

class App extends Component {
  render() {
    document.body.style.background = "#f3f3f3";
    return (
      <Router>
        <Container fluid={true} className="App">
          <Row className="app-wrapper">
            <Col sm={3} className="leftSide position-fixed">
              <h1 className="header my-4">Lambda Notes</h1>
              <Link to ="/"><Button className="w-100 my-2 p-2">View Your Notes</Button></Link>
              <Link to ="/createNote"><Button className="w-100 my-2 p-2">+ Create New Note</Button></Link>
            </Col>
            <Col sm={9} className="rightSide offset-3">
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
                />
              ))}
            </Col>
          </Row>
        </Container>
      </Router>
    );
  }
}

Container.propTypes = {
  fluid: PropTypes.bool
};

export default App;
