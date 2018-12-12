import React from 'react';

import Popup from 'react-popup';
import '../App.css';
import { Link } from 'react-router-dom';
import './Popup.css'
import axios from 'axios';


const NoteMenu = props => {
 
    return (
        <div className='note-menu'>
                <div className='menu-item'>
            <Link to='update-note'>Edit</Link>
        </div>
        <div className='menu-item' onClick={() => {
            Popup.create({
                title: null,
                content: 'Are you sure you want to delete this?',
                buttons: {
                    left: [{
                        text: 'Delete',
                        className: 'danger',
                        action: function () {
                            console.log('button clicked')
                            props.deleteNote(props.noteID)
                            /** Close this popup. Close will always close the current visible one, if one is visible */
                            // Popup.close(props.history.push('/'));
                           props.props.history.push('/')
                           Popup.close();
                        }
                    }],
                    right: [ {
                        text: 'No',
                        className: 'success',
                        action: function () {
                            Popup.close();
                        }
                    }]
                }
            });
            }}>Delete
        </div>

        </div>
        
        
        
    )
}

export default NoteMenu;