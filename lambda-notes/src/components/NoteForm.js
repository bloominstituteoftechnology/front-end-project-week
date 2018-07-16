import React, { Component } from 'react';
import {notes} from '../data.js';

    const NoteForm = props => {
        return ( 
            <div>
                <form>
                    <input
                    name= 'title'
                    placeholder= 'title...'
                    onChange={props.handleInputChange}
                    value={props.title}
                    />
                    <input 
                    name= 'content'
                    placeholder='content...'
                    onChange={props.handleInputChange}
                    value={props.content}
                    />
                    <button onClick={props.handleAddNote}>New Note</button>
                </form>
            </div>
         );
    }
// }
 
export default NoteForm;