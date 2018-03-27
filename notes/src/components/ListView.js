import React, { Component } from "react";
import Template from "./Template";

class ListView extends Component {
  constructor() {
    super();
    this.state = {
      notes: [
        {
          id: 0,
          title: "Placeholder title",
          content: "Placeholder content"
        },
        {
          id: 1,
          title: "Placeholder title",
          content: "Placeholder content"
        },
        {
          id: 2,
          title: "Placeholder title",
          content: "Placeholder content"
        },
        {
          id: 3,
          title: "Placeholder title",
          content: "Placeholder content"
        },
        {
          id: 4,
          title: "Placeholder title",
          content: "Placeholder content"
        },
        {
          id: 5,
          title: "Placeholder title",
          content: "Placeholder content"
        },
        {
          id: 6,
          title: "Placeholder title",
          content: "Placeholder content"
        },
        {
          id: 7,
          title: "Placeholder title",
          content: "Placeholder content"
        },
        {
          id: 8,
          title: "Placeholder title",
          content: "Placeholder content"
        }
      ]
    };

    this.handleSub = this.handleSub.bind(this);
    this.handleIn = this.handleIn.bind(this);
  }

  render() {
    console.log("Rendering..");
    return (
      <div>
        <ul>
          {this.state.notes.map(note => {
            return (
              <li key={this.state.id}>
                <Template note={note} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  handleSub() {}

  handleIn() {}
}

export default ListView;

// ListView holds the state of the app

// Display ListView using map

// Pass each note from notes to Template

// Pass state to CreateNewView
