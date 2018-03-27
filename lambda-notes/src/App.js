import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import ListView from "./components/list-view";
import SideNav from "./components/side-nav";

class App extends Component {
  state = {
    notes: [
      {
        id: 0,
        title: "Note Title",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id."
      },
      {
        id: 1,
        title: "Note Title",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id."
      },
      {
        id: 2,
        title: "Note Title",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id."
      },
      {
        id: 3,
        title: "Note Title",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id."
      },
      {
        id: 4,
        title: "Note Title",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id."
      },
      {
        id: 5,
        title: "Note Title",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id."
      },
      {
        id: 6,
        title: "Note Title",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id."
      },
      {
        id: 7,
        title: "Note Title",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id."
      },
      {
        id: 8,
        title: "Note Title",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum commodi tempora quam quaerat odit nesciunt, esse minus architecto necessitatibus aliquam nisi aut a doloremque voluptates facere voluptatem qui voluptate id."
      }
    ]
  };

  render() {
    return (
      <Router>
        <div className="App">
          <SideNav />
          <Route
            exact
            path={"/"}
            render={() => <ListView notes={this.state.notes} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
