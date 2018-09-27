import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {NoteStyled, TitleStyled} from './style';
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
            <div>
                <NoteStyled>
                    <TitleStyled>
                        {this.props.notes[this.props.index].title}
                    </TitleStyled>
                    <button type='submit' onClick={this.edit}>edit</button>
                    <button type='submit' onClick={this.delete}>delete</button>
                    <div className='noteContent'>
                        {this.props.notes[this.props.index].content}
                    </div>
                </NoteStyled>
            </div>
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