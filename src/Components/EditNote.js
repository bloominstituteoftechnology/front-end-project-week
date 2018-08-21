import React from 'react';
import axios from 'axios';

class EditNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            notes: {
                id: null,
                title: '',
                content: ''
            }
        }
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get(`http://localhost:8000/notes`)
            .then(response => {
                const note = response.data.filter(note => note.id === Number(id))
                const currentNote = note[0]
                this.setState({ id: Number(id), notes: currentNote })
            })
            .catch(err => {console.log(err)})
    }
    editNote = () => {
        const id = this.props.match.params.id;
        axios.put(`http://localhost:8000/notes/${id}`, { title: this.state.notes.title, content: this.state.notes.content })
            .then(response => {
                this.props.history.push('/')
                this.setState({ id: null, note: {id: null, title: '', content: ''} })
                this.props.handleRefresh()
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
                {/* <a href='/'> */}
                    <div onClick={this.editNote} className="custom-button">
                        Update
                    </div>
                {/* </a> */}
            </form>
        );    
    }
}
 
export default EditNote;