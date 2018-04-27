import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Content from './Components/Content/Content.js'
import Main from './Components/Main/Main.js';
import {
      Row,
      Col,
    } from 'reactstrap'
 export default class App extends Component {
  render() {
      return (
        <Route path="/">
                <div className="App">
                  <Row className="appContainer"  >
                      <Main />
                      <div>
                        <Content />
                      </div>
                  </Row>
                  </div>
              </Route>
  );
}
}