import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const URL = 'https://dakine-lambdanotes-api.herokuapp.com/notes/';


class EditNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            id: 0
         }
    }

componentDidMount () {
    const id = Number(this.props.match.params.id);
        axios.get(URL)
        .then(response => {
            console.log(response);
            console.log(response.data);
            let match = response.data.find(note => note.id === id);
            this.setState({
                title: match.title,
                content: match.content,
                id: match.id
            });
        })
        .catch(error => {
            console.log(error);
        })
    }

    change = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    update = (event) => {
        event.preventDefault();
        const updatedNote = {
            title: this.state.title,
            content: this.state.content
        }
        axios.put(`${URL}${this.state.id}`, updatedNote)
        .then(response => {
            console.log(response);
            console.log(response.data);
            window.location = '/notes';
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {

        return (
                <div className="new-note-container">
                 <div className="new-note">
                <h1 className="new-note-header">Edit Your Note:</h1>
                </div>
 <div className="new-note-button">
                <button type='submit' onClick={this.update}> <Link to ='/notes' lassName="new-note-button">Save</Link></button>
</div>
            <div className="edit-note-form-container">
            <form className="edit-form-container" >
                <div className="new-note-title">
                <input
                    type='text'
                    name='title'
                    placeholder='Note title'
                    value={this.state.title}
                    onChange={this.change}
                />
                </div>
                <div>
                <textarea className="new-note-content"
                    type='text'
                    name='content'
                    placeholder='Note content'
                    value={this.state.content}
                    onChange={this.change}
                />
                </div>

           {/* <button type='submit' onClick={this.update}><Link to='/notes'>Save</Link></button>*/}
            </form>
            </div>
            </div>
         );
    }
}

export default EditNote;
