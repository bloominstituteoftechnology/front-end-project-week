import React, { Component } from 'react';
import { Container, Input, Button } from 'reactstrap';
import NoteCard from "./NoteCard";

class NoteList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            notes: this.props.notes
        };
    }
    render() {
        console.log(this.state.props);
        return (
            <div>
                <h1>Your notes:</h1>
                <Input type="text" placeholder="search your notes"/>
                <Container>
                    {/* {this.notes.map(note => {
                        return (
                            <div key={note.id} to={`note/${note.id}`}>
                                <div>
                                    {note.title}
                                </div>
                                <div>
                                    {note.content}
                                </div>
                            </div>
                        )
                    })} */}
                </Container>
            </div>
        );
    }
}
export default NoteList;