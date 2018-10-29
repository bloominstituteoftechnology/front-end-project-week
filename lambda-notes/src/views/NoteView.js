import React from 'react';
import styled from 'styled-components';

const NoteCard=styled.div`

`

class NoteView extends React.Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <NoteCard>

            <h1>hi</h1>

            </NoteCard>
        )
    }
}
export default NoteView;