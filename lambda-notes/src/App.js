import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './store';
import Main from './Main';


class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <div className="App">
          <Main />
        </div>
      </Provider>
    );
  }
}

export default App;
