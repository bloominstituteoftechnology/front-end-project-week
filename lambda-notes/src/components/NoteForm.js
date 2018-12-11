import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    justify-content: space-between;
    height: 640px;
`;

const Input = styled.input`
    box-shadow: inset -1px 1px 10px -4px rgba(0, 0, 0, 0.4);
    border: 2px solid rgba(0, 0, 0, 0.2);
    padding: 18px;
    border-radius: 5px;
    font-size: 1.1rem;
    width: 56.2%;
`;

const TextArea = styled.textarea`
    box-shadow: inset -1px 1px 10px -4px rgba(0, 0, 0, 0.4);
    border: 2px solid rgba(0, 0, 0, 0.2);
    padding: 28px 18px 18px 18px;
    border-radius: 5px;
    font-size: 1.2rem;
    height: 485px;
    width: 95.4%;
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
            title: props.title,
            textBody: props.textBody,
            id: props.id,
            tags: props.tags
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
        this.props.post({
            title: this.state.title,
            textBody: this.state.textBody
        });
        this.setState({
            ...this.state,
            title: '',
            textBody: ''
        });
    };

    render() {
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
                <StyledButton text="Save" />
            </Form>
        );
    }
}
