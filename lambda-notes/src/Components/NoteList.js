import React, { Component } from 'react';
import { Container, Input, Button } from 'reactstrap';
import NoteCard from "./NoteCard";
import "./NoteList.css";

class NoteList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            notes: this.props.notes
        };
    }
    render() {
        console.log(this.state);
        return (
            <div>
                <Input className="search" type="text" placeholder="search your notes"/>
                <h3>Your notes:</h3>
                <Container className="note-list">
                    {this.state.notes.map(note => {
                        return (
                            <NoteCard note={note} key={note.id} to={`note/${note.id}`}/>
                        )
                    })}
                </Container>
            </div>
        );
    }
}
export default NoteList;