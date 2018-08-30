import React from 'react';
import './index.css';

class NotesView extends React.Component {
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
         <div className='notesView-container'>
           
            <div className='noteView-top'>
                <h3 className='content-header'>{this.state.notesArray[0].title}</h3>
                <div>
                    <a href='#' className='edit-delete'>edit</a>
                    <a href='#' className='edit-delete'>delete</a>
                </div>
            </div>
          <div className='noteslist'>
            <p>
                {this.state.notesArray[0].body}
            </p>
          </div>
        </div>
        );
    }
}

export default NotesView;