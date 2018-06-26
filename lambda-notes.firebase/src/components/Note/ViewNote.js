import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { removeNote } from '../../actions';

import NoteCard from './NoteCard';
import DeleteNoteModal from './DeleteNoteModal';


class VieNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: '',
            id: '',
            isOpen: false,
            isDeleted: false,
        }
    }

    toggleModal = () => {
        this.setState({isOpen: !this.state.isOpen});
    }

    onDelete = () => {
        this.props.removeNote(this.state.id);
        this.setState({isDeleted: !this.state.isDeleted});
    }



    componentDidMount() {
        const id = this.props.match.params.id;
        const { data } = this.props;
        console.log("view note ", data);
        if(!data.fetched) {
            return <Redirect to="/"/>
        }

        data.notes.forEach(note => {       
            if( note.id === id)
                this.setState({note: note, id: id})
            }
        )
      }
    
    render() {
        return (
            <div className="App-content-container">
                <div className="nav">
                    <Link to={`/editnote/${this.state.id}`} className="view-note-nav">edit</Link>
                    <div className="view-note-nav" onClick={this.toggleModal}>
                        delete
                    </div>
                    <DeleteNoteModal show={this.state.isOpen} isDeleted={this.state.isDeleted} onDelete={this.onDelete} onClose={this.toggleModal}>
                        <div> Are you sure you want to delete this? </div>
                    </DeleteNoteModal>
                </div>
                <NoteCard note={this.state.note}/>
            </div>
        )
    }
}
 
const mapStateToProps = state => {
    const props = state;
    return props;
} 

export default connect(mapStateToProps, { removeNote })(VieNote);