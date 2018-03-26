import React, { Component } from 'react';
import './App.css';
import { Button } from 'reactstrap'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='container'>
        <header className="App-header">
          <h1 className="App-title">Lambda Notes</h1>
          <Button className='App-Intro'>
            View Your Notes
          </Button>
          <Button className='App-Intro'>
            + Create New Note
          </Button>
        </header>
        </div>
        <div className='rightSide'>
            <p className='RS-title'>Your Notes:</p>
            <div className = 'allCards'>
            <div className='card1'>
              <t className='t'>Note Title</t>
              <b className='b'>Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis …</b>
            </div>
            <div className='card2'>
              <t className='t'>Note Title</t>
              <b className='b'>Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis …</b>
            </div>
            <div className='card3'>
              <t className='t'>Note Title</t>
              <b className='b'>Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis …</b>
            </div>
            <div className='card4'>
              <t className='t'>Note Title</t>
              <b className='b'>Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis …</b>
            </div>
            <div className='card5'>
              <t className='t'>Note Title</t>
              <b className='b'>Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis …</b>
            </div>
            <div className='card6'>
              <t className='t'>Note Title</t>
              <b className='b'>Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis …</b>
            </div>
            <div className='card7'>
              <t className='t'>Note Title</t>
              <b className='b'>Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis …</b>
            </div>
            <div className='card8'>
              <t className='t'>Note Title</t>
              <b className='b'>Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis …</b>
            </div>
            <div className='card9'>
              <t className='t'>Note Title</t>
              <b className='b'>Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis …</b>
            </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;