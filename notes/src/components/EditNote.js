import React from 'react';
import '../App.css';
import styled from 'styled-components';

const Content = styled.section`
    width: 100%;
    margin: 5% 3%;
`

const Button = styled.button`
    background: rgb(22, 175, 180);
    border: 1px solid gray;
    border-radius: 1px;
    color: white;
    margin-top: 3%;
    padding: .75em 0em;
    width: 150px;
    font-weight: bold;
    font-size: 13px;
    width: 160px;
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
                        placeholder = 'Note Title'
                        onChange = {this.handleChange}
                        value = {this.state.title}
                        />
                    
                    
                    <textarea
                        className = 'text-area' 
                        name = 'textBody'
                        placeholder = 'Note Content' 
                        rows = '25' cols = '50'
                        onChange = {this.handleChange}
                        value = {this.state.textBody}
                    />
                
                    <Button>Update</Button>
                </Form>
            </Content>        
        )
    }
}

export default EditNote;