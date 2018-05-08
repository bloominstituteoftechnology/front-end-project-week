import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import "../App.css";
import { getNote, deleteNote } from '../Actions';


class ViewNote extends Component {
    component(props) {
        this.state = {
            modal: false
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getNote(id);
        console.log('THISPROPSNOTE', this.props.note);
      }

    render() {
        return(
            <div className='ViewNote-container'>
            {this.props.note ? 
                <div>
                    <Link to={{pathname: `${this.props.note.id}/edit`, state: this.props.note}}>Edit</Link>
                    <h2 className='ViewNote-title'>{this.props.note.title}</h2>
                    <p className='ViewNote-content'>{this.props.note.content}</p>
                </div> : <h2>Loading Note</h2>}
            </div>
            )

    }
}

const mapStateToProps = (state) => {
    return ({
        notes: state.notes,
        note: state.note
    })     
}

export default connect(mapStateToProps, { getNote, deleteNote })(ViewNote);