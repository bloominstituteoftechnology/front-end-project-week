import React, { Component } from 'react';
import { Link} from 'react-dom';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';


const noteCard = SortableElement(({note}) => {
    return (
        <div className='test'>
            <Link to={`/noteview/${note.id}`} className='note_card'>
                
                <h6 className='header_font'>{note.title}</h6>
                <hr/>
                <div className='card_text'>{note.text}</div>
            </Link>
        </div>
    )}
)

export const SortableList = SortableContainer(({notes}) => {
    return (
      <div className='col note_box'>
        {notes.map((note) => noteCard(note))}
          {/* <NoteCard key={`item-${index}`} index={index} note={note} />*/}
           
        {/* ))} */}
      </div>
    );
  });