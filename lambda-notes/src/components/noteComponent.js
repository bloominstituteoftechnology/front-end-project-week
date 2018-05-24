import React from 'react';
import Note from './note.js'
import loremipsem from '../loremipsem';
// import CardFormat from './cardFormat'

const NoteComponent = (props) => {
    return (
        <div>
            {props.notesMadeByUser.map((note, index) => {
                return <Note
                    key={index}
                    note={note}
                    handleDeleteOption={props.handleDeleteOption}
                />
            })}
        </div>
    )
}

export default NoteComponent;