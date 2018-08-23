import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const ButtonDelete = styled.button`
    text-decoration: underline;
    border: none;
    background: none;
    font-size: 20px;
`
const LinkDiv = styled.div`
    display: flex;
    justify-content: flex-end;
`

class LambdaView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            notes: []
        };
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.setState({ id: Number(id), notes: this.state.notes });

        axios.get('http://localhost:9000/notes').then(res => {
            console.log('res', res)
            this.setState({ notes: res.data })
        }).catch(err => {
            console.log(err)
        })
    }

    filterNotes = note => {
        if (note.id === this.state.id) {
            return (

                <div key={note.id}>
                    <LinkDiv>
                        <Link to={`/edit/${note.id}`} style={{ color: 'black', marginRight: '10px' }}><ButtonDelete>Edit</ButtonDelete></Link>
                        <ButtonDelete onClick={this.props.toggleDelete}>Delete</ButtonDelete>
                    </LinkDiv>
                    <h1>{note.title}</h1>
                    <p>{note.content}</p>
                </div>
            )
        }
    }

    render() {
        return (
            <div>{this.state.notes.map(this.filterNotes)}</div>
        )
    }
}



export default LambdaView;