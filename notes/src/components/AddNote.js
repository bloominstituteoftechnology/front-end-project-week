import React from 'react';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';
import { addNote } from '../actions'; //takes in note as param
import { connect } from 'react-redux'; 

class AddNote extends React.Component {
    constructor(){
        super();
        this.state= {
            title: '',
            textBody: ''
        }
    }
    handleFormInput = e=> {
        e.preventDefault();
        this.setState({ [e.target.id]: e.target.value });
    }
    render(){
        return(
            <div className="add-note">
                <NavBar />
                <h3>Create New Note:</h3>
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    this.props.addNote(this.state)}
                }>
                    <input onChange={this.handleFormInput} type="text" placeholder="New Title" id="title" />
                    <input onChange={this.handleFormInput} type="text" placeholder="Note Content" id="textBody" />
                    <div className="btn"><Link to="/notes">Save</Link>
                    </div>
                </form>

            </div>
        )
    }
}

const mapStateToProps= (state) => {
    return (
        {
            addNote: state.noteReducer.addNote
        }
    )
} 

export default connect(mapStateToProps, { addNote })(AddNote);