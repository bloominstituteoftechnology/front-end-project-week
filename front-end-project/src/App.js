import React, { Component } from 'react';
import NavBar from './Components/NavBar';
import MainPage from './Components/MainPage';
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
          <NavBar changeSwitch={this.changeSwitch} reverseOrder={this.reverseOrder} switchValue={this.state.mainPageSwitchValue} />
        </div>
        <div className="App__rightbox">
          <MainPage title={currentState.mainPageTitle} caseValue={currentState.mainPageSwitchValue} changeSwitch={this.changeSwitch} onRef={ref => (this.mainpage = ref)}/>
        </div>
      </div>
    );
  }

  changeSwitch = (title, casevalue) => {
    this.setState({mainPageTitle: title, mainPageSwitchValue: casevalue})
  };

  reverseOrder = () => {
    if (this.state.mainPageSwitchValue === 'noteList') {
      this.mainpage.reverseNoteOrder();
    }
  }
}

export default App;