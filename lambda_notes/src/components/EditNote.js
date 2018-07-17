import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class EditNote extends Component {
    constructor(props){
        console.log(props);
        super(props);
        this.state = {
            editTitle: '',
            editBody: '',
            editNote: props.editNote,
            id: props.match.params.id,
            edited: false,
        }
    }

    handleInput = (e) => {
        this.setState({[e.target.name] : e.target.value});
    }

    editNote = (e) => {
        e.preventDefault();
        this.state.editNote(this.state.id, this.state.editTitle, this.state.editBody);
        this.setState({editTitle: '', editBody: '', edited: true});
    }

    render(){
        //Returns us home after an edit
        if(this.state.edited){
            return <Redirect to='/' />;
        }
        return (
            <div>
                <h3>Edit Note:</h3>
                <form onSubmit={this.editNote}>
                    <input type="text"
                            name="editTitle"
                            placeholder="Edit Title"
                            value={this.state.editTitle}
                            onChange={this.handleInput} /><br />
                    <input type="text"
                            name="editBody"
                            placeholder="Edit Content"
                            value={this.state.editBody}
                            onChange={this.handleInput} /><br />
                    <button>Save</button>
                </form>
            </div>
        );
    }
    }

 
export default EditNote;