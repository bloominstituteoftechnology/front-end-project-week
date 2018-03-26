import React, { Component } from 'react';
import Nav from './navigation';
import Routes from './routes'
// import Front from './pages/front-page'
import './style/App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Routes />
      </div>
    );
  }
}

export default App;
