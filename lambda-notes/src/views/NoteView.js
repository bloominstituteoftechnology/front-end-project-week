import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Div = styled.div`
    position: absolute;
    left: 42.2%;
    top: 23px;
    font-size: 1.2rem;
`;

export default class NoteView extends Component {
    constructor(props) {
        super();
        this.props = props;
        this.state = {
            note: null
        };
    }

    componentDidMount() {
        console.log(this.props);
        const id = this.props.match.params._id;
        this.fetchNote(id);
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

    deleteNote = id => {
        axios
            .delete(
                `https://fe-notes.herokuapp.com/note/delete/${
                    this.state.match.params._id
                }`
            )
            .then();
    };

    render() {
        if (!this.state.note) {
            return <div>Loding Note</div>;
        }

        return (
            <>
                <Div>
                    <Link to={`/edit/${this.props.match.params._id}`}>
                        edit
                    </Link>
                    <Link
                        to={`/`}
                        onClick={() =>
                            this.deleteNote(this.props.match.params._id)
                        }>
                        delete
                    </Link>
                </Div>
                <div>
                    <h1>{this.state.note.title}</h1>
                    <p>{this.state.note.textBody}</p>
                </div>
            </>
        );
    }
}
