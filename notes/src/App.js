import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Display from "./components/Display";
import NoteForm from "./components/NoteForm";
import { Row, Col, Container, Button } from "reactstrap";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <Button>View Notes</Button>,
    main: () => <Display />
  },
  {
    path: "/createNote",
    sidebar: () => <Button>+ Create Note</Button>,
    main: () => <NoteForm />
  }
];

class App extends Component {
  render() {
    return (
      <Router>
        <Container fluid={true} className="App">
          <Row className="app-wrapper">
            <Col sm={3} className="leftSide">
              <h1>Lambda Notes</h1>

              <Link to="/">
                <Button>View Notes</Button>
              </Link>

              <Link to="/createNote">
                <Button>+ Create Note </Button>
              </Link>
            </Col>
            <Col sm={9} className="rightSide ">
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
