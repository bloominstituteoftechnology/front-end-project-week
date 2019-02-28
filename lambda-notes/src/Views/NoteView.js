import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import CardComponent from '../Components/CardComponent';
import MenuContainer from '../Containers/MenuContainer';
import DeleteView from './DeleteView';
import { Link } from 'react-router-dom';

const Container = styled.div`
    display:flex;
    height:100%;
    width:100%;
    background:#f2f1f2;
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
    padding-right:10px;
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
    cursor: pointer;
`;

const StyledLink = styled(Link)`
    color:black;
    text-decoration:none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;
class NoteView extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            note:null,
            noteView: true,
            delete: false
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

    dontDelete = event => {
        event.preventDefault();
        this.setState({delete: !this.state.delete})
    }

    delete = () => {
        this.props.deleteNote(this.props.match.params.id)
        this.props.history.push('/')
    }

    render(){

        if(!this.state.note){
            return <div>Loading</div>
        }

        return(
            <Container>
                <MenuContainer/>
                {this.state.delete ? <DeleteView deleteNote={this.delete} dontDelete={this.dontDelete}/> : null}
                <NoteViewContainer>
                    <OptionsContainer>
                        <OptionsList>
                            <Options><StyledLink to={`/edit/${this.props.match.params.id}`}>edit</StyledLink></Options>
                            <Options onClick={this.dontDelete}>delete</Options>
                        </OptionsList>
                    </OptionsContainer>
                    <CardComponent note={this.state.note} noteView={this.state.noteView}/>
                </NoteViewContainer>
            </Container>
        )
    }
}

export default NoteView;