import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
    display: block;
    color: black;
    text-decoration: none;
`;
const ReadNote = ({match, notes}) => {
    return(
        <div className="notes">
        <div className="notes__edit">
            <StyledLink to={`/note/${match.params.id}/edit`}> Edit</StyledLink>
            <StyledLink to={`/note/${match.params.id}/delete`}> delete</StyledLink>
        </div>
            {notes.map(note => {
                if(note.id === Number(match.params.id)){
                    return(
                        <div className="note" key={note.id}>
                            <div className="note__title">
                                {note.title}
                            </div>
                            <div className="note__content">
                                {note.text}
                            </div>
                        </div>
                    )
                }
            } )}
        </div>
    )
}
export default ReadNote;