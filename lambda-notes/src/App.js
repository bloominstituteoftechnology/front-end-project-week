import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { Route } from "react-router-dom";

import "./App.css";
import Body from "./components/Body";
import NavPannel from "./components/NavPannel";

class App extends Component {
  render() {
    return (
      <Route path="/">
        <div className="App">
          <Row style={{ width: "100vw" }}>
            <Col
              xs="3"
              style={{
                maxWidth: "250px",
                border: "1px solid blue",
                backgroundColor: "#D8D8D8"
              }}
            >
              <NavPannel xs="3" />
            </Col>
            <Col
              xs="9"
              style={{ border: "1px solid red", backgroundColor: "#F4F4F4" }}
            >
              <Body />
            </Col>
          </Row>
        </div>
      </Route>
    );
  }
}

export default App;
