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
        }
    }

    componentDidMount() {
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
    
          axios.post('https://fe-notes.herokuapp.com/note/create', newNote)
               .then(res => {         
                  console.log(res);
               })
               .catch(err => console.log(err))
               this.setState({
                  title: '',
                  body: '',
               })
          this.setState({
              added: true,
          })
        }
        else {
          alert('Please fill out the form!')
        }
        event.target.reset();
      }


    render() {
        if (this.state.added === true) {
            return (
                <Redirect to='/'></Redirect>
            )
        }
        return (
            <div className='container'>
                <h1>Add Item:</h1>
                <form onSubmit={this.submitHandler}>
                    <input type='text' name='title' placeholder='Note title...' value={this.props.value} onChange={this.changeHandler}/>
                    <input type='textarea' name='body' placeholder='Note body...' value={this.props.value} onChange={this.changeHandler}/>
                    <input type='submit' />
                </form>
            </div>
        )
    }
}

export default Form;