import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Row, Col, Container, Button } from "reactstrap";

import NotesList from './components/NotesList';
import Notes from "./components/Notes";
import NoteForm from "./components/NoteForm";
import './App.css';

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <Button>View Notes</Button>,
    main: () => <NotesList />
  },
  {
    path: "/CreateNote", 
    sidebar: () => <Button>+ Create Note</Button>,
    main: () => <NoteForm />
  },
  { path: "/ViewNotes/:id",
    main: Notes
  },
  {
    path: "/EditNote/:id",
    main: NoteForm
  }
];

class App extends Component {
  render() {
    return (
    <Router>
      <Container fluid={true} className="App">
        <Row className="app-area">
          <Col sm={3} className="Sidebar position-fixed">
            <h1 className="headline my-4">Lambda Notes</h1>

            <Link to="/">
              <Button classname="w-100 my-2 p-2">View Your Notes</Button>
            </Link>
          
            <Link to="/createNote">
              <Button className="w-100 my-2 p-2">+ Create Note</Button>
            </Link>
          </Col>
          <Col sm={9} className="NotesArea offset-3">
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

export default App;
