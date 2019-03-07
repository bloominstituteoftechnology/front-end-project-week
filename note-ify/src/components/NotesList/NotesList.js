import React, { Component } from 'react';
import './index.css'
import { Link } from 'react-router-dom'


class NotesList extends Component {
    constructor() {
        super()
        this.state = {
            notesArray: [
                {
                    __id: 'asdasj923851',
                    title: 'First Note',
                    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ornare dolor a enim luctus, sed efficitur leo ornare. Donec malesuada suscipit nisl, eu condimentum augue tempus eget. Cras semper luctus lorem a tincidunt. Sed pulvinar commodo sem, eget finibus nulla mattis sit amet. Cras odio tortor, egestas a auctor sed, volutpat quis justo. Etiam efficitur turpis at mauris dignissim efficitur. Vestibulum et odio lectus. Praesent lobortis commodo massa, sed porttitor nunc semper tincidunt. Vivamus in dolor pharetra, euismod eros vitae, porta turpis. Etiam pharetra tempus lacus. Morbi ultrices felis quis ante imperdiet molestie sed vel metus.',
                    createdAt: 1527536455211
                },
                {
                    __id: 'qwpekhf923851',
                    title: 'Second Note',
                    body: 'Cpemr ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ornare dolor a enim luctus, sed efficitur leo ornare. Donec malesuada suscipit nisl, eu condimentum augue tempus eget. Cras semper luctus lorem a tincidunt. Sed pulvinar commodo sem, eget finibus nulla mattis sit amet. Cras odio tortor, egestas a auctor sed, volutpat quis justo. Etiam efficitur turpis at mauris dignissim efficitur. Vestibulum et odio lectus. Praesent lobortis commodo massa, sed porttitor nunc semper tincidunt. Vivamus in dolor pharetra, euismod eros vitae, porta turpis. Etiam pharetra tempus lacus. Morbi ultrices felis quis ante imperdiet molestie sed vel metus.',
                    createdAt: 1527536455244
                },
                {
                    __id: 'perotyf923851',
                    title: 'Third Note',
                    body: 'Serperum ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ornare dolor a enim luctus, sed efficitur leo ornare. Donec malesuada suscipit nisl, eu condimentum augue tempus eget. Cras semper luctus lorem a tincidunt. Sed pulvinar commodo sem, eget finibus nulla mattis sit amet. Cras odio tortor, egestas a auctor sed, volutpat quis justo. Etiam efficitur turpis at mauris dignissim efficitur. Vestibulum et odio lectus. Praesent lobortis commodo massa, sed porttitor nunc semper tincidunt. Vivamus in dolor pharetra, euismod eros vitae, porta turpis. Etiam pharetra tempus lacus. Morbi ultrices felis quis ante imperdiet molestie sed vel metus.',
                    createdAt: 1527536455253
                },
                {
                    __id: '124asfaf923851',
                    title: 'Fourth Note',
                    body: 'Serperum ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ornare dolor a enim luctus, sed efficitur leo ornare. Donec malesuada suscipit nisl, eu condimentum augue tempus eget. Cras semper luctus lorem a tincidunt. Sed pulvinar commodo sem, eget finibus nulla mattis sit amet. Cras odio tortor, egestas a auctor sed, volutpat quis justo. Etiam efficitur turpis at mauris dignissim efficitur. Vestibulum et odio lectus. Praesent lobortis commodo massa, sed porttitor nunc semper tincidunt. Vivamus in dolor pharetra, euismod eros vitae, porta turpis. Etiam pharetra tempus lacus. Morbi ultrices felis quis ante imperdiet molestie sed vel metus.',
                    createdAt: 1527536455254
                },
                {
                    __id: 'hgyjr34f923851',
                    title: 'Fifth Note',
                    body: 'Serperum ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ornare dolor a enim luctus, sed efficitur leo ornare. Donec malesuada suscipit nisl, eu condimentum augue tempus eget. Cras semper luctus lorem a tincidunt. Sed pulvinar commodo sem, eget finibus nulla mattis sit amet. Cras odio tortor, egestas a auctor sed, volutpat quis justo. Etiam efficitur turpis at mauris dignissim efficitur. Vestibulum et odio lectus. Praesent lobortis commodo massa, sed porttitor nunc semper tincidunt. Vivamus in dolor pharetra, euismod eros vitae, porta turpis. Etiam pharetra tempus lacus. Morbi ultrices felis quis ante imperdiet molestie sed vel metus.',
                    createdAt: 1527536455255
                },
                {
                    __id: 'dh563sf923851',
                    title: 'Sixth Note',
                    body: 'Serperum ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ornare dolor a enim luctus, sed efficitur leo ornare. Donec malesuada suscipit nisl, eu condimentum augue tempus eget. Cras semper luctus lorem a tincidunt. Sed pulvinar commodo sem, eget finibus nulla mattis sit amet. Cras odio tortor, egestas a auctor sed, volutpat quis justo. Etiam efficitur turpis at mauris dignissim efficitur. Vestibulum et odio lectus. Praesent lobortis commodo massa, sed porttitor nunc semper tincidunt. Vivamus in dolor pharetra, euismod eros vitae, porta turpis. Etiam pharetra tempus lacus. Morbi ultrices felis quis ante imperdiet molestie sed vel metus.',
                    createdAt: 1527536455256
                }
            ]
        }
    }

    render() {
        const notesCollection = [
            <div className='note'>
                <h4>Note Title</h4>
                <hr></hr>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ornare dolor a enim luctus, sed efficitur leo ornare. Donec malesuada suscipit nisl, eu condimentum augue tempus eget. Cras semper luctus lorem a tincidunt. Sed pulvinar commodo sem, eget finibus nulla mattis sit amet. Cras odio tortor, egestas a auctor sed, volutpat quis justo. Etiam efficitur turpis at mauris dignissim efficitur. Vestibulum et odio lectus. Praesent lobortis commodo massa, sed porttitor nunc semper tincidunt. Vivamus in dolor pharetra, euismod eros vitae, porta turpis. Etiam pharetra tempus lacus. Morbi ultrices felis quis ante imperdiet molestie sed vel metus.</p>
            </div>,
            <div className='note'>
                <h4>Note Title</h4>
                <hr></hr>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ornare dolor a enim luctus, sed efficitur leo ornare. Donec malesuada suscipit nisl, eu condimentum augue tempus eget. Cras semper luctus lorem a tincidunt. Sed pulvinar commodo sem, eget finibus nulla mattis sit amet. Cras odio tortor, egestas a auctor sed, volutpat quis justo. Etiam efficitur turpis at mauris dignissim efficitur. Vestibulum et odio lectus. Praesent lobortis commodo massa, sed porttitor nunc semper tincidunt. Vivamus in dolor pharetra, euismod eros vitae, porta turpis. Etiam pharetra tempus lacus. Morbi ultrices felis quis ante imperdiet molestie sed vel metus.</p>
            </div>,
            <div className='note'>
                <h4>Note Title</h4>
                <hr></hr>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ornare dolor a enim luctus, sed efficitur leo ornare. Donec malesuada suscipit nisl, eu condimentum augue tempus eget. Cras semper luctus lorem a tincidunt. Sed pulvinar commodo sem, eget finibus nulla mattis sit amet. Cras odio tortor, egestas a auctor sed, volutpat quis justo. Etiam efficitur turpis at mauris dignissim efficitur. Vestibulum et odio lectus. Praesent lobortis commodo massa, sed porttitor nunc semper tincidunt. Vivamus in dolor pharetra, euismod eros vitae, porta turpis. Etiam pharetra tempus lacus. Morbi ultrices felis quis ante imperdiet molestie sed vel metus.</p>
            </div>,
            <div className='note'>
                <h4>Note Title</h4>
                <hr></hr>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ornare dolor a enim luctus, sed efficitur leo ornare. Donec malesuada suscipit nisl, eu condimentum augue tempus eget. Cras semper luctus lorem a tincidunt. Sed pulvinar commodo sem, eget finibus nulla mattis sit amet. Cras odio tortor, egestas a auctor sed, volutpat quis justo. Etiam efficitur turpis at mauris dignissim efficitur. Vestibulum et odio lectus. Praesent lobortis commodo massa, sed porttitor nunc semper tincidunt. Vivamus in dolor pharetra, euismod eros vitae, porta turpis. Etiam pharetra tempus lacus. Morbi ultrices felis quis ante imperdiet molestie sed vel metus.</p>
            </div>,
            <div className='note'>
                <h4>Note Title</h4>
                <hr></hr>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ornare dolor a enim luctus, sed efficitur leo ornare. Donec malesuada suscipit nisl, eu condimentum augue tempus eget. Cras semper luctus lorem a tincidunt. Sed pulvinar commodo sem, eget finibus nulla mattis sit amet. Cras odio tortor, egestas a auctor sed, volutpat quis justo. Etiam efficitur turpis at mauris dignissim efficitur. Vestibulum et odio lectus. Praesent lobortis commodo massa, sed porttitor nunc semper tincidunt. Vivamus in dolor pharetra, euismod eros vitae, porta turpis. Etiam pharetra tempus lacus. Morbi ultrices felis quis ante imperdiet molestie sed vel metus.</p>
            </div>,
            <div className='note'>
                <h4>Note Title</h4>
                <hr></hr>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ornare dolor a enim luctus, sed efficitur leo ornare. Donec malesuada suscipit nisl, eu condimentum augue tempus eget. Cras semper luctus lorem a tincidunt. Sed pulvinar commodo sem, eget finibus nulla mattis sit amet. Cras odio tortor, egestas a auctor sed, volutpat quis justo. Etiam efficitur turpis at mauris dignissim efficitur. Vestibulum et odio lectus. Praesent lobortis commodo massa, sed porttitor nunc semper tincidunt. Vivamus in dolor pharetra, euismod eros vitae, porta turpis. Etiam pharetra tempus lacus. Morbi ultrices felis quis ante imperdiet molestie sed vel metus.</p>
            </div>]
        return (
            <div className='notesList_container'>
                <div><h3 className='content_header'>Your Notes:</h3></div>
                <div className='notesList'>
                    {this.state.notesArray.map((note, index) => {
                        return (
                            <Link to={'/note/'+note.__id} className='unstyled_link' key={note.__id}>
                            <div className='note' >
                                <h4>{note.title}</h4>
                                <hr></hr>
                                <p>{note.body}</p>
                            </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default NotesList;