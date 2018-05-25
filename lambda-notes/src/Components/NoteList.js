import React, { Component } from 'react';
import { Container, Input, Button, Card } from 'reactstrap';
import NoteCard from "./NoteCard";
import "./NoteList.css";
// import { Icon } from 'react-native-elements';

class NoteList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            notes: this.props.notes
        };
    }

    handleSearch = el => {
        this.setState({ search: el.target.value });
    };

    render() {
        return (
            <div>
                {/* <Icon name='rowing' /> */}
                <Input className="search" type="text" placeholder="search your notes" onChange={this.handleSearch} value={this.state.handleSearch} />
                <h3>Your notes:</h3>
                <Card>
                    <Container className="note-list">
                        {this.state.notes.map(note => {
                            if (this.state.search === "") {
                                return (
                                    <NoteCard note={note} key={note.id} to={`note/${note.id}`} />
                                )
                            } else if (
                                note.title.toLowerCase().includes(this.state.search.toLowerCase()) ||
                                note.content.toLowerCase().includes(this.state.search.toLowerCase())
                            ) {
                                return <NoteCard key={note.title + note.id} note={note} />;
                            } else {
                                return null;
                            }
                        })}
                    </Container>
                </Card>
            </div>
        );
    }
}
export default NoteList;