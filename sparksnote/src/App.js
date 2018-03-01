import React, { Component } from 'react';
import { Route } from "react-router-dom";
import './styles/App.css';

import Menu from "./components/menu/menu";
import NewNote from "./components/newNote/newNote";
import Home from "./components/home/home";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [
        { title: "Note One", note: "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, eﬃcitur mollis " },
        { title: "Note Two", note: "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, eﬃcitur mollis " },
        { title: "Note Three", note: "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, eﬃcitur mollis " },
        { title: "Note Four", note: "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, eﬃcitur mollis " },
        { title: "Note Five", note: "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, eﬃcitur mollis " }]
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App__menu">
          <Route path="/" component={Menu} />
        </div>
        <div className="App__main">
          <Route path="/newnote" exact component={NewNote} />
          <Route path="/" exact component={() => {
            return <Home notes={this.state.notes} />
          }} />
        </div>
      </div>
    );
  }
}

export default App;
