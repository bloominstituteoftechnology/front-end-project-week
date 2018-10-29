import React, {Component} from "react";
import "./App.css";

import Menu from "./components/Menu";

class App extends Component {
  componentDidMount = () => {};

  render() {
    return (
      <div className="App">
        <Menu />
      </div>
    );
  }
}

export default App;
