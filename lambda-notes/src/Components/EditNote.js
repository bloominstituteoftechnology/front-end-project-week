import React from 'react';
import axios from 'axios';

class EditNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            notes: []
        }
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get(`http://localhost:3333/notes/`)
            .then(response => {
                console.log('ONE GET: ', response)
                const note = response.data.filter(note => note.id === Number(id))
                const currentNote = note[0]
                this.setState({ id: Number(id), notes: currentNote })
            })
            .catch(err => {console.log(err)})
    }
    editNote = () => {
        const id = this.state.id;
        axios.put(`http://localhost:3333/notes/${id}`, { title: this.state.notes.title, content: this.state.notes.content })
            .then(response => {
                console.log('PUT RESPONSE: ', response)
                this.setState({ id: null, note: [] })
                this.props.handleSetData(response.data)
                alert('NOTE UPDATED: Click \'View Your Notes\' in side banner to see all notes.')
            })
            .catch(err => {console.log(err)})
    }
    handleEditTitle= e => {
        this.setState({notes: {id: this.state.notes.id, title: e.target.value, content: this.state.notes.content}})
    }
    handleEditContent= e => {
        this.setState({notes: {id: this.state.notes.id, title: this.state.notes.title, content: e.target.value}})
    }
    render() {
        return (
            <form className="edit-note">
                <h1>Edit New Note:</h1>
                <input
                    name='titleValue'
                    value={this.state.notes.title}
                    onChange={this.handleEditTitle}
                />
                <textarea
                    name='contentValue'
                    type='text'
                    value={this.state.notes.content}
                    onChange={this.handleEditContent}
                />
                <div onClick={this.editNote} className="custom-button">
                    Update
                </div>
            </form>
        );    
    }
}
 
export default EditNote;