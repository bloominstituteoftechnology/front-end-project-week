import React, { Component } from "react";
import { Route } from "react-router-dom";

export default class ListView extends Component {
  constructor() {
    super();
    this.state = {
      notes: [
        {
          title: "1",
          content: "im a note"
        },
        {
          title: "2",
          content: "im a note too"
        },
        {
          title: "3",
          content: "im a note too"
        },
        {
          title: "4",
          content: "im a note too"
        },
        {
          title: "5",
          content: "im a note too"
        },
        {
          title: "6",
          content: "im a note too"
        },
        {
          title: "7",
          content: "im a note too"
        },
        {
          title: "8",
          content: "im a note too"
        },
        {
          title: "9",
          content: "im a note too"
        }
      ]
    };
  }

  render() {
    return (
      <div>
        {this.state.notes.map(notes => {
          return (
            <div key={notes.id}>
              <div>{notes.title}</div>
              <div>{notes.content}</div>
            </div>
          );
        })}
      </div>
    );
  }
}
