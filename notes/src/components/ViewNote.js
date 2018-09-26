import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {NoteStyled, TitleStyled} from './style';

class ViewNote extends React.Component{
    
    render(){
        return(
            <div>
                <NoteStyled>
                    <TitleStyled>
                        {this.props.notes[this.props.index].title}
                    </TitleStyled>
                    <button type='submit' onClick={this.editNote}>Edit</button>
                    <button type='submit' onClick={this.goHome}>Back</button>
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
    index: state.index
});

export default connect(mapDispatchtoProps)(ViewNote);

ViewNote.propType = {
    index: PropTypes.number
}