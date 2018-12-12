import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    max-height: 900px;
`;

const EditLinks = styled.div`
    font-size: 1.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 7.8%;
    padding-right: 48px;
    width: 17.2%;
    align-self: flex-end;
`;

const H1 = styled.h1`
    font-family: 'Roboto';
    font-weight: 700;
    margin: 5px 0 0 3px;
    font-size: 32px;
    letter-spacing: -1px;
    word-spacing: -2px;
`;

const P = styled.p`
    overflow-y: auto;
    font-size: 21.8px;
    font-family: 'Raleway';
    font-weight: 500;
    margin-top: 33px;
    margin-left: 4px;
    letter-spacing: -1px;
    word-spacing: -1px;
    width: 93%;
    line-height: 35px;
`;

export default class NoteView extends Component {
    constructor(props) {
        super();
        this.props = props;
        this.state = {
            note: this.props.location.query
                ? this.props.location.query.note
                : {}
        };
    }

    componentDidMount() {
        if (!this.props.location.query) {
            const id = this.props.match.params._id;
            this.fetchNote(id);
        }
    }

    fetchNote = id => {
        axios
            .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
            .then(response => {
                this.setState(() => ({ note: response.data }));
            })
            .catch(error => {
                console.error(error);
            });
    };

    render() {
        if (!this.state.note === {}) {
            return <div>Loding Note</div>;
        }

        console.log('noteview:', this.state);
        console.log(this.props);
        return (
            <Div>
                <EditLinks>
                    <Link
                        to={{
                            pathname: `/edit/${this.state.note._id}`,
                            query: { ...this.state.note }
                        }}>
                        edit
                    </Link>
                    <Link to={`/notes/${this.state.note._id}/delete`}>
                        delete
                    </Link>
                </EditLinks>
                <div>
                    <H1>{this.state.note.title}</H1>
                    <P>{this.state.note.textBody}</P>
                </div>
            </Div>
        );
    }
}
