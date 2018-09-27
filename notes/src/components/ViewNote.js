import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {NoteStyled, TitleStyled} from './style';
import {editNote} from '../actions';
import {Redirect} from 'react-router-dom';

class ViewNote extends React.Component{
    edit = event =>{
        event.preventDefault();
        this.props.editNote(this.props.index);
    }

    // goHome = event =>{
    //     event.preventDefault();
    //     this.props.goHome();
    // }
    
    render(){
        if(this.props.editing){
            return <Redirect to='/edit-note' />
        }
        return(
            <div>
                <NoteStyled>
                    <TitleStyled>
                        {this.props.notes[this.props.index].title}
                    </TitleStyled>
                    <button type='submit' onClick={this.edit}>Edit</button>
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
    editing: state.editing
});

export default connect(mapDispatchtoProps, {editNote})(ViewNote);

ViewNote.propType = {
    index: PropTypes.number
}