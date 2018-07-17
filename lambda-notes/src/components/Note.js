import React from 'react'
import Styled from 'styled-components';
import {data} from './../data';
import Sidebar from './Sidebar';

const NoteContainer = Styled.div`
    display: flex;
    flex-direction: column;          
    padding: 10px;
    width: 180px;
    height: 180px;
    border: 1px solid #979797;
    background: #FFFFFF;
    margin-bottom: 20px;
`;

const NoteHeading = Styled.div`
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 18px;
    border-bottom: 1px solid #979797;
    padding-bottom: 5px;

`;

const Body = Styled.p`
    font-family: 'Raleway', sans-serif;
    color: #4A4A4A;
    font-size: 14px;
    overflow: hidden;
`;
const Container = Styled.div`
  display: flex;
`;

const Note = props => {
    return (
        <Container>
            {console.log(props.title)}
        <NoteContainer>
        <NoteHeading>{props.title}</NoteHeading>
        <Body>{props.body}</Body>
        </NoteContainer>
        </Container>
    )
}


export default Note;

/*class Note extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            note: {},
            title: "",
            body: ""
        }
    }
    
    componentDidMount () {
        const id = this.props.match.params.id;
        this.setState({notes: data[this.props.match.params.id-1]})
        
        
console.log(this.props.match.params.id)
console.log(this.state)
console.log(this.state.note)
console.log(this.props.body)
    }

render() {*/