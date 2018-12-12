import React from 'react';
import Note from './Note';
import styled from 'styled-components';

const Div = styled.div`
    width: 96.6%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 37px;
    margin-left: 6px;
`;

const NotesList = props => {
    return (
        <Div>
            {props.notes.length === 0 ? (
                <>
                    <h1>Be patient the hamsters are getting really tired.</h1>
                    <img
                        src="./media/loading.gif"
                        alt="hamster running on wheel"
                    />
                </>
            ) : (
                props.notes.map(note => (
                    <Note key={note._id} note={note} history={props.history} />
                ))
            )}
        </Div>
    );
};

export default NotesList;
