import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const NoteDisplay = (props) => {
  console.log('props', props)
  return (
    <div>
    <h1> {props.data.name} </h1>
    <p> {props.data.body} </p>
    </div>
  )
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      notes: {
        name: 'testing',
        body: 'some testing text',
      }
    }
  }
  render() {
    return (
      <div className='App__container'>
        <div className='App__left'> {/* start of left side div */}
        some holder text
        </div> {/* end of left side div */}

        <div className='App__right'> {/* start of right side div */}
        <NoteDisplay data={this.state.notes} />
        </div> {/* end of right side div */}

      </div> // container div end
      
    );
  }
}

export default App;
