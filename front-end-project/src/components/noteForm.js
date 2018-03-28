import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions';

class NoteForm extends Component {
    state={
        title: '',
        note: '',
        id: '',
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };
    
    submitNote = (event) => {
        this.props.addNote(this.state);
        this.setState({
            title:'',
            note:'',
        });
    };

    render () {
        return (
            <div className="col-one-half friend-form">
                <form>
                    <input
                        onChange={this.handleChange}
                        type="text"
                        name="title"
                        placeholder="title"
                    />

                    <input
                        onChange={this.handleChange}
                        type="text"
                        name="note"
                        placeholder="note"
                    />
            
                    <button type="submit" onClick={this.submitNote}>
                        Add Note
                    </button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {}
};

export default connect(mapStateToProps, {addNote})(NoteForm)