import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../Button/Button';
import './EditNote.css';
import { editNote } from '../../actions';

class EditNote extends Component {

        state = {
            title: "",
            body: ""
        }
    

    matchedNote = this.props.notes.filter((note) => 
        {return note._id == this.props.match.params.id})[0]

        
    componentDidMount() {
        this.setState({title: this.matchedNote.title, body: this.matchedNote.body})
        // console.log(this.matchedNote)
    }
    

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    updateHandler = () => {

        let updatedNote = {
            title: this.state.title,
            body: this.state.body,
        }

        let id = this.matchedNote._id
        // console.log(id)
        

        this.props.editNote(id, updatedNote);
        // this.props.history.push(`/note/${this.matchedNote._id}`);   // coming back to noteView after Edit has bugs - does not show the update on noteView
        this.props.history.push('/'); 
    }

    

    render() {
    
        return (

            <div className="editNote-container">

                <div className="edit-note">Edit Note:</div>

                <input 
                    onChange={this.changeHandler} 
                    name="title" 
                    value={this.state.title}
                    className="title-input" 
                    type="text" placeholder="Note Title">
                </input>

                <textarea
                    onChange={this.changeHandler}
                    name="body" 
                    value={this.state.body} 
                    className="content-input" 
                    cols="30" 
                    rows="10" 
                    type="text" 
                    placeholder="Note Content" >
                </textarea>

                <Button 
                    style={{width: "30%"}}
                    onClick={() => this.updateHandler()} text="Update" />

            </div>

        )
        
    }
}



const mapStateToProps = state => {
    return {
        notes: state.notes
    }
}



export default connect(mapStateToProps, { editNote })(EditNote);