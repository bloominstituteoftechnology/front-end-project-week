import React, { Component } from "react";
import "./App.css";
import NotesList from "./components/NotesList";
import NoteForm from "./components/NoteForm";
import Note from "./components/Note";
import { Row, Col, Container, Button } from "reactstrap";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <h1>Home</h1>,
    main: () => <NotesList />
  },
  {
    path: "/createNote",
    sidebar: () => <h1>Create Note</h1>,
    main: () => <NoteForm />
  },
  {
    path: "/viewNotes/:id",
    main: Note
  },
  {
    path: "/editNote/:id",
    main: NoteForm
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

              <Link to="/">
                <Button className="w-100 my-3 p-2">View Your Notes</Button>
              </Link>

              <Link to="/createNote">
                <Button className="w-100 my-3 p-2">+ Create Note </Button>
              </Link>
              {/* {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.sidebar}
                />
              ))} */}
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
