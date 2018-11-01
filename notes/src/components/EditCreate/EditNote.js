import React, { Component } from 'react';
import { connect } from 'react-redux';

//styling
import './EditCreate.css';

class EditNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.note.title,
            textBody: this.props.note.textBody
        }
    }
    
    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className='notePage'>
                <h3>{this.props.editNote ? 'Edit Note:' : 'Create New Note:'}</h3>
                <form className='noteEntry'>
                    <input
                        type='text'
                        placeholder='Note Title'
                        name='title'
                        onChange={this.changeHandler}
                        value={this.state.title}
                    />
                    <textarea
                        rows='25'
                        placeholder='Note Content'
                        name='textBody'
                        onChange={this.changeHandler}
                        value={this.state.textBody}
                    >
    
                    </textarea>
                    <button className='noteSave'>{this.props.editNote ? 'Update' : 'Save'}</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        note: state.note,
        editNote: state.editNote
    }
}
 
export default connect(mapStateToProps)(EditNote);