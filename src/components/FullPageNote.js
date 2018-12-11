import React, {Component} from 'react';
import axios from 'axios';
import {Redirect, Link} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

class FullPageNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: null,
            deleted: false,
        }
    }
    
    // grab the id and then fetch the relevant note.
    componentDidMount() {
        const {id} = this.props.match.params;
        this.fetchNote(id);
    }

    // GET the note by using the API endpoint and passing in the id
    fetchNote = id => {
        axios.get(`https://vellumnotes.herokuapp.com/note/get/${id}`)
             .then(response => {
                this.setState(() => ({ note: response.data }));
             })
             .catch(err => {console.log(err)});
    };

    // DELETE the note by using the API endpoint and passing in the id
    deleteHandler = id => {
        axios.delete(`https://vellumnotes.herokuapp.com/note/delete/${id}`)
             .then(res => {this.setState({
                 deleted: true,
             })})
             .catch(err => console.log(err))
      }

    // bring up the modal
    deleteModal = () => {
        document.querySelector('.modalBG').classList.toggle('show');
    }

    render() {
        // redirect upon delete button press (because that will set deleted to true)
        if (this.state.deleted === true) {
            return (
                <Redirect to='/'></Redirect>
            )
        }
        // put a loader on the screen if getting the note is slow.
        if (this.state.note === null) {
            return (
                <div className='container'>
                    Fetching note...
                </div>
            )
        }
        // here's the full page note with delete and edit buttons (edit is a link to the form, with the note body passed through)
        // there's also a modal in which you can either delete or cancel
        return (
            <div className='container'>
                <h1>View Note:</h1>
                
                <div className='fullpage'>
                    <h2 className='title'>{this.state.note.title}</h2>
                    <ReactMarkdown className='body' source={this.state.note.textBody} />
                    {this.state.note.tags ? this.state.note.tags.split(', ' || ',').map(tag => <p className='tag'>{tag}</p>) : null}
                    {/* <p className='body'>{this.state.note.textBody}</p> */}
                    <span className='delete' onClick={this.deleteModal}>✖</span>
                    <Link className='edit' to={{ pathname: '/add', state: { note: this.state.note} }}>EDIT</Link>
                </div>
                
                <div className='modalBG'>
                    <div className='modal'>
                        <h3>Are you sure you want to delete this note?</h3>
                        <div className='buttons'>
                            <div className='delete-confirm' onClick={() => this.deleteHandler(this.state.note.id)}>Delete</div>
                            <div className='cancel' onClick={this.deleteModal}>Cancel</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FullPageNote;