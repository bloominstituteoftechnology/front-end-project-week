import React from 'react';

import NoteList from './NoteList';
import NoteContainer from '../Styles/NoteContainer';
import { SectionHeading } from '../Styles/GeneralStyles';

export default (props) => (
    <NoteContainer>
        <SectionHeading>Your notes:</SectionHeading>
        <NoteList notes={props.notes} />
    </NoteContainer>
);
