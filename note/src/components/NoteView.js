import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ViewContainer = styled.div`
    border: 1px solid black;
    margin-left: 20%;
    height: 100vh;
`;

const ViewNav = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const Button = styled.button`
    margin: 10px;
`;

const ViewNote = styled.div`
    margin: 0 5%;
`;

class NoteView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            textBody: ''
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.getNote(id);
    }

    getNote = id => {
        axios
            .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
            .then(response => {
                this.setState({
                    id: response.data._id,
                    title: response.data.title,
                    textBody: response.data.textBody
                })
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <ViewContainer>
                <ViewNav>
                    <Button>edit</Button>
                    <Button>delete</Button>
                </ViewNav>

                <ViewNote>
                    <h3>{this.state.title}</h3>
                    <p>{this.state.textBody}</p>
                </ViewNote>
            </ViewContainer>
        )
    }
}

export default NoteView;