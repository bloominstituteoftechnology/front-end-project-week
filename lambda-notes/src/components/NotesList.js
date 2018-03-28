import React, { Component } from 'react';
import allNotes from '../dummyData';
import { Link } from 'react-router-dom';


class NotesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            neededData: allNotes,
        }
    }

    componentDidMount() {
        this.setState( {neededData: this.state.neededData} );
    }

    render() {
        return (
            <div className="NoteItems">
              <h5 className="NoteItemsTitle">Your Notes:</h5>
                <div className="NotesList">
                    {this.state.neededData.map(note => {
                        return (
                            <div className="NoteItem" note={note} key={note.id}>

                                <Link to={{ pathname:`/notes/${note.id}`, state: { currentId: note } }}>

                                    <div className="NoteCard">
                                        <div className="NoteContainer">
                                            <header> {note.title} </header>
                                            <p> {note.description} </p>
                                        </div>
                                    </div>

                                </Link>

                            </div>
                        )
                    })}
                </div>
            </div>
        
        )
    }
    
}

export default NotesList;