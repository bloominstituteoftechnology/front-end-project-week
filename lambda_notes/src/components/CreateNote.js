import React, { Component } from 'react';
import Redirect from 'react-router-dom/Redirect';
import { addNote, getNextId } from './exampleNotes';

class CreateNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
        title:'',
        text:''
    };
    this.onClick = this.onClick.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onDataChange = this.onDataChange.bind(this);
    }

  onNameChange(e) {
    this.setState({title:e.target.value});
  }

  onDataChange(e) {
    this.setState({text:e.target.value});
  }

  onClick(e) {
    const title = this.state.title;
    const text = this.state.text;
    if (title !== '' && text !== '') {
      addNote({
        id: Math.floor(Math.random() * 1000),
        title: title,
        text: text
      });
    }
  }
    // constructor(props) {
    //     super(props);
    //     this.updateNote = this.updateNote.bind(this);
    //     this.save = this.save.bind(this);
    // }

    // // change(event) {
    // //     const newState = {};
    // //     newState[event.target.id] = event.target.value;
    // //     this.setState(newState);
    // // }
    // updateNote = (event) => {
    //   let { name, value } = event.target;
    //   this.setState({ [name]: value });
    // };

    // // createNote() {
    // //   if (this.state.notes === '') {return}
    // //     let notesArr = this.state.notes;
    // //     notesArr.push(this.state.notes);
    // //     this.setState({
    // //         title: '',
    // //         text: ''
    // //     }
    // // )};
    // save(event) {
    //     event.preventDefault();
    //         axios.post('http://localhost:3000/list/', this.state).then(() => {
    //           window.location.href = '/';
    //         })
    //         .catch((error) => {
    //           alert('Server error: Please try again later.');
    //         });
    //     }

//   createNote = (event) => {
//       event.preventDefault();
//       this.props.newNote(this.state);
//       this.setState({ redirect: true });
//     };


render() {
    return (
        <div className="Notes">
            <form id="form" onSubmit={this.onClick}>
                <h1>Create New Note:</h1><br/>
                <input
                    className='form-control'
                    type='text'
                    placeholder='Note Title'
                    name='title'
                    onChange={this.onNameChange}
                    value={this.state.title}
                />
                <input
                    className='form-control1'
                    type='text'
                    placeholder='Note Content'
                    name='text'
                    onChange={this.onDataChange}
                    value={this.state.text}
                />
                <button id='save' type='submit' onClick={this.onClick}><b>Save</b></button>
            </form>
        </div>
    );
  }


}

export default CreateNote;