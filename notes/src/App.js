import React from 'react';
import Navigation from './components/Navigation';
import ListView from './components/ListView';
import './App.css';

const App = () => {
    return (
      <div className="App">
        <Navigation />
        <ListView />
      </div>
    );
};

export default App;
