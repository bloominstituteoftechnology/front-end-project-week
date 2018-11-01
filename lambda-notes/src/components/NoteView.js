import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

class NoteView extends Component {
    constructor(props) {
        super(props);
    }
    
    // eslint-disable-next-line
    // const note = this.state.notes.find(note => note.id == parseInt(this.state.match.params.id, 10));
    
    componentDidMount() {
        axios
            .get(`http://localhost:3300/api/notes/:id`)
            .then(res => {
                console.log('noteview', res.data)
                this.setState({
                    note: res.data,
                    title:res.data.title,
                    content: res.data.content
                })
            })
            .catch(err => console.error('NoteView AXIOS ERROR:', err));
    }

    render() {
        console.log('STATE *****', this.state, this.props)
        return (
            <NoteViewWrap>
                <LinkWrap>
                    <Link>
                        <NavLink to={`/edit-view/${this.props.notes.id}`} onClick={() => this.props.editNote(this.props.notes.id)}>edit</NavLink>
                    </Link>
                    <Link>
                        <NavLink to="/list-view" onClick={()=> this.props.deleteNote(this.props.notes.id)}>delete</NavLink>
                    </Link>
                </LinkWrap>            
                <ContentWrap>
                    <h2>{this.props.note.title}</h2>
                    <p>{this.props.note.content}</p>
                </ContentWrap>    
            </NoteViewWrap>
        )
    }
}

const NoteViewWrap = styled.div`
    display:flex;
    flex-direction:column;
    margin:10px 5%;
`;

const LinkWrap = styled.div`
    display:flex;
    flex-direction:row;  
    justify-content: flex-end;  
`;

const Link = styled.a`
    padding:6px 1.5%;
    font-weight: bold;
    font-size: .85rem;
    color:black;
`;

const ContentWrap = styled.div`
    margin-top: 20px;
    line-height: 24px;
`;


export default NoteView;
