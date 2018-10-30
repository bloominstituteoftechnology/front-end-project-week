import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Modal from './Modal';



class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
        };
    };
        
    handleToggleModal() {
        this.setState({ showModal: !this.state.showModal });
    };
    
    render() {
        return (
            <div className="note-container">
                <div className="link-container">
                    <div className="edit">
                        edit
                    </div>
                    <div className="delete">
                        <Link to="/Modal">
                            <Modal />
                        </Link>
                    </div>
                </div>
                <div className="body-container">
                    <h3>{props.note.title}</h3>
                    <p>{props.note.textBody}</p>
                </div>
            </div> 
        )
    };
};
export default Note;


