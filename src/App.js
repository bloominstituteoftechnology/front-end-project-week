import React, { Component, Fragment } from "react";
import "./App.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container, Row, Col, Button } from "reactstrap";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import NoteForm from "./components/noteForm";
import Note from "./components/note";
import DisplayNotesList from "./components/displayNotesList";
import LoginRegister from "./components/loginRegister";
import SignOut from "./components/logout";
import RequireAuth from "../src/components/HOC/RequireAuth";

const routes = [
  {
    path: "/:uid/displayNotes",
    sidebar: () => <Button>View Notes</Button>,
    main: () => <DisplayNotesList />
  },
  {
    path: "/logout",
    sidebar: () => <Button>Sign Out</Button>,
    main: () => <SignOut />
  },
  {
    path: "/:uid/createNote",
    sidebar: () => <Button>+ Create New Note</Button>,
    main: () => (
      <Container>
        <NoteForm />
      </Container>
    )
  },
  {
    path: "/viewNote/:id",
    main: Note
  },
  {
    path: "/:uid/editNote/:id",
    main: NoteForm
  }
];

class App extends Component {
  render() {
    document.body.style.background = "#f3f3f3";
    console.log("Props inside APP:", this.props);
    //if not authed reutrn the signin/signup page which is App.js
    //if(!authed) {do something}

    return (
      <Router>
        {/* //if (authed) change the sidebar to have the display Notes and create
        note component */}
        {this.props.authed ? (
          <Container fluid={true} className="App">
            <Row className="app-wrapper">
              <Col sm={3} className="leftSide position-fixed">
                <Fragment>
                  <h1 className="header my-4">Lambda Notes</h1>
                  <Link to="/:uid/displayNotes">
                    <Button className="w-100 my-2 p-2">View Your Notes</Button>
                  </Link>
                  <Link to="/:uid/createNote">
                    <Button className="w-100 my-2 p-2">
                      + Create New Note
                    </Button>
                  </Link>
                  <Link to="/logout">
                    <Button className="w-100 my-2 p-2">Sign out</Button>
                  </Link>
                </Fragment>
              </Col>
              <Col sm={9} className="rightSide offset-3">
                {routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    render={route.main}
                  />
                ))}
              </Col>
            </Row>
          </Container>
        ) : (
          <Route
            exact
            path="/"
            render={props => <LoginRegister {...props} />}
          />
        )}
      </Router>
    );
  }
}

Container.propTypes = {
  fluid: PropTypes.bool
};

function mapStateToProps(state) {
  console.log("State in map: ", state);
  return {
    authed: state.auth.authed
    // users: state.notes.users
  };
}

export default connect(mapStateToProps)(App);
