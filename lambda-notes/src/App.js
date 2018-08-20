import React, { Component } from "react";
import { Route } from "react-router-dom";
import { MainNav } from "./components/mainNav/MainNav";
import { Notes } from "./components/noteList/Notes";

import "./css_styles/app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          id: 0,
          title: "Bake Bread",
          description: "Make bread for the cat"
        },
        {
          id: 1,
          title: "Bake Cookies",
          description: "Make cookies for the cat"
        },
        {
          id: 2,
          title: "Bake Lasagna",
          description: "Make lasagna for the cat"
        },
        {
          id: 3,
          title: "Bake Mac",
          description: "Make mac for the cat"
        },
        {
          id: 4,
          title: "Bake Steak",
          description: "Make steak for the cat"
        },
        {
          id: 5,
          title: "Bake Rice",
          description: "Make rice for the cat"
        },
        {
          id: 6,
          title: "Bake Salad",
          description: "Make salad for the cat"
        },
        {
          id: 7,
          title: "Bake Tea",
          description: "Make tea for the cat"
        }
      ]
    };
  }
  render() {
    return (
      <div className="mainAppDiv">
        <Route path={"/"} component={MainNav} />
        <Route
          exact
          path={"/"}
          render={props => <Notes {...props} notes={this.state.notes} />}
        />
      </div>
    );
  }
}

export default App;
