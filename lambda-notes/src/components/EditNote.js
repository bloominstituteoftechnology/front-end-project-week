import React, { Component } from 'react';
import { updateNote } from '../actions/notesActions';
import { connect } from 'react-redux';
import '../App.css'
import './EditNote.css'


class EditNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editTitle: [],
            editDescription: [],
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.setState(  )
    }
    handleSubmit = event => {
        event.preventDefault();
        const newNote = {
            editTitle: this.state.editTitle,
            editDescription: this.state.editDescription
        }
        this.props.updateNote(newNote);

        this.setState({ editTitle: '', editDescription: '' })
    
    }

    handleChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    render() {
        
        const {title, description} = this.props.note

        return (
            <div className="EditNoteContainer">


                <header className="EditHeader">Edit Note:</header>

                <form className="EditTitleContainer">

                    <input className="editTitleIn"
                        type="text" 
                        name="editTitle" 
                        defaultValue={`${title}`} 
                        onChange={this.handleChange} 
                        onSubmit={this.handleSubmit} 
                    />
                    <input className="EditDes"
                        type="text"
                        name="editDescription"
                        defaultValue={`${description}`}
                        onChange={this.handleChange}
                        onSubmit={this.handleSubmit}
                    />

                    <button className="UpdateBtn" type="button" onClick={this.handleSubmit}><h12>Update</h12></button>

                </form>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps, { updateNote })(EditNote);