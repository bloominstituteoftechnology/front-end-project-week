import React, { Component } from "react";
import { Row, Col } from "reactstrap";

import "./App.css";
import Body from "./components/Body";
import NavPannel from "./components/NavPannel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Row>
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
    );
  }
}

export default App;
