import React, { Component } from 'react';
import './css/App.css';
import LeftRail from './containers/leftRail';
import CoreRail from './containers/coreRail';


class App extends Component {
  state = {
    notes: [
      {
          id: 0,
          title: "Note Title",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatem, error nihil molestias ratione voluptatibus dolorem consequuntur.",
      },
      {
          id: 1,
          title: "Note Title",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatem, error nihil molestias ratione voluptatibus dolorem consequuntur.",
      },
      {
          id: 2,
          title: "Note Title",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatem, error nihil molestias ratione voluptatibus dolorem consequuntur.",
      },
      {
        id: 3,
        title: "Note Title",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatem, error nihil molestias ratione voluptatibus dolorem consequuntur.",
      },
      {
        id: 4,
        title: "Note Title",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatem, error nihil molestias ratione voluptatibus dolorem consequuntur.",
      },
      {
        id: 5,
        title: "Note Title",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatem, error nihil molestias ratione voluptatibus dolorem consequuntur.",
      },
      {
        id: 6,
        title: "Note Title",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatem, error nihil molestias ratione voluptatibus dolorem consequuntur.",
      },
      {
        id: 7,
        title: "Note Title",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatem, error nihil molestias ratione voluptatibus dolorem consequuntur.",
      },      {
        id: 8,
        title: "Note Title",
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
