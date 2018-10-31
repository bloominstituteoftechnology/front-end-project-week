import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            tags: '',
            added: false,
            note: null,
        }
    }

    // if the user has clicked on an edit button, some data will get filled on state related to that note.
    componentDidMount() {
        if (this.props.location.state !== undefined) {
            this.setState({
                note: this.props.location.state.note,
                title: this.props.location.state.note.title,
                body: this.props.location.state.note.textBody,
                tags: this.props.location.state.note.tags,
            })
        }
        this.setState({
            added: false,
        })
    }

    // standard change handler.
    changeHandler = event => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    // controls add and edit functionality, with blank form error handling.
    submitHandler = event => {
        event.preventDefault();
        if (this.state.title !== '' && this.state.body !== '') {
          // create a new note
          // const tags = this.state.tags.split(',')
          const newNote = {
            // tags: tags,
            title: this.state.title,
            textBody: this.state.body,
          }
          console.log(newNote)
          // if there's a note on state to edit, start PUT
          if (this.state.note !== null) {
            axios.put(`https://fe-notes.herokuapp.com/note/edit/${this.state.note._id}`, newNote)
                 .then(res => {console.log(res)})
                 .catch(err => {console.log(err)})
          }
          // else POST
          else {
            axios.post('https://fe-notes.herokuapp.com/note/create', newNote)
                 .then(res => {console.log(res)})
                 .catch(err => console.log(err))
          }
          // blank out everything.
          this.setState({
              added: true,
              title: '',
              body: '',
              note: null,
          })
        }
        // alert user to fill form if not complete
        else {
          alert('Please fill out the form!')
        }
      }


    render() {
        // once form is submitted, redirect home.
        // if (this.state.added === true) {
        //     return (
        //         <Redirect to='/'></Redirect>
        //     )
        // }
        return (
            <div className='container'>
                <h1>{this.state.note !== null ? 'Edit Note:' : 'Add Note:'}</h1>
                <form onSubmit={this.submitHandler} autoComplete='off' className='fullpage'>

                    <input 
                        className='title'
                        type='text' 
                        name='title' 
                        placeholder='Title your note...' 
                        defaultValue={this.state.note !== null ? this.state.note.title : this.props.value}
                        onChange={this.changeHandler}
                    />

                    <textarea  
                        className='body'
                        name='body' 
                        placeholder='The main text of your note goes here...' 
                        value={this.state.note !== null ? this.state.body : this.props.value}
                        onChange={this.changeHandler}>
                    </textarea>

                    <input 
                        className='tags'
                        type='text' 
                        name='tags' 
                        placeholder='Tag your note (comma-separated)' 
                        defaultValue={this.state.note !== null ? this.state.note.tags : this.props.value}
                        onChange={this.changeHandler}
                    />
                    
                    <input type='submit' />
                </form>
            </div>
        )
    }
}

export default Form;