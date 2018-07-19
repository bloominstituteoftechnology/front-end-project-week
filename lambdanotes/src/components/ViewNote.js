import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Modal from './Modal';
import '../styles/ViewNote.css';


class ViewNote extends Component {
    constructor(props) {
        super(props)
        this.state = {

            // id: this.props.match.params.id,
            modal: false,
        }
    }
    
    // toggleModal = () => {
    //     this.setState({ modal: this.state.modal });
    // }

    // handleDeleteNote = () => {
    //     this.toggleModal();
    //     this.props.deleteNote(this.props.singleNote.title);
    //     this.props.history.push('/');
    // }

    render() {
    return (
            <div>
                {/* <Link to={`editNote/${this.props.match.params.id}`}>edit</Link> */}
                {/* <Link>delete</Link> */}
            <div className="Viewnote">
            <h3>{this.props.title}</h3>
            <p>{this.props.body}</p>    
            </div>
            </div>
        )
    }
}


export default ViewNote;