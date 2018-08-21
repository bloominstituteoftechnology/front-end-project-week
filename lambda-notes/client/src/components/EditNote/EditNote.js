import React, { Component } from 'react';
import './index.css'
import { connect } from 'react-redux';
import { editNote } from '../../actions/index';


class EditNote extends Component {
    state = {
        note : {},
        title : '',
        body: '',
        newNote : {}
    }

    componentDidMount()  {
        const id = this.props.match.params.id
        console.log(this.props.notes)
        let matched = this.props.notes.filter( note => note.id === id)
         console.log(matched)
         const [ note ] = matched
        this.setState({ note, title : note.title, body : note.body })
    }
    handleInputChange = event =>{
        event.preventDefault();
        this.setState({[event.target.name] : event.target.value } )
    }

    handleUpdate = () =>{

       let newNote = {...this.state.note, title : this.state.title, body : this.state.body }
       console.log("NEW_NOTE",newNote)
       this.props.editNote(newNote)


    }
    render() {
        return (
            <div className='editNote-container'>
                <div className='note-Header'><h3>Edit Note:</h3></div>
                <div className='form-container'>
                    <input type="text"
                    name="title"
                    placeholder='Note Tittle'
                    onChange={this.handleInputChange}
                    value={this.state.title}/>
                    <textarea
                    name="body"
                    cols="30" rows="30"
                    placeholder='Note Body'
                    onChange = {this.handleInputChange}
                    value={this.state.body}
                    ></textarea>
                    <div className="submit" onClick={ this.handleUpdate }>Update</div>
                </div>
            </div>

        );
    }
}
const mapStateToProps = state =>({
    notes : state
})

export default connect(mapStateToProps,{ editNote })(EditNote);