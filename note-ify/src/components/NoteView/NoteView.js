import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DeleteNote from '../DeleteNote/DeleteNote'
import './index.css'

class NoteView extends Component {
    constructor() {
        super()
        this.state = {
            displayDelete: false,
            matched: [],
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

    componentWillMount() {
        let routeId = this.props.match.params.id;
        let matched = this.state.notesArray.filter((item)=> item.__id === routeId );
        this.setState({matched: matched})
    }

    showModal=() => {
        this.setState({displayDelete: !this.state.displayDelete})
    }
    render() {
        return (
            <div className='noteView_container'>
                <div className="noteView_topContent">
                    <h3 className='content_header'>
                        {this.state.matched[0].title}
                    </h3>
                    <div>
                        <Link to={`/edit/${this.props.match.params.id}`} className='edit_delete'>edit</Link>
                        <a 
                            href='#' 
                            className='edit_delete'
                            onClick={this.showModal}
                        >
                            delete
                        </a>
                    </div>
                </div>
                <div className='notesList'> 
                    <p className=''>
                        {this.state.matched[0].body}
                    </p>
                </div>
                <DeleteNote 
                    toggle={this.state.displayDelete}
                    showModal={this.showModal}
                />
            </div>
        );
    }
}


export default NoteView;