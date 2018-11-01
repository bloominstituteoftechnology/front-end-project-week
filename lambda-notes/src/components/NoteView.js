import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

class NoteView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            content: ''
        }
    }
        
    componentDidMount() {
        const id = this.props.match.params.id;

        axios
            .get(`http://localhost:3300/api/notes/${id}`)
            .then(res => {
                this.setState({
                    title:res.data.title,
                    content: res.data.content
                })
            })
            .catch(err => console.error('NoteView AXIOS ERROR:', err));
    }

    render() {
        return (
            <NoteViewWrap>
                <LinkWrap>
                    <Link>
                        <NavLink to={`/edit-view/${this.state.id}`} onClick={() => this.editNote({note: this.state})}>edit</NavLink>
                    </Link>
                    <Link>
                        <NavLink to="/list-view" onClick={()=> this.deleteNote({id: this.id})}>delete</NavLink>
                    </Link>
                </LinkWrap>            
                <ContentWrap>
                    <h2>{this.state.title}</h2>
                    <p>{this.state.content}</p>
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
