import React, { Component } from 'react';
import NoteCard from "./NoteCard";
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

    sortNotes = (e, alphaSort) => {
        e.preventDefault();
        alphaSort === true ?
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
            })}) :
            this.setState(
                { notes: 
                    this.state.notes.sort(function(b, a){
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
            <div className="btn-container">
                <CSVLink download="mynotes.csv" data={this.state.notes} headers={this.headers}>
                    Download your notes!
                </CSVLink>
                <div class="dropdown">
                    <button class="dropbtn">Sort Options</button>
                    <div class="dropdown-content">
                        <div onClick={(e) => this.sortNotes(e, true)}>A-Z</div>
                        <div onClick={(e) => this.sortNotes(e, false)}>Z-A</div>
                    </div>
                </div>
            </div>
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