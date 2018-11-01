import React, { Component } from 'react';
import { connect } from 'react-redux';

//styling
import './EditCreate.css';

class EditNote extends Component {
    render() {
        return (
            <div className='notePage'>
                <h3>{this.props.editNote ? 'Edit Note:' : 'Create New Note:'}</h3>
                <form className='noteEntry'>
                    <input
                        type='text'
                        placeholder='Note Title'
                        name='title'
                        value={this.props.note.title}
                        // value={props.editNote ? props.note.title : 'dfgs'}
                    />
                    <textarea
                        rows='25'
                        placeholder='Note Content'
                        name='textBody'
                        value={this.props.note.textBody}
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