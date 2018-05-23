import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Button from '../Button/Button';
import './EditNote.css';
import { editNote } from '../../actions';

class EditNote extends Component {
    
    state = {
        title: "",
        body: ""
    }

    matchedNote = this.props.notes.filter((note, index) => 
        {return note.id == this.props.match.params.id})[0]
   
    indexOfMatched = this.props.notes.map((note, index) => {
        if (note.id === this.props.match.params.id) {
            return index;
        }
        })[0]
    

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    updateHandler = () => {
        // this.props.editNote(this.indexOfMatched, this.matchedNote);
        this.props.history.push('/'); // takes back to list view 
    }

    

    render() {
        console.log(this.matchedNote)
        console.log(this.indexOfMatched)
        return (

            <div className="editNote-container">

                <div className="edit-note">Edit Note:</div>

                <input 
                    onChange={this.changeHandler} 
                    name="title" 
                    // defaultValue={this.matchedNote.title} 
                    value={this.state.title}className="title-input" 
                    type="text" placeholder="Note Title">
                </input>

                <textarea
                    onChange={this.changeHandler}
                    name="body" 
                    // defaultValue={this.matchedNote.body} 
                    value={this.state.body} 
                    className="content-input" 
                    cols="30" 
                    rows="10" 
                    type="text" 
                    placeholder="Note Content" >
                </textarea>

                <Button 
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