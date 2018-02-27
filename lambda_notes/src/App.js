import React, { Component } from 'react';
import NavBar from './components/NavBar';
import MainPage from './components/MainPage';
import './App.css';

class App extends Component {
  state = {
    mainPageTitle: '',
    mainPageSwitchValue: '',
  };

  render() {
    const currentState = {...this.state}
    return (
      <div className="App">
        <div className="App__leftbox">
          <NavBar changeSwitch={this.changeSwitch} />
        </div>
        <div className="App__rightbox">
          <MainPage title={currentState.mainPageTitle} caseValue={currentState.mainPageSwitchValue} changeSwitch={this.changeSwitch}/>
        </div>
      </div>
    );
  }

  changeSwitch = (title, casevalue) => {
    this.setState({mainPageTitle: title, mainPageSwitchValue: casevalue})
  };
}

export default App;
