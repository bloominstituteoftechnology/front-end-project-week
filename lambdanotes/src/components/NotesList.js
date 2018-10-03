import React, { Component } from 'react';
import Notes from './Notes';

 class NotesList extends Component {
    constructor(props) {
    super(props);
    this.state= {
        notes: [
            {id: 1,
            title: "Cats",
            textBody: "meow meow meow ow"},
        ]
    }
}
    render() {
        return (
            <div className="noteWrap">
                    {this.props.notesList.map((note) => {
                        return (
                            <div>
                            <Notes
                                key={note.id}
                                title={note.title}
                                textBody={note.textBody}
                                onClick={this.onClick}
                            />
                             </div>
                        ); 
                    })}
            </div>
         );
     }
 }
 export default NotesList;

