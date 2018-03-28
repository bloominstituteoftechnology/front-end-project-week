import React, { Component } from "react";
import "./App.css";
// import Layout from './components/Layout';
import ListView from "./components/ListView";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import CreateNew from "./components/CreateNew";
import Display from "./components/Display";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Layout/> */}
        <Router>
          <div className="routerDiv">
            <ul className="routeUl">
              <li>
                <Link to="/ListView">ListView </Link>
              </li>
              <li>
                <Link to="/CreateNew">CreateNew</Link>
              </li>
              <li>
            
              </li>
            </ul>
            <Switch>
              <Route exact path="/" component={ListView} />
              <Route path="/ListView" component={ListView} />
              <Route path="/CreateNew" component={CreateNew} />
              <Route path="./:id" component={Display} />
            
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

const id = ({match}) => {
  <div>
    <h2>id:{match.params.id}</h2>
    </div>
}

export default App;
