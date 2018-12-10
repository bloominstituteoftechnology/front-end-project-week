import React from 'react';
import axios from 'axios';
import DeleteBox from './deleteBox';
import styled from 'styled-components';
import NoteForm from './noteForm';

class ViewNote extends React.Component {
    state = {
        note: {},
        toDelete: false,
        toEdit: false
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
                alert('delete successful');
                this.props.history.push('/myNotes');
            })
            .catch(err=>{
                alert('encountered error trying to delete note');
                console.log(err)})
    }

    render() {
        return (

            <StyledViewNote>
                {this.state.toEdit ? 
                <NoteForm toEdit note={this.state.note} history={this.props.history}/>
            :
                <div>
                    <div className='note-options'>
                        <p onClick={()=>this.setState({toEdit: true})}>edit</p>
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
            }

            </StyledViewNote>
        )
    }
}

let StyledViewNote = styled.div`


    .note-options {
        display: flex;
        justify-content: flex-end;
        padding-right: 50px;

        p {
            padding: 0 10px;
            cursor: pointer;

            &:hover {
                font-weight: bold;
            }
        }
    }
`

export default ViewNote;

