import React, { Component } from "react";
import "./App.css";

import Notes from "./components/Notes";
import SideBar from "./components/SideBar";
class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [
        {
          tags: ["tag", "other tag"],
          title: "Note title",
          textBody:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi excepturi hic ab? Possimus deleniti hic reiciendis, eos amet nihil quia! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi excepturi hic ab? Possimus deleniti hic reiciendis, eos amet nihil quia! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi excepturi hic ab? Possimus deleniti hic reiciendis, eos amet nihil quia!"
        },
        {
          tags: ["tag", "other tag"],
          title: "Note title 2",
          textBody:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi excepturi hic ab? Possimus deleniti hic reiciendis, eos amet nihil quia! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi excepturi hic ab? Possimus deleniti hic reiciendis, eos amet nihil quia! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi excepturi hic ab? Possimus deleniti hic reiciendis, eos amet nihil quia!"
        },
        {
          tags: ["tag", "other tag"],
          title: "Note title 3",
          textBody:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi excepturi hic ab? Possimus deleniti hic reiciendis, eos amet nihil quia! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi excepturi hic ab? Possimus deleniti hic reiciendis, eos amet nihil quia! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi excepturi hic ab? Possimus deleniti hic reiciendis, eos amet nihil quia!"
        },
        {
          tags: ["tag", "other tag"],
          title: "Note title 4",
          textBody:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi excepturi hic ab? Possimus deleniti hic reiciendis, eos amet nihil quia! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi excepturi hic ab? Possimus deleniti hic reiciendis, eos amet nihil quia! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi excepturi hic ab? Possimus deleniti hic reiciendis, eos amet nihil quia!"
        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <SideBar />
        <Notes notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
