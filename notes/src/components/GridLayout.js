import React from 'react';
// import styled from 'styled-components';
import GridLayout from 'react-grid-layout';
import Note from './Note';


const NoteList = ({ notes, noteClicked, history}) => {

    const layout = notes.map((note, i) => {
        return {
            i: note._id,
            x: (i % 3) * 2,
            y: Infinity,
            w: 2,
            h: 2
        }
    })

    return (
        <GridLayout class="layout" layout={layout} cols={6} margin={[8, 8]} compacType="vertical">
            {/* <span class="title-seperator">NOTES</span> */}
            {notes.map(note => 
                <Note 
                    containerWidth={150}
                    note={note} 
                    key={note._id} 
                    noteClicked={e => noteClicked(e, note._id, history)}
                />)
            }
        </GridLayout>
    );
}

export default NoteList;
