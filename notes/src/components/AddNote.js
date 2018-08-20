import React from 'react';
import { addNote } from '../actions'; //takes in note as param
import { connect } from 'net';

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
                <h3>Create New Note:</h3>
                <form onSubmit={this.props.addNote}>
                    <input onChange={this.handleFormInput} type="text" placeholder="New Title" id="title" />
                    <input onChange={this.handleFormInput} type="text" placeholder="Note Content" id="textBody" />
                    <button>Save</button>
                </form>

            </div>
        )
    }
}

const mapStateToProps= (state) => {
    return (
        {
            addNote: state.addNote
        }
    )
}

export default connect(mapStateToProps, { addNote })(AddNote);