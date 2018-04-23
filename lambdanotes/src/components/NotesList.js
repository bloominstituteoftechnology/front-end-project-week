import React, { Component } from "react";

export default class NotesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notesList: [
        {
          id: 0,
          title: "Remember these notes!",
          content: "something something notetaking"
        },
        {
          id: 1,
          title: "Remember these notes!",
          content: "something something notetaking"
        },
        {
          id: 2,
          title: "Remember these notes!",
          content: "something something notetaking"
        },
        {
          id: 3,
          title: "Remember these notes!",
          content: "something something notetaking"
        },
        {
          id: 4,
          title: "Remember these notes!",
          content: "something something notetaking"
        },
        {
          id: 5,
          title: "Remember these notes!",
          content: "something something notetaking"
        }
      ]
    };
  }
}
