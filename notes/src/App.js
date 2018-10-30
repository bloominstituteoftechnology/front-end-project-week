import React, { Component } from 'react';

//components needed
import HeadNav from './components/HeadNav/HeadNav';
import ListView from './components/ListView/ListView';

//page styling
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeadNav />
        <div className='mainView'>
          <ListView />
        </div>

      </div>
    );
  }
}

export default App;
