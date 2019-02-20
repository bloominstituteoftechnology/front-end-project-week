import React from 'react';
import '../App.css';
import styled from 'styled-components';

const Content = styled.section`
    width: 100%;
    margin: 5% 3%;
`

const Button = styled.button`
    background: whitesmoke;
    border: 1px solid gray;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`



class EditNote extends React.Component {
    constructor() {
        super();
        this.state = {
            note: '',
            title: '',
            textBody: '',
            _id: ''
        };
    }

    componentDidMount() {
        const note = this.props.notes.find(note => `${note._id}` === this.props.match.params._id);
        
        if (note !== undefined) {
            this.setState({
                title: note.title,
                textBody: note.textBody,
                _id: note._id,
            })
        }
        
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }


    render() {
        return (
            <Content className = 'page-header'>
                <Form onSubmit = {this.props.editNote(this.state._id, {title: this.state.title, textBody: this.state.textBody})}>
                    <input 
                        className = 'input'
                        name = 'title'
                        type = 'text'
                        placeholder = 'note title'
                        onChange = {this.handleChange}
                        value = {this.state.title}
                        />
                    
                    
                    <textarea
                        className = 'text-area' 
                        name = 'textBody'
                        placeholder = 'content' 
                        rows = '25' cols = '50'
                        onChange = {this.handleChange}
                        value = {this.state.textBody}
                    />
                
                    <Button>update</Button>
                </Form>
            </Content>        
        )
    }
}

export default EditNote;