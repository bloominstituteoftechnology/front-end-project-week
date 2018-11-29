import React from 'react';
import styled from 'styled-components';

const cardSection=styled.div`
width:80%;
background-color:#ccd3e0;
color:orange;
`

const styledCard=styled.div`
width:30%;
background-color:white;
height:40px;
text-overflow:"-";
border:grey;

`

const NotesList=(props)=>{
    return(
        <cardSection>
            {props.notes.map((note)=>{
    return(
            <styledCard>
                {note.title}
                <hr/>
                {note.textBody}
            </styledCard>

    )
})}
        </cardSection>
    )
    


}
export default NotesList;