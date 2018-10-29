import React, {Component} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class FullPageNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: null,
            deleted: false,
        }
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        this.fetchNote(id);
    }

    fetchNote = id => {
        axios.get(`https://fe-notes.herokuapp.com/note/get/${id}`)
             .then(response => {
                this.setState(() => ({ note: response.data }));
             })
             .catch(err => {console.log(err)});
    };

    deleteHandler = id => {
        axios.delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
             .then(res => {this.setState({
                 deleted: true,
             })})
             .catch(err => console.log(err))
      }

    deleteModal = () => {
        document.querySelector('.modalBG').classList.toggle('show');
    }

    render() {
        if (this.state.deleted === true) {
            return (
                <Redirect to='/'></Redirect>
            )
        }
        if (this.state.note === null) {
            return (
                <div className='container'>
                    Fetching note...
                </div>
            )
        }
        return (
            <div className='container'>
                <h2>{this.state.note.title}</h2>
                <p>{this.state.note.textBody}</p>
                <span onClick={this.deleteModal}>X</span>
                <div className='modalBG'>
                    <div className='modal'>
                        <h3>Are you sure you want to delete this note?</h3>
                        <div onClick={() => this.deleteHandler(this.state.note._id)}>Delete</div>
                        <div onClick={this.deleteModal}>Cancel</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FullPageNote;