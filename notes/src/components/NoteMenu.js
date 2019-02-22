import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import Popup from 'react-popup';
import './Popup.css';


const NoteMenu = props => {
    return (
        <div className = 'note-menu'>
                <div className = 'menu-item'>
                    <Link to = {`/edit-note/${props.props.match.params.noteID}`}>edit</Link>
                </div>

            <div className = 'menu-item' onClick = {() => {
                Popup.create({
                    title: null,
                    content: 'Are you sure you want to delete this?',
                    buttons: {
                        left: [{
                            text: 'delete',
                            className: 'danger',
                            action: function () {
                                props.deleteNote(props.noteID)
                            
                                Popup.close(props.props.history.push('/'))
                            
                            },
                        }],

                        right: [{
                            text: 'no',
                            className: 'success',
                            action: function () {
                                // props.props.history.push('/')
                                Popup.close();
                            }
                        }]
                    }
                });
            }}><Link to = '/'>delete</Link>
            </div>
        </div>
    )
}

export default NoteMenu;