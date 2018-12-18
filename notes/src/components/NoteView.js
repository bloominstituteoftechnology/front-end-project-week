import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NoteViewContainer = styled.div`
`

const NoteViewButtons = styled.div`
text-decoration: underline;
text-align: right;
display: flex;
margin-left: 1800px;

p {
    cursor: pointer;
}

p:first-child {
    margin-right: 20px;
}
`

const NoteViewContent = styled.div`
text-align: left;
margin-left: 300px;

p {
    width: 1500px;
}
`

class NoteView extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div>
                {this.props.notes.map(note => {
                    if (this.props.match.params.id === note._id) {
                        return (
                            <NoteViewContainer key={note._id}>
                            <NoteViewButtons>
                                <Link to={`/edit/${note._id}`}>
                                <p>edit</p>
                                </Link>
                                <p>delete</p>
                            </NoteViewButtons>
                            <NoteViewContent>
                                <h2>{note.title}</h2>
                                <p>{note.textBody}</p>
                            </NoteViewContent>
                            </NoteViewContainer>
                        )
                    }
                })}
            </div>
        )
    }
}

export default NoteView;
