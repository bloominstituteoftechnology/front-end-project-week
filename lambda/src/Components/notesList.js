import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, CardText } from 'reactstrap';



class NotesList extends Component {
    state = {
        notes: [],
    }

    componentDidMount() {
        this.setState({ notes: this.props.notes })
    }

    render() {
        return (
            <div className="NotesList">
            <h4 className="Title">Your Notes</h4>
                <div className="ListCards">
                    {this.state.notes.map(((note) => {
                        return (
                            <div className="ListCard" key={note.id}>
                                <Link to={{pathname: `/notes/${ note.id }}`, state: { currentNote: note }}}>
                                    <Card>
                                        <CardHeader className="Title">{note.title}</CardHeader>
                                        <CardBody>
                                        <CardText>{note.text}</CardText>
                                        </CardBody>
                                    </Card>
                                </Link>
                            </div>
                        )
                    }))}
                </div>
            </div>
        );
    }
}

export default NotesList;



