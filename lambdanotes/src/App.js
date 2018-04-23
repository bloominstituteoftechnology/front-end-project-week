import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { Row, Col, Container } from "reactstrap";

import NoteList from "./components/NoteList";
import NoteView from "./components/NoteView";
import Menu from "./components/Menu";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col sm="3">
              <Route path="/" component={Menu} />
            </Col>
            <Col sm="9">
              <Route
                exact
                path="/"
                render={props => {
                  return <NoteList notes={this.props.notes} />;
                }}
              />
              <Route
                exact
                path="/note/:id"
                render={props => {
                  return <NoteView {...props} notes={this.props.notes} />;
                }}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

export default connect(mapStateToProps, {})(App);
