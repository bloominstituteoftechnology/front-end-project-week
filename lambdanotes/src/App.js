import React, { Component } from "react";
import { connect } from "react-redux";
import logo from "./logo.svg";
import "./App.css";
import NoteList from "./components/NoteList";
import Menu from "./components/Menu";
import { Row, Col, Container } from "reactstrap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col sm="3">
              <Menu />
            </Col>
            <Col>
              <NoteList notes={this.props.notes} />
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
