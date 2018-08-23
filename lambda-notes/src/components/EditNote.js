
import React from 'react';
// import { Button, Form, Input, Row, Container, Col } from 'reactstrap';
//  import './EditNote.css';
class EditNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: props.notes,
            note: {},
            title: '',
            text: ''
        }
    }
   
    

    componentDidMount(){
        console.log('whatthehellishappening');
        let noteID = this.props.match.params.id;
        const note = this.state.notes.find(
            note => note.id === Number(noteID)
        );
        if (!note) return;
        this.setState({ note });
    }

    handleSubmit = (event) => {
        console.log('handleSubmit');
        event.preventDefault();
        const editedNote = {
            id: this.state.note.id,
            title: this.state.title,
            text: this.state.text
        }
        this.props.editNote(editedNote);
        // window.location = '/'
    }

    handleInputChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };
    render() {
    return (
        <div className="edit-note">
            <h2>Edit Note:</h2>
            <form  onSubmit={this.handleSubmit}>
            <input onChange={this.handleInputChange} type="text" name="title" placeholder="Title" value={this.state.title}/>
            <input onChange={this.handleInputChange} type="text" name="text" placeholder="Note"  value={this.state.text}/>
            <button>Edit</button>
            </form>
        </div>
        );
    }
 }
 export default EditNote;