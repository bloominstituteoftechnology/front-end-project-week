import React, { Component } from 'react';
import Styled from 'styled-components';

const Wrapper = Styled.div`
    margin-left: 18%;
`;

class NoteCreateForm extends Component {
    state = {
        id: null,
        title: '',
        textBody: '',
    };

    handleSubmit = e => {
        e.preventDefault();
        const ids = this.props.ids + 1;

        this.setState ({
            id: ids,
        }, () => {this.props.addNote(e, this.state);});

        
    }

    handleChange = e => {
        this.setState ({
            [e.target.name]: e.target.value
        });
    };



    render() {
        return (
            <Wrapper>
                <form>
                    <input type="text" name="title" placeholder="Note Title" value={this.state.title} onChange={this.handleChange} />
                    <input type="text" name="textBody" placeholder="Note Content" value={this.state.textBody} onChange={this.handleChange} />
                    <button onClick={this.handleSubmit}>Save</button>
                </form>
            </Wrapper>
            
        )
    }


};

export default NoteCreateForm;