import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Styled from 'styled-components';

const Wrapper = Styled.div`
    margin-left: 18%;

`;

export default class NotePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: null,
        };
    }
    

    componentDidMount() {
        const id = this.props.match.params.id;

        this.fetchNote(id);
    };

    fetchNote = id => {
        const note = this.props.notes.map(note => note).filter(note => note.id === parseInt(id, 10));
        this.setState({ note: note[0] })
    };

    render() {
        if (!this.state.note) {
            return <div>No Note Data Found...</div>
        }

        return (
            <Wrapper>
                <h1>{this.state.note.title}</h1>
                <p>{this.state.note.textBody}</p>
            </Wrapper>
        );
    };

};