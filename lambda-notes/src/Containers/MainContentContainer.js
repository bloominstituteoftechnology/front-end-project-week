import React from 'react';
import Card from '../Components/CardComponent';
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    justify-content:flex-start;
    width:75%;
    flex-wrap:wrap;
    padding-left:50px;
    padding-right:50px;
`;

const TitleContainer = styled.div`
    display:flex;
    justify-content: flex-start;
    width: 100%;
`
const Title = styled.h2`
`;

const NotesContainer = styled.section`
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    padding-top:25px;
    width: 100%;
    border: 1px solid black;
    padding-left: 10px;
`;

class MainContent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    componentDidMount(){

    }
    render(){
        const { notes } = this.props;
        return(
            <Container>
                <TitleContainer>
                    <Title>Your Notes:</Title>
                </TitleContainer>
                <NotesContainer>
                    {notes.map(note => <Card key={note._id}note={note}/>)}
                </NotesContainer>
            </Container>
        )
    }
}

export default MainContent;