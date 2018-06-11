import React, { Component } from 'react';
import './index.css';

class NoteList extends Component {
    render() {
        const notesElements = [<div className = 'note'>
        <div>
            <h4>Note Title</h4>
        <hr></hr>
             <p>Red hair crookshanks bludger Marauder’s Map Prongs sunshine daisies butter mellow Ludo Bagman. Beaters gobbledegook N.E.W.T.</p>
        </div>
     </div>,
     <div className='note'>
        <div>
            <h4>Note Title</h4>
        <hr></hr>
             <p>Red hair crookshanks bludger Marauder’s Map Prongs sunshine daisies butter mellow Ludo Bagman. Beaters gobbledegook N.E.W.T.</p>
        </div>
     </div>,
     <div className='note'>
        <div>
            <h4>Note Title</h4>
        <hr></hr>
             <p>Red hair crookshanks bludger Marauder’s Map Prongs sunshine daisies butter mellow Ludo Bagman. Beaters gobbledegook N.E.W.T.</p>
        </div>
     </div>,
     <div className='note'>
        <div>
            <h4>Note Title</h4>
        <hr></hr>
             <p>Red hair crookshanks bludger Marauder’s Map Prongs sunshine daisies butter mellow Ludo Bagman. Beaters gobbledegook N.E.W.T.</p>
        </div>
     </div>,
     <div className='note'>
        <div>
            <h4>Note Title</h4>
        <hr></hr>
             <p>Red hair crookshanks bludger Marauder’s Map Prongs sunshine daisies butter mellow Ludo Bagman. Beaters gobbledegook N.E.W.T.</p>
        </div>
     </div>,
     <div className='note'>
        <div>
            <h4>Note Title</h4>
        <hr></hr>
             <p>Red hair crookshanks bludger Marauder’s Map Prongs sunshine daisies butter mellow Ludo Bagman. Beaters gobbledegook N.E.W.T.</p>
        </div>
     </div>,
     ]
        return (
                <div classname = 'notesList_container'>
                <div classname='content_header'><h3> Your Notes:</h3></div>
                <div className='notesList'>
                {notesElements}
            </div>
            </div>
        );
    }
}

export default NoteList;