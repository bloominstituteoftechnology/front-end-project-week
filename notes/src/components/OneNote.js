import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {viewNote} from '../actions';

class OneNote extends React.Component{
    view = event =>{
        event.preventDefault();
        this.props.viewNote(this.props.index);
    }

    render(){
        return(
            <StyledNote onClick={this.view}>
                <StyledTitle>
                    {this.props.title}
                </StyledTitle>
                <div className='noteContent'>
                    {this.props.content}
                </div>
            </StyledNote>
        )
    }
}

const mapStateToProps = state =>({
});

export default connect(mapStateToProps, {viewNote})(OneNote);

OneNote.propType = {
    title: PropTypes.string,
    content: PropTypes.string,
}

const StyledNote = styled.div`
    border: 2px solid;
    margin: auto;
    width: 30%;
    padding: 10px;
    margin-top: 10px;
    font-size: 1rem;
`

const StyledTitle = styled.div`
    border-bottom: 1px solid;
    font-weight: bold;
    font-size: 1.2rem;
`