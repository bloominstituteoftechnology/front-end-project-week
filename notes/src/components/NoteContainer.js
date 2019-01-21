import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components'

import '../components/layout.css'

const Header = styled.h2`
    border-bottom: 1px solid black;
    font-size: 20px;
`;

const NoteContainer = props => {
     return(
         <div className='noteInfo'>
             <Link to ={`/view-note/${props.id}`}>
             <Header>{props.title}</Header>
             <p>{`${props.body.slice(0, 200)}...`}</p>
             </Link>
             
         </div>
     )
}

export default NoteContainer;