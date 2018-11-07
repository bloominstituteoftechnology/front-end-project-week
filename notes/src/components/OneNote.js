import React, {Component} from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';


class OneNote extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            notes: this.props.notes
         }
    }
    componentDidMount = () => {
      this.fetchNote(this.props.match.params.id);
      console.log(this.props.match.params.id);
      console.log(this.state.notes)
    }
    componentWillReceiveProps(newProps) {
        if (this.props.match.params.id !== newProps.match.params.id) {
            this.fetchNote(newProps.match.params.id)
        }
    }
    fetchNote = id => {
        let oneNote = {
            tags: this.state.tags,
            title: this.state.title,
            textBody: this.state.textBody
        }
        axios.get(`https://fe-notes.herokuapp.com/note/get/${id}`, oneNote)
        .then(response => {
            this.setState({ notes: response.data })
            console.log(response.data)
        })
    }
    deleteSingleNote = event => {
        this.props.deleteNote(this.state.notes._id);
        event.preventDefault();
    }
    
    render() { 
        return (
            <div> 
                <div>
                    {this.state.notes.title}
                    {this.state.notes.textBody}
                </div>  
                <button onClick={this.deleteSingleNote}>Delete Note</button>
                <NavLink to={`/notes/${this.state.notes._id}/edit`}>
                <button>Edit Note</button>
                </NavLink>
            </div> );
    }
}

 
export default OneNote;