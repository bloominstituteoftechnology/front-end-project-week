import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import { Redirect } from 'react-router-dom';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 36px;
    justify-content: space-between;
    height: 640px;
`;

const Input = styled.input`
    box-shadow: inset -1px 1px 10px -4px rgba(0, 0, 0, 0.4);
    border: 2px solid rgba(0, 0, 0, 0.2);
    padding: 17px;
    border-radius: 5px;
    font-size: 1.1rem;
    width: 56.2%;
`;

const TextArea = styled.textarea`
    box-shadow: inset -1px 1px 10px -4px rgba(0, 0, 0, 0.4);
    border: 2px solid rgba(0, 0, 0, 0.2);
    padding: 28px 18px 18px 17px;
    border-radius: 5px;
    font-size: 1.2rem;
    height: 485px;
    width: 95.2%;
    display: flex;
    resize: none;
    overflow-y: auto;
`;

const StyledButton = styled(Button)`
    width: 29.5%;
`;

export default class NoteForm extends Component {
    constructor(props) {
        super();
        this.props = props;
        this.state = {
            ...this.props.query
        };
    }

    handleChange = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    };

    submit = e => {
        e.preventDefault();
        console.log(this);
        this.props.submit(
            {
                title: this.state.title,
                textBody: this.state.textBody
            },
            this.state._id
        );
        this.setState({
            ...this.state,
            title: '',
            textBody: '',
            edited: true
        });
    };

    render() {
        console.log('noteform props:', this.props);
        if (this.props.match.path === '/edit/:_id' && this.state.edited) {
            return <Redirect to="/" />;
        }
        return (
            <Form onSubmit={this.submit}>
                <Input
                    value={this.state.title}
                    placeholder="Note Title"
                    name="title"
                    onChange={this.handleChange}
                />
                <TextArea
                    value={this.state.textBody}
                    name="textBody"
                    type="textarea"
                    placeholder="Note Content"
                    onChange={this.handleChange}
                />
                <StyledButton text={this.props.buttonText} />
            </Form>
        );
    }
}
