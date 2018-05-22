import React, { Component } from 'react';
import './App.css';
import { Route, Link } from "react-router-dom";
// import CreateNote from './components/CreateNote';
// import EditNote from "./components/EditNote";
// import Note from "./components/Note";
import SideBar from "./components/SideBar";

class App extends Component {
  render() {
    return <div className="container-fluid custom-container">
          <div class="row custom-row">
            <Route exact path="/" component={SideBar} />

            <div className='col-sm-9 cards'>
            <h4 className='your-notes'>Your notes:</h4>
              <div class="card mb-sm-4 col-sm-3">
                <div class="card-header no-bg">
                  <h5 class="d-sm-inline">Note Title</h5>
                </div>
                <div class="list-group list-group-flush">
                  <p className="mt-sm-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
              </div>


              <div class="card mb-sm-4  col-sm-3">
                <div class="card-header no-bg">
                  <h5 class="d-sm-inline">Note Title</h5>
                </div>
                <div class="list-group list-group-flush">
                  <p className="mt-sm-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
              </div>
              <div class="card mb-sm-4  col-sm-3">
                <div class="card-header no-bg">
                  <h5 class="d-sm-inline">Note Title</h5>
                </div>
                <div class="list-group list-group-flush">
                  <p className="mt-sm-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
              </div>
              <div class="card mb-sm-4  col-sm-3">
                <div class="card-header no-bg">
                  <h5 class="d-sm-inline">Note Title</h5>
                </div>
                <div class="list-group list-group-flush">
                  <p className="mt-sm-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
              </div>
          </div>
          </div>
      </div>;
  }
}

export default App;
