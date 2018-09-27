import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {viewNote} from '../actions';
import {NoteStyled, TitleStyled} from './style';
import {withRouter, Redirect} from 'react-router-dom';

class OneNote extends React.Component{
    view = event =>{
        event.preventDefault();
        this.props.viewNote(this.props.index);
    }

    render(){
        if(this.props.viewing){
            return <Redirect to='/view-note' />
        }
        return(
            <NoteStyled onClick={this.view}>
                <TitleStyled>
                    {this.props.title}
                </TitleStyled>
                <div className='noteContent'>
                    {this.props.content}
                </div>
            </NoteStyled>
        )
    }
}

const mapStateToProps = state =>({
    viewing: state.viewing
});

export default withRouter(connect(mapStateToProps, {viewNote})(OneNote));

OneNote.propType = {
    title: PropTypes.string,
    content: PropTypes.string,
}