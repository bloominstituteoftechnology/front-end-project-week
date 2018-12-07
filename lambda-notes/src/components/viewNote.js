import React from 'react';
import axios from 'axios';
import DeleteBox from './deleteBox';

class ViewNote extends React.Component {
    state = {
        note: {},
        toEdit: false,
        toDelete: false
    }

    componentDidMount() {
        console.log(this.props)
        axios
            .get(`https://fe-notes.herokuapp.com/note/get/${this.props.match.params.id}`)
            .then(res => this.setState({note: res.data}))
            .catch(err => console.log(err));
    }

    toggleDelete = () => {
        this.setState({toDelete: !this.state.toDelete})
    }

    deleteNote = () => {
        axios
            .delete(`https://fe-notes.herokuapp.com/note/delete/${this.state.note._id}`)
            .then(res => {
                console.log(res);
                alert('delete successful');
                this.props.history.push('/myNotes');
            })
    }

    render() {
        return (

            <div>
                <div className='note-options'>
                    <p onClick={()=>this.props.history.push(`/myNotes/${this.state.note._id}/edit`)}>edit</p>
                    <p onClick={this.toggleDelete}>delete</p>
                </div>
                
                {this.state.toDelete ? 
                    <DeleteBox 
                        toggleDelete={this.toggleDelete}
                        deleteNote={this.deleteNote} />
                
                : null }

                <div className='expanded-note'>
                    <h1>{this.state.note.title}</h1>
                    <p>{this.state.note.textBody}</p>
                </div>
            </div>
        )
    }
}

export default ViewNote;

