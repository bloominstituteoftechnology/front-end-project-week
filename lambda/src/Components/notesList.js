import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class NotesList extends Component {
    state = {
        notes: [],
    }

    componentDidMount() {
        this.setState({ notes: this.props.notes })
    }

    render() {
        return (
            <div>
                <h1>Your Notes</h1>
                <div>
                    {this.state.notes.map(((note) => {
                        return (
                            <div className="ListCard">
                                <Link to={{pathname: `/notes/${ note.id }}`, state: { currentNote: note }}}>
                                    <h5>{note.titel}</h5>
                                    <h5>{note.text}</h5>
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



