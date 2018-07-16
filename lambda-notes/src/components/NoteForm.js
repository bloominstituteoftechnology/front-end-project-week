import React, { Component } from 'react';
import {notes} from '../data.js';
import { Link } from 'react-router-dom';

    const NoteForm = props => {
        return ( 
            <div>
                <h2>Create New Note:</h2>
                <form>
                    <input
                    name= 'title'
                    placeholder= 'Note Title.'
                    onChange={props.handleInputChange}
                    value={props.title}
                    type='text'
                    />
                    <br/><br/>
                    <textarea 
                    type='text'
                    cols='80'
                    rows= '20'
                    name= 'content'
                    placeholder='Note Content'
                    onChange={props.handleInputChange}
                    value={props.content}
                    ></textarea>
                    <Link to={`/`} onClick={props.handleAddNote}><button className='save-button'>save</button>
                    </Link>
                </form>
            </div>
         );
    }
// }
 
export default NoteForm;