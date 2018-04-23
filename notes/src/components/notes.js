import React, { Component } from "react";
import SideBar from "./sidebar";
import ListView from "./listview";
import './notes.css';

export default class MovieList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        notes: []
      };
    }

    componentDidMount() {

    }

    render() {
        return(
            <div className="full-container">
                <SideBar />
                <ListView />
            </div>
        )
    }
}