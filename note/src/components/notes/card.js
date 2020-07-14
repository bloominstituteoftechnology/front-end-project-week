import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const StyledLink = styled(Link)`
    display: block;
    color: black;
    text-decoration: none;
`;

const Card = ({note}) => {
    return(
        <div className="card">
            <div className="card__title">
                <StyledLink to={`/note/${note.id}`}>
                    {note.title} 
                </StyledLink>
            </div>
            <div className="card__text">
                {note.text}            
            </div>
        </div>
    )
}
export default Card;
