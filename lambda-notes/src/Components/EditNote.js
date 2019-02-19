import React, {Component} from 'react'
import Note from './Note'
import '../App.css'
import axios from 'axios'
import {BrowserRouter as Router,Route, NavLink} from 'react-router-dom';

class EditNote extends Component {
    _isMounted = false;
    constructor(props) {
        console.log("props", props)
        super(props);
        this.state = {
            id: props.match.params.id,
            notes:[],
            tags:[],
            title: this.props.location.state.title,
            textBody: this.props.location.state.textBody,
        }
        }

        componentDidMount() {
            this._isMounted = true;
        }

        componentWillUnmount() {
            this._isMounted = false;
        }

        inputHandler = (event) => {
                let value=event.target.value;
                let property= event.target.name;
                this.setState({[property]: value})
        }

        editNote = () => {
            const title = this.state.title;
            const textBody = this.state.textBody;
            axios.put(`http://localhost:4444/note/edit/${this.state.id}`, {title,textBody})
            .then( response => {
                if (this._isMounted){
                this.setState({notes: response.data})
                this.props.history.push(`/note/${this.state.id}`)
            }

            })
            .catch(err => console.log(err))
          }

    render() {

        return (
            <div className='notesContainer'>
            <h2> Edit Note: </h2>
            <div className='notesList'>
            <form><input defaultValue={this.state.title} onChange={this.inputHandler} name='title' className='title' placeholder='Note Title' type='text'></input></form>
            <textarea defaultValue={this.state.textBody} onChange={this.inputHandler} name='textBody' rows="20" cols="100" placeholder='Content Title'></textarea>
            
            <button onClick={this.editNote}>Update</button>
            
            </div>
            </div>
        )
    }
}

export default EditNote