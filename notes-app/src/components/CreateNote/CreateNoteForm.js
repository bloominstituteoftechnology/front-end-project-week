import React, { Component } from 'react';
import { Route,NavLink } from "react-router-dom";

class CreateNoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            textBody:''
        };
    }

    componentDidMount(){
        let editNote = this.props.editNote;
        console.log(editNote);

        if(editNote.title){
            this.setState({
                title: editNote.title,
                textBody: editNote.textBody
            })
            
        }
    }
    componentWillUnmount(){
        this.props.resetEdit();
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };

    handleSumbit = e => {
        e.preventDefault();

        if(!this.props.editNote.title){
            this.props.addToList(this.state);
        }else{
            this.props.updateToList(this.props.editNote._id, this.state)
        }
        this.props.history.push('/');
        
        this.setState({
            title: '',
            textBody:''
        })
    }

    render() {
        return (
            <div className='NoteForm'>
                <div className='links'>
                    {this.props.editNote.title 
                    ?<NavLink to='/' onClick={(e) =>{
                        e.preventDefault();
                        this.props.history.goBack();
                    }}>View Note</NavLink> 
                    :null
                    }
                    
                </div>
                <h2>{this.props.editNote.title ? 'Edit Note' : 'Create New Note'}:</h2>
                <form onSubmit={this.handleSumbit}>
                    <input
                        className='inputs' 
                        onChange={this.handleChange}
                        placeholder='title'
                        value={this.state.title}
                        name='title'
                    />
                    <textarea
                        className='inputs'
                        name='textBody' 
                        onChange={this.handleChange} 
                        value={this.state.textBody} 
                        placeholder='content'></textarea>
                    <button type='submit'>Save</button>
                </form>
            </div>
        )
    }
}

export default CreateNoteForm;