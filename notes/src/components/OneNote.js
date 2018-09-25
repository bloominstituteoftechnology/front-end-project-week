import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default class OneNote extends React.Component{
    render(){
        return(
            <StyledNote>
                <div className='title'>
                    {this.props.title}
                </div>
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
    border: 1px solid;
    margin: 10px;
`