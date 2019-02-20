import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import CardComponent from '../Components/CardComponent';
import MenuContainer from '../Containers/MenuContainer';
import { Link } from 'react-router-dom';

const Container = styled.div`
    display:flex;
    width:100%;
`
const NoteViewContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    width:100%;
`;
const OptionsContainer = styled.div`
    display:flex;
    width:100%;
    justify-content:flex-end;
    height:100px;
`
const OptionsList = styled.ul`
    display:flex;
    flex-wrap:wrap;
    list-style-type:none;
    height:30px;
`;

const Options = styled.li`
    display:flex;
    margin-left:5px;
    height:5px;
`;

class NoteView extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            note:null,
            noteView: true
        }
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        this.fetchNote(id);
    }

    fetchNote = id => {
        axios
        .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
        .then(res => {
            this.setState({
                note: res.data
            })
        })
        .catch(err => {
            console.error(err)
        })
    }
    render(){

        if(!this.state.note){
            return <div>Loading</div>
        }

        return(
            <Container>
                <MenuContainer/>
                <NoteViewContainer>
                    <OptionsContainer>
                        <OptionsList>
                            <Options><Link to={`/edit/${this.props.match.params.id}`}>edit</Link></Options>
                            <Options>delete</Options>
                        </OptionsList>
                    </OptionsContainer>
                    <CardComponent note={this.state.note} noteView={this.state.noteView}/>
                </NoteViewContainer>
            </Container>
        )
    }
}

export default NoteView;