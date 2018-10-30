import React, { Component } from 'react';
import { Route } from "react-router-dom";
import NoteCard from "./NoteCard";
import SingleNoteView from "../Views/SingleNoteView";
import axios from "axios";
import './AllNotes.css';
import { CSVLink } from "react-csv";

export default class AllNotes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: false,
            selected: 0,
        }
    }

    componentDidMount() {
        axios
            .get("https://fe-notes.herokuapp.com/note/get/all")
            .then(res => this.setState({notes: res.data}))
            .catch(error => console.log(error))
    }

    selectNote = id => this.setState({ selected: id });

    alphabeticalSort = e => {
        e.preventDefault();
        this.setState(
            { notes: 
                this.state.notes.sort(function(a, b){
                    let titleA=a.title.toLowerCase()
                    let titleB=b.title.toLowerCase()
                    if (titleA < titleB) { 
                        return -1; 
                    }
                    if (titleA > titleB) {
                        return 1;
                    }
                    return 0; 
            })})
    }
     
    headers = [
        { label: "Title", key: "title" },
        { label: "Note Content", key: "textBody" },
    ];

  render() {
    return (
        this.state.notes ?
        <section>
            <CSVLink data={this.state.notes} headers={this.headers}>
                Download your notes!
            </CSVLink>
            <h2 onClick={this.alphabeticalSort}>Sort</h2>
            <h2>Your Notes:</h2>
            <div className="notes">
                {this.state.notes.map(note => {
                    return <NoteCard key={note._id} note={note} />
                })}
            </div>
        </section> :
        <h3>Your Notes are loading...</h3>
    )
  }
}