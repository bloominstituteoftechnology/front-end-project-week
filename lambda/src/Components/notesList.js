import React, { Component } from 'react';

class NotesList extends Component {
    state = {
        notes: [
            {
                title: "Note Title",
                content: 
                    "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus. blandit ac purus a, efficitur mollis.."
            },
            {
                title: "Note Title",
                content: 
                    "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus. blandit ac purus a, efficitur mollis.."
                
            },
            {
                title: "Note Title",
                content: 
                    "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus. blandit ac purus a, efficitur mollis.."
            },
            {
                title: "Note Title",
                content: 
                    "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus. blandit ac purus a, efficitur mollis.."
            },
            {
                title: "Note Title",
                content: 
                    "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus. blandit ac purus a, efficitur mollis.."
            },
            {
                title: "Note Title",
                content: 
                    "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus. blandit ac purus a, efficitur mollis.."
            },
            {
                title: "Note Title",
                content: 
                    "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus. blandit ac purus a, efficitur mollis.."
            },
            {
                title: "Note Title",
                content: 
                    "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus. blandit ac purus a, efficitur mollis.."
            },
            {
                title: "Note Title",
                content: 
                    "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus. blandit ac purus a, efficitur mollis.."
            }
        ]
    };

    render() {
        return (
            <div className="container">
                <h2>Notes List</h2>
            <div className="container d-flex">
                {this.state.notes.map((note) => {
                    return (
                        <div className="container">
                        <div className="row">
                        <div className="col-xl border border-primary">
                            <h4>{note.title}</h4>
                            <hr />
                            <div>{note.content}</div>
                        </div>
                        </div>
                        </div>
                    );
                })}
            </div>
            </div>
        );
    }
}

export default NotesList;