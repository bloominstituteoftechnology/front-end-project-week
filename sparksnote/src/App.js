import React, { Component } from 'react';
import { Route } from "react-router-dom";
import './styles/App.css';

import Menu from "./components/menu/menu";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <div className="menu--align">
          <Route path="/" component={Menu} />
        </div>
      </div>
    );
  }
}

export default App;
