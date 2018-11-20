import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Markup } from 'interweave';

import { HomeContainer } from './Home';

const MainSection = styled.section`
    display: flex;
    justify-content: space-between;
    > div {
        display: flex;
        justify-content: space-between;
        &:last-of-type {
            width: 10%;
        }
        > h1 {
            font-size: 34px;
            color: #545252;
            align-self: flex-end
        }
        > span {
            align-self: flex-start;
            font-size: 20px;
            font-weight: bolder;
            text-decoration: underline;
            color: #545252;
            cursor: pointer;
        }
    }
`

const NoteProfile = props => {
    const note = props.notes.find(note => `${note._id}` === props.match.params.id);
    if(!note) return null;
    return  <HomeContainer>
                <MainSection>
                    <div>
                        <h1>{note.title}</h1>
                    </div>
                    <div>
                        <span onClick={() => props.history.push(`/note/${note._id}/edit`)} >edit</span>
                        <span onClick={props.toggle} >delete</span>
                    </div>
                </MainSection>
                <Markup content={note.textBody} />           
            </HomeContainer>
}
const mapStateToProps = state => {
    return {notes: state.notes}
}

export default connect(mapStateToProps)(NoteProfile);