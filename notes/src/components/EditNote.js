import React from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import { editNote } from '../actions'; 
import { connect } from 'react-redux';

class EditNote extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            title: this.props.title,
            textBody: this.props.textBody
        }
    }
    handleFormInput = e=> {
        e.preventDefault();
        this.setState({ [e.target.id]: e.target.value });
    }
    render(){
        return(
            <div className="edit-note">
                <NavBar />
                <h3>Edit this Note:</h3>
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    this.props.editNote(this.state, this.props.note._id)}
                }>
                    <input onChange={this.handleFormInput} type="text" placeholder={`${this.props.note.title}`} id="title" />
                    <input onChange={this.handleFormInput} type="text" placeholder={`${this.props.note.textBody}`} id="textBody" />
                    <div className="btn" onClick={(e)=>{
                            e.preventDefault();
                            this.props.editNote(this.state, this.props.note._id)}
                        }><Link to="/notes">Save</Link></div>
                </form>

            </div>
        )
    }
}

const mapStateToProps= (state) => {
    return (
        {
            editNote: state.noteReducer.editNote,
            note: state.noteReducer.note
        }
    )
}

export default connect(mapStateToProps, { editNote })(EditNote);