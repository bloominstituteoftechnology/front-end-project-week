import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {ComponentBody, ComponentHeader} from './style';
import {editNote, deleteNote} from '../actions';
import {Redirect} from 'react-router-dom';

class ViewNote extends React.Component{
    edit = event =>{
        event.preventDefault();
        this.props.editNote(this.props.index);
    }

    delete = event =>{
        event.preventDefault();
        let newNotes = this.props.notes;
        newNotes.splice(this.props.index, 1);
        this.props.deleteNote(newNotes);
    }

    // goHome = event =>{
    //     event.preventDefault();
    //     this.props.goHome();
    // }
    
    render(){
        if(this.props.editing){
            return <Redirect to='/edit-note' />
        }else if(!this.props.viewing){
            return <Redirect to='/' />
        }
        return(
            <ComponentBody>
                <div className='buttons'>
                    <div className='editButtons' onClick={this.edit}>edit</div>
                    <div className='editButtons' onClick={this.delete}>delete</div>
                </div>
                <ComponentHeader>
                    {this.props.notes[this.props.index].title}
                </ComponentHeader>
                <div className='noteContent'>
                    {this.props.notes[this.props.index].content}
                </div>
            </ComponentBody>
        )
    }
}

const mapDispatchtoProps = state =>({
    notes: state.notes,
    index: state.index,
    editing: state.editing,
    viewing: state.viewing
});

export default connect(mapDispatchtoProps, {editNote, deleteNote})(ViewNote);

ViewNote.propType = {
    index: PropTypes.number
}