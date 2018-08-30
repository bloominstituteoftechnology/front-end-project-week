import React from 'react';
import './index.css';


class NotesList extends React.Component {
    constructor() {
        super()
        this.state = {
             notesArray: [
                 {
                     _id: 'ddddd1244444',
                     title: 'First Note',
                     body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla varius rutrum. Sed tempor consectetur sem, in maximus tortor semper ac. Morbi dignissim ex tellus',

                 },


                 {
                    _id: 'ddhhdd12444554',
                    title: 'Second Note',
                    body: 'Nulla Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla varius rutrum. Sed tempor consectetur sem, in maximus tortor semper ac. Morbi dignissim ex tellus',

                },

                {
                    _id: 'ddfffdd128884554',
                    title: 'Third Note',
                    body: 'Nulla Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla varius rutrum. Sed tempor consectetur sem, in maximus tortor semper ac. Morbi dignissim ex tellus',

                },


             ]
        }
    }
    


    
    
    render() {
      
        return (
         <div className='notes-container'>
            <div><h3 className='content-header'>Your Notes:</h3></div>
          <div className='noteslist'>
             {this.state.notesArray.map((note, index) => {
                 return (
                     <div className='note' key={index + note.title}>
                     <div>
                         <h4>{note.title}</h4>
                         <hr></hr>
                         <p>{note.body}</p>
                    </div>
            </div>
                 )
             })}
          </div>
        </div>
        );
    }
}

export default NotesList;