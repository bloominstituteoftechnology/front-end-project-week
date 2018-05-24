import React, { Component } from 'react';
import Notes from './Notes';
import NavBar from './NavBar';

class NoteList extends Component {
    constructor() {
        super();
        this.state = {
            notes: [
                {
                    title: 'Title #1',
                    text: 'The 14th Dalai Lama is the current Dalai Lama. Dalai Lamas are important monks of the Gelug school, the newest school of Tibetan Buddhism which was formally headed by the Ganden Tripas'
                },
                {
                    title: 'Title #2',
                    text: 'The 14th Dalai Lama is the current Dalai Lama. Dalai Lamas are important monks of the Gelug school, the newest school of Tibetan Buddhism which was formally headed by the Ganden Tripas.'
                },
                {
                    title: 'Title #3',
                    text: 'The 14th Dalai Lama is the current Dalai Lama.Dalai Lamas are important monks of the Gelug school, the newest school of Tibetan Buddhism which was formally headed by the Ganden Tripas.'
                },
                {
                    title: 'Title #4',
                    text: 'The 14th Dalai Lama is the current Dalai Lama. Dalai Lamas are important monks of the Gelug school, the newest school of Tibetan Buddhism which was formally headed by the Ganden Tripas.'
                },
                {
                    title: 'Title #5',
                    text: 'The 14th Dalai Lama is the current Dalai Lama. Dalai Lamas are important monks of the Gelug school, the newest school of Tibetan Buddhism which was formally headed by the Ganden Tripas.'
                },
                {
                    title: 'Title #6',
                    text: 'The 14th Dalai Lama is the current Dalai Lama. Dalai Lamas are important monks of the Gelug school, the newest school of Tibetan Buddhism which was formally headed by the Ganden Tripas.'
                },
                {
                    title: 'Title #7',
                    text: 'The 14th Dalai Lama is the current Dalai Lama. Dalai Lamas are important monks of the Gelug school, the newest school of Tibetan Buddhism which was formally headed by the Ganden Tripas.'
                },
                {
                    title: 'Title #8',
                    text: 'The 14th Dalai Lama is the current Dalai Lama. Dalai Lamas are important monks of the Gelug school, the newest school of Tibetan Buddhism which was formally headed by the Ganden Tripas.'
                },
                {
                    title: 'Title #9',
                    text: 'The 14th Dalai Lama is the current Dalai Lama. Dalai Lamas are important monks of the Gelug school, the newest school of Tibetan Buddhism which was formally headed by the Ganden Tripas.'
                }
            ]
        };
    }
    render() {
        return (
            <div>
                {this.state.notes.map(note => <Notes note={note} />)}
            </div>
        )
    }
}


export default NoteList;