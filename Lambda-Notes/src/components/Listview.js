import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';

// list view styled components

const ListContainer = styled.div`
    padding-top: 45px;
`

const Header = styled.h2`
    margin-bottom: 30px;
    font-weight: bold;
    color: #4A494A;
    font-size: 1.4rem;
`

const PreviewContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Title = styled.h3`
    border-bottom: 1px solid #CACACA;
    padding-bottom: 10px;
    margin-bottom: 10px;
    font-size: 1.4rem;
    font-weight: bold;
    width: 100%;
`

const Body = styled.p`
    font-size: 0.8rem;
    line-height: 1.2;
    display: block;
    overflow: hidden;
    white-space: pre-line;
`

const Note = styled(Link)`
    border: 1px solid #C0C0C0;
    background: white;
    margin: 0 20px 30px 0;
    text-decoration: none;
    color: black;
    padding: 20px;
    display: flex;
    flex-direction: column;
    width: 20%;
    height: 300px;
`

class ListView extends Component {
     constructor(props){
        super(props);
        this.state = {
            notes: [],
            loading: true,
        }
    }
    
    componentDidMount() {
        axios
            .get(`https://fe-notes.herokuapp.com/note/get/all`)
            .then(response => {
                this.setState({
                    notes: response.data,
                    loading: false,
                });
            })
            .catch(err => console.log(err));
    }
    
    
    
    render() {
        return (
            <ListContainer>
                {this.props.loading ? <Header>Loading...</Header> : <Header>Your Notes:</Header>}
                <PreviewContainer>
                    {this.state.notes.map(note => 
                        <Note to={`/notes/${note._id}`}>
                            <Title>{note.title}</Title>
                            <Body>{note.textBody}</Body>
                        </Note>
                    )}
                </PreviewContainer>
            </ListContainer>
        )
    }
}

export default ListView;