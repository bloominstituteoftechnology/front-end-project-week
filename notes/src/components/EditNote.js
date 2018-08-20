import React from 'react';
import { editNote } from '../actions'; //takes in note as param
import { connect } from 'net';

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
            <div className="add-note">
                <h3>Create New Note:</h3>
                <form onSubmit={this.props.editNote}>
                    <input onChange={this.handleFormInput} type="text" placeholder={`${this.props.title}`} id="title" />
                    <input onChange={this.handleFormInput} type="text" placeholder={`${this.props.textBody}`} id="textBody" />
                    <button>Save</button>
                </form>

            </div>
        )
    }
}

const mapStateToProps= (state) => {
    return (
        {
            editNote: state.editNote
        }
    )
}

export default connect(mapStateToProps, { editNote })(EditNote);