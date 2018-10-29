import React from 'react';
import styled from 'styled-components';

const NoteCard=styled.div`

`

class NoteView extends React.Component {
    //need a compnent did mount get request
    constructor(props){
        super(props);
    }

    render(){
        return(
            <NoteCard>

           
            </NoteCard>
        )
    }
}
export default NoteView;

