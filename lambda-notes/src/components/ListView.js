import React, {Component} from 'react';
import styled from 'styled-components';

const NoteList = styled.div `
    display: flex;
    flex-wrap: wrap;
`
class ListView extends Component{
    render(){
        return <div>
            <h3>Your Notes:</h3>
            <NoteList></NoteList>
        </div>
    }
}

export default ListView