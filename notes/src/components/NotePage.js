import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from 'react-router-dom';
import { fetchNote, fetchNotes, deleteNote } from '../actions';
import ReactModal from 'react-modal';
import Loading from './Loading';

ReactModal.setAppElement('#root');
const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
};
  
class NotePage extends Component {
    constructor() {
        super();
        this.state = {
            openModal: false,
            deleted: false
        }
    }

    componentDidMount() {
        this.props.fetchNote(this.props.match.params.id)
    }

    openModal = () => {
        this.setState({ openModal: true });
    }
    
    closeModal = () => {
        this.setState({ openModal: false });
    }

    deleteNote = (id) => {
        this.props.deleteNote(id).then(() => this.props.fetchNotes())
        this.setState({ deleted: true })
    }

    render() {
        let id = this.props.match.params.id
        return this.state.deleted ?
        <Redirect to='/' /> :
        this.props.fetching ?
        <Loading /> :
        (   <div>
                <div className='note-page'>
                    <div className='note-btns'>
                        <Link className='note-btn' to={`/${id}/edit`}>edit</Link>
                        <div className='note-btn' onClick={this.openModal}>delete</div>
                    </div>
                    <div className="full-note">
                        <div className="full-title">{this.props.note.title}</div>
                        <div className="full-body">{this.props.note.textBody}</div>
                    </div>
                </div>
                <ReactModal
                    isOpen={this.state.openModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                >
                    <div className='modal'>
                        Are you sure you want to delete this note?
                        <div className='modal-btns'>
                            <div className='modal-delete' onClick={() => this.deleteNote(id)}>Delete</div>
                            <div className='modal-no' onClick={this.closeModal}>No</div>
                        </div>
                    </div>
                </ReactModal>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        note: state.note,
        fetching: state.fetching,
    };
};

export default connect(mapStateToProps, { fetchNote, fetchNotes, deleteNote })(NotePage);