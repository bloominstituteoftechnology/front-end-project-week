import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default class OneNote extends React.Component{
    render(){
        return(
            <StyledNote>
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