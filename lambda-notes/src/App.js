import React, { Component } from 'react';
import './css/App.css';
import LeftRail from './containers/leftRail';
import CoreRail from './containers/coreRail';


class App extends Component {
  state = {
    notes: [
      {
          id: 0,
          title: "First Note",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatem, error nihil molestias ratione voluptatibus dolorem consequuntur.",
      },
      {
          id: 1,
          title: "Second Note",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatem, error nihil molestias ratione voluptatibus dolorem consequuntur.",
      },
      {
          id: 2,
          title: "Third Note",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatem, error nihil molestias ratione voluptatibus dolorem consequuntur.",
      },
      {
        id: 3,
        title: "Fourth Note",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatem, error nihil molestias ratione voluptatibus dolorem consequuntur.",
      },
      {
        id: 4,
        title: "Fifth Note",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatem, error nihil molestias ratione voluptatibus dolorem consequuntur.",
      },
      {
        id: 5,
        title: "Sixth Note",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatem, error nihil molestias ratione voluptatibus dolorem consequuntur.",
      },
      {
        id: 6,
        title: "Seventh Note",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatem, error nihil molestias ratione voluptatibus dolorem consequuntur.",
      },
      {
        id: 7,
        title: "Eighth Note",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatem, error nihil molestias ratione voluptatibus dolorem consequuntur.",
      },      {
        id: 8,
        title: "Ninth Note",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatem, error nihil molestias ratione voluptatibus dolorem consequuntur.",
      },
  ],
  }
  render() {
    return (
      <div className="App">
        <LeftRail />
        <CoreRail notes={this.state.notes}/>
      </div>
    );
  }
}

export default App;
