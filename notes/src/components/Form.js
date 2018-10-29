import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            added: false,
            note: null,
        }
    }

    componentDidMount() {
        if (this.props.location.state !== undefined) {
            this.setState({
                note: this.props.location.state.note,
                title: this.props.location.state.note.title,
                body: this.props.location.state.note.textBody,
            })
        }
        this.setState({
            added: false,
        })
    }

    changeHandler = event => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    submitHandler = event => {
        event.preventDefault();
        if (this.state.title !== '' && this.state.body !== '') {
          const newNote = {
            tags: [],
            title: this.state.title,
            textBody: this.state.body,
          }
          if (this.state.note !== null) {
            axios.put(`https://fe-notes.herokuapp.com/note/edit/${this.state.note._id}`, newNote)
                 .then(res => {console.log(res)})
                 .catch(err => {console.log(err)})
            alert('Note edited.');
          }
          else {
            axios.post('https://fe-notes.herokuapp.com/note/create', newNote)
                 .then(res => {console.log(res)})
                 .catch(err => console.log(err))
            alert('New note submitted.');
          }
          this.setState({
              added: true,
              title: '',
              body: '',
              note: null,
          })
        }
        else {
          alert('Please fill out the form!')
        }
      }


    render() {
        if (this.state.added === true) {
            return (
                <Redirect to='/'></Redirect>
            )
        }
        return (
            <div className='container'>
                <h1>{this.state.note !== null ? 'Edit Note:' : 'Add Note'}</h1>
                <form onSubmit={this.submitHandler} autoComplete='off'>

                    <input 
                        type='text' 
                        name='title' 
                        placeholder='Note title...' 
                        defaultValue={this.state.note !== null ? this.state.note.title : this.props.value}
                        onChange={this.changeHandler}
                    />

                    <input 
                        type='textarea' 
                        name='body' 
                        placeholder='Note body...' 
                        defaultValue={this.state.note !== null ? this.state.note.textBody : this.props.value}
                        onChange={this.changeHandler}/>
                    
                    <input type='submit' />
                </form>
            </div>
        )
    }
}

export default Form;