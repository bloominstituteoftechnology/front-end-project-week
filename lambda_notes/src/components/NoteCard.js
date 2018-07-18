import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import posed from 'react-pose';

// const config = {
//     visible: {opacity: 1, translateX: 0, transition: { duration: 1000 }},
//     hidden: {opacity: 0, translateX: 25},
//     draggable: true,
// }

// const Box = posed.div(config);

const StyledNoteCard = styled.div`
    display: flex;
    flex-flow: column;
    align-items: start;
    border: 2px solid grey;
    margin: 2%;
    padding: 2%;
    box-shadow: 5px 10px 50px #888888;
    width: 180px;
    height: 180px;
    overflow: hidden;
    
`;

const StyledTitle = styled.h4`
    border-bottom: 1px solid grey;
    margin: 1%;
    padding: 1%;
    width: 100%;
`;

const StyledText = styled.p`
    font: Raleway Medium;
`;
class NoteCard extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        console.log(this.props);
        const { note } = this.props;
        return(
            <StyledNoteCard>
                <Link to={`/notes/${note._id}`}
                    style={{ textDecoration: 'none', color: 'black' }}>
                    <StyledTitle>{note.title}</StyledTitle>
                    <StyledText>{note.textBody}</StyledText>
                </Link>
            </StyledNoteCard>

    );
    }

}

export default NoteCard;