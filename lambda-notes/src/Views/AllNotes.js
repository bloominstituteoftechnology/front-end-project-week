import React, { Component } from 'react';
import { Route } from "react-router-dom";
import NoteCard from "./NoteCard"
import axios from "axios";
import './Navigation.css';

export default class AllNotes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: []
        }
    }

    componentDidMount() {
        axios
            .get("https://killer-notes.herokuapp.com/note/get/all")
            .then(res => this.setState({notes: res.data}))
            .catch(error => console.log(error))
    }

  render() {
    return (
        <section>
            <h2>Your Notes:</h2>
            {this.state.notes.map(note => {
                return <NoteCard note={note} />
            })}
        </section>
    )
  }
}