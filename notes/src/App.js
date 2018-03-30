import React, { Component } from "react";
import "./App.css";
import NotesList from "./components/NotesList";
import NoteForm from "./components/NoteForm";
import Note from "./components/Note";
import Login from "./components/Login";
import User from "./components/User";
import { Row, Col, Container, Button } from "reactstrap";
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { firebaseAuth } from "./utilities/auth";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return { authed: state.authed, user: state.user };
}

function PrivateRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        authed === true ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

const privateRoutes = [
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
            <Col sm={6} md={3} className="leftSide ">
              <h1 className="header my-4">Lambda Notes</h1>

              <Link to="/">
                <Button className="w-100 my-3 p-2">View Your Notes</Button>
              </Link>

              <Link to="/createNote">
                <Button className="w-100 my-3 p-2">+ Create Note </Button>
              </Link>
            </Col>
            <Col sm={6} md={9} className="rightSide">
              <User />{" "}
              {privateRoutes.map((route, index) => (
                <PrivateRoute
                  authed={this.props.authed}
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
                />
              ))}
              <Route
                path="/login"
                authed={this.props.authed}
                render={() => {
                  return this.props.authed ? <Redirect to="/" /> : <Login />;
                }}
              />
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
export default connect(mapStateToProps)(App);
