import React from 'react';
import axios from 'axios';
import NoteCard from './NoteCard';
import EditNote from './EditNote';
import { Link } from "react-router-dom";
import '../App.css';
import { Modal, ModalH3 } from '../Styles';

class Note extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            notes: [
                {
                    title: '',
                    textBody: '',
                    editTitle: '',
                    editBody: '',
                }
            ],
        };
    }

    editNote = (event) => {
        event.preventDefault();
        this.setState({ editing: true });
    }

    deleteNote = event => {
        event.preventDefault();
        const url = `https://fe-notes.herokuapp.com/note/delete/${this.state.note._id}`;
        axios.delete(url)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.error(error);
        })
       this.props.history.push('/');
    }

    deleteModal = () => {
        document.querySelector('.modal').classList.toggle('show');
    }

    componentDidMount(props) {
        const id = this.props.match.params.id;
        this.fetchNote(id);
    }

    fetchNote = id => {
        // console.log(this.state.id);
        axios
         .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
         .then(response => {
             this.setState(() => ({ note: response.data }));
         })
         .catch(error => {
             console.error(error);
         });
    };

    componentWillReceiveProps(newProps){
        if(this.props.match.params.id !== newProps.match.params.id){
          this.fetchNote(newProps.match.params.id);
        }
    }

    render() {
        if (!this.state.note) {
            return <div>Loading Note information...</div>;
        }
        if (this.state.editing === true) {
            return <EditNote updateNote={this.props.updateNote} editNote={this.editNote} {...this.props} note={this.state.note}/>
        }
        return (
            <div>
                <Link to={'/'}>Home</Link>    
                <NoteCard note={this.state.note} />
                <button onClick={this.editNote}>Edit</button>
                <button onClick={this.deleteModal}>Delete</button>
                    <Modal className='modal'>
                        <div className='innerModal'>
                            <ModalH3>Are you sure you want to delete this?</ModalH3>
                                <div>
                                    <button className="btnRed" onClick={this.deleteNote}>Delete</button>
                                    <button className="btnAqua" onClick={this.deleteModal}>Cancel</button>
                                </div>
                        </div>
                    </Modal>
            </div>   
        )
    }
}

export default Note;